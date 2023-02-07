<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Statamic Toolbar
    |--------------------------------------------------------------------------
    |
    | The Toolbar is enabled by default, when app.debug is set to true.
    | You can override this by setting true or false instead of null.
    |
    */

    'enabled' => env('STATAMIC_TOOLBAR_ENABLED', null),

    /*
    |--------------------------------------------------------------------------
    | Components
    |--------------------------------------------------------------------------
    |
    | Enable or disable Toolbar Components.
    | Note that the Edit link (cp_link) only shows when logged in to Statamic
    | or the app environment is set to local.
    |
    */

    'components' => [
        'breakpoint' => true,
        'site' => false,
        'template' => true,
        'cp_link' => true,
        'visibility' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Breakpoints
    |--------------------------------------------------------------------------
    |
    | If the breakpoint component is enabled, the Toolbar will attempt to get
    | media queries from your CSS framework. But you can also define your
    | breakpoints directly.
    |
    */

    'breakpoints' => [
        // 'medium' => 640,
        // 'large' => '(min-width: 1024px)'
    ],

];
