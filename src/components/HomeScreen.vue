<script setup>
import { ref, computed } from 'vue'
import { useExerciseStore } from '@/stores/exerciseStore.js'

const emit = defineEmits(['start-session', 'change-mode'])

const exerciseStore = useExerciseStore()

// Catégories avec leur disponibilité
const categories = computed(() => exerciseStore.getCategoriesWithAvailability())

// Catégories sélectionnées par l'utilisateur
const selectedCategories = ref(
  categories.value
    .filter(c => c.available && c.enabled)
    .map(c => c.id)
)

// Nombre d'exercices
const exerciseCount = ref(10)
const exerciseCountOptions = [5, 10, 15, 20]

// Vérifie si on peut démarrer
const canStart = computed(() => {
  return selectedCategories.value.length > 0
})

// Toggle une catégorie
function toggleCategory(categoryId) {
  const index = selectedCategories.value.indexOf(categoryId)
  if (index === -1) {
    selectedCategories.value.push(categoryId)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

// Démarrer la session
function startSession() {
  if (!canStart.value) return
  
  const exercises = exerciseStore.generateSession(
    selectedCategories.value,
    exerciseCount.value
  )
  
  emit('start-session', exercises)
}
</script>

<template>
  <div class="home-screen">
    <h1>adptfr</h1>
    <p class="subtitle">Perfectionnez votre français écrit</p>
    
    <section class="categories-section">
      <h2>Catégories</h2>
      <p class="section-description">Sélectionnez les types d'exercices à pratiquer :</p>
      
      <div class="categories-list">
        <label
          v-for="category in categories"
          :key="category.id"
          class="category-item"
          :class="{
            'is-selected': selectedCategories.includes(category.id),
            'is-disabled': !category.available
          }"
        >
          <input
            type="checkbox"
            :checked="selectedCategories.includes(category.id)"
            :disabled="!category.available"
            @change="toggleCategory(category.id)"
          />
          <span class="category-info">
            <span class="category-name">{{ category.name }}</span>
            <span class="category-description">{{ category.description }}</span>
            <span v-if="!category.available" class="category-unavailable">
              (bientôt disponible)
            </span>
          </span>
        </label>
      </div>
    </section>
    
    <section class="settings-section">
      <h2>Paramètres</h2>
      
      <div class="setting-item">
        <label for="exercise-count">Nombre d'exercices :</label>
        <select id="exercise-count" v-model="exerciseCount">
          <option v-for="count in exerciseCountOptions" :key="count" :value="count">
            {{ count }}
          </option>
        </select>
      </div>
    </section>
    
    <button
      class="start-button"
      :disabled="!canStart"
      @click="startSession"
    >
      Commencer la session
    </button>
    
    <p v-if="!canStart" class="warning">
      Veuillez sélectionner au moins une catégorie.
    </p>
  </div>
</template>

<style scoped>
.home-screen {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 0.25rem;
  font-size: 3em;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.categories-section {
  margin-bottom: 2rem;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}

.category-item:hover:not(.is-disabled) {
  border-color: #999;
}

.category-item.is-selected {
  border-color: #007bff;
  background-color: #f0f7ff;
}

.category-item.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.category-item input[type="checkbox"] {
  margin-top: 0.2rem;
}

.category-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category-name {
  font-weight: 500;
}

.category-description {
  font-size: 0.85rem;
  color: #666;
}

.category-unavailable {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}



.settings-section {
  margin-bottom: 2rem;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.setting-item label {
  font-weight: 500;
}

.setting-item select {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.start-button {
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
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
}

.start-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.start-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.warning {
  margin-top: 1rem;
  color: #999;
  text-align: center;
  font-size: 0.9rem;

}
</style>