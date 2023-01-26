@if ($edit_url)
    <a href="{{ $edit_url }}" target="_blank" title="Edit this page" class="toolbar_cell">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" class="toolbar_cell_icon">
            <path d="M21.3 2.3a1 1 0 0 0-1.5 0l-.8.9a3 3 0 0 0-3.4.6L5 14.4l5.6 5.6L21.2 9.4a3 3 0 0 0 .6-3.4l.9-.9c.4-.4.4-1 0-1.4l-1.4-1.4ZM17 10.8l-6.4 6.4-2.8-2.8L14.2 8l2.8 2.8ZM18.8 9l1-1c.4-.4.4-1 0-1.4l-1.4-1.4a1 1 0 0 0-1.4 0l-1 1L18.8 9Z"/>
            <path d="m2 23 2.1-7.8 5.7 5.6L2 23Z"/>
        </svg>

        <span class="toolbar_cell_content">
            Edit
        </span>
    </a>
@endif
