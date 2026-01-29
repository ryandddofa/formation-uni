export const templates = [
  // ============================================
  // CENSÉ / SENSÉ
  // censé = supposé (être censé faire qqch)
  // sensé = qui a du bon sens, raisonnable
  // ============================================

  {
    id: 'conf-cense-001',
    type: 'confusion',
    template: 'Tu es {BLANK} arriver à huit heures.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['censé', 'sensé'],
        answer: 'censé'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « censé » (supposé) et « sensé » (raisonnable).' },
      { type: 'guiding', text: 'Peut-on remplacer par « supposé » ?' },
      { type: 'guiding', text: '« Tu es supposé arriver » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Censé » signifie « supposé ». « Sensé » signifie « raisonnable, qui a du sens ».',
      analysis: '« Tu es supposé arriver » fonctionne → censé.'
    }
  },

  {
    id: 'conf-cense-002',
    type: 'confusion',
    template: 'C\'est une personne {BLANK}, elle réfléchit avant d\'agir.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['censée', 'sensée'],
        answer: 'sensée'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « censé » et « sensé ».' },
      { type: 'guiding', text: 'Parle-t-on de quelqu\'un de raisonnable ?' },
      { type: 'guiding', text: 'Une personne qui a du bon sens → sensé.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Sensé » = qui a du bon sens, raisonnable.',
      analysis: 'On décrit quelqu\'un de raisonnable → sensée.'
    }
  },

  {
    id: 'conf-cense-003',
    type: 'confusion',
    template: 'Nul n\'est {BLANK} ignorer la loi.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['censé', 'sensé'],
        answer: 'censé'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « censé » et « sensé ».' },
      { type: 'guiding', text: 'Expression juridique : « supposé ignorer ».' },
      { type: 'guiding', text: '« Nul n\'est supposé ignorer » → censé.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Être censé + infinitif » = être supposé.',
      analysis: 'Nul n\'est supposé ignorer → censé.'
    }
  },

  {
    id: 'conf-cense-004',
    type: 'confusion',
    template: 'Ce n\'est pas une décision très {BLANK}.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['censée', 'sensée'],
        answer: 'sensée'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « censé » et « sensé ».' },
      { type: 'guiding', text: 'Parle-t-on d\'une décision raisonnable ?' },
      { type: 'guiding', text: 'Une décision qui a du sens → sensée.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Sensé » qualifie ce qui est logique, raisonnable.',
      analysis: 'Une décision raisonnable → sensée.'
    }
  },

  // ============================================
  // DAVANTAGE / D'AVANTAGE(S)
  // davantage = plus (adverbe)
  // d'avantage(s) = de + avantage (nom)
  // ============================================

  {
    id: 'conf-davantage-001',
    type: 'confusion',
    template: 'J\'aimerais en savoir {BLANK} sur ce sujet.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['davantage', 'd\'avantage'],
        answer: 'davantage'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « davantage » (plus) et « d\'avantage » (bénéfice).' },
      { type: 'guiding', text: 'Peut-on remplacer par « plus » ?' },
      { type: 'guiding', text: '« En savoir plus » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Davantage » = plus. C\'est un adverbe invariable.',
      analysis: '« En savoir plus » → davantage.'
    }
  },

  {
    id: 'conf-davantage-002',
    type: 'confusion',
    template: 'Ce poste offre beaucoup {BLANK}.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['davantage', 'd\'avantages'],
        answer: 'd\'avantages'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « davantage » et « d\'avantages ».' },
      { type: 'guiding', text: 'Parle-t-on de bénéfices concrets ?' },
      { type: 'guiding', text: '« Beaucoup de bénéfices » → d\'avantages.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« D\'avantages » = des bénéfices (nom pluriel).',
      analysis: 'Des bénéfices concrets → d\'avantages.'
    }
  },

  {
    id: 'conf-davantage-003',
    type: 'confusion',
    template: 'Il faudrait travailler {BLANK} pour réussir.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['davantage', 'd\'avantage'],
        answer: 'davantage'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « davantage » et « d\'avantage ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « plus » ?' },
      { type: 'guiding', text: '« Travailler plus » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Davantage » = plus.',
      analysis: '« Travailler plus » → davantage.'
    }
  },

  {
    id: 'conf-davantage-004',
    type: 'confusion',
    template: 'Je ne vois pas {BLANK} à cette solution.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['davantage', 'd\'avantage'],
        answer: 'd\'avantage'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « davantage » et « d\'avantage ».' },
      { type: 'guiding', text: 'Parle-t-on d\'un bénéfice ?' },
      { type: 'guiding', text: '« Voir un bénéfice » → d\'avantage.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« D\'avantage » = de bénéfice (nom singulier).',
      analysis: 'Un bénéfice → d\'avantage.'
    }
  },

  // ============================================
  // QUAND / QUANT
  // quand = moment (conjonction/adverbe)
  // quant = quant à (locution prépositive)
  // ============================================

  {
    id: 'conf-quand-001',
    type: 'confusion',
    template: '{BLANK} penses-tu arriver ?',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quand', 'Quant'],
        answer: 'Quand'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quand » (moment) et « quant à » (en ce qui concerne).' },
      { type: 'guiding', text: 'Pose-t-on une question sur le moment ?' },
      { type: 'guiding', text: '« À quel moment ? » → quand.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quand » = à quel moment. C\'est un adverbe interrogatif.',
      analysis: 'Question sur le moment → Quand.'
    }
  },

  {
    id: 'conf-quand-002',
    type: 'confusion',
    template: '{BLANK} à moi, je préfère rester ici.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quand', 'Quant'],
        answer: 'Quant'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quand » et « quant ».' },
      { type: 'guiding', text: '« Quant à » = en ce qui concerne.' },
      { type: 'guiding', text: '« En ce qui me concerne » → quant.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quant à » signifie « en ce qui concerne ».',
      analysis: '« En ce qui me concerne » → Quant à moi.'
    }
  },

  {
    id: 'conf-quand-003',
    type: 'confusion',
    template: 'Je viendrai {BLANK} j\'aurai le temps.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['quand', 'quant'],
        answer: 'quand'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quand » et « quant ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « lorsque » ?' },
      { type: 'guiding', text: '« Lorsque j\'aurai le temps » → quand.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quand » = lorsque (conjonction de temps).',
      analysis: '« Lorsque j\'aurai le temps » → quand.'
    }
  },

  {
    id: 'conf-quand-004',
    type: 'confusion',
    template: '{BLANK} aux résultats, ils seront publiés demain.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quand', 'Quant'],
        answer: 'Quant'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quand » et « quant ».' },
      { type: 'guiding', text: '« Quant aux » = en ce qui concerne les.' },
      { type: 'guiding', text: 'On parle des résultats → quant aux.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quant à/aux » introduit un sujet dont on va parler.',
      analysis: '« En ce qui concerne les résultats » → Quant aux.'
    }
  },

  // ============================================
  // PLUTÔT / PLUS TÔT
  // plutôt = de préférence
  // plus tôt = avant (dans le temps)
  // ============================================

  {
    id: 'conf-plutot-001',
    type: 'confusion',
    template: 'Je préfère le thé, {BLANK} que le café.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['plutôt', 'plus tôt'],
        answer: 'plutôt'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « plutôt » (préférence) et « plus tôt » (temps).' },
      { type: 'guiding', text: 'Exprime-t-on une préférence ?' },
      { type: 'guiding', text: '« De préférence » → plutôt.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Plutôt » exprime une préférence.',
      analysis: 'Préférence pour le thé → plutôt.'
    }
  },

  {
    id: 'conf-plutot-002',
    type: 'confusion',
    template: 'Tu aurais dû arriver {BLANK}.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['plutôt', 'plus tôt'],
        answer: 'plus tôt'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « plutôt » et « plus tôt ».' },
      { type: 'guiding', text: 'Parle-t-on du moment d\'arrivée ?' },
      { type: 'guiding', text: '« Avant » dans le temps → plus tôt.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Plus tôt » = plus en avance (contraire de « plus tard »).',
      analysis: 'Arriver avant → plus tôt.'
    }
  },

  {
    id: 'conf-plutot-003',
    type: 'confusion',
    template: 'C\'est {BLANK} une bonne nouvelle.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['plutôt', 'plus tôt'],
        answer: 'plutôt'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « plutôt » et « plus tôt ».' },
      { type: 'guiding', text: '« Plutôt » peut signifier « assez, relativement ».' },
      { type: 'guiding', text: '« Assez une bonne nouvelle » → plutôt.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Plutôt » peut aussi signifier « assez, relativement ».',
      analysis: '« Relativement bonne nouvelle » → plutôt.'
    }
  },

  {
    id: 'conf-plutot-004',
    type: 'confusion',
    template: 'Je me suis levé {BLANK} que d\'habitude.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['plutôt', 'plus tôt'],
        answer: 'plus tôt'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « plutôt » et « plus tôt ».' },
      { type: 'guiding', text: 'Parle-t-on de l\'heure du lever ?' },
      { type: 'guiding', text: 'Se lever avant → plus tôt.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Plus tôt que » = avant (comparaison de temps).',
      analysis: 'Se lever avant l\'heure habituelle → plus tôt.'
    }
  },

  // ============================================
  // PRÈS / PRÊT
  // près = proche (lieu)
  // prêt = préparé
  // ============================================

  {
    id: 'conf-pret-001',
    type: 'confusion',
    template: 'J\'habite {BLANK} de la gare.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['près', 'prêt'],
        answer: 'près'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « près » (proche) et « prêt » (préparé).' },
      { type: 'guiding', text: 'Parle-t-on d\'une distance ?' },
      { type: 'guiding', text: '« À proximité de » → près.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Près de » indique la proximité géographique.',
      analysis: 'Proximité de la gare → près de.'
    }
  },

  {
    id: 'conf-pret-002',
    type: 'confusion',
    template: 'Je suis {BLANK} à partir.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['près', 'prêt'],
        answer: 'prêt'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « près » et « prêt ».' },
      { type: 'guiding', text: 'Est-on préparé à faire quelque chose ?' },
      { type: 'guiding', text: '« Préparé à partir » → prêt.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Prêt à » signifie « préparé à, disposé à ».',
      analysis: 'Préparé à partir → prêt.'
    }
  },

  {
    id: 'conf-pret-003',
    type: 'confusion',
    template: 'Elle était {BLANK} de réussir.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['près', 'prête'],
        answer: 'prête'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « près » et « prêt ».' },
      { type: 'guiding', text: 'Était-elle préparée à réussir ?' },
      { type: 'guiding', text: '« Prêt » s\'accorde : elle était prête.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Prêt » est un adjectif qui s\'accorde (prêt, prête, prêts, prêtes).',
      analysis: 'Elle était préparée → prête.'
    }
  },

  {
    id: 'conf-pret-004',
    type: 'confusion',
    template: 'Il est passé {BLANK} d\'un accident.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['près', 'prêt'],
        answer: 'près'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « près » et « prêt ».' },
      { type: 'guiding', text: 'Expression : « passer près de » = frôler.' },
      { type: 'guiding', text: 'Il a failli avoir un accident → près.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Passer près de » = frôler, presque avoir.',
      analysis: 'Frôler un accident → près.'
    }
  },

  // ============================================
  // QUELQUE / QUEL QUE
  // quelque = un certain (déterminant)
  // quel que = peu importe (concession)
  // ============================================

  {
    id: 'conf-quelque-001',
    type: 'confusion',
    template: 'J\'ai {BLANK} chose à te dire.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['quelque', 'quel que'],
        answer: 'quelque'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quelque » et « quel que ».' },
      { type: 'guiding', text: '« Quelque chose » est une expression figée.' },
      { type: 'guiding', text: 'Une certaine chose → quelque.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quelque chose » = une certaine chose.',
      analysis: 'Expression figée → quelque chose.'
    }
  },

  {
    id: 'conf-quelque-002',
    type: 'confusion',
    template: '{BLANK} soit ta décision, je te soutiendrai.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quelque', 'Quelle que'],
        answer: 'Quelle que'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quelque » et « quel que ».' },
      { type: 'guiding', text: '« Quel que soit » = peu importe.' },
      { type: 'guiding', text: '« Peu importe ta décision » → quel que.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel que soit » exprime la concession (peu importe). Il s\'accorde avec le sujet.',
      analysis: '« Décision » est féminin → Quelle que soit.'
    }
  },

  {
    id: 'conf-quelque-003',
    type: 'confusion',
    template: 'Il reste {BLANK} minutes avant la fin.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['quelques', 'quelles que'],
        answer: 'quelques'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quelques » et « quelles que ».' },
      { type: 'guiding', text: 'Parle-t-on d\'un petit nombre ?' },
      { type: 'guiding', text: '« Quelques » = un certain nombre de.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quelques » = un certain nombre de (déterminant).',
      analysis: 'Un petit nombre de minutes → quelques.'
    }
  },

  {
    id: 'conf-quelque-004',
    type: 'confusion',
    template: '{BLANK} soient les obstacles, n\'abandonne pas.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quelques', 'Quels que'],
        answer: 'Quels que'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quelques » et « quels que ».' },
      { type: 'guiding', text: '« Quels que soient » = peu importe lesquels.' },
      { type: 'guiding', text: '« Obstacles » est masculin pluriel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quels que soient » s\'accorde avec le sujet qui suit.',
      analysis: '« Obstacles » (m.p.) → Quels que soient.'
    }
  },

  // ============================================
  // QUOIQUE / QUOI QUE
  // quoique = bien que (concession)
  // quoi que = peu importe ce que
  // ============================================

  {
    id: 'conf-quoique-001',
    type: 'confusion',
    template: '{BLANK} tu fasses, fais-le bien.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quoique', 'Quoi que'],
        answer: 'Quoi que'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quoique » (bien que) et « quoi que » (peu importe ce que).' },
      { type: 'guiding', text: 'Peut-on remplacer par « peu importe ce que » ?' },
      { type: 'guiding', text: '« Peu importe ce que tu fasses » → quoi que.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quoi que » = peu importe ce que (en deux mots).',
      analysis: '« Peu importe ce que tu fasses » → Quoi que.'
    }
  },

  {
    id: 'conf-quoique-002',
    type: 'confusion',
    template: 'Il est venu, {BLANK} malade.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['quoique', 'quoi que'],
        answer: 'quoique'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quoique » et « quoi que ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « bien que » ?' },
      { type: 'guiding', text: '« Bien que malade » → quoique.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quoique » = bien que (en un seul mot).',
      analysis: '« Bien que malade » → quoique.'
    }
  },

  {
    id: 'conf-quoique-003',
    type: 'confusion',
    template: '{BLANK} il dise, je ne le crois pas.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quoiqu\'', 'Quoi qu\''],
        answer: 'Quoi qu\''
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quoique » et « quoi que ».' },
      { type: 'guiding', text: '« Peu importe ce qu\'il dise » → quoi que.' },
      { type: 'guiding', text: 'Élision devant « il » → quoi qu\'il.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quoi que » = peu importe ce que.',
      analysis: '« Peu importe ce qu\'il dise » → Quoi qu\'il.'
    }
  },

  {
    id: 'conf-quoique-004',
    type: 'confusion',
    template: '{BLANK} fatigué, il a terminé son travail.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['Quoique', 'Quoi que'],
        answer: 'Quoique'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « quoique » et « quoi que ».' },
      { type: 'guiding', text: '« Bien que fatigué » → quoique.' },
      { type: 'guiding', text: 'On exprime une opposition → quoique.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quoique » = bien que (concession).',
      analysis: '« Bien que fatigué » → Quoique.'
    }
  },

  // ============================================
  // VOIR / VOIRE
  // voir = verbe (regarder)
  // voire = adverbe (et même)
  // ============================================

  {
    id: 'conf-voir-001',
    type: 'confusion',
    template: 'Ce projet est difficile, {BLANK} impossible.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['voir', 'voire'],
        answer: 'voire'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « voir » (regarder) et « voire » (et même).' },
      { type: 'guiding', text: 'Peut-on remplacer par « et même » ?' },
      { type: 'guiding', text: '« Difficile, et même impossible » → voire.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Voire » signifie « et même ». « Voir » est le verbe.',
      analysis: '« Et même impossible » → voire.'
    }
  },

  {
    id: 'conf-voir-002',
    type: 'confusion',
    template: 'Je vais {BLANK} ce qu\'il en est.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['voir', 'voire'],
        answer: 'voir'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « voir » et « voire ».' },
      { type: 'guiding', text: 'Est-ce le verbe « regarder, constater » ?' },
      { type: 'guiding', text: '« Je vais regarder » → voir.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Voir » est le verbe (regarder, constater).',
      analysis: 'Action de regarder → voir.'
    }
  },

  {
    id: 'conf-voir-003',
    type: 'confusion',
    template: 'Il faudra deux semaines, {BLANK} trois.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['voir', 'voire'],
        answer: 'voire'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « voir » et « voire ».' },
      { type: 'guiding', text: '« Et même trois » → voire.' },
      { type: 'guiding', text: 'On renforce l\'idée, on va plus loin.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Voire » renforce, ajoute une possibilité supérieure.',
      analysis: '« Deux semaines, et même trois » → voire.'
    }
  },

  {
    id: 'conf-voir-004',
    type: 'confusion',
    template: 'Tu devrais {BLANK} un médecin.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['voir', 'voire'],
        answer: 'voir'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « voir » et « voire ».' },
      { type: 'guiding', text: 'Consulter, rencontrer quelqu\'un → verbe voir.' },
      { type: 'guiding', text: '« Et même » ne fonctionne pas ici.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Voir » = consulter, rencontrer.',
      analysis: 'Consulter un médecin → voir.'
    }
  },

  // ============================================
  // DÛ / DU
  // dû = participe passé de devoir (avec accent)
  // du = article partitif (de + le)
  // ============================================

  {
    id: 'conf-du-001',
    type: 'confusion',
    template: 'J\'ai {BLANK} partir plus tôt.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['dû', 'du'],
        answer: 'dû'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « dû » (devoir) et « du » (article).' },
      { type: 'guiding', text: 'Est-ce le verbe devoir au passé composé ?' },
      { type: 'guiding', text: '« J\'ai été obligé de » → dû.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Dû » est le participe passé de devoir (j\'ai dû = j\'ai été obligé de).',
      analysis: 'Obligation passée → dû.'
    }
  },

  {
    id: 'conf-du-002',
    type: 'confusion',
    template: 'Je voudrais {BLANK} pain, s\'il vous plaît.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['dû', 'du'],
        answer: 'du'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « dû » et « du ».' },
      { type: 'guiding', text: '« Du » = de le (article partitif).' },
      { type: 'guiding', text: 'Une quantité de pain → du.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Du » est un article partitif (du pain, du temps, du courage).',
      analysis: 'Article devant « pain » → du.'
    }
  },

  {
    id: 'conf-du-003',
    type: 'confusion',
    template: 'Le retard est {BLANK} à un accident.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['dû', 'du'],
        answer: 'dû'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « dû » et « du ».' },
      { type: 'guiding', text: '« Dû à » = causé par.' },
      { type: 'guiding', text: '« Causé par un accident » → dû.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Dû à » signifie « causé par, en raison de ».',
      analysis: 'Causé par un accident → dû à.'
    }
  },

  {
    id: 'conf-du-004',
    type: 'confusion',
    template: 'Elle a {BLANK} recommencer depuis le début.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['dû', 'du'],
        answer: 'dû'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « dû » et « du ».' },
      { type: 'guiding', text: 'Verbe devoir au passé composé.' },
      { type: 'guiding', text: '« Elle a été obligée de » → dû.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Dû » = participe passé de devoir.',
      analysis: 'Obligation → dû.'
    }
  },

  // ============================================
  // SÛR / SUR
  // sûr = certain (adjectif)
  // sur = préposition (dessus, à propos de)
  // ============================================

  {
    id: 'conf-sur-001',
    type: 'confusion',
    template: 'Je suis {BLANK} de moi.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['sûr', 'sur'],
        answer: 'sûr'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « sûr » (certain) et « sur » (préposition).' },
      { type: 'guiding', text: 'Peut-on remplacer par « certain » ?' },
      { type: 'guiding', text: '« Je suis certain de moi » → sûr.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Sûr » signifie « certain, assuré ».',
      analysis: '« Certain de moi » → sûr.'
    }
  },

  {
    id: 'conf-sur-002',
    type: 'confusion',
    template: 'Le livre est {BLANK} la table.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['sûr', 'sur'],
        answer: 'sur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « sûr » et « sur ».' },
      { type: 'guiding', text: 'Indique-t-on une position, un lieu ?' },
      { type: 'guiding', text: '« Dessus, au-dessus de » → sur.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Sur » est une préposition de lieu.',
      analysis: 'Position sur la table → sur.'
    }
  },

  {
    id: 'conf-sur-003',
    type: 'confusion',
    template: 'Tu es {BLANK} que c\'est lui ?',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['sûr', 'sur'],
        answer: 'sûr'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « sûr » et « sur ».' },
      { type: 'guiding', text: '« Es-tu certain que... » → sûr.' },
      { type: 'guiding', text: 'On demande une certitude.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Être sûr que » = être certain que.',
      analysis: 'Certitude → sûr.'
    }
  },

  {
    id: 'conf-sur-004',
    type: 'confusion',
    template: 'J\'ai lu un article {BLANK} ce sujet.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['sûr', 'sur'],
        answer: 'sur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « sûr » et « sur ».' },
      { type: 'guiding', text: '« Sur » = à propos de.' },
      { type: 'guiding', text: '« À propos de ce sujet » → sur.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Sur » peut signifier « à propos de, concernant ».',
      analysis: '« À propos de ce sujet » → sur.'
    }
  },

  // ============================================
  // PEU / PEUT
  // peu = adverbe de quantité (pas beaucoup)
  // peut = verbe pouvoir (3e pers.)
  // ============================================

  {
    id: 'conf-peu-001',
    type: 'confusion',
    template: 'Il {BLANK} venir demain.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['peu', 'peut'],
        answer: 'peut'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « peu » (quantité) et « peut » (verbe pouvoir).' },
      { type: 'guiding', text: 'Peut-on remplacer par « pouvait » ?' },
      { type: 'guiding', text: '« Il pouvait venir » → peut.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Peut » est le verbe pouvoir (il peut = il pouvait).',
      analysis: '« Il pouvait venir » → peut.'
    }
  },

  {
    id: 'conf-peu-002',
    type: 'confusion',
    template: 'J\'ai {BLANK} de temps.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['peu', 'peut'],
        answer: 'peu'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « peu » et « peut ».' },
      { type: 'guiding', text: 'Parle-t-on d\'une petite quantité ?' },
      { type: 'guiding', text: '« Pas beaucoup de temps » → peu.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Peu » est un adverbe de quantité (= pas beaucoup).',
      analysis: 'Petite quantité de temps → peu.'
    }
  },

  {
    id: 'conf-peu-003',
    type: 'confusion',
    template: 'On {BLANK} le faire ensemble.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['peu', 'peut'],
        answer: 'peut'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « peu » et « peut ».' },
      { type: 'guiding', text: '« On » + verbe pouvoir.' },
      { type: 'guiding', text: '« On pouvait le faire » → peut.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« On peut » = on est capable de, on a la possibilité de.',
      analysis: 'Verbe pouvoir → peut.'
    }
  },

  {
    id: 'conf-peu-004',
    type: 'confusion',
    template: 'C\'est un {BLANK} compliqué.',
    variables: {
      BLANK: {
        type: 'confusion',
        options: ['peu', 'peut'],
        answer: 'peu'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « peu » et « peut ».' },
      { type: 'guiding', text: '« Un peu » = légèrement, un petit peu.' },
      { type: 'guiding', text: '« Légèrement compliqué » → peu.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Un peu » exprime une faible intensité.',
      analysis: '« Un peu compliqué » = légèrement → peu.'
    }
  },

]