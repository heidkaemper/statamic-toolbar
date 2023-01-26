@if($template)
    <a title="Template: {{ $template }}" class="toolbar_cell">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" class="toolbar_cell_icon">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.8-2.6a7 7 0 0 0 4.2-5.9c-.8.5-1.9.8-3 1.1-.2 1.9-.6 3.5-1.2 4.8ZM9.2 5.6a7 7 0 0 0-4 4.6l1.2.8 1.6.5c0-2.3.5-4.4 1.2-6Zm.9 8.3c.2 1.5.5 2.7.9 3.7l.8 1.2.2.2.2-.2.8-1.2c.4-1 .7-2.2.9-3.7a20 20 0 0 1-3.8 0Zm-2-.3c.1 1.9.5 3.5 1 4.8a7 7 0 0 1-4-5.9c.7.5 1.8.8 3 1.1Zm5.9-1.7a17.8 17.8 0 0 1-4 0c0-2.2.4-4.2 1-5.5l.8-1.2.2-.2.2.2.8 1.2c.6 1.3 1 3.3 1 5.5Zm2-.4c0-2.3-.5-4.4-1.2-6a7 7 0 0 1 4 4.7l-1.2.8-1.6.5Z"/>
        </svg>

        <span class="toolbar_cell_content">
            {{ $template }}
        </span>
    </a>
@endif
