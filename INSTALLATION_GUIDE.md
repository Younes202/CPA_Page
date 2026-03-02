# Guide d'Installation - CPA Replica

Ce guide vous aidera à installer et configurer le projet CPA Replica sur votre machine locale et à le déployer sur GitHub Pages.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé:

- **Node.js** (version 16 ou supérieure) - [Télécharger](https://nodejs.org/)
- **npm** ou **pnpm** (gestionnaire de paquets)
- **Git** (pour le contrôle de version) - [Télécharger](https://git-scm.com/)

## Étape 1: Extraction du projet

1. Extrayez le fichier `cpa-replica.zip` dans le dossier de votre choix
2. Ouvrez un terminal/console de commande
3. Naviguez vers le dossier du projet:

```bash
cd chemin/vers/cpa-replica
```

## Étape 2: Installation des dépendances

Installez toutes les dépendances du projet:

```bash
npm install
```

Ou si vous utilisez pnpm:

```bash
pnpm install
```

## Étape 3: Démarrage du serveur de développement

Pour voir le site en local, exécutez:

```bash
npm run dev
```

Ou avec pnpm:

```bash
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

## Étape 4: Modification du domaine personnalisé

Pour utiliser votre propre domaine:

1. Ouvrez le fichier `public/CNAME`
2. Remplacez `yourdomain.ma` par votre domaine:

```
mondomaine.ma
```

3. Sauvegardez le fichier

## Étape 5: Build pour la production

Pour générer le site statique:

```bash
npm run generate
```

Cela créera un dossier `dist/` avec tous les fichiers statiques.

## Étape 6: Déploiement sur GitHub Pages

### Option A: Déploiement manuel

1. **Créer un repository GitHub**
   - Allez sur [GitHub](https://github.com/new)
   - Créez un nouveau repository nommé `votre-nom-utilisateur.github.io` (ou un autre nom)

2. **Initialiser Git et pousser le code**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-nom-utilisateur/votre-repo.git
git push -u origin main
```

3. **Configurer GitHub Pages**
   - Allez dans les paramètres du repository
   - Allez à "Pages" dans le menu latéral
   - Sous "Source", sélectionnez "GitHub Actions"

4. **Le workflow se lancera automatiquement**
   - Le site sera construit et déployé automatiquement
   - Accédez à votre site via `https://votre-domaine.ma`

### Option B: Déploiement via GitHub CLI

```bash
# Authentifiez-vous avec GitHub
gh auth login

# Créez un repository
gh repo create cpa-replica --public --source=. --remote=origin --push
```

## Étape 7: Configuration du domaine personnalisé

### Avec GitHub Pages:

1. Dans les paramètres du repository GitHub
2. Allez à "Pages"
3. Sous "Custom domain", entrez votre domaine
4. Configurez les DNS records chez votre registraire de domaine:

**Pour un sous-domaine** (ex: cpa.monsite.com):
```
CNAME cpa.monsite.com github-pages.yourusername.github.io
```

**Pour un domaine racine** (ex: monsite.com):
```
A 185.199.108.153
A 185.199.109.153
A 185.199.110.153
A 185.199.111.153
```

## Étape 8: Vérification du déploiement

1. Attendez quelques minutes après le push
2. Allez sur `https://votre-domaine.ma`
3. Vérifiez que le site s'affiche correctement
4. Testez les différentes langues (FR, EN, AR, ES)

## Dépannage

### Le site ne se charge pas

1. Vérifiez que les dépendances sont installées:
```bash
npm install
```

2. Supprimez le cache et réinstallez:
```bash
rm -rf node_modules .nuxt dist
npm install
```

3. Redémarrez le serveur de développement:
```bash
npm run dev
```

### Les traductions ne s'affichent pas

1. Vérifiez que `i18n.config.ts` contient toutes les traductions
2. Vérifiez que le sélecteur de langue fonctionne
3. Ouvrez la console du navigateur (F12) pour voir les erreurs

### GitHub Pages ne déploie pas

1. Vérifiez que le fichier `public/CNAME` existe
2. Vérifiez que le workflow GitHub Actions s'est exécuté sans erreur
3. Vérifiez les paramètres de Pages dans le repository
4. Attendez 5-10 minutes après le push

### Le domaine personnalisé ne fonctionne pas

1. Vérifiez que les DNS records sont correctement configurés
2. Attendez 24-48 heures pour la propagation DNS
3. Testez avec `nslookup votre-domaine.ma`
4. Vérifiez que le fichier `public/CNAME` contient le bon domaine

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Construit le projet |
| `npm run generate` | Génère le site statique |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Lance ESLint |
| `npm run format` | Formate le code avec Prettier |

## Structure du projet

```
cpa-replica/
├── app/
│   ├── components/          # Composants Vue réutilisables
│   ├── pages/              # Pages Nuxt (routes)
│   ├── layouts/            # Layouts Nuxt
│   ├── assets/
│   │   ├── images/         # Images
│   │   └── styles/         # Styles CSS
│   ├── composables/        # Composables Vue
│   └── utils/              # Fonctions utilitaires
├── public/
│   ├── CNAME               # Configuration domaine
│   └── .nojekyll           # Configuration GitHub Pages
├── .github/workflows/      # Workflows GitHub Actions
├── nuxt.config.ts          # Configuration Nuxt
├── i18n.config.ts          # Configuration traductions
├── tailwind.config.ts      # Configuration Tailwind
├── package.json            # Dépendances
└── README.md               # Documentation
```

## Personnalisation

### Changer les couleurs

Modifiez `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0052A3',      // Bleu
  'primary-dark': '#003d7a',
  secondary: '#00CC00',    // Vert
  accent: '#FF6B6B',       // Rouge
}
```

### Ajouter une nouvelle page

Créez un fichier dans `app/pages/`:

```vue
<!-- app/pages/nouvelle-page.vue -->
<template>
  <div>
    <h1>Ma nouvelle page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

### Ajouter une nouvelle langue

Modifiez `i18n.config.ts`:

1. Ajoutez la langue dans `locales`
2. Ajoutez les traductions dans `messages`

## Support

Pour plus d'informations:

- **Nuxt 3**: https://nuxt.com
- **Tailwind CSS**: https://tailwindcss.com
- **Vue 3**: https://vuejs.org
- **vue-i18n**: https://vue-i18n.intlify.dev
- **GitHub Pages**: https://pages.github.com

## Licence

MIT

---

Créé avec ❤️ pour CPA - Conseil et Placement d'Assurances
