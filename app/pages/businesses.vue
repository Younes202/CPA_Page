<template>
  <div>
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">{{ $t('nav.businesses') }}</h1>
        <p class="text-lg text-gray-700 mb-8">
          Solutions d'assurance professionnelles pour les entreprises de toutes tailles.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🏢 Responsabilité Civile</h3>
            <p class="text-gray-700">Protégez votre entreprise contre les risques de responsabilité civile.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">📦 Assurance Multirisque</h3>
            <p class="text-gray-700">Couverture complète pour vos biens et activités professionnelles.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">👥 Assurance Santé Collective</h3>
            <p class="text-gray-700">Protégez vos collaborateurs avec nos offres de santé collective.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🚗 Flotte Automobile</h3>
            <p class="text-gray-700">Gestion optimale de l'assurance de votre flotte automobile.</p>
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
