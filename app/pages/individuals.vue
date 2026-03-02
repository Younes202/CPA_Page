<template>
  <div>
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">{{ $t('nav.individuals') }}</h1>
        <p class="text-lg text-gray-700 mb-8">
          Découvrez nos solutions d'assurance adaptées aux particuliers.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🚗 Assurance Automobile</h3>
            <p class="text-gray-700">Protégez votre véhicule avec nos offres d'assurance automobile complètes.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🏠 Assurance Habitation</h3>
            <p class="text-gray-700">Sécurisez votre logement contre tous les risques avec nos contrats adaptés.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">❤️ Assurance Santé</h3>
            <p class="text-gray-700">Bénéficiez d'une couverture santé complète pour vous et votre famille.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">💰 Épargne & Prévoyance</h3>
            <p class="text-gray-700">Préparez votre avenir avec nos solutions d'épargne et de prévoyance.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
</style>
