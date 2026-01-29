export const templates = [
  // ============================================
  // COD AVANT LE VERBE → ACCORD
  // Phrases claires et cohérentes
  // ============================================
  
  {
    id: 'pp-avoir-cod-avant-001',
    type: 'generated',
    template: 'Les {OBJET} que j\'ai {BLANK} étaient urgentes.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'C\'est un accord de participe passé avec l\'auxiliaire avoir.' },
      { type: 'guiding', text: 'Où est placé le COD par rapport au verbe ?' },
      { type: 'guiding', text: 'Quel est le genre et le nombre de « {OBJET} » ?' },
      { type: 'letter-count', text: 'Le mot manquant contient {ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Le mot manquant commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec l\'auxiliaire avoir, le participe passé s\'accorde avec le COD si celui-ci est placé AVANT le verbe.',
      analysis: 'Le COD est « {OBJET} » (que = les {OBJET}), placé avant le verbe. « {OBJET} » est {GENDER} {NUMBER}, donc → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-avant-002',
    type: 'generated',
    template: 'Les {OBJET} que tu as {BLANK} sont dans le tiroir.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'masculinPluriel',
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'C\'est un accord de participe passé avec l\'auxiliaire avoir.' },
      { type: 'guiding', text: 'Le COD « {OBJET} » est-il avant ou après le verbe ?' },
      { type: 'guiding', text: 'Quel est le genre et le nombre de « {OBJET} » ?' },
      { type: 'letter-count', text: 'Le mot manquant contient {ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Le mot manquant commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec l\'auxiliaire avoir, le participe passé s\'accorde avec le COD si celui-ci est placé AVANT le verbe.',
      analysis: 'Le COD « {OBJET} » est placé avant (que = les {OBJET}). « {OBJET} » est {GENDER} {NUMBER}, donc → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-avant-003',
    type: 'generated',
    template: 'Voici les {OBJET} que nous avons {BLANK} hier.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'C\'est un accord de participe passé avec l\'auxiliaire avoir.' },
      { type: 'guiding', text: 'Repérez le COD. Est-il avant ou après « avons » ?' },
      { type: 'guiding', text: '« {OBJET} » est de quel genre et nombre ?' },
      { type: 'letter-count', text: 'Le mot manquant contient {ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Le mot manquant commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec l\'auxiliaire avoir, le participe passé s\'accorde avec le COD si celui-ci est placé AVANT le verbe.',
      analysis: '« {OBJET} » (COD) est avant le verbe. {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-avant-004',
    type: 'generated',
    template: 'Ce sont les {OBJET} que Marie a {BLANK} ce matin.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'masculinPluriel',
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Où est le COD « les {OBJET} » par rapport à « a » ?' },
      { type: 'guiding', text: 'Genre et nombre de « {OBJET} » ?' },
      { type: 'letter-count', text: 'Le mot contient {ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Première lettre : « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, le PP s\'accorde avec le COD placé avant.',
      analysis: '« {OBJET} » est avant le verbe, {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-avant-005',
    type: 'generated',
    template: 'Les {OBJET} qu\'il a {BLANK} étaient délicieuses.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Le pronom « qu\' » remplace quel COD ?' },
      { type: 'guiding', text: 'Ce COD est-il avant ou après le verbe ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP s\'accorde avec le COD placé avant le verbe.',
      analysis: '« qu\' » = « les {OBJET} », placé avant. {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-avant-006',
    type: 'generated',
    template: 'Où sont les {OBJET} que vous avez {BLANK} ?',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: 'OBJET'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Le COD est-il avant ou après « avez » ?' },
      { type: 'guiding', text: '« {OBJET} » : quel genre, quel nombre ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, accord avec le COD s\'il est avant.',
      analysis: '« les {OBJET} » (COD) est avant → {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  // ============================================
  // COD APRÈS LE VERBE → PAS D'ACCORD
  // ============================================

  {
    id: 'pp-avoir-cod-apres-001',
    type: 'generated',
    template: 'J\'ai {BLANK} les {OBJET} ce matin.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Où est placé le COD « les {OBJET} » par rapport au verbe ?' },
      { type: 'guiding', text: 'Quand le COD est APRÈS le verbe, y a-t-il accord ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, le PP NE S\'ACCORDE PAS si le COD est APRÈS le verbe.',
      analysis: '« les {OBJET} » est APRÈS le verbe → pas d\'accord → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-apres-002',
    type: 'generated',
    template: 'Nous avons {BLANK} plusieurs {OBJET} cette semaine.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'masculinPluriel',
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Le COD est-il avant ou après « avons » ?' },
      { type: 'guiding', text: 'COD après = accord ou pas d\'accord ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, pas d\'accord quand le COD est après.',
      analysis: '« plusieurs {OBJET} » est APRÈS → pas d\'accord → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-apres-003',
    type: 'generated',
    template: 'Elle a {BLANK} une {OBJET_SING} importante.',
    variables: {
      OBJET_SING: {
        type: 'static-list',
        values: ['lettre', 'réponse', 'décision', 'erreur'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Où est le COD « une {OBJET_SING} » ?' },
      { type: 'guiding', text: 'COD après le verbe = ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, pas d\'accord quand le COD est après.',
      analysis: '« une {OBJET_SING} » est après le verbe → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-apres-004',
    type: 'generated',
    template: 'Tu as {BLANK} les {OBJET} sur la table.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Position du COD « les {OBJET} » ?' },
      { type: 'guiding', text: 'Après le verbe = pas d\'accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec avoir reste invariable si le COD est après.',
      analysis: '« les {OBJET} » est après « as {BLANK} » → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-cod-apres-005',
    type: 'generated',
    template: 'Ils ont {BLANK} des {OBJET} au marché.',
    variables: {
      OBJET: {
        type: 'noun',
        list: 'femininPluriel',
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        list: 'transitifs',
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Où se trouve le COD ?' },
      { type: 'guiding', text: 'Accord seulement si COD avant.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Pas d\'accord avec avoir si le COD est après.',
      analysis: '« des {OBJET} » est après → {ANSWER}.'
    }
  },

  // ============================================
  // PAS DE COD → PAS D'ACCORD
  // ============================================

  {
    id: 'pp-avoir-sans-cod-001',
    type: 'generated',
    template: 'Ils ont {BLANK} pendant deux heures.',
    variables: {
      BLANK: {
        type: 'participe-passe',
        verbs: ['marché', 'couru', 'dormi', 'travaillé', 'voyagé', 'parlé'],
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Y a-t-il un COD dans cette phrase ?' },
      { type: 'guiding', text: '« Pendant deux heures » est un complément de temps, pas un COD.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Sans COD, le participe passé avec avoir reste invariable.',
      analysis: '« pendant deux heures » est un complément de temps, pas un COD → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-sans-cod-002',
    type: 'generated',
    template: 'Elles ont {BLANK} toute la nuit.',
    variables: {
      BLANK: {
        type: 'participe-passe',
        verbs: ['dansé', 'chanté', 'dormi', 'discuté', 'travaillé'],
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: '« Toute la nuit » est-il un COD ?' },
      { type: 'guiding', text: 'Le sujet « elles » influence-t-il l\'accord avec avoir ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec avoir, le PP ne s\'accorde JAMAIS avec le sujet. Sans COD, pas d\'accord.',
      analysis: '« toute la nuit » = complément de temps. Le sujet « elles » n\'influence pas → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-sans-cod-003',
    type: 'generated',
    template: 'Nous avons {BLANK} jusqu\'à minuit.',
    variables: {
      BLANK: {
        type: 'participe-passe',
        verbs: ['travaillé', 'étudié', 'discuté', 'dansé', 'joué'],
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: 'Cherchez le COD. Y en a-t-il un ?' },
      { type: 'guiding', text: 'Sans COD = pas d\'accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Sans COD, le PP avec avoir reste invariable.',
      analysis: 'Pas de COD dans cette phrase → {ANSWER}.'
    }
  },

  {
    id: 'pp-avoir-sans-cod-004',
    type: 'generated',
    template: 'Les enfants ont {BLANK} dans le jardin.',
    variables: {
      BLANK: {
        type: 'participe-passe',
        verbs: ['joué', 'couru', 'crié', 'ri', 'dansé'],
        auxiliary: 'AVOIR',
        agreeWith: null
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec avoir.' },
      { type: 'guiding', text: '« Dans le jardin » est un complément de lieu. Et le COD ?' },
      { type: 'guiding', text: 'Le sujet « enfants » n\'influence pas l\'accord avec avoir.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Sans COD, le PP reste invariable, peu importe le sujet.',
      analysis: 'Pas de COD → {ANSWER}.'
    }
  }
]