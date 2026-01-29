/**
 * Normalise une chaîne pour comparaison
 * - Minuscules
 * - Supprime espaces multiples
 * - Trim
 * - Normalise les apostrophes
 */
export function normalizeText(text) {
    if (!text) return ''
    return text
      .toLowerCase()
      .replace(/'/g, "'")          // Normalise apostrophes courbes
      .replace(/\s+/g, ' ')        // Espaces multiples → un seul
      .trim()
  }
  
  /**
   * Compare deux chaînes de manière flexible
   */
  export function compareTexts(text1, text2) {
    return normalizeText(text1) === normalizeText(text2)
  }
  
  /**
   * Capitalise la première lettre d'une chaîne
   */
  export function capitalize(text) {
    if (!text) return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
  
  /**
   * Retourne le genre en français
   */
  export function genderToFrench(gender) {
    return gender === 'F' ? 'féminin' : 'masculin'
  }
  
  /**
   * Retourne le nombre en français
   */
  export function numberToFrench(number) {
    return number === 'P' ? 'pluriel' : 'singulier'
  }