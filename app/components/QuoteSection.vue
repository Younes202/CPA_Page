<template>
  <section class="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            {{ $t('quote.title') }}
            <span class="text-secondary block">{{ $t('quote.titleBold') }}</span>
          </h2>
          <button class="btn btn-primary text-lg">
            {{ $t('quote.button') }}
          </button>
        </div>

        <!-- Right Content - Illustration -->
        <div class="text-center">
          <div class="inline-block">
            <div class="text-6xl mb-4">🏠 🚗 ⛵</div>
            <p class="text-gray-600">{{ $t('quote.titleBold') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn {
  @apply px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out border-2;
}

.btn-primary {
  @apply bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark;
}
</style>
