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