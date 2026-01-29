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