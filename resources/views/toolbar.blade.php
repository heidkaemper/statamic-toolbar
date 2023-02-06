<statamic-toolbar
    @if(isset($breakpoints)) breakpoints="{{ $breakpoints ? 'labels' : 'width' }}" @endif
    @if($site) site="{{ $site }}" @endif
    @if($template) template="{{ $template }}" @endif
    @if($cp_link) cp_link="{{ $cp_link }}" @endif
>
    @if ($breakpoints)
        <span class="toolbar_current_breakpoint">
            <style>
                .toolbar_current_breakpoint::before { content: "\2014"; }
                @foreach ($breakpoints as $label => $query)
                    @media ({{ $query }}) { .toolbar_current_breakpoint::before { content: "{{ $label }}"; } }
                @endforeach
            </style>
        </span>
    @endif
</statamic-toolbar>
