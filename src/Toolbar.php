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
            'breakpoints' => $this->getBreakpoints(),
            'site' => $cascade->get('site')?->handle,
            'template' => $this->getTemplate($cascade),
            'edit_url' => $this->getCpLink($cascade),
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

    public function getCpLink($cascade): string|null
    {
        if ($cascade->get('logged_in') || config('app.env') === 'local') {
            return $cascade->get('edit_url');
        }

        return null;
    }

    public function getTemplate($cascade): string|null
    {
        if ($cascade->get('template')) {
            return $cascade->get('template');
        }

        if ((bool) $cascade->get('is_entry')) {
            return $cascade->get('collection')->value()->template();
        }

        if ($cascade->get('views')) {
            $view = collect($cascade->get('views'))->keys()->first() ?? '';

            if (preg_match('#/views/(?<template>.*?)\.(antlers|blade)\.(html|php)$#i', $view, $matches)) {
                return $matches["template"];
            }
        }

        return null;
    }
}
