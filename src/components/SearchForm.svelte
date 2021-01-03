<script lang="ts">
  import { goto } from '@sapper/app';

  import Overlay from '../components/Overlay.svelte';

  import { countries } from '../constants/countries';
  import { categories } from '../constants/categories';

  let dataType = 'top-headlines';

  let search = '';

  const params = [];

  const add = (item) => {
    if (params.includes(item)) {
      params.filter((param) => param !== item);
    } else {
      params.push(item);
    }
  };

  const formSubmit = (event) => {
    if (event.key === 'Enter') {
      goto(`top-headlines?q=${search}`);
    }
  };
</script>

<Overlay>
  <div class="h-full max-h-100 max-w-xl w-full flex flex-col">
    <div class="px-2">
      <section class="flex-1 px-2 flex">
        <div class="w-full mt-16">
          <input
            class="border-b-2 border-gray-400 dark-mode:border-gray-700
            bg-transparent text-3xl dark-mode:text-gray-500 focus:outline-none
            focus:shadow-outline py-2 block w-full appearance-none
            leading-normal"
            type="search"
            bind:value={search}
            on:keydown={formSubmit}
            placeholder="Search..."
            aria-label="Search" />
        </div>
      </section>

      <section class="flex-1 px-2 flex flex-col mt-8 mb-8">
        <!-- <h4 class="text-lg font-medium text-gray-700 dark-mode:text-gray-500">
          Countries
        </h4> -->

        <div class="w-full mt-4">
          {#each Object.values(countries) as country}
            <span
              on:click={() => add(country)}
              class="mr-2 mb-2 px-2 py-1 inline-block whitespace-no-wrap
              border-solid text-gray-600 border-2 {x.includes(country) ? 'border-gray-900 dark-mode:border-gray-100' : 'border-gray-400 dark-mode:border-gray-600'}">
              {country}
            </span>
          {/each}
        </div>
      </section>

      <section class="flex-1 px-2 flex flex-col mt-8 mb-4">
        <h4 class="text-lg font-medium text-gray-700 dark-mode:text-gray-500">
          Categories
        </h4>

        <div class="w-full mt-4">
          {#each Object.values(categories) as category}
            <label>
              <input
                type="checkbox"
                class="mr-2 mb-2 px-2 py-1 inline-block whitespace-no-wrap
                border-solid text-gray-600 border-2 border-gray-400
                dark-mode:border-gray-600" />
              {category}
            </label>
          {/each}
        </div>
      </section>
    </div>
  </div>
</Overlay>
