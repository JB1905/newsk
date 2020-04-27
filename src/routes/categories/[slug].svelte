<script context="module">
  // import FaStar from 'svelte-icons/fa/FaStar.svelte';

  import { apiKey } from '../../config/newsapi';

  export async function preload({ params }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/top-headlines?category=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200 && data.articles.length > 0) {
      return {
        title: `${params.slug[0].toUpperCase()}${params.slug.slice(1)}`,
        articles: data.articles
      };
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

  export let title;
  export let articles;
</script>

<Head routeTitle={title} />

<SectionTitle>Latest for category: {title}</SectionTitle>

{#each articles as article}
  <Article data={article} showSource={false} />
{/each}

<button
  class="bg-white dark-mode:bg-gray-900 hover:bg-gray-100
  dark-mode:hover:bg-gray-800 text-gray-800 dark-mode:text-gray-400
  font-semibold py-2 px-4 border border-gray-200 dark-mode:border-gray-800
  rounded-lg shadow">
  Load More
</button>

<!-- 
<button
  class="bg-pink-800 text-white font-bold py-2 px-4 rounded-full fixed w-10 h-10
  b-2 r-2 shadow-md">
  <FaStar />
</button> -->
