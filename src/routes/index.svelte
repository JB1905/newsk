<script>
  import Head from '../components/Head.svelte';

  import { favorite } from '../store.js';

  let fav = null;

  favorite.subscribe(item => {
    fav = item;
  });

  // console.log(fav);
</script>

<Head />

{#if fav.length > 0}
  <!-- <a /> -->
{:else}
  <div
    class="w-full max-w-sm mx-auto p-8 text-center flex flex-col flex-1
    justify-center">
    <h3 class="text-xl font-bold dark-mode:text-white mb-2">
      Welcome in newsK
    </h3>

    <p class="dark-mode:text-gray-500">
      Easily search for news from around the world and browse between articles
      in different languages and categories
    </p>
  </div>
{/if}
