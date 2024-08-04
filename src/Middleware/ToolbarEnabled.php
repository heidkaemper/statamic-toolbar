<?php

namespace Heidkaemper\Toolbar\Middleware;

use Closure;
use Heidkaemper\Toolbar\Toolbar;

class ToolbarEnabled
{
    public function __construct(
        protected Toolbar $toolbar,
    ) {}

    public function handle($request, Closure $next)
    {
        if (! $this->toolbar->isEnabled()) {
            abort(404);
        }

        return $next($request);
    }
}
