<script setup>
import { computed } from 'vue'
import { useSessionStore } from '@/stores/sessionStore.js'

const sessionStore = useSessionStore()

const progress = computed(() => sessionStore.progress)
const answers = computed(() => sessionStore.answers)
const totalExercises = computed(() => sessionStore.exercises.length)
const currentIndex = computed(() => sessionStore.currentIndex)

// Générer les états de chaque point
const dots = computed(() => {
  const result = []
  for (let i = 0; i < totalExercises.value; i++) {
    let status = 'pending' // pas encore fait
    
    if (i < currentIndex.value) {
      // Exercice terminé
      const answer = answers.value[i]
      if (answer) {
        status = answer.correct ? 'correct' : 'incorrect'
      }
    } else if (i === currentIndex.value) {
      status = 'current'
    }
    
    result.push({ index: i, status })
  }
  return result
})
</script>

<template>
  <div class="session-progress">
    <div class="progress-text">
      Exercice {{ progress.current }} / {{ progress.total }}
    </div>
    <div class="progress-dots">
      <div
        v-for="dot in dots"
        :key="dot.index"
        class="dot"
        :class="dot.status"
        :title="`Exercice ${dot.index + 1}`"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.session-progress {
  margin-bottom: 1.5rem;
}

.progress-text {
  text-align: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #666;
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background-color: transparent;
  transition: all 0.3s ease;
}

.dot.pending {
  border-color: #ddd;
  background-color: transparent;
}

.dot.current {
  border-color: #007bff;
  background-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

.dot.correct {
  border-color: #28a745;
  background-color: #28a745;
}

.dot.incorrect {
  border-color: #dc3545;
  background-color: #dc3545;
}
</style>