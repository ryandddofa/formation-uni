<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'
import HomeScreen from '@/components/HomeScreen.vue'
import HomeScreenTecfee from '@/components/HomeScreenTecfee.vue'
import ExerciseScreen from '@/components/ExerciseScreen.vue'
import TecfeeExerciseScreen from '@/components/TecfeeExerciseScreen.vue'
import SessionSummary from '@/components/SessionSummary.vue'
import TecfeeSummary from '@/components/TecfeeSummary.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ModeIndicator from '@/components/ModeIndicator.vue'
import ModeNavArrow from '@/components/ModeNavArrow.vue'
import { useSessionStore } from '@/stores/sessionStore.js'
import { useTecfeeStore } from '@/stores/tecfeeStore.js'

const { initTheme } = useTheme()
const sessionStore = useSessionStore()
const tecfeeStore = useTecfeeStore()

const currentScreen = ref('home')
const currentMode = ref('classic') // 'classic' ou 'tecfee'

// GESTION DU RETOUR ARRIÈRE
function handlePopState() {
  currentScreen.value = 'home'
  sessionStore.endSession()
  tecfeeStore.endSession()
  window.history.pushState({ screen: 'home', mode: currentMode.value }, '', '/')
}

// ============================================
// MODE SWITCHING
// ============================================

function changeMode(mode) {
  currentMode.value = mode
}

// ============================================
// HANDLERS CLASSIQUE
// ============================================

function handleStartSession(exercises) {
  sessionStore.startSession(exercises)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: currentMode.value }, '', '/')
}

function handleSessionComplete() {
  currentScreen.value = 'summary'
  window.history.pushState({ screen: 'summary', mode: currentMode.value }, '', '/')
}

function handleNewSession() {
  currentScreen.value = 'home'
}

function handleQuitSession() {
  sessionStore.endSession()
  tecfeeStore.endSession()
  currentScreen.value = 'home'
}

function handleRetryFailed(failedExercises) {
  sessionStore.startRetrySession(failedExercises)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: currentMode.value }, '', '/')
}

// ============================================
// HANDLERS TECFÉE
// ============================================

function handleTecfeeStartSession(mode) {
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: 'tecfee' }, '', '/')
}

function handleTecfeeSessionComplete() {
  currentScreen.value = 'summary'
  window.history.pushState({ screen: 'summary', mode: 'tecfee' }, '', '/')
}

function handleTecfeeRetryFailed() {
  const failed = tecfeeStore.failedQuestions
  tecfeeStore.startRetrySession(failed)
  currentScreen.value = 'exercise'
  window.history.pushState({ screen: 'exercise', mode: 'tecfee' }, '', '/')
}

onMounted(() => {
  initTheme()
  window.addEventListener('popstate', handlePopState)
})

onUnmounted(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>

<template>
  <div id="app-container">
    <ThemeToggle />
    
    <!-- Mode indicator (seulement sur home) -->
    <ModeIndicator 
      v-if="currentScreen === 'home'"
      :current-mode="currentMode"
      @change-mode="changeMode"
    />
    
    <!-- Home screens avec navigation -->
    <div v-if="currentScreen === 'home'" class="home-wrapper">
      <!-- Flèche gauche (vers classique) -->
      <ModeNavArrow 
        v-if="currentMode === 'tecfee'"
        direction="left"
        label="Classique"
        @click="changeMode('classic')"
      />
      
      <!-- Home classique -->
      <HomeScreen 
        v-if="currentMode === 'classic'"
        @start-session="handleStartSession"
      />
      
      <!-- Home TECFÉE -->
      <HomeScreenTecfee
        v-else-if="currentMode === 'tecfee'"
        @start-session="handleTecfeeStartSession"
      />
      
      <!-- Flèche droite (vers TECFÉE) -->
      <ModeNavArrow 
        v-if="currentMode === 'classic'"
        direction="right"
        label="TECFÉE"
        @click="changeMode('tecfee')"
      />
    </div>
    
    <!-- Exercise screens -->
    <ExerciseScreen
      v-else-if="currentScreen === 'exercise' && currentMode === 'classic'"
      @session-complete="handleSessionComplete"
      @quit-session="handleQuitSession"
    />
    
    <TecfeeExerciseScreen
      v-else-if="currentScreen === 'exercise' && currentMode === 'tecfee'"
      @session-complete="handleTecfeeSessionComplete"
      @quit-session="handleQuitSession"
    />
    
    <!-- Summary screens -->
    <SessionSummary
      v-else-if="currentScreen === 'summary' && currentMode === 'classic'"
      @new-session="handleNewSession"
      @retry-failed="handleRetryFailed"
    />
    
    <TecfeeSummary
      v-else-if="currentScreen === 'summary' && currentMode === 'tecfee'"
      @new-session="handleNewSession"
      @retry-failed="handleTecfeeRetryFailed"
    />
  </div>
  <p class="footer">Fait par <a class="footerlink" href="https://ryandufault.com" target="_blank">Ryan Dufault</a>.</p>
</template>

<style>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.home-wrapper {
  position: relative;
}

button {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono",
  "Courier New", monospace;
}

.footer, .footer a {
  margin-top: 5em;
  color: #333;
  font-size: 0.85rem;
  transition: color 0.5s;
}
.footer:visited a {
  color: inherit;
}

.footer:hover a {
  color: #000;
}

/* ============================================
   MODE SOMBRE - INVERT
   ============================================ */

html.dark-mode {
  filter: invert(1) hue-rotate(180deg);
  background-color: #fff;
}

html.dark-mode .no-invert,
html.dark-mode img,
html.dark-mode video,
html.dark-mode picture,
html.dark-mode [style*="background-image"] {
  filter: invert(1) hue-rotate(180deg);
}

/* ============================================
   RESPONSIVE - Scaling proportionnel
   Base de référence : 1600x900
   ============================================ */

@media (min-width: 768px) and (max-width: 1024px) {
    html {
        font-size: 115%;
    }
}

@media (min-width: 1800px) and (max-width: 2400px) {
    html {
        font-size: 110%;
    }

    #app {
        max-width: 1250px;
    }
}

@media (min-width: 2400px) and (max-width: 3200px) {
    html {
        font-size: 140%;
    }

    #app {
        min-width: 1550px !important;
    }

    .exercise-screen {
      max-width: 2140px !important;
    }

    .home-screen,
    .home-screen-tecfee {
      min-width: 1024px !important;
    }

    .exercise-center {
      min-width: 1024px !important;
    }

    .session-summary {
      min-width: 1024px !important;
    }

    input[type="checkbox"],
    input[type="radio"] {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform-origin: 0 0; 
    }
}

@media (min-width: 3200px) {
    html {
        font-size: 200%;
    }

    #app {
        min-width: 3200px !important;
    }

    .exercise-screen {
      max-width: 4200px !important;
    }

    .home-screen,
    .home-screen-tecfee {
      min-width: 1400px !important;
    }

    .exercise-center {
      min-width: 1400px !important;
    }

    .session-summary {
      min-width: 1400px !important;
    }

    input[type="checkbox"],
    input[type="radio"] {
      transform: scale(1.75);
      -webkit-transform: scale(1.75);
      -moz-transform: scale(1.75);
      -ms-transform: scale(1.75);
      transform-origin: 0 0; 
    }
}
</style>