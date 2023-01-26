<a title="Current Breakpoint" class="toolbar_cell">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" class="toolbar_cell_icon">
        <path d="M12 8V6H8v4h2V8h2Zm2 6h2v4h-4v-2h2v-2Z"/>
        <path d="M4 3c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V3Zm2 17V4h12v16H6Z"/>
    </svg>

    <span class="toolbar_cell_content toolbar_cell_breakpoint"></span>

    @if ($breakpoints)
        <style>
            #statamic_toolbar .toolbar_cell_breakpoint::before { content: "-"; }
            @foreach ($breakpoints as $label => $query)
                @media ({{ $query }}) {
                    #statamic_toolbar .toolbar_cell_breakpoint::before { content: "{{ $label }}"; }
                }
            @endforeach
        </style>
    @else 
        <script>
            const toolbar_cell = document.querySelector('#statamic_toolbar .toolbar_cell_breakpoint');
            new ResizeObserver((body) => toolbar_cell.textContent = `${body[0].contentRect.width} px`).observe(document.body);
        </script>
    @endif
</a>
