# Structure détaillée du projet CPA Replica

## Vue d'ensemble

Ce document décrit la structure complète du projet Nuxt 3 et explique le rôle de chaque fichier et dossier.

## Structure racine

```
cpa-replica/
├── app/                    # Dossier principal de l'application
├── public/                 # Fichiers statiques publics
├── .github/                # Configuration GitHub (workflows)
├── nuxt.config.ts          # Configuration principale de Nuxt
├── i18n.config.ts          # Configuration des traductions
├── app.config.ts           # Configuration de l'application
├── app.vue                 # Composant racine Vue
├── tailwind.config.ts      # Configuration Tailwind CSS
├── tsconfig.json           # Configuration TypeScript
├── postcss.config.js       # Configuration PostCSS
├── package.json            # Dépendances et scripts
├── .gitignore              # Fichiers à ignorer par Git
├── .eslintrc.json          # Configuration ESLint
├── README.md               # Documentation principale
├── INSTALLATION_GUIDE.md   # Guide d'installation
└── SITE_ANALYSIS.md        # Analyse du site original
```

## Dossier `app/`

Le dossier `app/` contient toute la logique de l'application Vue/Nuxt.

### `app/components/`

Composants Vue réutilisables:

- **LanguageSwitcher.vue**: Sélecteur de langue (FR, EN, AR, ES)
- **HeroSection.vue**: Section héro avec annonce de déménagement
- **ServicesSection.vue**: Affichage des 4 services principaux
- **ContactSection.vue**: Section de contact avec formulaire
- **QuoteSection.vue**: Section d'appel à l'action pour devis
- **PartnersSection.vue**: Affichage des partenaires

### `app/pages/`

Pages Nuxt (chaque fichier = une route):

- **index.vue**: Page d'accueil (route `/`)
- **about.vue**: Page À propos (route `/about`)
- **individuals.vue**: Page Particuliers (route `/individuals`)
- **businesses.vue**: Page Entreprises (route `/businesses`)
- **expertise.vue**: Page Notre expertise (route `/expertise`)
- **client.vue**: Page Espace client (route `/client`)

### `app/layouts/`

Layouts Nuxt (structures de page):

- **default.vue**: Layout par défaut avec header et footer

### `app/assets/`

Ressources statiques:

