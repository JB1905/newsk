<script>
  export let data;

  const { id, name, description } = data;

  // let fav = null;

  // favorite.subscribe(item => {
  //   fav = item;
  // });

  // function toggleFavorites() {
  //   if (fav.includes(source.name)) {
  //     fav = fav.filter(item => item !== source.name);
  //   } else {
  //     fav = [...fav, source.name];
  //   }
  // }
</script>

<div
  class="publisher w-full overflow-hidden mx-auto border-b border-gray-400
  dark-mode:border-gray-600">
  <div class="px-0 py-5">
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
