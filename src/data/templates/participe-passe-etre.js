export const templates = [
  // ============================================
  // SUJET FÉMININ SINGULIER
  // ============================================

  {
    id: 'pp-etre-fem-sing-001',
    type: 'generated',
    template: '{SUJET} est {BLANK} tôt ce matin.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Marie', 'Sophie', 'Elle', 'Ma sœur', 'Ma mère'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'arriver', 'sortir', 'venir', 'rentrer'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec l\'auxiliaire être.' },
      { type: 'guiding', text: 'Avec être, le PP s\'accorde avec quoi ?' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec l\'auxiliaire être, le participe passé s\'accorde toujours avec le SUJET.',
      analysis: 'Le sujet « {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-sing-002',
    type: 'generated',
    template: '{SUJET} est {BLANK} à Paris pour le travail.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Julie', 'Ma collègue', 'Elle', 'Ma tante', 'La directrice'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['aller', 'partir', 'rester', 'retourner'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Le PP s\'accorde avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-sing-003',
    type: 'generated',
    template: 'Hier soir, {SUJET} est {BLANK} vers minuit.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Claire', 'Ma fille', 'Elle', 'Mon amie', 'La voisine'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['rentrer', 'revenir', 'arriver', 'partir', 'sortir'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Quel est le sujet de cette phrase ?' },
      { type: 'guiding', text: 'Accord avec « {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: 'Sujet = « {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-sing-004',
    type: 'generated',
    template: '{SUJET} est {BLANK} par la porte arrière.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elle', 'Ma sœur', 'La cliente', 'Cette femme', 'L\'invitée'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['entrer', 'sortir', 'passer'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Avec être, on accorde avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-sing-005',
    type: 'generated',
    template: '{SUJET} est {BLANK} malade la semaine dernière.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elle', 'Ma mère', 'Ma collègue', 'Cette étudiante', 'La professeure'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['tomber'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Avec être, accord avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-sing-006',
    type: 'generated',
    template: '{SUJET} est {BLANK} en 1990.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elle', 'Ma sœur', 'Cette actrice', 'La chanteuse', 'Mon amie'],
        gender: 'F',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['naître'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Le PP s\'accorde avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  // ============================================
  // SUJET MASCULIN SINGULIER
  // ============================================

  {
    id: 'pp-etre-masc-sing-001',
    type: 'generated',
    template: '{SUJET} est {BLANK} ce matin à sept heures.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Pierre', 'Mon frère', 'Il', 'Mon père', 'Le directeur'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'arriver', 'sortir', 'venir', 'rentrer'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Avec être, accord avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-sing-002',
    type: 'generated',
    template: '{SUJET} est {BLANK} au bureau très tard hier.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Marc', 'Mon collègue', 'Il', 'Mon ami', 'Le comptable'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['rester', 'arriver', 'retourner', 'revenir'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Le sujet détermine l\'accord.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: 'Sujet « {SUJET} » = {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-sing-003',
    type: 'generated',
    template: 'La semaine dernière, {SUJET} est {BLANK} en voyage.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Thomas', 'Mon fils', 'Il', 'Mon voisin', 'Le patron'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'aller', 'rester'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Trouvez le sujet.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-sing-004',
    type: 'generated',
    template: '{SUJET} est {BLANK} dans l\'escalier ce matin.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Il', 'Mon frère', 'Le voisin', 'Cet enfant', 'Mon fils'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['tomber', 'monter', 'descendre', 'passer'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Qui est le sujet ?' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-sing-005',
    type: 'generated',
    template: '{SUJET} est {BLANK} en 1985.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Il', 'Mon père', 'Cet acteur', 'Le chanteur', 'Mon ami'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['naître'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Accord avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-sing-006',
    type: 'generated',
    template: '{SUJET} est {BLANK} chez lui toute la journée.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Il', 'Mon frère', 'Mon père', 'Le voisin', 'Mon ami'],
        gender: 'M',
        number: 'S'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['rester'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Le PP s\'accorde avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  // ============================================
  // SUJET FÉMININ PLURIEL
  // ============================================

  {
    id: 'pp-etre-fem-plur-001',
    type: 'generated',
    template: '{SUJET} sont {BLANK} ensemble au restaurant.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elles', 'Les filles', 'Mes sœurs', 'Mes amies', 'Mes collègues'],
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['aller', 'venir', 'retourner'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: '« {SUJET} » est de quel genre et nombre ?' },
      { type: 'guiding', text: '{GENDER} {NUMBER} → quelle terminaison ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-plur-002',
    type: 'generated',
    template: '{SUJET} sont {BLANK} en vacances la semaine dernière.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elles', 'Les étudiantes', 'Mes cousines', 'Les voisines', 'Ces femmes'],
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'aller', 'rester'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Accord avec le sujet « {SUJET} ».' },
      { type: 'guiding', text: '{GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » = {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-plur-003',
    type: 'generated',
    template: 'Ce matin, {SUJET} sont {BLANK} à pied.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elles', 'Les jumelles', 'Mes nièces', 'Les directrices', 'Mes tantes'],
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['venir', 'arriver', 'partir', 'rentrer', 'repartir'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Sujet = « {SUJET} ».' },
      { type: 'guiding', text: '{GENDER} {NUMBER} → accord.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-plur-004',
    type: 'generated',
    template: '{SUJET} sont {BLANK} par l\'escalier de service.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elles', 'Les invitées', 'Les clientes', 'Mes amies', 'Les actrices'],
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['monter', 'descendre', 'passer', 'entrer', 'sortir'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Qui est le sujet ?' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-fem-plur-005',
    type: 'generated',
    template: '{SUJET} sont {BLANK} à la maison hier soir.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Elles', 'Les filles', 'Mes sœurs', 'Mes cousines', 'Les voisines'],
        gender: 'F',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['rester', 'rentrer', 'revenir', 'retourner'],
        auxiliary: 'ETRE',
        agreeGender: 'F',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Accord avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  // ============================================
  // SUJET MASCULIN PLURIEL
  // ============================================

  {
    id: 'pp-etre-masc-plur-001',
    type: 'generated',
    template: '{SUJET} sont {BLANK} avant la fin du film.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les garçons', 'Mes frères', 'Les étudiants', 'Mes amis'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'sortir', 'repartir'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'guiding', text: 'Quelle terminaison pour {GENDER} {NUMBER} ?' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » = {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-plur-002',
    type: 'generated',
    template: '{SUJET} sont {BLANK} en retard à cause du trafic.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les invités', 'Mes cousins', 'Les directeurs', 'Ces messieurs'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['arriver', 'venir', 'rentrer'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Accord avec « {SUJET} ».' },
      { type: 'guiding', text: '{GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-plur-003',
    type: 'generated',
    template: 'Hier soir, {SUJET} sont {BLANK} dès vingt heures.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les enfants', 'Mes neveux', 'Les visiteurs', 'Mes fils'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['partir', 'rentrer', 'repartir', 'sortir'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Identifiez le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, accord avec le sujet.',
      analysis: 'Sujet « {SUJET} » = {GENDER} {NUMBER} → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-plur-004',
    type: 'generated',
    template: '{SUJET} sont {BLANK} par la grande porte.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les clients', 'Les touristes', 'Mes collègues', 'Les participants'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['entrer', 'sortir', 'passer'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Qui est le sujet ?' },
      { type: 'guiding', text: '« {SUJET} » est {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-plur-005',
    type: 'generated',
    template: '{SUJET} sont {BLANK} au sommet de la montagne.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les randonneurs', 'Les alpinistes', 'Mes amis', 'Les guides'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['arriver', 'monter', 'parvenir', 'rester'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Accord avec le sujet.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avec être, le PP s\'accorde avec le sujet.',
      analysis: '« {SUJET} » ({GENDER} {NUMBER}) → {ANSWER}.'
    }
  },

  {
    id: 'pp-etre-masc-plur-006',
    type: 'generated',
    template: '{SUJET} sont {BLANK} chez eux après le dîner.',
    variables: {
      SUJET: {
        type: 'static-list',
        values: ['Ils', 'Les invités', 'Mes parents', 'Les voisins', 'Mes oncles'],
        gender: 'M',
        number: 'P'
      },
      BLANK: {
        type: 'participe-passe',
        verbs: ['rentrer', 'retourner', 'repartir', 'revenir'],
        auxiliary: 'ETRE',
        agreeGender: 'M',
        agreeNumber: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Participe passé avec être.' },
      { type: 'guiding', text: 'Le sujet détermine l\'accord.' },
      { type: 'guiding', text: '« {SUJET} » : {GENDER} {NUMBER}.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le PP avec être s\'accorde avec le sujet.',
      analysis: '« {SUJET} » est {GENDER} {NUMBER} → {ANSWER}.'
    }
  }
]