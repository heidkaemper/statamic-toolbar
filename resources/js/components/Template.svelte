<script>
    export let template
</script>

<div title="Template: {template}" class="cell">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 15 15" class="cell_icon">
        <path d="M8.75 1.42V4c0 .35 0 .53.07.66.06.12.15.21.27.27.13.07.31.07.66.07h2.58M10 8.13H5m5 2.5H5m1.25-5H5m3.75-4.38H5.5c-1.05 0-1.58 0-1.98.2-.35.18-.64.47-.82.82-.2.4-.2.93-.2 1.98v6.5c0 1.05 0 1.58.2 1.98.18.35.47.64.82.82.4.2.93.2 1.98.2h4c1.05 0 1.58 0 1.98-.2.35-.18.64-.47.82-.82.2-.4.2-.93.2-1.98V5L8.75 1.25Z"/>
    </svg>

    <span class="cell_content">
        {template}
    </span>
</div>
