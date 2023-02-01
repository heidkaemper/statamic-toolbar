<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser;

use Peast\Peast;
use Peast\Syntax\Node\ObjectExpression;
use Peast\Syntax\Node\StringLiteral;

class TailwindParser
{
    protected array $defaults = [
        'sm' => 'min-width: 640px',
        'md' => 'min-width: 768px',
        'lg' => 'min-width: 1024px',
        'xl' => 'min-width: 1280px',
        '2xl' => 'min-width: 1536px',
    ];

    protected array|null $screens = null;

    public function __construct(
        protected array $files,
    ) {
    }

    public function parse(): array|null
    {
        if (! $this->guessWetherTailwindIsUsed()) {
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

        $ast = Peast::latest($source)->parse();

        // search for 'screens' config
        $query = $ast->query("Property[key.name='screens']");

        if (! $query->count()) {
            return;
        }

        // map to format
        $parsedScreens = collect($query->get(0)->getValue()->getProperties())
            ->mapWithKeys(function ($property) {
                $label = $this->getRawKeyName($property->getKey());
                $media = $this->getBreakpointMedia($property->getValue());

                return $label && $media ? [$label => $media] : [];
            })
            ->toArray();

        // should extend the default config?
        $shouldExtend = (bool) $ast->query("Property[key.name='extend'] Property[key.name='screens']")->count();

        $this->screens = $shouldExtend
            ? array_merge($this->defaults, $parsedScreens)
            : $parsedScreens;
    }

    private function getRawKeyName($key): string|null
    {
        return $key instanceof StringLiteral ? $key?->getValue() : $key?->getRawName();
    }

    private function getBreakpointMedia($media): string|null
    {
        if ($media instanceof StringLiteral) {
            $value = $media->getValue();

            return (string) preg_match('/^[0-9]*.{2,3}$/', $value) ? "min-width: {$value}" : $value;
        }

        if ($this->isMaxWidthBreakpoint($media)) {
            return 'max-width: ' . $media->getProperties()[0]->getValue()->getValue();
        }

        if ($this->isFixedRangeBreakpoint($media)) {
            $range = [
                'min-width: ' . $media->getProperties()[0]->getValue()->getValue(),
                'max-width: ' . $media->getProperties()[1]->getValue()->getValue(),
            ];

            return '(' . implode(') and (', $range) . ')';
        }

        if ($this->isCustomBreakpoint($media)) {
            return (string) $media->getProperties()[0]->getValue()->getValue();
        }

        return null;
    }

    // https://tailwindcss.com/docs/screens#max-width-breakpoints
    private function isMaxWidthBreakpoint($media): bool
    {
        if (! $media instanceof ObjectExpression) {
            return false;
        }

        $properties = $media?->getProperties();

        return is_array($properties)
            && isset($properties[0])
            && $properties[0]?->getValue() instanceof StringLiteral
            && $this->getRawKeyName($properties[0]->getKey()) === 'max';
    }

    // https://tailwindcss.com/docs/screens#fixed-range-breakpoints
    private function isFixedRangeBreakpoint($media): bool
    {
        if (! $media instanceof ObjectExpression) {
            return false;
        }

        $properties = $media?->getProperties();

        return is_array($properties)
            && isset($properties[0], $properties[1])
            && $properties[0]?->getValue() instanceof StringLiteral
            && $properties[1]?->getValue() instanceof StringLiteral
            && $this->getRawKeyName($properties[0]->getKey()) === 'min'
            && $this->getRawKeyName($properties[1]->getKey()) === 'max';
    }

    // https://tailwindcss.com/docs/screens#custom-media-queries
    private function isCustomBreakpoint($media): bool
    {
        if (! $media instanceof ObjectExpression) {
            return false;
        }

        $properties = $media?->getProperties();

        return is_array($properties)
            && isset($properties[0])
            && $properties[0]?->getValue() instanceof StringLiteral
            && $this->getRawKeyName($properties[0]->getKey()) === 'raw';
    }
}
