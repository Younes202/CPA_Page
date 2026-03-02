<template>
  <div class="min-h-screen flex flex-col font-sans" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div class="flex gap-6 items-center">
            <a href="mailto:info@cpa.ma" class="flex items-center gap-2 text-gray-600 hover:text-[#1d5b9d] transition">
              <span class="text-[#1d5b9d]">✉</span> <span>{{ $t('contact.emailLabel') }}</span>
            </a>
            <a href="tel:+212522953900" class="flex items-center gap-2 text-gray-600 hover:text-[#1d5b9d] transition">
              <span class="text-[#1d5b9d]">📞</span> <span dir="ltr">{{ $t('contact.phoneLabel') }}</span>
            </a>
          </div>
          <LanguageSwitcher />
        </div>

        <div class="flex justify-between items-center py-4">
          <NuxtLink :to="localePath('/')" class="flex items-center group">
            <div class="text-3xl font-extrabold text-[#1d5b9d] tracking-tighter">CPA</div>
            <div class="ms-3 text-[9px] text-[#a0a0a0] font-bold leading-tight border-s ps-3 border-[#a0a0a0]/30 group-hover:border-[#1d5b9d] transition uppercase">
              <div>CONSEIL</div>
              <div>ET PLACEMENT</div>
              <div>D'ASSURANCES</div>
            </div>
          </NuxtLink>

          <nav class="hidden lg:flex gap-8 items-center">
            <NuxtLink :to="localePath('/')" class="nav-link">{{ $t('nav.home') }}</NuxtLink>

            <div class="relative group h-full py-2">
              <button class="nav-link flex items-center gap-1">{{ $t('nav.about') }} <span class="text-[10px] text-[#a0a0a0]">▼</span></button>
              <div class="dropdown-menu">
                <NuxtLink :to="localePath('/about#who')" class="sub-link">{{ $t('nav.about_sub.who') }}</NuxtLink>
                <NuxtLink :to="localePath('/about#membership')" class="sub-link">{{ $t('nav.about_sub.membership') }}</NuxtLink>
                <NuxtLink :to="localePath('/about#network')" class="sub-link">{{ $t('nav.about_sub.network') }}</NuxtLink>
                <NuxtLink :to="localePath('/about#values')" class="sub-link">{{ $t('nav.about_sub.values') }}</NuxtLink>
              </div>
            </div>

            <div class="relative group h-full py-2">
              <button class="nav-link flex items-center gap-1">{{ $t('nav.individuals') }} <span class="text-[10px] text-[#a0a0a0]">▼</span></button>
              <div class="dropdown-menu w-64">
                <div class="px-4 py-2 text-[11px] font-bold text-[#1d5b9d] uppercase bg-gray-50 tracking-wider">{{ $t('nav.ind_sub.vehicles') }}</div>
                <NuxtLink :to="localePath('/individuals#auto')" class="sub-link ps-6">{{ $t('nav.ind_sub.auto') }}</NuxtLink>
                <NuxtLink :to="localePath('/individuals#moto')" class="sub-link ps-6">{{ $t('nav.ind_sub.moto') }}</NuxtLink>
                <div class="px-4 py-2 text-[11px] font-bold text-[#1d5b9d] uppercase bg-gray-50 tracking-wider mt-2">{{ $t('nav.ind_sub.health') }}</div>
                <NuxtLink :to="localePath('/individuals#accident')" class="sub-link ps-6">{{ $t('nav.ind_sub.accident') }}</NuxtLink>
                <NuxtLink :to="localePath('/individuals#health-pack')" class="sub-link ps-6">{{ $t('nav.ind_sub.health_pack') }}</NuxtLink>
              </div>
            </div>

            <div class="relative group h-full py-2">
              <button class="nav-link flex items-center gap-1">{{ $t('nav.businesses') }} <span class="text-[10px] text-[#a0a0a0]">▼</span></button>
              <div class="dropdown-menu w-64">
                <div class="px-4 py-2 text-[11px] font-bold text-[#1d5b9d] uppercase bg-gray-50 tracking-wider">{{ $t('nav.ent_sub.assets') }}</div>
                <NuxtLink :to="localePath('/businesses#fleet')" class="sub-link ps-6">Flotte Automobile</NuxtLink>
                <NuxtLink :to="localePath('/businesses#maritime')" class="sub-link ps-6">Transport & Maritime</NuxtLink>
                <NuxtLink :to="localePath('/businesses#liability')" class="sub-link border-t border-gray-100 mt-2">Responsabilité Civile</NuxtLink>
              </div>
            </div>

            <NuxtLink :to="localePath('/expertise')" class="nav-link">{{ $t('nav.expertise') }}</NuxtLink>
            
            <NuxtLink :to="localePath('/client')" class="bg-[#1d5b9d] text-white px-5 py-2.5 rounded shadow-lg hover:bg-blue-900 transition font-bold text-sm tracking-wide">
              {{ $t('nav.client') }}
            </NuxtLink>
          </nav>
          
          <button class="lg:hidden text-[#1d5b9d] text-2xl" @click="mobileMenuOpen = !mobileMenuOpen">☰</button>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-[#0f172a] text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div class="space-y-6">
            <div class="flex items-center">
              <div class="text-3xl font-bold text-white tracking-tighter">CPA</div>
              <div class="ms-3 text-[10px] text-[#a0a0a0] font-bold leading-tight border-s ps-3 border-[#a0a0a0]/30 uppercase">
                <div>CONSEIL</div><div>ET PLACEMENT</div><div>D'ASSURANCES</div>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
              {{ $t('footer.address') }}
            </p>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3 text-gray-300">
                <span class="w-8 h-8 rounded-full bg-[#1d5b9d]/20 flex items-center justify-center text-[#1d5b9d]">📞</span>
                <span dir="ltr">{{ $t('contact.phoneLabel') }}</span>
              </div>
              <div class="flex items-center gap-3 text-gray-300">
                <span class="w-8 h-8 rounded-full bg-[#1d5b9d]/20 flex items-center justify-center text-[#1d5b9d]">✉</span>
                <span>{{ $t('contact.emailLabel') }}</span>
              </div>
            </div>
          </div>

          <div class="lg:ps-12">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
              <span class="w-1 h-6 bg-[#1d5b9d]"></span> {{ $t('nav.about') }}
            </h3>
            <ul class="space-y-4 text-sm">
              <li><NuxtLink :to="localePath('/')" class="text-gray-400 hover:text-[#1d5b9d] transition">{{ $t('nav.home') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/about')" class="text-gray-400 hover:text-[#1d5b9d] transition">{{ $t('nav.about') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/expertise')" class="text-gray-400 hover:text-[#1d5b9d] transition">{{ $t('nav.expertise') }}</NuxtLink></li>
              <li><NuxtLink :to="localePath('/privacy')" class="text-gray-400 hover:text-[#1d5b9d] transition">Mentions Légales</NuxtLink></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
              <span class="w-1 h-6 bg-[#1d5b9d]"></span> Localisation
            </h3>
            <div class="rounded-xl overflow-hidden h-56 shadow-2xl border border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.581566373738!2d-7.6253457!3d33.5891398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzIwLjkiTiA3wrAzNyczMS4yIlc!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma" 
                class="w-full h-full"
                style="border:0;" 
                allowfullscreen="true" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
          <p>© {{ new Date().getFullYear() }} CPA - CONSEIL ET PLACEMENT D'ASSURANCES.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition">LinkedIn</a>
            <a href="#" class="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link { 
  @apply text-gray-800 hover:text-[#1d5b9d] font-bold transition-all text-sm tracking-tight cursor-pointer; 
}

.dropdown-menu { 
  @apply absolute top-[calc(100%-2px)] hidden group-hover:block bg-white shadow-2xl border-t-4 border-[#1d5b9d] z-[100] py-3 min-w-[240px] rounded-b-lg;
  inset-inline-start: 0;
  transition: opacity 0.2s ease;
}

.sub-link { 
  @apply block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#1d5b9d] transition-colors font-medium; 
}

/* Ensure the dropdown stays visible while hovering */
.group:hover .dropdown-menu {
  display: block;
}

.router-link-active:not(.group *) {
  @apply text-[#1d5b9d];
}
</style>