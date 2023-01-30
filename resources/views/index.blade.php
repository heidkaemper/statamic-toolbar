<link rel="stylesheet" href="/vendor/statamic-toolbar/toolbar.css">

<div id="statamic_toolbar" @class(['debugbar-enabled' => config('debugbar.enabled')])>
    @includeWhen(config('statamic.toolbar.components.breakpoint'), 'statamic-toolbar::components.breakpoint')

    @includeWhen(config('statamic.toolbar.components.site'), 'statamic-toolbar::components.site')

    @includeWhen(config('statamic.toolbar.components.template'), 'statamic-toolbar::components.template')

    @includeWhen(config('statamic.toolbar.components.cp_link'), 'statamic-toolbar::components.cp_link')
</div>
