<script>
  export let navigation;
</script>

<nav class="pb-6">
  <ul
    class="flex justify-center font-bold text-gray-700 dark-mode:text-gray-500">
    {#each navigation as navigationItem}
      <li class="mx-3">
        <a rel="prefetch" href={navigationItem.href}>{navigationItem.title}</a>
      </li>
    {/each}
  </ul>
</nav>
