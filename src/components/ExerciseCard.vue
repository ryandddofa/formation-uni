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