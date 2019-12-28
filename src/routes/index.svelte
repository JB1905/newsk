<script lang="ts">
  import { goto } from '@sapper/app';

  import { categories, languages, countries } from '../constants';

  let query = '';

  let section;

  const setSection = id => {
    section = id;
  };

  const search = () => {
    const route = ['/top-headlines'];

    if (query) {
      route.push(`?q=${query}`);
    }

    goto(route.join(''));
  };
</script>

<svelte:head>
  <title>newsK</title>
</svelte:head>

<div
  class="w-full max-w-sm mx-auto px-8 pt-10 pb-10 mb-8 text-center flex flex-col
  flex-1 justify-center">
  <h3 class="text-xl font-bold dark-mode:text-white mb-2">Welcome in newsK</h3>

  <p class="dark-mode:text-gray-500">
    Easily search for news from around the world and browse between articles in
    different languages and categories.
  </p>
</div>

<!-- <input
        type="text"
        bind:value={query}
        class="shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 dark-mode:text-gray-400 dark-mode:border-gray-800
        dark-mode:bg-gray-900 leading-tight focus:outline-none
        focus:shadow-outline"
        placeholder="What are you looking for?"
        on:keydown={event => event.code === 'Enter' && search()} /> -->

<!-- <div class="flex items-center justify-center">
      <button
        type="submit"
        class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline"
        on:click={search}>
        Search
      </button>
    </div> -->

<!-- <div class="tabs">
      <nav>
        <label>
          <input
            class="heading"
            type="radio"
            bind:group={section}
            value="categories" />
          Categories
        </label>

        <label>
          <input
            class="heading"
            type="radio"
            bind:group={section}
            value="languages" />
          Languages
        </label>

        <label>
          <input
            class="heading"
            type="radio"
            bind:group={section}
            value="countries" />
          Countries
        </label>

        <input type="reset" value="Reset" />
      </nav>

      <div>
        {#if section === 'categories'}
          <div class="cloud cloud--categories">
            {#each categories as category}
              <label class="cloud__item" on:click={e => item(e)}>
                <input type="checkbox" />
                {category}
              </label>
            {/each}
          </div>
        {/if}

        {#if section === 'languages'}
          <div class="cloud cloud--languages">
            {#each languages as language}
              <label class="cloud__item" on:click={e => item(e)}>
                <input type="checkbox" />
                {language}
              </label>
            {/each}
          </div>
        {/if}

        {#if section === 'countries'}
          <div class="cloud cloud--countries">
            {#each countries as country}
              <label class="cloud__item" on:click={e => item(e)}>
                <input type="checkbox" />
                {country}
              </label>
            {/each}
          </div>
        {/if}
      </div>
    </div> -->
