<?php

use Heidkaemper\Toolbar\Controllers\ToolbarController;
use Heidkaemper\Toolbar\Middleware\ToolbarEnabled;
use Illuminate\Support\Facades\Route;
use Statamic\Http\Middleware\AuthGuard;

$config = [
    'prefix' => config('statamic.toolbar.route_prefix', '_toolbar'),
    'middleware' => [
        config('statamic.routes.middleware', 'web'),
        AuthGuard::class,
        ToolbarEnabled::class,
    ],
];

Route::group($config, function () {
    Route::get('/', ToolbarController::class)->name('statamic-toolbar-endpoint');
});
