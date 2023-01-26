<?php

namespace Heidkaemper\Toolbar;

use Facades\Statamic\View\Cascade;
use Symfony\Component\HttpFoundation\Response;
use Heidkaemper\Toolbar\Breakpoints\Breakpoints;

class Toolbar
{
    public function isEnabled(): bool
    {
        return config('statamic.toolbar.enabled') ?? config('app.debug', false);
    }

    public function inject(Response $response): void
    {
        $content = $response->getContent();

        if (! $pos = mb_strripos($content, '</body>')) {
            return;
        }

        $cascade = Cascade::instance();

        $widget = view('statamic-toolbar::index', [
            'site'        => $cascade->get('site')?->handle,
            'template'    => $cascade->get('template'),
            'edit_url'    => $cascade->get('edit_url'),
            'breakpoints' => $this->getBreakpoints(),
        ]);

        $response->setContent(mb_substr($content, 0, $pos) . $widget . mb_substr($content, $pos));
        $response->headers->remove('Content-Length');
    }

    public function getBreakpoints(): array
    {
        if (! config('statamic.toolbar.components.breakpoint')) {
            return [];
        }

        return (new Breakpoints())->toArray();
    }
}
