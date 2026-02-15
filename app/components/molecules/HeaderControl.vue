<template>
  <div class="flex my-3">
    <IconButton
      :name="IconName.globe"
      to="/language"
      label="Latvia - Latvian"
      class="text-header-text text-xs"
    />
    <IconButton
      :name="IconName.profile"
      to="/login"
      label="Login"
      class="text-header-text text-xs"
    />
    <IconButton
      :name="IconName.search"
      to="/search"
      label="Search"
      class="text-header-text text-xs"
    />
  </div>
</template>

<script setup lang="">
import { IconName } from "~/types/icons";
</script>
