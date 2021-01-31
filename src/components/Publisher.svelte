<script lang="ts">
  interface Data {
    readonly id: string;
    readonly name: string;
    readonly description: string;
  }

  export let data: Data;

  const { id, name, description } = data;
</script>

<div
  class="w-full overflow-hidden mx-auto border-b border-gray-400
  dark:border-gray-600"
>
  <div class="px-0 py-5">
    <a href="publishers/{id}">
      <h3 class="font-bold text-xl dark:text-white mb-2">{name}</h3>
    </a>

    {#if description}
      <p class="text-gray-700 dark:text-gray-500 text-base">
        {@html description}
      </p>
    {/if}
  </div>
</div>
