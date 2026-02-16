<template>
  <img
    v-if="icon"
    :src="icon"
    :alt="`icon-${name}`"
    :width="size"
    :height="size"
  />
</template>

<script setup lang="ts">
import type { IconName } from "~/types/icons";

const props = withDefaults(
  defineProps<{
    name: IconName;
    size?: number;
  }>(),
  {
    size: 20,
  },
);

const icons = import.meta.glob("~/assets/icons/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const icon = Object.entries(icons).find(([path]) =>
  path.endsWith(`/icons/${props.name}.svg`),
)?.[1];
</script>
