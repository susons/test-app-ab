<template>
  <div
    v-show="open"
    class="fixed inset-0 z-[60] bg-black/40 md:hidden"
    @click="toggleOpen"
  />
  <aside
    role="dialog"
    aria-modal="true"
    class="fixed left-0 top-0 z-[65] h-dvh w-[280px] bg-white shadow-xl md:hidden transform transition-transform duration-300"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
    @click.stop
  >
    <div class="flex h-[60px] items-center justify-between border-b px-4">
      <span class="font-medium">Menu</span>
      <button
        class="h-10 w-10 grid place-items-center text-gray-800 text-xl"
        aria-label="Close menu"
        @click="toggleOpen"
      >
        ✕
      </button>
    </div>

    <div class="my-3 px-4">
      <div
        class="grid grid-cols-[6fr_3fr_3fr] rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
      >
        <IconButton
          variant="sidebar"
          :name="IconName.globe"
          to="/language"
          label="Latvia - Latvian"
        />

        <IconButton
          variant="sidebar"
          :name="IconName.profile"
          to="/login"
          label="Login"
          class="border-l border-gray-200"
        />

        <IconButton
          variant="sidebar"
          :name="IconName.search"
          to="/search"
          label="Search"
          class="border-l border-gray-200"
        />
      </div>
    </div>

    <div class="">
      <SideBarItem to="/book" label="Plan and book" />
      <SideBarItem to="/prepare" label="Prepare for your trip" />
      <SideBarItem to="/offers" label="Special offers" />
      <SideBarItem to="/contact" label="Contact us" />
      <SideBarItem to="/question" label="Ask a question" />
      <SideBarItem to="/assistance" label="Request assistance from us" />
      <SideBarItem to="/other" label="Other inquiries" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { IconName } from "~/types/icons";

defineProps<{
  open: boolean;
  toggleOpen: () => void;
}>();
</script>
