<script>
  export let data;
  export let showSource = true;

  const {
    title,
    description,
    author,
    url,
    urlToImage,
    publishedAt,
    source
  } = data;

  const date = new Date(publishedAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
</script>

<style>
  .article {
    break-inside: avoid;
    display: inline-block;
    position: relative;
  }

  img {
    font-size: 0;
  }
</style>

<div
  class="article max-w-sm rounded dark-mode:bg-gray-900 overflow-hidden
  shadow-lg mx-auto mb-8">
  {#if urlToImage}
    <a href={url}>
      <img class="w-full" src={urlToImage} alt={title} />
    </a>
  {/if}

  <div class="px-6 py-4">
    <a href={url}>
      <h3 class="font-bold text-xl dark-mode:text-white mb-2">{title}</h3>
    </a>

    {#if description}
      <p class="text-gray-700 dark-mode:text-gray-500 text-base">
        {@html description}
      </p>
    {/if}
  </div>

  <div class="px-6 py-4">
    <span
      class="inline-block bg-gray-200 dark-mode:bg-gray-800 rounded-full px-3
      py-1 text-sm font-semibold text-gray-700 dark-mode:text-gray-500 mr-2">
      {year}.{month > 9 ? month : `0${month}`}.{day > 9 ? day : `0${day}`}
    </span>

    {#if author}
      <span
        class="inline-block bg-gray-200 dark-mode:bg-gray-800 rounded-full px-3
        py-1 text-sm font-semibold text-gray-700 dark-mode:text-gray-500 mr-2">
        {@html author}
      </span>
    {/if}

    {#if showSource}
      <a rel="prefetch" href="publishers/{source.id}">
        <span
          class="inline-block bg-gray-200 dark-mode:bg-gray-800 rounded-full
          px-3 py-1 text-sm font-semibold text-gray-700 dark-mode:text-gray-500">
          {source.name}
        </span>
      </a>
    {/if}
  </div>
</div>
