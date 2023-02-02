<statamic-toolbar
    @if(config('statamic.toolbar.components.breakpoint')) breakpoints='@json($breakpoints)' @endif
    @if(config('statamic.toolbar.components.site') && $site) site="{{ $site }}" @endif
    @if(config('statamic.toolbar.components.template') && $template) template="{{ $template }}" @endif
    @if(config('statamic.toolbar.components.cp_link') && $cp_link) cp_link="{{ $cp_link }}" @endif
></statamic-toolbar>
