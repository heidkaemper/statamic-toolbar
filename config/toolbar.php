<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Enable Toolbar
    |--------------------------------------------------------------------------
    |
    | ...
    |
    */

    'enabled' => env('STATAMIC_TOOLBAR_ENABLED'),

    /*
    |--------------------------------------------------------------------------
    | Components
    |--------------------------------------------------------------------------
    |
    | ...
    |
    */

    'components' => [
        'breakpoint' => true,
        'site' => false,
        'template' => false,
        'cp_link' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Breakpoints
    |--------------------------------------------------------------------------
    |
    | ...
    |
    */

    'breakpoints' => [
        /*
        'sm'  => '640px',
        'md'  => '(min-width: 768px)',
        'lg'  => '(min-width: 1024px)',
        'xl'  => '(min-width: 1280px)',
        '2xl' => '(min-width: 1536px)',
        */
    ],

];
