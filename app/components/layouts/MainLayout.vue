<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-1 p-6">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup></script>
