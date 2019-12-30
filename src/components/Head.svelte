<script>
  export let routeTitle = '';

  const title = `newsK${routeTitle ? ` | ${routeTitle}` : ''}`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
