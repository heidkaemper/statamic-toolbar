<?php

namespace Heidkaemper\Toolbar\Controllers;

use Heidkaemper\Toolbar\Breakpoints\Breakpoints;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Statamic\Contracts\Entries\Entry as EntryContract;
use Statamic\Facades\Entry;
use Statamic\Facades\Site;
use Statamic\Support\Str;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ToolbarController
{
    protected Request $origin;

    protected ?EntryContract $entry = null;

    public function __invoke(Request $request): JsonResponse
    {
        abort_unless($origin = $request->query('origin'), 404);

        $this->origin = Request::create($origin);

        $this->entry = $this->findEntryByOrigin();

        $toolbarData = [
            'breakpoints' => $this->getBreakpoints(),
            'site' => $this->getSite(),
            'template' => $this->getTemplate(),
            'cp_link' => $this->getCpLink(),
            'visibility' => config('statamic.toolbar.components.visibility', true),
            'theme' => config('statamic.toolbar.theme') ?: config('debugbar.theme', 'auto'),
        ];

        $toolbarData = array_filter($toolbarData, fn ($value) => ! is_null($value));

        return response()->json($toolbarData);
    }

    protected function findEntryByOrigin(): ?EntryContract
    {
        $site = Site::findByUrl($this->origin->url());

        $path = $this->trimSiteFromPath($this->origin->getPathInfo(), $site?->url() ?? '/');

        return Entry::findByUri($path, $site?->handle());
    }

    protected function trimSiteFromPath(string $path, string $site): string
    {
        $site = parse_url($site)['path'] ?? $site;

        if ($path === $site) {
            return '/';
        }

        $path = Str::removeLeft($path, "{$site}/");

        return Str::ensureLeft($path, '/');
    }

    protected function getBreakpoints(): ?array
    {
        if (! config('statamic.toolbar.components.breakpoint', true)) {
            return null;
        }

        return (new Breakpoints)->toArray();
    }

    protected function getSite(): ?string
    {
        if (! config('statamic.toolbar.components.site', true)) {
            return null;
        }

        return $this->entry?->site()->handle;
    }

    protected function getTemplate(): ?string
    {
        if (! config('statamic.toolbar.components.template', true)) {
            return null;
        }

        if ($template = $this->entry?->template()) {
            return $template;
        }

        try {
            $route = app('router')->getRoutes()->match($this->origin);
        } catch (NotFoundHttpException|MethodNotAllowedHttpException) {
            return null;
        }

        return $route->parameters()['view'] ?? null;
    }

    protected function getCpLink(): ?string
    {
        if (! config('statamic.toolbar.components.cp_link', true)) {
            return null;
        }

        if (! $this->entry) {
            return null;
        }

        $user = Auth::user();

        if (! $user instanceof Authorizable || ! $user->can("view {$this->entry->collection->handle} entries")) {
            return null;
        }

        return $this->entry->editUrl();
    }
}
