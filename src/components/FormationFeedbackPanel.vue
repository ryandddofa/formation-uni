<script setup>
import { computed } from 'vue'
import { useFormationStore } from '@/stores/formationStore.js'
import { recapitulatifTempsComposes } from '@/data/formation/recapitulatif-temps-composes.js'

const formationStore = useFormationStore()

// ============================================
// COMPUTED
// ============================================

const currentQuestion = computed(() => formationStore.currentQuestion)
const showExplanation = computed(() => formationStore.showExplanation)
const currentAnswer = computed(() => formationStore.getCurrentAnswer())
const hasAnswered = computed(() => currentAnswer.value?.userAnswer !== null)

// ============================================
// METHODS
// ============================================

function toggleExplanation() {
  formationStore.toggleExplanation()
}
</script>

<template>
  <div class="formation-feedback-panel">
    <!-- Bouton pour afficher/masquer l'explication -->
    <button 
      v-if="hasAnswered"
      class="toggle-explanation-button"
      @click="toggleExplanation"
    >
      {{ showExplanation ? '▼ Masquer l\'explication' : '► Afficher l\'explication' }}
    </button>

    <!-- Explication -->
    <div v-if="showExplanation && hasAnswered" class="explanation-content">
      <h3>Explication</h3>
      <p class="explanation-text">{{ currentQuestion?.explanation }}</p>
      
      <!-- Tableau récapitulatif -->
      <details class="recapitulatif-details">
        <summary>Tableau récapitulatif des temps composés</summary>
        <pre class="recapitulatif-table">{{ recapitulatifTempsComposes }}</pre>
      </details>
    </div>
  </div>
</template>

<style scoped>
.formation-feedback-panel {
  margin-top: 1.5rem;
}

/* Toggle button */
.toggle-explanation-button {
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #007bff;
  background-color: #f8f9fa;
  border: 2px solid #007bff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  text-align: left;
}

.toggle-explanation-button:hover {
  background-color: #e9ecef;
}

/* Explanation */
.explanation-content {
  margin-top: 1rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 6px;
}

.explanation-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #333;
}

.explanation-text {
  margin: 0 0 1rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

/* Récapitulatif */
.recapitulatif-details {
  margin-top: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: white;
}

.recapitulatif-details summary {
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  background-color: #e9ecef;
  border-radius: 4px;
}

.recapitulatif-details summary:hover {
  background-color: #dee2e6;
}

.recapitulatif-table {
  margin: 1rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre;
  color: #333;
}
</style>