<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4" :class="{ 'text-right': locale === 'ar' }">
      <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">{{ $t('nav.about') }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div :class="{ 'order-1': locale !== 'ar', 'order-2': locale === 'ar' }">
          <h2 class="text-2xl font-bold text-primary mb-4">{{ $t('footer.about') }}</h2>
          <p class="text-gray-700 leading-relaxed mb-4">{{ $t('aboutPage.description') }}</p>
          <p class="text-gray-700 leading-relaxed">{{ $t('aboutPage.experience') }}</p>
        </div>

        <div 
          class="bg-white rounded-lg p-8 shadow-md"
          :class="{ 'order-2': locale !== 'ar', 'order-1': locale === 'ar' }"
        >
          <h3 class="text-xl font-bold text-primary mb-4">{{ $t('nav.expertise') }}</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center gap-2" :class="{ 'flex-row-reverse': locale === 'ar' }">
              <span>✓</span> {{ $t('aboutPage.features.auto') }}
            </li>
            <li class="flex items-center gap-2" :class="{ 'flex-row-reverse': locale === 'ar' }">
              <span>✓</span> {{ $t('aboutPage.features.home') }}
            </li>
            <li class="flex items-center gap-2" :class="{ 'flex-row-reverse': locale === 'ar' }">
              <span>✓</span> {{ $t('aboutPage.features.health') }}
            </li>
            <li class="flex items-center gap-2" :class="{ 'flex-row-reverse': locale === 'ar' }">
              <span>✓</span> {{ $t('aboutPage.features.savings') }}
            </li>
            <li class="flex items-center gap-2" :class="{ 'flex-row-reverse': locale === 'ar' }">
              <span>✓</span> {{ $t('aboutPage.features.assistance') }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>