<style>
  @media (min-width: 768px) {
    .masonry {
      column-gap: 2rem;
      column-count: 2;
    }
  }

  /* @media (min-width: 1024px) {
    .masonry {
      column-count: 3;
    }
  } */
</style>

<div class="masonry align-top mx-auto">
  <slot />
</div>
