<?php

namespace Heidkaemper\Toolbar;

use Facades\Statamic\View\Cascade;
use Heidkaemper\Toolbar\Breakpoints\Breakpoints;
use Symfony\Component\HttpFoundation\Response;

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
            'site' => $cascade->get('site')?->handle,
            'template' => $cascade->get('template'),
            'edit_url' => $this->getEditUrl($cascade),
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

    public function getEditUrl($cascade): string|null
    {
        if ($cascade->get('logged_in') || config('app.env') === 'local') {
            return $cascade->get('edit_url');
        }

        return null;
    }
}
