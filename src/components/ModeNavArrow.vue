<script setup>
defineProps({
  direction: {
    type: String,
    default: 'right' // 'left' ou 'right'
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button 
    class="mode-nav-arrow" 
    :class="direction"
    @click="emit('click')"
    :title="label"
  >
    <span class="arrow-icon">
      <svg v-if="direction === 'right'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </span>
  </button>
</template>

<style scoped>
.mode-nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.mode-nav-arrow:hover {
  color: #007bff;
  border-color: #007bff;
  background-color: #f0f7ff;
}

.mode-nav-arrow.left {
  left: -60px;
}

.mode-nav-arrow.right {
  right: -60px;
}

.arrow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.mode-nav-arrow.right .arrow-label {
  transform: rotate(0deg);
}
</style>