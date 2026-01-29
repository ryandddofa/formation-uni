import { getParticipePasse, getConjugation } from '@/utils/conjugationHelper.js'
import { pickRandom } from '@/utils/randomUtils.js'
import { genderToFrench, numberToFrench } from '@/utils/textUtils.js'
import { verbNounPairs, getAvailableVerbs } from '@/data/wordLists/verbNounPairs.js'
import { verbs } from '@/data/wordLists/verbs.js'
import { adjectives } from '@/data/wordLists/adjectives.js'

/**
 * Génère un exercice à partir d'un template
 */
export function generateExercise(template, category) {
  const selectedValues = {}
  let answer = ''
  let selectedVerb = ''
  let verbInfinitive = ''
  let homophoneOptions = null
  let confusionOptions = null
  let conjugaisonInfo = null

  const blankConfig = template.variables.BLANK
  
  // Sélectionner le verbe en premier selon le type (pour PP)
  if (blankConfig && blankConfig.type === 'participe-passe') {
    if (blankConfig.verbs && Array.isArray(blankConfig.verbs)) {
      selectedVerb = pickRandom(blankConfig.verbs)
      verbInfinitive = selectedVerb
    } else if (blankConfig.list === 'transitifs') {
      const availableVerbs = getAvailableVerbs()
      selectedVerb = pickRandom(availableVerbs)
      verbInfinitive = selectedVerb
    } else if (blankConfig.list === 'auxEtre') {
      selectedVerb = pickRandom(verbs.auxEtre)
      verbInfinitive = selectedVerb
    }
    selectedValues._selectedVerb = selectedVerb
  }
  
  // Pour les homophones, la réponse est directe
  if (blankConfig && blankConfig.type === 'homophone') {
    answer = blankConfig.answer
    homophoneOptions = blankConfig.options
  }
  
  // Pour les confusions, la réponse est directe (similaire aux homophones)
  if (blankConfig && blankConfig.type === 'confusion') {
    answer = blankConfig.answer
    confusionOptions = blankConfig.options
  }
  
  // Pour la conjugaison
  if (blankConfig && blankConfig.type === 'conjugaison') {
    verbInfinitive = blankConfig.verb
    conjugaisonInfo = {
      verb: blankConfig.verb,
      tense: blankConfig.tense,
      person: blankConfig.person,
      number: blankConfig.number
    }
    
    // Obtenir la conjugaison
    answer = getConjugation(
      blankConfig.verb,
      blankConfig.tense,
      blankConfig.person,
      blankConfig.number
    )
  }

  // 1. Sélectionner les valeurs pour chaque variable
  for (const [varName, varConfig] of Object.entries(template.variables)) {
    
    // Variable de type conjugaison
    if (varConfig.type === 'conjugaison') {
      const conjugatedForm = getConjugation(
        varConfig.verb,
        varConfig.tense,
        varConfig.person,
        varConfig.number
      )
      
      selectedValues[varName] = {
        verb: varConfig.verb,
        tense: varConfig.tense,
        person: varConfig.person,
        number: varConfig.number,
        answer: conjugatedForm
      }
      
      answer = conjugatedForm
      verbInfinitive = varConfig.verb
    }
    
    // Variable de type homophone
    else if (varConfig.type === 'homophone') {
      selectedValues[varName] = {
        answer: varConfig.answer,
        options: varConfig.options
      }
      answer = varConfig.answer
      homophoneOptions = varConfig.options
    }
    
    // Variable de type confusion (similaire à homophone)
    else if (varConfig.type === 'confusion') {
      selectedValues[varName] = {
        answer: varConfig.answer,
        options: varConfig.options
      }
      answer = varConfig.answer
      confusionOptions = varConfig.options
    } 

    // Variable de type accord 
    else if (varConfig.type === 'accord') {
      selectedValues[varName] = {
        answer: varConfig.answer,
        options: varConfig.options
      }
      answer = varConfig.answer
      confusionOptions = varConfig.options // Réutilise confusionOptions
    }
    
    // Variable de type nom (pour PP avoir avec COD)
    else if (varConfig.type === 'noun') {
      const genderNumber = varConfig.list
      let nounList = null
      
      if (selectedVerb && verbNounPairs[selectedVerb]) {
        nounList = verbNounPairs[selectedVerb][genderNumber]
      }
      
      if (nounList && nounList.length > 0) {
        const selected = pickRandom(nounList)
        selectedValues[varName] = {
          word: selected.word,
          singular: selected.singular,
          gender: varConfig.gender,
          number: varConfig.number
        }
      } else {
        selectedValues[varName] = {
          word: varConfig.gender === 'F' ? 'choses' : 'trucs',
          gender: varConfig.gender,
          number: varConfig.number
        }
      }
    }
    
    // Variable de type adjectif
    else if (varConfig.type === 'adjective') {
      const adjList = adjectives.qualite
      const selected = pickRandom(adjList)
      selectedValues[varName] = {
        word: selected[varConfig.form],
        gender: varConfig.form.includes('f') ? 'F' : 'M',
        number: varConfig.form.includes('p') ? 'P' : 'S'
      }
    }
    
    // Variable de type participe passé
    else if (varConfig.type === 'participe-passe') {
      if (!selectedVerb) {
        if (varConfig.verbs && Array.isArray(varConfig.verbs)) {
          selectedVerb = pickRandom(varConfig.verbs)
        } else if (varConfig.list === 'auxEtre') {
          selectedVerb = pickRandom(verbs.auxEtre)
        } else {
          const availableVerbs = getAvailableVerbs()
          selectedVerb = pickRandom(availableVerbs)
        }
        verbInfinitive = selectedVerb
      }
      
      let gender = 'M'
      let number = 'S'
      
      if (varConfig.agreeWith && selectedValues[varConfig.agreeWith]) {
        gender = selectedValues[varConfig.agreeWith].gender
        number = selectedValues[varConfig.agreeWith].number
      } else if (varConfig.agreeGender) {
        gender = varConfig.agreeGender
        number = varConfig.agreeNumber || 'S'
      }
      
      answer = getParticipePasse(selectedVerb, gender, number, varConfig.auxiliary)
      verbInfinitive = selectedVerb
      
      selectedValues[varName] = {
        verb: selectedVerb,
        infinitive: verbInfinitive,
        answer: answer
      }
    }
    
    // Variable statique
    else if (varConfig.type === 'static') {
      selectedValues[varName] = {
        gender: varConfig.gender,
        number: varConfig.number,
        display: varConfig.display
      }
    }
    
    // Liste statique de valeurs
    else if (varConfig.type === 'static-list') {
      const selectedWord = pickRandom(varConfig.values)
      selectedValues[varName] = {
        word: selectedWord,
        gender: varConfig.gender,
        number: varConfig.number
      }
    }
  }

  // 2. Construire les phrases
  let sentenceWithBlank = template.template
  let sentenceComplete = template.template

  for (const [varName, value] of Object.entries(selectedValues)) {
    if (varName.startsWith('_')) continue
    
    const displayValue = value.word || value.display || value.verb || ''
    
    if (varName === 'BLANK') {
      if (homophoneOptions) {
        // Pour les homophones : afficher les options
        sentenceWithBlank = sentenceWithBlank.replace('{BLANK}', `_____ (${homophoneOptions.join(' / ')})`)
        sentenceComplete = sentenceComplete.replace('{BLANK}', value.answer || answer)
      } else if (confusionOptions) {
        // Pour les confusions : afficher les options
        sentenceWithBlank = sentenceWithBlank.replace('{BLANK}', `_____ (${confusionOptions.join(' / ')})`)
        sentenceComplete = sentenceComplete.replace('{BLANK}', value.answer || answer)
      } else if (conjugaisonInfo) {
        // Pour la conjugaison : afficher le verbe à l'infinitif et le temps
        const tenseName = getTenseDisplayName(conjugaisonInfo.tense)
        sentenceWithBlank = sentenceWithBlank.replace('{BLANK}', `_____ (${verbInfinitive}, ${tenseName})`)
        sentenceComplete = sentenceComplete.replace('{BLANK}', value.answer || answer)
      } else {
        // Pour les PP : afficher l'infinitif
        sentenceWithBlank = sentenceWithBlank.replace('{BLANK}', `_____ (${value.infinitive || verbInfinitive})`)
        sentenceComplete = sentenceComplete.replace('{BLANK}', value.answer || answer)
      }
    } else {
      sentenceWithBlank = sentenceWithBlank.replace(new RegExp(`\\{${varName}\\}`, 'g'), displayValue)
      sentenceComplete = sentenceComplete.replace(new RegExp(`\\{${varName}\\}`, 'g'), displayValue)
    }
  }

  // 3. Générer les indices personnalisés
  const hints = template.hints.map(hint => {
    let text = hint.text

    for (const [varName, value] of Object.entries(selectedValues)) {
      if (varName.startsWith('_')) continue
      const displayValue = value.word || value.display || value.verb || ''
      text = text.replace(new RegExp(`\\{${varName}\\}`, 'g'), displayValue)
      
      if (value.gender) {
        text = text.replace(new RegExp('\\{GENDER\\}', 'g'), genderToFrench(value.gender))
      }
      if (value.number) {
        text = text.replace(new RegExp('\\{NUMBER\\}', 'g'), numberToFrench(value.number))
      }
    }

    text = text.replace('{ANSWER_LENGTH}', String(answer.length))
    text = text.replace('{ANSWER_FIRST}', answer.charAt(0))
    text = text.replace('{ANSWER}', answer)

    return { type: hint.type, text }
  })

  // 4. Générer l'explication personnalisée
  const explanation = {
    rule: template.explanation.rule,
    analysis: template.explanation.analysis
  }

  for (const [varName, value] of Object.entries(selectedValues)) {
    if (varName.startsWith('_')) continue
    const displayValue = value.word || value.display || value.verb || ''
    explanation.analysis = explanation.analysis.replace(new RegExp(`\\{${varName}\\}`, 'g'), displayValue)
    
    if (value.gender) {
      explanation.analysis = explanation.analysis.replace(new RegExp('\\{GENDER\\}', 'g'), genderToFrench(value.gender))
    }
    if (value.number) {
      explanation.analysis = explanation.analysis.replace(new RegExp('\\{NUMBER\\}', 'g'), numberToFrench(value.number))
    }
  }
  explanation.analysis = explanation.analysis.replace('{ANSWER}', answer)

  // 5. Retourner l'exercice complet
  return {
    id: `${template.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    templateId: template.id,
    category: category.id,
    categoryName: category.name,
    sentenceWithBlank,
    sentenceComplete,
    answer,
    verbInfinitive: (homophoneOptions || confusionOptions) ? null : verbInfinitive,
    homophoneOptions,
    confusionOptions,
    conjugaisonInfo,
    hints,
    explanation
  }
}

/**
 * Retourne le nom d'affichage d'un temps
 */
function getTenseDisplayName(tense) {
  const names = {
    'PRESENT': 'présent',
    'IMPARFAIT': 'imparfait',
    'FUTUR': 'futur',
    'PASSE_COMPOSE': 'passé composé',
    'PLUS_QUE_PARFAIT': 'plus-que-parfait',
    'PASSE_SIMPLE': 'passé simple',
    'CONDITIONNEL_PRESENT': 'conditionnel',
    'SUBJONCTIF_PRESENT': 'subjonctif'
  }
  return names[tense] || tense
}