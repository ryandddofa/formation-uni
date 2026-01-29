<script setup>
import { useTheme } from '@/composables/useTheme.js'

const { isDarkMode, toggleDarkMode } = useTheme()
</script>

<template>
  <button 
    class="theme-toggle no-invert" 
    :class="{ 'is-dark': isDarkMode }"
    @click="toggleDarkMode"
    :title="isDarkMode ? 'Mode clair' : 'Mode sombre'"
  >
    <span v-if="isDarkMode"><svg width="20px" height="20px" viewBox="0 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="🔍-Product-Icons" stroke-width="0.00024000000000000003" fill="none" fill-rule="evenodd"> <g id="ic_fluent_dark_theme_24_regular" fill="#ffffff" fill-rule="nonzero"> <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg></span>
    <span v-else><svg width="20px" height="20px" viewBox="0 -2 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="🔍-Product-Icons" stroke-width="0.00024000000000000003" fill="none" fill-rule="evenodd"> <g id="ic_fluent_dark_theme_24_regular" fill="#1f1f1f" fill-rule="nonzero"> <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg></span>
  </button>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #999;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.05s;
  z-index: 1000;
}

.theme-toggle:hover {
  transform: scale(1.02);
}

.theme-toggle.is-dark {
  background-color: #1f1f1f;
  border-color: #444;
}
</style>