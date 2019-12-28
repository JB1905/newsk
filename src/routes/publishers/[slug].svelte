<script context="module">
  import { apiKey } from '../../config/newsapi';

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
  import Head from '../../components/Head.svelte';
  import SectionTitle from '../../components/SectionTitle.svelte';
  import Masonry from '../../components/Masonry.svelte';
  import Article from '../../components/Article.svelte';

  export let articles;
</script>

<Head routeTitle={articles[0].source.name} />

<SectionTitle>Latest from: {articles[0].source.name}</SectionTitle>

<Masonry>
  {#each articles as article}
    <Article data={article} showSource={false} />
  {/each}
</Masonry>
