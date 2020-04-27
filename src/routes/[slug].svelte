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

  export let query;
  export let articles;
</script>

<Head routeTitle="Results for: {query}" />

<SectionTitle>Results for: {query}</SectionTitle>

{#each articles as article}
  <Article data={article} />
{/each}

<button
  class="bg-white dark-mode:bg-gray-900 hover:bg-gray-100
  dark-mode:hover:bg-gray-800 text-gray-800 dark-mode:text-gray-400
  font-semibold py-2 px-4 border border-gray-200 dark-mode:border-gray-800
  rounded-lg shadow"
  on:click>
  Load More
</button>
