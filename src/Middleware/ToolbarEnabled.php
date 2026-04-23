<?php

namespace Heidkaemper\Toolbar\Middleware;

use Closure;
use Heidkaemper\Toolbar\Toolbar;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ToolbarEnabled
{
    public function __construct(
        protected Toolbar $toolbar,
    ) {}

    public function handle(Request $request, Closure $next): Response
    {
        if (! $this->toolbar->isEnabled()) {
            abort(404);
        }

        return $next($request);
    }
}
