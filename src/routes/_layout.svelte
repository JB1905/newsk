<script>
  import Nav from '../components/Nav.svelte';

  import { navigation } from '../constants/navigation';
</script>

<style>
  .container {
    max-width: 24rem;
  }

  @media (min-width: 780px) {
    .container {
      max-width: 780px;
    }
  }
</style>

<main class="container mx-auto px-4 min-h-screen flex flex-col">
  <header>
    <a rel="prefetch" href="/">
      <h1 class="text-4xl font-black dark-mode:text-white py-8 text-center">
        newsK
      </h1>
    </a>

    <Nav {navigation} />
  </header>

  <div class="container flex-1 flex flex-col">
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
