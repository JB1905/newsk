<script lang="ts" context="module">
  import queryString from 'query-string';

  import { apiKey } from '../constants/newsapi';
  import { BASE_PATH } from '../constants/basePath';

  export async function preload({ params, query }) {
    const page = query.p || 1;

    // TODO
    const url = queryString.stringifyUrl(
      {
        url: `${BASE_PATH}${params.slug}`,
        query: {
          q: query.q,
          ...query,
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
        query: query.q,
        articles: data.articles,
        totalResults: data.totalResults,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Head from '../components/Head.svelte';
  import SectionTitle from '../components/SectionTitle.svelte';
  import Article from '../components/Article.svelte';
  import Pagination from '../components/Pagination.svelte';

  export let query;
  export let articles;
  export let totalResults;
</script>

<Head routeTitle="Results for: {query}" />

<SectionTitle>Results for: {query}</SectionTitle>

{#each articles as article}
  <Article data={article} />
{/each}

<Pagination items={totalResults} />
