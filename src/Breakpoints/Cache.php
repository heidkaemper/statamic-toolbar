<?php

namespace Heidkaemper\Toolbar\Breakpoints;

use Closure;
use Illuminate\Support\Facades\Cache as CacheManager;

class Cache
{
    public static function remember(string $key, array $files, Closure $callback): mixed
    {
        $hash = self::getHashFromFiles($files);

        $cachedHash   = CacheManager::get("statamic-toolbar-{$key}-hash");
        $cachedResult = CacheManager::get("statamic-toolbar-{$key}-result");

        if ($cachedHash === $hash && $cachedResult) {
            return $cachedResult;
        }

        $result = $callback();

        CacheManager::putMany([
            "statamic-toolbar-{$key}-hash"   => $hash,
            "statamic-toolbar-{$key}-result" => $result,
        ], 600);

        return $result;
    }

    private static function getHashFromFiles(array $files): string
    {
        $times = array_map(function ($file) {
            return file_exists(base_path($file)) ? filemtime(base_path($file)) : 0;
        }, $files);

        return md5(implode('', $times));
    }
}
