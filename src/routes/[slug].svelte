<script context="module">
  import { apiKey } from '../config/newsapi';

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/${params.slug}?q=${query.q}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200) {
      return { query: query.q, articles: data.articles };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../components/Head.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import Masonry from '../components/Masonry.svelte';
  import Article from '../components/Article.svelte';

  export let query;
  export let articles;
</script>

<Head routeTitle="Results for: {query}" />

<SectionTitle>Results for: {query}</SectionTitle>

<Masonry>
  {#each articles as article}
    <Article data={article} />
  {/each}
</Masonry>
