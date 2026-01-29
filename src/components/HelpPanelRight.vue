<script setup>
import { computed } from 'vue'
import {
  referenceConjugations,
  tenseNames,
  ppAvoirRight,
  ppEtreRight,
  getHomophonePair,
  getConfusionPair,
  getAccordPair
} from '@/data/helpContent.js'

const props = defineProps({
  category: String,
  tense: String,
  homophoneOptions: Array,
  confusionOptions: Array
})

const conjugationData = computed(() => {
  if (props.tense && referenceConjugations[props.tense]) {
    return referenceConjugations[props.tense]
  }
  return null
})

const tenseName = computed(() => {
  return tenseNames[props.tense] || ''
})

const homophonePair = computed(() => {
  if (props.homophoneOptions) {
    return getHomophonePair(props.homophoneOptions)
  }
  return null
})

const confusionPair = computed(() => {
  if (props.confusionOptions && props.category === 'confusions-frequentes') {
    return getConfusionPair(props.confusionOptions)
  }
  return null
})

const accordPair = computed(() => {
  if (props.confusionOptions && props.category === 'accords-particuliers') {
    return getAccordPair(props.confusionOptions)
  }
  return null
})
</script>

<template>
  <aside class="help-right">
    
    <!-- CONJUGAISON : Description du temps -->
    <template v-if="category === 'conjugaison' && conjugationData">
      <p class="help-label">{{ tenseName }}</p>
      <p class="help-desc">{{ conjugationData.description }}</p>
      <p class="help-usage">{{ conjugationData.usage }}</p>
    </template>

    <!-- PP AVOIR : Règles -->
    <template v-else-if="category === 'participe-passe-avoir'">
      <p class="help-label">{{ ppAvoirRight.title }}</p>
      <div v-for="rule in ppAvoirRight.rules" :key="rule.condition" class="rule-item">
        <span class="rule-condition">{{ rule.condition }}</span>
        <span class="rule-result">{{ rule.result }}</span>
        <span class="rule-example">{{ rule.example }}</span>
      </div>
    </template>

    <!-- PP ÊTRE : Règle principale -->
    <template v-else-if="category === 'participe-passe-etre'">
      <p class="help-label">{{ ppEtreRight.title }}</p>
      <p class="main-rule">{{ ppEtreRight.mainRule }}</p>
      <div v-for="ex in ppEtreRight.examples" :key="ex.sentence" class="example-item">
        <span class="ex-sentence">{{ ex.sentence }}</span>
        <span class="ex-explanation">{{ ex.explanation }}</span>
      </div>
    </template>

    <!-- HOMOPHONES : Astuce -->
    <template v-else-if="category === 'homophones-grammaticaux' && homophonePair">
      <p class="help-label">Astuce</p>
      <p class="help-test">{{ homophonePair.right.test }}</p>
      <div class="examples">
        <p v-for="(ex, i) in homophonePair.right.examples" :key="i" class="ex-line">
          {{ ex }}
        </p>
      </div>
    </template>

    <!-- CONFUSIONS : Astuce -->
    <template v-else-if="category === 'confusions-frequentes' && confusionPair">
      <p class="help-label">Astuce</p>
      <p class="help-test">{{ confusionPair.right.test }}</p>
      <div class="examples">
        <p v-for="(ex, i) in confusionPair.right.examples" :key="i" class="ex-line">
          {{ ex }}
        </p>
      </div>
    </template>

    <!-- ACCORDS : Règle -->
    <template v-else-if="category === 'accords-particuliers' && accordPair">
      <p class="help-label">Règle</p>
      <p class="help-test">{{ accordPair.right.test }}</p>
      <div class="examples">
        <p v-for="(ex, i) in accordPair.right.examples" :key="i" class="ex-line">
          {{ ex }}
        </p>
      </div>
    </template>

  </aside>
</template>

<style scoped>
.help-right {
  font-size: 0.85rem;
  color: #555;
  min-width: 160px;
  max-width: 200px;
}

.help-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.help-desc {
  color: #333;
  margin-bottom: 0.25rem;
}

.help-usage {
  color: #666;
  font-style: italic;
  line-height: 1.3;
}

/* Règles PP avoir */
.rule-item {
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.rule-condition {
  color: #333;
}

.rule-result {
  color: #28a745;
  font-weight: 500;
  margin-left: 0.25rem;
}

.rule-example {
  display: block;
  color: #888;
  font-style: italic;
  font-size: 0.8rem;
}

/* PP être */
.main-rule {
  color: #28a745;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.example-item {
  margin-bottom: 0.4rem;
}

.ex-sentence {
  color: #333;
}

.ex-explanation {
  color: #888;
  margin-left: 0.25rem;
}

/* Homophones, Confusions & Accords */
.help-test {
  color: #007bff;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.examples {
  line-height: 1.4;
}

.ex-line {
  color: #666;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
}
</style>