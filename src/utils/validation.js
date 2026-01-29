/**
 * Utilitaires de validation des réponses
 */

/**
 * Normalise une chaîne pour la comparaison
 * - Convertit en minuscules
 * - Supprime la ponctuation finale
 * - Normalise les espaces
 * - Normalise les apostrophes
 */
export function normalizeForComparison(str) {
  if (!str) return ''
  
  return str
    .toLowerCase()
    .trim()
    // Normaliser les apostrophes (courbes → droites)
    .replace(/[''`]/g, "'")
    // Normaliser les guillemets
    .replace(/[""«»]/g, '"')
    // Normaliser les tirets
    .replace(/[–—]/g, '-')
    // Supprimer la ponctuation finale
    .replace(/[.!?;:]+$/, '')
    // Normaliser les espaces multiples
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Compare deux chaînes de manière tolérante
 */
export function compareStrings(userInput, expected) {
  const normalizedUser = normalizeForComparison(userInput)
  const normalizedExpected = normalizeForComparison(expected)
  
  return normalizedUser === normalizedExpected
}

/**
 * Trouve la position du mot cible dans la phrase
 */
function findTargetWordPosition(words, targetWord) {
  const normalizedTarget = normalizeForComparison(targetWord)
  
  for (let i = 0; i < words.length; i++) {
    const normalizedWord = normalizeForComparison(words[i])
    if (normalizedWord === normalizedTarget) {
      return i
    }
  }
  
  // Si pas trouvé exactement, chercher une correspondance partielle
  for (let i = 0; i < words.length; i++) {
    const normalizedWord = normalizeForComparison(words[i])
    if (normalizedWord.includes(normalizedTarget) || normalizedTarget.includes(normalizedWord)) {
      return i
    }
  }
  
  return -1
}

/**
 * Tokenize une phrase en mots, en gardant les apostrophes attachées
 */
function tokenize(sentence) {
  // Normaliser les apostrophes d'abord
  const normalized = sentence.replace(/[''`]/g, "'")
  
  // Séparer par espaces, mais garder la ponctuation attachée aux mots
  return normalized.split(/\s+/).filter(w => w.length > 0)
}

/**
 * Valide une phrase complète en se concentrant sur le mot cible
 * Retourne des erreurs pour le mot cible et des warnings pour le reste
 */
export function validateFullSentence(userInput, expectedSentence, targetWord) {
  const result = {
    correct: false,
    targetCorrect: false,
    errors: [],
    warnings: [],
    hasWarnings: false
  }
  
  // Comparaison globale d'abord (rapide)
  if (compareStrings(userInput, expectedSentence)) {
    result.correct = true
    result.targetCorrect = true
    return result
  }
  
  // Tokeniser les deux phrases
  const userWords = tokenize(userInput)
  const expectedWords = tokenize(expectedSentence)
  
  // Trouver la position du mot cible dans la phrase attendue
  const targetPosition = findTargetWordPosition(expectedWords, targetWord)
  
  // Comparer mot par mot
  const maxLength = Math.max(userWords.length, expectedWords.length)
  let targetCorrect = true
  
  for (let i = 0; i < maxLength; i++) {
    const userWord = userWords[i] || ''
    const expectedWord = expectedWords[i] || ''
    
    // Comparer les mots normalisés
    if (!compareStrings(userWord, expectedWord)) {
      // Est-ce le mot cible ?
      if (i === targetPosition) {
        targetCorrect = false
        result.errors.push({
          position: i,
          userWord,
          expectedWord,
          isTarget: true
        })
      } else {
        // C'est une autre erreur (warning)
        result.warnings.push({
          position: i,
          userWord,
          expectedWord,
          isTarget: false
        })
      }
    }
  }
  
  result.targetCorrect = targetCorrect
  result.correct = targetCorrect // Seul le mot cible compte
  result.hasWarnings = result.warnings.length > 0
  
  return result
}