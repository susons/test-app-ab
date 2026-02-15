<template>
  <div>
    <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-16 max-w-3xl">
      <ListItem
        v-for="(label, index) in helpItems"
        :key="index"
        :label="label"
      />
    </ul>
  </div>
</template>

<script setup>
const helpItems = [
  "Get to the aircraft",
  "Disembark the aircraft",
  "Board the aircraft",
  "Transfer between flights",
  "Move around the aircraft cabin if required",
];
</script>