- **assets/styles/main.css**: Styles CSS globaux (Tailwind + personnalisés)
- **assets/images/**: Dossier pour les images (vide pour le moment)

### `app/composables/`

Composables Vue réutilisables (logique réutilisable):

- Vide pour le moment, à remplir selon les besoins

### `app/utils/`

Fonctions utilitaires:

- Vide pour le moment, à remplir selon les besoins

### `app/locales/`

Fichiers de traduction (vide, les traductions sont dans `i18n.config.ts`):

- Peut être utilisé pour organiser les traductions par fichier

## Dossier `public/`

Fichiers statiques servis à la racine du site:

- **CNAME**: Fichier de configuration pour le domaine personnalisé (GitHub Pages)
- **.nojekyll**: Fichier vide qui désactive Jekyll sur GitHub Pages

## Dossier `.github/`

Configuration GitHub:

### `.github/workflows/`

Workflows GitHub Actions:

- **deploy.yml**: Workflow automatique pour build et déploiement sur GitHub Pages

## Fichiers de configuration

### `nuxt.config.ts`

Configuration principale de Nuxt 3:

```typescript
- ssr: true                    // Rendu côté serveur
- nitro.preset: 'github-pages' // Optimisé pour GitHub Pages
- app.baseURL: '/'             // URL de base
- modules: Tailwind, i18n      // Modules activés
- i18n: Configuration i18n
```

### `i18n.config.ts`

Configuration des traductions:

- **Locales**: FR, EN, AR, ES
- **Messages**: Traductions pour chaque locale
- **Clés de traduction**: nav, contact, hero, services, etc.

### `tailwind.config.ts`

Configuration Tailwind CSS:

- **Colors**: Couleurs personnalisées (primary, secondary, accent)
- **FontFamily**: Polices personnalisées
- **Spacing**: Espacements personnalisés

### `tsconfig.json`

Configuration TypeScript:

- **Paths**: Alias pour les imports (`~/*`, `@/*`)
- **Target**: ES2020
- **Strict mode**: Activé

### `postcss.config.js`

Configuration PostCSS:

- **Tailwind**: Plugin Tailwind CSS
- **Autoprefixer**: Plugin pour les préfixes navigateur

### `app.vue`

Composant racine Vue:

- Point d'entrée de l'application
- Enveloppe tous les layouts et pages

### `package.json`

Dépendances et scripts:

**Scripts**:
- `dev`: Démarre le serveur de développement
- `build`: Construit le projet
- `generate`: Génère le site statique
- `preview`: Prévisualise le build
- `lint`: Lance ESLint
- `format`: Formate le code

**Dépendances principales**:
- `nuxt`: Framework Nuxt 3
- `vue`: Framework Vue 3
- `tailwindcss`: Framework CSS
- `vue-i18n`: Gestion des traductions
- `@vueuse/nuxt`: Composables Vue réutilisables

## Flux de données

### Traductions (i18n)

1. Utilisateur change de langue via `LanguageSwitcher.vue`
2. La locale est mise à jour dans le composable `useI18n()`
3. Tous les composants utilisant `$t('clé')` se mettent à jour
4. L'URL change pour refléter la nouvelle locale

### Navigation

1. Utilisateur clique sur un lien dans le header
2. Nuxt route vers la page correspondante
3. Le layout `default.vue` est appliqué
4. La page est rendue avec le contenu approprié

### Styles

1. Tailwind CSS génère les classes utilitaires
2. Les styles globaux de `main.css` sont appliqués
3. Les composants utilisent les classes Tailwind
4. PostCSS ajoute les préfixes navigateur

## Points d'entrée

### Développement

```bash
npm run dev
```

Lance le serveur Vite sur `http://localhost:3000`

### Production

```bash
npm run generate
```

Génère les fichiers statiques dans le dossier `dist/`

### Déploiement

Le workflow GitHub Actions détecte les push sur `main` et:

1. Clone le repository
2. Installe les dépendances
3. Lance `npm run generate`
4. Déploie les fichiers dans `dist/` sur GitHub Pages

## Personnalisation

### Ajouter une nouvelle page

1. Créer un fichier dans `app/pages/`
2. Ajouter le contenu Vue
3. Ajouter les traductions dans `i18n.config.ts`
4. Ajouter le lien dans le header (`app/layouts/default.vue`)

### Ajouter une nouvelle langue

1. Ajouter la locale dans `i18n.config.ts` (locales array)
2. Ajouter les traductions pour la nouvelle langue (messages object)
3. Le sélecteur de langue se mettra à jour automatiquement

### Changer les couleurs

1. Modifier `tailwind.config.ts`
2. Les couleurs Tailwind se mettront à jour automatiquement
3. Les composants utilisant les classes Tailwind refléteront les changements

### Ajouter des images

1. Placer les images dans `app/assets/images/`
2. Les importer dans les composants:

```vue
<img src="~/assets/images/mon-image.png" alt="Description" />
```

## Optimisations pour GitHub Pages

- **Preset Nitro**: Configuration optimisée pour GitHub Pages
- **Fichier CNAME**: Permet l'utilisation d'un domaine personnalisé
- **Fichier .nojekyll**: Désactive Jekyll pour éviter les conflits
- **Workflow GitHub Actions**: Automatise le build et le déploiement
- **Génération statique**: Tous les fichiers sont pré-générés

## Performance

- **Tailwind CSS**: Génère uniquement les classes utilisées
- **Vue 3**: Framework léger et performant
- **Nuxt 3**: Optimisations automatiques
- **Code splitting**: Chaque page est un chunk séparé
- **Lazy loading**: Les images sont chargées à la demande

## Sécurité

- **TypeScript**: Typage statique pour éviter les erreurs
- **ESLint**: Vérification du code
- **HTTPS**: GitHub Pages utilise HTTPS par défaut
- **No backend**: Pas de serveur à sécuriser

## Maintenance

### Mettre à jour les dépendances

```bash
npm update
```

### Vérifier le code

```bash
npm run lint
```

### Formater le code

```bash
npm run format
```

## Ressources

- **Nuxt 3**: https://nuxt.com/docs
- **Vue 3**: https://vuejs.org/guide/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **vue-i18n**: https://vue-i18n.intlify.dev/
- **GitHub Pages**: https://pages.github.com/

---

Créé avec ❤️ pour CPA - Conseil et Placement d'Assurances
