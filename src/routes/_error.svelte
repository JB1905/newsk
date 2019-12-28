<script>
  import Head from '../components/Head.svelte';

  const dev = process.env.NODE_ENV === 'development';
</script>

<Head routeTitle="Something went wrong!" />

<div
  class="w-full max-w-sm mx-auto px-8 pt-10 pb-10 mb-8 text-center flex flex-col
  flex-1 justify-center">
  <h3 class="text-5xl text-center font-bold dark-mode:text-white">Ooops!!!</h3>

  <p class="dark-mode:text-gray-500">Something went wrong</p>
</div>
