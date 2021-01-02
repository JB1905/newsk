<script lang="ts">
  type Source = {
   readonly id: string | null;
   readonly name: string;
  };

  interface Data {
   readonly title: string;
   readonly description: string;
   readonly author: string | null;
   readonly url: string;
   readonly urlToImage: string;
   readonly publishedAt: Date;
   readonly source: Source;
  }

  export let data: Data;
  export let showSource = true;

  const {
    title,
    description,
    author,
    url,
    urlToImage,
    publishedAt,
    source,
  } = data;

  const date = new Date(publishedAt);

  const formattedDate = new Intl.DateTimeFormat('en-US').format(date);
</script>

<div
  class="article w-full rounded-lg bg-white dark-mode:bg-gray-900
  overflow-hidden shadow mx-auto mb-4">
  {#if urlToImage}
    <a href={url}>
      <img class="w-full" src={urlToImage} alt={title} loading="lazy" />
    </a>
  {/if}

  <div class="p-4">
    <a href={url}>
      <h3 class="font-bold text-xl dark-mode:text-white mb-2">{title}</h3>
    </a>

    {#if description}
      <p class="text-gray-700 dark-mode:text-gray-500 text-base">
        {@html description}
      </p>
    {/if}
  </div>

  <div class="p-4">
    <span
      class="inline-block bg-gray-200 dark-mode:bg-gray-800 rounded-full px-3
      py-1 text-sm font-semibold text-gray-700 dark-mode:text-gray-500 mr-2">
      {formattedDate}
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
