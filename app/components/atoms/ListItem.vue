<template>
  <li class="flex items-start gap-3 text-sm text-brand-blue-dark">
    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green" />
    <span>{{ label }}</span>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
