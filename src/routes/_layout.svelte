<script lang="ts">
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte';
  import FaBars from 'svelte-icons/fa/FaBars.svelte';

  import Header from '../components/Header.svelte';
  import ActionButton from '../components/ActionButton.svelte';
  import Footer from '../components/Footer.svelte';

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

<Header>
  <ActionButton on:click={() => toggleModal('menu')} name="toggle-menu">
    <FaBars />
  </ActionButton>

  <a href="/">
    <h1
      class="text-3xl font-title font-black dark-mode:text-white pt-2 pb-2
			text-center">
      newsK
    </h1>
  </a>

  <ActionButton on:click={() => toggleModal('search')} name="open-search-form">
    <FaSearch />
  </ActionButton>
</Header>

<main class="flex-1 z-10 px-4 flex max-w-xl w-full mx-auto flex-col">
  <slot />
</main>

<Footer />
