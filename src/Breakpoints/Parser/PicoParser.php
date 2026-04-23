<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser;

class PicoParser
{
    protected array $defaults = [
        'xs' => 'min-width: 0px',
        'sm' => 'min-width: 576px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 992px',
        'xl' => 'min-width: 1200px',
    ];

    public function parse(): ?array
    {
        if (! $this->guessWhetherPicoIsUsed()) {
            return null;
        }

        return $this->defaults;
    }

    protected function guessWhetherPicoIsUsed(): bool
    {
        if (file_exists(public_path('css/pico.min.css'))) {
            return true;
        }

        $npm = base_path('package.json');

        if (file_exists($npm) && str_contains(file_get_contents($npm), '"@picocss/pico"')) {
            return true;
        }

        return false;
    }
}
