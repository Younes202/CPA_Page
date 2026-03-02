# CPA Replica - Conseil et Placement d'Assurances

Un site web moderne répliquant le design de cpa.ma, construit avec Nuxt 3, Tailwind CSS et support multilingue (FR, EN, AR, ES).

## Caractéristiques

- **Framework**: Nuxt 3 avec Vue 3
- **Styling**: Tailwind CSS 3
- **Multilingue**: Support pour le français, anglais, arabe et espagnol via vue-i18n
- **Optimisé pour GitHub Pages**: Configuration prête pour le déploiement statique
- **Domaine personnalisé**: Fichier CNAME inclus pour votre domaine
- **Responsive**: Design mobile-first et adaptatif

## Structure du projet

```
cpa-replica/
├── app/
│   ├── components/          # Composants Vue réutilisables
│   ├── pages/              # Pages Nuxt
│   ├── layouts/            # Layouts Nuxt
│   ├── assets/
│   │   ├── images/         # Images du projet
│   │   └── styles/         # Styles CSS globaux
│   ├── composables/        # Composables Vue
│   ├── utils/              # Fonctions utilitaires
│   └── locales/            # Fichiers de traduction
├── public/
│   ├── CNAME               # Configuration domaine personnalisé
│   └── .nojekyll           # Configuration GitHub Pages
├── nuxt.config.ts          # Configuration Nuxt
├── i18n.config.ts          # Configuration i18n
├── tailwind.config.ts      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances du projet
```

## Installation

1. **Cloner le repository** (ou extraire le ZIP)
```bash
cd cpa-replica
```

2. **Installer les dépendances**
```bash
npm install
# ou
pnpm install
```

3. **Démarrer le serveur de développement**
```bash
npm run dev
# ou
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

## Développement

### Ajouter une nouvelle page

Créer un fichier dans `app/pages/`:

```vue
<!-- app/pages/about.vue -->
<template>
  <div>
    <h1>À propos</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

### Ajouter un nouveau composant

Créer un fichier dans `app/components/`:

```vue
<!-- app/components/MyComponent.vue -->
<template>
  <div>
    <!-- Votre contenu -->
  </div>
</template>

<script setup lang="ts">
// Votre logique
</script>
```

### Changer la langue

Le sélecteur de langue est disponible dans le header. Les traductions sont définies dans `i18n.config.ts`.

### Modifier le domaine personnalisé

Éditer le fichier `public/CNAME` et remplacer `yourdomain.ma` par votre domaine:

```
mondomaine.ma
```

## Build et Déploiement

### Build pour la production

```bash
npm run build
# ou
pnpm build
```

### Générer le site statique

```bash
npm run generate
# ou
pnpm generate
```

### Déployer sur GitHub Pages

1. **Configurer votre repository GitHub**

2. **Mettre à jour le domaine** dans `public/CNAME`

3. **Configurer GitHub Pages** dans les paramètres du repository:
   - Source: GitHub Actions
   - Utiliser la branche `main` ou `gh-pages`

4. **Créer un workflow GitHub Actions** (optionnel):

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run generate
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Configuration

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts`:

- **Primaire**: `#0052A3` (Bleu)
- **Secondaire**: `#00CC00` (Vert)
- **Accent**: `#FF6B6B` (Rouge)

### Polices

La police par défaut est Helvetica Neue. Vous pouvez la changer dans `tailwind.config.ts`.

### i18n

Les traductions sont gérées dans `i18n.config.ts`. Ajouter une nouvelle langue:

```typescript
locales: [
  { code: 'fr', iso: 'fr-FR', name: 'Français' },
  { code: 'en', iso: 'en-US', name: 'English' },
  { code: 'ar', iso: 'ar-MA', name: 'العربية' },
  { code: 'es', iso: 'es-ES', name: 'Español' },
  // Ajouter une nouvelle langue ici
]
```

## Troubleshooting

### Le site ne se charge pas correctement

1. Vérifier que les dépendances sont installées: `npm install`
2. Supprimer le cache: `rm -rf .nuxt dist node_modules`
3. Réinstaller: `npm install`
4. Redémarrer le serveur: `npm run dev`

### Les traductions ne s'affichent pas

1. Vérifier que `i18n.config.ts` contient les traductions
2. Vérifier que le composant utilise `{{ $t('clé') }}`
3. Vérifier que la locale est correctement définie

### GitHub Pages ne déploie pas correctement

1. Vérifier que `public/CNAME` contient le bon domaine
2. Vérifier que `public/.nojekyll` existe
3. Vérifier que le workflow GitHub Actions est configuré correctement
4. Vérifier que la branche de déploiement est correcte

## Support

Pour plus d'informations sur Nuxt 3: https://nuxt.com
Pour plus d'informations sur Tailwind CSS: https://tailwindcss.com
Pour plus d'informations sur vue-i18n: https://vue-i18n.intlify.dev

## Licence

MIT

## Auteur

Créé avec ❤️ pour CPA - Conseil et Placement d'Assurances
