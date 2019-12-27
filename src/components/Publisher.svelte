<script>
  export let data;

  const { id, name, description } = data;
</script>

<div class="publisher max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
  <div class="px-6 py-4">
    <a href="publishers/{id}">
      <div class="font-bold text-xl mb-2">{name}</div>
    </a>

    {#if description}
      <p class="text-gray-700 text-base">
        {@html description}
      </p>
    {/if}
  </div>
</div>
