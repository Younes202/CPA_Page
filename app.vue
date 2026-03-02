<template>
  <div class="min-h-screen flex flex-col bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

// This applies the direction to the <html> tag
useHead({
  htmlAttrs: {
    lang: locale,
    // Ensure this is a computed property so it reacts to the switcher
    dir: computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
  }
})
</script>

<style>
/* Force text alignment for the entire body when in RTL */
[dir='rtl'] {
  text-align: right;
}

/* Ensure grids and flex containers respect the direction */
[dir='rtl'] .grid, 
[dir='rtl'] .flex {
  direction: rtl;
}

/* Specific fix for lists so checkmarks stay on the correct side */
[dir='rtl'] li {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 0.5rem;
}
</style>