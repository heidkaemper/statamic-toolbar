<svelte:options customElement="toolbar-widget" />

<script>
    import { onMount } from 'svelte'
    import DebugbarObserver from './helper/DebugbarObserver'

    import Breakpoints from './components/Breakpoints.svelte'
    import Visibility from './components/Visibility.svelte'
    import Template from './components/Template.svelte'
    import CpLink from './components/CpLink.svelte'
    import Site from './components/Site.svelte'

    export let endpoint

    let toolbar = null
    let isHidden = false
    let debugbarWidth = null
    let debugbarHeight = null
    let debugbarStatus = null

    onMount(() => {
        fetch(endpoint + '?origin=' + encodeURIComponent(document.location.href))
            .then(response => response.json())
            .then(response => toolbar = response)

        setTimeout(() => {
            const debugbar = document.documentElement.querySelector('.phpdebugbar')

            if (debugbar) {
                new DebugbarObserver(debugbar, ({ width, height, status }) => {
                    debugbarWidth = width
                    debugbarHeight = height
                    debugbarStatus = status
                })
            }
        })
    })
</script>

<div
    id="toolbar"
    theme={toolbar?.theme ?? 'auto'}
    class:isHidden
    class:debugbarClosed={ debugbarStatus === 'closed' }
    class:debugbarMinimized={ debugbarStatus === 'minimized' }
    style:--debugbar-width={debugbarWidth ? `${debugbarWidth}px` : null}
    style:--debugbar-height={debugbarHeight ? `${debugbarHeight}px` : null}
>
    {#if toolbar?.breakpoints}
        <Breakpoints breakpoints={toolbar.breakpoints} />
    {/if}

    {#if toolbar?.site}
        <Site site={toolbar.site} />
    {/if}

    {#if toolbar?.template}
        <Template template={toolbar.template} />
    {/if}

    {#if toolbar?.cp_link}
        <CpLink cp_link={toolbar.cp_link} />
    {/if}

    {#if toolbar?.visibility}
        <Visibility callback={hidden => isHidden = hidden} />
    {/if}

    <style>
        @import "./../css/toolbar.css";
    </style>
</div>
