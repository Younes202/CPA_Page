<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold">
          <span class="text-primary">{{ $t('services.title') }}</span>
          <span class="text-secondary block">{{ $t('services.titleBold') }}</span>
        </h2>
        <p class="text-gray-600 mt-4 text-lg">{{ $t('services.description') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Service 1: Auto Insurance -->
        <div class="card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="text-5xl mb-4">🚗</div>
          <h3 class="text-2xl font-bold text-primary mb-4">{{ $t('services.auto.title') }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ $t('services.auto.description') }}</p>
        </div>

        <!-- Service 2: Home Insurance -->
        <div class="card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="text-5xl mb-4">🏠</div>
          <h3 class="text-2xl font-bold text-primary mb-4">{{ $t('services.home.title') }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ $t('services.home.description') }}</p>
        </div>

        <!-- Service 3: Health & Life -->
        <div class="card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="text-5xl mb-4">☂️</div>
          <h3 class="text-2xl font-bold text-primary mb-4">{{ $t('services.health.title') }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ $t('services.health.description') }}</p>
        </div>

        <!-- Service 4: Assistance -->
        <div class="card bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="text-5xl mb-4">🤝</div>
          <h3 class="text-2xl font-bold text-primary mb-4">{{ $t('services.assistance.title') }}</h3>
          <p class="text-gray-700 leading-relaxed">{{ $t('services.assistance.description') }}</p>
        </div>
      </div>

      <!-- Load More Button -->
      <div class="text-center">
        <button class="btn btn-primary">
          {{ $t('services.loadMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg;
}

.btn {
  @apply px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out border-2;
}

.btn-primary {
  @apply bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark;
}
</style>
