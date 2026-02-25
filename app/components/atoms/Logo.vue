<template>
  <NuxtLink to="/">
    <div
      class="w-[180px] h-[60px] md:h-[110px] flex items-center justify-center"
    >
      <img :src="logo" alt="Logo" class="max-h-full object-contain" />
    </div>
  </NuxtLink>
</template>
<script setup>
import logo from "@assets/logo.png";
</script>
