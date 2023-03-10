<?php

it('injects when toolbar is enabled', function () {
    config()->set('statamic.toolbar.enabled', true);

    $this
        ->get('/test')
        ->assertOk()
        ->assertSee('statamic-toolbar', false);
});

it('does not inject when toolbar is disabled', function () {
    config()->set('statamic.toolbar.enabled', false);

    $this
        ->get('/test')
        ->assertOk()
        ->assertDontSee('statamic-toolbar', false);
});
