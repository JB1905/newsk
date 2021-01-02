<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Header>
  <a href="/">
    <h1
      class="text-3xl font-title font-black dark-mode:text-white pt-2 pb-2
			text-center">
      newsK
    </h1>
  </a>
</Header>

<main>
  <div class="flex-1 z-10 px-4 flex max-w-xl w-full mx-auto flex-col">
    <slot />
  </div>
</main>

<Footer />
