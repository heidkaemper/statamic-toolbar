<?php

beforeEach(function () {
    config()->set('statamic.toolbar.enabled', true);
});

it('returns toolbar data for an entry route', function () {
    $this
        ->actingAs($this->user)
        ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
        ->assertOk()
        ->assertJsonStructure(['breakpoints', 'template', 'theme']);
});

it('does not include cp_link when entry does not exist', function () {
    $this
        ->actingAs($this->user)
        ->getJson('/_toolbar?origin=' . urlencode('http://localhost/does-not-exist'))
        ->assertOk()
        ->assertJsonMissing(['cp_link' => null])
        ->assertJsonMissingPath('cp_link');
});

it('does not include cp_link when user lacks permission', function () {
    $this
        ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
        ->assertOk()
        ->assertJsonMissingPath('cp_link');
});

it('omits components that are disabled via config', function () {
    config()->set('statamic.toolbar.components.breakpoint', false);
    config()->set('statamic.toolbar.components.template', false);
    config()->set('statamic.toolbar.components.cp_link', false);

    $response = $this
        ->actingAs($this->user)
        ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
        ->assertOk();

    $response->assertJsonMissingPath('breakpoints');
    $response->assertJsonMissingPath('template');
    $response->assertJsonMissingPath('cp_link');
});

it('aborts when origin query parameter is missing', function () {
    $this
        ->getJson('/_toolbar')
        ->assertNotFound();
});

it('aborts when toolbar is disabled', function () {
    config()->set('statamic.toolbar.enabled', false);

    $this
        ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
        ->assertNotFound();
});
