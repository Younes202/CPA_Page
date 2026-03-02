<template>
  <div class="flex gap-2">
    <button
      v-for="locale in locales"
      :key="locale.code"
      @click="switchLocale(locale.code)"
      :class="[
        'px-3 py-1 rounded transition font-semibold text-sm',
        currentLocale === locale.code
          ? 'bg-primary text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      ]"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const router = useRouter()

const locales = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' }
]

const currentLocale = computed(() => locale.value)

const switchLocale = async (newLocale: string) => {
  locale.value = newLocale
  await router.push(
    router.currentRoute.value.path.replace(
      new RegExp(`^/(${locales.map(l => l.code).join('|')})`),
      ''
    ) || '/'
  )
}
</script>

<style scoped>
</style>
