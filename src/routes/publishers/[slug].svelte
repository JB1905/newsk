<script context="module">
  import { apiKey } from '../../config/newsapi';

  export async function preload({ params }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/top-headlines?sources=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

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
  import Masonry from '../../components/Masonry.svelte';
  import Article from '../../components/Article.svelte';

  export let articles;
</script>

<Head routeTitle={articles[0].source.name} />

<SectionTitle>Latest from: {articles[0].source.name}</SectionTitle>

{#each articles as article}
  <Article data={article} showSource={false} />
{/each}

{#if articles.length > 0}
  <button
    class="bg-white dark-mode:bg-gray-900 hover:bg-gray-100
    dark-mode:hover:bg-gray-800 text-gray-800 dark-mode:text-gray-400
    font-semibold py-2 px-4 border border-gray-200 dark-mode:border-gray-800
    rounded-lg shadow">
    Load More
  </button>
{/if}
