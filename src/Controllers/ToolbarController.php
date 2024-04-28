<?php

namespace Heidkaemper\Toolbar\Controllers;

use Heidkaemper\Toolbar\Breakpoints\Breakpoints;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Statamic\Support\Str;

class ToolbarController extends Controller
{
    protected $origin;

    protected $entry;

    public function __invoke(Request $request)
    {
        abort_unless($request->query('origin'), 404);

        $this->origin = app('request')->create($request->query('origin'));

        $this->entry = $this->findEntryByOrigin();

        $toolbarData = [
            'breakpoints' => $this->getBreakpoints(),
            'site' => $this->getSite(),
            'template' => $this->getTemplate(),
            'cp_link' => $this->getCpLink(),
            'visibility' => config('statamic.toolbar.components.visibility', true),
            'theme' => env('STATAMIC_TOOLBAR_THEME', config('debugbar.theme', 'auto')),
        ];

        $toolbarData = array_filter($toolbarData, fn ($value) => ! is_null($value));

        return response()->json($toolbarData);
    }

    protected function findEntryByOrigin()
    {
        $site = Site::findByUrl($this->origin->url());

        $path = $this->trimSiteFromPath($this->origin->getPathInfo(), $site?->url() ?? '/');

        return Entry::findByUri($path, $site);
    }

    protected function trimSiteFromPath(string $path, string $site): string
    {
        $site = parse_url($site)['path'] ?? $site;

        if ($path === $site) {
            return '/';
        }

        $path = Str::removeLeft($path, $site . '/');

        return Str::ensureLeft($path, '/');
    }

    protected function getBreakpoints(): array|null
    {
        if (! config('statamic.toolbar.components.breakpoint', true)) {
            return null;
        }

        return (new Breakpoints())->toArray();
    }

    protected function getSite(): string|null
    {
        if (! config('statamic.toolbar.components.site', true)) {
            return null;
        }

        return $this->entry?->site()->handle;
    }

    protected function getTemplate(): string|null
    {
        if (! config('statamic.toolbar.components.template', true)) {
            return null;
        }

        if ($template = $this->entry?->template()) {
            return $template;
        }

        $route = app('router')->getRoutes()->match($this->origin);

        return $route->parameters()['view'] ?? null;
    }

    protected function getCpLink(): string|null
    {
        if (! config('statamic.toolbar.components.cp_link', true) || ! auth()->check()) {
            return null;
        }

        return $this->entry?->editUrl();
    }
}
