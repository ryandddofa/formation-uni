# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

adptfr/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.js                     # Point d'entrée
│   ├── App.vue                     # Composant racine
│   │
│   ├── components/
│   │   ├── HomeScreen.vue          # Écran d'accueil (sélection catégories)
│   │   ├── ExerciseScreen.vue      # Écran principal d'exercice
│   │   ├── ExerciseCard.vue        # Affichage phrase + input
│   │   ├── HintSystem.vue          # Gestion des indices
│   │   ├── FeedbackPanel.vue       # Résultat + explication
│   │   ├── SessionProgress.vue     # Barre de progression
│   │   └── SessionSummary.vue      # Récapitulatif fin de session
│   │
│   ├── stores/
│   │   ├── exerciseStore.js        # Logique exercices + génération
│   │   └── sessionStore.js         # Session courante + historique
│   │
│   ├── data/
│   │   ├── templates/
│   │   │   ├── participe-passe-avoir.js
│   │   │   ├── participe-passe-etre.js
│   │   │   ├── homophones-grammaticaux.js
│   │   │   ├── homophones-lexicaux.js
│   │   │   ├── conjugaison.js
│   │   │   ├── accords-sujet-verbe.js
│   │   │   └── accords-groupe-nominal.js
│   │   │
│   │   ├── wordLists/
│   │   │   ├── verbs.js            # Listes de verbes par catégorie
│   │   │   ├── nouns.js            # Noms avec genre/nombre
│   │   │   ├── adjectives.js       # Adjectifs
│   │   │   └── subjects.js         # Sujets variés
│   │   │
│   │   └── categories.js           # Définition des catégories
│   │
│   ├── generators/
│   │   ├── exerciseGenerator.js    # Génère un exercice depuis template
│   │   ├── conjugationHelper.js    # Wrapper french-verbs
│   │   └── agreementHelper.js      # Gestion des accords
│   │
│   └── utils/
│       ├── validation.js           # Comparaison réponse utilisateur
│       ├── textUtils.js            # Normalisation texte
│       └── randomUtils.js          # Sélection aléatoire pondérée