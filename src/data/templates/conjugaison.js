export const templates = [
  // ============================================
  // SUBJONCTIF PRÉSENT
  // Utilisé après : il faut que, je veux que, pour que, bien que, etc.
  // ============================================

  // --- FAIRE ---
  {
    id: 'conj-subj-faire-001',
    type: 'conjugaison',
    template: 'Il faut que tu {BLANK} tes devoirs.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'SUBJONCTIF_PRESENT',
        person: 2,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Il faut que » est suivi du subjonctif.' },
      { type: 'guiding', text: 'Faire au subjonctif : que je fasse, que tu...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Après « il faut que », on utilise le subjonctif présent.',
      analysis: 'Faire → que tu fasses.'
    }
  },

  {
    id: 'conj-subj-faire-002',
    type: 'conjugaison',
    template: 'Je veux que vous {BLANK} attention.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'SUBJONCTIF_PRESENT',
        person: 2,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Je veux que » exige le subjonctif.' },
      { type: 'guiding', text: 'Faire au subjonctif avec « vous ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Après « vouloir que », on utilise le subjonctif.',
      analysis: 'Faire → que vous fassiez.'
    }
  },

  // --- ÊTRE ---
  {
    id: 'conj-subj-etre-001',
    type: 'conjugaison',
    template: 'Il faut que je {BLANK} à l\'heure.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'SUBJONCTIF_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: 'Être au subjonctif : que je sois, que tu sois...' },
      { type: 'guiding', text: 'C\'est un verbe irrégulier au subjonctif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Être au subjonctif présent : que je sois, que tu sois, qu\'il soit, que nous soyons, que vous soyez, qu\'ils soient.',
      analysis: 'Être → que je sois.'
    }
  },

  {
    id: 'conj-subj-etre-002',
    type: 'conjugaison',
    template: 'Bien qu\'il {BLANK} fatigué, il continue.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'SUBJONCTIF_PRESENT',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Bien que » est suivi du subjonctif.' },
      { type: 'guiding', text: 'Être, 3e personne du singulier au subjonctif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« Bien que » exprime la concession et exige le subjonctif.',
      analysis: 'Être → qu\'il soit.'
    }
  },

  // --- AVOIR ---
  {
    id: 'conj-subj-avoir-001',
    type: 'conjugaison',
    template: 'Je doute qu\'elle {BLANK} raison.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'avoir',
        tense: 'SUBJONCTIF_PRESENT',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Douter que » exige le subjonctif.' },
      { type: 'guiding', text: 'Avoir au subjonctif : que j\'aie, que tu aies, qu\'il...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Après les verbes de doute, on utilise le subjonctif.',
      analysis: 'Avoir → qu\'elle ait.'
    }
  },

  {
    id: 'conj-subj-avoir-002',
    type: 'conjugaison',
    template: 'Il est important que nous {BLANK} le temps.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'avoir',
        tense: 'SUBJONCTIF_PRESENT',
        person: 1,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Il est important que » → subjonctif.' },
      { type: 'guiding', text: 'Avoir avec « nous » au subjonctif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Les expressions impersonnelles de nécessité exigent le subjonctif.',
      analysis: 'Avoir → que nous ayons.'
    }
  },

  // --- ALLER ---
  {
    id: 'conj-subj-aller-001',
    type: 'conjugaison',
    template: 'Il faut que j\'{BLANK} à la banque.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'aller',
        tense: 'SUBJONCTIF_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: 'Aller au subjonctif : que j\'aille, que tu ailles...' },
      { type: 'guiding', text: 'Attention, c\'est irrégulier !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Aller au subjonctif : que j\'aille, que tu ailles, qu\'il aille, que nous allions, que vous alliez, qu\'ils aillent.',
      analysis: 'Aller → que j\'aille.'
    }
  },

  {
    id: 'conj-subj-aller-002',
    type: 'conjugaison',
    template: 'Je souhaite qu\'ils {BLANK} bien.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'aller',
        tense: 'SUBJONCTIF_PRESENT',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Souhaiter que » → subjonctif.' },
      { type: 'guiding', text: 'Aller, 3e personne du pluriel au subjonctif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Les verbes de souhait sont suivis du subjonctif.',
      analysis: 'Aller → qu\'ils aillent.'
    }
  },

  // --- POUVOIR ---
  {
    id: 'conj-subj-pouvoir-001',
    type: 'conjugaison',
    template: 'Il faut que tu {BLANK} venir demain.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'pouvoir',
        tense: 'SUBJONCTIF_PRESENT',
        person: 2,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: 'Pouvoir au subjonctif : que je puisse, que tu...' },
      { type: 'guiding', text: 'Le radical change au subjonctif.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Pouvoir au subjonctif présent : que je puisse, que tu puisses, qu\'il puisse...',
      analysis: 'Pouvoir → que tu puisses.'
    }
  },

  // --- SAVOIR ---
  {
    id: 'conj-subj-savoir-001',
    type: 'conjugaison',
    template: 'Il est essentiel qu\'il {BLANK} la vérité.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'savoir',
        tense: 'SUBJONCTIF_PRESENT',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: 'Savoir au subjonctif : que je sache, que tu saches...' },
      { type: 'guiding', text: 'Radical irrégulier : sach-' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Savoir au subjonctif : que je sache, que tu saches, qu\'il sache...',
      analysis: 'Savoir → qu\'il sache.'
    }
  },

  // --- PRENDRE ---
  {
    id: 'conj-subj-prendre-001',
    type: 'conjugaison',
    template: 'Il vaut mieux que vous {BLANK} le train.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'prendre',
        tense: 'SUBJONCTIF_PRESENT',
        person: 2,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Il vaut mieux que » → subjonctif.' },
      { type: 'guiding', text: 'Prendre au subjonctif avec « vous ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Prendre au subjonctif : que je prenne, que nous prenions, que vous preniez...',
      analysis: 'Prendre → que vous preniez.'
    }
  },

  // --- VENIR ---
  {
    id: 'conj-subj-venir-001',
    type: 'conjugaison',
    template: 'J\'aimerais qu\'ils {BLANK} à ma fête.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'venir',
        tense: 'SUBJONCTIF_PRESENT',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au subjonctif présent.' },
      { type: 'guiding', text: '« Aimer que » exprime un souhait → subjonctif.' },
      { type: 'guiding', text: 'Venir au subjonctif, 3e personne pluriel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Venir au subjonctif : que je vienne, que nous venions, qu\'ils viennent.',
      analysis: 'Venir → qu\'ils viennent.'
    }
  },

  // ============================================
  // CONDITIONNEL PRÉSENT
  // Utilisé pour : hypothèse, politesse, souhait, conseil
  // ============================================

  // --- ÊTRE ---
  {
    id: 'conj-cond-etre-001',
    type: 'conjugaison',
    template: 'Si j\'avais le choix, je {BLANK} médecin.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: '« Si + imparfait » → conditionnel dans la principale.' },
      { type: 'guiding', text: 'Être au conditionnel : je serais, tu serais...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Dans une hypothèse irréelle (si + imparfait), la conséquence est au conditionnel présent.',
      analysis: 'Être → je serais.'
    }
  },

  {
    id: 'conj-cond-etre-002',
    type: 'conjugaison',
    template: 'Nous {BLANK} ravis de vous accueillir.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Le conditionnel exprime ici la politesse.' },
      { type: 'guiding', text: 'Être avec « nous » au conditionnel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le conditionnel est utilisé pour la politesse et l\'atténuation.',
      analysis: 'Être → nous serions.'
    }
  },

  // --- AVOIR ---
  {
    id: 'conj-cond-avoir-001',
    type: 'conjugaison',
    template: 'Si tu travaillais plus, tu {BLANK} de meilleurs résultats.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'avoir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 2,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: '« Si + imparfait » → conditionnel.' },
      { type: 'guiding', text: 'Avoir au conditionnel : j\'aurais, tu aurais...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Hypothèse avec si + imparfait → conditionnel présent.',
      analysis: 'Avoir → tu aurais.'
    }
  },

  {
    id: 'conj-cond-avoir-002',
    type: 'conjugaison',
    template: 'J\'{BLANK} une question à vous poser.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'avoir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Conditionnel de politesse.' },
      { type: 'guiding', text: 'Avoir, 1re personne au conditionnel.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Le conditionnel adoucit une demande.',
      analysis: 'Avoir → j\'aurais.'
    }
  },

  // --- ALLER ---
  {
    id: 'conj-cond-aller-001',
    type: 'conjugaison',
    template: 'Si j\'avais de l\'argent, j\'{BLANK} en vacances.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'aller',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Aller au conditionnel : j\'irais, tu irais...' },
      { type: 'guiding', text: 'Le radical est irrégulier : ir-' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Aller au conditionnel : j\'irais, tu irais, il irait, nous irions, vous iriez, ils iraient.',
      analysis: 'Aller → j\'irais.'
    }
  },

  // --- FAIRE ---
  {
    id: 'conj-cond-faire-001',
    type: 'conjugaison',
    template: 'À ta place, je {BLANK} autrement.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: '« À ta place » introduit une hypothèse → conditionnel.' },
      { type: 'guiding', text: 'Faire au conditionnel : je ferais, tu ferais...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Faire au conditionnel : je ferais, tu ferais, il ferait...',
      analysis: 'Faire → je ferais.'
    }
  },

  {
    id: 'conj-cond-faire-002',
    type: 'conjugaison',
    template: 'Ils {BLANK} n\'importe quoi pour réussir.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'CONDITIONNEL_PRESENT',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Faire au conditionnel, 3e personne pluriel.' },
      { type: 'guiding', text: 'Radical : fer- + terminaisons.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Faire au conditionnel : ils feraient.',
      analysis: 'Faire → ils feraient.'
    }
  },

  // --- POUVOIR ---
  {
    id: 'conj-cond-pouvoir-001',
    type: 'conjugaison',
    template: '{BLANK}-vous m\'aider, s\'il vous plaît ?',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'pouvoir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 2,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Conditionnel de politesse.' },
      { type: 'guiding', text: 'Pouvoir au conditionnel : je pourrais, vous...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Pouvoir au conditionnel : je pourrais, tu pourrais, vous pourriez...',
      analysis: 'Pouvoir → Pourriez (avec majuscule en début de phrase).'
    }
  },

  // --- VOULOIR ---
  {
    id: 'conj-cond-vouloir-001',
    type: 'conjugaison',
    template: 'Je {BLANK} un café, s\'il vous plaît.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'vouloir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 1,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Vouloir au conditionnel pour la politesse.' },
      { type: 'guiding', text: 'Vouloir : je voudrais, tu voudrais...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« Je voudrais » est plus poli que « je veux ».',
      analysis: 'Vouloir → je voudrais.'
    }
  },

  // --- DEVOIR ---
  {
    id: 'conj-cond-devoir-001',
    type: 'conjugaison',
    template: 'Tu {BLANK} faire plus attention.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'devoir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 2,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Devoir au conditionnel exprime un conseil.' },
      { type: 'guiding', text: 'Devoir : je devrais, tu devrais...' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: '« Tu devrais » donne un conseil de manière atténuée.',
      analysis: 'Devoir → tu devrais.'
    }
  },

  // --- VOIR ---
  {
    id: 'conj-cond-voir-001',
    type: 'conjugaison',
    template: 'On {BLANK} bien s\'il était honnête.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'voir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Voir au conditionnel : je verrais, on verrait...' },
      { type: 'guiding', text: 'Radical : verr-' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Voir au conditionnel : je verrais, tu verrais, on verrait...',
      analysis: 'Voir → on verrait.'
    }
  },

  // --- VENIR ---
  {
    id: 'conj-cond-venir-001',
    type: 'conjugaison',
    template: 'Ils {BLANK} s\'ils pouvaient.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'venir',
        tense: 'CONDITIONNEL_PRESENT',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au conditionnel présent.' },
      { type: 'guiding', text: 'Venir au conditionnel : je viendrais, ils viendraient...' },
      { type: 'guiding', text: 'Radical : viendr-' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Venir au conditionnel : je viendrais, tu viendrais, ils viendraient.',
      analysis: 'Venir → ils viendraient.'
    }
  },

  // ============================================
  // PASSÉ SIMPLE
  // Temps du récit, littérature, événements ponctuels passés
  // ============================================

  // --- ÊTRE ---
  {
    id: 'conj-ps-etre-001',
    type: 'conjugaison',
    template: 'Il {BLANK} surpris par la nouvelle.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Être au passé simple : je fus, tu fus, il fut...' },
      { type: 'guiding', text: 'Temps du récit littéraire.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Être au passé simple : je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent.',
      analysis: 'Être → il fut.'
    }
  },

  {
    id: 'conj-ps-etre-002',
    type: 'conjugaison',
    template: 'Ils {BLANK} les premiers à arriver.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'être',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Être, 3e personne pluriel au passé simple.' },
      { type: 'guiding', text: 'Terminaison en -urent.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Être au passé simple : ils furent.',
      analysis: 'Être → ils furent.'
    }
  },

  // --- AVOIR ---
  {
    id: 'conj-ps-avoir-001',
    type: 'conjugaison',
    template: 'Elle {BLANK} une idée brillante.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'avoir',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Avoir au passé simple : j\'eus, tu eus, il eut...' },
      { type: 'guiding', text: 'Attention à l\'orthographe !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Avoir au passé simple : j\'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent.',
      analysis: 'Avoir → elle eut.'
    }
  },

  // --- FAIRE ---
  {
    id: 'conj-ps-faire-001',
    type: 'conjugaison',
    template: 'Il {BLANK} ce qu\'il put.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Faire au passé simple : je fis, tu fis, il fit...' },
      { type: 'guiding', text: 'Radical : f- + terminaisons en -is, -it.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Faire au passé simple : je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent.',
      analysis: 'Faire → il fit.'
    }
  },

  {
    id: 'conj-ps-faire-002',
    type: 'conjugaison',
    template: 'Ils {BLANK} de leur mieux.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'faire',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Faire, 3e personne pluriel au passé simple.' },
      { type: 'guiding', text: 'Terminaison : -irent.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Faire au passé simple : ils firent.',
      analysis: 'Faire → ils firent.'
    }
  },

  // --- PRENDRE ---
  {
    id: 'conj-ps-prendre-001',
    type: 'conjugaison',
    template: 'Il {BLANK} son chapeau et sortit.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'prendre',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Prendre au passé simple : je pris, il prit...' },
      { type: 'guiding', text: 'Terminaisons en -is, -it.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Prendre au passé simple : je pris, tu pris, il prit, ils prirent.',
      analysis: 'Prendre → il prit.'
    }
  },

  // --- VOIR ---
  {
    id: 'conj-ps-voir-001',
    type: 'conjugaison',
    template: 'Elle {BLANK} au loin une silhouette.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'voir',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Voir au passé simple : je vis, tu vis, il vit...' },
      { type: 'guiding', text: 'Attention : ne pas confondre avec le présent « il voit ».' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Voir au passé simple : je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent.',
      analysis: 'Voir → elle vit.'
    }
  },

  // --- VENIR ---
  {
    id: 'conj-ps-venir-001',
    type: 'conjugaison',
    template: 'Ils {BLANK} à sa rencontre.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'venir',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'P'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Venir au passé simple : je vins, ils vinrent...' },
      { type: 'guiding', text: 'Terminaisons en -ins, -int, -inrent.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Venir au passé simple : je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent.',
      analysis: 'Venir → ils vinrent.'
    }
  },

  // --- DIRE ---
  {
    id: 'conj-ps-dire-001',
    type: 'conjugaison',
    template: 'Elle {BLANK} la vérité.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'dire',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Dire au passé simple : je dis, tu dis, il dit...' },
      { type: 'guiding', text: 'Même forme que le présent pour certaines personnes !' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Dire au passé simple : je dis, tu dis, il dit, nous dîmes, vous dîtes, ils dirent.',
      analysis: 'Dire → elle dit.'
    }
  },

  // --- POUVOIR ---
  {
    id: 'conj-ps-pouvoir-001',
    type: 'conjugaison',
    template: 'Il ne {BLANK} rien faire.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'pouvoir',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Pouvoir au passé simple : je pus, tu pus, il put...' },
      { type: 'guiding', text: 'Terminaisons en -us, -ut.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Pouvoir au passé simple : je pus, tu pus, il put, nous pûmes, vous pûtes, ils purent.',
      analysis: 'Pouvoir → il put.'
    }
  },

  // --- SAVOIR ---
  {
    id: 'conj-ps-savoir-001',
    type: 'conjugaison',
    template: 'Dès qu\'il {BLANK} la nouvelle, il partit.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'savoir',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Savoir au passé simple : je sus, tu sus, il sut...' },
      { type: 'guiding', text: 'Terminaisons en -us, -ut.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Savoir au passé simple : je sus, tu sus, il sut, nous sûmes, vous sûtes, ils surent.',
      analysis: 'Savoir → il sut.'
    }
  },

  // --- METTRE ---
  {
    id: 'conj-ps-mettre-001',
    type: 'conjugaison',
    template: 'Elle {BLANK} sa plus belle robe.',
    variables: {
      BLANK: {
        type: 'conjugaison',
        verb: 'mettre',
        tense: 'PASSE_SIMPLE',
        person: 3,
        number: 'S'
      }
    },
    hints: [
      { type: 'category', text: 'Conjuguez au passé simple.' },
      { type: 'guiding', text: 'Mettre au passé simple : je mis, tu mis, il mit...' },
      { type: 'guiding', text: 'Terminaisons en -is, -it.' },
      { type: 'letter-count', text: '{ANSWER_LENGTH} lettres.' },
      { type: 'first-letter', text: 'Commence par « {ANSWER_FIRST} ».' }
    ],
    explanation: {
      rule: 'Mettre au passé simple : je mis, tu mis, il mit, nous mîmes, vous mîtes, ils mirent.',
      analysis: 'Mettre → elle mit.'
    }
  }
]