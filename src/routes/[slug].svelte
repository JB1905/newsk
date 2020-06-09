<script context="module">
  import { apiKey } from "../config/newsapi";

  export async function preload({ params, query }) {
    const queryParams = Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const res = await this.fetch(
      `https://newsapi.org/v2/${params.slug}?q=${query.q}&${queryParams}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200 && data.articles.length > 0) {
      return {
        query: query.q,
        articles: data.articles,
        total: data.totalResults
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../components/Head.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import Article from '../components/Article.svelte';
  import Pagination from '../components/Pagination.svelte';

  export let query;
  export let articles;
  // export let total;
</script>

<Head routeTitle="Results for: {query}" />

<SectionTitle>Results for: {query}</SectionTitle>

{#each articles as article}
  <Article data={article} />
{/each}
