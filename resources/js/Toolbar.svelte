<script>
    import { onMount } from 'svelte';
    import DebugbarObserver from './helper/DebugbarObserver';

    import Breakpoints from './components/Breakpoints.svelte';
    import Template from './components/Template.svelte';
    import CpLink from './components/CpLink.svelte';
    import Site from './components/Site.svelte';

    export let breakpoints = false;
    export let site = false;
	export let template = false;
    export let cp_link = false;

    let debugbarStatus = null;

    onMount(() => {
        const debugbar = document.documentElement.querySelector('.phpdebugbar');

        if (debugbar) {
            new DebugbarObserver(debugbar, status => debugbarStatus = status);
        }
    });
</script>

<div
    id="toolbar"
    class:debugbarClosed={ debugbarStatus === 'closed' }
    class:debugbarMinimized={ debugbarStatus === 'minimized' }
>
    {#if breakpoints}
        <Breakpoints {breakpoints}>
            <slot></slot>
        </Breakpoints>
    {/if}

    {#if site}
        <Site {site}/>
    {/if}

    {#if template}
        <Template {template}/>
    {/if}

    {#if cp_link}
        <CpLink {cp_link}/>
    {/if}

    <style src="./../css/toolbar.scss"></style>
</div>
