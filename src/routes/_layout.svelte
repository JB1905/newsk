<script lang="ts">
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaBars from 'svelte-icons/fa/FaBars.svelte';
  import FaTimes from 'svelte-icons/fa/FaTimes.svelte';

  import Overlay from '../components/Overlay.svelte';
  import Header from '../components/Header.svelte';
  import Nav from '../components/Nav.svelte';
  import SearchForm from '../components/SearchForm.svelte';
  import ActionButton from '../components/ActionButton.svelte';

  import { navigation } from '../constants/index.ts'; // TODO

  import { isFeatureEnabled } from '../../features';

  type Modal = 'menu' | 'search';

  let visibleModal = null;

  const openModal = (modal: Modal) => {
    visibleModal = modal;
  };

  const closeModal = () => {
    visibleModal = null;
  };

  const toggleModal = (modal: Modal) => {
    if (visibleModal === modal) {
      closeModal();
    } else {
      openModal(modal);
    }
  };
</script>

<main class="page m-auto flex flex-col relative">
  <div
    class="flex items-center justify-between fixed w-full z-30 max-w-xl h-16
    left-0 right-0 mx-auto">
    <ActionButton on:click={() => toggleModal('menu')} name="toggle-menu">
      {#if visibleModal === 'menu'}
        <FaTimes />
      {:else}
        <FaBars />
      {/if}
    </ActionButton>

    <ActionButton
      on:click={() => toggleModal('search')}
      name="open-search-form">
      {#if visibleModal === 'search'}
        <FaTimes />
      {:else}
        <FaSearch />
      {/if}
    </ActionButton>
  </div>

  <Header>
    <a rel="prefetch" href="/">
      <h1
        class="text-3xl font-title font-black dark-mode:text-white pt-2 pb-2
        text-center">
        newsK
      </h1>
    </a>
  </Header>

  {#if visibleModal}
    {#if visibleModal === 'menu'}
      <Nav {navigation} />
    {:else if visibleModal === 'search'}
      <SearchForm />
    {/if}
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
