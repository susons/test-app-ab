<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import "vue3-toastify/dist/index.css";
</script>

<style lang="scss">
.page {
  &-enter-active,
  &-leave-active {
    transition:
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(12px);
  }
}
</style>
