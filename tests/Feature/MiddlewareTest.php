<?php

it('injects when enabled', function () {
    config()->set('statamic.toolbar.enabled', true);

    $this
        ->get('/test')
        ->assertOk()
        ->assertSee('</toolbar-widget>', false);
});

it('does not inject when disabled', function () {
    config()->set('statamic.toolbar.enabled', false);

    $this
        ->get('/test')
        ->assertOk()
        ->assertDontSee('</toolbar-widget>', false);
});

it('injects when config is null and app debug is enabled', function () {
    config()->set('statamic.toolbar.enabled', null);
    config()->set('app.debug', true);

    $this
        ->get('/test')
        ->assertOk()
        ->assertSee('</toolbar-widget>', false);
});

it('does not inject when config is null and app debug is disabled', function () {
    config()->set('statamic.toolbar.enabled', null);
    config()->set('app.debug', false);

    $this
        ->get('/test')
        ->assertOk()
        ->assertDontSee('</toolbar-widget>', false);
});

it('injects when config is auth and user can access cp', function () {
    config()->set('statamic.toolbar.enabled', 'auth');

    $this
        ->actingAs($this->user)
        ->get('/test')
        ->assertOk()
        ->assertSee('</toolbar-widget>', false);
});

it('does not inject when config is auth and user can not access cp', function () {
    config()->set('statamic.toolbar.enabled', 'auth');

    $this
        ->get('/test')
        ->assertOk()
        ->assertDontSee('</toolbar-widget>', false);
});
