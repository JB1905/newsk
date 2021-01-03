<script lang="ts" context="module">
  import queryString from 'query-string';

  import { apiKey } from '../../constants/newsapi';
  import { BASE_PATH } from '../../constants/basePath';

  export async function preload() {
    // TODO
    const url = queryString.stringifyUrl(
      {
        url: `${BASE_PATH}sources`,
        query: {
          apiKey,
        },
      },
      {
        skipEmptyString: true,
      }
    );

    const res = await this.fetch(url);

    const data = await res.json();

    if (res.status === 200 && data.sources.length > 0) {
      return { publishers: data.sources };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Head from '../../components/Head.svelte';
  import Publisher from '../../components/Publisher.svelte';

  export let publishers;
</script>

<Head routeTitle="Publishers" />

{#each publishers as publisher}
  <Publisher data={publisher} />
{/each}
