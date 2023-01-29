<?php

namespace Heidkaemper\Toolbar\Breakpoints\Parser\Traits;

use Closure;
use Illuminate\Support\Facades\Cache;

trait ShouldCache
{
    public function cache(string $key, Closure $callback): mixed
    {
        $hash = $this->getHashFromFiles();

        $cachedHash   = Cache::get("statamic-toolbar-{$key}-hash");
        $cachedResult = Cache::get("statamic-toolbar-{$key}-result");

        if ($cachedHash === $hash && $cachedResult) {
            return $cachedResult;
        }

        $result = $callback();

        Cache::putMany([
            "statamic-toolbar-{$key}-hash"   => $hash,
            "statamic-toolbar-{$key}-result" => $result,
        ], 600);

        return $result;
    }

    private function getHashFromFiles(): string
    {
        $times = array_map(function ($file) {
            return file_exists(base_path($file)) ? filemtime(base_path($file)) : 0;
        }, $this->files);

        return md5(implode('', $times));
    }
}
