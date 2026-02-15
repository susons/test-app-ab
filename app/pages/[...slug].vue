<script setup lang="ts">
const route = useRoute();
const path = route.path;

const slug = route.params.slug as string[] | undefined;
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold">Current path: {{ path }}</h1>

    <p class="mt-4">Slug: {{ slug }}</p>
  </div>
</template>
