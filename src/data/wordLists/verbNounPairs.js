/**
 * Paires verbe + compléments d'objet compatibles
 * Chaque verbe a une liste de COD qui font sens avec lui
 */
export const verbNounPairs = {
  // ENVOYER
  envoyer: {
    femininPluriel: [
      { word: 'lettres', singular: 'lettre' },
      { word: 'photos', singular: 'photo' },
      { word: 'réponses', singular: 'réponse' },
      { word: 'factures', singular: 'facture' },
      { word: 'invitations', singular: 'invitation' },
      { word: 'cartes postales', singular: 'carte postale' }
    ],
    masculinPluriel: [
      { word: 'messages', singular: 'message' },
      { word: 'documents', singular: 'document' },
      { word: 'colis', singular: 'colis' },
      { word: 'courriels', singular: 'courriel' }
    ]
  },

  // RECEVOIR
  recevoir: {
    femininPluriel: [
      { word: 'lettres', singular: 'lettre' },
      { word: 'réponses', singular: 'réponse' },
      { word: 'nouvelles', singular: 'nouvelle' },
      { word: 'instructions', singular: 'instruction' }
    ],
    masculinPluriel: [
      { word: 'messages', singular: 'message' },
      { word: 'cadeaux', singular: 'cadeau' },
      { word: 'documents', singular: 'document' },
      { word: 'résultats', singular: 'résultat' }
    ]
  },

  // ÉCRIRE
  écrire: {
    femininPluriel: [
      { word: 'lettres', singular: 'lettre' },
      { word: 'histoires', singular: 'histoire' },
      { word: 'chansons', singular: 'chanson' },
      { word: 'réponses', singular: 'réponse' }
    ],
    masculinPluriel: [
      { word: 'articles', singular: 'article' },
      { word: 'livres', singular: 'livre' },
      { word: 'poèmes', singular: 'poème' },
      { word: 'messages', singular: 'message' }
    ]
  },

  // LIRE
  lire: {
    femininPluriel: [
      { word: 'lettres', singular: 'lettre' },
      { word: 'histoires', singular: 'histoire' },
      { word: 'instructions', singular: 'instruction' },
      { word: 'nouvelles', singular: 'nouvelle' }
    ],
    masculinPluriel: [
      { word: 'livres', singular: 'livre' },
      { word: 'articles', singular: 'article' },
      { word: 'documents', singular: 'document' },
      { word: 'messages', singular: 'message' }
    ]
  },

  // CORRIGER
  corriger: {
    femininPluriel: [
      { word: 'erreurs', singular: 'erreur' },
      { word: 'fautes', singular: 'faute' },
      { word: 'copies', singular: 'copie' },
      { word: 'rédactions', singular: 'rédaction' }
    ],
    masculinPluriel: [
      { word: 'exercices', singular: 'exercice' },
      { word: 'devoirs', singular: 'devoir' },
      { word: 'examens', singular: 'examen' },
      { word: 'textes', singular: 'texte' }
    ]
  },

  // TROUVER
  trouver: {
    femininPluriel: [
      { word: 'clés', singular: 'clé' },
      { word: 'solutions', singular: 'solution' },
      { word: 'réponses', singular: 'réponse' },
      { word: 'erreurs', singular: 'erreur' }
    ],
    masculinPluriel: [
      { word: 'documents', singular: 'document' },
      { word: 'indices', singular: 'indice' },
      { word: 'trésors', singular: 'trésor' },
      { word: 'billets', singular: 'billet' }
    ]
  },

  // PERDRE
  perdre: {
    femininPluriel: [
      { word: 'clés', singular: 'clé' },
      { word: 'lunettes', singular: 'lunette' },
      { word: 'affaires', singular: 'affaire' },
      { word: 'chaussettes', singular: 'chaussette' }
    ],
    masculinPluriel: [
      { word: 'documents', singular: 'document' },
      { word: 'billets', singular: 'billet' },
      { word: 'papiers', singular: 'papier' },
      { word: 'gants', singular: 'gant' }
    ]
  },

  // ACHETER
  acheter: {
    femininPluriel: [
      { word: 'fleurs', singular: 'fleur' },
      { word: 'chaussures', singular: 'chaussure' },
      { word: 'pommes', singular: 'pomme' },
      { word: 'places', singular: 'place' }
    ],
    masculinPluriel: [
      { word: 'livres', singular: 'livre' },
      { word: 'billets', singular: 'billet' },
      { word: 'gâteaux', singular: 'gâteau' },
      { word: 'cadeaux', singular: 'cadeau' }
    ]
  },

  // PRENDRE
  prendre: {
    femininPluriel: [
      { word: 'photos', singular: 'photo' },
      { word: 'décisions', singular: 'décision' },
      { word: 'notes', singular: 'note' },
      { word: 'mesures', singular: 'mesure' }
    ],
    masculinPluriel: [
      { word: 'billets', singular: 'billet' },
      { word: 'médicaments', singular: 'médicament' },
      { word: 'rendez-vous', singular: 'rendez-vous' },
      { word: 'risques', singular: 'risque' }
    ]
  },

  // FAIRE
  faire: {
    femininPluriel: [
      { word: 'erreurs', singular: 'erreur' },
      { word: 'découvertes', singular: 'découverte' },
      { word: 'promesses', singular: 'promesse' },
      { word: 'remarques', singular: 'remarque' }
    ],
    masculinPluriel: [
      { word: 'exercices', singular: 'exercice' },
      { word: 'devoirs', singular: 'devoir' },
      { word: 'efforts', singular: 'effort' },
      { word: 'choix', singular: 'choix' }
    ]
  },

  // VOIR
  voir: {
    femininPluriel: [
      { word: 'photos', singular: 'photo' },
      { word: 'étoiles', singular: 'étoile' },
      { word: 'erreurs', singular: 'erreur' },
      { word: 'différences', singular: 'différence' }
    ],
    masculinPluriel: [
      { word: 'films', singular: 'film' },
      { word: 'documentaires', singular: 'documentaire' },
      { word: 'changements', singular: 'changement' },
      { word: 'résultats', singular: 'résultat' }
    ]
  },

  // ENTENDRE
  entendre: {
    femininPluriel: [
      { word: 'chansons', singular: 'chanson' },
      { word: 'histoires', singular: 'histoire' },
      { word: 'nouvelles', singular: 'nouvelle' },
      { word: 'rumeurs', singular: 'rumeur' }
    ],
    masculinPluriel: [
      { word: 'bruits', singular: 'bruit' },
      { word: 'cris', singular: 'cri' },
      { word: 'discours', singular: 'discours' },
      { word: 'conseils', singular: 'conseil' }
    ]
  },

  // COMPRENDRE
  comprendre: {
    femininPluriel: [
      { word: 'instructions', singular: 'instruction' },
      { word: 'explications', singular: 'explication' },
      { word: 'règles', singular: 'règle' },
      { word: 'questions', singular: 'question' }
    ],
    masculinPluriel: [
      { word: 'messages', singular: 'message' },
      { word: 'problèmes', singular: 'problème' },
      { word: 'exercices', singular: 'exercice' },
      { word: 'textes', singular: 'texte' }
    ]
  },

  // OUVRIR
  ouvrir: {
    femininPluriel: [
      { word: 'fenêtres', singular: 'fenêtre' },
      { word: 'portes', singular: 'porte' },
      { word: 'lettres', singular: 'lettre' },
      { word: 'boîtes', singular: 'boîte' }
    ],
    masculinPluriel: [
      { word: 'cadeaux', singular: 'cadeau' },
      { word: 'courriers', singular: 'courrier' },
      { word: 'dossiers', singular: 'dossier' },
      { word: 'paquets', singular: 'paquet' }
    ]
  },

  // FERMER
  fermer: {
    femininPluriel: [
      { word: 'fenêtres', singular: 'fenêtre' },
      { word: 'portes', singular: 'porte' },
      { word: 'valises', singular: 'valise' },
      { word: 'boîtes', singular: 'boîte' }
    ],
    masculinPluriel: [
      { word: 'dossiers', singular: 'dossier' },
      { word: 'volets', singular: 'volet' },
      { word: 'robinets', singular: 'robinet' },
      { word: 'rideaux', singular: 'rideau' }
    ]
  },

  // MANGER
  manger: {
    femininPluriel: [
      { word: 'pommes', singular: 'pomme' },
      { word: 'fraises', singular: 'fraise' },
      { word: 'pizzas', singular: 'pizza' },
      { word: 'crêpes', singular: 'crêpe' }
    ],
    masculinPluriel: [
      { word: 'gâteaux', singular: 'gâteau' },
      { word: 'croissants', singular: 'croissant' },
      { word: 'fruits', singular: 'fruit' },
      { word: 'biscuits', singular: 'biscuit' }
    ]
  },

  // FINIR
  finir: {
    femininPluriel: [
      { word: 'tâches', singular: 'tâche' },
      { word: 'études', singular: 'étude' },
      { word: 'réparations', singular: 'réparation' },
      { word: 'corvées', singular: 'corvée' }
    ],
    masculinPluriel: [
      { word: 'devoirs', singular: 'devoir' },
      { word: 'exercices', singular: 'exercice' },
      { word: 'travaux', singular: 'travail' },
      { word: 'projets', singular: 'projet' }
    ]
  }
}

/**
 * Retourne la liste des verbes disponibles
 */
export function getAvailableVerbs() {
  return Object.keys(verbNounPairs)
}

/**
 * Retourne les noms compatibles avec un verbe pour un genre/nombre donné
 */
export function getCompatibleNouns(verb, genderNumber) {
  const verbData = verbNounPairs[verb]
  if (!verbData) return null
  return verbData[genderNumber] || null
}