<?php

use Heidkaemper\Toolbar\Breakpoints\Parser\BootstrapParser;

beforeEach(function () {
    $this->parser = new BootstrapParser(['scss/_variables.scss']);

    $this->bootstrap = resource_path('scss/bootstrap.scss');
    $this->variables = resource_path('scss/_variables.scss');

    if (! is_dir(resource_path('scss'))) {
        mkdir(resource_path('scss'));
    }

    if (file_exists($this->bootstrap)) {
        unlink($this->bootstrap);
    }

    if (file_exists($this->variables)) {
        unlink($this->variables);
    }
});

it('returns nothing if bootstrap is not in use', function () {
    expect($this->parser->parse())->toBeNull();
});

it('returns default values', function () {
    touch(resource_path('scss/bootstrap.scss'));

    expect($this->parser->parse())->toBe([
        'xs' => 'min-width: 0px',
        'sm' => 'min-width: 576px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 992px',
        'xl' => 'min-width: 1200px',
        'xxl' => 'min-width: 1400px',
    ]);
});

it('returns user values', function () {
    touch(resource_path('scss/bootstrap.scss'));

    copy(__DIR__ . '/../stubs/bootstrap/variables.stub.scss', $this->variables);

    expect($this->parser->parse())->toBe([
        'test1' => 'min-width: 0px',
        'test2' => 'min-width: 555px',
    ]);
});
