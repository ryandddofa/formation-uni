<script setup>
import { ref, computed, watch } from 'vue'
import { useFormationStore } from '@/stores/formationStore.js'

const formationStore = useFormationStore()

// ============================================
// STATE
// ============================================

const userInput = ref('')

// ============================================
// COMPUTED
// ============================================

const currentQuestion = computed(() => formationStore.currentQuestion)
const currentAnswer = computed(() => formationStore.getCurrentAnswer())
const hasAnswered = computed(() => currentAnswer.value?.userAnswer !== null)
const isCorrect = computed(() => currentAnswer.value?.isCorrect)

// ============================================
// WATCHERS
// ============================================

// Réinitialiser l'input quand on change de question
watch(() => formationStore.currentQuestionIndex, () => {
  const answer = formationStore.getCurrentAnswer()
  userInput.value = answer?.userAnswer || ''
})

// ============================================
// METHODS
// ============================================

// Normalise le texte pour la comparaison (ignore casse, ponctuation, espaces multiples)
function normalizeText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?'"«»]/g, '') // Retire la ponctuation
    .replace(/['']/g, "'") // Normalise les apostrophes
    .replace(/\s+/g, ' ') // Remplace espaces multiples par un seul
}

function submitAnswer() {
  if (userInput.value.trim() === '') return
  
  // Normaliser les deux réponses pour la comparaison
  const normalizedUser = normalizeText(userInput.value)
  const normalizedCorrect = normalizeText(currentQuestion.value.correctAnswer)
  
  // Comparer les versions normalisées
  const isCorrect = normalizedUser === normalizedCorrect
  
  // Soumettre la réponse originale de l'utilisateur (non normalisée)
  formationStore.submitAnswer(userInput.value.trim())
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && !hasAnswered.value) {
    submitAnswer()
  }
}
</script>

<template>
  <div class="formation-exercise-card">
    <!-- Phrase à analyser -->
    <div class="question-section">
      <p class="instruction">Identifiez et recopiez le complément direct du verbe :</p>
      <div class="sentence">{{ currentQuestion?.sentence }}</div>
      <p class="hint">Astuce : Posez la question "Verbe + QUOI?" ou "Verbe + QUI?"</p>
    </div>

    <!-- Champ de saisie -->
    <div class="input-section">
      <input
        v-model="userInput"
        type="text"
        class="answer-input"
        :class="{ 
          answered: hasAnswered,
          correct: hasAnswered && isCorrect,
          incorrect: hasAnswered && !isCorrect
        }"
        placeholder="Tapez le COD ici..."
        :disabled="hasAnswered"
        @keypress="handleKeyPress"
      />
    </div>

    <!-- Bouton valider -->
    <button
      v-if="!hasAnswered"
      class="submit-button"
      :disabled="userInput.trim() === ''"
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
      <div v-if="!isCorrect" class="answer-comparison">
        <p class="user-answer">Votre réponse : <span>{{ userInput }}</span></p>
        <p class="correct-answer">Réponse attendue : <strong>{{ currentQuestion.correctAnswer }}</strong></p>
      </div>
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
  margin-bottom: 0.75rem;
}

.hint {
  font-size: 0.85rem;
  color: #6c757d;
  font-style: italic;
  margin: 0;
}

/* Input */
.input-section {
  margin-bottom: 1.5rem;
}

.answer-input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  transition: all 0.2s;
}

.answer-input:focus {
  outline: none;
  border-color: #007bff;
  background-color: #f8f9fa;
}

.answer-input.answered {
  cursor: default;
}

.answer-input.correct {
  border-color: #28a745;
  background-color: #d4edda;
}

.answer-input.incorrect {
  border-color: #dc3545;
  background-color: #f8d7da;
}

.answer-input:disabled {
  cursor: not-allowed;
  opacity: 0.8;
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
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.feedback-section.correct .feedback-message {
  color: #155724;
}

.feedback-section.incorrect .feedback-message {
  color: #721c24;
}

.answer-comparison {
  margin: 0;
}

.user-answer {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #721c24;
}

.user-answer span {
  font-weight: 500;
  text-decoration: line-through;
}

.correct-answer {
  margin: 0;
  font-size: 0.95rem;
  color: #721c24;
}

.correct-answer strong {
  color: #155724;
}
</style>