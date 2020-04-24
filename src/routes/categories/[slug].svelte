<script context="module">
  import { apiKey } from '../../config/newsapi';

  export async function preload({ params, query }) {
    const res = await this.fetch(
      `https://newsapi.org/v2/top-headlines?category=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200) {
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

<Masonry>
  {#each articles as article}
    <Article data={article} showSource={false} />
  {/each}
</Masonry>
