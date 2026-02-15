<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="w-full md:mt-12">
      <div class="max-w-container mx-auto">
        <div
          class="grid grid-cols-1 gap-8 mx-6 my-4 md:mx-0 md:my-0 md:grid-cols-[1fr_minmax(0,2fr)]"
        >
          <Sidebar />

          <section class="min-w-0">
            <slot />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>
