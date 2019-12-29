<script>
  import { onMount } from 'svelte';

  import Nav from '../components/Nav.svelte';

  import { navigation } from '../constants';

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
</script>

<style>
  .page {
    min-height: 100vh;
    min-height: var(--vh);
  }
</style>

<main class="page max-w-sm md:max-w-3xl mx-auto px-4 flex flex-col">
  <header>
    <a rel="prefetch" href="/">
      <h1 class="text-4xl font-black dark-mode:text-white py-8 text-center">
        newsK
      </h1>
    </a>

    <Nav {navigation} />
  </header>

  <div class="flex-1 flex flex-col">
    <slot />
  </div>

  <footer class="py-8 text-center">
    <a
      href="https://newsapi.org/"
      class="text-lg font-bold text-gray-800 dark-mode:text-gray-500">
      Powered by News API
    </a>
  </footer>
</main>
