package.json :
```
{
  "name": "adptfr",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "french-verbs": "^5.4.0",
    "french-verbs-lefff": "^3.4.0",
    "french-words": "^3.4.0",
    "french-words-gender-lefff": "^3.4.0",
    "pinia": "^3.0.4",
    "vue": "^3.5.24"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.1",
    "vite": "^7.2.4"
  }
}
```

main.js :
```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
```

App.vue :
```
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'
import HomeScreen from '@/components/HomeScreen.vue'
import HomeScreenTecfee from '@/components/HomeScreenTecfee.vue'
import ExerciseScreen from '@/components/ExerciseScreen.vue'
import TecfeeExerciseScreen from '@/components/TecfeeExerciseScreen.vue'
import SessionSummary from '@/components/SessionSummary.vue'
import TecfeeSummary from '@/components/TecfeeSummary.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ModeIndicator from '@/components/ModeIndicator.vue'
import ModeNavArrow from '@/components/ModeNavArrow.vue'
import { useSessionStore } from '@/stores/sessionStore.js'
import { useTecfeeStore } from '@/stores/tecfeeStore.js'

const { initTheme } = useTheme()
const sessionStore = useSessionStore()
const tecfeeStore = useTecfeeStore()

const currentScreen = ref('home')
const currentMode = ref('classic') // 'classic' ou 'tecfee'

// GESTION DU RETOUR ARRIÈRE
function handlePopState() {
  currentScreen.value = 'home'
  sessionStore.endSession()
  tecfeeStore.endSession()
  window.history.pushState({ screen: 'home', mode: currentMode.value }, '', '/')
}

// ============================================
// MODE SWITCHING
// ============================================

function changeMode(mode) {
  currentMode.value = mode
}

// ============================================
// HANDLERS CLASSIQUE
// ============================================

function handleStartSession(exercises) {
  sessionStore.startSession(exercises)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: currentMode.value }, '', '/')
}

function handleSessionComplete() {
  currentScreen.value = 'summary'
  window.history.pushState({ screen: 'summary', mode: currentMode.value }, '', '/')
}

function handleNewSession() {
  currentScreen.value = 'home'
}

function handleQuitSession() {
  sessionStore.endSession()
  tecfeeStore.endSession()
  currentScreen.value = 'home'
}

function handleRetryFailed(failedExercises) {
  sessionStore.startRetrySession(failedExercises)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: currentMode.value }, '', '/')
}

// ============================================
// HANDLERS TECFÉE
// ============================================

function handleTecfeeStartSession(mode) {
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: 'tecfee' }, '', '/')
}

function handleTecfeeSessionComplete() {
  currentScreen.value = 'summary'
  window.history.pushState({ screen: 'summary', mode: 'tecfee' }, '', '/')
}

function handleTecfeeRetryFailed() {
  const failed = tecfeeStore.failedQuestions
  tecfeeStore.startRetrySession(failed)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: 'tecfee' }, '', '/')
}

onMounted(() => {
  initTheme()
  window.addEventListener('popstate', handlePopState)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<template>
  <div id="app-container">
    <ThemeToggle />
    
    <!-- Mode indicator (seulement sur home) -->
    <ModeIndicator 
      v-if="currentScreen === 'home'"
      :current-mode="currentMode"
      @change-mode="changeMode"
    />
    
    <!-- Home screens avec navigation -->
    <div v-if="currentScreen === 'home'" class="home-wrapper">
      <!-- Flèche gauche (vers classique) -->
      <ModeNavArrow 
        v-if="currentMode === 'tecfee'"
        direction="left"
        label="Classique"
        @click="changeMode('classic')"
      />
      
      <!-- Home classique -->
      <HomeScreen 
        v-if="currentMode === 'classic'"
        @start-session="handleStartSession"
      />
      
      <!-- Home TECFÉE -->
      <HomeScreenTecfee
        v-else-if="currentMode === 'tecfee'"
        @start-session="handleTecfeeStartSession"
      />
      
      <!-- Flèche droite (vers TECFÉE) -->
      <ModeNavArrow 
        v-if="currentMode === 'classic'"
        direction="right"
        label="TECFÉE"
        @click="changeMode('tecfee')"
      />
    </div>
    
    <!-- Exercise screens -->
    <ExerciseScreen
      v-else-if="currentScreen === 'exercise' && currentMode === 'classic'"
      @session-complete="handleSessionComplete"
      @quit-session="handleQuitSession"
    />
    
    <TecfeeExerciseScreen
      v-else-if="currentScreen === 'exercise' && currentMode === 'tecfee'"
      @session-complete="handleTecfeeSessionComplete"
      @quit-session="handleQuitSession"
    />
    
    <!-- Summary screens -->
    <SessionSummary
      v-else-if="currentScreen === 'summary' && currentMode === 'classic'"
      @new-session="handleNewSession"
      @retry-failed="handleRetryFailed"
    />
    
    <TecfeeSummary
      v-else-if="currentScreen === 'summary' && currentMode === 'tecfee'"
      @new-session="handleNewSession"
      @retry-failed="handleTecfeeRetryFailed"
    />
  </div>
  <p class="footer">Fait par <a class="footerlink" href="https://ryandufault.com" target="_blank">Ryan Dufault</a>.</p>
</template>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.home-wrapper {
  position: relative;
}

button {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
}

.footer, .footer a {
  margin-top: 5em;
  color: #333;
  font-size: 0.85rem;
  transition: color 0.5s;
}
.footer:visited a {
  color: inherit;
}

.footer:hover a {
  color: #000;
}

/* ============================================
   MODE SOMBRE - INVERT
   ============================================ */

html.dark-mode {
  filter: invert(1) hue-rotate(180deg);
  background-color: #fff;
}

html.dark-mode .no-invert,
html.dark-mode img,
html.dark-mode video,
html.dark-mode picture,
html.dark-mode [style*="background-image"] {
  filter: invert(1) hue-rotate(180deg);
}

/* ============================================
   RESPONSIVE - Scaling proportionnel
   Base de référence : 1600x900
   ============================================ */

@media (min-width: 768px) and (max-width: 1024px) {
    html {
        font-size: 115%;
    }
}

@media (min-width: 1800px) and (max-width: 2400px) {
    html {
        font-size: 110%;
    }

    #app {
        max-width: 1250px;
    }
}

@media (min-width: 2400px) and (max-width: 3200px) {
    html {
        font-size: 140%;
    }

    #app {
        min-width: 1550px !important;
    }

    .exercise-screen {
      max-width: 2140px !important;
    }

    .home-screen,
    .home-screen-tecfee {
      min-width: 1024px !important;
    }

    .exercise-center {
      min-width: 1024px !important;
    }

    .session-summary {
      min-width: 1024px !important;
    }

    input[type="checkbox"],
    input[type="radio"] {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform-origin: 0 0; 
    }
}

@media (min-width: 3200px) {
    html {
        font-size: 200%;
    }

    #app {
        min-width: 3200px !important;
    }

    .exercise-screen {
      max-width: 4200px !important;
    }

    .home-screen,
    .home-screen-tecfee {
      min-width: 1400px !important;
    }

    .exercise-center {
      min-width: 1400px !important;
    }

    .session-summary {
      min-width: 1400px !important;
    }

    input[type="checkbox"],
    input[type="radio"] {
      transform: scale(1.75);
      -webkit-transform: scale(1.75);
      -moz-transform: scale(1.75);
      -ms-transform: scale(1.75);
      transform-origin: 0 0; 
    }
}
</style>
```

stores/exerciseStore.js :
```
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { categories } from '@/data/categories.js'
import { templates as ppAvoirTemplates } from '@/data/templates/participe-passe-avoir.js'
import { templates as ppEtreTemplates } from '@/data/templates/participe-passe-etre.js'
import { templates as homophonesTemplates } from '@/data/templates/homophones-grammaticaux.js'
import { templates as conjugaisonTemplates } from '@/data/templates/conjugaison.js'
import { templates as confusionsTemplates } from '@/data/templates/confusions-frequentes.js'
import { templates as accordsTemplates } from '@/data/templates/accords-particuliers.js'
import { generateExercise } from '@/generators/exerciseGenerator.js'
import { pickRandom, pickRandomWeighted, shuffleArray } from '@/utils/randomUtils.js'

export const useExerciseStore = defineStore('exercise', () => {
  // ============================================
  // STATE
  // ============================================
  
  const allCategories = ref(categories)
  
  // Templates par catégorie
  const templatesByCategory = ref({
    'participe-passe-avoir': ppAvoirTemplates,
    'participe-passe-etre': ppEtreTemplates,
    'homophones-grammaticaux': homophonesTemplates,
    'conjugaison': conjugaisonTemplates,
    'confusions-frequentes': confusionsTemplates,
    'accords-particuliers': accordsTemplates
  })

  // ============================================
  // GETTERS
  // ============================================
  
  const enabledCategories = computed(() => {
    return allCategories.value.filter(c => c.enabled)
  })
  
  const availableCategoryIds = computed(() => {
    return Object.keys(templatesByCategory.value)
  })

  // ============================================
  // ACTIONS
  // ============================================
  
  function generateRandomExercise(selectedCategoryIds) {
    const availableCategories = allCategories.value.filter(
      c => selectedCategoryIds.includes(c.id) && templatesByCategory.value[c.id]
    )
    
    if (availableCategories.length === 0) {
      console.error('Aucune catégorie disponible')
      return null
    }
    
    const category = pickRandomWeighted(availableCategories, 'weight')
    const templates = templatesByCategory.value[category.id]
    
    if (!templates || templates.length === 0) {
      console.error(`Aucun template pour la catégorie ${category.id}`)
      return null
    }
    
    const template = pickRandom(templates)
    return generateExercise(template, category)
  }
  
  function generateSession(selectedCategoryIds, exerciseCount) {
    const exercises = []
    const usedTemplateIds = new Set()
    
    const availableTemplates = []
    
    for (const catId of selectedCategoryIds) {
      const category = allCategories.value.find(c => c.id === catId)
      const templates = templatesByCategory.value[catId]
      
      if (category && templates) {
        for (const template of templates) {
          availableTemplates.push({
            template,
            category,
            weight: category.weight || 1
          })
        }
      }
    }
    
    const shuffledTemplates = shuffleArray([...availableTemplates])
    
    let templateIndex = 0
    let attempts = 0
    const maxAttempts = exerciseCount * 3
    
    while (exercises.length < exerciseCount && attempts < maxAttempts) {
      attempts++
      
      if (templateIndex >= shuffledTemplates.length) {
        if (usedTemplateIds.size >= availableTemplates.length) {
          usedTemplateIds.clear()
          templateIndex = 0
          shuffleArray(shuffledTemplates)
        } else {
          templateIndex = 0
        }
      }
      
      const { template, category } = shuffledTemplates[templateIndex]
      templateIndex++
      
      if (usedTemplateIds.has(template.id)) {
        continue
      }
      
      const exercise = generateExercise(template, category)
      
      if (exercise) {
        exercises.push(exercise)
        usedTemplateIds.add(template.id)
      }
    }
    
    return shuffleArray(exercises)
  }
  
  function getTemplateCountByCategory() {
    const counts = {}
    for (const [catId, templates] of Object.entries(templatesByCategory.value)) {
      counts[catId] = templates.length
    }
    return counts
  }
  
  function getCategoriesWithAvailability() {
    return allCategories.value.map(cat => ({
      ...cat,
      available: !!templatesByCategory.value[cat.id],
      templateCount: templatesByCategory.value[cat.id]?.length || 0
    }))
  }

  // ============================================
  // RETURN
  // ============================================
  
  return {
    allCategories,
    templatesByCategory,
    enabledCategories,
    availableCategoryIds,
    generateRandomExercise,
    generateSession,
    getCategoriesWithAvailability,
    getTemplateCountByCategory
  }
})
```

