import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFormationStore = defineStore('formation', () => {
    // ============================================
    // STATE
    // ============================================

    const currentQuestionIndex = ref(0)
    const questions = ref([])
    const answers = ref([])
    const isSessionActive = ref(false)
    const showExplanation = ref(false)

    // ============================================
    // COMPUTED
    // ============================================

    const currentQuestion = computed(() => {
        return questions.value[currentQuestionIndex.value] || null
    })

    const progress = computed(() => {
        if (questions.value.length === 0) return 0
        return ((currentQuestionIndex.value + 1) / questions.value.length) * 100
    })

    const totalQuestions = computed(() => questions.value.length)

    const answeredQuestions = computed(() => {
        return answers.value.filter(a => a.userAnswer !== null).length
    })

    const correctAnswers = computed(() => {
        return answers.value.filter(a => a.isCorrect).length
    })

    const failedQuestions = computed(() => {
        return questions.value.filter((q, index) => {
            const answer = answers.value[index]
            return answer && !answer.isCorrect
        })
    })

    const score = computed(() => {
        if (totalQuestions.value === 0) return 0
        return Math.round((correctAnswers.value / totalQuestions.value) * 100)
    })

    // Résultats par catégorie
    const resultsByCategory = computed(() => {
        const categoryMap = {}

        questions.value.forEach((q, index) => {
            const answer = answers.value[index]
            if (!answer) return

            if (!categoryMap[q.categoryId]) {
                categoryMap[q.categoryId] = {
                    id: q.categoryId,
                    name: q.categoryName,
                    total: 0,
                    correct: 0
                }
            }

            categoryMap[q.categoryId].total++
            if (answer.isCorrect) {
                categoryMap[q.categoryId].correct++
            }
        })

        return Object.values(categoryMap).map(cat => ({
            ...cat,
            percentage: cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 0
        }))
    })

    // ============================================
    // ACTIONS
    // ============================================

    function startSession(sessionQuestions) {
        questions.value = sessionQuestions
        answers.value = sessionQuestions.map(() => ({
            userAnswer: null,
            isCorrect: false,
            timestamp: null
        }))
        currentQuestionIndex.value = 0
        isSessionActive.value = true
        showExplanation.value = false
    }

    function submitAnswer(userAnswer) {
        const question = currentQuestion.value
        if (!question) return

        const isCorrect = userAnswer === question.correctAnswer

        answers.value[currentQuestionIndex.value] = {
            userAnswer,
            isCorrect,
            timestamp: Date.now()
        }
    }

    function nextQuestion() {
        if (currentQuestionIndex.value < questions.value.length - 1) {
            currentQuestionIndex.value++
            showExplanation.value = false
        }
    }

    function previousQuestion() {
        if (currentQuestionIndex.value > 0) {
            currentQuestionIndex.value--
            showExplanation.value = false
        }
    }

    function toggleExplanation() {
        showExplanation.value = !showExplanation.value
    }

    function startRetrySession(failedQuestionsToRetry) {
        startSession(failedQuestionsToRetry)
    }

    function endSession() {
        questions.value = []
        answers.value = []
        currentQuestionIndex.value = 0
        isSessionActive.value = false
        showExplanation.value = false
    }

    function getCurrentAnswer() {
        return answers.value[currentQuestionIndex.value]
    }

    return {
        // State
        currentQuestionIndex,
        questions,
        answers,
        isSessionActive,
        showExplanation,

        // Computed
        currentQuestion,
        progress,
        totalQuestions,
        answeredQuestions,
        correctAnswers,
        failedQuestions,
        score,
        resultsByCategory,

        // Actions
        startSession,
        submitAnswer,
        nextQuestion,
        previousQuestion,
        toggleExplanation,
        startRetrySession,
        endSession,
        getCurrentAnswer
    }
})