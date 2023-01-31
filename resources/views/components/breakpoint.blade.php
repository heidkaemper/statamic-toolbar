<a title="Current Breakpoint" class="toolbar_cell">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="toolbar_cell_icon">
        <path d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"/>
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
