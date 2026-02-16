<template>
  <div>
    <h3 class="text-sm font-semibold text-brand-blue-dark">{{ title }}</h3>
    <p class="mt-2 text-xs leading-5 text-brand-blue-dark/60">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  label: string;
}>();
</script>