sessionStore.js :
```
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSessionStore = defineStore('session', () => {
  // ============================================
  // STATE
  // ============================================
  
  const exercises = ref([])
  const currentIndex = ref(0)
  const answers = ref([])
  const hintsUsed = ref([])
  const isSessionActive = ref(false)
  const sessionStartTime = ref(null)

  // ============================================
  // GETTERS
  // ============================================
  
  const currentExercise = computed(() => {
    if (currentIndex.value >= exercises.value.length) return null
    return exercises.value[currentIndex.value]
  })
  
  const progress = computed(() => {
    const total = exercises.value.length
    const current = Math.min(currentIndex.value + 1, total)
    const percentage = total > 0 ? (currentIndex.value / total) * 100 : 0
    
    return {
      current,
      total,
      percentage
    }
  })
  
  const isSessionComplete = computed(() => {
    return isSessionActive.value && currentIndex.value >= exercises.value.length
  })
  
  const currentHintsUsed = computed(() => {
    return hintsUsed.value[currentIndex.value] || 0
  })
  
  const sessionResults = computed(() => {
    const results = {
      total: exercises.value.length,
      correct: 0,
      incorrect: 0,
      totalHintsUsed: 0,
      byCategory: {},
      duration: 0
    }
    
    // Calculer la durée
    if (sessionStartTime.value) {
      results.duration = Math.floor((Date.now() - sessionStartTime.value) / 1000)
    }
    
    // Parcourir les réponses
    answers.value.forEach((answer, index) => {
      if (!answer) return
      
      const exercise = exercises.value[index]
      if (!exercise) return
      
      // Compter correct/incorrect
      if (answer.correct) {
        results.correct++
      } else {
        results.incorrect++
      }
      
      // Compter les indices
      results.totalHintsUsed += hintsUsed.value[index] || 0
      
      // Stats par catégorie
      const catId = exercise.category
      if (!results.byCategory[catId]) {
        results.byCategory[catId] = {
          id: catId,
          name: exercise.categoryName,
          total: 0,
          correct: 0
        }
      }
      results.byCategory[catId].total++
      if (answer.correct) {
        results.byCategory[catId].correct++
      }
    })
    
    return results
  })

  // ============================================
  // ACTIONS
  // ============================================
  
  /**
   * Démarre une nouvelle session
   */
  function startSession(generatedExercises) {
    exercises.value = generatedExercises
    currentIndex.value = 0
    answers.value = []
    hintsUsed.value = []
    isSessionActive.value = true
    sessionStartTime.value = Date.now()
  }
  
  /**
   * Enregistre la réponse de l'utilisateur pour l'exercice courant
   */
  function submitAnswer(userInput, isCorrect, errors = []) {
    answers.value[currentIndex.value] = {
      userInput,
      correct: isCorrect,
      errors,
      timestamp: Date.now()
    }
  }
  
  /**
   * Enregistre l'utilisation d'un indice
   */
  function useHint() {
    if (!hintsUsed.value[currentIndex.value]) {
      hintsUsed.value[currentIndex.value] = 0
    }
    hintsUsed.value[currentIndex.value]++
    return hintsUsed.value[currentIndex.value]
  }
  
  /**
   * Passe à l'exercice suivant
   */
  function nextExercise() {
    if (currentIndex.value < exercises.value.length) {
      currentIndex.value++
      return true
    }
    return false
  }
  
  /**
   * Termine la session et sauvegarde l'historique
   */
  function endSession() {
    isSessionActive.value = false
    saveToHistory()
  }
  
  /**
   * Sauvegarde la session dans localStorage
   */
  function saveToHistory() {
    try {
      const history = JSON.parse(localStorage.getItem('adptfr-history') || '[]')
      
      history.push({
        date: new Date().toISOString(),
        results: {
          total: sessionResults.value.total,
          correct: sessionResults.value.correct,
          incorrect: sessionResults.value.incorrect,
          totalHintsUsed: sessionResults.value.totalHintsUsed,
          duration: sessionResults.value.duration,
          byCategory: sessionResults.value.byCategory
        }
      })
      
      // Garder les 50 dernières sessions max
      while (history.length > 50) {
        history.shift()
      }
      
      localStorage.setItem('adptfr-history', JSON.stringify(history))
    } catch (e) {
      console.error('Erreur sauvegarde historique:', e)
    }
  }
  
  /**
   * Récupère l'historique des sessions
   */
  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem('adptfr-history') || '[]')
    } catch (e) {
      return []
    }
  }
  
  /**
   * Réinitialise la session
   */
  function resetSession() {
    exercises.value = []
    currentIndex.value = 0
    answers.value = []
    hintsUsed.value = []
    isSessionActive.value = false
    sessionStartTime.value = null
  }
  
  /**
   * Retourne les exercices ratés de la session
   */
  function getFailedExercises() {
    return exercises.value.filter((ex, index) => {
      const answer = answers.value[index]
      return answer && !answer.correct
    })
  }

    /**
   * Démarre une session de révision avec les exercices ratés
   */
  function startRetrySession(failedExercises) {
    exercises.value = failedExercises
    currentIndex.value = 0
    answers.value = []
    hintsUsed.value = []
    isSessionActive.value = true
    sessionStartTime.value = Date.now()
  }

  // ============================================
  // RETURN
  // ============================================
  
  return {
    // State
    exercises,
    currentIndex,
    answers,
    hintsUsed,
    isSessionActive,
    
    // Getters
    currentExercise,
    progress,
    isSessionComplete,
    currentHintsUsed,
    sessionResults,
    
    // Actions
    startSession,
    startRetrySession,
    submitAnswer,
    useHint,
    nextExercise,
    endSession,
    resetSession,
    getHistory,
    getFailedExercises
  }
})
```

