<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary">
          {{ $t('contactSection.title') }}
        </h2>
      </div>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Phone Section -->
        <div class="bg-primary text-white rounded-lg p-8 flex flex-col justify-center">
          <div class="flex items-center gap-4 mb-4">
            <span class="text-4xl">📞</span>
            <h3 class="text-2xl font-bold">{{ $t('contactSection.call') }}</h3>
          </div>
          <p class="text-3xl font-bold">{{ $t('contact.phoneLabel') }}</p>
        </div>

        <!-- Email Section -->
        <div class="bg-gray-100 rounded-lg p-8">
          <h3 class="text-xl font-bold text-primary mb-4">{{ $t('contactSection.email') }}</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <input
                v-model="email"
                type="email"
                :placeholder="$t('contactSection.yourEmail')"
                class="w-full px-4 py-3 border-2 border-dashed border-secondary rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-full">
              {{ $t('contactSection.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')

const submitForm = () => {
  console.log('Email submitted:', email.value)
  email.value = ''
  // Add your form submission logic here
}
</script>

<style scoped>
.btn {
  @apply px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out border-2;
}

.btn-primary {
  @apply bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark;
}
</style>
