<script>
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import FaBars from "svelte-icons/fa/FaBars.svelte";

  import SearchForm from "../containers/SearchForm.svelte";

  import Header from "../components/Header.svelte";
  import Nav from "../components/Nav.svelte";
  import ActionButton from "../components/ActionButton.svelte";

  import { navigation } from "../constants";

  import { isFeatureEnabled } from "../../features";

  let isMenuShow = false;

  function toggleMenu() {
    isMenuShow = !isMenuShow;
  }

  let isSearchFormShow = false;

  function toggleSearchForm() {
    isSearchFormShow = !isSearchFormShow;
  }
</script>

<main class="page m-auto flex flex-col">
  <Header>
    <ActionButton click={toggleMenu}>
      <FaBars />
    </ActionButton>
      

    <a rel="prefetch" href="/">
      <h1
        class="text-3xl font-title font-black dark-mode:text-white pt-2 pb-2
        text-center">
        newsK
      </h1>
    </a>

    <ActionButton click={toggleSearchForm}>
      <FaSearch />
    </ActionButton>
  </Header>

  {#if isMenuShow && isFeatureEnabled("menu")}
    <Nav {navigation} />
  {/if}

  {#if isSearchFormShow}
    <SearchForm close={toggleSearchForm} />
  {/if}

  <div class="flex-1 z-10 px-4 flex max-w-xl w-full mx-auto flex-col">
    <slot />
  </div>

  <footer class="px-4 py-6 text-center">
    <a
      href="https://newsapi.org/"
      class="text-lg font-bold text-gray-800 dark-mode:text-gray-500">
      Powered by News API
    </a>
  </footer>
</main>