tecfeeStore.js
```
// ============================================
// STORE TECFÉE - Gestion des sessions
// ============================================

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { tecfeeQuestions, getRandomQuestions, generateExamSession } from '@/data/tecfee/questions.js'

export const useTecfeeStore = defineStore('tecfee', () => {
  
  // ============================================
  // STATE
  // ============================================
  
  // Session en cours
  const isSessionActive = ref(false)
  const sessionMode = ref('practice') // 'practice' ou 'exam'
  const questions = ref([])
  const currentIndex = ref(0)
  const answers = ref([]) // { questionId, selectedAnswer, correct }
  
  // Timer pour mode examen
  const examStartTime = ref(null)
  const examDuration = 90 * 60 * 1000 // 90 minutes en ms
  
  // ============================================
  // GETTERS
  // ============================================
  
  // Question actuelle
  const currentQuestion = computed(() => {
    return questions.value[currentIndex.value] || null
  })
  
  // Numéro de question (1-indexed)
  const questionNumber = computed(() => currentIndex.value + 1)
  
  // Total de questions
  const totalQuestions = computed(() => questions.value.length)
  
  // Progression (0-100)
  const progress = computed(() => {
    if (totalQuestions.value === 0) return 0
    return Math.round((currentIndex.value / totalQuestions.value) * 100)
  })
  
  // Session terminée ?
  const isSessionComplete = computed(() => {
    return currentIndex.value >= questions.value.length && questions.value.length > 0
  })
  
  // Résultats
  const correctCount = computed(() => {
    return answers.value.filter(a => a.correct).length
  })
  
  const incorrectCount = computed(() => {
    return answers.value.filter(a => !a.correct).length
  })
  
  const score = computed(() => {
    if (answers.value.length === 0) return 0
    return Math.round((correctCount.value / answers.value.length) * 100)
  })
  
  // Seuil de réussite TECFÉE (70%)
  const isPassing = computed(() => score.value >= 70)
  
  // Résultats par catégorie
  const resultsByCategory = computed(() => {
    const categories = {}
    
    answers.value.forEach(answer => {
      const question = questions.value.find(q => q.id === answer.questionId)
      if (!question) return
      
      const cat = question.category
      if (!categories[cat]) {
        categories[cat] = { correct: 0, total: 0 }
      }
      categories[cat].total++
      if (answer.correct) categories[cat].correct++
    })
    
    // Calculer les pourcentages
    const labels = {
      'orthographe-grammaticale': 'Orthographe grammaticale',
      'syntaxe-ponctuation': 'Syntaxe et ponctuation',
      'orthographe-lexicale': 'Orthographe lexicale',
      'vocabulaire': 'Vocabulaire'
    }
    
    return Object.entries(categories).map(([id, data]) => ({
      id,
      name: labels[id] || id,
      correct: data.correct,
      total: data.total,
      percentage: Math.round((data.correct / data.total) * 100)
    })).sort((a, b) => a.percentage - b.percentage)
  })
  
  // Questions ratées pour révision
  const failedQuestions = computed(() => {
    return answers.value
      .filter(a => !a.correct)
      .map(a => questions.value.find(q => q.id === a.questionId))
      .filter(Boolean)
  })
  
  // ============================================
  // ACTIONS
  // ============================================
  
  /**
   * Démarrer une session de pratique
   */
  function startPracticeSession(selectedCategories, questionCount) {
    const selectedQuestions = getRandomQuestions(questionCount, selectedCategories)
    
    questions.value = selectedQuestions
    currentIndex.value = 0
    answers.value = []
    sessionMode.value = 'practice'
    isSessionActive.value = true
    examStartTime.value = null
  }
  
  /**
   * Démarrer une session d'examen
   */
  function startExamSession() {
    const examQuestions = generateExamSession()
    
    questions.value = examQuestions
    currentIndex.value = 0
    answers.value = []
    sessionMode.value = 'exam'
    isSessionActive.value = true
    examStartTime.value = Date.now()
  }
  
  /**
   * Démarrer une session de révision (questions ratées)
   */
  function startRetrySession(questionsToRetry) {
    questions.value = [...questionsToRetry].sort(() => Math.random() - 0.5)
    currentIndex.value = 0
    answers.value = []
    sessionMode.value = 'practice'
    isSessionActive.value = true
    examStartTime.value = null
  }
  
  /**
   * Soumettre une réponse
   */
  function submitAnswer(questionId, selectedAnswer, correct) {
    answers.value.push({
      questionId,
      selectedAnswer,
      correct
    })
  }
  
  /**
   * Passer à la question suivante
   */
  function nextQuestion() {
    if (currentIndex.value < questions.value.length) {
      currentIndex.value++
    }
  }
  
  /**
   * Terminer la session
   */
  function endSession() {
    isSessionActive.value = false
    questions.value = []
    currentIndex.value = 0
    answers.value = []
    examStartTime.value = null
  }
  
  /**
   * Temps restant en mode examen (ms)
   */
  function getTimeRemaining() {
    if (!examStartTime.value) return null
    const elapsed = Date.now() - examStartTime.value
    return Math.max(0, examDuration - elapsed)
  }
  
  /**
   * Vérifier si le temps est écoulé
   */
  function isTimeUp() {
    if (sessionMode.value !== 'exam') return false
    return getTimeRemaining() <= 0
  }
  
  // ============================================
  // RETURN
  // ============================================
  
  return {
    // State
    isSessionActive,
    sessionMode,
    questions,
    currentIndex,
    answers,
    examStartTime,
    
    // Getters
    currentQuestion,
    questionNumber,
    totalQuestions,
    progress,
    isSessionComplete,
    correctCount,
    incorrectCount,
    score,
    isPassing,
    resultsByCategory,
    failedQuestions,
    
    // Actions
    startPracticeSession,
    startExamSession,
    startRetrySession,
    submitAnswer,
    nextQuestion,
    endSession,
    getTimeRemaining,
    isTimeUp
  }
})
```

data/tecfee/questions.js 
```
export const tecfeeQuestions = [
  // ============================================
  // PARTIE A
  // 1. ORTHOGRAPHE GRAMMATICALE ET MORPHOLOGIE
  // Questions 1-21
  // ============================================
  
  // Question 1 - Adjectifs de couleur composés
  {
    id: 'og-001',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Des <u>paquets-cadeaux</u> ont été offerts aux invités lors du lancement de l'entreprise.", correct: false },
      { letter: 'b', text: "Une immense banderole <u>bleue lavande</u> ornait la devanture de la boutique.", correct: true },
      { letter: 'c', text: "Ce publicitaire utilise <u>toutes les stratégies possibles</u> pour convaincre les consommateurs.", correct: false },
      { letter: 'd', text: "Les <u>avant-projets</u> présentés par ce publicitaire sont prometteurs.", correct: false }
    ],
    explanation: "Les adjectifs de couleur de forme complexe (composés de 2 mots ou plus) sont invariables. On écrit « bleu lavande » sans accord.",
    rule: "Accord des adjectifs de couleur composés"
  },
  // Question 46 - Ourdir
  {
    id: 'voc-016',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « ourdir » ?",
    options: [
      { letter: 'a', text: "Coudre un tissu en forme d'ourlet.", correct: false },
      { letter: 'b', text: "Donner un ordre.", correct: false },
      { letter: 'c', text: "Organiser en secret, machiner, combiner.", correct: true },
      { letter: 'd', text: "Tasser, compacter des matériaux secs avant de les enfouir sous terre.", correct: false }
    ],
    explanation: "« Ourdir » signifie organiser secrètement, machiner, combiner. Par exemple, on peut ourdir un complot.",
    rule: "Vocabulaire : ourdir"
  },
// ... il y a 58 autres questions

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Récupère les questions par catégorie
 */
export function getQuestionsByCategory(categoryId) {
  return tecfeeQuestions.filter(q => q.category === categoryId)
}

/**
 * Récupère un nombre aléatoire de questions
 */
export function getRandomQuestions(count, categories = null) {
  let pool = [...tecfeeQuestions]
  
  // Filtrer par catégories si spécifié
  if (categories && categories.length > 0) {
    pool = pool.filter(q => categories.includes(q.category))
  }
  
  // Mélanger et prendre le nombre demandé
  const shuffled = pool.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Génère une session d'examen officielle (60 questions, répartition officielle)
 * Répartition : 26 ortho gram + 13 syntaxe + 4 ortho lex + 17 vocab
 */
export function generateExamSession() {
  const exam = []
  
  // Répartition officielle TECFÉE
  const distribution = [
    { category: 'orthographe-grammaticale', count: 26 },
    { category: 'syntaxe-ponctuation', count: 13 },
    { category: 'orthographe-lexicale', count: 4 },
    { category: 'vocabulaire', count: 17 }
  ]
  
  distribution.forEach(({ category, count }) => {
    const categoryQuestions = getQuestionsByCategory(category)
    const shuffled = categoryQuestions.sort(() => Math.random() - 0.5)
    exam.push(...shuffled.slice(0, Math.min(count, shuffled.length)))
  })
  
  // Mélanger l'ordre final
  return exam.sort(() => Math.random() - 0.5)
}

/**
 * Statistiques sur la banque de questions
 */
export function getQuestionStats() {
  const stats = {
    total: tecfeeQuestions.length,
    byCategory: {},
    byType: {}
  }
  
  tecfeeQuestions.forEach(q => {
    // Par catégorie
    if (!stats.byCategory[q.category]) {
      stats.byCategory[q.category] = 0
    }
    stats.byCategory[q.category]++
    
    // Par type
    if (!stats.byType[q.type]) {
      stats.byType[q.type] = 0
    }
    stats.byType[q.type]++
  })
  
  return stats
}
```

data/templates/accords-particuliers.js (exemple de template pour adptfr classique)
```
export const templates = [
  // ============================================
  // TOUT / TOUS / TOUTE / TOUTES
  // ============================================

  // --- TOUT adverbe (invariable devant adjectif commençant par voyelle/h muet) ---
  {
    id: 'acc-tout-001',
    type: 'accord',
    template: 'Elles sont {BLANK} étonnées.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'tout'
      }
    },

// ....

  {
    id: 'acc-tel-008',
    type: 'accord',
    template: 'Un {BLANK} homme est rare.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'tel'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Homme » est masculin singulier.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » s\'accorde avec le nom.',
      analysis: '« Homme » (m.s.) → un tel homme.'
    }
  }
]
```

ExerciseCard.vue :
```
<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'
import { validateFullSentence } from '@/utils/validation.js'

const emit = defineEmits(['answer-submitted'])

const sessionStore = useSessionStore()

const exercise = computed(() => sessionStore.currentExercise)

// Input utilisateur
const userInput = ref('')
const inputRef = ref(null)

// État des indices
const currentHintIndex = ref(0)
const showHints = ref(false)

// Réinitialiser quand l'exercice change
watch(exercise, () => {
  userInput.value = ''
  currentHintIndex.value = 0
  showHints.value = false
  nextTick(() => {
    inputRef.value?.focus()
  })
}, { immediate: true })

// Indices disponibles
const availableHints = computed(() => {
  if (!exercise.value) return []
  return exercise.value.hints.slice(0, currentHintIndex.value)
})

const hasMoreHints = computed(() => {
  if (!exercise.value) return false
  return currentHintIndex.value < exercise.value.hints.length
})

// Demander un indice
function requestHint() {
  if (!hasMoreHints.value) return
  
  currentHintIndex.value++
  showHints.value = true
  sessionStore.useHint()
}

// Soumettre la réponse
function submitAnswer() {
  if (!userInput.value.trim() || !exercise.value) return
  
  const result = validateFullSentence(
    userInput.value,
    exercise.value.sentenceComplete,
    exercise.value.answer
  )
  
  sessionStore.submitAnswer(userInput.value, result.correct, result.errors)
  
  emit('answer-submitted', {
    userInput: userInput.value,
    correct: result.correct,
    errors: result.errors,
    warnings: result.warnings,
    hasWarnings: result.hasWarnings
  })
}

// Soumettre avec Enter
function handleKeydown(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    submitAnswer()
  }
}
</script>

<template>
  <div v-if="exercise" class="exercise-card">
    <!-- Catégorie de l'exercice -->
    <div class="category-badge">
      {{ exercise.categoryName }}
    </div>
    
    <div class="exercise-prompt">
      <p class="instruction">Complétez et recopiez la phrase :</p>
      <p class="sentence">« {{ exercise.sentenceWithBlank }} »</p>
    </div>
    
    <div class="input-section">
      <textarea
        ref="inputRef"
        v-model="userInput"
        class="answer-input"
        placeholder="Tapez la phrase complète ici..."
        rows="3"
        @keydown="handleKeydown"
      ></textarea>
    </div>
    
    <div class="hints-section" v-if="showHints && availableHints.length > 0">
      <p class="hints-title">Indices :</p>
      <ul class="hints-list">
        <li v-for="(hint, index) in availableHints" :key="index">
          {{ hint.text }}
        </li>
      </ul>
    </div>
    
    <div class="actions">
      <button
        class="hint-button"
        :disabled="!hasMoreHints"
        @click="requestHint"
      >
        Indice ({{ currentHintIndex }}/{{ exercise.hints.length }})
      </button>
      
      <button
        class="submit-button"
        :disabled="!userInput.trim()"
        @click="submitAnswer"
      >
        Valider
      </button>
    </div>
  </div>
</template>

<style scoped>
.exercise-card {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  background-color: #f0f0f0;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.exercise-prompt {
  margin-bottom: 1.5rem;
}

.instruction {
  color: #666;
  margin-bottom: 0.5rem;
}

.sentence {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
}

.input-section {
  margin-bottom: 1rem;
}

.answer-input {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-family: inherit;
  border: 2px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.2s;
}

.answer-input:focus {
  outline: none;
  border-color: #007bff;
}

.hints-section {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff9e6;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
}

.hints-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #856404;
}

.hints-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #856404;
}

.hints-list li {
  margin-bottom: 0.25rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.hint-button {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #666;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.hint-button:hover:not(:disabled) {
  background-color: #e9ecef;
}

.hint-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-button {
  flex: 2;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: #218838;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
```

