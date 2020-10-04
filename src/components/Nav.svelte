<script lang="ts">
  export let navigation;

  import Overlay from '../components/Overlay.svelte';
</script>

<Overlay>
  <div class="flex-col justify-center flex flex-1 h-full w-full max-w-xl px-4">
    {#each navigation as navigationItem, index}
      <a rel="prefetch" href={navigationItem.href}>
        <h3
          class="text-black hover:text-gray-600 dark-mode:text-white capitalize
          text-center text-2xl py-2 {index === navigation.length - 1 ? '' : 'border-b border-gray-400 dark-mode:border-gray-600'}">
          {navigationItem.title}
        </h3>
      </a>
    {/each}
  </div>
</Overlay>
