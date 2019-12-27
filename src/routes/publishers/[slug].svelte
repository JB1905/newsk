<script context="module">
  import { apiKey } from '../../api/newsapi';

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/top-headlines?sources=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200) {
      return { title: params.slug, articles: data.articles };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Masonry from '../../components/Masonry.svelte';
  import Article from '../../components/Article.svelte';

  export let title;
  export let articles;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h2 class="text-2xl mb-4 font-medium">Last from: {title}</h2>

<Masonry>
  {#each articles as article}
    <Article data={article} showSource={false} />
  {/each}
</Masonry>
