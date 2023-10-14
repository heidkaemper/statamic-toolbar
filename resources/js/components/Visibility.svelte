<script>
    import { onMount } from 'svelte';
    import Storage from './../helper/Storage';

    export let callback;

    let isHidden = false;

    onMount(() => {
        if (Storage.has('statamic.toolbar.hidden')) {
            isHidden = Storage.get('statamic.toolbar.hidden');

            setTimeout(() => callback(isHidden), 500);
        }
    });

    function handleClick() {
        isHidden = ! isHidden;

        Storage.set('statamic.toolbar.hidden', isHidden);

        callback(isHidden);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click={ handleClick }
    role="button"
    tabindex="-1"
    title="{ isHidden ? 'Show Toolbar' : 'Hide Toolbar' }"
    class="cell"
>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 15 15" class="cell_icon">
        {#if isHidden}
            <path d="M6.71 3.18c.26-.03.52-.06.79-.06 3.2 0 5.28 2.82 5.99 3.93.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.19.3-.48.72-.85 1.17M4.2 4.2a10 10 0 0 0-2.69 2.85c-.08.14-.13.2-.15.31a.73.73 0 0 0 0 .28c.02.1.07.17.15.3.7 1.12 2.8 3.93 5.99 3.93 1.29 0 2.4-.45 3.3-1.07M1.89 1.87l11.25 11.25M6.17 6.17a1.87 1.87 0 0 0 1.33 3.2c.52 0 .99-.2 1.33-.54"/>
        {:else}
            <path d="M1.51 7.95c-.08-.14-.13-.2-.15-.31a.73.73 0 0 1 0-.28c.02-.1.07-.17.15-.3.7-1.12 2.8-3.93 5.99-3.93 3.2 0 5.28 2.81 5.99 3.92.08.14.13.2.15.31.02.08.02.2 0 .28-.02.1-.07.17-.15.3-.7 1.12-2.8 3.93-5.99 3.93-3.19 0-5.28-2.81-5.99-3.92Z M7.5 9.38a1.87 1.87 0 1 0 0-3.75 1.87 1.87 0 0 0 0 3.75Z"/>
        {/if}
    </svg>
</div>
