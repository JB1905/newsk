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

<!-- <p>News type</p>
<div class="inline-block relative w-64">
  <select
    class="block appearance-none w-full bg-white border border-gray-400
    hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight
    focus:outline-none focus:shadow-outline">
    <option />
    <option>Top Headlines</option>
    <option>Everything</option>
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2
    text-gray-700">
    <svg
      class="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
        4.343 8z" />
    </svg>
  </div>
</div> -->

<!-- <p>Category</p>
<div class="inline-block relative w-64">
  <select
    class="block appearance-none w-full bg-white border border-gray-400
    hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight
    focus:outline-none focus:shadow-outline">
    <option />
    <option>Top Headlines</option>
    <option>Everything</option>
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2
    text-gray-700">
    <svg
      class="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
        4.343 8z" />
    </svg>
  </div>
</div> -->

<!-- <Masonry> -->
{#each articles as article}
  <Article data={article} />
{/each}
<!-- </Masonry> -->

<button
  class="bg-white dark-mode:bg-gray-900 hover:bg-gray-100
  dark-mode:hover:bg-gray-800 text-gray-800 dark-mode:text-gray-400
  font-semibold py-2 px-4 border border-gray-200 dark-mode:border-gray-800
  rounded-lg shadow">
  Load More
</button>
