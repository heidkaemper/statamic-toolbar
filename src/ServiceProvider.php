<?php

namespace Heidkaemper\Toolbar;

use Heidkaemper\Toolbar\Middleware\InjectToolbar;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    public function boot()
    {
        parent::boot();

        Statamic::booted(function () {
            $this
                ->bootAddonRoutes()
                ->bootAddonMiddleware()
                ->bootAddonViews()
                ->publishAddonAssets();
        });
    }

    protected function bootAddonRoutes(): self
    {
        $this->loadRoutesFrom(__DIR__ . '/../routes/api.php');

        return $this;
    }

    protected function bootAddonMiddleware(): self
    {
        $this->app['router']->pushMiddlewareToGroup('statamic.web', InjectToolbar::class);

        return $this;
    }

    protected function bootAddonViews(): self
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'statamic-toolbar');

        return $this;
    }

    protected function bootConfig(): self
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/toolbar.php', 'statamic.toolbar');

        $this->publishes([
            __DIR__ . '/../config/toolbar.php' => config_path('statamic/toolbar.php'),
        ], 'statamic-toolbar-config');

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'statamic-toolbar-config']);
        });

        return $this;
    }

    protected function publishAddonAssets(): void
    {
        $this->publishes([
            __DIR__ . '/../dist/toolbar.js' => public_path('vendor/statamic-toolbar/toolbar.js'),
        ], 'statamic-toolbar-assets');

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'statamic-toolbar-assets', '--force' => true]);
        });
    }
}
