<script lang="ts">
  import Head from '../components/Head.svelte';
	
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<Head routeTitle="Something went wrong!" />

<!-- <svelte:head>
	<title>{status}</title>
</svelte:head> -->

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
