<script lang="ts" context="module">
  import { apiKey } from '../../constants/newsapi';
  import { BASE_PATH } from '../../constants/basePath';

  export async function preload() {
    const res = await this.fetch(`${BASE_PATH}sources?apiKey=${apiKey}`);

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
