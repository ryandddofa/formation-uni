<script setup>
    import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
    
    const props = defineProps({
      // Durée totale en minutes
      duration: {
        type: Number,
        default: 90
      },
      // Démarrer automatiquement
      autoStart: {
        type: Boolean,
        default: true
      },
      // Temps de départ (timestamp) - optionnel, pour reprendre un timer
      startTime: {
        type: Number,
        default: null
      }
    })
    
    const emit = defineEmits(['time-up', 'tick'])
    
    // État
    const isRunning = ref(false)
    const elapsedMs = ref(0)
    const intervalId = ref(null)
    const internalStartTime = ref(null)
    
    // Durée totale en ms
    const durationMs = computed(() => props.duration * 60 * 1000)
    
    // Temps restant en ms
    const remainingMs = computed(() => {
      return Math.max(0, durationMs.value - elapsedMs.value)
    })
    
    // Temps restant formaté (MM:SS)
    const remainingFormatted = computed(() => {
      const totalSeconds = Math.ceil(remainingMs.value / 1000)
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    })
    
    // Progression (0-100)
    const progress = computed(() => {
      if (durationMs.value === 0) return 100
      return Math.round((elapsedMs.value / durationMs.value) * 100)
    })
    
    // Est-ce que le temps est presque écoulé ? (moins de 5 minutes)
    const isWarning = computed(() => {
      return remainingMs.value <= 5 * 60 * 1000 && remainingMs.value > 1 * 60 * 1000
    })
    
    // Est-ce que le temps est critique ? (moins de 1 minute)
    const isCritical = computed(() => {
      return remainingMs.value <= 1 * 60 * 1000 && remainingMs.value > 0
    })
    
    // Est-ce que le temps est écoulé ?
    const isTimeUp = computed(() => {
      return remainingMs.value <= 0
    })
    
    // ============================================
    // MÉTHODES
    // ============================================
    
    function start() {
      if (isRunning.value) return
      
      internalStartTime.value = props.startTime || Date.now()
      isRunning.value = true
      
      intervalId.value = setInterval(() => {
        elapsedMs.value = Date.now() - internalStartTime.value
        emit('tick', remainingMs.value)
        
        if (remainingMs.value <= 0) {
          stop()
          emit('time-up')
        }
      }, 1000)
    }
    
    function stop() {
      if (intervalId.value) {
        clearInterval(intervalId.value)
        intervalId.value = null
      }
      isRunning.value = false
    }
    
    function reset() {
      stop()
      elapsedMs.value = 0
      internalStartTime.value = null
    }
    
    // ============================================
    // LIFECYCLE
    // ============================================
    
    onMounted(() => {
      if (props.autoStart) {
        start()
      }
    })
    
    onUnmounted(() => {
      stop()
    })
    
    // Si startTime change (reprise), recalculer
    watch(() => props.startTime, (newStartTime) => {
      if (newStartTime && isRunning.value) {
        elapsedMs.value = Date.now() - newStartTime
      }
    })
    
    // Exposer les méthodes pour le parent
    defineExpose({
      start,
      stop,
      reset,
      remainingMs
    })
    </script>
    
    <template>
      <div 
        class="tecfee-timer"
        :class="{
          'is-warning': isWarning,
          'is-critical': isCritical,
          'is-time-up': isTimeUp
        }"
      >
        <div class="timer-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        <span class="timer-value">{{ remainingFormatted }}</span>
      </div>
    </template>
    
    <style scoped>
    .tecfee-timer {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.75rem;
      background-color: #f3f4f6;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #374151;
      transition: all 0.3s ease;
    }
    
    .timer-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .timer-value {
      font-variant-numeric: tabular-nums;
    }
    
    /* Warning : moins de 5 minutes */
    .tecfee-timer.is-warning {
      background-color: #fef3c7;
      color: #d97706;
    }
    
    /* Critical : moins de 1 minute */
    .tecfee-timer.is-critical {
      background-color: #fee2e2;
      color: #dc2626;
      animation: pulse 1s ease-in-out infinite;
    }
    
    /* Time up */
    .tecfee-timer.is-time-up {
      background-color: #dc2626;
      color: white;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
    </style>