<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser;

class BootstrapParser
{
    protected array $defaults = [
        'xs' => 'min-width: 0px',
        'sm' => 'min-width: 576px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 992px',
        'xl' => 'min-width: 1200px',
        'xxl' => 'min-width: 1400px',
    ];

    protected ?array $screens = null;

    public function __construct(
        protected array $files,
    ) {}

    public function parse(): ?array
    {
        if (! $this->guessWetherBootstrapIsUsed()) {
            return null;
        }

        foreach ($this->files as $file) {
            $this->parseConfigFile($file);

            if (! is_null($this->screens)) {
                break;
            }
        }

        return $this->screens ?? $this->defaults;
    }

    private function guessWetherBootstrapIsUsed(): bool
    {
        if (file_exists(resource_path('scss/bootstrap.scss')) || file_exists(resource_path('sass/bootstrap.scss'))) {
            return true;
        }

        $npm = base_path('package.json');

        if (file_exists($npm) && strpos(file_get_contents($npm), '"bootstrap"')) {
            return true;
        }

        return false;
    }

    private function parseConfigFile($filename): void
    {
        if (! file_exists(resource_path($filename))) {
            return;
        }

        $source = file_get_contents(resource_path($filename));

        if (! preg_match('/\$grid-breakpoints:\s*?\((?<screens>.*?)\)/si', $source, $matches)) {
            return;
        }

        $screens = collect(explode(',', $matches['screens']))
            ->mapWithKeys(function ($screen) {
                if (! str_contains($screen, ':')) {
                    return [];
                }

                [$key, $value] = explode(':', $screen);

                return [trim($key) => trim($value)];
            })
            ->map(function ($value) {
                if (is_numeric($value)) {
                    return "min-width: {$value}px";
                }

                return (string) preg_match('/^[0-9]*.{2,3}$/', $value) ? "min-width: {$value}" : $value;
            });

        if (! $screens->count()) {
            return;
        }

        $this->screens = $screens->toArray();
    }
}
