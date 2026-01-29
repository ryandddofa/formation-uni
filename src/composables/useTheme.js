import { ref } from 'vue'

const isDarkMode = ref(false)

function initTheme() {
  const saved = localStorage.getItem('darkMode')
  if (saved === 'true') {
    isDarkMode.value = true
    applyTheme()
  }
}

function applyTheme() {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-mode')
  } else {
    document.documentElement.classList.remove('dark-mode')
  }
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  applyTheme()
}

export function useTheme() {
  return {
    isDarkMode,
    toggleDarkMode,
    initTheme
  }
}