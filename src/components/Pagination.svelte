<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let totalPages = 1;
  export let activePage = 0;

  const switchPage = async (page: number) => {
    activePage = page;

    dispatch('change', {
      page,
    });
  };

  const isInRange = (page: number) => {
    if (page < 3 || page >= totalPages - 3) {
      return true;
    }

    if (page > activePage - 3 && page < activePage + 3) {
      return true;
    }

    return false;
  };
</script>

<style>
  .mouse-pointer:hover {
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  .page {
    padding: 0.5em 1em;
    border-left: 1px solid lightblue;
    border-top: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
  }
  .page:last-of-type {
    border-right: 1px solid lightblue;
  }
  .page:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .page.active {
    background-color: rgb(129, 200, 176);
  }
</style>

<!--<script>
  export let items;
  export let perPage = 10;
  export let currentPage;
</script>{#if items > perPage}
  <div class="flex justify-center mt-4 mb-2">
    <nav class="relative z-0 inline-flex shadow-sm">
      <a
        href="#"
        class="relative inline-flex items-center px-2 py-2 rounded-l-md border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500
        hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300
        focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500
        transition ease-in-out duration-150"
        aria-label="Previous">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414
            1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
      </a>
      <a
        href="#"
        class="-ml-px relative inline-flex items-center px-4 py-2 border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700
        hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300
        focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
        transition ease-in-out duration-150">
        1
      </a>
      <a
        href="#"
        class="-ml-px relative inline-flex items-center px-4 py-2 border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700
        hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300
        focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
        transition ease-in-out duration-150">
        2
      </a>
      <a
        href="#"
        class="hidden md:inline-flex -ml-px relative items-center px-4 py-2
        border border-gray-300 bg-white text-sm leading-5 font-medium
        text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none
        focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100
        active:text-gray-700 transition ease-in-out duration-150">
        3
      </a>
      <span
        class="-ml-px relative inline-flex items-center px-4 py-2 border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
        ...
      </span>
      <a
        href="#"
        class="hidden md:inline-flex -ml-px relative items-center px-4 py-2
        border border-gray-300 bg-white text-sm leading-5 font-medium
        text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none
        focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100
        active:text-gray-700 transition ease-in-out duration-150">
        8
      </a>
      <a
        href="#"
        class="-ml-px relative inline-flex items-center px-4 py-2 border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700
        hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300
        focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
        transition ease-in-out duration-150">
        9
      </a>
      <a
        href="#"
        class="-ml-px relative inline-flex items-center px-4 py-2 border
        border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700
        hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300
        focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700
        transition ease-in-out duration-150">
        10
      </a>
      <a
        href="#"
        class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md
        border border-gray-300 bg-white text-sm leading-5 font-medium
        text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none
        focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100
        active:text-gray-500 transition ease-in-out duration-150"
        aria-label="Next">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0
            011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd" />
        </svg>
      </a>
    </nav>
  </div>
{/if} -->
<nav>
  <ul>
    {#each Array(totalPages) as ignoredVal, currentPage}
      {#if isInRange(currentPage)}
        <li
          class:active={currentPage === activePage}
          class="page mouse-pointer"
          on:click={() => switchPage(currentPage)}>
          {currentPage + 1}
        </li>
      {:else if isInRange(Math.max(currentPage - 1, 0))}
        <li>...</li>
      {/if}
    {/each}
  </ul>
</nav>