ExerciseScreen.vue :
```
<script setup>
import { ref, computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'
import SessionProgress from '@/components/SessionProgress.vue'
import ExerciseCard from '@/components/ExerciseCard.vue'
import FeedbackPanel from '@/components/FeedbackPanel.vue'
import HelpPanelLeft from '@/components/HelpPanelLeft.vue'
import HelpPanelRight from '@/components/HelpPanelRight.vue'

const emit = defineEmits(['session-complete', 'quit-session'])

const sessionStore = useSessionStore()

// État de l'affichage
const showFeedback = ref(false)
const lastAnswer = ref({
  userInput: '',
  correct: false,
  errors: [],
  warnings: [],
  hasWarnings: false
})

// Données pour les panneaux d'aide
const currentCategory = computed(() => sessionStore.currentExercise?.category || '')
const currentTense = computed(() => sessionStore.currentExercise?.conjugaisonInfo?.tense || null)
const currentHomophoneOptions = computed(() => sessionStore.currentExercise?.homophoneOptions || null)
const currentConfusionOptions = computed(() => sessionStore.currentExercise?.confusionOptions || null)

// Quand l'utilisateur soumet une réponse
function handleAnswerSubmitted(answerData) {
  lastAnswer.value = answerData
  showFeedback.value = true
}

// Passer à l'exercice suivant
function handleNextExercise() {
  showFeedback.value = false
  
  const hasNext = sessionStore.nextExercise()
  
  if (!hasNext || sessionStore.isSessionComplete) {
    emit('session-complete')
  }
}

// Quitter la session
function quitSession() {
    emit('quit-session')
}
</script>

<template>
  <div class="exercise-screen">
    <SessionProgress />
    
    <div class="exercise-layout">
      <!-- Panneau gauche : Définitions / Table -->
      <HelpPanelLeft
        :category="currentCategory"
        :tense="currentTense"
        :homophone-options="currentHomophoneOptions"
        :confusion-options="currentConfusionOptions"
      />
      
      <!-- Centre : Exercice -->
      <div class="exercise-center">
        <div v-if="!showFeedback">
          <ExerciseCard @answer-submitted="handleAnswerSubmitted" />
        </div>
        
        <div v-else>
          <FeedbackPanel
            :user-input="lastAnswer.userInput"
            :correct="lastAnswer.correct"
            :errors="lastAnswer.errors"
            :warnings="lastAnswer.warnings"
            :has-warnings="lastAnswer.hasWarnings"
            @next-exercise="handleNextExercise"
          />
        </div>
      </div>
      
      <!-- Panneau droite : Règles / Description -->
      <HelpPanelRight
        :category="currentCategory"
        :tense="currentTense"
        :homophone-options="currentHomophoneOptions"
        :confusion-options="currentConfusionOptions"
      />
    </div>
    
    <button class="quit-button" @click="quitSession">
      Quitter la session
    </button>
  </div>
</template>

<style scoped>
.exercise-screen {
  max-width: 1000px;
  margin: 0 auto;
}

.exercise-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
}

.exercise-center {
  flex: 0 0 600px;
  max-width: 600px;
}

.quit-button {
  display: block;
  margin: 2rem auto 0;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #666;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s, color 0.2s;
}

.quit-button:hover {
  color: #525252;
  border-color: #c2c2c2;
  background-color: #eaeced;
}

/* Responsive */
@media (max-width: 950px) {
  .exercise-layout {
    flex-direction: column;
    align-items: center;
  }
  
  .exercise-center {
    flex: none;
    width: 100%;
    max-width: 600px;
    order: 1;
  }
  
  .exercise-layout > :first-child {
    order: 2;
  }
  
  .exercise-layout > :last-child {
    order: 3;
  }
}

/* Responsive */
@media (min-width: 768px) and (max-width: 1024px) {
  .exercise-layout {
    flex-direction: column;
    align-items: center;
  }
  
  .exercise-center {
    flex: none;
    width: 100%;
    max-width: 600px;
    order: 1;
  }
  
  .exercise-layout > :first-child {
    order: 2;
  }
  
  .exercise-layout > :last-child {
    order: 3;
  }
}
</style>
```

FeedbackPanel.vue :
```
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'

const props = defineProps({
  userInput: {
    type: String,
    required: true
  },
  correct: {
    type: Boolean,
    required: true
  },
  errors: {
    type: Array,
    default: () => []
  },
  warnings: {
    type: Array,
    default: () => []
  },
  hasWarnings: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['next-exercise'])

const sessionStore = useSessionStore()

const exercise = computed(() => sessionStore.currentExercise)

// Empêcher l'activation immédiate de la touche Entrée
const canProceed = ref(false)

// Formater les avertissements pour affichage
const warningMessages = computed(() => {
  if (!props.warnings || props.warnings.length === 0) return []
  
  return props.warnings
    .filter(w => w.userWord && w.expectedWord) // Filtrer les warnings incomplets
    .map(w => {
      return `« ${w.userWord} » devrait être « ${w.expectedWord} »`
    })
})

function handleNext() {
  emit('next-exercise')
}

// Écouter la touche Entrée pour continuer (seulement après le délai)
function handleKeydown(event) {
  if (event.key === 'Enter' && canProceed.value) {
    event.preventDefault()
    handleNext()
  }
}

let delayTimeout = null

onMounted(() => {
  // Attendre 300ms avant d'activer la touche Entrée
  // pour éviter de capter l'Entrée de la validation
  delayTimeout = setTimeout(() => {
    canProceed.value = true
  }, 300)
  
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (delayTimeout) {
    clearTimeout(delayTimeout)
  }
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="feedback-panel">
    <!-- Catégorie de l'exercice -->
    <div class="category-badge">
      {{ exercise.categoryName }}
    </div>
    
    <!-- Résultat -->
    <div class="result" :class="correct ? 'is-correct' : 'is-incorrect'">
      <span class="result-icon">{{ correct ? '✓' : '✗' }}</span>
      <span class="result-text">{{ correct ? 'Correct !' : 'Incorrect' }}</span>
    </div>
    
    <!-- Avertissements (fautes mineures hors du mot cible) -->
    <div v-if="correct && hasWarnings" class="warnings">
      <p class="warnings-title">⚠️ Attention, petite(s) faute(s) ailleurs dans la phrase :</p>
      <ul class="warnings-list">
        <li v-for="(msg, index) in warningMessages" :key="index">
          {{ msg }}
        </li>
      </ul>
    </div>
    
    <!-- Comparaison des réponses -->
    <div class="comparison">
      <div class="comparison-item">
        <p class="comparison-label">Votre réponse :</p>
        <p class="comparison-text user-answer" :class="{ 'has-errors': !correct }">
          « {{ userInput }} »
        </p>
      </div>
      
      <div v-if="!correct" class="comparison-item">
        <p class="comparison-label">Réponse attendue :</p>
        <p class="comparison-text correct-answer">
          « {{ exercise.sentenceComplete }} »
        </p>
      </div>
    </div>
    
    <!-- Mot clé -->
    <div class="answer-highlight">
      <span class="answer-label">Mot à compléter :</span>
      <span class="answer-word">{{ exercise.answer }}</span>
      <span v-if="exercise.verbInfinitive" class="answer-infinitive">
        ({{ exercise.verbInfinitive }})
      </span>
    </div>
    
    <!-- Explication -->
    <div class="explanation">
      <div class="explanation-rule">
        <p class="explanation-title">Règle :</p>
        <p>{{ exercise.explanation.rule }}</p>
      </div>
      
      <div class="explanation-analysis">
        <p class="explanation-title">Analyse :</p>
        <p>{{ exercise.explanation.analysis }}</p>
      </div>
    </div>
    
    <!-- Bouton suivant -->
    <button class="next-button" @click="handleNext">
      {{ sessionStore.isSessionComplete ? 'Voir le récapitulatif' : 'Exercice suivant →' }}
      <span class="next-hint"></span>
    </button>
  </div>
</template>

<style scoped>
.feedback-panel {
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  background-color: #f0f0f0;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.result {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.result.is-correct {
  background-color: #d4edda;
  color: #155724;
}

.result.is-incorrect {
  background-color: #f8d7da;
  color: #721c24;
}

.result-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.result-text {
  font-size: 1.25rem;
  font-weight: 600;
}

.warnings {
  padding: 1rem;
  background-color: #fff3cd;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
  margin-bottom: 1.5rem;
}

.warnings-title {
  font-weight: 600;
  color: #856404;
  margin-bottom: 0.5rem;
}

.warnings-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #856404;
}

.warnings-list li {
  margin-bottom: 0.25rem;
}

.comparison {
  margin-bottom: 1.5rem;
}

.comparison-item {
  margin-bottom: 1rem;
}

.comparison-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.comparison-text {
  font-size: 1.1rem;
  line-height: 1.5;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #f8f9fa;
}

.user-answer.has-errors {
  background-color: #fff3f3;
  border-left: 3px solid #dc3545;
}

.correct-answer {
  background-color: #f0fff0;
  border-left: 3px solid #28a745;
}

.answer-highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background-color: #e7f1ff;
  border-radius: 4px;
}

.answer-label {
  color: #666;
}

.answer-word {
  font-weight: 600;
  color: #007bff;
  font-size: 1.1rem;
}

.answer-infinitive {
  color: #666;
  font-size: 0.95rem;
}

.explanation {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.explanation-rule {
  margin-bottom: 1rem;
}

.explanation-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
}

.explanation-analysis {
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}

.next-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.next-button:hover {
  background-color: #0056b3;
}

.next-hint {
  font-size: 0.85rem;
  font-weight: 400;
  opacity: 0.8;
}
</style>
```

