<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser;

class TailwindParser
{
    protected array $files = [
        'tailwind.config.js',
        'tailwind.config.theme.js',
        'tailwind.config.site.js',
    ];

    public function parse(): array|null
    {
        if (! $this->guessWetherTailwindIsUsed()) {
            return null;
        }

        $screens = null;

        foreach ($this->files as $file) {
            $config = $this->parseConfigFile($file);

            if ($config && ! empty($config['screens'])) {
                $screens = $config['extends']
                    ? $this->mergeWithDefaults($config['screens'])
                    : $config['screens'];

                break;
            }
        }

        return $screens ?: $this->getDefaults();
    }

    private function guessWetherTailwindIsUsed(): bool
    {
        return file_exists(base_path('tailwind.config.js')) || file_exists(base_path('node_modules/tailwindcss'));
    }

    private function getDefaults(): array
    {
        $config = $this->parseConfigFile('node_modules/tailwindcss/stubs/defaultConfig.stub.js');

        // fallback
        if (! $config || empty($config['screens'])) {
            return [
                'sm'  => 'min-width: 640px',
                'md'  => 'min-width: 768px',
                'lg'  => 'min-width: 1024px',
                'xl'  => 'min-width: 1280px',
                '2xl' => 'min-width: 1536px',
            ];
        }

        return $config['screens'];
    }

    private function mergeWithDefaults(array $screens): array
    {
        return array_merge($this->getDefaults(), $screens);
    }

    private function parseConfigFile($filename): array|null
    {
        if (! file_exists(base_path($filename))) {
            return null;
        }

        $content = file_get_contents(base_path($filename));

        $result = preg_match('/(?<extends>extend:\s\{.*)?screens:\s*{(?<screens>.*?)}/sm', $content, $matches);

        if (! $result || empty($matches['screens'])) {
            return null;
        }

        $screens = collect(explode(PHP_EOL, trim($matches['screens'])))
            ->mapWithKeys(function ($item) {
                $parts = explode(':', $item);

                if (count($parts) !== 2) {
                    return [];
                }

                $key   = preg_replace('/[^A-Za-z0-9]/', '', $parts[0]);
                $value = preg_replace('/[^A-Za-z0-9]/', '', $parts[1]);

                if (empty($key) || empty($value)) {
                    return [];
                }

                return [$key => $value];
            })
            ->filter()
            ->toArray();

        return [
            'screens' => $screens,
            'extends' => (bool) $matches['extends'],
        ];
    }
}
