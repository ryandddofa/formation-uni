<script setup>
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'

const emit = defineEmits(['new-session', 'retry-failed'])

const sessionStore = useSessionStore()

const results = computed(() => sessionStore.sessionResults)

const scorePercentage = computed(() => {
  if (results.value.total === 0) return 0
  return Math.round((results.value.correct / results.value.total) * 100)
})

const scoreClass = computed(() => {
  if (scorePercentage.value >= 80) return 'score-excellent'
  if (scorePercentage.value >= 60) return 'score-good'
  if (scorePercentage.value >= 40) return 'score-average'
  return 'score-poor'
})

const formattedDuration = computed(() => {
  const seconds = results.value.duration
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins === 0) return `${secs}s`
  return `${mins}min ${secs}s`
})

const categoryResults = computed(() => {
  return Object.values(results.value.byCategory)
})

// Catégories triées par difficulté (plus faible pourcentage = plus difficile)
const categoriesByDifficulty = computed(() => {
  const cats = Object.values(results.value.byCategory)
  
  // Calculer le pourcentage pour chaque catégorie
  const withPercentage = cats.map(cat => ({
    ...cat,
    percentage: cat.total > 0 ? Math.round((cat.correct / cat.total) * 100) : 100
  }))
  
  // Trier par pourcentage croissant (plus difficile en premier)
  return withPercentage.sort((a, b) => a.percentage - b.percentage)
})

// Catégories où l'utilisateur a eu des difficultés (< 70%)
const difficultCategories = computed(() => {
  return categoriesByDifficulty.value.filter(cat => cat.percentage < 70)
})

// Catégories maîtrisées (>= 70%)
const masteredCategories = computed(() => {
  return categoriesByDifficulty.value.filter(cat => cat.percentage >= 70)
})

const failedExercises = computed(() => sessionStore.getFailedExercises())

function startNewSession() {
  sessionStore.endSession()
  emit('new-session')
}

function retryFailed() {
  emit('retry-failed', failedExercises.value)
}

function getDifficultyClass(percentage) {
  if (percentage >= 80) return 'difficulty-easy'
  if (percentage >= 60) return 'difficulty-medium'
  if (percentage >= 40) return 'difficulty-hard'
  return 'difficulty-very-hard'
}

function getDifficultyIcon(percentage) {
  if (percentage >= 80) return '✓'
  if (percentage >= 60) return '~'
  if (percentage >= 40) return '!'
  return '!!'
}
</script>