HomeScreen.vue :
```
<script setup>
import { ref, computed } from 'vue'
import { useExerciseStore } from '@/stores/exerciseStore.js'

const emit = defineEmits(['start-session', 'change-mode'])

const exerciseStore = useExerciseStore()

// Catégories avec leur disponibilité
const categories = computed(() => exerciseStore.getCategoriesWithAvailability())

// Catégories sélectionnées par l'utilisateur
const selectedCategories = ref(
  categories.value
    .filter(c => c.available && c.enabled)
    .map(c => c.id)
)

// Nombre d'exercices
const exerciseCount = ref(10)
const exerciseCountOptions = [5, 10, 15, 20]

// Vérifie si on peut démarrer
const canStart = computed(() => {
  return selectedCategories.value.length > 0
})

// Toggle une catégorie
function toggleCategory(categoryId) {
  const index = selectedCategories.value.indexOf(categoryId)
  if (index === -1) {
    selectedCategories.value.push(categoryId)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

// Démarrer la session
function startSession() {
  if (!canStart.value) return
  
  const exercises = exerciseStore.generateSession(
    selectedCategories.value,
    exerciseCount.value
  )
  
  emit('start-session', exercises)
}
</script>

<template>
  <div class="home-screen">
    <h1>adptfr</h1>
    <p class="subtitle">Perfectionnez votre français écrit</p>
    
    <section class="categories-section">
      <h2>Catégories</h2>
      <p class="section-description">Sélectionnez les types d'exercices à pratiquer :</p>
      
      <div class="categories-list">
        <label
          v-for="category in categories"
          :key="category.id"
          class="category-item"
          :class="{
            'is-selected': selectedCategories.includes(category.id),
            'is-disabled': !category.available
          }"
        >
          <input
            type="checkbox"
            :checked="selectedCategories.includes(category.id)"
            :disabled="!category.available"
            @change="toggleCategory(category.id)"
          />
          <span class="category-info">
            <span class="category-name">{{ category.name }}</span>
            <span class="category-description">{{ category.description }}</span>
            <span v-if="!category.available" class="category-unavailable">
              (bientôt disponible)
            </span>
          </span>
        </label>
      </div>
    </section>
    
    <section class="settings-section">
      <h2>Paramètres</h2>
      
      <div class="setting-item">
        <label for="exercise-count">Nombre d'exercices :</label>
        <select id="exercise-count" v-model="exerciseCount">
          <option v-for="count in exerciseCountOptions" :key="count" :value="count">
            {{ count }}
          </option>
        </select>
      </div>
    </section>
    
    <button
      class="start-button"
      :disabled="!canStart"
      @click="startSession"
    >
      Commencer la session
    </button>
    
    <p v-if="!canStart" class="warning">
      Veuillez sélectionner au moins une catégorie.
    </p>
  </div>
</template>

<style scoped>
.home-screen {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 0.25rem;
  font-size: 3em;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.categories-section {
  margin-bottom: 2rem;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}

.category-item:hover:not(.is-disabled) {
  border-color: #999;
}

.category-item.is-selected {
  border-color: #007bff;
  background-color: #f0f7ff;
}

.category-item.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.category-item input[type="checkbox"] {
  margin-top: 0.2rem;
}

.category-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category-name {
  font-weight: 500;
}

.category-description {
  font-size: 0.85rem;
  color: #666;
}

.category-unavailable {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}



.settings-section {
  margin-bottom: 2rem;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.setting-item label {
  font-weight: 500;
}

.setting-item select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.start-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
}

.start-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.start-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.warning {
  margin-top: 1rem;
  color: #999;
  text-align: center;
  font-size: 0.9rem;

}
</style>
```

HomeScreenTecfee.vue :
```
<script setup>
  import { ref, computed } from 'vue'
  import { useTecfeeStore } from '@/stores/tecfeeStore.js'
  
  const emit = defineEmits(['start-session', 'change-mode'])
  
  const tecfeeStore = useTecfeeStore()
  
  // Catégories TECFÉE
  const tecfeeCategories = ref([
    {
      id: 'orthographe-grammaticale',
      name: 'Orthographe grammaticale',
      description: 'Accords, conjugaison, homophones, morphologie',
      questionCount: 26,
      available: true,
      enabled: true
    },
    {
      id: 'syntaxe-ponctuation',
      name: 'Syntaxe et ponctuation',
      description: 'Construction des phrases, emploi des pronoms, prépositions, modes et temps',
      questionCount: 13,
      available: true,
      enabled: true
    },
    {
      id: 'orthographe-lexicale',
      name: 'Orthographe lexicale',
      description: 'Orthographe des mots, consonnes doubles, accents',
      questionCount: 4,
      available: true,
      enabled: true
    },
    {
      id: 'vocabulaire',
      name: 'Vocabulaire',
      description: 'Définitions, expressions, préfixes/suffixes, anglicismes, impropriétés',
      questionCount: 17,
      available: true,
      enabled: true
    }
  ])
  
  // Catégories sélectionnées
  const selectedCategories = ref(
    tecfeeCategories.value
      .filter(c => c.available && c.enabled)
      .map(c => c.id)
  )
  
  // Mode d'exercice
  const exerciseMode = ref('practice') // 'practice' ou 'exam'
  
  // Nombre de questions en mode pratique
  const questionCount = ref(20)
  const questionCountOptions = [10, 20, 30, 40, 60]
  
  // Total des questions sélectionnées
  const totalSelectedQuestions = computed(() => {
    return tecfeeCategories.value
      .filter(c => selectedCategories.value.includes(c.id))
      .reduce((sum, c) => sum + c.questionCount, 0)
  })
  
  // Vérifie si on peut démarrer
  const canStart = computed(() => {
    return selectedCategories.value.length > 0
  })
  
  // Toggle une catégorie
  function toggleCategory(categoryId) {
    const index = selectedCategories.value.indexOf(categoryId)
    if (index === -1) {
      selectedCategories.value.push(categoryId)
    } else {
      selectedCategories.value.splice(index, 1)
    }
  }
  
  // Démarrer la session
  function startSession() {
    if (!canStart.value) return
    
    if (exerciseMode.value === 'exam') {
      tecfeeStore.startExamSession()
    } else {
      tecfeeStore.startPracticeSession(selectedCategories.value, questionCount.value)
    }
    
    emit('start-session', exerciseMode.value)
  }
  </script>
  
  <template>
    <div class="home-screen-tecfee">
      <div class="header">
        <h1>adptfr : TECFÉE</h1>
      </div>
      <p class="subtitle">Section dédiée aux étudiants universitaires et futurs enseignants.<br><br>Préparation au Test de certification en français écrit pour l'enseignement.<br><br>Le test comprend <strong>60 questions</strong> à choix multiples avec un seuil de réussite de <strong>70%</strong>.</p>
      
      <!-- Info TECFÉE -->
      <div class="tecfee-info">
        <p>En savoir plus sur le TECFÉE : <a href="https://cefranc.csspi.ca/tecfee.php" target="_blank">cefranc.csspi.ca/tecfee</a></p>
      </div>
      
      <!-- Mode d'exercice -->
      <section class="mode-section">
        <h2>Mode</h2>
        <div class="mode-options">
          <label class="mode-option" :class="{ 'is-selected': exerciseMode === 'practice' }">
            <input type="radio" v-model="exerciseMode" value="practice" />
            <span class="mode-info">
              <span class="mode-name">Pratique libre</span>
              <span class="mode-description">Choisissez les catégories et le nombre de questions</span>
            </span>
          </label>
          <label class="mode-option" :class="{ 'is-selected': exerciseMode === 'exam' }">
            <input type="radio" v-model="exerciseMode" value="exam" />
            <span class="mode-info">
              <span class="mode-name">Simulation d'examen</span>
              <span class="mode-description">60 questions, 90 minutes, conditions réelles</span>
            </span>
          </label>
        </div>
      </section>
      
      <!-- Catégories (seulement en mode pratique) -->
      <section v-if="exerciseMode === 'practice'" class="categories-section">
        <h2>Catégories</h2>
        <p class="section-description">Répartition officielle du TECFÉE :</p>
        
        <div class="categories-list">
          <label
            v-for="category in tecfeeCategories"
            :key="category.id"
            class="category-item"
            :class="{
              'is-selected': selectedCategories.includes(category.id),
              'is-disabled': !category.available
            }"
          >
            <input
              type="checkbox"
              :checked="selectedCategories.includes(category.id)"
              :disabled="!category.available"
              @change="toggleCategory(category.id)"
            />
            <span class="category-info">
              <span class="category-header">
                <span class="category-name">{{ category.name }}</span>
                <span class="category-count">{{ category.questionCount }} questions</span>
              </span>
              <span class="category-description">{{ category.description }}</span>
            </span>
          </label>
        </div>
      </section>
      
      <!-- Paramètres (seulement en mode pratique) -->
      <section v-if="exerciseMode === 'practice'" class="settings-section">
        <h2>Paramètres</h2>
        <div class="setting-item">
          <label for="question-count">Nombre de questions :</label>
          <select id="question-count" v-model="questionCount">
            <option v-for="count in questionCountOptions" :key="count" :value="count">
              {{ count }}
            </option>
          </select>
        </div>
      </section>
      
      <!-- Résumé examen (seulement en mode examen) -->
      <section v-if="exerciseMode === 'exam'" class="exam-summary">
        <h2>Simulation d'examen</h2>
        <div class="exam-details">
          <div class="exam-detail">
            <span class="detail-value">60</span>
            <span class="detail-label">Questions</span>
          </div>
          <div class="exam-detail">
            <span class="detail-value">90</span>
            <span class="detail-label">Minutes</span>
          </div>
          <div class="exam-detail">
            <span class="detail-value">70%</span>
            <span class="detail-label">Seuil</span>
          </div>
        </div>
        <p class="exam-note">Les questions seront réparties selon la pondération officielle du TECFÉE.</p>
      </section>
      
      <button
        class="start-button"
        :disabled="!canStart"
        @click="startSession"
      >
        {{ exerciseMode === 'exam' ? 'Commencer l\'examen' : 'Commencer la pratique' }}
      </button>
    </div>
  </template>
  
  <style scoped>
  .home-screen-tecfee {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .header {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }
  
  h1 {
    font-size: 3em;
    margin: 0;
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
  
  .tecfee-info {
    background-color: #f8f5fc;
    border-left: 4px solid #7c3aed;
    padding: 1rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .tecfee-info p {
    margin: 0;
  }
  
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .section-description {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  /* Mode selection */
  .mode-section {
    margin-bottom: 2rem;
  }
  
  .mode-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .mode-option {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
  }
  
  .mode-option:hover {
    border-color: #999;
  }
  
  .mode-option.is-selected {
    border-color: #7c3aed;
    background-color: #f5f0ff;
  }
  
  .mode-option input[type="radio"] {
    margin-top: 0.2rem;
    accent-color: #7c3aed;
  }
  
  .mode-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .mode-name {
    font-weight: 500;
  }
  
  .mode-description {
    font-size: 0.85rem;
    color: #666;
  }
  
  /* Categories */
  .categories-section {
    margin-bottom: 2rem;
  }
  
  .categories-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .category-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
  }
  
  .category-item:hover:not(.is-disabled) {
    border-color: #999;
  }
  
  .category-item.is-selected {
    border-color: #7c3aed;
    background-color: #f5f0ff;
  }
  
  .category-item.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .category-item input[type="checkbox"] {
    margin-top: 0.2rem;
    accent-color: #7c3aed;
  }
  
  .category-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }
  
  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .category-name {
    font-weight: 500;
  }
  
  .category-count {
    font-size: 0.8rem;
    color: #7c3aed;
    background-color: #ede9fe;
    padding: 0.15rem 0.5rem;
    border-radius: 50px;
  }
  
  .category-description {
    font-size: 0.85rem;
    color: #666;
  }
  
  /* Settings */
  .settings-section {
    margin-bottom: 2rem;
  }
  
  .setting-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .setting-item label {
    font-weight: 500;
  }
  
  .setting-item select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
  }
  
  /* Exam summary */
  .exam-summary {
    margin-bottom: 2rem;
  }
  
  .exam-details {
    display: flex;
    justify-content: space-around;
    padding: 1.5rem;
    background-color: #f8f5fc;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .exam-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  
  .detail-value {
    font-size: 2rem;
    font-weight: 700;
    color: #7c3aed;
  }
  
  .detail-label {
    font-size: 0.85rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .exam-note {
    font-size: 0.85rem;
    color: #666;
    text-align: center;
    margin: 0;
  }
  
  /* Start button */
  .start-button {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background-color: #7c3aed;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: inherit;
  }
  
  .start-button:hover:not(:disabled) {
    background-color: #6d28d9;
  }
  
  .start-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  a {
    color: #7c3aed;
    transition: color 0.2s;
  }
  
  a:visited {
    color: #6d28d9;
  }
  
  a:hover {
    color: #5b21b6;
  }
  </style>
```

