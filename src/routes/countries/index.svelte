<script>
  import Head from '../../components/Head.svelte';

  import { countries } from '../../constants';
</script>

<Head routeTitle="Countries" />

{#each countries as country}
  <a href="/countries/{country}">
    <p
      class="text-black dark-mode:text-white uppercase text-center text-2xl py-1">
      {country}
    </p>
  </a>
{/each}
