<?php

namespace Heidkaemper\Toolbar\Controllers;

use Heidkaemper\Toolbar\Breakpoints\Breakpoints;
use Illuminate\Routing\Controller;
use Statamic\Facades\Entry;

class ToolbarController extends Controller
{
    protected $path;
    protected $entry;

    public function __invoke()
    {
        $this->path = '/';
        $this->entry = Entry::findByUri($this->path); // todo: site?

        $toolbarData = [
            'breakpoints' => $this->getBreakpoints(),
            'site' => $this->getSite(),
            'template' => $this->getTemplate(),
            'cp_link' => $this->getCpLink(),
            'visibility' => config('statamic.toolbar.components.visibility'),
        ];

        $toolbarData = array_filter($toolbarData, fn ($value) => ! is_null($value));

        return response()->json($toolbarData);
    }

    protected function getBreakpoints(): array|null
    {
        if (! config('statamic.toolbar.components.breakpoint')) {
            return null;
        }

        return (new Breakpoints())->toArray();
    }

    protected function getSite(): string|null
    {
        if (! config('statamic.toolbar.components.site')) {
            return null;
        }

        return $this->entry?->site()->handle;
    }

    protected function getTemplate(): string|null
    {
        if (! config('statamic.toolbar.components.template')) {
            return null;
        }

        if ($template = $this->entry?->template()) {
            return $template;
        }

        $route = app('router')->getRoutes()->match(app('request')->create($this->path));

        return $route->parameters()['view'] ?? null;
    }

    protected function getCpLink(): string|null
    {
        if (! config('statamic.toolbar.components.cp_link')) {
            return null;
        }

        if (! auth()->check() && config('app.env') !== 'local') {
            return null;
        }

        return $this->entry?->editUrl();
    }
}