ModeIndicator.vue
```
<script setup>
defineProps({
  currentMode: {
    type: String,
    default: 'classic' // 'classic' ou 'tecfee'
  }
})

const emit = defineEmits(['change-mode'])
</script>

<template>
  <div class="mode-indicator">
    <span 
      class="dot" 
      :class="{ active: currentMode === 'classic' }"
      @click="emit('change-mode', 'classic')"
      title="Mode classique"
    ></span>
    <span 
      class="dot" 
      :class="{ active: currentMode === 'tecfee' }"
      @click="emit('change-mode', 'tecfee')"
      title="Mode TECFÉE"
    ></span>
  </div>
</template>

<style scoped>
.mode-indicator {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.dot:hover {
  transform: scale(1.2);
}

.dot.active {
  background-color: #007bff;
}
</style>
```

ModeNavArrow.vue 
```
<script setup>
defineProps({
  direction: {
    type: String,
    default: 'right' // 'left' ou 'right'
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button 
    class="mode-nav-arrow" 
    :class="direction"
    @click="emit('click')"
    :title="label"
  >
    <span class="arrow-icon">
      <svg v-if="direction === 'right'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </span>
  </button>
</template>

<style scoped>
.mode-nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.mode-nav-arrow:hover {
  color: #007bff;
  border-color: #007bff;
  background-color: #f0f7ff;
}

.mode-nav-arrow.left {
  left: -60px;
}

.mode-nav-arrow.right {
  right: -60px;
}

.arrow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.mode-nav-arrow.right .arrow-label {
  transform: rotate(0deg);
}
</style>
```

TecfeeExerciseCard.vue :
```
<script setup>
  import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
  
  const props = defineProps({
    question: {
      type: Object,
      required: true
    },
    questionNumber: {
      type: Number,
      default: 1
    },
    totalQuestions: {
      type: Number,
      default: 1
    }
  })
  
  const emit = defineEmits(['answer-submitted'])
  
  // Réponse sélectionnée
  const selectedAnswer = ref(null)
  
  // Réinitialiser quand la question change
  watch(() => props.question.id, () => {
    selectedAnswer.value = null
  })
  
  // Vérifie si une réponse est sélectionnée
  const canSubmit = computed(() => selectedAnswer.value !== null)
  
  // Catégorie formatée
  const categoryLabel = computed(() => {
    const labels = {
      'orthographe-grammaticale': 'Orthographe grammaticale',
      'syntaxe-ponctuation': 'Syntaxe et ponctuation',
      'orthographe-lexicale': 'Orthographe lexicale',
      'vocabulaire': 'Vocabulaire'
    }
    return labels[props.question.category] || props.question.category
  })
  
  // Sélectionner une réponse
  function selectAnswer(letter) {
    selectedAnswer.value = letter
  }
  
  // Soumettre la réponse
  function submitAnswer() {
    if (!canSubmit.value) return
    
    const selectedOption = props.question.options.find(o => o.letter === selectedAnswer.value)
    const isCorrect = selectedOption?.correct || false
    
    emit('answer-submitted', {
      questionId: props.question.id,
      selectedAnswer: selectedAnswer.value,
      correct: isCorrect,
      correctAnswer: props.question.options.find(o => o.correct)?.letter
    })
  }
  
  // ============================================
  // NAVIGATION CLAVIER
  // ============================================
  
  function handleKeydown(event) {
    // Ignorer si on est dans un input/textarea
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      return
    }
    
    // Touche Entrée pour soumettre
    if (event.key === 'Enter' && canSubmit.value) {
      event.preventDefault()
      submitAnswer()
    }
    
    // Touches a, b, c, d pour sélectionner
    const key = event.key.toLowerCase()
    if (['a', 'b', 'c', 'd'].includes(key)) {
      const option = props.question.options.find(o => o.letter === key)
      if (option) {
        event.preventDefault()
        selectAnswer(key)
      }
    }
  }
  
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
  </script>
  
  <template>
    <div class="tecfee-exercise-card">
      <!-- En-tête -->
      <div class="card-header">
        <span class="category-badge">{{ categoryLabel }}</span>
        <span class="question-counter">Question {{ questionNumber }}/{{ totalQuestions }}</span>
      </div>
      
      <!-- Instruction -->
      <p class="instruction">{{ question.instruction }}</p>
      
      <!-- Phrase de référence (pour les justifications) -->
      <div v-if="question.questionSentence" class="question-sentence">
        <span v-html="question.questionSentence"></span>
      </div>
      
      <!-- Options -->
      <div class="options-list">
        <div
          v-for="option in question.options"
          :key="option.letter"
          class="option-item"
          :class="{ 'is-selected': selectedAnswer === option.letter }"
          @click="selectAnswer(option.letter)"
        >
          <span class="option-letter">{{ option.letter }})</span>
          <span class="option-text" v-html="option.text"></span>
        </div>
      </div>
      
      <!-- Bouton soumettre -->
      <button
        class="submit-button"
        :disabled="!canSubmit"
        @click="submitAnswer"
      >
        Valider ma réponse
      </button>
    </div>
  </template>
  
  <style scoped>
  .tecfee-exercise-card {
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  
  .category-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #7c3aed;
    background-color: #ede9fe;
    border-radius: 50px;
  }
  
  .question-counter {
    font-size: 0.85rem;
    color: #666;
  }
  
  .instruction {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
  
  .question-sentence {
    padding: 1rem;
    background-color: #f8f5fc;
    border-left: 4px solid #7c3aed;
    border-radius: 4px;
    margin-bottom: 1.25rem;
    font-size: 1.05rem;
    line-height: 1.6;
  }
  
  .question-sentence :deep(u) {
    text-decoration: underline;
    text-decoration-color: #7c3aed;
    text-underline-offset: 3px;
  }
  
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .option-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border: 2px solid #e5e5e5;
    border-radius: 6px;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
  }
  
  .option-item:hover {
    border-color: #c4b5fd;
    background-color: #faf5ff;
  }
  
  .option-item.is-selected {
    border-color: #7c3aed;
    background-color: #f5f0ff;
  }
  
  .option-letter {
    font-weight: 600;
    color: #7c3aed;
    min-width: 1.5rem;
  }
  
  .option-text {
    flex: 1;
    line-height: 1.5;
  }

  
  .submit-button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #7c3aed;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: inherit;
  }
  
  .submit-button:hover:not(:disabled) {
    background-color: #6d28d9;
  }
  
  .submit-button:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
  
  /* Indication clavier */
  .keyboard-hint {
    text-align: center;
    font-size: 0.8rem;
    color: #999;
    margin: 0.75rem 0 0 0;
  }
  
  .keyboard-hint kbd {
    display: inline-block;
    padding: 0.15rem 0.4rem;
    font-family: inherit;
    font-size: 0.75rem;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 3px;
  }
  </style>
```

