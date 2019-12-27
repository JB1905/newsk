<script>
  import { onMount } from 'svelte';

  import { apiKey } from '../api/newsapi';

  let sources = [];

  onMount(async () => {
    const res = await fetch(
      `https://newsapi.org/v2/sources${location.search}?apiKey=${apiKey}`
    );

    const data = await res.json();

    sources = data.sources;
  });
</script>
