@if($site)
    <a title="Site: {{ $site }}" class="toolbar_cell">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="toolbar_cell_icon">
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM4 16a12 12 0 0 1 4-9v2a2 2 0 0 0 2 2h3.4a2 2 0 0 0 1.8-1.1l.4-.9H18v4h-4.8a2 2 0 0 0-.9.2l-3.2 1.6A2 2 0 0 0 8 16.6v3.7a2 2 0 0 0 1.3 1.9l3.8 1.5.7 4A12 12 0 0 1 4 16Zm11.8 12-1-5.7-4.8-2v-3.7l3.2-1.6H20V7h-5.6l-1 2H10V5.6A12 12 0 0 1 27.3 12H22v4l1 3.8-2 2.9v4.2a12 12 0 0 1-5 1.1h-.2Zm7.2-2.3v-2.4l1.6-2.4a2 2 0 0 0 .3-1.6L24 16v-2h3.8A11.8 11.8 0 0 1 23 25.7Z"/>
        </svg>

        <span class="toolbar_cell_content">
            {{ $site }}
        </span>
    </a>
@endif