SessionSummary.vue :
<script setup>
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'

const emit = defineEmits(['new-session', 'retry-failed'])

const sessionStore = useSessionStore()

const results = computed(() => sessionStore.sessionResults)

const scorePercentage = computed(() => {
  if (results.value.total === 0) return 0
  return Math.round((results.value.correct / results.value.total) * 100)
})

const scoreClass = computed(() => {
  if (scorePercentage.value >= 80) return 'score-excellent'
  if (scorePercentage.value >= 60) return 'score-good'
  if (scorePercentage.value >= 40) return 'score-average'
  return 'score-poor'
})

const formattedDuration = computed(() => {
  const seconds = results.value.duration
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins === 0) return `${secs}s`
  return `${mins}min ${secs}s`
})

const categoryResults = computed(() => {
  return Object.values(results.value.byCategory)
})

// Catégories triées par difficulté (plus faible pourcentage = plus difficile)
const categoriesByDifficulty = computed(() => {
  const cats = Object.values(results.value.byCategory)
  
  // Calculer le pourcentage pour chaque catégorie
  const withPercentage = cats.map(cat => ({
    ...cat,
    percentage: cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 100
  }))
  
  // Trier par pourcentage croissant (plus difficile en premier)
  return withPercentage.sort((a, b) => a.percentage - b.percentage)
})

// Catégories où l'utilisateur a eu des difficultés (< 70%)
const difficultCategories = computed(() => {
  return categoriesByDifficulty.value.filter(cat => cat.percentage < 70)
})

// Catégories maîtrisées (>= 70%)
const masteredCategories = computed(() => {
  return categoriesByDifficulty.value.filter(cat => cat.percentage >= 70)
})

const failedExercises = computed(() => sessionStore.getFailedExercises())

function startNewSession() {
  sessionStore.endSession()
  emit('new-session')
}

function retryFailed() {
  emit('retry-failed', failedExercises.value)
}

function getDifficultyClass(percentage) {
  if (percentage >= 80) return 'difficulty-easy'
  if (percentage >= 60) return 'difficulty-medium'
  if (percentage >= 40) return 'difficulty-hard'
  return 'difficulty-very-hard'
}

function getDifficultyIcon(percentage) {
  if (percentage >= 80) return '✓'
  if (percentage >= 60) return '~'
  if (percentage >= 40) return '!'
  return '!!'
}
</script>

