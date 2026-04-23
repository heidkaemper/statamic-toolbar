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

        $role = (new Role)
            ->handle('test')
            ->addPermission('access cp')
            ->save();

        $this->user = User::make()
            ->email('john@example.com')
            ->assignRole($role)
            ->save();

        Stache::clear();
    }
}
