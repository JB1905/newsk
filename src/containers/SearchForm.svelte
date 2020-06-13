<script>
  import { goto } from "@sapper/app";
  import FaTimes from "svelte-icons/fa/FaTimes.svelte";

  import Overlay from '../components/Overlay.svelte'
  import ActionButton from '../components/ActionButton.svelte'

  import { countries } from "../constants/countries";
  import { categories } from "../constants/categories";

  let dataType = "top-headlines";

  let search = "";

  export let close;

  const formSubmit = event => {
    if (event.key === "Enter") {
      goto(`top-headlines?q=${search}`);

      close()
    }
  };
</script>

<Overlay>
  <div class="h-full max-h-100 max-w-xl w-full flex flex-col px-2">
    <header class="h-16 flex items-center justify-end">
      <ActionButton click={close}>
        <FaTimes />
      </ActionButton>
    </header>

    <section class="flex-1 px-2 flex">
      <div class="w-full mt-16">
        <input
          class="border-b-2 border-gray-500 dark-mode:border-gray-700 bg-transparent text-3xl	
          dark-mode:text-gray-500 focus:outline-none
          focus:shadow-outline py-2 px-4 block w-full appearance-none
          leading-normal"
          type="search"
          bind:value={search}
          on:keydown={formSubmit}
          placeholder="Search..."
          aria-label="Search" />
      </div>
    </section>
  </div>
</Overlay>
