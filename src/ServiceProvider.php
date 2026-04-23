<?php

namespace Heidkaemper\Toolbar;

use Heidkaemper\Toolbar\Middleware\InjectToolbar;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $routes = [
        'web' => __DIR__ . '/../routes/api.php',
    ];

    protected $middlewareGroups = [
        'statamic.web' => [InjectToolbar::class],
    ];

    protected $viewNamespace = 'statamic-toolbar';

    public function bootAddon(): void
    {
        $this->bootAddonAssets();
    }

    protected function bootConfig()
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

    protected function bootAddonAssets(): void
    {
        $this->publishes([
            __DIR__ . '/../dist/toolbar.js' => public_path('vendor/statamic-toolbar/toolbar.js'),
        ], 'statamic-toolbar-assets');

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'statamic-toolbar-assets', '--force' => true]);
        });
    }
}
