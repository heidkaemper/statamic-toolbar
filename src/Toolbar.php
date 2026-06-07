<?php

namespace Heidkaemper\Toolbar;

use Composer\InstalledVersions;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Support\Facades\Auth;
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

        $user = Auth::user();

        return $user instanceof Authorizable && $user->can('access cp');
    }

    public function inject(Response $response): void
    {
        $content = $response->getContent();

        if (($pos = strripos($content, '</body>')) === false) {
            return;
        }

        $widget = view('statamic-toolbar::index', [
            'endpoint' => route('statamic-toolbar.data', [], false),
            'version' => $this->getVersion(),
        ])->render();

        $response->setContent(substr_replace($content, $widget, $pos, 0));
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
