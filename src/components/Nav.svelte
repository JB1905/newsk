<script>
  export let navigation;
</script>

<nav class="absolute mr-0 w-48">
  <ul
    class="flex flex-col justify-center text-gray-700 bg-white
    dark-mode:bg-gray-900 dark-mode:text-gray-500 rounded-lg mt-2 shadow-lg">
    {#each navigation as navigationItem}
      <li class="mx-3 py-3">
        <a rel="prefetch" href={navigationItem.href}>{navigationItem.title}</a>
      </li>
    {/each}
  </ul>
</nav>
