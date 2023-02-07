<?php

use Heidkaemper\Toolbar\Breakpoints\Parser\TailwindParser;

beforeEach(function () {
    $this->config = base_path('tailwind.config.js');
    $this->parser = new TailwindParser(['tailwind.config.js']);

    if (file_exists($this->config)) {
        unlink($this->config);
    }
});

it('returns nothing if tailwind is not in use', function () {
    expect($this->parser->parse())->toBeNull();
});

it('returns default values', function () {
    copy(__DIR__ . '/../stubs/tailwindcss/screensMissing.stub.js', $this->config);

    expect($this->parser->parse())->toBe([
        'sm' => 'min-width: 640px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 1024px',
        'xl' => 'min-width: 1280px',
        '2xl' => 'min-width: 1536px',
    ]);
});

it('returns user values', function () {
    copy(__DIR__ . '/../stubs/tailwindcss/screensToOverride.stub.js', $this->config);

    expect($this->parser->parse())->toBe([
        'test' => 'min-width: 555px',
        'test-max' => 'max-width: 666px',
        'test-range' => '(min-width: 777px) and (max-width: 888px)',
        'test-raw' => '(min-height: 999px)',
    ]);
});

it('does merge user values with default values', function () {
    copy(__DIR__ . '/../stubs/tailwindcss/screensToExtend.stub.js', $this->config);

    expect($this->parser->parse())->toBe([
        'sm' => 'min-width: 640px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 1024px',
        'xl' => 'min-width: 1280px',
        '2xl' => 'min-width: 1536px',
        'test' => 'min-width: 555px',
        'test-max' => 'max-width: 666px',
        'test-range' => '(min-width: 777px) and (max-width: 888px)',
        'test-raw' => '(min-height: 999px)',
    ]);
});

it('does sort when all values have min-width', function () {
    copy(__DIR__ . '/../stubs/tailwindcss/screensToSort.stub.js', $this->config);

    expect($this->parser->parse())->toBe([
        'sm' => 'min-width: 640px',
        'md' => 'min-width: 768px',
        'test' => 'min-width: 777px',
        'lg' => 'min-width: 1024px',
        'xl' => 'min-width: 1280px',
        '2xl' => 'min-width: 1536px',
    ]);
});
