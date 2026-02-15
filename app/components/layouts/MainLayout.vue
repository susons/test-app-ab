<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="w-full mt-12">
      <div class="max-w-container mx-auto">
        <div class="grid grid-cols-[350px_1fr] gap-8">
          <div>
            <Sidebar />
          </div>

          <section>
            <slot />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>
