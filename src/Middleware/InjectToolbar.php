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

        if (! $this->toolbar->isEnabled() || $response->status() !== 200 || $request->query->has('live-preview')) {
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
