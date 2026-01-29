export const templates = [
  // ============================================
  // A / À
  // a = verbe avoir (peut être remplacé par "avait")
  // à = préposition
  // ============================================

  {
    id: 'homo-a-a-001',
    type: 'homophone',
    template: 'Il {BLANK} terminé son travail.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'a'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » (verbe avoir) et « à » (préposition).' },
      { type: 'guiding', text: 'Essayez de remplacer par « avait ». Est-ce que ça fonctionne ?' },
      { type: 'guiding', text: 'Si « avait » fonctionne, c\'est le verbe « a ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« a » est le verbe avoir (3e personne). On peut le remplacer par « avait ». « à » est une préposition.',
      analysis: '« Il avait terminé son travail » fonctionne → c\'est le verbe avoir → a.'
    }
  },

  {
    id: 'homo-a-a-002',
    type: 'homophone',
    template: 'Elle va {BLANK} la pharmacie.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'à'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » (verbe avoir) et « à » (préposition).' },
      { type: 'guiding', text: 'Essayez de remplacer par « avait ».' },
      { type: 'guiding', text: '« Elle va avait la pharmacie » ne fonctionne pas → préposition.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« à » est une préposition qui indique la direction, le lieu, le but. « a » est le verbe avoir.',
      analysis: '« Elle va avait la pharmacie » ne fonctionne pas → c\'est la préposition → à.'
    }
  },

  {
    id: 'homo-a-a-003',
    type: 'homophone',
    template: 'Mon frère {BLANK} une nouvelle voiture.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'a'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » et « à ».' },
      { type: 'guiding', text: 'Remplacez par « avait » pour vérifier.' },
      { type: 'guiding', text: '« Mon frère avait une nouvelle voiture » → ça marche !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« a » = verbe avoir. « à » = préposition.',
      analysis: '« Mon frère avait une nouvelle voiture » fonctionne → verbe avoir → a.'
    }
  },

  {
    id: 'homo-a-a-004',
    type: 'homophone',
    template: 'Je pense {BLANK} mes vacances.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'à'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » et « à ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « avait » ?' },
      { type: 'guiding', text: '« Je pense avait mes vacances » → non, c\'est la préposition.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« penser à » utilise la préposition « à ».',
      analysis: '« Je pense avait » ne fonctionne pas → préposition → à.'
    }
  },

  {
    id: 'homo-a-a-005',
    type: 'homophone',
    template: 'Cette tarte {BLANK} l\'air délicieuse.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'a'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » et « à ».' },
      { type: 'guiding', text: 'Test avec « avait ».' },
      { type: 'guiding', text: '« Cette tarte avait l\'air délicieuse » → ça fonctionne.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« avoir l\'air » est une expression avec le verbe avoir.',
      analysis: '« Cette tarte avait l\'air délicieuse » fonctionne → verbe avoir → a.'
    }
  },

  {
    id: 'homo-a-a-006',
    type: 'homophone',
    template: 'Nous allons {BLANK} la plage demain.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['a', 'à'],
        answer: 'à'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « a » et « à ».' },
      { type: 'guiding', text: 'Remplacez par « avait ».' },
      { type: 'guiding', text: '« Nous allons avait la plage » → impossible.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« aller à » indique une destination avec la préposition « à ».',
      analysis: 'On ne peut pas dire « allons avait » → préposition → à.'
    }
  },

  // ============================================
  // OU / OÙ
  // ou = conjonction de coordination (choix)
  // où = pronom relatif ou adverbe (lieu, moment)
  // ============================================

  {
    id: 'homo-ou-ou-001',
    type: 'homophone',
    template: 'Tu veux du thé {BLANK} du café ?',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ou', 'où'],
        answer: 'ou'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ou » (choix) et « où » (lieu/moment).' },
      { type: 'guiding', text: 'Essayez de remplacer par « ou bien ».' },
      { type: 'guiding', text: '« Tu veux du thé ou bien du café » → ça marche !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ou » exprime un choix entre deux options. On peut le remplacer par « ou bien ».',
      analysis: '« Thé ou bien café » fonctionne → c\'est un choix → ou.'
    }
  },

  {
    id: 'homo-ou-ou-002',
    type: 'homophone',
    template: 'C\'est la ville {BLANK} je suis né.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ou', 'où'],
        answer: 'où'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ou » et « où ».' },
      { type: 'guiding', text: 'Est-ce qu\'on parle d\'un lieu ou d\'un choix ?' },
      { type: 'guiding', text: 'On parle d\'un lieu → « où » avec accent.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« où » indique un lieu ou un moment. C\'est un pronom relatif.',
      analysis: 'On parle du lieu de naissance → où.'
    }
  },

  {
    id: 'homo-ou-ou-003',
    type: 'homophone',
    template: 'Je ne sais pas {BLANK} j\'ai mis mes clés.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ou', 'où'],
        answer: 'où'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ou » et « où ».' },
      { type: 'guiding', text: 'Est-ce un choix ou une question de lieu ?' },
      { type: 'guiding', text: 'On cherche un endroit → « où ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« où » est utilisé pour interroger sur un lieu.',
      analysis: 'On cherche l\'endroit des clés → où.'
    }
  },

  {
    id: 'homo-ou-ou-004',
    type: 'homophone',
    template: 'On part lundi {BLANK} mardi ?',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ou', 'où'],
        answer: 'ou'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ou » et « où ».' },
      { type: 'guiding', text: 'Peut-on dire « lundi ou bien mardi » ?' },
      { type: 'guiding', text: 'Oui, c\'est un choix entre deux jours → « ou ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ou » exprime une alternative.',
      analysis: '« Lundi ou bien mardi » fonctionne → choix → ou.'
    }
  },

  {
    id: 'homo-ou-ou-005',
    type: 'homophone',
    template: 'Le jour {BLANK} nous nous sommes rencontrés était ensoleillé.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ou', 'où'],
        answer: 'où'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ou » et « où ».' },
      { type: 'guiding', text: '« où » peut aussi indiquer un moment dans le temps.' },
      { type: 'guiding', text: 'On parle d\'un jour précis → « où ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« où » peut indiquer un moment (temps) en plus d\'un lieu.',
      analysis: 'On parle du moment de la rencontre → où.'
    }
  },

  // ============================================
  // ET / EST
  // et = conjonction de coordination (addition)
  // est = verbe être (3e personne)
  // ============================================

  {
    id: 'homo-et-est-001',
    type: 'homophone',
    template: 'Marie {BLANK} très gentille.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['et', 'est'],
        answer: 'est'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « et » (addition) et « est » (verbe être).' },
      { type: 'guiding', text: 'Essayez de remplacer par « était ».' },
      { type: 'guiding', text: '« Marie était très gentille » fonctionne → verbe être.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« est » est le verbe être (3e personne). On peut le remplacer par « était ».',
      analysis: '« Marie était très gentille » fonctionne → verbe être → est.'
    }
  },

  {
    id: 'homo-et-est-002',
    type: 'homophone',
    template: 'J\'ai acheté du pain {BLANK} du lait.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['et', 'est'],
        answer: 'et'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « et » et « est ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « était » ?' },
      { type: 'guiding', text: '« Du pain était du lait » → non, c\'est une addition.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« et » relie deux éléments (addition, coordination).',
      analysis: 'On ajoute deux choses (pain + lait) → et.'
    }
  },

  {
    id: 'homo-et-est-003',
    type: 'homophone',
    template: 'Ce film {BLANK} vraiment intéressant.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['et', 'est'],
        answer: 'est'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « et » et « est ».' },
      { type: 'guiding', text: 'Test avec « était ».' },
      { type: 'guiding', text: '« Ce film était vraiment intéressant » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« est » = verbe être.',
      analysis: '« Ce film était intéressant » fonctionne → est.'
    }
  },

  {
    id: 'homo-et-est-004',
    type: 'homophone',
    template: 'Pierre {BLANK} Paul sont frères.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['et', 'est'],
        answer: 'et'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « et » et « est ».' },
      { type: 'guiding', text: 'On relie deux personnes (Pierre + Paul).' },
      { type: 'guiding', text: '« Pierre était Paul » ne fonctionne pas.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« et » coordonne deux noms ou groupes nominaux.',
      analysis: 'On relie Pierre et Paul → et.'
    }
  },

  {
    id: 'homo-et-est-005',
    type: 'homophone',
    template: 'Il {BLANK} huit heures du matin.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['et', 'est'],
        answer: 'est'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « et » et « est ».' },
      { type: 'guiding', text: 'Remplacez par « était ».' },
      { type: 'guiding', text: '« Il était huit heures » → oui, verbe être.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Pour exprimer l\'heure, on utilise le verbe être.',
      analysis: '« Il était huit heures » fonctionne → est.'
    }
  },

  // ============================================
  // SON / SONT
  // son = déterminant possessif (3e personne singulier)
  // sont = verbe être (3e personne pluriel)
  // ============================================

  {
    id: 'homo-son-sont-001',
    type: 'homophone',
    template: 'Les enfants {BLANK} dans le jardin.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['son', 'sont'],
        answer: 'sont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « son » (possessif) et « sont » (verbe être).' },
      { type: 'guiding', text: 'Essayez de remplacer par « étaient ».' },
      { type: 'guiding', text: '« Les enfants étaient dans le jardin » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« sont » est le verbe être (3e personne pluriel). On peut le remplacer par « étaient ».',
      analysis: '« Les enfants étaient » fonctionne → verbe être → sont.'
    }
  },

  {
    id: 'homo-son-sont-002',
    type: 'homophone',
    template: 'Pierre a perdu {BLANK} téléphone.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['son', 'sont'],
        answer: 'son'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « son » et « sont ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « étaient » ?' },
      { type: 'guiding', text: '« Pierre a perdu étaient téléphone » → non, c\'est possessif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« son » est un déterminant possessif (= le sien, à lui/elle).',
      analysis: 'Le téléphone appartient à Pierre → son.'
    }
  },

  {
    id: 'homo-son-sont-003',
    type: 'homophone',
    template: 'Ces gâteaux {BLANK} délicieux.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['son', 'sont'],
        answer: 'sont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « son » et « sont ».' },
      { type: 'guiding', text: 'Test avec « étaient ».' },
      { type: 'guiding', text: '« Ces gâteaux étaient délicieux » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« sont » = verbe être au pluriel.',
      analysis: '« Ces gâteaux étaient délicieux » fonctionne → sont.'
    }
  },

  {
    id: 'homo-son-sont-004',
    type: 'homophone',
    template: 'Marie adore {BLANK} chat.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['son', 'sont'],
        answer: 'son'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « son » et « sont ».' },
      { type: 'guiding', text: 'Le chat appartient à Marie.' },
      { type: 'guiding', text: '« étaient chat » ne fonctionne pas.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« son » indique la possession.',
      analysis: 'Le chat de Marie → son chat.'
    }
  },

  {
    id: 'homo-son-sont-005',
    type: 'homophone',
    template: 'Ils {BLANK} partis ce matin.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['son', 'sont'],
        answer: 'sont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « son » et « sont ».' },
      { type: 'guiding', text: 'Remplacez par « étaient ».' },
      { type: 'guiding', text: '« Ils étaient partis » → oui, verbe être.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« sont » forme le passé composé avec être.',
      analysis: '« Ils étaient partis » fonctionne → sont.'
    }
  },

  // ============================================
  // CE / SE
  // ce = déterminant démonstratif ou pronom
  // se = pronom réfléchi (verbes pronominaux)
  // ============================================

  {
    id: 'homo-ce-se-001',
    type: 'homophone',
    template: 'Il {BLANK} lave les mains.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ce', 'se'],
        answer: 'se'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ce » (démonstratif) et « se » (pronom réfléchi).' },
      { type: 'guiding', text: '« se laver » est un verbe pronominal.' },
      { type: 'guiding', text: 'L\'action revient sur le sujet → « se ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« se » est utilisé avec les verbes pronominaux (se laver, se lever, etc.).',
      analysis: '« se laver » → il se lave (l\'action revient sur lui-même).'
    }
  },

  {
    id: 'homo-ce-se-002',
    type: 'homophone',
    template: '{BLANK} livre est passionnant.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['Ce', 'Se'],
        answer: 'Ce'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ce » et « se ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « ce... -là » ?' },
      { type: 'guiding', text: '« Ce livre-là » → oui, c\'est un démonstratif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ce » est un déterminant démonstratif qui désigne quelque chose.',
      analysis: '« Ce livre-là » → démonstratif → Ce.'
    }
  },

  {
    id: 'homo-ce-se-003',
    type: 'homophone',
    template: 'Elle {BLANK} couche toujours tôt.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ce', 'se'],
        answer: 'se'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ce » et « se ».' },
      { type: 'guiding', text: '« se coucher » est un verbe pronominal.' },
      { type: 'guiding', text: 'Elle couche elle-même → « se ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« se » accompagne les verbes pronominaux.',
      analysis: '« se coucher » → elle se couche.'
    }
  },

  {
    id: 'homo-ce-se-004',
    type: 'homophone',
    template: '{BLANK} que tu dis est vrai.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['Ce', 'Se'],
        answer: 'Ce'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ce » et « se ».' },
      { type: 'guiding', text: '« Ce que » = la chose que.' },
      { type: 'guiding', text: 'C\'est un pronom démonstratif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ce que » signifie « la chose que », « ce qui » signifie « la chose qui ».',
      analysis: '« Ce que tu dis » = la chose que tu dis → Ce.'
    }
  },

  {
    id: 'homo-ce-se-005',
    type: 'homophone',
    template: 'Les oiseaux {BLANK} posent sur la branche.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['ce', 'se'],
        answer: 'se'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « ce » et « se ».' },
      { type: 'guiding', text: '« se poser » est un verbe pronominal.' },
      { type: 'guiding', text: 'Les oiseaux posent eux-mêmes → « se ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« se » avec verbe pronominal.',
      analysis: '« se poser » → ils se posent.'
    }
  },

  // ============================================
  // ON / ONT
  // on = pronom indéfini (sujet)
  // ont = verbe avoir (3e personne pluriel)
  // ============================================

  {
    id: 'homo-on-ont-001',
    type: 'homophone',
    template: 'Ils {BLANK} mangé toute la tarte.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['on', 'ont'],
        answer: 'ont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « on » (pronom) et « ont » (verbe avoir).' },
      { type: 'guiding', text: 'Essayez de remplacer par « avaient ».' },
      { type: 'guiding', text: '« Ils avaient mangé » → oui, verbe avoir !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ont » est le verbe avoir (3e personne pluriel). On peut le remplacer par « avaient ».',
      analysis: '« Ils avaient mangé » fonctionne → verbe avoir → ont.'
    }
  },

  {
    id: 'homo-on-ont-002',
    type: 'homophone',
    template: '{BLANK} va au cinéma ce soir.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['On', 'Ont'],
        answer: 'On'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « on » et « ont ».' },
      { type: 'guiding', text: 'Peut-on remplacer par « avaient » ?' },
      { type: 'guiding', text: '« Avaient va au cinéma » → non, c\'est le pronom « on ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« on » est un pronom indéfini sujet (= nous, les gens, quelqu\'un).',
      analysis: '« On » est le sujet de « va » → On.'
    }
  },

  {
    id: 'homo-on-ont-003',
    type: 'homophone',
    template: 'Les voisins {BLANK} déménagé.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['on', 'ont'],
        answer: 'ont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « on » et « ont ».' },
      { type: 'guiding', text: 'Test avec « avaient ».' },
      { type: 'guiding', text: '« Les voisins avaient déménagé » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ont » = verbe avoir au pluriel.',
      analysis: '« Les voisins avaient » fonctionne → ont.'
    }
  },

  {
    id: 'homo-on-ont-004',
    type: 'homophone',
    template: '{BLANK} dit que c\'est facile.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['On', 'Ont'],
        answer: 'On'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « on » et « ont ».' },
      { type: 'guiding', text: '« On dit » = les gens disent, il se dit que...' },
      { type: 'guiding', text: 'C\'est le pronom indéfini.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« on » est un pronom sujet (= les gens, quelqu\'un).',
      analysis: '« On dit » = les gens disent → On.'
    }
  },

  {
    id: 'homo-on-ont-005',
    type: 'homophone',
    template: 'Elles {BLANK} terminé leurs devoirs.',
    variables: {
      BLANK: {
        type: 'homophone',
        options: ['on', 'ont'],
        answer: 'ont'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « on » et « ont ».' },
      { type: 'guiding', text: 'Remplacez par « avaient ».' },
      { type: 'guiding', text: '« Elles avaient terminé » → oui !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettre(s).' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« ont » forme le passé composé avec avoir.',
      analysis: '« Elles avaient terminé » fonctionne → ont.'
    }
  }
]