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
</script>

<style>
  .article:first-of-type {
    margin-top: 0;
  }

  img {
    font-size: 0;
  }
</style>

<div class="article max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
  {#if urlToImage}
    <a href={url}>
      <img class="w-full" src={urlToImage} alt={title} />
    </a>
  {/if}

  <div class="px-6 py-4">
    <a href={url}>
      <div class="font-bold text-xl mb-2">{title}</div>
    </a>

    {#if description}
      <p class="text-gray-700 text-base">
        {@html description}
      </p>
    {/if}
  </div>

  <div class="px-6 py-4">
    <!-- {#if author}
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
        font-semibold text-gray-700 mr-2">
        {author}
      </span>
    {/if} -->

    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
      font-semibold text-gray-700 mr-2">
      {date.getFullYear()}.{date.getMonth()}.{date.getDate()}
    </span>

    {#if showSource}
      <a rel="prefetch" href="publishers/{source.name}">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold text-gray-700">
          {source.name}
        </span>
      </a>
    {/if}
  </div>
</div>
