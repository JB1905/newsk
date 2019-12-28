<script>
  export let data;

  const { id, name, description } = data;
</script>

<div
  class="publisher max-w-sm rounded dark-mode:bg-gray-900 overflow-hidden
  shadow-lg mx-auto my-4">
  <div class="px-6 py-4">
    <a href="publishers/{id}">
      <h3 class="font-bold text-xl dark-mode:text-white mb-2">{name}</h3>
    </a>

    {#if description}
      <p class="text-gray-700 dark-mode:text-gray-500 text-base">
        {@html description}
      </p>
    {/if}
  </div>
</div>
