<script setup>
  import { ref, computed } from 'vue'
  import { useTecfeeStore } from '@/stores/tecfeeStore.js'
  
  const emit = defineEmits(['start-session', 'change-mode'])
  
  const tecfeeStore = useTecfeeStore()
  
  // Catégories TECFÉE
  const tecfeeCategories = ref([
    {
      id: 'orthographe-grammaticale',
      name: 'Orthographe grammaticale',
      description: 'Accords, conjugaison, homophones, morphologie',
      questionCount: 26,
      available: true,
      enabled: true
    },
    {
      id: 'syntaxe-ponctuation',
      name: 'Syntaxe et ponctuation',
      description: 'Construction des phrases, emploi des pronoms, prépositions, modes et temps',
      questionCount: 13,
      available: true,
      enabled: true
    },
    {
      id: 'orthographe-lexicale',
      name: 'Orthographe lexicale',
      description: 'Orthographe des mots, consonnes doubles, accents',
      questionCount: 4,
      available: true,
      enabled: true
    },
    {
      id: 'vocabulaire',
      name: 'Vocabulaire',
      description: 'Définitions, expressions, préfixes/suffixes, anglicismes, impropriétés',
      questionCount: 17,
      available: true,
      enabled: true
    }
  ])
  
  // Catégories sélectionnées
  const selectedCategories = ref(
    tecfeeCategories.value
      .filter(c => c.available && c.enabled)
      .map(c => c.id)
  )
  
  // Mode d'exercice
  const exerciseMode = ref('practice') // 'practice' ou 'exam'
  
  // Nombre de questions en mode pratique
  const questionCount = ref(20)
  const questionCountOptions = [10, 20, 30, 40, 60]
  
  // Total des questions sélectionnées
  const totalSelectedQuestions = computed(() => {
    return tecfeeCategories.value
      .filter(c => selectedCategories.value.includes(c.id))
      .reduce((sum, c) => sum + c.questionCount, 0)
  })
  
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
    
    if (exerciseMode.value === 'exam') {
      tecfeeStore.startExamSession()
    } else {
      tecfeeStore.startPracticeSession(selectedCategories.value, questionCount.value)
    }
    
    emit('start-session', exerciseMode.value)
  }
  </script>
  
  <template>
    <div class="home-screen-tecfee">
      <div class="header">
        <h1>adptfr : TECFÉE</h1>
      </div>
      <p class="subtitle">Section dédiée aux étudiants universitaires et futurs enseignants.<br><br>Préparation au Test de certification en français écrit pour l'enseignement.<br><br>Le test comprend <strong>60 questions</strong> à choix multiples avec un seuil de réussite de <strong>70%</strong>.</p>
      
      <!-- Info TECFÉE -->
      <div class="tecfee-info">
        <p>En savoir plus sur le TECFÉE : <a href="https://cefranc.csspi.ca/tecfee.php" target="_blank">cefranc.csspi.ca/tecfee</a></p>
      </div>
      
      <!-- Mode d'exercice -->
      <section class="mode-section">
        <h2>Mode</h2>
        <div class="mode-options">
          <label class="mode-option" :class="{ 'is-selected': exerciseMode === 'practice' }">
            <input type="radio" v-model="exerciseMode" value="practice" />
            <span class="mode-info">
              <span class="mode-name">Pratique libre</span>
              <span class="mode-description">Choisissez les catégories et le nombre de questions</span>
            </span>
          </label>
          <label class="mode-option" :class="{ 'is-selected': exerciseMode === 'exam' }">
            <input type="radio" v-model="exerciseMode" value="exam" />
            <span class="mode-info">
              <span class="mode-name">Simulation d'examen</span>
              <span class="mode-description">60 questions, 90 minutes, conditions réelles</span>
            </span>
          </label>
        </div>
      </section>
      
      <!-- Catégories (seulement en mode pratique) -->
      <section v-if="exerciseMode === 'practice'" class="categories-section">
        <h2>Catégories</h2>
        <p class="section-description">Répartition officielle du TECFÉE :</p>
        
        <div class="categories-list">
          <label
            v-for="category in tecfeeCategories"
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
              <span class="category-header">
                <span class="category-name">{{ category.name }}</span>
                <span class="category-count">{{ category.questionCount }} questions</span>
              </span>
              <span class="category-description">{{ category.description }}</span>
            </span>
          </label>
        </div>
      </section>
      
      <!-- Paramètres (seulement en mode pratique) -->
      <section v-if="exerciseMode === 'practice'" class="settings-section">
        <h2>Paramètres</h2>
        <div class="setting-item">
          <label for="question-count">Nombre de questions :</label>
          <select id="question-count" v-model="questionCount">
            <option v-for="count in questionCountOptions" :key="count" :value="count">
              {{ count }}
            </option>
          </select>
        </div>
      </section>
      
      <!-- Résumé examen (seulement en mode examen) -->
      <section v-if="exerciseMode === 'exam'" class="exam-summary">
        <h2>Simulation d'examen</h2>
        <div class="exam-details">
          <div class="exam-detail">
            <span class="detail-value">60</span>
            <span class="detail-label">Questions</span>
          </div>
          <div class="exam-detail">
            <span class="detail-value">90</span>
            <span class="detail-label">Minutes</span>
          </div>
          <div class="exam-detail">
            <span class="detail-value">70%</span>
            <span class="detail-label">Seuil</span>
          </div>
        </div>
        <p class="exam-note">Les questions seront réparties selon la pondération officielle du TECFÉE.</p>
      </section>
      
      <button
        class="start-button"
        :disabled="!canStart"
        @click="startSession"
      >
        {{ exerciseMode === 'exam' ? 'Commencer l\'examen' : 'Commencer la pratique' }}
      </button>
    </div>
  </template>
  
  <style scoped>
  .home-screen-tecfee {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .header {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
  }
  
  h1 {
    font-size: 3em;
    margin: 0;
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
  
  .tecfee-info {
    background-color: #f8f5fc;
    border-left: 4px solid #7c3aed;
    padding: 1rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .tecfee-info p {
    margin: 0;
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
  
  /* Mode selection */
  .mode-section {
    margin-bottom: 2rem;
  }
  
  .mode-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .mode-option {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
  }
  
  .mode-option:hover {
    border-color: #999;
  }
  
  .mode-option.is-selected {
    border-color: #7c3aed;
    background-color: #f5f0ff;
  }
  
  .mode-option input[type="radio"] {
    margin-top: 0.2rem;
    accent-color: #7c3aed;
  }
  
  .mode-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .mode-name {
    font-weight: 500;
  }
  
  .mode-description {
    font-size: 0.85rem;
    color: #666;
  }
  
  /* Categories */
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
    border-color: #7c3aed;
    background-color: #f5f0ff;
  }
  
  .category-item.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .category-item input[type="checkbox"] {
    margin-top: 0.2rem;
    accent-color: #7c3aed;
  }
  
  .category-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }
  
  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .category-name {
    font-weight: 500;
  }
  
  .category-count {
    font-size: 0.8rem;
    color: #7c3aed;
    background-color: #ede9fe;
    padding: 0.15rem 0.5rem;
    border-radius: 50px;
  }
  
  .category-description {
    font-size: 0.85rem;
    color: #666;
  }
  
  /* Settings */
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
    font-family: inherit;
  }
  
  /* Exam summary */
  .exam-summary {
    margin-bottom: 2rem;
  }
  
  .exam-details {
    display: flex;
    justify-content: space-around;
    padding: 1.5rem;
    background-color: #f8f5fc;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  
  .exam-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  
  .detail-value {
    font-size: 2rem;
    font-weight: 700;
    color: #7c3aed;
  }
  
  .detail-label {
    font-size: 0.85rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .exam-note {
    font-size: 0.85rem;
    color: #666;
    text-align: center;
    margin: 0;
  }
  
  /* Start button */
  .start-button {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background-color: #7c3aed;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-family: inherit;
  }
  
  .start-button:hover:not(:disabled) {
    background-color: #6d28d9;
  }
  
  .start-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  a {
    color: #7c3aed;
    transition: color 0.2s;
  }
  
  a:visited {
    color: #6d28d9;
  }
  
  a:hover {
    color: #5b21b6;
  }
  </style>