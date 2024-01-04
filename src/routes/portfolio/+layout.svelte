
<base target="_blank" />

<div class="content">
  <slot />
</div>

<style lang="postcss">
  .content {
    @apply text-lg;
  }

  :global(.content > * a) {
    @apply underline decoration-purple-600;
  }

  :global(.content > p) {
    @apply my-4;
  }
  /* :global(p) {
    @apply my-12
  } */
</style>