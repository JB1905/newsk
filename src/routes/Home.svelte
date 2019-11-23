<script>
  import { Link, navigate } from 'svelte-routing';

  import { categories, languages, countries } from '../constants';

  // todo date range
  // query search
  // publishers

  const search = () => {
    navigate('/news/poland');
  };
</script>

<style>
  .search {
    width: 100%;
    padding: 14px 20px;
    font-size: 20px;
    /* max-width: 500px;
    margin: 0 auto; */
  }

  .cloud {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
  }

  .cloud__item {
    padding: 5px 10px;
    margin: 0;
  }

  .cloud--categories .cloud__item::first-letter {
    text-transform: uppercase;
  }

  .cloud--languages .cloud__item,
  .cloud--countries .cloud__item {
    text-transform: uppercase;
  }
</style>

<main>
  <input
    type="search"
    name=""
    id=""
    class="search"
    placeholder="What are you looking for?" />

  <div class="cloud cloud--categories">
    {#each categories as category}
      <p class="cloud__item">{category}</p>
    {/each}
  </div>

  <div class="cloud cloud--languages">
    {#each languages as language}
      <p class="cloud__item">{language}</p>
    {/each}
  </div>

  <div class="cloud cloud--countries">
    {#each countries as country}
      <p class="cloud__item">{country}</p>
    {/each}
  </div>

  <select name="type" id="">
    <option value="" />
    <option value="top-headlines">Top Headlines</option>
    <option value="everything">Everything</option>
    <option value="sources">Publishers</option>
  </select>

  <button on:click={search}>Search</button>
</main>
