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