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