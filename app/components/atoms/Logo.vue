<template>
  <NuxtLink to="/">
    <div
      class="w-[180px] h-[110px] flex items-center justify-center bg-brand-green"
    >
      <img :src="logo" alt="Logo" />
    </div>
  </NuxtLink>
</template>
<script setup>
import logo from "~/assets/logo.svg";
</script>
