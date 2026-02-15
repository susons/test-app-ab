<template>
  <header class="sticky top-0 z-50 w-full border-b bg-white">
    <div class="max-w-container mx-auto">
      <div class="flex items-center justify-between">
        <Logo class="order-2 md:order-1" />

        <div class="order-1 md:order-2">
          <button
            class="flex h-10 w-10 items-center justify-center md:hidden mx-4"
            aria-label="Open menu"
            @click="toggleOpen"
          >
            <Icon :name="IconName.burger" :size="24" />
          </button>
          <div
            class="hidden md:flex header-controls-container flex-col items-end"
          >
            <HeaderControl />
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <SideMenu :open="menuOpen" :toggle-open="toggleOpen" />
  </Teleport>
</template>

<script setup>
import { IconName } from "~/types/icons";

import { ref } from "vue";

const menuOpen = ref(false);

const toggleOpen = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
