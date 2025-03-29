<?php

namespace Heidkaemper\Toolbar\Listeners;

use Heidkaemper\Toolbar\Controllers\ToolbarController;
use Illuminate\Auth\Events\Login;

class LoginListener 
{
    protected ToolbarController $controller;

    public function __construct(ToolbarController $controller) 
    {
        $this->controller = $controller;
    }

    public function handle(Login $event): void 
    {
        $cookie_name = config('statamic.toolbar.cookie');
        if ( $cookie_name && $this->controller->canUseToolbarCookie() ) {
            cookie()->queue($cookie_name, true, 60 * 24 * 7); // 7 days}
        }
    }
}
