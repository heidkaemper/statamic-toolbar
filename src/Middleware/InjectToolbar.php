<?php

namespace Heidkaemper\Toolbar\Middleware;

use Closure;
use Heidkaemper\Toolbar\Toolbar;

class InjectToolbar
{
    public function __construct(
        protected Toolbar $toolbar,
    ) {
    }

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if (! $this->toolbar->isEnabled() || $response->status() !== 200) {
            return $response;
        }

        $this->toolbar->inject($response);

        return $response;
    }
}
