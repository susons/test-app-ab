<template>
  <NuxtLink
    :to="to"
    :class="
      cn(
        'transition text-gray-700 hover:text-gray-900',
        props.variant === 'sidebar'
          ? 'flex flex-col items-center justify-center gap-1 text-xs py-3 hover:bg-gray-50 transition'
          : 'flex items-center mx-2',
        attrs.class,
      )
    "
  >
    <Icon
      :name="name"
      :size="size"
      :class="props.variant === 'header' ? 'mr-2' : ''"
    />
    <span v-if="label">{{ label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { IconName } from "@definitions/icons";
import { useAttrs } from "vue";
import type { ClassValue } from "clsx";

const attrs = useAttrs() as { class?: ClassValue };

const props = withDefaults(
  defineProps<{
    label?: string;
    to: string;
    name: IconName;
    size?: number;
    variant?: "header" | "sidebar";
  }>(),
  {
    size: 20,
    label: "",
    variant: "header",
  },
);
</script>
