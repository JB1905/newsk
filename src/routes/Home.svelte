<script>
  import { Link, navigate } from 'svelte-routing';

  import { categories, languages, countries } from '../constants';

  let query = '';

  let section = 0;

  function setSection(id) {
    section = id;
  }

  const search = () => {
    const route = ['/top-headlines'];

    if (query) {
      route.push(`?q=${query}`);
    }

    navigate(route.join(''));
  };
</script>

<style>
  .search {
    width: 100%;
    font-size: 20px;
    border-radius: 2px;
    border: none;
    border: 1px solid #eee;
    margin: 0 0 20px;
    display: flex;
  }

  .search__field {
    padding: 14px 20px;
    -webkit-appearance: none;
    background-color: #fffc;
    border: 0;
    margin: 0;
    flex: 1;
  }

  main {
    width: 100%;
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav input {
    border: 0;
    background: none;
    font-size: 12px;
    cursor: pointer;
    margin: 0;
  }

  .search__submit {
    padding: 8px 24px;
    font-size: 18px;
    background-color: #edb118;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #fff;
    cursor: pointer;
    border: 0;
    margin-bottom: 0;
  }

  .heading {
    color: #000;
    font-size: 15px;
    margin-right: 6px;
    margin-bottom: 0;
    padding: 8px 12px;
    border: 2px solid #000;
    border-radius: 2px;
    background: none;
    cursor: pointer;
  }

  /* .cloud {
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0 20px;
  }

  .cloud__item {
    border-radius: 2px;
    padding: 5px 10px;
    margin: 4px 8px 4px 0;
    background-color: #fb5472;
    color: #fff;
  }

  .cloud--categories .cloud__item::first-letter {
    text-transform: uppercase;
  }

  .cloud--languages .cloud__item,
  .cloud--countries .cloud__item {
    text-transform: uppercase;
  } */
</style>

<main>
  <div class="search">
    <input
      type="search"
      bind:value={query}
      class="search__field"
      placeholder="What are you looking for?" />

    <button class="search__submit" on:click={search}>Search</button>
  </div>

  <div class="tabs">
    <nav>
      <button class="heading" on:click={() => setSection(0)}>Categories</button>
      <button class="heading" on:click={() => setSection(1)}>Languages</button>
      <button class="heading" on:click={() => setSection(2)}>Countries</button>

      <input type="reset" value="Reset" />
    </nav>

    <div>
      <!-- {#if section === 0}
        <div class="cloud cloud--categories">
          {#each categories as category}
            <p class="cloud__item">{category}</p>
          {/each}
        </div>
      {/if}

      {#if section === 1}
        <div class="cloud cloud--languages">
          {#each languages as language}
            <p class="cloud__item">{language}</p>
          {/each}
        </div>
      {/if}

      {#if section === 2}
        <div class="cloud cloud--countries">
          {#each countries as country}
            <p class="cloud__item">{country}</p>
          {/each}
        </div>
      {/if} -->
    </div>
  </div>

  <!-- <select name="type" id="">
    <option value="" />
    <option value="top-headlines">Top Headlines</option>
    <option value="everything">Everything</option>
    <option value="sources">Publishers</option>
  </select> -->
</main>
