<template>
  <div>
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-8">{{ $t('nav.client') }}</h1>
        <p class="text-lg text-gray-700 mb-8">
          Accédez à votre espace client pour gérer vos contrats et demandes.
        </p>
        <div class="bg-white rounded-lg p-12 shadow-md text-center">
          <div class="text-6xl mb-4">🔐</div>
          <h2 class="text-2xl font-bold text-primary mb-4">Connexion Sécurisée</h2>
          <p class="text-gray-700 mb-8">
            Connectez-vous à votre espace client pour accéder à vos contrats, documents et services.
          </p>
          <button class="btn btn-primary">
            Se connecter
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold text-primary mb-4">📄 Mes Contrats</h3>
            <p class="text-gray-700">Consultez et téléchargez vos contrats d'assurance.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold text-primary mb-4">📋 Mes Sinistres</h3>
            <p class="text-gray-700">Déclarez et suivez vos sinistres en ligne.</p>
          </div>
          <div class="bg-white rounded-lg p-8 shadow-md">
            <h3 class="text-xl font-bold text-primary mb-4">💳 Mes Paiements</h3>
            <p class="text-gray-700">Gérez vos paiements et vos factures facilement.</p>
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
.btn {
  @apply px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out border-2;
}

.btn-primary {
  @apply bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark;
}
</style>
