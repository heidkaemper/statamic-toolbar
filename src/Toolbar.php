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
            'site' => $this->getSite($cascade),
            'template' => $this->getTemplate($cascade),
            'cp_link' => $this->getCpLink($cascade),
        ]);

        $response->setContent(mb_substr($content, 0, $pos) . $widget . mb_substr($content, $pos));
        $response->headers->remove('Content-Length');
    }

    public function getBreakpoints(): array|null
    {
        if (! config('statamic.toolbar.components.breakpoint')) {
            return null;
        }

        return (new Breakpoints())->toArray();
    }

    public function getSite($cascade): string|null
    {
        if (! config('statamic.toolbar.components.site')) {
            return null;
        }

        return $cascade->get('site')?->handle;
    }

    public function getCpLink($cascade): string|null
    {
        if (! config('statamic.toolbar.components.cp_link')) {
            return null;
        }

        if (! $cascade->get('logged_in') && config('app.env') !== 'local') {
            return null;
        }

        return $cascade->get('edit_url');
    }

    public function getTemplate($cascade): string|null
    {
        if (! config('statamic.toolbar.components.template')) {
            return null;
        }

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
