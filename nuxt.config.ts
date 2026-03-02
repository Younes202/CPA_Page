export default defineNuxtConfig({
  // Directs Nuxt to find pages, components, and layouts in the /app folder
  srcDir: 'app/', 

  // CHANGED: Set to false for static hosting on GitHub Pages to avoid hydration issues
  ssr: false,

  // Removes the yellow date warning in your terminal
  compatibilityDate: '2026-02-28', 

  // FIX: Stops the "#app-manifest" red errors in the terminal
  experimental: {
    appManifest: false
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
      ignore: ['/admin']
    },
    // Required for proper GitHub Pages static generation
    preset: 'github-pages'
  },

  app: {
    // CHANGED: Must match your repository name for assets to load correctly
    baseURL: '/LandingPageCPA/',
    head: {
      title: 'CPA - Conseil et Placement d\'Assurances',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Conseil et placement d\'assurances automobile, habitation, santé, prévoyance et épargne au Maroc' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Path is relative to srcDir (app/), so ~/ refers to /app/
  css: ['~/assets/styles/main.css'], 

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ar', iso: 'ar-MA', name: 'العربية' },
      { code: 'es', iso: 'es-ES', name: 'Español' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    // i18n.config.ts is in the root, so go up one level from srcDir
    vueI18n: '../i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false
    }
  },

  tailwindcss: {
    // tailwind.config.ts is in the root, go up one level from srcDir
    configPath: '../tailwind.config.ts' 
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true }
})