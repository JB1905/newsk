<script>
  import Head from '../../components/Head.svelte';

  import { categories } from '../../constants';
</script>

<Head routeTitle="Countries" />

<div class="flex-col justify-center flex flex-1 h-full">
  {#each categories as category, index}
    <a href="/categories/{category}">
      <h3
        class="text-black hover:text-gray-600 dark-mode:text-white capitalize
        text-center text-2xl py-2 {index === categories.length - 1 ? '' : 'border-b'}">
        {category}
      </h3>
    </a>
  {/each}
</div>
