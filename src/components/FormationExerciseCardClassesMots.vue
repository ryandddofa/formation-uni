<script setup>
import { ref, computed, watch } from 'vue'
import { useFormationStore } from '@/stores/formationStore.js'

const formationStore = useFormationStore()

// ============================================
// STATE
// ============================================

const selectedAnswer = ref(null)

// Les 3 classes de mots
const classesOptions = [
  { value: 'préposition', label: 'Préposition' },
  { value: 'conjonction', label: 'Conjonction' },
  { value: 'adverbe', label: 'Adverbe' }
]

// ============================================
// COMPUTED
// ============================================

const currentQuestion = computed(() => formationStore.currentQuestion)
const currentAnswer = computed(() => formationStore.getCurrentAnswer())
const hasAnswered = computed(() => currentAnswer.value?.userAnswer !== null)
const isCorrect = computed(() => currentAnswer.value?.isCorrect)

// Transforme la phrase en HTML avec le mot souligné
const sentenceHtml = computed(() => {
  if (!currentQuestion.value) return ''
  const sentence = currentQuestion.value.sentence
  // Remplace **mot** par <u>mot</u>
  return sentence.replace(/\*\*(.*?)\*\*/g, '<u>$1</u>')
})

// ============================================
// WATCHERS
// ============================================

// Réinitialiser la sélection quand on change de question
watch(() => formationStore.currentQuestionIndex, () => {
  const answer = formationStore.getCurrentAnswer()
  selectedAnswer.value = answer?.userAnswer || null
})

// ============================================
// METHODS
// ============================================

function selectAnswer(value) {
  if (hasAnswered.value) return
  selectedAnswer.value = value
}

function submitAnswer() {
  if (selectedAnswer.value === null) return
  formationStore.submitAnswer(selectedAnswer.value)
}

function getButtonClass(option) {
  const classes = ['answer-option']
  
  if (!hasAnswered.value) {
    if (selectedAnswer.value === option.value) {
      classes.push('selected')
    }
  } else {
    if (option.value === currentQuestion.value.correctAnswer) {
      classes.push('correct')
    } else if (option.value === currentAnswer.value.userAnswer) {
      classes.push('incorrect')
    }
  }
  
  return classes.join(' ')
}
</script>

<template>
  <div class="formation-exercise-card">
    <!-- Phrase à analyser -->
    <div class="question-section">
      <p class="instruction">Identifiez la classe grammaticale du mot souligné :</p>
      <div class="sentence" v-html="sentenceHtml"></div>
    </div>

    <!-- Options de réponse -->
    <div class="answers-section classes-mots">
      <button
        v-for="option in classesOptions"
        :key="option.value"
        :class="getButtonClass(option)"
        :disabled="hasAnswered"
        @click="selectAnswer(option.value)"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- Bouton valider -->
    <button
      v-if="!hasAnswered"
      class="submit-button"
      :disabled="selectedAnswer === null"
      @click="submitAnswer"
    >
      Valider
    </button>

    <!-- Feedback après validation -->
    <div v-if="hasAnswered" class="feedback-section" :class="{ correct: isCorrect, incorrect: !isCorrect }">
      <p class="feedback-message">
        <span v-if="isCorrect">✓ Correct !</span>
        <span v-else>✗ Incorrect</span>
      </p>
      <p v-if="!isCorrect" class="correct-answer">
        La bonne réponse était : <strong>{{ currentQuestion.correctAnswer }}</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.formation-exercise-card {
  background: white;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Question */
.question-section {
  margin-bottom: 2rem;
}

.instruction {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.sentence {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-left: 4px solid #007bff;
  border-radius: 4px;
}

.sentence :deep(u) {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
  font-weight: 600;
  color: #007bff;
}

/* Answers */
.answers-section {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.answers-section.classes-mots {
  grid-template-columns: repeat(3, 1fr);
}

.answer-option {
  padding: 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.answer-option:hover:not(:disabled) {
  border-color: #007bff;
  background-color: #f8f9fa;
}

.answer-option.selected {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}

.answer-option.correct {
  background-color: #28a745;
  border-color: #28a745;
  color: white;
}

.answer-option.incorrect {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
}

.answer-option:disabled {
  cursor: default;
}

/* Submit button */
.submit-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
}

.submit-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Feedback */
.feedback-section {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
}

.feedback-section.correct {
  background-color: #d4edda;
  border: 2px solid #28a745;
}

.feedback-section.incorrect {
  background-color: #f8d7da;
  border: 2px solid #dc3545;
}

.feedback-message {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feedback-section.correct .feedback-message {
  color: #155724;
}

.feedback-section.incorrect .feedback-message {
  color: #721c24;
}

.correct-answer {
  margin: 0;
  font-size: 0.95rem;
  color: #721c24;
}
</style>