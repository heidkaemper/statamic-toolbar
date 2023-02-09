<?php

use Heidkaemper\Toolbar\Controllers\ToolbarController;
use Heidkaemper\Toolbar\Middleware\ToolbarEnabled;
use Illuminate\Support\Facades\Route;

$config = [
    'prefix' => config('statamic.toolbar.route_prefix', '_toolbar'),
    'middleware' => [ToolbarEnabled::class],
];

Route::group($config, function () {
    Route::get('/', ToolbarController::class)->name('statamic-toolbar-endpoint');
});
