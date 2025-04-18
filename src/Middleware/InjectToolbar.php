<?php

namespace Heidkaemper\Toolbar\Middleware;

use Closure;
use Heidkaemper\Toolbar\Toolbar;
use Illuminate\Support\Facades\Log;

class InjectToolbar
{
    public function __construct(
        protected Toolbar $toolbar,
    ) {}

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($response->status() !== 200) {
            return $response;
        }

        if ($request->query->has('live-preview')) {
            return $response;
        }

        if (! $this->toolbar->isEnabled()) {
            return $response;
        }

        try {
            $this->toolbar->inject($response);
        } catch (\Exception $e) {
            Log::debug($e->getMessage());
        }

        return $response;
    }
}
