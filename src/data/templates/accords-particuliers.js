export const templates = [
  // ============================================
  // TOUT / TOUS / TOUTE / TOUTES
  // ============================================

  // --- TOUT adverbe (invariable devant adjectif commençant par voyelle/h muet) ---
  {
    id: 'acc-tout-001',
    type: 'accord',
    template: 'Elles sont {BLANK} étonnées.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'tout'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tout » adverbe = entièrement, complètement.' },
      { type: 'guiding', text: 'Devant voyelle, « tout » reste invariable.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adverbe (= entièrement) est invariable devant un adjectif commençant par une voyelle ou un h muet.',
      analysis: '« Tout étonnées » = entièrement étonnées. Voyelle → tout (invariable).'
    }
  },

  // --- TOUT adverbe (variable devant consonne au féminin) ---
  {
    id: 'acc-tout-002',
    type: 'accord',
    template: 'Elles sont {BLANK} contentes.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'toutes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tout » adverbe devant consonne + féminin → accord !' },
      { type: 'guiding', text: 'Exception : s\'accorde devant consonne au féminin.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: 'Exception : « tout » adverbe s\'accorde au féminin devant une consonne ou un h aspiré.',
      analysis: '« Contentes » commence par consonne + féminin pluriel → toutes.'
    }
  },

  {
    id: 'acc-tout-003',
    type: 'accord',
    template: 'Elle est {BLANK} surprise.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'toute'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: 'Féminin singulier + consonne → accord.' },
      { type: 'guiding', text: '« Surprise » commence par une consonne.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adverbe s\'accorde au féminin devant une consonne.',
      analysis: 'Féminin singulier + consonne → toute surprise.'
    }
  },

  // --- TOUT adjectif (accord normal) ---
  {
    id: 'acc-tout-004',
    type: 'accord',
    template: '{BLANK} les élèves sont présents.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Tout', 'Tous', 'Toute', 'Toutes'],
        answer: 'Tous'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tout » adjectif s\'accorde avec le nom.' },
      { type: 'guiding', text: '« Les élèves » = masculin pluriel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adjectif s\'accorde en genre et en nombre avec le nom.',
      analysis: '« Les élèves » (m.p.) → Tous les élèves.'
    }
  },

  {
    id: 'acc-tout-005',
    type: 'accord',
    template: '{BLANK} la journée, il a plu.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Tout', 'Tous', 'Toute', 'Toutes'],
        answer: 'Toute'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« La journée » = féminin singulier.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adjectif s\'accorde avec le nom.',
      analysis: '« La journée » (f.s.) → Toute la journée.'
    }
  },

  {
    id: 'acc-tout-006',
    type: 'accord',
    template: '{BLANK} les filles sont arrivées.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Tout', 'Tous', 'Toute', 'Toutes'],
        answer: 'Toutes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Les filles » = féminin pluriel.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adjectif s\'accorde avec le nom.',
      analysis: '« Les filles » (f.p.) → Toutes les filles.'
    }
  },

  // --- TOUT pronom ---
  {
    id: 'acc-tout-007',
    type: 'accord',
    template: '{BLANK} est bien qui finit bien.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Tout', 'Tous', 'Toute', 'Toutes'],
        answer: 'Tout'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tout » pronom = toute chose, l\'ensemble.' },
      { type: 'guiding', text: 'Expression figée : « Tout est bien... »' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » pronom (= toute chose) est masculin singulier.',
      analysis: 'Pronom neutre → Tout est bien.'
    }
  },

  {
    id: 'acc-tout-008',
    type: 'accord',
    template: 'Ils sont {BLANK} venus.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'tous'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tous » pronom = chacun d\'eux.' },
      { type: 'guiding', text: '« Ils » = masculin pluriel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tous » pronom s\'accorde avec le sujet.',
      analysis: '« Ils » (m.p.) → Ils sont tous venus.'
    }
  },

  {
    id: 'acc-tout-009',
    type: 'accord',
    template: 'Elle est {BLANK} heureuse.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'tout'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Tout » adverbe devant voyelle → invariable.' },
      { type: 'guiding', text: '« Heureuse » commence par un h muet.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adverbe reste invariable devant voyelle ou h muet.',
      analysis: '« Heureuse » (h muet) → tout heureuse (invariable).'
    }
  },

  {
    id: 'acc-tout-010',
    type: 'accord',
    template: 'Elles étaient {BLANK} honteuses.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tout', 'tous', 'toute', 'toutes'],
        answer: 'toutes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tout / tous / toute / toutes.' },
      { type: 'guiding', text: '« Honteuses » commence par un h aspiré.' },
      { type: 'guiding', text: 'H aspiré = comme une consonne → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tout » adverbe s\'accorde devant h aspiré (considéré comme consonne).',
      analysis: '« Honteuses » (h aspiré, f.p.) → toutes honteuses.'
    }
  },

  // ============================================
  // LEUR / LEURS
  // ============================================

  // --- LEUR pronom (invariable) ---
  {
    id: 'acc-leur-001',
    type: 'accord',
    template: 'Je {BLANK} ai parlé hier.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » (pronom) et « leurs » (possessif).' },
      { type: 'guiding', text: '« Leur » pronom = à eux. Toujours invariable.' },
      { type: 'guiding', text: 'Devant un verbe → pronom → leur.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » pronom (= à eux, à elles) est toujours invariable, jamais de -s.',
      analysis: 'Je leur ai parlé = j\'ai parlé à eux → leur (pronom).'
    }
  },

  {
    id: 'acc-leur-002',
    type: 'accord',
    template: 'Elle {BLANK} a donné un cadeau.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: 'Devant un verbe → pronom.' },
      { type: 'guiding', text: 'Pronom = jamais de -s.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » pronom est invariable.',
      analysis: 'Elle leur a donné = elle a donné à eux → leur.'
    }
  },

  {
    id: 'acc-leur-003',
    type: 'accord',
    template: 'Je vais {BLANK} expliquer.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: 'Devant un verbe → pronom.' },
      { type: 'guiding', text: '« Leur » pronom = à eux.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » pronom (devant verbe) est toujours invariable.',
      analysis: 'Expliquer à eux → leur expliquer.'
    }
  },

  // --- LEURS déterminant (accord avec le nom) ---
  {
    id: 'acc-leur-004',
    type: 'accord',
    template: 'Ils ont pris {BLANK} affaires.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leurs'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: 'Devant un nom → déterminant possessif.' },
      { type: 'guiding', text: '« Affaires » est pluriel → leurs.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur/leurs » déterminant s\'accorde avec le nom qui suit.',
      analysis: '« Affaires » (pluriel) → leurs affaires.'
    }
  },

  {
    id: 'acc-leur-005',
    type: 'accord',
    template: 'Ils aiment {BLANK} maison.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: '« Maison » est singulier.' },
      { type: 'guiding', text: 'Déterminant + nom singulier → leur.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » déterminant reste singulier devant un nom singulier.',
      analysis: '« Maison » (singulier) → leur maison.'
    }
  },

  {
    id: 'acc-leur-006',
    type: 'accord',
    template: '{BLANK} enfants jouent dans le jardin.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Leur', 'Leurs'],
        answer: 'Leurs'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: '« Enfants » est pluriel.' },
      { type: 'guiding', text: 'Déterminant + nom pluriel → leurs.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leurs » devant un nom pluriel.',
      analysis: '« Enfants » (pluriel) → Leurs enfants.'
    }
  },

  {
    id: 'acc-leur-007',
    type: 'accord',
    template: 'Ils ont oublié {BLANK} parapluie.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: '« Parapluie » est singulier.' },
      { type: 'guiding', text: 'Même si plusieurs personnes, un seul parapluie → leur.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » s\'accorde avec le nom, pas avec les possesseurs.',
      analysis: 'Un parapluie (singulier) → leur parapluie.'
    }
  },

  {
    id: 'acc-leur-008',
    type: 'accord',
    template: 'Je {BLANK} dis la vérité.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['leur', 'leurs'],
        answer: 'leur'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « leur » et « leurs ».' },
      { type: 'guiding', text: 'Devant un verbe → pronom.' },
      { type: 'guiding', text: 'Pronom = invariable.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Leur » pronom (devant verbe) n\'a jamais de -s.',
      analysis: 'Dire à eux → je leur dis.'
    }
  },

  // ============================================
  // MÊME / MÊMES
  // ============================================

  // --- MÊME adjectif (accord) ---
  {
    id: 'acc-meme-001',
    type: 'accord',
    template: 'Nous avons les {BLANK} idées.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'mêmes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Même » adjectif s\'accorde avec le nom.' },
      { type: 'guiding', text: '« Idées » est pluriel → mêmes.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » adjectif (= identique) s\'accorde avec le nom.',
      analysis: '« Les idées » (pluriel) → les mêmes idées.'
    }
  },

  {
    id: 'acc-meme-002',
    type: 'accord',
    template: 'C\'est la {BLANK} chose.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'même'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Chose » est singulier.' },
      { type: 'guiding', text: 'Adjectif + nom singulier → même.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » adjectif s\'accorde avec le nom.',
      analysis: '« La chose » (singulier) → la même chose.'
    }
  },

  // --- MÊME avec pronom (accord) ---
  {
    id: 'acc-meme-003',
    type: 'accord',
    template: 'Ils l\'ont fait eux-{BLANK}.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'mêmes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Même » après un pronom s\'accorde avec lui.' },
      { type: 'guiding', text: '« Eux » est pluriel → eux-mêmes.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » après un pronom s\'accorde avec ce pronom.',
      analysis: '« Eux » (pluriel) → eux-mêmes.'
    }
  },

  {
    id: 'acc-meme-004',
    type: 'accord',
    template: 'Elle l\'a fait elle-{BLANK}.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'même'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Elle » est singulier.' },
      { type: 'guiding', text: 'Pronom singulier → elle-même.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » s\'accorde avec le pronom.',
      analysis: '« Elle » (singulier) → elle-même.'
    }
  },

  {
    id: 'acc-meme-005',
    type: 'accord',
    template: 'Nous-{BLANK} ne le savions pas.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'mêmes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Nous » est pluriel.' },
      { type: 'guiding', text: 'Pronom pluriel → nous-mêmes.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » après pronom pluriel prend un -s.',
      analysis: '« Nous » (pluriel) → nous-mêmes.'
    }
  },

  // --- MÊME adverbe (invariable) ---
  {
    id: 'acc-meme-006',
    type: 'accord',
    template: '{BLANK} les experts se sont trompés.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Même', 'Mêmes'],
        answer: 'Même'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Même » adverbe (= aussi, y compris) est invariable.' },
      { type: 'guiding', text: 'Placé devant le nom → adverbe.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » adverbe (= aussi, y compris) est invariable.',
      analysis: '« Même les experts » = y compris les experts → Même (invariable).'
    }
  },

  {
    id: 'acc-meme-007',
    type: 'accord',
    template: 'Ce sont les {BLANK} personnes qu\'hier.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'mêmes'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Même » adjectif = identique.' },
      { type: 'guiding', text: '« Personnes » est pluriel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » adjectif s\'accorde.',
      analysis: '« Les personnes » (pluriel) → les mêmes personnes.'
    }
  },

  {
    id: 'acc-meme-008',
    type: 'accord',
    template: 'Toi-{BLANK}, tu le sais.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['même', 'mêmes'],
        answer: 'même'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre « même » et « mêmes ».' },
      { type: 'guiding', text: '« Toi » est singulier.' },
      { type: 'guiding', text: 'Pronom singulier → toi-même.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Même » s\'accorde avec le pronom.',
      analysis: '« Toi » (singulier) → toi-même.'
    }
  },

  // ============================================
  // QUEL / QUELLE / QUELS / QUELLES
  // ============================================

  {
    id: 'acc-quel-001',
    type: 'accord',
    template: '{BLANK} heure est-il ?',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quelle'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Quel » s\'accorde avec le nom.' },
      { type: 'guiding', text: '« Heure » est féminin singulier.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » s\'accorde en genre et en nombre avec le nom.',
      analysis: '« Heure » (f.s.) → Quelle heure.'
    }
  },

  {
    id: 'acc-quel-002',
    type: 'accord',
    template: '{BLANK} beaux tableaux !',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quels'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Tableaux » est masculin pluriel.' },
      { type: 'guiding', text: 'Exclamation → accord avec le nom.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » exclamatif s\'accorde avec le nom.',
      analysis: '« Tableaux » (m.p.) → Quels beaux tableaux !'
    }
  },

  {
    id: 'acc-quel-003',
    type: 'accord',
    template: '{BLANK} est ton avis ?',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quel'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Avis » est masculin singulier.' },
      { type: 'guiding', text: 'Interrogation → accord avec le nom.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » interrogatif s\'accorde avec le nom.',
      analysis: '« Avis » (m.s.) → Quel est ton avis ?'
    }
  },

  {
    id: 'acc-quel-004',
    type: 'accord',
    template: '{BLANK} belles fleurs !',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quelles'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Fleurs » est féminin pluriel.' },
      { type: 'guiding', text: 'Exclamation → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » s\'accorde en genre et en nombre.',
      analysis: '« Fleurs » (f.p.) → Quelles belles fleurs !'
    }
  },

  {
    id: 'acc-quel-005',
    type: 'accord',
    template: '{BLANK} chance tu as !',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quelle'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Chance » est féminin singulier.' },
      { type: 'guiding', text: 'Exclamation → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » exclamatif s\'accorde.',
      analysis: '« Chance » (f.s.) → Quelle chance !'
    }
  },

  {
    id: 'acc-quel-006',
    type: 'accord',
    template: '{BLANK} sont vos projets ?',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Quel', 'Quelle', 'Quels', 'Quelles'],
        answer: 'Quels'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre quel / quelle / quels / quelles.' },
      { type: 'guiding', text: '« Projets » est masculin pluriel.' },
      { type: 'guiding', text: 'Interrogation → accord avec l\'attribut.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Quel » attribut s\'accorde avec le sujet.',
      analysis: '« Projets » (m.p.) → Quels sont vos projets ?'
    }
  },

  // ============================================
  // TEL / TELLE / TELS / TELLES
  // ============================================

  {
    id: 'acc-tel-001',
    type: 'accord',
    template: 'Une {BLANK} situation est inacceptable.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'telle'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Tel » s\'accorde avec le nom qu\'il accompagne.' },
      { type: 'guiding', text: '« Situation » est féminin singulier.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » adjectif s\'accorde avec le nom.',
      analysis: '« Situation » (f.s.) → une telle situation.'
    }
  },

  {
    id: 'acc-tel-002',
    type: 'accord',
    template: 'De {BLANK} propos sont choquants.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'tels'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Propos » est masculin pluriel.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » s\'accorde avec le nom.',
      analysis: '« Propos » (m.p.) → de tels propos.'
    }
  },

  {
    id: 'acc-tel-003',
    type: 'accord',
    template: 'Il court {BLANK} un lièvre.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'tel'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Tel » = comme. S\'accorde avec ce qui suit.' },
      { type: 'guiding', text: '« Un lièvre » est masculin singulier.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » (= comme) s\'accorde avec le nom qui suit.',
      analysis: '« Un lièvre » (m.s.) → tel un lièvre.'
    }
  },

  {
    id: 'acc-tel-004',
    type: 'accord',
    template: 'Elle chante {BLANK} une sirène.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'telle'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Tel » = comme. Accord avec ce qui suit.' },
      { type: 'guiding', text: '« Une sirène » est féminin singulier.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » (= comme) s\'accorde avec le terme de comparaison.',
      analysis: '« Une sirène » (f.s.) → telle une sirène.'
    }
  },

  {
    id: 'acc-tel-005',
    type: 'accord',
    template: '{BLANK} que je le connais, il refusera.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['Tel', 'Telle', 'Tels', 'Telles'],
        answer: 'Tel'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Tel que » s\'accorde avec le sujet de la phrase.' },
      { type: 'guiding', text: '« Je » (neutre) ou « il » (masculin) → tel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel que » peut s\'accorder avec le sujet ou l\'objet selon le sens.',
      analysis: 'Ici, « tel que je le connais » → Tel (masculin).'
    }
  },

  {
    id: 'acc-tel-006',
    type: 'accord',
    template: 'De {BLANK} erreurs sont impardonnables.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'telles'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Erreurs » est féminin pluriel.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » adjectif s\'accorde.',
      analysis: '« Erreurs » (f.p.) → de telles erreurs.'
    }
  },

  {
    id: 'acc-tel-007',
    type: 'accord',
    template: 'Les fleurs, {BLANK} des étoiles, illuminent le jardin.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'telles'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Tel » = comme. Accord avec ce qui précède ou suit ?' },
      { type: 'guiding', text: 'Traditionnellement avec ce qui suit : « étoiles » (f.p.).' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » (= comme) s\'accorde généralement avec ce qui suit.',
      analysis: '« Des étoiles » (f.p.) → telles des étoiles.'
    }
  },

  {
    id: 'acc-tel-008',
    type: 'accord',
    template: 'Un {BLANK} homme est rare.',
    variables: {
      BLANK: {
        type: 'accord',
        options: ['tel', 'telle', 'tels', 'telles'],
        answer: 'tel'
      }
    },
    hints: [
      { type: 'category', text: 'Choisir entre tel / telle / tels / telles.' },
      { type: 'guiding', text: '« Homme » est masculin singulier.' },
      { type: 'guiding', text: 'Adjectif → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' }
    ],
    explanation: {
      rule: '« Tel » s\'accorde avec le nom.',
      analysis: '« Homme » (m.s.) → un tel homme.'
    }
  }
]