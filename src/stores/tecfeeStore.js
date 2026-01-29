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