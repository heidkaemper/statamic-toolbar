<?php

namespace Heidkaemper\Toolbar;

use Statamic\Statamic;
use Statamic\Providers\AddonServiceProvider;
use Heidkaemper\Toolbar\Middleware\InjectToolbar;

class ServiceProvider extends AddonServiceProvider
{
    protected $middlewareGroups = [
        'statamic.web' => [
            InjectToolbar::class,
        ],
    ];

    public function bootAddon(): void
    {
        $this->publishAddonAssets();
    }

    protected function bootConfig(): self
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/toolbar.php', 'statamic.toolbar');

        $this->publishes([
            __DIR__ . '/../config/toolbar.php' => config_path('statamic/toolbar.php'),
        ], 'statamic-toolbar-config');

        return $this;
    }

    protected function publishAddonAssets(): void
    {
        $this->publishes([
            __DIR__ . '/../dist/toolbar.css' => public_path("vendor/{$this->getAddon()->packageName()}/toolbar.css"),
        ], $this->getAddon()->slug());

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', [
                '--tag'   => $this->getAddon()->slug(),
                '--force' => true,
            ]);
        });
    }
}
