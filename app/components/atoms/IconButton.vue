<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
  >
    <Icon :name="name" :size="size" />
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IconName } from "~/types/icons";

withDefaults(
  defineProps<{
    label: string;
    to: string;
    name: IconName;
    size?: number;
    class?: string;
  }>(),
  {
    size: 20,
    class: "",
  },
);
</script>
