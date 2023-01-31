@if($template)
    <a title="Template: {{ $template }}" class="toolbar_cell">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="toolbar_cell_icon">
            <path d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/>
        </svg>

        <span class="toolbar_cell_content">
            {{ $template }}
        </span>
    </a>
@endif
