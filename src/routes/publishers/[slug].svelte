<script context="module">
  import { apiKey } from '../../config/newsapi';

  export async function preload({ params }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/top-headlines?sources=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

    // console.log(data.articles[0].source.id);

    if (res.status === 200 && data.articles.length > 0) {
      return { title: params.slug, articles: data.articles };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../../components/Head.svelte';
  import SectionTitle from '../../components/SectionTitle.svelte';
  import Article from '../../components/Article.svelte';

  import { favorite } from '../../store.js';

  export let articles;

  export const source = articles[0].source;

  let fav = null;

  favorite.subscribe(item => {
    fav = item;
  });

  function toggleFavorites() {
    if (fav.includes(source.name)) {
      fav = fav.filter(item => item !== source.name);
    } else {
      fav = [...fav, source.name];
    }
  }
</script>

<Head routeTitle={source.name} />

<SectionTitle>Latest from: {source.name}</SectionTitle>

<button on:click={toggleFavorites}>{fav.includes(source.name)}</button>

{#each articles as article}
  <Article data={article} showSource={false} />
{/each}

<!-- <LoadMore /> -->
