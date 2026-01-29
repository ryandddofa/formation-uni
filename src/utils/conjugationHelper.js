import * as FrenchVerbs from 'french-verbs'
import Lefff from 'french-verbs-lefff/dist/conjugations.json'

// Mapping des temps vers le format french-verbs
export const TENSES = {
  PRESENT: 'PRESENT',
  IMPARFAIT: 'IMPARFAIT',
  FUTUR: 'FUTUR',
  PASSE_COMPOSE: 'PASSE_COMPOSE',
  PLUS_QUE_PARFAIT: 'PLUS_QUE_PARFAIT',
  PASSE_SIMPLE: 'PASSE_SIMPLE',
  CONDITIONNEL_PRESENT: 'CONDITIONNEL_PRESENT',
  SUBJONCTIF_PRESENT: 'SUBJONCTIF_PRESENT'
}

// Index des personnes (0-5)
export const PERSONS = {
  '1S': 0, // je
  '2S': 1, // tu
  '3S': 2, // il/elle
  '1P': 3, // nous
  '2P': 4, // vous
  '3P': 5  // ils/elles
}

// Noms des temps en français
export const TENSE_NAMES = {
  PRESENT: 'Présent',
  IMPARFAIT: 'Imparfait',
  FUTUR: 'Futur simple',
  PASSE_COMPOSE: 'Passé composé',
  PLUS_QUE_PARFAIT: 'Plus-que-parfait',
  PASSE_SIMPLE: 'Passé simple',
  CONDITIONNEL_PRESENT: 'Conditionnel présent',
  SUBJONCTIF_PRESENT: 'Subjonctif présent'
}

/**
 * Obtient le participe passé d'un verbe avec accord
 */
export function getParticipePasse(verb, gender = 'M', number = 'S', auxiliary = 'AVOIR') {
  try {
    const result = FrenchVerbs.getConjugation(
      Lefff,
      verb,
      'PASSE_COMPOSE',
      0, // personne (on prend juste le PP)
      {
        aux: auxiliary === 'ETRE' ? 'ETRE' : 'AVOIR',
        agreeGender: gender,
        agreeNumber: number
      }
    )
    
    // Extraire le participe passé du résultat
    // Format: "ai mangé" ou "suis allé" -> on prend le dernier mot
    if (result) {
      const parts = result.split(' ')
      return parts[parts.length - 1]
    }
    
    return verb
  } catch (e) {
    console.error(`Erreur conjugaison PP ${verb}:`, e)
    return verb
  }
}

/**
 * Obtient la conjugaison d'un verbe
 */
export function getConjugation(verb, tense, person, number) {
  try {
    // Calculer l'index de la personne (0-5)
    const personIndex = (person - 1) + (number === 'P' ? 3 : 0)
    
    // Pour les temps composés
    if (tense === 'PASSE_COMPOSE' || tense === 'PLUS_QUE_PARFAIT') {
      const result = FrenchVerbs.getConjugation(
        Lefff,
        verb,
        tense,
        personIndex,
        { aux: 'AVOIR' } // Simplifié pour l'instant
      )
      return result
    }
    
    // Pour les temps simples
    const result = FrenchVerbs.getConjugation(
      Lefff,
      verb,
      tense,
      personIndex
    )
    
    return result
  } catch (e) {
    console.error(`Erreur conjugaison ${verb} au ${tense}:`, e)
    return verb
  }
}

/**
 * Obtient toutes les conjugaisons d'un verbe à un temps donné
 */
export function getAllConjugations(verb, tense) {
  const conjugations = []
  
  for (let i = 0; i < 6; i++) {
    try {
      const result = FrenchVerbs.getConjugation(Lefff, verb, tense, i)
      conjugations.push(result)
    } catch (e) {
      conjugations.push(null)
    }
  }
  
  return conjugations
}