<script context="module">
  import { apiKey } from '../config/newsapi';

  // let articles = [];

  // let page = 0;

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/${params.slug}?q=${query.q}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200 && data.articles.length > 0) {
      // articles.push(data.articles);

      // page++;

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
  import LoadMore from '../components/LoadMore.svelte';

  export let query;
  export let articles;
</script>

<Head routeTitle="Results for: {query}" />

<SectionTitle>Results for: {query}</SectionTitle>

{#each articles as article}
  <Article data={article} />
{/each}

<LoadMore />
