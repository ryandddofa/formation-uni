// ============================================
// CONTENU D'AIDE CONDENSÉ PAR CATÉGORIE
// ============================================

/**
 * Conjugaisons de référence avec "aimer" (verbe modèle)
 */
export const referenceConjugations = {
  SUBJONCTIF_PRESENT: {
    verb: 'aimer',
    forms: ['aime', 'aimes', 'aime', 'aimions', 'aimiez', 'aiment'],
    description: 'Exprime le souhait, le doute, la nécessité.',
    usage: 'Après : il faut que, je veux que, bien que, pour que, avant que...'
  },
  CONDITIONNEL_PRESENT: {
    verb: 'aimer',
    forms: ['aimerais', 'aimerais', 'aimerait', 'aimerions', 'aimeriez', 'aimeraient'],
    description: 'Exprime l\'hypothèse, la politesse, le conseil.',
    usage: 'Après « si + imparfait », ou pour atténuer une demande.'
  },
  PASSE_SIMPLE: {
    verb: 'aimer',
    forms: ['aimai', 'aimas', 'aima', 'aimâmes', 'aimâtes', 'aimèrent'],
    description: 'Temps du récit littéraire.',
    usage: 'Actions ponctuelles et terminées dans le passé (livres, histoire).'
  }
}

export const pronouns = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles']

export const tenseNames = {
  SUBJONCTIF_PRESENT: 'Subjonctif présent',
  CONDITIONNEL_PRESENT: 'Conditionnel présent',
  PASSE_SIMPLE: 'Passé simple'
}

// ============================================
// PP AVOIR
// ============================================

export const ppAvoirLeft = {
  title: 'Définitions',
  items: [
    {
      term: 'Participe passé (PP)',
      definition: 'Forme du verbe dans les temps composés : mangé, fini, pris.'
    },
    {
      term: 'COD',
      definition: 'Complément d\'Objet Direct. Répond à "quoi ?" ou "qui ?" après le verbe.'
    }
  ]
}

export const ppAvoirRight = {
  title: 'Règles',
  rules: [
    {
      condition: 'COD avant le verbe',
      result: '→ Accord',
      example: 'Les pommes que j\'ai mangées.'
    },
    {
      condition: 'COD après le verbe',
      result: '→ Pas d\'accord',
      example: 'J\'ai mangé les pommes.'
    },
    {
      condition: 'Pas de COD',
      result: '→ Pas d\'accord',
      example: 'Elles ont dormi.'
    }
  ]
}

// ============================================
// PP ÊTRE
// ============================================

export const ppEtreLeft = {
  title: 'Verbes avec ÊTRE',
  mnemonic: 'DR & MRS VANDERTRAMP',
  verbs: [
    'Devenir', 'Revenir', 'Monter', 'Rester', 'Sortir',
    'Venir', 'Aller', 'Naître', 'Descendre', 'Entrer',
    'Retourner', 'Tomber', 'Rentrer', 'Arriver', 'Mourir', 'Partir'
  ]
}

export const ppEtreRight = {
  title: 'Règle',
  mainRule: 'Le PP s\'accorde avec le SUJET.',
  examples: [
    { sentence: 'Elle est partie.', explanation: '(f.s.) → -ie' },
    { sentence: 'Ils sont venus.', explanation: '(m.p.) → -us' },
    { sentence: 'Elles sont allées.', explanation: '(f.p.) → -ées' }
  ]
}

// ============================================
// HOMOPHONES GRAMMATICAUX
// ============================================

export const homophonesData = {
  'a / à': {
    left: [
      { word: 'a', nature: 'verbe avoir' },
      { word: 'à', nature: 'préposition' }
    ],
    right: {
      test: 'Remplacer par « avait »',
      examples: [
        'Il a faim. → avait ✓ → a',
        'Je vais à Paris. → avait ✗ → à'
      ]
    }
  },
  'et / est': {
    left: [
      { word: 'est', nature: 'verbe être' },
      { word: 'et', nature: 'addition (+)' }
    ],
    right: {
      test: 'Remplacer par « était »',
      examples: [
        'Elle est là. → était ✓ → est',
        'Pain et beurre. → était ✗ → et'
      ]
    }
  },
  'ou / où': {
    left: [
      { word: 'ou', nature: 'choix' },
      { word: 'où', nature: 'lieu/moment' }
    ],
    right: {
      test: 'Remplacer par « ou bien »',
      examples: [
        'Thé ou café ? → ou bien ✓ → ou',
        'La ville où je vis. → lieu → où'
      ]
    }
  },
  'son / sont': {
    left: [
      { word: 'sont', nature: 'verbe être (pluriel)' },
      { word: 'son', nature: 'possessif (le sien)' }
    ],
    right: {
      test: 'Remplacer par « étaient »',
      examples: [
        'Ils sont là. → étaient ✓ → sont',
        'Son chat. → étaient ✗ → son'
      ]
    }
  },
  'ce / se': {
    left: [
      { word: 'ce', nature: 'démonstratif' },
      { word: 'se', nature: 'pronom réfléchi' }
    ],
    right: {
      test: 'Devant un verbe pronominal ?',
      examples: [
        'Ce livre. → démonstratif → ce',
        'Il se lave. → se laver → se'
      ]
    }
  },
  'on / ont': {
    left: [
      { word: 'ont', nature: 'verbe avoir (pluriel)' },
      { word: 'on', nature: 'pronom (= nous/quelqu\'un)' }
    ],
    right: {
      test: 'Remplacer par « avaient »',
      examples: [
        'Ils ont faim. → avaient ✓ → ont',
        'On mange. → avaient ✗ → on'
      ]
    }
  }
}

