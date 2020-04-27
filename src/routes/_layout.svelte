<script>
  import SearchForm from '../containers/SearchForm.svelte';

  import Nav from '../components/Nav.svelte';

  import { navigation } from '../constants';

  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaBars from 'svelte-icons/fa/FaBars.svelte';

  let isMenuShow = false;

  function toggleMenu() {
    isMenuShow = !isMenuShow;
  }

  let isSearchFormShow = false;

  function toggleSearchForm() {
    isSearchFormShow = !isSearchFormShow;
  }
</script>

<main class="page m-auto flex flex-col">
  <header
    class="top-0 sticky z-20 md:flex bg-white dark-mode:bg-gray-900 flex
    flex-col items-center shadow-sm overflow-hidden {isSearchFormShow ? 'h-screen' : ''}">

    <div class="max-w-xl w-full">
      <div class="h-16 flex items-center justify-between">
        <button
          class="mx-2 text-gray-700 dark-mode:text-gray-400 hover:color-gray-400
          font-bold py-2 px-4 inline-flex items-center"
          on:click={toggleMenu}>
          <div class="w-5 flex">
            <FaBars />
          </div>
        </button>

        <a rel="prefetch" href="/">
          <h1
            class="text-3xl font-title font-black dark-mode:text-white pt-2 pb-2
            text-center">
            newsK
          </h1>
        </a>

        <button
          class="mx-2 text-gray-700 dark-mode:text-gray-400 hover:color-gray-400
          font-bold py-2 px-4 inline-flex items-center"
          on:click={toggleSearchForm}>
          <div class="w-5 flex">
            <FaSearch />
          </div>
        </button>
      </div>

      <!-- <SearchForm /> -->
    </div>

    <!-- {#if isMenuShow}
      <Nav {navigation} />
    {/if} -->

  </header>

  <div class="flex-1 z-10 px-4 flex max-w-xl w-full mx-auto flex-col">
    <slot />
  </div>

  <footer class="px-4 py-6 text-center">
    <a
      href="https://newsapi.org/"
      class="text-lg font-bold text-gray-800 dark-mode:text-gray-500">
      Powered by News API
    </a>
  </footer>
</main>
