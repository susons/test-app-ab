<template>
  <NuxtLink v-slot="{ isActive }" :to="to">
    <span
      :class="
        cn(
          'flex items-center mx-2 hover:text-gray-900',
          isActive ? 'text-header-text font-semibold' : 'text-gray-500',
          attrs.class,
        )
      "
    >
      {{ label }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
import type { ClassValue } from "clsx";

const attrs = useAttrs() as { class?: ClassValue };

withDefaults(
  defineProps<{
    label: string;
    to: string;
    size?: number;
  }>(),
  {
    size: 20,
  },
);
</script>
