<?php

namespace Heidkaemper\Toolbar\Tests;

use Orchestra\Testbench\TestCase as OrchestraTestCase;
use Statamic\Facades\Collection;
use Statamic\Facades\Entry;
use Statamic\Facades\Stache;

class TestCase extends OrchestraTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->setUpTestEntry();
    }

    protected function getPackageProviders($app): array
    {
        return [
            \Statamic\Providers\StatamicServiceProvider::class,
            \Wilderborn\Partyline\ServiceProvider::class,
            \Heidkaemper\Toolbar\ServiceProvider::class,
        ];
    }

    protected function getPackageAliases($app)
    {
        return [
            'Statamic' => Statamic::class,
        ];
    }

    protected function resolveApplicationConfiguration($app)
    {
        parent::resolveApplicationConfiguration($app);

        $configs = [
            'assets', 'cp', 'forms', 'routes', 'static_caching',
            'sites', 'stache', 'system', 'users',
        ];

        foreach ($configs as $config) {
            $app['config']->set("statamic.{$config}", require(__DIR__ . "/../vendor/statamic/cms/config/{$config}.php"));
        }

        $app['config']->set('statamic.users.repository', 'file');

        $app['config']->set("statamic.toolbar", require(__DIR__ . '/../config/toolbar.php'));
    }

    protected function setUpTestEntry(): void
    {
        copy(__DIR__ . '/stubs/layout.antlers.stub.html', resource_path('views/layout.antlers.html'));
        copy(__DIR__ . '/stubs/template.antlers.stub.html', resource_path('views/template.antlers.html'));

        Entry::all()->each->delete();

        Collection::make('test')
            ->routes('{slug}')
            ->template('template')
            ->layout('layout')
            ->save();

        Entry::make()
            ->collection('test')
            ->slug('test')
            ->published(true)
            ->save();

        Stache::clear();
    }
}
