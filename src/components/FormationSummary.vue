<script setup>
import { computed } from 'vue'
import { useFormationStore } from '@/stores/formationStore.js'

const emit = defineEmits(['new-session', 'retry-failed'])

const formationStore = useFormationStore()

// ============================================
// COMPUTED
// ============================================

const totalQuestions = computed(() => formationStore.totalQuestions)
const correctAnswers = computed(() => formationStore.correctAnswers)
const score = computed(() => formationStore.score)
const failedQuestions = computed(() => formationStore.failedQuestions)
const hasFailedQuestions = computed(() => failedQuestions.value.length > 0)
const resultsByCategory = computed(() => formationStore.resultsByCategory)

const resultMessage = computed(() => {
  if (score.value >= 90) return 'Excellent ! Vous maîtrisez très bien cette matière.'
  if (score.value >= 80) return 'Très bien ! Continuez sur cette lancée.'
  if (score.value >= 70) return 'Bien ! Vous avez de bonnes bases.'
  if (score.value >= 60) return 'Pas mal, mais il y a encore du travail.'
  return 'Continuez vos efforts, la pratique est la clé !'
})

// ============================================
// METHODS
// ============================================

function handleNewSession() {
  formationStore.endSession()
  emit('new-session')
}

function handleRetryFailed() {
  emit('retry-failed', failedQuestions.value)
}
</script>

<template>
  <div class="formation-summary">
    <!-- Header -->
    <div class="summary-header">
      <h1>Résultats</h1>
    </div>
    
    <!-- Score principal -->
    <div class="score-card">
      <div class="score-circle">
        <span class="score-value">{{ score }}%</span>
      </div>
      <div class="score-details">
        <p class="score-fraction">{{ correctAnswers }} / {{ totalQuestions }} bonnes réponses</p>
      </div>
    </div>
    
    <!-- Message -->
    <p class="result-message">{{ resultMessage }}</p>
    
    <!-- Résultats par catégorie -->
    <section class="categories-results">
      <h2>Résultats par catégorie</h2>
      
      <div class="category-list">
        <div 
          v-for="cat in resultsByCategory" 
          :key="cat.id"
          class="category-result"
          :class="{
            'is-weak': cat.percentage < 60,
            'is-medium': cat.percentage >= 60 && cat.percentage < 80,
            'is-good': cat.percentage >= 80
          }"
        >
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-score">{{ cat.correct }}/{{ cat.total }}</span>
          </div>
          <div class="category-bar">
            <div class="category-fill" :style="{ width: cat.percentage + '%' }"></div>
          </div>
          <span class="category-percentage">{{ cat.percentage }}%</span>
        </div>
      </div>
    </section>
    
    <!-- Actions -->
    <div class="summary-actions">
      <button 
        v-if="hasFailedQuestions"
        class="retry-button"
        @click="handleRetryFailed"
      >
        Réviser les erreurs ({{ failedQuestions.length }})
      </button>
      
      <button class="new-session-button" @click="handleNewSession">
        Retour au menu
      </button>
    </div>
  </div>
</template>

<style scoped>
.formation-summary {
  max-width: 600px;
  margin: 0 auto;
}

/* Header */
.summary-header {
  margin-bottom: 1.5rem;
}

.summary-header h1 {
  margin: 0;
  font-size: 2rem;
}

/* Score card */
.score-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  border: 2px solid #dee2e6;
}

.score-circle {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #e9ecef;
}

.score-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.score-details {
  flex: 1;
}

.score-fraction {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Message */
.result-message {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Categories */
.categories-results {
  margin-bottom: 2rem;
}

.categories-results h2 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-result {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border-left: 4px solid #ddd;
  background-color: #f9fafb;
}

.category-result.is-weak {
  border-left-color: #dc3545;
  background-color: #fef2f2;
}

.category-result.is-medium {
  border-left-color: #ffc107;
  background-color: #fffbeb;
}

.category-result.is-good {
  border-left-color: #28a745;
  background-color: #f0fdf4;
}

.category-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-name {
  font-weight: 500;
  font-size: 0.9rem;
}

.category-score {
  font-size: 0.85rem;
  color: #666;
}

.category-bar {
  height: 6px;
  background-color: #e5e5e5;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.category-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.is-weak .category-fill {
  background-color: #dc3545;
}

.is-medium .category-fill {
  background-color: #ffc107;
}

.is-good .category-fill {
  background-color: #28a745;
}

.category-percentage {
  font-size: 0.8rem;
  font-weight: 600;
}

.is-weak .category-percentage {
  color: #dc2626;
}

.is-medium .category-percentage {
  color: #d97706;
}

.is-good .category-percentage {
  color: #059669;
}

/* Actions */
.summary-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.retry-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #007bff;
  background-color: #f0f8ff;
  border: 2px solid #007bff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.retry-button:hover {
  background-color: #e6f2ff;
}

.new-session-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: inherit;
}

.new-session-button:hover {
  background-color: #0056b3;
}
</style>