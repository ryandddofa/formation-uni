<script setup>
import { ref, computed } from 'vue'
import { formationCategories } from '@/data/formationCategories.js'
import { tempsIndicatifQuestions } from '@/data/formation/temps-indicatif-questions.js'
import { modesConjugaisonQuestions } from '@/data/formation/modes-conjugaison-questions.js'
import { attributsQuestions } from '@/data/formation/attributs-questions.js'
import { classesMotsQuestions } from '@/data/formation/classes-mots-questions.js'
import { complementDirectQuestions } from '@/data/formation/complement-direct-questions.js'


const emit = defineEmits(['start-session'])

// ============================================
// STATE
// ============================================

const selectedCategories = ref(
  formationCategories
    .filter(cat => cat.enabled)
    .map(cat => cat.id)
)

const exerciseCount = ref(15)

// ============================================
// COMPUTED
// ============================================

const canStart = computed(() => {
  return selectedCategories.value.length > 0
})

// ============================================
// METHODS
// ============================================

function toggleCategory(categoryId) {
  const index = selectedCategories.value.indexOf(categoryId)
  if (index === -1) {
    selectedCategories.value.push(categoryId)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

function startSession() {
  if (!canStart.value) return
  
  // Récupérer toutes les questions des catégories sélectionnées
  let allQuestions = []
  
  selectedCategories.value.forEach(categoryId => {
    if (categoryId === 'temps-indicatif') {
      allQuestions = allQuestions.concat(tempsIndicatifQuestions)
    }

    if (categoryId === 'modes-conjugaison') {
      allQuestions = allQuestions.concat(modesConjugaisonQuestions)
    } 

    if (categoryId === 'attributs') {
  allQuestions = allQuestions.concat(attributsQuestions)
}

if (categoryId === 'classes-mots') {
  allQuestions = allQuestions.concat(classesMotsQuestions)
} 

if (categoryId === 'complement-direct') {
  allQuestions = allQuestions.concat(complementDirectQuestions)
}
    // On ajoutera les autres catégories ici plus tard
    // if (categoryId === 'modes-conjugaison') {
    //   allQuestions = allQuestions.concat(modesConjugaisonQuestions)
    // }
  })
  
  // Mélanger les questions
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  
  // Prendre seulement le nombre demandé
  const selectedQuestions = shuffled.slice(0, exerciseCount.value)
  
  emit('start-session', selectedQuestions)
}
</script>

<template>
  <div class="home-screen">
    <h1>Formation pré-universitaire</h1>
    <p class="subtitle">
      Renforcez vos connaissances en français pour votre baccalauréat d'enseignement
    </p>
    
    <!-- Sélecteur nombre d'exercices -->
    <div class="exercise-count-section">
      <label for="exercise-count">Nombre d'exercices :</label>
      <div class="count-buttons">
        <button 
          v-for="count in [10, 15, 20, 25, 30]" 
          :key="count"
          :class="{ active: exerciseCount === count }"
          @click="exerciseCount = count"
        >
          {{ count }}
        </button>
      </div>
    </div>
    
    <!-- Catégories -->
    <div class="categories-section">
      <h2>Catégories d'exercices</h2>
      
      <div class="category-list">
        <label 
          v-for="category in formationCategories" 
          :key="category.id"
          class="category-item"
        >
          <input 
            type="checkbox"
            :checked="selectedCategories.includes(category.id)"
            @change="toggleCategory(category.id)"
          >
          <div class="category-info">
            <span class="category-name">{{ category.name }}</span>
            <span class="category-description">{{ category.description }}</span>
          </div>
        </label>
      </div>
    </div>
    
    <!-- Bouton démarrer -->
    <button 
      class="start-button"
      :disabled="!canStart"
      @click="startSession"
    >
      Commencer
    </button>
  </div>
</template>

<style scoped>
.home-screen {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

/* Exercise count */
.exercise-count-section {
  margin-bottom: 2rem;
}

.exercise-count-section label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.count-buttons {
  display: flex;
  gap: 0.5rem;
}

.count-buttons button {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.count-buttons button:hover {
  border-color: #007bff;
}

.count-buttons button.active {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}

/* Categories */
.categories-section {
  margin-bottom: 2rem;
}

.categories-section h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.category-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-item:hover {
  border-color: #007bff;
  background-color: #f8f9fa;
}

.category-item input[type="checkbox"] {
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  cursor: pointer;
}

.category-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category-name {
  font-weight: 600;
  font-size: 1rem;
}

.category-description {
  font-size: 0.85rem;
  color: #666;
}

/* Start button */
.start-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.start-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.start-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>