<script>
  import { onMount } from 'svelte';

  import Article from '../components/Article.svelte';

  import { apiKey } from '../api/newsapi';

  export let location;

  export let type = 'everything';

  let articles = [];

  onMount(async () => {
    const res = await fetch(
      `https://newsapi.org/v2/${type}${location.search}&apiKey=${apiKey}`
    );

    const data = await res.json();

    articles = data.articles;
  });
</script>

<style>
  @media (min-width: 600px) {
    main {
      column-gap: 20px;
      column-count: 2;
    }
  }
</style>

<main>
  {#each articles as article}
    <Article data={article} />
  {/each}
</main>
