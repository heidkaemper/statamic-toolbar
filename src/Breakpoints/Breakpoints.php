<?php

namespace Heidkaemper\Toolbar\Breakpoints;

use Heidkaemper\Toolbar\Breakpoints\Parser\TailwindParser;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class Breakpoints
{
    protected Collection $breakpoints;

    public function __construct()
    {
        $this->breakpoints = collect();

        $this
            ->getFromConfig()
            ->getFromTailwind()
            ->format();
    }

    public function toArray(): array
    {
        return $this->breakpoints->toArray();
    }

    private function getFromConfig(): self
    {
        if ($this->breakpoints->isEmpty()) {
            $this->breakpoints = collect(config('statamic.toolbar.breakpoints', []));
        }

        return $this;
    }

    private function getFromTailwind(): self
    {
        if ($this->breakpoints->isEmpty()) {
            $files = [
                'tailwind.config.js',
                'tailwind.config.theme.js',
                'tailwind.config.site.js',
            ];

            try {
                $this->breakpoints = Cache::remember('tailwind', $files, function () use ($files) {
                    return collect((new TailwindParser($files))->parse() ?? []);
                });
            } catch (\Exception $e) {
                Log::debug($e->getMessage());
            }
        }

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