/**
 * Trouve la paire d'homophones correspondant à l'exercice
 */
export function getHomophonePair(options) {
  if (!options || options.length < 2) return null
  
  // Normaliser les options
  const normalized = options.map(o => o.toLowerCase().trim())
  
  for (const [key, value] of Object.entries(homophonesData)) {
    const keyWords = key.toLowerCase().split(' / ')
    const match = normalized.some(opt => 
      keyWords.some(kw => kw === opt || opt === kw)
    )
    if (match) {
      return value
    }
  }
  
  return null
}

// ============================================
// CONFUSIONS FRÉQUENTES
// ============================================

export const confusionsData = {
  'censé / sensé': {
    left: [
      { word: 'censé', meaning: 'supposé' },
      { word: 'sensé', meaning: 'raisonnable' }
    ],
    right: {
      test: 'Remplacer par « supposé »',
      examples: [
        'Tu es censé venir. → supposé ✓',
        'Une idée sensée. → raisonnable'
      ]
    }
  },
  'davantage / d\'avantage': {
    left: [
      { word: 'davantage', meaning: 'plus' },
      { word: 'd\'avantage(s)', meaning: 'bénéfice(s)' }
    ],
    right: {
      test: 'Remplacer par « plus »',
      examples: [
        'J\'en veux davantage. → plus ✓',
        'Beaucoup d\'avantages. → bénéfices'
      ]
    }
  },
  'quand / quant': {
    left: [
      { word: 'quand', meaning: 'moment (lorsque)' },
      { word: 'quant à', meaning: 'en ce qui concerne' }
    ],
    right: {
      test: '« Quant à » = en ce qui concerne',
      examples: [
        'Quand viens-tu ? → moment',
        'Quant à moi... → en ce qui me concerne'
      ]
    }
  },
  'plutôt / plus tôt': {
    left: [
      { word: 'plutôt', meaning: 'de préférence' },
      { word: 'plus tôt', meaning: 'avant (temps)' }
    ],
    right: {
      test: 'Contraire de « plus tard » ?',
      examples: [
        'Plutôt le thé. → préférence',
        'Viens plus tôt. → avant'
      ]
    }
  },
  'près / prêt': {
    left: [
      { word: 'près', meaning: 'proche (lieu)' },
      { word: 'prêt', meaning: 'préparé' }
    ],
    right: {
      test: '« Prêt » s\'accorde (prête, prêts)',
      examples: [
        'Près de la gare. → proximité',
        'Je suis prêt. → préparé'
      ]
    }
  },
  'quelque / quel que': {
    left: [
      { word: 'quelque(s)', meaning: 'un certain (nombre)' },
      { word: 'quel(le) que', meaning: 'peu importe' }
    ],
    right: {
      test: '« Quel que soit » = peu importe',
      examples: [
        'Quelques minutes. → un certain nombre',
        'Quelle que soit ta décision. → peu importe'
      ]
    }
  },
  'quoique / quoi que': {
    left: [
      { word: 'quoique', meaning: 'bien que' },
      { word: 'quoi que', meaning: 'peu importe ce que' }
    ],
    right: {
      test: 'Remplacer par « bien que »',
      examples: [
        'Quoique fatigué... → bien que ✓',
        'Quoi que tu fasses... → peu importe ce que'
      ]
    }
  },
  'voir / voire': {
    left: [
      { word: 'voir', meaning: 'verbe (regarder)' },
      { word: 'voire', meaning: 'et même' }
    ],
    right: {
      test: 'Remplacer par « et même »',
      examples: [
        'Difficile, voire impossible. → et même ✓',
        'Je vais voir. → regarder'
      ]
    }
  },
  'dû / du': {
    left: [
      { word: 'dû', meaning: 'participe passé de devoir' },
      { word: 'du', meaning: 'article (de + le)' }
    ],
    right: {
      test: '« J\'ai dû » = j\'ai été obligé',
      examples: [
        'J\'ai dû partir. → obligé ✓',
        'Du pain. → article'
      ]
    }
  },
  'sûr / sur': {
    left: [
      { word: 'sûr', meaning: 'certain' },
      { word: 'sur', meaning: 'préposition (dessus)' }
    ],
    right: {
      test: 'Remplacer par « certain »',
      examples: [
        'Je suis sûr. → certain ✓',
        'Sur la table. → dessus'
      ]
    }
  },
  'peu / peut': {
    left: [
      { word: 'peu', meaning: 'pas beaucoup' },
      { word: 'peut', meaning: 'verbe pouvoir' }
    ],
    right: {
      test: 'Remplacer par « pouvait »',
      examples: [
        'Il peut venir. → pouvait ✓',
        'Peu de temps. → pas beaucoup'
      ]
    }
  }
}

