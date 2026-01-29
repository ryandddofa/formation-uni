<script setup>
import { computed } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  selectedAnswer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['continue'])

// Option sélectionnée par l'utilisateur
const selectedOption = computed(() => {
  return props.question.options.find(o => o.letter === props.selectedAnswer)
})

// Bonne réponse
const correctOption = computed(() => {
  return props.question.options.find(o => o.correct)
})

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
</script>

<template>
  <div class="tecfee-feedback-panel">
    
    <!-- Catégorie -->
    <div class="category-badge">
      {{ categoryLabel }}
    </div>
    
    <!-- Résultat -->
    <div class="result" :class="isCorrect ? 'is-correct' : 'is-incorrect'">
      <span class="result-icon">{{ isCorrect ? '✓' : '✗' }}</span>
      <span class="result-text">{{ isCorrect ? 'Correct !' : 'Incorrect' }}</span>
    </div>
    
    <!-- Réponse de l'utilisateur (si incorrecte) -->
    <div v-if="!isCorrect" class="user-answer">
      <span class="answer-label">Votre réponse :</span>
      <div class="answer-content wrong">
        <span class="answer-letter">{{ selectedOption.letter }})</span>
        <span v-html="selectedOption.text"></span>
      </div>
    </div>
    
    <!-- Bonne réponse -->
    <div class="correct-answer">
      <span class="answer-label">{{ isCorrect ? 'Vous avez choisi :' : 'Bonne réponse :' }}</span>
      <div class="answer-content correct">
        <span class="answer-letter">{{ correctOption.letter }})</span>
        <span v-html="correctOption.text"></span>
      </div>
    </div>
    
    <!-- Explication -->
    <div class="explanation-section">
      <h4>Explication</h4>
      <p class="explanation-text">{{ question.explanation }}</p>
      <div class="rule-tag">
        <span class="rule-label">Règle :</span>
        <span class="rule-name">{{ question.rule }}</span>
      </div>
    </div>
    
    <!-- Bouton continuer -->
    <button class="continue-button" @click="emit('continue')">
      Continuer
    </button>
  </div>
</template>

<style scoped>
.tecfee-feedback-panel {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
}

/* Catégorie */
.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #7c3aed;
  background-color: #ede9fe;
  border-radius: 50px;
  margin-bottom: 1rem;
}

/* Résultat */
.result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.result.is-correct {
  background-color: #d1fae5;
  color: #059669;
}

.result.is-incorrect {
  background-color: #fee2e2;
  color: #dc2626;
}

.result-icon {
  font-size: 1.25rem;
  font-weight: bold;
}

.result-text {
  font-size: 1.1rem;
  font-weight: 600;
}

/* Réponses */
.user-answer,
.correct-answer {
  margin-bottom: 1rem;
}

.answer-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
}

.answer-content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 6px;
  line-height: 1.5;
}

.answer-content.wrong {
  background-color: #fef2f2;
  border-left: 4px solid #ef4444;
}

.answer-content.correct {
  background-color: #f0fdf4;
  border-left: 4px solid #10b981;
}

.answer-letter {
  font-weight: 600;
  min-width: 1.5rem;
}

.answer-content.wrong .answer-letter {
  color: #dc2626;
}

.answer-content.correct .answer-letter {
  color: #059669;
}

.answer-content :deep(u) {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.answer-content.wrong :deep(u) {
  text-decoration-color: #dc2626;
}

.answer-content.correct :deep(u) {
  text-decoration-color: #059669;
}

/* Explication */
.explanation-section {
  background-color: #f8f5fc;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.explanation-section h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #7c3aed;
}

.explanation-text {
  margin: 0 0 1rem 0;
  line-height: 1.6;
  color: #444;
}

.rule-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem;
  background-color: #ede9fe;
  border-radius: 50px;
  font-size: 0.85rem;
}

.rule-label {
  color: #666;
}

.rule-name {
  color: #7c3aed;
  font-weight: 500;
}

/* Bouton continuer */
.continue-button {
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

.continue-button:hover {
  background-color: #6d28d9;
}

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