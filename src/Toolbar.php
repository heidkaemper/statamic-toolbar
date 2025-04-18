<?php

namespace Heidkaemper\Toolbar;

use Composer\InstalledVersions;
use Symfony\Component\HttpFoundation\Response;

class Toolbar
{
    public function isEnabled(): bool
    {
        if (config('statamic.toolbar.enabled') === true) {
            return true;
        }

        if ($this->isEnabledByAuth()) {
            return true;
        }

        if (config('statamic.toolbar.enabled') === null && config('app.debug')) {
            return true;
        }

        return false;
    }

    public function isEnabledByAuth(): bool
    {
        if (config('statamic.toolbar.enabled') !== 'auth') {
            return false;
        }

        return auth()->user()?->can('access cp') ?? false;
    }

    public function inject(Response $response): void
    {
        $content = $response->getContent();

        if (! $pos = mb_strripos($content, '</body>')) {
            return;
        }

        $widget = view('statamic-toolbar::index', [
            'endpoint' => route('statamic-toolbar-endpoint', [], false),
            'version' => $this->getVersion(),
        ]);

        $response->setContent(mb_substr($content, 0, $pos) . $widget . mb_substr($content, $pos));
        $response->headers->remove('Content-Length');
    }

    protected function getVersion(): string
    {
        if (! InstalledVersions::isInstalled('heidkaemper/statamic-toolbar')) {
            return '';
        }

        return InstalledVersions::getPrettyVersion('heidkaemper/statamic-toolbar');
    }
}
