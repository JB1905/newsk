<script lang="ts">
  export let navigation;

  import Overlay from '../components/Overlay.svelte';
</script>

<Overlay>
  <nav class="w-48">
    <ul
      class="flex flex-col justify-center text-gray-700 bg-white bg-opacity-75
      dark:bg-gray-900 dark:text-gray-500 rounded-b-lg shadow-lg mx-4
      backdrop-blur"
    >
      {#each navigation as navigationItem}
        <li class="mx-3 py-3">
          <a rel="prefetch" href={navigationItem.href}>
            {navigationItem.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</Overlay>
