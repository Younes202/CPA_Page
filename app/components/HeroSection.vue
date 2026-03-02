<template>
  <div class="bg-white">
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/assets/images/hero-background.jpeg" alt="CPA Building" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 flex justify-end">
          <div class="w-full lg:w-[60%] h-full relative overflow-hidden blend-mask">
            <img src="/assets/images/double-background.png" alt="Insurance Team" class="w-full h-full object-cover object-[right_center] opacity-90 contrast-110 scale-95" />
          </div>
        </div>
        <div class="absolute inset-0 bg-[#1d5b9d]/85 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#1d5b9d] via-transparent to-transparent opacity-50"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-in-left">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
              {{ $t('hero.title') }}<br />
              <span class="text-[#a0a0a0]">{{ $t('hero.titleBold') }}</span>
            </h1>
            <p class="text-xl md:text-2xl mb-10 text-gray-100 max-w-lg leading-relaxed font-light">
              {{ $t('hero.subtitle') }}
            </p>
            <div class="flex flex-wrap gap-4 mb-10">
              <NuxtLink :to="localePath('/expertise')" class="bg-white text-[#1d5b9d] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
                Découvrir nos services
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#1d5b9d] transition shadow-lg transform hover:scale-105">
                Contactez-nous
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
         <div class="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>

    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-[#1d5b9d] text-sm font-bold uppercase tracking-[0.3em] mb-4">Expertise & Solutions</h2>
          <p class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos Services <span class="text-[#1d5b9d]">Sur Mesure</span>
          </p>
          <div class="w-20 h-1.5 bg-[#1d5b9d] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(service, index) in services" :key="index" 
               class="group relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-[#1d5b9d]/20 overflow-hidden">
            <div class="w-16 h-16 bg-[#1d5b9d]/10 rounded-2xl flex items-center justify-center text-[#1d5b9d] text-3xl mb-6 group-hover:bg-[#1d5b9d] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
              <span>{{ service.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1d5b9d] transition-colors uppercase tracking-tight">{{ service.title }}</h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">{{ service.desc }}</p>
            <NuxtLink :to="localePath(service.link)" class="text-[#1d5b9d] font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              En savoir plus <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white overflow-hidden border-t border-slate-100">
      <div class="container mx-auto px-4 mb-10 text-center">
        <p class="text-slate-400 text-xs font-bold uppercase tracking-[0.4em]">Nos Partenaires Stratégiques</p>
      </div>
      <div class="relative flex overflow-x-hidden group">
        <div class="py-4 animate-marquee flex items-center whitespace-nowrap">
          <div v-for="partner in partners" :key="partner" class="mx-12 flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div class="w-10 h-10 border border-[#1d5b9d]/30 rounded-lg flex items-center justify-center text-[#1d5b9d] font-black">{{ partner[0] }}</div>
             <span class="text-xl font-black text-slate-800 tracking-tighter">{{ partner }}</span>
          </div>
        </div>
        <div class="absolute top-0 py-4 animate-marquee2 flex items-center whitespace-nowrap">
          <div v-for="partner in partners" :key="'copy-'+partner" class="mx-12 flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div class="w-10 h-10 border border-[#1d5b9d]/30 rounded-lg flex items-center justify-center text-[#1d5b9d] font-black">{{ partner[0] }}</div>
             <span class="text-xl font-black text-slate-800 tracking-tighter">{{ partner }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-900 relative overflow-hidden">
      <img src="/assets/images/hero-background.jpeg" class="absolute inset-0 w-full h-full object-cover opacity-20" alt="CPA Background" />
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            <div class="p-10 md:p-16">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-[#1d5b9d] rounded-xl flex items-center justify-center text-xl">📩</div>
                <h3 class="text-2xl font-bold text-white tracking-tight">Restez Informés</h3>
              </div>
              <p class="text-white/70 mb-8 leading-relaxed">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du secteur de l'assurance et nos offres exclusives.
              </p>
              <form @submit.prevent="handleNewsletter" class="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="votre@email.com" class="flex-1 bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#1d5b9d] transition-all" required />
                <button type="submit" class="bg-white text-[#1d5b9d] font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-transform active:scale-95">S'abonner</button>
              </form>
            </div>

            <div class="p-10 md:p-16 bg-white/5">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">❓</div>
                <h3 class="text-2xl font-bold text-white tracking-tight">Questions Spécifiques</h3>
              </div>
              <p class="text-white/60 text-sm mb-6">Cliquez sur une thématique pour nous consulter :</p>
              
              <div class="space-y-2 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                <button 
                  v-for="(q, idx) in specificQuestions" 
                  :key="idx"
                  @click="handleQuestionClick(q)"
                  class="w-full text-left p-3 rounded-xl bg-white/5 border border-white/5 text-white/80 text-xs hover:bg-white/10 hover:border-white/20 transition-all flex justify-between items-center group"
                >
                  {{ q }}
                  <span class="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              </div>

              <NuxtLink :to="localePath('/contact')" class="flex items-center justify-center w-full bg-[#1d5b9d] py-4 rounded-xl text-white font-bold hover:bg-[#164a82] transition-colors shadow-lg">
                Poser une autre question
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const services = [
  { title: "Automobile", desc: "Le meilleur rapport qualité-prix pour votre véhicule.", icon: "🚗", link: "/expertise/auto" },
  { title: "Habitation", desc: "Protégez votre logement et vos biens précieux.", icon: "🏠", link: "/expertise/habitation" },
  { title: "Santé", desc: "Prévoyance et santé pour vous et vos proches.", icon: "🏥", link: "/expertise/sante" },
  { title: "Assistance", desc: "Solutions de protection et aide 24h/24.", icon: "🤝", link: "/expertise/assistance" }
]

const partners = ["ATLANTA SANAD", "MAMDA", "MCMA", "SCR", "WAFA ASSURANCE", "RMA", "AXA", "SANLAM"]

const specificQuestions = [
  "Audit gratuit de nos polices d'assurance actuelles ?",
  "Optimisation des coûts de flotte automobile ?",
  "Solutions de santé groupe (AMC) pour collaborateurs ?",
  "Gestion et placement des risques industriels ?",
  "Accompagnement personnalisé en cas de sinistre ?",
  "Assurance 'Tous Risques' Chantier pour construction ?",
  "Optimisation de la RC Professionnelle ?",
  "Solutions de retraite complémentaire cadre ?",
  "Protection des actifs immobiliers commerciaux ?",
  "Assurance transport et facultés maritimes ?"
]

const handleNewsletter = () => {
  alert("Merci pour votre inscription à la newsletter CPA !")
}

const handleQuestionClick = (question: string) => {
  // Logic to redirect to contact with pre-filled subject
  const contactUrl = localePath('/contact')
  console.log(`Redirecting to contact for: ${question}`)
  // You can use a query param: navigateTo(`${contactUrl}?subject=${encodeURIComponent(question)}`)
}
</script>

<style scoped>
.blend-mask {
  mask-image: linear-gradient(to left, black 75%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, black 75%, transparent 100%);
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-slide-in-left { animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
@keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }

.animate-marquee { animation: marquee 35s linear infinite; }
.animate-marquee2 { animation: marquee2 35s linear infinite; }
.group:hover .animate-marquee, .group:hover .animate-marquee2 { animation-play-state: paused; }

/* Scrollbar styling for the questions list */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
</style>