<?php

namespace Heidkaemper\Toolbar\Tests;

use Orchestra\Testbench\TestCase as OrchestraTestCase;

class TestCase extends OrchestraTestCase
{
    protected function getPackageProviders($app): array
    {
        return [
            \Heidkaemper\Toolbar\ServiceProvider::class,
        ];
    }
}
