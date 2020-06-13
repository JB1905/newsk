<script>
    export let click;
</script>

<button
    class="mx-2 w-12 h-12 text-gray-700 dark-mode:text-gray-400 hover:color-gray-400
    font-bold p-4 inline-flex items-center appearance-none"
    on:click={click}>
        <div class="w-5 flex">
            <slot />
        </div>
    </button>