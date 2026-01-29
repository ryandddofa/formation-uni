<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'

const props = defineProps({
  userInput: {
    type: String,
    required: true
  },
  correct: {
    type: Boolean,
    required: true
  },
  errors: {
    type: Array,
    default: () => []
  },
  warnings: {
    type: Array,
    default: () => []
  },
  hasWarnings: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['next-exercise'])

const sessionStore = useSessionStore()

const exercise = computed(() => sessionStore.currentExercise)

// Empêcher l'activation immédiate de la touche Entrée
const canProceed = ref(false)

// Formater les avertissements pour affichage
const warningMessages = computed(() => {
  if (!props.warnings || props.warnings.length === 0) return []
  
  return props.warnings
    .filter(w => w.userWord && w.expectedWord) // Filtrer les warnings incomplets
    .map(w => {
      return `« ${w.userWord} » devrait être « ${w.expectedWord} »`
    })
})

function handleNext() {
  emit('next-exercise')
}

// Écouter la touche Entrée pour continuer (seulement après le délai)
function handleKeydown(event) {
  if (event.key === 'Enter' && canProceed.value) {
    event.preventDefault()
    handleNext()
  }
}

let delayTimeout = null

onMounted(() => {
  // Attendre 300ms avant d'activer la touche Entrée
  // pour éviter de capter l'Entrée de la validation
  delayTimeout = setTimeout(() => {
    canProceed.value = true
  }, 300)
  
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (delayTimeout) {
    clearTimeout(delayTimeout)
  }
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="feedback-panel">
    <!-- Catégorie de l'exercice -->
    <div class="category-badge">
      {{ exercise.categoryName }}
    </div>
    
    <!-- Résultat -->
    <div class="result" :class="correct ? 'is-correct' : 'is-incorrect'">
      <span class="result-icon">{{ correct ? '✓' : '✗' }}</span>
      <span class="result-text">{{ correct ? 'Correct !' : 'Incorrect' }}</span>
    </div>
    
    <!-- Avertissements (fautes mineures hors du mot cible) -->
    <div v-if="correct && hasWarnings" class="warnings">
      <p class="warnings-title">⚠️ Attention, petite(s) faute(s) ailleurs dans la phrase :</p>
      <ul class="warnings-list">
        <li v-for="(msg, index) in warningMessages" :key="index">
          {{ msg }}
        </li>
      </ul>
    </div>
    
    <!-- Comparaison des réponses -->
    <div class="comparison">
      <div class="comparison-item">
        <p class="comparison-label">Votre réponse :</p>
        <p class="comparison-text user-answer" :class="{ 'has-errors': !correct }">
          « {{ userInput }} »
        </p>
      </div>
      
      <div v-if="!correct" class="comparison-item">
        <p class="comparison-label">Réponse attendue :</p>
        <p class="comparison-text correct-answer">
          « {{ exercise.sentenceComplete }} »
        </p>
      </div>
    </div>
    
    <!-- Mot clé -->
    <div class="answer-highlight">
      <span class="answer-label">Mot à compléter :</span>
      <span class="answer-word">{{ exercise.answer }}</span>
      <span v-if="exercise.verbInfinitive" class="answer-infinitive">
        ({{ exercise.verbInfinitive }})
      </span>
    </div>
    
    <!-- Explication -->
    <div class="explanation">
      <div class="explanation-rule">
        <p class="explanation-title">Règle :</p>
        <p>{{ exercise.explanation.rule }}</p>
      </div>
      
      <div class="explanation-analysis">
        <p class="explanation-title">Analyse :</p>
        <p>{{ exercise.explanation.analysis }}</p>
      </div>
    </div>
    
    <!-- Bouton suivant -->
    <button class="next-button" @click="handleNext">
      {{ sessionStore.isSessionComplete ? 'Voir le récapitulatif' : 'Exercice suivant →' }}
      <span class="next-hint"></span>
    </button>
  </div>
</template>

<style scoped>
.feedback-panel {
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

.result {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.result.is-correct {
  background-color: #d4edda;
  color: #155724;
}

.result.is-incorrect {
  background-color: #f8d7da;
  color: #721c24;
}

.result-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.result-text {
  font-size: 1.25rem;
  font-weight: 600;
}

.warnings {
  padding: 1rem;
  background-color: #fff3cd;
  border-radius: 4px;
  border-left: 4px solid #ffc107;
  margin-bottom: 1.5rem;
}

.warnings-title {
  font-weight: 600;
  color: #856404;
  margin-bottom: 0.5rem;
}

.warnings-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #856404;
}

.warnings-list li {
  margin-bottom: 0.25rem;
}

.comparison {
  margin-bottom: 1.5rem;
}

.comparison-item {
  margin-bottom: 1rem;
}

.comparison-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.comparison-text {
  font-size: 1.1rem;
  line-height: 1.5;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #f8f9fa;
}

.user-answer.has-errors {
  background-color: #fff3f3;
  border-left: 3px solid #dc3545;
}

.correct-answer {
  background-color: #f0fff0;
  border-left: 3px solid #28a745;
}

.answer-highlight {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background-color: #e7f1ff;
  border-radius: 4px;
}

.answer-label {
  color: #666;
}

.answer-word {
  font-weight: 600;
  color: #007bff;
  font-size: 1.1rem;
}

.answer-infinitive {
  color: #666;
  font-size: 0.95rem;
}

.explanation {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.explanation-rule {
  margin-bottom: 1rem;
}

.explanation-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
}

.explanation-analysis {
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}

.next-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.next-button:hover {
  background-color: #0056b3;
}

.next-hint {
  font-size: 0.85rem;
  font-weight: 400;
  opacity: 0.8;
}
</style>