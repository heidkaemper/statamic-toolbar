<?php

use Statamic\Facades\Site;
use Statamic\Facades\User;

beforeEach(function () {
    config()->set('statamic.toolbar.enabled', true);
});

describe('toolbar data', function () {
    it('is returned for a non-structured entry', function () {
        $this
            ->actingAs($this->user)
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertOk()
            ->assertJsonStructure(['breakpoints', 'template', 'theme'])
            ->assertJsonPath('template', 'template')
            ->assertJsonPath('cp_link', fn ($url) => str_contains((string) $url, '/cp/collections/pages/entries/test'));
    });

    it('is returned for a page inside a collection structure', function () {
        $this
            ->actingAs($this->user)
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/structured_test'))
            ->assertOk()
            ->assertJsonPath('template', 'template')
            ->assertJsonPath('cp_link', fn ($url) => str_contains((string) $url, '/cp/collections/structured_pages/entries/structured_test'));
    });
});

describe('cp link', function () {
    it('is omitted when the entry does not exist', function () {
        $this
            ->actingAs($this->user)
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/does-not-exist'))
            ->assertOk()
            ->assertJsonMissingPath('cp_link');
    });

    it('is omitted for a guest', function () {
        $this
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertOk()
            ->assertJsonMissingPath('cp_link');
    });

    it('is omitted when the user may not edit the entry', function () {
        $this
            ->actingAs(User::make()->email('viewer@example.com')->save())
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertOk()
            ->assertJsonMissingPath('cp_link');
    });
});

describe('components', function () {
    it('includes every component when enabled', function () {
        config()->set('statamic.toolbar.components.breakpoint', true);
        config()->set('statamic.toolbar.components.site', true);
        config()->set('statamic.toolbar.components.template', true);
        config()->set('statamic.toolbar.components.cp_link', true);
        config()->set('statamic.toolbar.components.visibility', true);

        $this
            ->actingAs($this->user)
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertOk()
            ->assertJsonStructure(['breakpoints', 'site', 'template', 'cp_link', 'visibility'])
            ->assertJsonPath('site', Site::default()->handle());
    });

    it('omits every component when disabled', function () {
        config()->set('statamic.toolbar.components.breakpoint', false);
        config()->set('statamic.toolbar.components.site', false);
        config()->set('statamic.toolbar.components.template', false);
        config()->set('statamic.toolbar.components.cp_link', false);

        $this
            ->actingAs($this->user)
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertOk()
            ->assertJsonMissingPath('breakpoints')
            ->assertJsonMissingPath('site')
            ->assertJsonMissingPath('template')
            ->assertJsonMissingPath('cp_link');
    });
});

describe('availability', function () {
    it('aborts when the origin query parameter is missing', function () {
        $this
            ->getJson('/_toolbar')
            ->assertNotFound();
    });

    it('aborts when the toolbar is disabled', function () {
        config()->set('statamic.toolbar.enabled', false);

        $this
            ->getJson('/_toolbar?origin=' . urlencode('http://localhost/test'))
            ->assertNotFound();
    });
});