/**
 * Trouve la paire de confusions correspondant à l'exercice
 */
export function getConfusionPair(options) {
  if (!options || options.length < 2) return null
  
  // Normaliser les options (enlever majuscules, apostrophes, etc.)
  const normalized = options.map(o => o.toLowerCase().trim())
  
  for (const [key, value] of Object.entries(confusionsData)) {
    const keyWords = key.toLowerCase().split(' / ').map(k => k.trim())
    
    // Vérifier si au moins une option correspond à un mot-clé
    const match = normalized.some(opt => {
      // Enlever les variations (accents, apostrophes)
      const cleanOpt = opt.replace(/['']/g, "'").replace(/^(qu|d)\'/i, '')
      return keyWords.some(kw => {
        const cleanKw = kw.replace(/['']/g, "'").replace(/^(qu|d)\'/i, '').replace(/[()]/g, '')
        return cleanKw.includes(cleanOpt) || cleanOpt.includes(cleanKw) || kw.includes(opt)
      })
    })
    
    if (match) {
      return { key, ...value }
    }
  }
  
  return null
}

// ============================================
// ACCORDS PARTICULIERS
// ============================================

export const accordsData = {
  'tout / tous / toute / toutes': {
    left: [
      { word: 'tout/toute', meaning: 'adjectif → accord' },
      { word: 'tout', meaning: 'adverbe → souvent invariable' },
      { word: 'tous/toutes', meaning: 'pronom → accord' }
    ],
    right: {
      test: 'Adverbe (= entièrement) ou adjectif ?',
      examples: [
        'Tous les jours. → adjectif (accord)',
        'Tout étonnée. → adverbe + voyelle (invariable)',
        'Toute contente. → adverbe + consonne (accord !)'
      ]
    }
  },
  'leur / leurs': {
    left: [
      { word: 'leur', meaning: 'pronom (à eux) → invariable' },
      { word: 'leur/leurs', meaning: 'déterminant → accord avec nom' }
    ],
    right: {
      test: 'Devant verbe = pronom (jamais de -s)',
      examples: [
        'Je leur parle. → pronom (invariable)',
        'Leur maison. → déterminant (singulier)',
        'Leurs enfants. → déterminant (pluriel)'
      ]
    }
  },
  'même / mêmes': {
    left: [
      { word: 'même', meaning: 'adjectif → accord' },
      { word: 'même', meaning: 'adverbe (= aussi) → invariable' },
      { word: 'pronom-même(s)', meaning: 'accord avec pronom' }
    ],
    right: {
      test: 'Après pronom → accord (eux-mêmes)',
      examples: [
        'Les mêmes idées. → adjectif (accord)',
        'Même les experts. → adverbe (invariable)',
        'Eux-mêmes. → pronom pluriel (accord)'
      ]
    }
  },
  'quel / quelle / quels / quelles': {
    left: [
      { word: 'quel', meaning: 'm.s.' },
      { word: 'quelle', meaning: 'f.s.' },
      { word: 'quels', meaning: 'm.p.' },
      { word: 'quelles', meaning: 'f.p.' }
    ],
    right: {
      test: 'Accord avec le nom',
      examples: [
        'Quelle heure ? → f.s.',
        'Quels beaux tableaux ! → m.p.',
        'Quelles sont vos idées ? → f.p.'
      ]
    }
  },
  'tel / telle / tels / telles': {
    left: [
      { word: 'tel', meaning: 'm.s.' },
      { word: 'telle', meaning: 'f.s.' },
      { word: 'tels', meaning: 'm.p.' },
      { word: 'telles', meaning: 'f.p.' }
    ],
    right: {
      test: 'Accord avec le nom (ou ce qui suit si "tel" = comme)',
      examples: [
        'Une telle situation. → f.s.',
        'Tel un lion. → accord avec "lion"',
        'De telles erreurs. → f.p.'
      ]
    }
  }
}

/**
 * Trouve la règle d'accord correspondant à l'exercice
 */
export function getAccordPair(options) {
  if (!options || options.length < 2) return null
  
  // Normaliser les options
  const normalized = options.map(o => o.toLowerCase().trim())
  
  for (const [key, value] of Object.entries(accordsData)) {
    const keyWords = key.toLowerCase().split(' / ').map(k => k.trim())
    
    const match = normalized.some(opt => 
      keyWords.some(kw => kw === opt || opt === kw)
    )
    
    if (match) {
      return { key, ...value }
    }
  }
  
  return null
}