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

    public function parse(): array|null
    {
        if (! $this->guessWetherBootstrapIsUsed()) {
            return null;
        }

        return $this->defaults;
    }

    private function guessWetherBootstrapIsUsed(): bool
    {
        $npm = base_path('package.json');

        if (file_exists($npm) && strpos(file_get_contents($npm), '"bootstrap"')) {
            return true;
        }

        return false;
    }
}
