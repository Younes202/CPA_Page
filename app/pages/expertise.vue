<template>
  <div>
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">{{ $t('nav.expertise') }}</h1>
        <p class="text-lg text-gray-700 mb-8">
          Notre expertise au service de votre sécurité et de votre tranquillité d'esprit.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">📊 Analyse des Risques</h3>
            <p class="text-gray-700">Évaluation complète de vos besoins en assurance pour une couverture optimale.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">💼 Conseil Personnalisé</h3>
            <p class="text-gray-700">Nos experts vous conseillent pour trouver les meilleures solutions.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🛡️ Gestion des Sinistres</h3>
            <p class="text-gray-700">Accompagnement complet en cas de sinistre pour une résolution rapide.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">📱 Services Numériques</h3>
            <p class="text-gray-700">Accès facile à vos contrats et services via notre plateforme en ligne.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🤝 Support Client</h3>
            <p class="text-gray-700">Équipe disponible pour répondre à toutes vos questions et préoccupations.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold text-primary mb-4">🌍 Réseau International</h3>
            <p class="text-gray-700">Couverture internationale pour vos besoins d'assurance globaux.</p>
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
