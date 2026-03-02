export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'fr',
  messages: {
    fr: {
      nav: {
        home: 'ACCUEIL',
        about: 'A PROPOS',
        about_sub: { who: 'Qui Sommes-nous', membership: 'Notre Appartenance', network: 'Réseau International', values: 'Nos Valeurs' },
        individuals: 'PARTICULIERS',
        ind_sub: { vehicles: 'Véhicules', auto: 'Assurance Automobile', moto: 'Assurance Moto', health: 'Santé', accident: 'Individuelle Accident', health_pack: 'Pack Santé Monde', home: 'Multirisques Habitation', travel: 'Assistance / Voyage' },
        businesses: 'ENTREPRISES',
        ent_sub: { assets: 'Assurances des Biens', fleet: 'Flotte Automobile', maritime: 'Transport & Maritime', liability: 'Responsabilité Civile' },
        expertise: 'NOTRE EXPERTISE',
        client: 'ESPACE CLIENT'
      },
      contact: { email: 'Écrivez-nous', phone: 'Appelez-nous', emailLabel: 'info@cpa.ma', phoneLabel: '+212 5 22 95 39 00' },
      hero: { title: 'Nous avons', titleBold: 'DÉMÉNAGÉ !', subtitle: 'Nous sommes ravis de vous accueillir dans nos nouveaux locaux.', address: 'Casablanca', website: 'www.cpa.ma' },
      services: { title: 'UNE MEILLEURE', titleBold: 'ASSURANCE POUR TOUS', description: 'Découvrez nos offres', auto: { title: 'AUTOMOBILE', description: 'Meilleur rapport qualité prix' }, home: { title: 'HABITATION', description: 'Protégez votre logement' }, health: { title: 'SANTÉ', description: 'Prévoyance et santé' }, assistance: { title: 'ASSISTANCE', description: 'Solutions de protection' }, loadMore: 'CHARGER PLUS' },
      footer: { home: 'Accueil', about: 'A propos', contact: 'Contact', address: 'Casablanca', phone: '+212 5 22 95 39 00', hours: 'Lundi au Vendredi', hoursTime: '8H00 A 17H00' },
      aboutPage: { description: "CPA est une entreprise leader au Maroc.", experience: "Plus de 20 ans d'expérience.", features: { auto: "Automobile", home: "Habitation", health: "Santé", savings: "Épargne", assistance: "Assistance" } }
    },
    en: {
      nav: {
        home: 'HOME',
        about: 'ABOUT',
        about_sub: { who: 'Who We Are', membership: 'Our Affiliation', network: 'International Network', values: 'Our Values' },
        individuals: 'INDIVIDUALS',
        ind_sub: { vehicles: 'Vehicles', auto: 'Car Insurance', moto: 'Motorcycle Insurance', health: 'Health', accident: 'Personal Accident', health_pack: 'World Health Pack', home: 'Home Insurance', travel: 'Assistance / Travel' },
        businesses: 'BUSINESSES',
        ent_sub: { assets: 'Asset Insurance', fleet: 'Fleet Insurance', maritime: 'Maritime', liability: 'Civil Liability' },
        expertise: 'OUR EXPERTISE',
        client: 'CLIENT AREA'
      },
      contact: { email: 'Write to us', phone: 'Call us', emailLabel: 'info@cpa.ma', phoneLabel: '+212 5 22 95 39 00' },
      hero: { title: 'We have', titleBold: 'MOVED!', subtitle: 'We are delighted to welcome you to our new offices.', address: 'Casablanca', website: 'www.cpa.ma' },
      services: { title: 'BETTER', titleBold: 'INSURANCE', description: 'Discover our offers', auto: { title: 'CAR', description: 'Best quality-price' }, home: { title: 'HOME', description: 'Protect your home' }, health: { title: 'HEALTH', description: 'Life & Health' }, assistance: { title: 'ASSISTANCE', description: 'Protection solutions' }, loadMore: 'LOAD MORE' },
      footer: { home: 'Home', about: 'About', contact: 'Contact', address: 'Casablanca', phone: '+212 5 22 95 39 00', hours: 'Monday to Friday', hoursTime: '8 AM to 5 PM' },
      aboutPage: { description: "CPA is a leading company in Morocco.", experience: "Over 20 years of experience.", features: { auto: "Car", home: "Home", health: "Health", savings: "Savings", assistance: "Assistance" } }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'حول',
        about_sub: { who: 'من نحن', membership: 'انتماؤنا', network: 'الشبكة الدولية', values: 'قيمنا' },
        individuals: 'الأفراد',
        ind_sub: { vehicles: 'المركبات', auto: 'تأمين السيارات', moto: 'تأمين الدراجات النارية', health: 'الصحة', accident: 'حوادث فردية', health_pack: 'باقة الصحة العالمية', home: 'تأمين المنزل', travel: 'المساعدة / السفر' },
        businesses: 'الشركات',
        ent_sub: { assets: 'تأمين الممتلكات', fleet: 'أسطول السيارات', maritime: 'النقل البحري', liability: 'المسؤولية المدنية' },
        expertise: 'خبرتنا',
        client: 'فضاء الزبناء'
      },
      contact: { email: 'اكتب لنا', phone: 'اتصل بنا', emailLabel: 'info@cpa.ma', phoneLabel: '+212 5 22 95 39 00' },
      hero: { title: 'لقد', titleBold: 'انتقلنا!', subtitle: 'يسعدنا استقبالكم في مكاتبنا الجديدة.', address: 'الدار البيضاء', website: 'www.cpa.ma' },
      services: { title: 'تأمين أفضل', titleBold: 'للجميع', description: 'اكتشف عروضنا', auto: { title: 'السيارات', description: 'أفضل جودة وسعر' }, home: { title: 'المنزل', description: 'احمِ منزلك' }, health: { title: 'الصحة', description: 'الحياة والصحة' }, assistance: { title: 'المساعدة', description: 'حلول الحماية' }, loadMore: 'تحميل المزيد' },
      footer: { home: 'الرئيسية', about: 'حول', contact: 'اتصل', address: 'الدار البيضاء', phone: '+212 5 22 95 39 00', hours: 'من الاثنين إلى الجمعة', hoursTime: 'من 8 صباحاً إلى 5 مساءً' },
      aboutPage: { description: "CPA هي شركة رائدة في المغرب.", experience: "أكثر من 20 عاماً من الخبرة.", features: { auto: "سيارات", home: "سكن", health: "صحة", savings: "ادخار", assistance: "مساعدة" } }
    },
    es: {
      nav: {
        home: 'INICIO',
        about: 'NOSOTROS',
        about_sub: { who: 'Quiénes Somos', membership: 'Nuestra Afiliación', network: 'Red Internacional', values: 'Nuestros Valores' },
        individuals: 'PARTICULARES',
        ind_sub: { vehicles: 'Vehículos', auto: 'Seguro de Automóvil', moto: 'Seguro de Moto', health: 'Salud', accident: 'Accidente Individual', health_pack: 'Pack Salud Mundial', home: 'Seguro de Hogar', travel: 'Asistencia / Viaje' },
        businesses: 'EMPRESAS',
        ent_sub: { assets: 'Seguro de Bienes', fleet: 'Flota de Vehículos', maritime: 'Marítimo', liability: 'Responsabilidad Civil' },
        expertise: 'EXPERIENCIA',
        client: 'ÁREA CLIENTE'
      },
      contact: { email: 'Escríbanos', phone: 'Llámenos', emailLabel: 'info@cpa.ma', phoneLabel: '+212 5 22 95 39 00' },
      hero: { title: 'Nos hemos', titleBold: 'MUDADO!', subtitle: 'Estamos encantados de recibirle en nuestras nuevas oficinas.', address: 'Casablanca', website: 'www.cpa.ma' },
      services: { title: 'MEJOR', titleBold: 'SEGURO', description: 'Descubra nuestras ofertas', auto: { title: 'AUTOMÓVIL', description: 'Mejor relación calidad-precio' }, home: { title: 'HOGAR', description: 'Proteja su hogar' }, health: { title: 'SALUD', description: 'Vida y Salud' }, assistance: { title: 'ASISTENCIA', description: 'Soluciones de protección' }, loadMore: 'LEER MÁS' },
      footer: { home: 'Inicio', about: 'Nosotros', contact: 'Contacto', address: 'Casablanca', phone: '+212 5 22 95 39 00', hours: 'Lunes a Viernes', hoursTime: '8:00 a 17:00' },
      aboutPage: { description: "CPA es una empresa líder en Marruecos.", experience: "Más de 20 años de experiencia.", features: { auto: "Automóvil", home: "Hogar", health: "Salud", savings: "Ahorro", assistance: "Asistencia" } }
    }
  }
}))