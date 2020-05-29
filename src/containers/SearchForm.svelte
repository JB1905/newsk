<script>
  import { goto } from '@sapper/app';

  import { countries } from '../constants/countries';
  import { categories } from '../constants/categories';

  let dataType = 'top-headlines';

  let search = '';

  const formSubmit = event => {
    if (event.key === 'Enter') {
      goto(`top-headlines?q=${search}`);
    }
  };
</script>

<div
  class="fixed bg-black bg-opacity-75 w-full h-full z-20 flex items-center
  justify-center">

  <div
    class="overflow-scroll border-t dark-mode:border-gray-800 h-full md:h-64
    bg-white dark-mode:bg-gray-900 z-50 dark-mode:text-white max-w-lg rounded-md
    shadow-md">
    <div
      class="sticky top-0 p-4 bg-white dark-mode:bg-gray-900 border-b
      border-gray-300 dark-mode:border-gray-800">
      <input
        class="border dark-mode:border-gray-700 bg-gray-200
        dark-mode:bg-gray-900 dark-mode:text-gray-500 focus:outline-none
        focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none
        leading-normal"
        type="search"
        bind:value={search}
        on:keydown={formSubmit}
        placeholder="Search..."
        aria-label="Search" />
    </div>

    <div class="px-4">
      <div class="py-2">
        <h3 class="text-xl py-2 font-bold">Data Type</h3>

        <div class="flex flex-col md:flex-row text-center">
          <label
            class="md:w-1/3 bg-gray-100 border px-4 py-2 rounded inline-block
            m-1 cursor-pointer dark-mode:bg-gray-800 dark-mode:border-gray-700">
            <input class="hidden" type="radio" name="dataType" />
            Top Headlines
          </label>

          <label
            class="md:w-1/3 bg-gray-100 border px-4 py-2 rounded inline-block
            m-1 cursor-pointer dark-mode:bg-gray-800 dark-mode:border-gray-700">
            <input class="hidden" type="radio" name="dataType" />
            Everything
          </label>

          <label
            class="md:w-1/3 bg-gray-100 border px-4 py-2 rounded inline-block
            m-1 cursor-pointer dark-mode:bg-gray-800 dark-mode:border-gray-700">
            <input class="hidden" type="radio" name="dataType" />
            Sources
          </label>
        </div>
      </div>

      {#if dataType === 'top-headlines'}
        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Country</h3>

          {#each Object.entries(countries) as [code, name]}
            <label
              class="bg-gray-100 dark-mode:bg-gray-800 border
              dark-mode:border-gray-700 px-4 py-2 rounded inline-block m-1
              cursor-pointer">
              <input class="hidden" type="checkbox" />
              {name}
            </label>
          {/each}
        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Category</h3>

          {#each categories as category}
            <label
              class="bg-gray-100 dark-mode:bg-gray-800 border
              dark-mode:border-gray-700 px-4 py-2 rounded inline-block m-1
              cursor-pointer">
              <input class="hidden" type="checkbox" />
              {category}
            </label>
          {/each}
        </div>

        <!-- <div class="py-2"> -->
        <!-- <h3 class="text-xl py-2 font-bold">Sources</h3> -->

        <!-- </div> -->
      {:else if dataType === 'everything'}
        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Sources</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Domains</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Exclude Domains</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Date Range</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Language</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Order</h3>

        </div>
      {:else if dataType === 'sources'}
        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Category</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Language</h3>

        </div>

        <div class="py-2">
          <h3 class="text-xl py-2 font-bold">Country</h3>

        </div>
      {/if}
    </div>
  </div>
</div>

<!-- 
<div class="p-4 border-t border-gray-300">
  <button
    class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
    w-full">
    Search
  </button>
</div> -->
