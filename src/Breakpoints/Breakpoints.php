<?php

namespace Heidkaemper\Toolbar\Breakpoints;

use Heidkaemper\Toolbar\Breakpoints\Parser\BootstrapParser;
use Heidkaemper\Toolbar\Breakpoints\Parser\PicoParser;
use Heidkaemper\Toolbar\Breakpoints\Parser\TailwindParser;
use Illuminate\Support\Collection;

class Breakpoints
{
    protected Collection $breakpoints;

    public function __construct()
    {
        $this->breakpoints = collect();

        $this
            ->getFromConfig()
            ->getFromTailwind()
            ->getFromPico()
            ->getFromBootstrap()
            ->format();
    }

    public function toArray(): array
    {
        return $this->breakpoints->toArray();
    }

    private function getFromConfig(): self
    {
        if (! $this->breakpoints->isEmpty()) {
            return $this;
        }

        $this->breakpoints = collect(config('statamic.toolbar.breakpoints', []));

        return $this;
    }

    private function getFromTailwind(): self
    {
        if (! $this->breakpoints->isEmpty()) {
            return $this;
        }

        $files = [
            'tailwind.config.js',
            'tailwind.config.ts',
            'tailwind.config.theme.js',
            'tailwind.config.site.js',
        ];

        $this->breakpoints = Cache::remember('tailwind', $files, function () use ($files) {
            return collect((new TailwindParser($files))->parse() ?? []);
        });

        return $this;
    }

    private function getFromPico(): self
    {
        if (! $this->breakpoints->isEmpty()) {
            return $this;
        }

        $this->breakpoints = collect((new PicoParser)->parse() ?? []);

        return $this;
    }

    private function getFromBootstrap(): self
    {
        if (! $this->breakpoints->isEmpty()) {
            return $this;
        }

        $files = [
            'scss/_variables.scss',
            'sass/_variables.scss',
        ];

        $this->breakpoints = Cache::remember('bootstrap', $files, function () use ($files) {
            return collect((new BootstrapParser($files))->parse() ?? []);
        });

        return $this;
    }

    private function format(): self
    {
        $this->breakpoints = $this->breakpoints
            ->map(function ($breakpoint) {
                if (is_numeric($breakpoint)) {
                    return "min-width: {$breakpoint}px";
                }

                if (preg_match('/^[0-9]*.{2,3}$/', $breakpoint)) {
                    return "min-width: {$breakpoint}";
                }

                return (string) $breakpoint;
            })
            ->filter();

        return $this;
    }
}
