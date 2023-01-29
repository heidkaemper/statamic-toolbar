<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser;

use Peast\Peast;
use Peast\Syntax\Node\Identifier;
use Peast\Syntax\Node\StringLiteral;

class TailwindParser
{
    protected array $files = [
        'tailwind.config.js',
        'tailwind.config.theme.js',
        'tailwind.config.site.js',
    ];

    protected array $defaults = [
        'sm'  => 'min-width: 640px',
        'md'  => 'min-width: 768px',
        'lg'  => 'min-width: 1024px',
        'xl'  => 'min-width: 1280px',
        '2xl' => 'min-width: 1536px',
    ];

    protected array|null $screens = null;

    public function parse(): array|null
    {
        if (! $this->guessWetherTailwindIsUsed()) {
            return null;
        }

        foreach ($this->files as $file) {
            $this->parseConfigFile($file);

            if (is_array($this->screens)) {
                break;
            }
        }

        return $this->screens;
    }

    private function guessWetherTailwindIsUsed(): bool
    {
        return file_exists(base_path('tailwind.config.js')) || file_exists(base_path('node_modules/tailwindcss'));
    }

    private function parseConfigFile($filename): void
    {
        if (! file_exists(base_path($filename))) {
            return;
        }

        $source = file_get_contents(base_path($filename));

        if (! str_contains($source, 'screens')) {
            return;
        }

        $ast = Peast::latest($source)->parse();

        $properties = null;

        // search for the 'screens' property
        foreach ($ast->query('Property[key]') as $property) {
            if ($this->isScreensProperty($property)) {
                $properties = $property->getValue()->getProperties();

                break;
            }
        }

        if (! $properties) {
            return;
        }

        // map screens to addon config
        $this->screens = collect($properties)
            ->mapWithKeys(function ($property) {
                $key = $property->getKey() instanceof StringLiteral
                    ? trim($property->getKey()?->getRaw(), "'")
                    : $property->getKey()?->getRawName();

                return $key && $property->getValue() instanceof StringLiteral
                    ? [$key => trim($property->getValue()->getRaw(), "'")]
                    : [];
            })
            ->toArray();
    }

    private function isScreensProperty($property)
    {
        return $property?->getKey()
            && $property->getKey() instanceof Identifier
            && $property->getKey()->getRawName() === 'screens';
    }
}
