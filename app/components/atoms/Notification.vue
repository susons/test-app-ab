<template>
  <div
    :class="[
      'rounded-md px-8 py-6 text-center text-sm text-brand-blue-dark',
      bgClass,
    ]"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  type?: "info" | "warning";
}>();

const colorMap = {
  info: "bg-info-info",
  warning: "bg-info-warning",
} as const;

const bgClass = colorMap[props.type ?? "info"];
</script>
