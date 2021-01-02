<script lang="ts">
  interface NavigationItem {
   readonly title: string;
   readonly href: string;
  }

  export let navigation: NavigationItem[];

  import Overlay from '../components/Overlay.svelte';
</script>

<Overlay>
  <div
    class="flex-col justify-center flex flex-1 h-full w-full max-w-xl px-4 mx-auto">
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
