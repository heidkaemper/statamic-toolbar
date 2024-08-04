<?php

use Heidkaemper\Toolbar\Breakpoints\Parser\PicoParser;

beforeEach(function () {
    $this->parser = new PicoParser;

    if (! file_exists(public_path('css'))) {
        mkdir(public_path('css'));
    }

    if (file_exists(public_path('css/pico.min.css'))) {
        unlink(public_path('css/pico.min.css'));
    }
});

it('returns nothing if pico is not in use', function () {
    expect($this->parser->parse())->toBeNull();
});

it('returns default values', function () {
    touch(public_path('css/pico.min.css'));

    expect($this->parser->parse())->toBe([
        'xs' => 'min-width: 0px',
        'sm' => 'min-width: 576px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 992px',
        'xl' => 'min-width: 1200px',
    ]);
});
