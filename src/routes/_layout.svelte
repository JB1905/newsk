<script>
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';

  import Nav from '../components/Nav.svelte';

  import { navigation } from '../constants';

  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaBars from 'svelte-icons/fa/FaBars.svelte';

  onMount(async () => {
    const setWindowSize = () => {
      const { matches } = window.matchMedia('(display-mode: standalone)');

      document.body.style.setProperty(
        '--vh',
        matches ? '100vh' : `${window.innerHeight}px`
      );
    };

    setWindowSize();

    window.addEventListener('resize', setWindowSize);
  });

  let search = '';

  const formSubmit = event => {
    if (event.key === 'Enter') {
      goto(`top-headlines?q=${search}`);
    }
  };

  let isMenuShow = false;

  const toggleMenu = () => !isMenuShow;

  // console.log(isMenuShow);
</script>

<style>
  .page {
    min-height: 100vh;
    min-height: var(--vh);
  }
</style>

<main class="page m-auto flex flex-col">
  <header
    class="border-b dark-mode:border-gray-800 top-0 sticky z-20 md:flex bg-white
    dark-mode:bg-gray-900 flex flex-col items-center shadow-sm">

    <div class="flex justify-between max-w-xl w-full">
      <button
        class="mx-2 text-gray-700 dark-mode:text-gray-400 hover:color-gray-400
        font-bold py-2 px-4 inline-flex items-center"
        on:click={toggleMenu}>
        <div class="w-5">
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
        font-bold py-2 px-4 inline-flex items-center">
        <div class="w-5">
          <FaSearch />
        </div>
      </button>
    </div>

    <div>
      <!-- <input
        class="shadow-md bg-white dark-mode:bg-gray-900 dark-mode:text-gray-500
        focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block
        w-full appearance-none leading-normal"
        type="search"
        bind:value={search}
        on:keydown={formSubmit}
        placeholder="Search..."
        aria-label="Search" /> -->

      <!-- <p class="text-lg">Data Type:</p>

      <div>
        <p>Top Headlines</p>

        <p class="text-lg">Sources:</p>
        <p class="text-lg">Categories:</p>
        <p class="text-lg">Languages:</p>
      </div>

      <div>
        <p>Everything</p>

        <p>Sources:</p>

        <p class="text-lg">Order:</p>

        <p>From:</p>
        <p>To:</p>

        <p class="text-lg">Languages:</p>
      </div>

      <div>
        <p>Sources</p>

        <p>Categories:</p>
        <p>Languages:</p>
        <p>Countries:</p>

      </div> -->
    </div>

    {#if isMenuShow}
      <Nav {navigation} />
    {/if}

  </header>

  <div class="flex-1 z-10 px-4 flex max-w-xl mx-auto flex-col">
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
