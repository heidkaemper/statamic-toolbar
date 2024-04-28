<svelte:window bind:innerWidth={windowWidth} />

<script>
    import Storage from './../helper/Storage'

    export let breakpoints

    let windowWidth = 0
    let isButton = Object.keys(breakpoints).length >= 1
    let type = 'width'

    if (isButton) {
        type = Storage.get('statamic.toolbar.breakpoints.type') ?? 'labels'
    }

    function handleClick() {
        if (! isButton) {
            return
        }

        switch (type) {
            case 'labels':
                type = 'both'
                break
            case 'both':
                type = 'width'
                break
            default:
                type = 'labels'
        }

        Storage.set('statamic.toolbar.breakpoints.type', type)
    }

    function getMediaQueryStyles() {
        let styles = '.breakpoints::before { content: "\\2014" }'

        Object.entries(breakpoints).forEach(function (breakpoint) {
            styles += `@media (${breakpoint[1]}) { .breakpoints::before { content: "${breakpoint[0]}" } }`
        })

        // https://github.com/sveltejs/svelte/issues/5292
        return `<${''}style>${styles}</${''}style>`
    }
</script>

<div
    on:click={ handleClick }
    role="{ isButton ? 'button' : 'none' }"
    title="{ type === 'width' ? 'Window width' : 'Current Breakpoint' }"
    class="cell"
>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 15 15" class="cell_icon">
        <path d="M1.25 8.75h12.5M5 13.13h5m-5.75-1.88h6.5c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V4.87c0-1.05 0-1.57-.2-1.97a1.87 1.87 0 0 0-.82-.82c-.4-.2-.93-.2-1.98-.2h-6.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.92-.2 1.98v3.37c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2Z"/>
    </svg>

    <span class="cell_content cell_breakpoint_indicator">
        {#if type === 'labels' || type === 'both'}
            <span class="breakpoints">
                {@html getMediaQueryStyles()}
            </span>
        {/if}

        {#if type === 'width' || type === 'both'}
            <span class="screen_width">{windowWidth} px</span>
        {/if}
    </span>
</div>
