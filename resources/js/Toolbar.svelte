<svelte:options customElement="statamic-toolbar" />

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
    let debugbarStatus = null

    onMount(() => {
        fetch(endpoint + '?origin=' + encodeURIComponent(document.location.href))
            .then(response => response.json())
            .then(response => toolbar = response)

        const debugbar = document.documentElement.querySelector('.phpdebugbar')

        if (debugbar) {
            new DebugbarObserver(debugbar, status => debugbarStatus = status)
        }
    })
</script>

<div
    id="toolbar"
    class:isHidden
    class:debugbarClosed={ debugbarStatus === 'closed' }
    class:debugbarMinimized={ debugbarStatus === 'minimized' }
    theme={toolbar?.theme ?? 'auto'}
>
    {#if toolbar?.breakpoints}
        <Breakpoints breakpoints={toolbar.breakpoints}/>
    {/if}

    {#if toolbar?.site}
        <Site site={toolbar.site}/>
    {/if}

    {#if toolbar?.template}
        <Template template={toolbar.template}/>
    {/if}

    {#if toolbar?.cp_link}
        <CpLink cp_link={toolbar.cp_link}/>
    {/if}

    {#if toolbar?.visibility}
        <Visibility callback={hidden => isHidden = hidden}/>
    {/if}

    <style src="./../css/toolbar.scss"></style>
</div>
