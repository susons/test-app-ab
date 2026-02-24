<template>
  <div>
    <div class="md:hidden">
      <div class="flex items-center h-[56px]">
        <NuxtLink
          to="/contact"
          class="flex items-center gap-2 text-blue-700 text-sm font-medium"
        >
          <span class="text-xl leading-none">‹</span>
          <span>Back to Home</span>
        </NuxtLink>
      </div>
    </div>

    <h1 class="text-[40px] leading-[48px] font-light text-brand-blue-dark">
      Request assistance from us
    </h1>
    <p class="mt-6 max-w-2xl text-base leading-6 text-brand-blue-dark/80">
      Providing assistance to passengers with reduced mobility is part of our
      service at airBaltic.
    </p>
    <p class="mt-8 text-sm font-semibold text-brand-blue-dark">
      We can help you:
    </p>

    <List />

    <div
      class="-mx-6 mt-6 grid grid-cols-1 gap-0 md:mx-0 md:mt-10 md:gap-6 md:grid-cols-2 md:max-w-4xl"
    >
      <Notification
        label="Personal mobility equipment and guide dogs are carried free of charge."
      />
      <Notification
        label="Please note, we are unable to provide eating assistance and medical services."
        type="warning"
      />
    </div>

    <ContactForm />
  </div>
</template>

<script setup>
useHead({
  title: "AB - Request assistance",
});
</script>

<style lang=""></style>
