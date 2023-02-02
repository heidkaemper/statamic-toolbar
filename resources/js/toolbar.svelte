<svelte:options tag="statamic-toolbar" />

<style src="./../css/toolbar.scss"></style>

<script>
    export let breakpoints = undefined;
    export let site = undefined;
	export let template = undefined;
    export let cp_link = undefined;

    console.log(breakpoints);
</script>

<div id="toolbar">
    {#if breakpoints}
        <div title="Current Breakpoint" class="cell">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="cell_icon">
                <path d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"/>
            </svg>
        
            <span class="cell_content cell_breakpoint"></span>
        </div>
    {/if}

    {#if site}
        <div title="Site: {site}" class="cell">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="cell_icon">
                <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2ZM4 16a12 12 0 0 1 4-9v2a2 2 0 0 0 2 2h3.4a2 2 0 0 0 1.8-1.1l.4-.9H18v4h-4.8a2 2 0 0 0-.9.2l-3.2 1.6A2 2 0 0 0 8 16.6v3.7a2 2 0 0 0 1.3 1.9l3.8 1.5.7 4A12 12 0 0 1 4 16Zm11.8 12-1-5.7-4.8-2v-3.7l3.2-1.6H20V7h-5.6l-1 2H10V5.6A12 12 0 0 1 27.3 12H22v4l1 3.8-2 2.9v4.2a12 12 0 0 1-5 1.1h-.2Zm7.2-2.3v-2.4l1.6-2.4a2 2 0 0 0 .3-1.6L24 16v-2h3.8A11.8 11.8 0 0 1 23 25.7Z"/>
            </svg>

            <span class="cell_content">
                { site }
            </span>
        </div>
    {/if}

    {#if template}
        <div title="Template: {template}" class="cell">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="cell_icon">
                <path d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"/>
            </svg>

            <span class="cell_content">
                { template }
            </span>
        </div>
    {/if}

    {#if cp_link}
        <a href={ cp_link } target="_blank" rel="noreferrer" title="Edit this page" class="cell">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="cell_icon">
                <path d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6a2 2 0 0 0-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"/>
            </svg>

            <span class="cell_content">
                Edit
            </span>
        </a>
    {/if}
</div>
