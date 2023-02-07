<svelte:window bind:innerWidth={windowWidth} />

<script>
    import { onMount } from 'svelte';

    export let breakpoints;
    
    let windowWidth = 0;
    let type = 'width';

    $: isButton = breakpoints === 'labels';

    onMount(() => {
        if (breakpoints === 'labels') {
            type = 'labels';
        }
    });

    function handleClick() {
        if (! isButton) {
            return;
        }

        switch (type) {
            case 'labels':
                return type = 'both';
            case 'both':
                return type = 'width';
            default:
                return type = 'labels';
        }
	}
</script>

<div
    on:click={ handleClick }
    role="{ isButton ? 'button' : 'none' }"
    title="{ type === 'width' ? 'Window width' : 'Current Breakpoint' }"
    class="cell"
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="cell_icon">
        <path d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2ZM6 6v20h20V6Z M22 16h2V8h-8v2h6v6zM8 24h8v-2h-6v-6H8v8z"/>
    </svg>

    <span class="cell_content cell_breakpoint_indicator">
        {#if type === 'labels' || type === 'both'}
            <span class="breakpoints">
                <slot></slot>
            </span>
        {/if}

        {#if type === 'width' || type === 'both'}
            <span class="screen_width">{windowWidth} px</span>
        {/if}
    </span>
</div>
