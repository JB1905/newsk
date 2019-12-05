<script>
  import { onMount } from 'svelte';
  import queryString from 'query-string';

  import Article from '../components/Article.svelte';

  // export let params;
  // export let location;

  let articles = [];

  const apiKey = 'b67650059a884ec3ae9fae3360e8281e';

  const type = 'top-headlines';
  const country = 'pl';

  // console.log(location);

  // const { type = 'everything', country = 'pl' } = params;

  onMount(async () => {
    const res = await fetch(
      `https://newsapi.org/v2/${type}?country=${country}&apiKey=${apiKey}`
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
