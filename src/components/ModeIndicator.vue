<script setup>
defineProps({
  currentMode: {
    type: String,
    default: 'classic' // 'classic' ou 'tecfee'
  }
})

const emit = defineEmits(['change-mode'])
</script>

<template>
  <div class="mode-indicator">
    <span 
      class="dot" 
      :class="{ active: currentMode === 'classic' }"
      @click="emit('change-mode', 'classic')"
      title="Mode classique"
    ></span>
    <span 
      class="dot" 
      :class="{ active: currentMode === 'tecfee' }"
      @click="emit('change-mode', 'tecfee')"
      title="Mode TECFÉE"
    ></span>
  </div>
</template>

<style scoped>
.mode-indicator {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.dot:hover {
  transform: scale(1.2);
}

.dot.active {
  background-color: #007bff;
}
</style>