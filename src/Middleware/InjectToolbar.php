<?php

namespace Heidkaemper\Toolbar\Middleware;

use Closure;
use Heidkaemper\Toolbar\Toolbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class InjectToolbar
{
    public function __construct(
        protected Toolbar $toolbar,
    ) {}

    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($response->getStatusCode() !== 200) {
            return $response;
        }

        if (! str_contains($response->headers->get('Content-Type') ?? '', 'text/html')) {
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