<template>
  <div class="session-summary">
    <h2>Session terminée !</h2>
    
    <!-- Score principal -->
    <div class="score-section" :class="scoreClass">
      <div class="score-circle">
        <span class="score-value">{{ scorePercentage }}%</span>
      </div>
      <p class="score-detail">
        {{ results.correct }} / {{ results.total }} correct{{ results.correct > 1 ? 's' : '' }}
      </p>
    </div>
    
    <!-- Statistiques -->
    <div class="stats-section">
      <div class="stat-item">
        <span class="stat-label">Temps</span>
        <span class="stat-value">{{ formattedDuration }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Indices utilisés</span>
        <span class="stat-value">{{ results.totalHintsUsed }}</span>
      </div>
    </div>
    
    <!-- Points à améliorer -->
    <div v-if="difficultCategories.length > 0" class="difficulty-section">
      <h3>- À réviser</h3>
      <div class="category-list">
        <div
          v-for="cat in difficultCategories"
          :key="cat.id"
          class="category-item"
          :class="getDifficultyClass(cat.percentage)"
        >
          <div class="category-info">
            <span class="difficulty-icon">{{ getDifficultyIcon(cat.percentage) }}</span>
            <span class="category-name">{{ cat.name }}</span>
          </div>
          <div class="category-stats">
            <span class="category-score">{{ cat.correct }}/{{ cat.total }}</span>
            <span class="category-percentage">{{ cat.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Points maîtrisés -->
    <div v-if="masteredCategories.length > 0" class="mastered-section">
      <h3>- Maîtrisé{{ masteredCategories.length > 1 ? 's' : '' }}</h3>
      <div class="category-list compact">
        <div
          v-for="cat in masteredCategories"
          :key="cat.id"
          class="category-item mastered"
        >
          <span class="category-name">{{ cat.name }}</span>
          <span class="category-percentage">{{ cat.percentage }}%</span>
        </div>
      </div>
    </div>
    
    <!-- Message d'encouragement -->
    <div class="encouragement">
      <p v-if="scorePercentage >= 80">
        🎉 Excellent travail ! Tu maîtrises bien ces notions.
      </p>
      <p v-else-if="scorePercentage >= 60">
        👍 Bon travail ! Continue à t'entraîner sur les points à réviser.
      </p>
      <p v-else-if="scorePercentage >= 40">
        💪 C'est un bon début ! Revois les catégories difficiles et réessaie.
      </p>
      <p v-else>
        📖 Ces notions demandent plus de pratique. N'hésite pas à utiliser les indices !
      </p>
    </div>
    
    <!-- Actions -->
    <div class="actions">
      <button class="action-button primary" @click="startNewSession">
        Retour au menu
      </button>
      <button
        v-if="failedExercises.length > 0"
        class="action-button secondary"
        @click="retryFailed"
      >
        Retravailler les erreurs ({{ failedExercises.length }})
      </button>
    </div>
  </div>
</template>

<style scoped>
.session-summary {
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #333;
}

.score-section {
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.score-section.score-excellent {
  background-color: #d4edda;
}

.score-section.score-good {
  background-color: #d1ecf1;
}

.score-section.score-average {
  background-color: #fff3cd;
}

.score-section.score-poor {
  background-color: #f8d7da;
}

.score-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.score-value {
  font-size: 1.75rem;
  font-weight: bold;
}

.score-excellent .score-value { color: #155724; }
.score-good .score-value { color: #0c5460; }
.score-average .score-value { color: #856404; }
.score-poor .score-value { color: #721c24; }

.score-detail {
  font-size: 1.1rem;
  margin: 0;
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Sections de difficulté */
.difficulty-section {
  margin-bottom: 1.5rem;
}

.difficulty-section h3 {
  font-weight: 400;
}

.mastered-section {
  margin-bottom: 1.5rem;
}

.mastered-section h3 {
  font-weight: 400;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-list.compact {
  gap: 0.35rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  border-left: 4px solid transparent;
}

.category-item.difficulty-very-hard {
  background-color: #f8d7da;
  border-left-color: #dc3545;
}

.category-item.difficulty-hard {
  background-color: #fff3cd;
  border-left-color: #ffc107;
}

.category-item.difficulty-medium {
  background-color: #d1ecf1;
  border-left-color: #17a2b8;
}

.category-item.difficulty-easy,
.category-item.mastered {
  background-color: #d4edda;
  border-left-color: #28a745;
}

.category-item.mastered {
  padding: 0.5rem 0.75rem;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.difficulty-icon {
  font-weight: bold;
  width: 1.5rem;
  text-align: center;
}

.difficulty-very-hard .difficulty-icon {
  color: #dc3545;
}

.difficulty-hard .difficulty-icon {
  color: #856404;
}

.difficulty-medium .difficulty-icon {
  color: #0c5460;
}

.category-name {
  font-weight: 500;
}

.category-stats {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-score {
  color: #666;
  font-size: 0.9rem;
}

.category-percentage {
  font-weight: 600;
  min-width: 3rem;
  text-align: right;
}

.difficulty-very-hard .category-percentage {
  color: #dc3545;
}

.difficulty-hard .category-percentage {
  color: #856404;
}

.difficulty-medium .category-percentage {
  color: #0c5460;
}

.difficulty-easy .category-percentage,
.mastered .category-percentage {
  color: #155724;
}

/* Message d'encouragement */
.encouragement {
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.encouragement p {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-button.primary {
  color: white;
  background-color: #007bff;
}

.action-button.primary:hover {
  background-color: #0056b3;
}

.action-button.secondary {
  color: #333;
  background-color: #e9ecef;
}

.action-button.secondary:hover {
  background-color: #dde0e3;
}
</style>
```

TecfeeExerciseScreen.vue 
```
<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { useTecfeeStore } from '@/stores/tecfeeStore.js'
  import TecfeeExerciseCard from '@/components/TecfeeExerciseCard.vue'
  import TecfeeFeedbackPanel from '@/components/TecfeeFeedbackPanel.vue'
  import TecfeeTimer from '@/components/TecfeeTimer.vue'
  
  const emit = defineEmits(['session-complete', 'quit-session'])
  
  const tecfeeStore = useTecfeeStore()
  
  // État de l'écran : 'question' ou 'feedback'
  const screenState = ref('question')
  
  // Dernière réponse soumise
  const lastAnswer = ref(null)
  
  // Référence au timer
  const timerRef = ref(null)
  
  // ============================================
  // COMPUTED
  // ============================================
  
  const currentQuestion = computed(() => tecfeeStore.currentQuestion)
  const questionNumber = computed(() => tecfeeStore.questionNumber)
  const totalQuestions = computed(() => tecfeeStore.totalQuestions)
  const progress = computed(() => tecfeeStore.progress)
  const isExamMode = computed(() => tecfeeStore.sessionMode === 'exam')
  const examStartTime = computed(() => tecfeeStore.examStartTime)
  
  // ============================================
  // HANDLERS
  // ============================================
  
  function handleAnswerSubmitted(result) {
    // Enregistrer la réponse dans le store
    tecfeeStore.submitAnswer(result.questionId, result.selectedAnswer, result.correct)
    
    // Sauvegarder pour le feedback
    lastAnswer.value = result
    
    // Passer à l'écran feedback
    screenState.value = 'feedback'
  }
  
  function handleContinue() {
    // Passer à la question suivante
    tecfeeStore.nextQuestion()
    
    // Vérifier si session terminée
    if (tecfeeStore.isSessionComplete) {
      emit('session-complete')
    } else {
      // Retour à l'écran question
      screenState.value = 'question'
      lastAnswer.value = null
    }
  }
  
  function handleQuit() {
    if (confirm('Voulez-vous vraiment quitter cette session ? Votre progression sera perdue.')) {
      emit('quit-session')
    }
  }
  
  function handleTimeUp() {
    // Temps écoulé en mode examen
    alert('Temps écoulé ! Votre session va être terminée.')
    emit('session-complete')
  }
  
  // ============================================
  // KEYBOARD NAVIGATION
  // ============================================
  
  function handleKeydown(event) {
    // Touche Entrée pour continuer après feedback
    if (event.key === 'Enter' && screenState.value === 'feedback') {
      event.preventDefault()
      handleContinue()
    }
  }
  
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
  </script>
  
  <template>
    <div class="tecfee-exercise-screen">
      
      <!-- Header -->
      <header class="exercise-header">
        <div class="header-left">
          <span class="mode-badge" :class="{ 'exam': isExamMode }">
            {{ isExamMode ? 'Examen' : 'Pratique' }}
          </span>
        </div>
        
        <div class="header-center">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progress + '%' }"></div>
          </div>
          <span class="progress-text">{{ questionNumber }} / {{ totalQuestions }}</span>
        </div>
        
        <div class="header-right">
          <!-- Timer en mode examen -->
          <TecfeeTimer
            v-if="isExamMode"
            ref="timerRef"
            :duration="90"
            :start-time="examStartTime"
            @time-up="handleTimeUp"
          />
          
          <button class="quit-button" @click="handleQuit">
            Quitter
          </button>
        </div>
      </header>
      
      <!-- Contenu principal -->
      <main class="exercise-content">
        
        <!-- État : Question -->
        <TecfeeExerciseCard
          v-if="screenState === 'question' && currentQuestion"
          :question="currentQuestion"
          :question-number="questionNumber"
          :total-questions="totalQuestions"
          :key="currentQuestion.id"
          @answer-submitted="handleAnswerSubmitted"
        />
        
        <!-- État : Feedback -->
        <TecfeeFeedbackPanel
          v-else-if="screenState === 'feedback' && currentQuestion"
          :question="currentQuestion"
          :selected-answer="lastAnswer.selectedAnswer"
          :is-correct="lastAnswer.correct"
          @continue="handleContinue"
        />
        
      </main>
      
    </div>
  </template>
  
  <style scoped>
  .tecfee-exercise-screen {
    max-width: 800px;
    margin: 0 auto;
  }
  
  /* Header */
  .exercise-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5;
  }
  
  .header-left,
  .header-right {
    flex: 0 0 auto;
  }
  
  .header-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .mode-badge {
    display: inline-block;
    padding: 0.3rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 50px;
    background-color: #ede9fe;
    color: #7c3aed;
  }
  
  .mode-badge.exam {
    background-color: #fef3c7;
    color: #d97706;
  }
  
  .progress-bar {
    width: 100%;
    max-width: 300px;
    height: 6px;
    background-color: #e5e5e5;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background-color: #7c3aed;
    border-radius: 3px;
    transition: width 0.3s ease;
  }
  
  .progress-text {
    font-size: 0.8rem;
    color: #666;
  }
  
  .quit-button {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: #666;
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  
  .quit-button:hover {
    color: #dc2626;
    border-color: #dc2626;
    background-color: #fef2f2;
  }
  
  /* Contenu */
  .exercise-content {
    /* Espace pour le contenu */
  }
  </style>
```

TecfeeSummary.vue :
```
<script setup>
import { computed } from 'vue'
import { useTecfeeStore } from '@/stores/tecfeeStore.js'

const emit = defineEmits(['new-session', 'retry-failed'])

const tecfeeStore = useTecfeeStore()

// ============================================
// COMPUTED
// ============================================

const score = computed(() => tecfeeStore.score)
const correctCount = computed(() => tecfeeStore.correctCount)
const totalQuestions = computed(() => tecfeeStore.answers.length)
const isPassing = computed(() => tecfeeStore.isPassing)
const isExamMode = computed(() => tecfeeStore.sessionMode === 'exam')
const resultsByCategory = computed(() => tecfeeStore.resultsByCategory)
const hasFailedQuestions = computed(() => tecfeeStore.failedQuestions.length > 0)

// Message selon le score
const resultMessage = computed(() => {
  if (score.value >= 90) return 'Excellent ! Vous maîtrisez très bien le français écrit.'
  if (score.value >= 80) return 'Très bien ! Vous êtes sur la bonne voie.'
  if (score.value >= 70) return 'Bien ! Vous atteignez le seuil de réussite du TECFÉE.'
  if (score.value >= 60) return 'Pas mal, mais encore un peu de travail pour atteindre le seuil de 70%.'
  if (score.value >= 50) return 'Continuez vos efforts, vous progressez !'
  return 'Ne vous découragez pas, la pratique mène à la réussite !'
})

// ============================================
// HANDLERS
// ============================================

function handleNewSession() {
  tecfeeStore.endSession()
  emit('new-session')
}

function handleRetryFailed() {
  emit('retry-failed')
}
</script>

<template>
  <div class="tecfee-summary">
    
    <!-- En-tête -->
    <div class="summary-header">
      <h1>Résultats</h1>
      <span class="mode-badge" :class="{ 'exam': isExamMode }">
        {{ isExamMode ? 'Examen' : 'Pratique' }}
      </span>
    </div>
    
    <!-- Score principal -->
    <div class="score-card" :class="{ 'is-passing': isPassing, 'is-failing': !isPassing }">
      <div class="score-circle">
        <span class="score-value">{{ score }}%</span>
      </div>
      <div class="score-details">
        <p class="score-fraction">{{ correctCount }} / {{ totalQuestions }} bonnes réponses</p>
        <p class="score-status">
          <span v-if="isPassing" class="status-pass">✓ Seuil de réussite atteint (70%)</span>
          <span v-else class="status-fail">✗ Seuil de réussite non atteint (70%)</span>
        </p>
      </div>
    </div>
    
    <!-- Message -->
    <p class="result-message">{{ resultMessage }}</p>
    
    <!-- Résultats par catégorie -->
    <section class="categories-results">
      <h2>Résultats par catégorie</h2>
      
      <div class="category-list">
        <div 
          v-for="cat in resultsByCategory" 
          :key="cat.id"
          class="category-result"
          :class="{
            'is-weak': cat.percentage < 60,
            'is-medium': cat.percentage >= 60 && cat.percentage < 70,
            'is-good': cat.percentage >= 70
          }"
        >
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-score">{{ cat.correct }}/{{ cat.total }}</span>
          </div>
          <div class="category-bar">
            <div class="category-fill" :style="{ width: cat.percentage + '%' }"></div>
          </div>
          <span class="category-percentage">{{ cat.percentage }}%</span>
        </div>
      </div>
    </section>
    
    <!-- Actions -->
    <div class="summary-actions">
      <button 
        v-if="hasFailedQuestions"
        class="retry-button"
        @click="handleRetryFailed"
      >
        Réviser les erreurs ({{ totalQuestions - correctCount }})
      </button>
      
      <button class="new-session-button" @click="handleNewSession">
        Retour au menu
      </button>
    </div>
    
  </div>
</template>

<style scoped>
.tecfee-summary {
  max-width: 600px;
  margin: 0 auto;
}

/* Header */
.summary-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.summary-header h1 {
  margin: 0;
  font-size: 2rem;
}

.mode-badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 50px;
  background-color: #ede9fe;
  color: #7c3aed;
}

.mode-badge.exam {
  background-color: #fef3c7;
  color: #d97706;
}

/* Score card */
.score-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.score-card.is-passing {
  background-color: #f0fdf4;
  border: 2px solid #10b981;
}

.score-card.is-failing {
  background-color: #fef2f2;
  border: 2px solid #ef4444;
}

.score-circle {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.is-passing .score-circle {
  background-color: #d1fae5;
}

.is-failing .score-circle {
  background-color: #fee2e2;
}

.score-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.is-passing .score-value {
  color: #059669;
}

.is-failing .score-value {
  color: #dc2626;
}

.score-details {
  flex: 1;
}

.score-fraction {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.score-status {
  margin: 0;
  font-size: 0.9rem;
}

.status-pass {
  color: #059669;
}

.status-fail {
  color: #dc2626;
}

/* Message */
.result-message {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Categories */
.categories-results {
  margin-bottom: 2rem;
}

.categories-results h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-result {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border-left: 4px solid #ddd;
  background-color: #f9fafb;
}

.category-result.is-weak {
  border-left-color: #ef4444;
  background-color: #fef2f2;
}

.category-result.is-medium {
  border-left-color: #f59e0b;
  background-color: #fffbeb;
}

.category-result.is-good {
  border-left-color: #10b981;
  background-color: #f0fdf4;
}

.category-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-name {
  font-weight: 500;
  font-size: 0.9rem;
}

.category-score {
  font-size: 0.85rem;
  color: #666;
}

.category-bar {
  height: 6px;
  background-color: #e5e5e5;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.category-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.is-weak .category-fill {
  background-color: #ef4444;
}

.is-medium .category-fill {
  background-color: #f59e0b;
}

.is-good .category-fill {
  background-color: #10b981;
}

.category-percentage {
  font-size: 0.8rem;
  font-weight: 600;
}

.is-weak .category-percentage {
  color: #dc2626;
}

.is-medium .category-percentage {
  color: #d97706;
}

.is-good .category-percentage {
  color: #059669;
}

/* Actions */
.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.retry-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #7c3aed;
  background-color: #f5f0ff;
  border: 2px solid #7c3aed;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.retry-button:hover {
  background-color: #ede9fe;
}

.new-session-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #7c3aed;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
}

.new-session-button:hover {
  background-color: #6d28d9;
}
</style>
```