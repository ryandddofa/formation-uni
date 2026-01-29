<script setup>
import { computed } from 'vue'
import {
  referenceConjugations,
  pronouns,
  ppAvoirLeft,
  ppEtreLeft,
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
  <aside class="help-left">
    
    <!-- CONJUGAISON : Table -->
    <template v-if="category === 'conjugaison' && conjugationData">
      <p class="help-label">{{ conjugationData.verb }}</p>
      <table class="conj-table">
        <tr v-for="(form, i) in conjugationData.forms" :key="i">
          <td class="pronoun">{{ pronouns[i] }}</td>
          <td class="form">{{ form }}</td>
        </tr>
      </table>
    </template>

    <!-- PP AVOIR : Définitions -->
    <template v-else-if="category === 'participe-passe-avoir'">
      <p class="help-label">{{ ppAvoirLeft.title }}</p>
      <div v-for="item in ppAvoirLeft.items" :key="item.term" class="def-item">
        <span class="def-term">{{ item.term }}</span>
        <span class="def-text">{{ item.definition }}</span>
      </div>
    </template>

    <!-- PP ÊTRE : Liste des verbes -->
    <template v-else-if="category === 'participe-passe-etre'">
      <p class="help-label">{{ ppEtreLeft.title }}</p>
      <p class="mnemonic">{{ ppEtreLeft.mnemonic }}</p>
      <p class="verb-list">{{ ppEtreLeft.verbs.join(', ') }}</p>
    </template>

    <!-- HOMOPHONES : Nature des mots -->
    <template v-else-if="category === 'homophones-grammaticaux' && homophonePair">
      <p class="help-label">Nature</p>
      <div v-for="item in homophonePair.left" :key="item.word" class="homo-item">
        <span class="homo-word">{{ item.word }}</span>
        <span class="homo-nature">{{ item.nature }}</span>
      </div>
    </template>

    <!-- CONFUSIONS : Significations -->
    <template v-else-if="category === 'confusions-frequentes' && confusionPair">
      <p class="help-label">Significations</p>
      <div v-for="item in confusionPair.left" :key="item.word" class="conf-item">
        <span class="conf-word">{{ item.word }}</span>
        <span class="conf-meaning">= {{ item.meaning }}</span>
      </div>
    </template>

    <!-- ACCORDS : Formes -->
    <template v-else-if="category === 'accords-particuliers' && accordPair">
      <p class="help-label">Formes</p>
      <div v-for="item in accordPair.left" :key="item.word" class="conf-item">
        <span class="conf-word">{{ item.word }}</span>
        <span class="conf-meaning">{{ item.meaning }}</span>
      </div>
    </template>

  </aside>
</template>

<style scoped>
.help-left {
  font-size: 0.85rem;
  color: #555;
  min-width: 140px;
  max-width: 180px;
}

.help-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* Table conjugaison */
.conj-table {
  width: 100%;
  border-collapse: collapse;
}

.conj-table td {
  padding: 0.2rem 0;
}

.conj-table .pronoun {
  color: #888;
  width: 70px;
}

.conj-table .form {
  color: #007bff;
  font-weight: 500;
}

/* Définitions */
.def-item {
  margin-bottom: 0.75rem;
}

.def-term {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.1rem;
}

.def-text {
  display: block;
  color: #666;
  line-height: 1.3;
}

/* PP être */
.mnemonic {
  font-size: 0.8rem;
  color: #007bff;
  margin-bottom: 0.25rem;
}

.verb-list {
  line-height: 1.4;
  color: #666;
}

/* Homophones */
.homo-item {
  margin-bottom: 0.5rem;
}

.homo-word {
  font-weight: 600;
  color: #007bff;
  margin-right: 0.5rem;
}

.homo-nature {
  color: #666;
}

/* Confusions & Accords */
.conf-item {
  margin-bottom: 0.5rem;
}

.conf-word {
  font-weight: 600;
  color: #007bff;
  display: block;
}

.conf-meaning {
  color: #666;
}
</style>