<style>
  .overlay-content {
    margin-top: 60px;
    height: calc(100% - 60px);
    overflow: auto;
  }
</style>

<div
  class="fixed bg-gray-200 dark-mode:bg-black w-full h-full z-20 flex
  items-center justify-center flex-col overflow-auto">
  <div class="overlay-content w-full">
    <slot />
  </div>
</div>
