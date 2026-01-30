<script setup>
import { ref, computed } from 'vue'
import { useFormationStore } from '@/stores/formationStore.js'
import FormationExerciseCard from './FormationExerciseCard.vue'
import FormationExerciseCardModes from './FormationExerciseCardModes.vue'
import FormationFeedbackPanel from './FormationFeedbackPanel.vue'
import SessionProgress from './SessionProgress.vue'
import { recapitulatifTempsComposes } from '@/data/formation/recapitulatif-temps-composes.js'
import { recapitulatifModes } from '@/data/formation/recapitulatif-modes.js'
import FormationExerciseCardAttributs from './FormationExerciseCardAttributs.vue'
import { recapitulatifAttributs } from '@/data/formation/recapitulatif-attributs.js'
import FormationExerciseCardClassesMots from './FormationExerciseCardClassesMots.vue'
import { recapitulatifClassesMots } from '@/data/formation/recapitulatif-classes-mots.js'
import FormationExerciseCardCOD from './FormationExerciseCardCOD.vue'
import { recapitulatifCOD } from '@/data/formation/recapitulatif-cod.js'

const emit = defineEmits(['session-complete', 'quit-session'])

const formationStore = useFormationStore()
const showRecapitulatif = ref(false)

// ============================================
// COMPUTED
// ============================================

const progress = computed(() => formationStore.progress)
const currentQuestionIndex = computed(() => formationStore.currentQuestionIndex)
const totalQuestions = computed(() => formationStore.totalQuestions)
const currentAnswer = computed(() => formationStore.getCurrentAnswer())
const hasAnswered = computed(() => currentAnswer.value?.userAnswer !== null)
const isLastQuestion = computed(() => currentQuestionIndex.value === totalQuestions.value - 1)

// Détermine quel composant de carte utiliser selon la catégorie
const currentCardComponent = computed(() => {
  const question = formationStore.currentQuestion
  if (!question) return FormationExerciseCard
  
  if (question.categoryId === 'temps-indicatif') {
    return FormationExerciseCard
  } else if (question.categoryId === 'modes-conjugaison') {
    return FormationExerciseCardModes
  } else if (question.categoryId === 'attributs') {
  return FormationExerciseCardAttributs
  } else if (question.categoryId === 'classes-mots') {
  return FormationExerciseCardClassesMots
  } else if (question.categoryId === 'complement-direct') {
  return FormationExerciseCardCOD
}
  
  return FormationExerciseCard
})

// ============================================
// METHODS
// ============================================

function handleNext() {
  if (isLastQuestion.value) {
    emit('session-complete')
  } else {
    formationStore.nextQuestion()
  }
}

function handlePrevious() {
  formationStore.previousQuestion()
}

function handleQuit() {
  if (confirm('Êtes-vous sûr de vouloir quitter ? Votre progression sera perdue.')) {
    emit('quit-session')
  }
}

function toggleRecapitulatif() {
  showRecapitulatif.value = !showRecapitulatif.value
}

function getRecapitulatif() {
  const question = formationStore.currentQuestion
  if (!question) return recapitulatifTempsComposes
  
  if (question.categoryId === 'temps-indicatif') {
    return recapitulatifTempsComposes
  } else if (question.categoryId === 'modes-conjugaison') {
    return recapitulatifModes
  } else if (question.categoryId === 'attributs') {
  return recapitulatifAttributs
  } else if (question.categoryId === 'classes-mots') {
  return recapitulatifClassesMots
  } else if (question.categoryId === 'complement-direct') {
  return recapitulatifCOD
}
  
  return recapitulatifTempsComposes
}
</script>

<template>
  <div class="formation-exercise-screen">
    <!-- Header avec progression -->
    <div class="exercise-header">
      <button class="quit-button" @click="handleQuit">
        ← Quitter
      </button>
      <SessionProgress 
        :current="currentQuestionIndex + 1"
        :total="totalQuestions"
        :progress="progress"
      />
      <button class="tableau-button" @click="toggleRecapitulatif">
        📊 Tableau
      </button>
    </div>

    <!-- Tableau récapitulatif (modal) -->
    <div v-if="showRecapitulatif" class="recapitulatif-modal" @click="toggleRecapitulatif">
      <div class="recapitulatif-content" @click.stop>
        <div class="recapitulatif-header">
          <h3>Tableau récapitulatif</h3>
          <button class="close-button" @click="toggleRecapitulatif">✕</button>
        </div>
        <pre class="recapitulatif-table">{{ getRecapitulatif() }}</pre>
      </div>
    </div>

    <!-- Zone centrale avec composant dynamique -->
    <div class="exercise-center">
      <component :is="currentCardComponent" />
      <FormationFeedbackPanel />
    </div>

    <!-- Navigation -->
    <div class="exercise-navigation">
      <button
        class="nav-button"
        :disabled="currentQuestionIndex === 0"
        @click="handlePrevious"
      >
        ← Précédent
      </button>
      
      <button
        v-if="hasAnswered"
        class="nav-button next-button"
        @click="handleNext"
      >
        {{ isLastQuestion ? 'Terminer' : 'Suivant →' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.formation-exercise-screen {
  max-width: 900px;
  margin: 0 auto;
}

/* Header */
.exercise-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.quit-button,
.tableau-button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.quit-button:hover,
.tableau-button:hover {
  border-color: #999;
  color: #333;
}

.tableau-button {
  margin-left: auto;
}

/* Modal récapitulatif */
.recapitulatif-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.recapitulatif-content {
  background-color: white;
  border-radius: 8px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
}

.recapitulatif-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e5e5;
}

.recapitulatif-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.25rem 0.5rem;
  line-height: 1;
}

.close-button:hover {
  color: #333;
}

.recapitulatif-table {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre;
  color: #333;
  margin: 0;
}

/* Center */
.exercise-center {
  margin-bottom: 2rem;
}

/* Navigation */
.exercise-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.nav-button:hover:not(:disabled) {
  border-color: #007bff;
  color: #007bff;
}

.nav-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-button.next-button {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
  margin-left: auto;
}

.nav-button.next-button:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
  color: white;
}
</style>