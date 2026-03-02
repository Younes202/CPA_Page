<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-primary">
          {{ $t('partners.title') }}
        </h2>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center border-4 border-dashed border-secondary p-8 rounded-lg bg-white">
        <!-- Partner 1 -->
        <div class="text-center">
          <div class="bg-gray-200 h-24 rounded-lg flex items-center justify-center mb-4">
            <span class="text-4xl">🏢</span>
          </div>
          <p class="font-semibold text-gray-700">Cover Edge</p>
        </div>

        <!-- Partner 2 -->
        <div class="text-center">
          <div class="bg-gray-200 h-24 rounded-lg flex items-center justify-center mb-4">
            <span class="text-4xl">🏢</span>
          </div>
          <p class="font-semibold text-gray-700">AtlantaSanad</p>
        </div>

        <!-- Partner 3 -->
        <div class="text-center">
          <div class="bg-gray-200 h-24 rounded-lg flex items-center justify-center mb-4">
            <span class="text-4xl">🏢</span>
          </div>
          <p class="font-semibold text-gray-700">Sanlam</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
