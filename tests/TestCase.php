<?php

namespace Heidkaemper\Toolbar\Tests;

use Heidkaemper\Toolbar\ServiceProvider;
use Statamic\Auth\File\Role;
use Statamic\Facades\Collection;
use Statamic\Facades\Entry;
use Statamic\Facades\Stache;
use Statamic\Facades\User;
use Statamic\Testing\AddonTestCase;

class TestCase extends AddonTestCase
{
    protected string $addonServiceProvider = ServiceProvider::class;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->setUpTestData();
    }

    protected function setUpTestData(): void
    {
        copy(__DIR__ . '/stubs/layout.antlers.stub.html', resource_path('views/layout.antlers.html'));
        copy(__DIR__ . '/stubs/template.antlers.stub.html', resource_path('views/template.antlers.html'));

        Entry::all()->each->delete();

        $this->makeUnstructuredCollection();
        $this->makeStructuredCollection();

        $role = (new Role)
            ->handle('editor')
            ->addPermission('access cp')
            ->addPermission('view pages entries')
            ->addPermission('view structured_pages entries')
            ->save();

        $this->user = User::make()
            ->email('john@example.com')
            ->assignRole($role)
            ->save();

        Stache::clear();
    }

    protected function makeUnstructuredCollection(): void
    {
        Collection::make('pages')
            ->routes('{slug}')
            ->template('template')
            ->layout('layout')
            ->save();

        Entry::make()
            ->collection('pages')
            ->id('test')
            ->slug('test')
            ->published(true)
            ->save();
    }

    protected function makeStructuredCollection(): void
    {
        Collection::make('structured_pages')
            ->routes('{parent_uri}/{slug}')
            ->template('template')
            ->layout('layout')
            ->structureContents(['root' => false])
            ->save();

        Entry::make()
            ->collection('structured_pages')
            ->id('structured_test')
            ->slug('structured_test')
            ->published(true)
            ->save();
    }
}
