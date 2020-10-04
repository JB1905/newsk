<script lang="ts">
  import td from 'two-digit';

  type Source = {
    id: string | null;
    name: string;
  };

  interface Data {
    title: string;
    description: string;
    author: string | null;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    source: Source;
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

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
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
      {year}.{td(month)}.{td(day)}
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
