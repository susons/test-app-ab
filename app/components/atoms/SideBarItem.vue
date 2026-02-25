<template>
  <NuxtLink
    v-slot="{ isActive }"
    :to="to"
    class="block border-b border-sidebar-divider last:border-b-0"
  >
    <span
      :class="
        cn(
          'relative block px-5 py-4 text-sm font-semibold bg-sidebar-background hover:text-brand-accent-hover ',
          isActive ? 'text-brand-accent' : 'text-brand-accent-dark',
          attrs.class,
        )
      "
    >
      <span
        v-if="isActive"
        class="absolute left-0 top-0 h-full w-[3px] bg-brand-accent"
      />
      {{ label }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import type { ClassValue } from "clsx";
defineProps<{
  to: string;
  label: string;
}>();

const attrs = useAttrs() as { class?: ClassValue };
</script>
