import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { categories } from '@/data/categories.js'
import { templates as ppAvoirTemplates } from '@/data/templates/participe-passe-avoir.js'
import { templates as ppEtreTemplates } from '@/data/templates/participe-passe-etre.js'
import { templates as homophonesTemplates } from '@/data/templates/homophones-grammaticaux.js'
import { templates as conjugaisonTemplates } from '@/data/templates/conjugaison.js'
import { templates as confusionsTemplates } from '@/data/templates/confusions-frequentes.js'
import { templates as accordsTemplates } from '@/data/templates/accords-particuliers.js'
import { generateExercise } from '@/generators/exerciseGenerator.js'
import { pickRandom, pickRandomWeighted, shuffleArray } from '@/utils/randomUtils.js'

export const useExerciseStore = defineStore('exercise', () => {
  // ============================================
  // STATE
  // ============================================
  
  const allCategories = ref(categories)
  
  // Templates par catégorie
  const templatesByCategory = ref({
    'participe-passe-avoir': ppAvoirTemplates,
    'participe-passe-etre': ppEtreTemplates,
    'homophones-grammaticaux': homophonesTemplates,
    'conjugaison': conjugaisonTemplates,
    'confusions-frequentes': confusionsTemplates,
    'accords-particuliers': accordsTemplates
  })

  // ============================================
  // GETTERS
  // ============================================
  
  const enabledCategories = computed(() => {
    return allCategories.value.filter(c => c.enabled)
  })
  
  const availableCategoryIds = computed(() => {
    return Object.keys(templatesByCategory.value)
  })

  // ============================================
  // ACTIONS
  // ============================================
  
  function generateRandomExercise(selectedCategoryIds) {
    const availableCategories = allCategories.value.filter(
      c => selectedCategoryIds.includes(c.id) && templatesByCategory.value[c.id]
    )
    
    if (availableCategories.length === 0) {
      console.error('Aucune catégorie disponible')
      return null
    }
    
    const category = pickRandomWeighted(availableCategories, 'weight')
    const templates = templatesByCategory.value[category.id]
    
    if (!templates || templates.length === 0) {
      console.error(`Aucun template pour la catégorie ${category.id}`)
      return null
    }
    
    const template = pickRandom(templates)
    return generateExercise(template, category)
  }
  
  function generateSession(selectedCategoryIds, exerciseCount) {
    const exercises = []
    const usedTemplateIds = new Set()
    
    const availableTemplates = []
    
    for (const catId of selectedCategoryIds) {
      const category = allCategories.value.find(c => c.id === catId)
      const templates = templatesByCategory.value[catId]
      
      if (category && templates) {
        for (const template of templates) {
          availableTemplates.push({
            template,
            category,
            weight: category.weight || 1
          })
        }
      }
    }
    
    const shuffledTemplates = shuffleArray([...availableTemplates])
    
    let templateIndex = 0
    let attempts = 0
    const maxAttempts = exerciseCount * 3
    
    while (exercises.length < exerciseCount && attempts < maxAttempts) {
      attempts++
      
      if (templateIndex >= shuffledTemplates.length) {
        if (usedTemplateIds.size >= availableTemplates.length) {
          usedTemplateIds.clear()
          templateIndex = 0
          shuffleArray(shuffledTemplates)
        } else {
          templateIndex = 0
        }
      }
      
      const { template, category } = shuffledTemplates[templateIndex]
      templateIndex++
      
      if (usedTemplateIds.has(template.id)) {
        continue
      }
      
      const exercise = generateExercise(template, category)
      
      if (exercise) {
        exercises.push(exercise)
        usedTemplateIds.add(template.id)
      }
    }
    
    return shuffleArray(exercises)
  }
  
  function getTemplateCountByCategory() {
    const counts = {}
    for (const [catId, templates] of Object.entries(templatesByCategory.value)) {
      counts[catId] = templates.length
    }
    return counts
  }
  
  function getCategoriesWithAvailability() {
    return allCategories.value.map(cat => ({
      ...cat,
      available: !!templatesByCategory.value[cat.id],
      templateCount: templatesByCategory.value[cat.id]?.length || 0
    }))
  }

  // ============================================
  // RETURN
  // ============================================
  
  return {
    allCategories,
    templatesByCategory,
    enabledCategories,
    availableCategoryIds,
    generateRandomExercise,
    generateSession,
    getCategoriesWithAvailability,
    getTemplateCountByCategory
  }
})