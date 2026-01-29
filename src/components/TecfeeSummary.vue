<script setup>
import { computed } from 'vue'
import { useTecfeeStore } from '@/stores/tecfeeStore.js'

const emit = defineEmits(['new-session', 'retry-failed'])

const tecfeeStore = useTecfeeStore()

// ============================================
// COMPUTED
// ============================================

const score = computed(() => tecfeeStore.score)
const correctCount = computed(() => tecfeeStore.correctCount)
const totalQuestions = computed(() => tecfeeStore.answers.length)
const isPassing = computed(() => tecfeeStore.isPassing)
const isExamMode = computed(() => tecfeeStore.sessionMode === 'exam')
const resultsByCategory = computed(() => tecfeeStore.resultsByCategory)
const hasFailedQuestions = computed(() => tecfeeStore.failedQuestions.length > 0)

// Message selon le score
const resultMessage = computed(() => {
  if (score.value >= 90) return 'Excellent ! Vous maîtrisez très bien le français écrit.'
  if (score.value >= 80) return 'Très bien ! Vous êtes sur la bonne voie.'
  if (score.value >= 70) return 'Bien ! Vous atteignez le seuil de réussite du TECFÉE.'
  if (score.value >= 60) return 'Pas mal, mais encore un peu de travail pour atteindre le seuil de 70%.'
  if (score.value >= 50) return 'Continuez vos efforts, vous progressez !'
  return 'Ne vous découragez pas, la pratique mène à la réussite !'
})

// ============================================
// HANDLERS
// ============================================

function handleNewSession() {
  tecfeeStore.endSession()
  emit('new-session')
}

function handleRetryFailed() {
  emit('retry-failed')
}
</script>

<template>
  <div class="tecfee-summary">
    
    <!-- En-tête -->
    <div class="summary-header">
      <h1>Résultats</h1>
      <span class="mode-badge" :class="{ 'exam': isExamMode }">
        {{ isExamMode ? 'Examen' : 'Pratique' }}
      </span>
    </div>
    
    <!-- Score principal -->
    <div class="score-card" :class="{ 'is-passing': isPassing, 'is-failing': !isPassing }">
      <div class="score-circle">
        <span class="score-value">{{ score }}%</span>
      </div>
      <div class="score-details">
        <p class="score-fraction">{{ correctCount }} / {{ totalQuestions }} bonnes réponses</p>
        <p class="score-status">
          <span v-if="isPassing" class="status-pass">✓ Seuil de réussite atteint (70%)</span>
          <span v-else class="status-fail">✗ Seuil de réussite non atteint (70%)</span>
        </p>
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
            'is-medium': cat.percentage >= 60 && cat.percentage < 70,
            'is-good': cat.percentage >= 70
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
        Réviser les erreurs ({{ totalQuestions - correctCount }})
      </button>
      
      <button class="new-session-button" @click="handleNewSession">
        Retour au menu
      </button>
    </div>
    
  </div>
</template>

<style scoped>
.tecfee-summary {
  max-width: 600px;
  margin: 0 auto;
}

/* Header */
.summary-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.summary-header h1 {
  margin: 0;
  font-size: 2rem;
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

/* Score card */
.score-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.score-card.is-passing {
  background-color: #f0fdf4;
  border: 2px solid #10b981;
}

.score-card.is-failing {
  background-color: #fef2f2;
  border: 2px solid #ef4444;
}

.score-circle {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.is-passing .score-circle {
  background-color: #d1fae5;
}

.is-failing .score-circle {
  background-color: #fee2e2;
}

.score-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.is-passing .score-value {
  color: #059669;
}

.is-failing .score-value {
  color: #dc2626;
}

.score-details {
  flex: 1;
}

.score-fraction {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.score-status {
  margin: 0;
  font-size: 0.9rem;
}

.status-pass {
  color: #059669;
}

.status-fail {
  color: #dc2626;
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
  border-left-color: #ef4444;
  background-color: #fef2f2;
}

.category-result.is-medium {
  border-left-color: #f59e0b;
  background-color: #fffbeb;
}

.category-result.is-good {
  border-left-color: #10b981;
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
  background-color: #ef4444;
}

.is-medium .category-fill {
  background-color: #f59e0b;
}

.is-good .category-fill {
  background-color: #10b981;
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
  color: #7c3aed;
  background-color: #f5f0ff;
  border: 2px solid #7c3aed;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.retry-button:hover {
  background-color: #ede9fe;
}

.new-session-button {
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

.new-session-button:hover {
  background-color: #6d28d9;
}
</style>