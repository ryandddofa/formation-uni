/**
 * Sélectionne un élément aléatoire dans un tableau
 */
export function pickRandom(array) {
    if (!array || array.length === 0) return null
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }
  
  /**
   * Sélectionne un élément aléatoire avec pondération
   * Les éléments avec un poids plus élevé ont plus de chances d'être sélectionnés
   * 
   * @param {Array} array - Tableau d'objets
   * @param {string} weightKey - Clé de la propriété de poids (ex: 'weight')
   */
  export function pickRandomWeighted(array, weightKey = 'weight') {
    if (!array || array.length === 0) return null
    
    // Calculer la somme des poids
    const totalWeight = array.reduce((sum, item) => sum + (item[weightKey] || 1), 0)
    
    // Générer un nombre aléatoire entre 0 et totalWeight
    let random = Math.random() * totalWeight
    
    // Trouver l'élément correspondant
    for (const item of array) {
      random -= item[weightKey] || 1
      if (random <= 0) {
        return item
      }
    }
    
    // Fallback (ne devrait jamais arriver)
    return array[array.length - 1]
  }
  
  /**
   * Mélange un tableau (Fisher-Yates shuffle)
   * Retourne une copie mélangée, ne modifie pas l'original
   */
  export function shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  /**
   * Sélectionne N éléments aléatoires uniques dans un tableau
   */
  export function pickRandomMultiple(array, count) {
    if (!array || array.length === 0) return []
    const shuffled = shuffleArray(array)
    return shuffled.slice(0, Math.min(count, array.length))
  }