<script>
  import Head from '../../components/Head.svelte';

  import { categories } from '../../constants';
</script>

<Head routeTitle="Countries" />

<div class="flex-col justify-center flex flex-1 h-full">
  {#each categories as category}
    <a href="/categories/{category}">
      <h3
        class="text-black dark-mode:text-white capitalize text-center text-2xl
        py-1 border-b">
        {category}
      </h3>
    </a>
  {/each}
</div>
