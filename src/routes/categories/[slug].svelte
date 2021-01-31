<script lang="ts" context="module">
  import queryString from 'query-string';

  import { apiKey } from '../../constants/newsapi';
  import { BASE_PATH } from '../../constants/basePath';

  export async function preload({ params, query }) {
    const page = query.page || 1;

    // TODO
    const url = queryString.stringifyUrl(
      {
        url: `${BASE_PATH}top-headlines`,
        query: {
          category: params.slug,
          page,
          apiKey,
        },
      },
      {
        skipEmptyString: true,
      }
    );

    const res = await this.fetch(url, {
      'Access-Control-Allow-Origin': '*',
    });

    const data = await res.json();

    if (res.status === 200 && data.articles.length > 0) {
      return {
        title: `${params.slug[0].toUpperCase()}${params.slug.slice(1)}`,
        articles: data.articles,
        totalResults: data.totalResults,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Head from '../../components/Head.svelte';
  import SectionTitle from '../../components/SectionTitle.svelte';
  import Article from '../../components/Article.svelte';
  import Pagination from '../../components/Pagination.svelte';

  export let title;
  export let articles;
  export let totalResults;
</script>

<Head routeTitle={title} />

<SectionTitle>Latest for category: {title}</SectionTitle>

{#each articles as article}
  <Article data={article} showSource={false} />
{/each}

<Pagination items={totalResults} />
