<?php

namespace Heidkaemper\Toolbar;

use Composer\InstalledVersions;
use Statamic\Facades\Preference;
use Symfony\Component\HttpFoundation\Response;

class Toolbar
{
    public function isEnabled(): bool
    {
        $cookie = null;
        if ( Preference::get( 'toolbar_cookie_disabled', true ) ) {
            $cname = config( 'statamic.toolbar.cookie', '' );
            $cookie = request()->cookie( $cname );
        }
        return config( 'statamic.toolbar.enabled' ) ?? $cookie ?? config( 'app.debug', false );
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