<template>
  <div class="session-summary">
    <h2>Session terminée !</h2>
    
    <!-- Score principal -->
    <div class="score-section" :class="scoreClass">
      <div class="score-circle">
        <span class="score-value">{{ scorePercentage }}%</span>
      </div>
      <p class="score-detail">
        {{ results.correct }} / {{ results.total }} correct{{ results.correct > 1 ? 's' : '' }}
      </p>
    </div>
    
    <!-- Statistiques -->
    <div class="stats-section">
      <div class="stat-item">
        <span class="stat-label">Temps</span>
        <span class="stat-value">{{ formattedDuration }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Indices utilisés</span>
        <span class="stat-value">{{ results.totalHintsUsed }}</span>
      </div>
    </div>
    
    <!-- Points à améliorer -->
    <div v-if="difficultCategories.length > 0" class="difficulty-section">
      <h3>- À réviser</h3>
      <div class="category-list">
        <div
          v-for="cat in difficultCategories"
          :key="cat.id"
          class="category-item"
          :class="getDifficultyClass(cat.percentage)"
        >
          <div class="category-info">
            <span class="difficulty-icon">{{ getDifficultyIcon(cat.percentage) }}</span>
            <span class="category-name">{{ cat.name }}</span>
          </div>
          <div class="category-stats">
            <span class="category-score">{{ cat.correct }}/{{ cat.total }}</span>
            <span class="category-percentage">{{ cat.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Points maîtrisés -->
    <div v-if="masteredCategories.length > 0" class="mastered-section">
      <h3>- Maîtrisé{{ masteredCategories.length > 1 ? 's' : '' }}</h3>
      <div class="category-list compact">
        <div
          v-for="cat in masteredCategories"
          :key="cat.id"
          class="category-item mastered"
        >
          <span class="category-name">{{ cat.name }}</span>
          <span class="category-percentage">{{ cat.percentage }}%</span>
        </div>
      </div>
    </div>
    
    <!-- Message d'encouragement -->
    <div class="encouragement">
      <p v-if="scorePercentage >= 80">
        🎉 Excellent travail ! Tu maîtrises bien ces notions.
      </p>
      <p v-else-if="scorePercentage >= 60">
        👍 Bon travail ! Continue à t'entraîner sur les points à réviser.
      </p>
      <p v-else-if="scorePercentage >= 40">
        💪 C'est un bon début ! Revois les catégories difficiles et réessaie.
      </p>
      <p v-else>
        📖 Ces notions demandent plus de pratique. N'hésite pas à utiliser les indices !
      </p>
    </div>
    
    <!-- Actions -->
    <div class="actions">
      <button class="action-button primary" @click="startNewSession">
        Retour au menu
      </button>
      <button
        v-if="failedExercises.length > 0"
        class="action-button secondary"
        @click="retryFailed"
      >
        Retravailler les erreurs ({{ failedExercises.length }})
      </button>
    </div>
  </div>
</template>

<style scoped>
.session-summary {
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #333;
}

.score-section {
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.score-section.score-excellent {
  background-color: #d4edda;
}

.score-section.score-good {
  background-color: #d1ecf1;
}

.score-section.score-average {
  background-color: #fff3cd;
}

.score-section.score-poor {
  background-color: #f8d7da;
}

.score-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.score-value {
  font-size: 1.75rem;
  font-weight: bold;
}

.score-excellent .score-value { color: #155724; }
.score-good .score-value { color: #0c5460; }
.score-average .score-value { color: #856404; }
.score-poor .score-value { color: #721c24; }

.score-detail {
  font-size: 1.1rem;
  margin: 0;
}

.stats-section {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-label {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Sections de difficulté */
.difficulty-section {
  margin-bottom: 1.5rem;
}

.difficulty-section h3 {
  font-weight: 400;
}

.mastered-section {
  margin-bottom: 1.5rem;
}

.mastered-section h3 {
  font-weight: 400;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-list.compact {
  gap: 0.35rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 4px;
  border-left: 4px solid transparent;
}

.category-item.difficulty-very-hard {
  background-color: #f8d7da;
  border-left-color: #dc3545;
}

.category-item.difficulty-hard {
  background-color: #fff3cd;
  border-left-color: #ffc107;
}

.category-item.difficulty-medium {
  background-color: #d1ecf1;
  border-left-color: #17a2b8;
}

.category-item.difficulty-easy,
.category-item.mastered {
  background-color: #d4edda;
  border-left-color: #28a745;
}

.category-item.mastered {
  padding: 0.5rem 0.75rem;
}

.category-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.difficulty-icon {
  font-weight: bold;
  width: 1.5rem;
  text-align: center;
}

.difficulty-very-hard .difficulty-icon {
  color: #dc3545;
}

.difficulty-hard .difficulty-icon {
  color: #856404;
}

.difficulty-medium .difficulty-icon {
  color: #0c5460;
}

.category-name {
  font-weight: 500;
}

.category-stats {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-score {
  color: #666;
  font-size: 0.9rem;
}

.category-percentage {
  font-weight: 600;
  min-width: 3rem;
  text-align: right;
}

.difficulty-very-hard .category-percentage {
  color: #dc3545;
}

.difficulty-hard .category-percentage {
  color: #856404;
}

.difficulty-medium .category-percentage {
  color: #0c5460;
}

.difficulty-easy .category-percentage,
.mastered .category-percentage {
  color: #155724;
}

/* Message d'encouragement */
.encouragement {
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.encouragement p {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-button {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-button.primary {
  color: white;
  background-color: #007bff;
}

.action-button.primary:hover {
  background-color: #0056b3;
}

.action-button.secondary {
  color: #333;
  background-color: #e9ecef;
}

.action-button.secondary:hover {
  background-color: #dde0e3;
}
</style>