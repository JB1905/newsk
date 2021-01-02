<script context="module">
  import { apiKey } from '../../constants/newsapi.ts';

  export async function preload({ params }) {
    const res = await this.fetch(
      `${BASE_PATH}top-headlines?sources=${params.slug}&apiKey=${apiKey}`
    );

    const data = await res.json();

    if (res.status === 200 && data.articles.length > 0) {
      return {
        articles: data.articles,
        totalResults: data.totalResults,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../../components/Head.svelte';
  import SectionTitle from '../../components/SectionTitle.svelte';
  import Article from '../../components/Article.svelte';

  export let articles;

  export const source = articles[0].source;
</script>

<Head routeTitle={source.name} />

<SectionTitle>Latest from: {source.name}</SectionTitle>

{#each articles as article}
  <Article data={article} showSource={false} />
{/each}
