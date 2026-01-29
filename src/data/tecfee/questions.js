// ============================================
// BANQUE DE QUESTIONS TECFÉE - VERSION OFFICIELLE
// Basée sur les Exercices préparatoires au TECFÉE (60 questions)
// TOUTES les options ont un mot souligné (format officiel)
// ============================================

export const tecfeeQuestions = [
  // ============================================
  // PARTIE A
  // 1. ORTHOGRAPHE GRAMMATICALE ET MORPHOLOGIE
  // Questions 1-21
  // ============================================
  
  // Question 1 - Adjectifs de couleur composés
  {
    id: 'og-001',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Des <u>paquets-cadeaux</u> ont été offerts aux invités lors du lancement de l'entreprise.", correct: false },
      { letter: 'b', text: "Une immense banderole <u>bleue lavande</u> ornait la devanture de la boutique.", correct: true },
      { letter: 'c', text: "Ce publicitaire utilise <u>toutes les stratégies possibles</u> pour convaincre les consommateurs.", correct: false },
      { letter: 'd', text: "Les <u>avant-projets</u> présentés par ce publicitaire sont prometteurs.", correct: false }
    ],
    explanation: "Les adjectifs de couleur de forme complexe (composés de 2 mots ou plus) sont invariables. On écrit « bleu lavande » sans accord.",
    rule: "Accord des adjectifs de couleur composés"
  },
  
  // Question 2 - Accord du participe passé avec CD placé avant
  {
    id: 'og-002',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "La proposition a été unanimement <u>approuvée</u> par les personnes présentes à la réunion.", correct: false },
      { letter: 'b', text: "La responsable du projet l'a clairement <u>exposée</u>, sa vision du problème.", correct: false },
      { letter: 'c', text: "Les différentes tâches à accomplir, ils se les sont <u>partagés</u> lors de la dernière réunion.", correct: true },
      { letter: 'd', text: "Tous les employés, la réceptionniste <u>incluse</u>, auront une augmentation de salaire.", correct: false }
    ],
    explanation: "Le participe passé « partagées » doit s'accorder avec le CD « les » (qui remplace « les tâches », féminin pluriel) placé avant le verbe.",
    rule: "Accord du participe passé avec avoir - CD placé avant"
  },
  
  // Question 3 - Tout adverbe invariable
  {
    id: 'og-003',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "<u>Deux-cent-quatre-vingts</u> personnes assistent au lancement de la nouvelle gamme de produits.", correct: false },
      { letter: 'b', text: "La cliente avait l'air <u>toute déçue</u> que son produit préféré ne soit plus vendu dans cette boutique.", correct: false },
      { letter: 'c', text: "Une entreprise québécoise a mis sur le marché de <u>tous nouveaux</u> produits cosmétiques.", correct: true },
      { letter: 'd', text: "Vous avez passé une <u>demi-journée</u> à faire du lèche-vitrines.", correct: false }
    ],
    explanation: "Ici, « tout » est un adverbe (il modifie l'adjectif « nouveaux »; on peut le remplacer par « entièrement » : entièrement nouveaux). L'adverbe est invariable. On écrit « de tout nouveaux produits ».",
    rule: "Tout adverbe vs tout déterminant"
  },
  
  // Question 4 - Verbes en -soudre
  {
    id: 'og-004',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "C'est un enfant excité qui <u>courra</u> vers ses grands-parents pour les embrasser.", correct: false },
      { letter: 'b', text: "Il faut que la mère de Simon <u>prévoie</u> apporter des vêtements chauds.", correct: false },
      { letter: 'c', text: "Simon <u>se perdrait</u> s'il allait chez ses grands-parents seul en autobus.", correct: false },
      { letter: 'd', text: "Son grand-père <u>dissoud</u> deux carrés de sucre dans son thé.", correct: true }
    ],
    explanation: "Les verbes en -soudre (dissoudre) et en -indre perdent le « d » qui précède la terminaison -re au singulier de l'indicatif présent (je dissous, tu dissous, il dissout).",
    rule: "Conjugaison des verbes en -soudre"
  },
  
  // Question 5 - Quelque adverbe
  {
    id: 'og-005',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Il me reste <u>quelques</u> documents à préparer pour la réunion.", correct: false },
      { letter: 'b', text: "Nous trouverons une solution, <u>quel que</u> soit le problème soulevé.", correct: false },
      { letter: 'c', text: "<u>Quelques</u> fatigués qu'ils soient, les participants sont restés jusqu'à la fin de la réunion.", correct: true },
      { letter: 'd', text: "Un employé très <u>négligent</u> a laissé des documents confidentiels dans le local de réunion.", correct: false }
    ],
    explanation: "Ici, l'expression « quelque… que » encadre un groupe adjectival (fatigués). « Quelque » est donc un adverbe, qu'on peut remplacer par « si » : si fatigués qu'ils soient. L'adverbe est invariable.",
    rule: "Quelque adverbe vs quelques déterminant"
  },
  
  // Question 6 - Vu préposition invariable
  {
    id: 'og-006',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Nous les avons <u>regardé</u> construire, les nouveaux bacs à jardinets du jardin communautaire.", correct: false },
      { letter: 'b', text: "Les plans de réaménagement du jardin, nous en avons <u>discuté</u> longuement.", correct: false },
      { letter: 'c', text: "Vous trouverez <u>ci-annexé</u> les fiches explicatives sur le soin des plantes.", correct: false },
      { letter: 'd', text: "<u>Vues</u> les moyennes élevées de température, ces fruits ont muri prématurément.", correct: true }
    ],
    explanation: "Ici, « vu » est une préposition (on pourrait remplacer « vu » par une autre préposition, par exemple « à cause de »). C'est le cas quand ce participe passé est employé seul, sans virgule, avant un nom. La préposition est invariable.",
    rule: "Vu, excepté, ci-joint prépositions invariables"
  },

  // Question 7 - PP avec CD placé après
  {
    id: 'og-007',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Ces éditeurs ont publié moins d'ouvrages littéraires qu'ils ne l'avaient <u>planifié</u>.", correct: false },
      { letter: 'b', text: "Des pièces pour enfants, Lorraine en a <u>créées</u> cinq jusqu'à maintenant.", correct: true },
      { letter: 'c', text: "Deux comédiennes se sont <u>associées</u> pour créer des pièces de théâtre pour enfants.", correct: false },
      { letter: 'd', text: "La scène finale de ce drame historique, je ne l'ai pas encore <u>lue</u>.", correct: false }
    ],
    explanation: "Le participe passé « créé » d'un verbe qui a un CD (le pronom numéral « cinq ») placé après lui reste invariable. On écrit « en a créé cinq ».",
    rule: "Accord du participe passé - CD placé après le verbe"
  },

  // Question 8 - Tout adverbe (toute autre)
  {
    id: 'og-008',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Ces alpinistes ont mis trois semaines et <u>demie</u> à préparer leur voyage.", correct: false },
      { letter: 'b', text: "La grimpeuse inexpérimentée était <u>toute haletante</u> à son arrivée au sommet.", correct: false },
      { letter: 'c', text: "La prochaine expédition leur donnera l'occasion d'utiliser leur <u>nouvel</u> équipement.", correct: false },
      { letter: 'd', text: "L'équipe d'alpinistes a adopté une <u>toute autre</u> stratégie que celle recommandée par les experts.", correct: true }
    ],
    explanation: "Ici, « tout » est un adverbe (il modifie l'adjectif « autre »; on peut le remplacer par « entièrement » : une stratégie entièrement autre). L'adverbe est invariable. On écrit « une tout autre stratégie ».",
    rule: "Tout adverbe invariable devant autre"
  },

  // Question 9 - Quelque adverbe devant un nombre
  {
    id: 'og-009',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Cet élève se démarque en <u>excellant</u> autant dans les sports que dans les matières scolaires.", correct: false },
      { letter: 'b', text: "Il y a <u>quelques</u> trente ans, ce phénomène était à peine observé dans les écoles.", correct: true },
      { letter: 'c', text: "La cohabitation de <u>diverses</u> cultures à l'école est un phénomène émergent.", correct: false },
      { letter: 'd', text: "Le défi à relever, <u>quel qu'il soit</u>, ne fera pas reculer cette enseignante.", correct: false }
    ],
    explanation: "Ici, « quelque » est un adverbe (il modifie le déterminant numéral « trente »; on peut le remplacer par « environ » : il y a environ trente ans). L'adverbe est invariable.",
    rule: "Quelque adverbe devant un nombre"
  },

  // Question 10 - Verbe pronominal sans CD (se téléphoner)
  {
    id: 'og-010',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "François et Stéphanie se sont <u>téléphonés</u> pour fixer un lieu de rendez-vous.", correct: true },
      { letter: 'b', text: "L'exposition des artistes régionaux aura été <u>annulée</u> en raison de la pluie.", correct: false },
      { letter: 'c', text: "Les artistes que j'ai <u>vus</u> peindre en direct avaient des styles variés.", correct: false },
      { letter: 'd', text: "Tous les artistes présents, <u>excepté</u> ces deux peintres, étaient des amateurs.", correct: false }
    ],
    explanation: "Le participe passé « téléphoné » d'un verbe qui n'a pas de CD reste invariable quand il s'agit d'un verbe pronominal où on téléphone À quelqu'un (CI). On écrit « se sont téléphoné ».",
    rule: "Accord du PP des verbes pronominaux sans CD"
  },

  // Question 11 - À demi (locution adverbiale invariable)
  {
    id: 'og-011',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "L'actrice personnifie la douceur et l'intelligence <u>mêmes</u> dans le rôle qu'elle incarne.", correct: false },
      { letter: 'b', text: "La salle était à <u>demie</u> vide, malgré les nombreuses invitations envoyées.", correct: true },
      { letter: 'c', text: "Les <u>tout récents</u> changements apportés à la salle en ont amélioré l'acoustique.", correct: false },
      { letter: 'd', text: "<u>Quelque</u> chers que soient les billets, la salle de spectacle se remplit chaque soir.", correct: false }
    ],
    explanation: "La locution adverbiale (ou adverbe de forme complexe) « à demi » est invariable. On écrit « à demi vide ».",
    rule: "À demi locution adverbiale invariable"
  },

  // Question 12 - Verbes en -indre (rejoindre)
  {
    id: 'og-012',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Guillaume <u>éteint</u> toujours soigneusement son feu de camp avant de partir.", correct: false },
      { letter: 'b', text: "Il est possible que tu lui <u>aies donné</u> la mauvaise direction.", correct: false },
      { letter: 'c', text: "Si le centre de loisir n'était pas si loin, nous nous y <u>rendrions</u> à pied.", correct: false },
      { letter: 'd', text: "Les samedis matin, Élise <u>rejoind</u> ses compagnons de marche dans le parc.", correct: true }
    ],
    explanation: "Les verbes en -indre (rejoindre) et en -soudre perdent le « d » qui précède la terminaison -re au singulier de l'indicatif présent (je rejoins, tu rejoins, il rejoint).",
    rule: "Conjugaison des verbes en -indre"
  },

  // Question 13 - Conditionnel des verbes en -ier
  {
    id: 'og-013',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Afin de te préparer à l'examen, <u>refais</u> les exercices du recueil de notes.", correct: false },
      { letter: 'b', text: "Ces étudiants <u>acquerront</u> les connaissances requises pour leur future profession.", correct: false },
      { letter: 'c', text: "Que tu me <u>prêtes</u> tes notes de cours me rend service.", correct: false },
      { letter: 'd', text: "Si vous en aviez le temps, vous <u>recopiriez</u> vos notes de cours pour mieux les mémoriser.", correct: true }
    ],
    explanation: "La terminaison du verbe « recopier » est -er, comme dans le verbe modèle « aimer ». Il faut garder le « e » de la terminaison de l'infinitif quand on conjugue le verbe au conditionnel présent (aimer : vous aimeriez; recopier : vous recopieriez).",
    rule: "Conditionnel présent des verbes en -ier"
  },

  // Question 14 - Même adjectif avec nous
  {
    id: 'og-014',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Les critiques cinématographiques ont <u>tous</u> recommandé ce film d'horreur.", correct: false },
      { letter: 'b', text: "Les personnages <u>mêmes</u> du film avaient un aspect repoussant.", correct: false },
      { letter: 'c', text: "Les spectatrices étaient <u>toutes</u> horrifiées par les scènes de violence présentées dans le film.", correct: false },
      { letter: 'd', text: "<u>Nous-même</u> avons dû fermer les yeux durant certaines scènes du film.", correct: true }
    ],
    explanation: "Ici, « mêmes » est un adjectif (il est complément du pronom « nous »). L'adjectif s'accorde en genre et en nombre avec le pronom dont il est complément (« nous » est pluriel, alors « mêmes » doit être au pluriel).",
    rule: "Même adjectif : accord avec le pronom"
  },

  // Question 15 - PP suivi d'un infinitif (CD pas sujet)
  {
    id: 'og-015',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "L'apprentie cuisinière s'est <u>éraflé</u> la main en coupant une courge à la pelure épaisse.", correct: false },
      { letter: 'b', text: "Les vins que nous aurions <u>voulus</u> déguster n'étaient plus offerts.", correct: true },
      { letter: 'c', text: "Nous avons commandé des plats que nous avions particulièrement <u>aimés</u> les fois précédentes.", correct: false },
      { letter: 'd', text: "Nous nous sommes <u>donné</u> rendez-vous à notre restaurant préféré.", correct: false }
    ],
    explanation: "Quand le participe passé (voulu) est suivi d'un infinitif (déguster), il s'accorde avec le CD (que mis pour les vins) placé avant si ce CD est le sujet de l'infinitif. Ici, « que » (les vins) n'est pas le sujet de « déguster » (ce ne sont pas les vins qui dégustent). Le PP reste donc invariable.",
    rule: "PP suivi d'un infinitif : accord selon le sujet de l'infinitif"
  },

  // Question 16 - Se plaire (PP invariable)
  {
    id: 'og-016',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Je ne sais plus combien de bouteilles d'eau nous avons <u>dû</u> distribuer aux coureurs.", correct: false },
      { letter: 'b', text: "Nous nous sommes beaucoup <u>plus</u> à faire du bénévolat pour le marathon annuel.", correct: true },
      { letter: 'c', text: "Plusieurs se sont <u>souhaité</u> bonne chance avant le signal de départ.", correct: false },
      { letter: 'd', text: "Vous devez remplir la fiche <u>ci-incluse</u> pour être admis dans l'équipe de bénévoles.", correct: false }
    ],
    explanation: "Le participe passé des verbes « se plaire », « se déplaire », « se complaire », « se rire », « se rendre compte » est invariable. On écrit « nous nous sommes plu ».",
    rule: "PP invariable : se plaire, se déplaire, se complaire, se rire"
  },

  // Question 17 - Tout adverbe devant voyelle
  {
    id: 'og-017',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "C'est une fillette <u>toute</u> éblouie qui a reçu le jeu dont elle rêvait depuis des mois.", correct: true },
      { letter: 'b', text: "Cet organisme a <u>tout</u> emporté, même les meubles qui nécessitent des réparations.", correct: false },
      { letter: 'c', text: "Le nom de l'organisme est inscrit en grosses lettres <u>vert foncé</u> sur fond gris.", correct: false },
      { letter: 'd', text: "Les organismes <u>tels que</u> celui-ci apportent un soutien essentiel aux gens défavorisés.", correct: false }
    ],
    explanation: "Ici, « tout » est un adverbe (il modifie l'adjectif « éblouie »; on peut le remplacer par « complètement » : complètement éblouie). L'adverbe est invariable. On écrit « tout éblouie ». (Note : « tout » adverbe s'accorde par euphonie seulement devant un adjectif féminin commençant par une consonne ou un h aspiré.)",
    rule: "Tout adverbe : invariable devant voyelle ou h muet"
  },

  // Question 18 - PP + infinitif (vu capturer)
  {
    id: 'og-018',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Cette mésaventure en forêt, vos amies vous l'ont <u>racontée</u> dans les moindres détails.", correct: false },
      { letter: 'b', text: "Elle les a <u>vus</u> capturer, les deux ours qui ont attaqué des randonneurs.", correct: true },
      { letter: 'c', text: "L'apparition soudaine d'un ours doit surement les avoir <u>effrayés</u>, ces deux randonneurs.", correct: false },
      { letter: 'd', text: "Le garde forestier nous avait <u>conseillé</u> de prendre ce sentier.", correct: false }
    ],
    explanation: "Quand le participe passé (vu) est suivi d'un infinitif (capturer), il s'accorde avec le CD (les mis pour les deux ours) placé avant si ce CD est le sujet de l'infinitif. Ici, « les » (les deux ours) n'est pas le sujet de « capturer » (ce ne sont pas les deux ours qui capturent). Le PP reste invariable : « vu capturer ».",
    rule: "PP + infinitif : CD pas sujet de l'infinitif = invariable"
  },

  // Question 19 - Quelques déterminant
  {
    id: 'og-019',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Cet automne, <u>quelque</u> deux-cents chercheurs participeront au congrès provincial des sciences.", correct: false },
      { letter: 'b', text: "<u>Quelque</u> grandes recherches sur ce traitement sont actuellement menées dans divers pays.", correct: true },
      { letter: 'c', text: "<u>Quoique</u> ce spécialiste prétende avoir trouvé un traitement efficace, celui-ci reste à valider.", correct: false },
      { letter: 'd', text: "Un service d'hébergement sera offert aux congressistes <u>résidant</u> à l'extérieur de Montréal.", correct: false }
    ],
    explanation: "Ici, « quelques » est un déterminant (il détermine le nom « recherches »; on peut le remplacer par un autre déterminant, par exemple « plusieurs » : plusieurs grandes recherches). Le déterminant s'accorde en genre et en nombre avec le nom qu'il détermine.",
    rule: "Quelques déterminant : accord avec le nom"
  },

  // Question 20 - PP avec CD placé avant (enseignées)
  {
    id: 'og-020',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Les élèves de sa classe, elle les a <u>fait</u> chanter au spectacle de fin d'année.", correct: false },
      { letter: 'b', text: "Les parents ont fourni les cinq dollars qu'a <u>couté</u> la tenue de scène de leur enfant.", correct: false },
      { letter: 'c', text: "Les paroles de la chanson que cet élève aime tant, les lui as-tu <u>enseigné</u>?", correct: true },
      { letter: 'd', text: "Nous aurions <u>voulu</u> interpréter plus de chansons au spectacle de fin d'année.", correct: false }
    ],
    explanation: "Le participe passé « enseignées » d'un verbe qui a un CD (les mis pour les paroles) placé avant lui s'accorde en genre et en nombre avec ce CD. On écrit « les lui as-tu enseignées ».",
    rule: "Accord du PP avec CD placé avant"
  },

  // Question 21 - PP avec CD « nous » placé avant
  {
    id: 'og-021',
    type: 'error-identification',
    category: 'orthographe-grammaticale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Julien et Amélie se sont <u>extasiés</u> durant le passage des étoiles filantes.", correct: false },
      { letter: 'b', text: "Grâce au puissant télescope, il l'a longuement <u>observée</u>, la constellation du Lion.", correct: false },
      { letter: 'c', text: "Les astronomes amateurs se sont <u>échangé</u> leurs numéros de téléphone.", correct: false },
      { letter: 'd', text: "Nous participerons certainement à la soirée d'observation à laquelle vous nous avez <u>invitée</u>.", correct: true }
    ],
    explanation: "Le participe passé « invités/invitées » d'un verbe qui a un CD (nous, qui peut être masculin pluriel ou féminin pluriel) placé avant lui s'accorde en genre et en nombre avec ce CD. On écrit « vous nous avez invités » ou « invitées » selon le genre de « nous ».",
    rule: "Accord du PP avec CD « nous » placé avant"
  },

  // ============================================
  // 2. SYNTAXE ET PONCTUATION
  // Questions 22-31
  // ============================================

  // Question 22 - Pronom relatif dont/que
  {
    id: 'sp-001',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "Ce traiteur fournit les ustensiles <u>que</u> vous aurez besoin pour votre repas de fête.", correct: true },
      { letter: 'b', text: "Leurs anecdotes de voyage, ils vous <u>en</u> font encore le récit quand vous les rencontrez.", correct: false },
      { letter: 'c', text: "Vous espérez <u>que</u> vous n'avez rien oublié, car vous voulez que la fête soit réussie.", correct: false },
      { letter: 'd', text: "Vous vous fiez toujours à ce traiteur <u>pour que</u> vos réceptions soient réussies.", correct: false }
    ],
    explanation: "Le pronom relatif « dont » fait référence au nom « ustensiles » et remplace un groupe de mots commençant par « de » dans la subordonnée relative. On a besoin DE quelque chose. On écrit « les ustensiles dont vous aurez besoin ».",
    rule: "Emploi du pronom relatif dont"
  },

  // Question 23 - Négation aucune...ne
  {
    id: 'sp-002',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "Chaque atelier, <u>dont</u> un fascicule présentait un résumé, a accueilli plusieurs participants.", correct: false },
      { letter: 'b', text: "Durant la canicule, <u>aucune</u> des salles accueillant les congressistes était climatisée.", correct: true },
      { letter: 'c', text: "En ce qui a trait à l'aspect logistique du congrès, <u>rien n'</u>a fait défaut.", correct: false },
      { letter: 'd', text: "L'Université <u>n'</u>avait réservé que vingt-deux locaux pour les ateliers.", correct: false }
    ],
    explanation: "Le mot de négation « aucune » signale que la phrase est négative. Dans une phrase négative, il doit y avoir un « ne ». On écrit « aucune des salles n'était climatisée ».",
    rule: "La négation avec aucun : ne obligatoire"
  },

  // Question 24 - Se rappeler / se souvenir
  {
    id: 'sp-003',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "C'est certainement une visite <u>dont</u> nous nous rappellerons longtemps.", correct: true },
      { letter: 'b', text: "Il nous a fallu <u>au moins</u> une heure trente pour nous rendre à leur demeure.", correct: false },
      { letter: 'c', text: "La maison de ces vedettes correspond tout à fait à l'idée <u>que</u> je m'en faisais.", correct: false },
      { letter: 'd', text: "Nous avons photographié les vedettes <u>dont</u> nous avons visité l'immense maison.", correct: false }
    ],
    explanation: "Le verbe « se rappeler » s'emploie avec un complément direct (CD); on se rappelle quelque chose (et non DE quelque chose). Le pronom relatif doit être « que » : « une visite que nous nous rappellerons ». Par contre, « se souvenir » s'emploie avec « de » : « une visite dont nous nous souviendrons ».",
    rule: "Se rappeler (CD) vs se souvenir de (CI)"
  },

  // Question 25 - Ne... que (restriction)
  {
    id: 'sp-004',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "Autrefois, les gens <u>s'éclairaient qu'</u>avec des chandelles ou des lampes à l'huile.", correct: true },
      { letter: 'b', text: "D'éteindre la lumière quand il quitte une pièce, sa grand-mère <u>le lui</u> répète souvent.", correct: false },
      { letter: 'c', text: "Grâce aux électroménagers, on a <u>plus de</u> temps que nos grands-parents pour les loisirs.", correct: false },
      { letter: 'd', text: "Nos électroménagers, nous <u>les</u> considérons comme essentiels à nos vies.", correct: false }
    ],
    explanation: "Le « ne » doit accompagner « que » dans l'expression « ne… que » qui exprime la restriction (= seulement). On écrit « ne s'éclairaient qu'avec des chandelles ».",
    rule: "La restriction ne... que"
  },

  // Question 26 - Mode subjonctif après souhaiter
  {
    id: 'sp-005',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "Des marqueurs, <u>procure-t'en</u> au moins trois : un jaune, un rose et un bleu.", correct: false },
      { letter: 'b', text: "Je n'ai pas trouvé le manuel <u>dont</u> vous pensiez avoir noté le titre exact.", correct: false },
      { letter: 'c', text: "Les remarques de votre enseignante à propos de vos erreurs, <u>en</u> avez-vous tenu compte?", correct: false },
      { letter: 'd', text: "Je souhaite que, cette année, mes résultats en mathématiques <u>seront</u> meilleurs que ceux de l'année dernière.", correct: true }
    ],
    explanation: "On emploie le subjonctif (soient) dans une subordonnée qui complète un verbe exprimant un souhait (souhaiter, vouloir, désirer, etc.). On écrit « je souhaite que mes résultats soient meilleurs ».",
    rule: "Subjonctif après les verbes de souhait"
  },

  // Question 27 - Préposition (sous un angle)
  {
    id: 'sp-006',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de syntaxe.",
    options: [
      { letter: 'a', text: "Bernard et ses compagnons <u>aspirent à</u> traverser cette région nordique en six semaines.", correct: false },
      { letter: 'b', text: "Nous changerions nos plans, <u>si</u> les prévisions météorologiques annonçaient de l'orage.", correct: false },
      { letter: 'c', text: "Pour cette expédition-ci, Bernard sera <u>accompagné d'</u>autres explorateurs.", correct: false },
      { letter: 'd', text: "Qu'il fasse beau ou mauvais, Bernard voit toujours la situation <u>d'un angle</u> positif.", correct: true }
    ],
    explanation: "« Sous un angle » (et non « d'un angle ») est une expression qui signifie « d'un point de vue ». On écrit « voir la situation sous un angle positif ».",
    rule: "Préposition : sous un angle"
  },

  // Question 28 - Ponctuation : virgule après connecteur
  {
    id: 'sp-007',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de ponctuation.",
    options: [
      { letter: 'a', text: "L'agent a ajouté : «<u>Bien sûr</u> ce forfait vous permettra de circuler partout sur le site du festival.»", correct: true },
      { letter: 'b', text: "Le site du festival était presque désert<u> :</u> il avait plu toute la journée.", correct: false },
      { letter: 'c', text: "Mes amis et moi nous retrouverons<u>,</u> tout à l'heure<u>,</u> près de la scène de spectacle.", correct: false },
      { letter: 'd', text: "Nos amis prendront<u>,</u> eux aussi<u>,</u> un forfait pour les trois jours du festival.", correct: false }
    ],
    explanation: "Le connecteur mobile « Bien sûr », aussi appelé marqueur de relation, doit être détaché par des virgules dans la phrase. On écrit « Bien sûr, ce forfait... ».",
    rule: "Ponctuation des connecteurs"
  },

  // Question 29 - Ponctuation : virgule pour complément non déterminatif
  {
    id: 'sp-008',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase qui comporte une erreur de ponctuation.",
    options: [
      { letter: 'a', text: "<u>«Médor, il n'est plus dans la cour!»</u> s'est exclamée Marianne.", correct: false },
      { letter: 'b', text: "Nicolas et sa sœur ont parcouru les rues adjacentes; ils ont enfin retrouvé <u>leur chien tout content</u> de les voir.", correct: true },
      { letter: 'c', text: "Pour retrouver Médor<u>,</u> leur chien<u>,</u> Marianne s'est dirigée vers l'est, et son frère, vers l'ouest.", correct: false },
      { letter: 'd', text: "Prenons nos bicyclettes<u> :</u> de cette façon, nous pourrons rattraper Médor plus rapidement.", correct: false }
    ],
    explanation: "Le complément du nom « tout content de les voir » (complément du nom « chien ») est non déterminatif (non nécessaire pour identifier le chien). Il doit être détaché par une virgule : « leur chien, tout content de les voir ».",
    rule: "Virgule pour les compléments non déterminatifs"
  },

  // Question 30 - Marqueur de relation (cependant)
  {
    id: 'sp-009',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle un marqueur de relation n'est pas bien employé.",
    options: [
      { letter: 'a', text: "<u>Comme</u> cet équipement de camping coute cher, je ferai plutôt une location d'équipement cet été.", correct: false },
      { letter: 'b', text: "La chaleur et l'humidité étaient insupportables; <u>cependant</u>, nous avons passé nos journées à nous baigner.", correct: true },
      { letter: 'c', text: "Nous coucherons sous la tente, <u>bien que</u> le bulletin météorologique annonce des nuits fraiches.", correct: false },
      { letter: 'd', text: "Nous réserverons un terrain de camping <u>à la condition qu'</u>il y en ait un de libre en juillet.", correct: false }
    ],
    explanation: "On doit utiliser un marqueur de relation qui exprime la conséquence (par conséquent) pour introduire une phrase qui donne la conséquence de ce qui est énoncé dans la phrase qui précède. « Cependant » exprime la restriction ou l'opposition, pas la conséquence.",
    rule: "Emploi des marqueurs de relation : conséquence"
  },

  // Question 31 - Marqueur de relation (parce que)
  {
    id: 'sp-010',
    type: 'error-identification',
    category: 'syntaxe-ponctuation',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle un marqueur de relation n'est pas bien employé.",
    options: [
      { letter: 'a', text: "Il y a eu une interruption de service dans le métro; <u>par conséquent</u>, Réjean a attendu au moins trente minutes sur le quai.", correct: false },
      { letter: 'b', text: "<u>Quoique</u> les pannes ne surviennent pas souvent dans le métro, plusieurs usagers se plaignent du mauvais service.", correct: false },
      { letter: 'c', text: "Réjean n'a pas pris sa voiture ce matin <u>parce qu'</u>il est arrivé en retard au bureau.", correct: true },
      { letter: 'd', text: "Vous pouvez aussi vous rendre à cet endroit en métro; <u>toutefois</u>, vous devrez prévoir plus de temps qu'en voiture.", correct: false }
    ],
    explanation: "On doit utiliser un marqueur de relation qui exprime la conséquence (de sorte que) pour introduire une phrase qui donne la conséquence. « Parce que » exprime la cause, pas la conséquence. On écrit « Réjean n'a pas pris sa voiture ce matin, de sorte qu'il est arrivé en retard ».",
    rule: "Emploi des marqueurs de relation : cause vs conséquence"
  },

  // ============================================
  // 3. ORTHOGRAPHE LEXICALE
  // Questions 32-35
  // ============================================

  // Question 32 - Réveil vs réveille
  {
    id: 'ol-001',
    type: 'error-identification',
    category: 'orthographe-lexicale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Elle se tient au courant des <u>innovations</u> dans ces secteurs d'activités.", correct: false },
      { letter: 'b', text: "En dehors de l'enseignement, elle aurait aussi aimé travailler comme <u>esthéticienne</u>.", correct: false },
      { letter: 'c', text: "Le nouvel enseignant règle son <u>réveille</u> à 6 h pour s'assurer de ne pas être en retard à l'école.", correct: true },
      { letter: 'd', text: "Sa toute première journée à l'école a été <u>harassante</u>.", correct: false }
    ],
    explanation: "Il ne faut pas confondre l'orthographe du nom « réveil » (ici, introduit par le déterminant « son » : son réveil) avec celle du verbe « réveille » (une forme conjuguée du verbe « réveiller » comme dans « il réveille quelqu'un »).",
    rule: "Orthographe : réveil (nom) vs réveille (verbe)"
  },

  // Question 33 - Confort vs comfort
  {
    id: 'ol-002',
    type: 'error-identification',
    category: 'orthographe-lexicale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot souligné présente une erreur.",
    options: [
      { letter: 'a', text: "L'appareil que j'utiliserai est une <u>conception</u> de la technologie de pointe.", correct: false },
      { letter: 'b', text: "L'installation d'un appareil de climatisation assurera le <u>comfort</u> des employés.", correct: true },
      { letter: 'c', text: "Le formulaire d'emploi <u>inclus</u> dans cet envoi sera long à remplir.", correct: false },
      { letter: 'd', text: "Le travail qui m'a été proposé me permettra de faire valoir mes <u>compétences</u> en menuiserie.", correct: false }
    ],
    explanation: "Le mot « comfort » avec un « m » est la traduction anglaise du mot « confort » avec un « n ». On appelle anglicisme orthographique le fait d'écrire un mot français avec l'orthographe du mot qui lui correspond en anglais.",
    rule: "Anglicisme orthographique : confort"
  },

  // Question 34 - Entonnoir
  {
    id: 'ol-003',
    type: 'error-identification',
    category: 'orthographe-lexicale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Amateur d'insectes, Jonathan a dessiné une <u>fourmi</u> géante.", correct: false },
      { letter: 'b', text: "Jonathan <u>exhibe</u> fièrement le dessin qu'il a fait à l'école.", correct: false },
      { letter: 'c', text: "Le fils de Virginie souffre d'<u>eczéma</u> quand il boit du lait.", correct: false },
      { letter: 'd', text: "Virginie se sert d'un <u>entonnoire</u> pour mettre du poivre dans sa poivrière.", correct: true }
    ],
    explanation: "La grande majorité (80 %) des noms masculins se termine en -oir. Le nom « entonnoir » fait donc partie des 20 % des noms masculins qui se terminent en -oir (comme « désespoir », « réservoir »), sans « e » final.",
    rule: "Orthographe : noms masculins en -oir/-oire"
  },

  // Question 35 - Discerner
  {
    id: 'ol-004',
    type: 'error-identification',
    category: 'orthographe-lexicale',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Elle était fière de dire qu'elle avait fait l'<u>acquisition</u> d'un tableau d'une grande valeur.", correct: false },
      { letter: 'b', text: "Le <u>langage</u> utilisé par l'hôtesse relevait du registre soutenu.", correct: false },
      { letter: 'c', text: "On pouvait <u>dicerner</u> une pointe de snobisme dans sa façon de s'exprimer.", correct: true },
      { letter: 'd', text: "Une impressionnante collection d'œuvres d'art fait l'<u>orgueil</u> de cette hôtesse.", correct: false }
    ],
    explanation: "Dans certains mots, comme « discerner » (piscine, sceau, etc.), le son « s » s'écrit « sc » devant les voyelles « e » et « i ». On écrit « discerner ».",
    rule: "Orthographe : le son [s] écrit « sc »"
  },

  // ============================================
  // 4. VOCABULAIRE - IMPROPRIÉTÉS
  // Questions 36-39
  // ============================================

  // Question 36 - Dépendant de (anglicisme)
  {
    id: 'voc-001',
    type: 'error-identification',
    category: 'vocabulaire',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Ces étudiants ont acheté leur dictionnaire dans une boutique de livres d'<u>occasion</u>.", correct: false },
      { letter: 'b', text: "<u>Dépendant du</u> prix des loyers, ils loueront ou non un appartement situé près de l'université.", correct: true },
      { letter: 'c', text: "En critiquant une décision, un membre du comité étudiant a semé la <u>discorde</u> dans le groupe.", correct: false },
      { letter: 'd', text: "Le café étudiant est situé <u>face à</u> la bibliothèque des sciences humaines.", correct: false }
    ],
    explanation: "« Dépendant de » est une impropriété au sens de « selon », « suivant », « en fonction de », « d'après ». On écrit « Selon le prix des loyers ».",
    rule: "Impropriété : dépendant de → selon"
  },

  // Question 37 - Recouvrer vs recouvrir
  {
    id: 'voc-002',
    type: 'error-identification',
    category: 'vocabulaire',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Ces détenus vont <u>recouvrir</u> leur liberté dans quelques jours.", correct: true },
      { letter: 'b', text: "L'avocate considère <u>à juste titre</u> que la sentence prononcée n'est pas assez sévère.", correct: false },
      { letter: 'c', text: "Plusieurs témoignages ont <u>disculpé</u> le prétendu complice de l'accusé.", correct: false },
      { letter: 'd', text: "Une nouvelle avocate a dû remplacer l'avocat de la défense <u>au pied levé</u>.", correct: false }
    ],
    explanation: "« Recouvrer » signifie récupérer, retrouver. « Recouvrir » signifie couvrir de nouveau. On écrit « recouvrer leur liberté ».",
    rule: "Paronymes : recouvrer vs recouvrir"
  },

  // Question 38 - Loger un appel (anglicisme)
  {
    id: 'voc-003',
    type: 'error-identification',
    category: 'vocabulaire',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "Ayant détecté une odeur de fumée, nous avons <u>logé</u> un appel téléphonique à la Sécurité.", correct: true },
      { letter: 'b', text: "L'agent de sécurité, plutôt <u>indolent</u>, a tardé à répondre à notre appel.", correct: false },
      { letter: 'c', text: "Le responsable de la régie de l'immeuble <u>consignera</u> l'incident dans son rapport hebdomadaire.", correct: false },
      { letter: 'd', text: "<u>Munis</u> de leur tuyau d'arrosage, deux pompiers sont entrés dans le laboratoire de chimie.", correct: false }
    ],
    explanation: "« Loger un appel téléphonique » est un anglicisme (calque de « to lodge a phone call »). On dit « faire un appel téléphonique », « appeler », « donner un coup de téléphone ».",
    rule: "Anglicisme : loger un appel → faire un appel"
  },

  // Question 39 - Endos vs verso
  {
    id: 'voc-004',
    type: 'error-identification',
    category: 'vocabulaire',
    instruction: "Encerclez la lettre correspondant à la phrase dans laquelle le mot ou le groupe de mots souligné présente une erreur.",
    options: [
      { letter: 'a', text: "En tentant de <u>joindre</u> sa collègue au téléphone, Philippe a composé le mauvais numéro.", correct: false },
      { letter: 'b', text: "Il est tombé <u>amoureux</u> de sa collègue de travail dès le premier regard.", correct: false },
      { letter: 'c', text: "Philippe a inscrit son numéro de téléphone personnel à l'<u>endos</u> de sa carte d'affaires.", correct: true },
      { letter: 'd', text: "Philippe, qui est <u>représentant</u> commercial pour la maison d'édition, a reçu de nombreuses commandes de ce manuel de grammaire.", correct: false }
    ],
    explanation: "Le « verso » est l'envers d'une feuille de papier, d'une carte. L'« endos » est la mention portée au dos d'un effet de commerce, d'un chèque. On écrit « au verso de sa carte d'affaires ».",
    rule: "Impropriété : endos vs verso"
  },

  // ============================================
  // PARTIE B
  // 1. VOCABULAIRE - DÉFINITIONS
  // Questions 40-52 (pas de soulignement nécessaire)
  // ============================================

  // Question 40 - Suffixe -ard
  {
    id: 'voc-010',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le suffixe « -ard » dans le mot « chauffard » ?",
    options: [
      { letter: 'a', text: "Action de…", correct: false },
      { letter: 'b', text: "Diminutif de...", correct: false },
      { letter: 'c', text: "Péjoratif.", correct: true },
      { letter: 'd', text: "Qualité.", correct: false }
    ],
    explanation: "Le suffixe « -ard » a souvent une valeur péjorative. Un chauffard est un mauvais conducteur (comme vantard, froussard).",
    rule: "Suffixe -ard : valeur péjorative"
  },

  // Question 41 - Préfixe anté-
  {
    id: 'voc-011',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le préfixe « anté- » dans le mot « antécédent » ?",
    options: [
      { letter: 'a', text: "Ancien.", correct: false },
      { letter: 'b', text: "Autre.", correct: false },
      { letter: 'c', text: "Avant.", correct: true },
      { letter: 'd', text: "Opposé.", correct: false }
    ],
    explanation: "Le préfixe « anté- » signifie « avant ». L'adjectif « antécédent » signifie « qui précède dans le temps ». Le nom « antécédent » peut signifier « fait antérieur ».",
    rule: "Préfixe anté- : avant"
  },

  // Question 42 - Suffixe -logue
  {
    id: 'voc-012',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le suffixe « -logue » dans le mot « allergologue » ?",
    options: [
      { letter: 'a', text: "Douleur.", correct: false },
      { letter: 'b', text: "Qui a la crainte de.", correct: false },
      { letter: 'c', text: "Qui exerce la science de.", correct: true },
      { letter: 'd', text: "Qui fait fuir.", correct: false }
    ],
    explanation: "Le suffixe « -logue » signifie « qui exerce la science de ». L'allergologue est un spécialiste du domaine de la médecine qui étudie et traite les allergies.",
    rule: "Suffixe -logue : spécialiste"
  },

  // Question 43 - Atonie
  {
    id: 'voc-013',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « atonie » ?",
    options: [
      { letter: 'a', text: "Arrangement de couleurs monochromes et sans éclat.", correct: false },
      { letter: 'b', text: "Caractère d'une voix dont la tonalité ne varie pas.", correct: false },
      { letter: 'c', text: "Caractère de ce qui est ennuyeux et inutile.", correct: false },
      { letter: 'd', text: "Diminution de la tonicité, de l'élasticité d'un organe contractile.", correct: true }
    ],
    explanation: "L'« atonie » désigne une diminution de la tonicité. Par exemple, on peut parler de l'atonie musculaire. Le préfixe « a- » indique l'absence.",
    rule: "Vocabulaire : atonie"
  },

  // Question 44 - Bancal
  {
    id: 'voc-014',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « bancal » ?",
    options: [
      { letter: 'a', text: "Commun, sans originalité.", correct: false },
      { letter: 'b', text: "Qui manque de rigueur, d'équilibre, de fondement.", correct: true },
      { letter: 'c', text: "Relatif à la fabrication des bancs.", correct: false },
      { letter: 'd', text: "Relatif aux repas d'apparat.", correct: false }
    ],
    explanation: "« Bancal » signifie qui manque de rigueur, d'équilibre, de fondement. Par exemple, on peut parler d'un meuble bancal, d'un raisonnement bancal.",
    rule: "Vocabulaire : bancal"
  },

  // Question 45 - Congruent
  {
    id: 'voc-015',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « congruent » ?",
    options: [
      { letter: 'a', text: "Difficile à comprendre.", correct: false },
      { letter: 'b', text: "Exagéré, démesuré.", correct: false },
      { letter: 'c', text: "Qui affiche sa supériorité, souvent de manière arrogante.", correct: false },
      { letter: 'd', text: "Qui convient, qui s'applique bien.", correct: true }
    ],
    explanation: "« Congruent » signifie qui convient, qui s'applique bien. Par exemple, on peut parler d'une suggestion congruente (qui convient) au contexte.",
    rule: "Vocabulaire : congruent"
  },

  // Question 46 - Ourdir
  {
    id: 'voc-016',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « ourdir » ?",
    options: [
      { letter: 'a', text: "Coudre un tissu en forme d'ourlet.", correct: false },
      { letter: 'b', text: "Donner un ordre.", correct: false },
      { letter: 'c', text: "Organiser en secret, machiner, combiner.", correct: true },
      { letter: 'd', text: "Tasser, compacter des matériaux secs avant de les enfouir sous terre.", correct: false }
    ],
    explanation: "« Ourdir » signifie organiser secrètement, machiner, combiner. Par exemple, on peut ourdir un complot.",
    rule: "Vocabulaire : ourdir"
  },

  // Question 47 - Engoncé
  {
    id: 'voc-017',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie le mot « engoncé » ?",
    options: [
      { letter: 'a', text: "Gauche, contraint, guindé.", correct: true },
      { letter: 'b', text: "Gonflé au maximum.", correct: false },
      { letter: 'c', text: "Qui rentre dans le visage, dans le corps.", correct: false },
      { letter: 'd', text: "Un peu ivre.", correct: false }
    ],
    explanation: "« Engoncé » signifie gauche, contraint, guindé. Par exemple, on peut dire d'une personne qu'elle a le cou engoncé (contraint) dans son col de fourrure ou qu'une personne a l'air engoncée (gauche ou guindée).",
    rule: "Vocabulaire : engoncé"
  },

  // Question 48 - Image d'Épinal
  {
    id: 'voc-018',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie l'expression « Image d'Épinal » ?",
    options: [
      { letter: 'a', text: "Image qui accentue davantage les mauvais côtés, les « épines » de la réalité.", correct: false },
      { letter: 'b', text: "Représentation de la création de l'univers.", correct: false },
      { letter: 'c', text: "Représentation schématique, mais fidèle à la réalité.", correct: false },
      { letter: 'd', text: "Représentation simpliste et excessivement optimiste de la réalité.", correct: true }
    ],
    explanation: "Une « image d'Épinal » est une représentation simpliste et excessivement optimiste de la réalité. Au début du XIXe siècle, à Épinal dans les Vosges françaises, un imprimeur publia des images le plus souvent naïves et idéalisées.",
    rule: "Expression : image d'Épinal"
  },

  // Question 49 - Se faire l'avocat du diable
  {
    id: 'voc-019',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie l'expression « Se faire l'avocat du diable » ?",
    options: [
      { letter: 'a', text: "Critiquer le point de vue de quelqu'un avec énergie.", correct: false },
      { letter: 'b', text: "Défendre un point de vue complètement opposé à celui de quelqu'un d'autre.", correct: true },
      { letter: 'c', text: "Déranger un auditoire avec des plaisanteries complètement déplacées.", correct: false },
      { letter: 'd', text: "Présenter le point de vue que pourrait avoir un criminel.", correct: false }
    ],
    explanation: "« Se faire l'avocat du diable » signifie défendre une cause généralement considérée comme mauvaise pour mieux expliquer les arguments de la partie adverse.",
    rule: "Expression : se faire l'avocat du diable"
  },

  // Question 50 - Défrayer la chronique
  {
    id: 'voc-020',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie l'expression « Défrayer la chronique » ?",
    options: [
      { letter: 'a', text: "Faire parler de soi en bien.", correct: false },
      { letter: 'b', text: "Faire parler de soi en mal.", correct: true },
      { letter: 'c', text: "Payer son abonnement au journal.", correct: false },
      { letter: 'd', text: "Rédiger une chronique dans un journal.", correct: false }
    ],
    explanation: "« Défrayer la chronique » signifie faire parler de soi en mal. L'expression signifie également « avoir un grand retentissement, susciter l'intérêt ou les réactions du public ».",
    rule: "Expression : défrayer la chronique"
  },

  // Question 51 - Être aux abois
  {
    id: 'voc-021',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie l'expression « Être aux abois » ?",
    options: [
      { letter: 'a', text: "Chercher à se justifier.", correct: false },
      { letter: 'b', text: "Être dans une situation désespérée.", correct: true },
      { letter: 'c', text: "Être plus prudent dorénavant.", correct: false },
      { letter: 'd', text: "S'en prendre verbalement à quelqu'un en haussant le ton.", correct: false }
    ],
    explanation: "« Être aux abois » signifie être dans une situation désespérée. Le nom « aboi » vient du verbe « aboyer ». Au pluriel, ce nom est associé au domaine de la chasse : les abois sont les cris de la meute de chiens au moment où elle entoure la bête.",
    rule: "Expression : être aux abois"
  },

  // Question 52 - Pierre d'achoppement
  {
    id: 'voc-022',
    type: 'definition',
    category: 'vocabulaire',
    instruction: "Que signifie l'expression « Pierre d'achoppement » ?",
    options: [
      { letter: 'a', text: "Élément qui favorise la réussite.", correct: false },
      { letter: 'b', text: "Moyen de contourner les difficultés.", correct: false },
      { letter: 'c', text: "Obstacle à la réussite.", correct: true },
      { letter: 'd', text: "Une des étapes de la réussite.", correct: false }
    ],
    explanation: "Une « pierre d'achoppement » est un obstacle à la réussite. Dans son sens vieilli ou littéraire, le verbe « achopper » signifie buter du pied contre un obstacle, trébucher. Le nom « achoppement » signifie obstacle contre lequel on bute, difficulté qu'on rencontre.",
    rule: "Expression : pierre d'achoppement"
  },

  // ============================================
  // 2. JUSTIFICATION DE RÈGLES - ORTHOGRAPHE GRAMMATICALE
  // Questions 53-57
  // ============================================

  // Question 53 - Quelles que
  {
    id: 'jr-001',
    type: 'rule-justification',
    category: 'orthographe-grammaticale',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'accord du mot souligné.",
    questionSentence: "<u>Quelles</u> que soient leurs bonnes intentions, ces personnes causent plus de tort que de bien.",
    options: [
      { letter: 'a', text: "Le mot « quelles » est un adjectif et s'accorde en genre et en nombre avec le nom auquel il se rapporte, « intentions ».", correct: true },
      { letter: 'b', text: "Le mot « quelles » est un adjectif et s'accorde en genre et en nombre avec le nom auquel il se rapporte, « personnes ».", correct: false },
      { letter: 'c', text: "Le mot « quelles » est un adverbe et s'accorde en genre et en nombre avec l'adjectif qu'il modifie, « bonnes ».", correct: false },
      { letter: 'd', text: "Le mot « quelles » est un déterminant et s'accorde en genre et en nombre avec le nom qu'il introduit, « intentions ».", correct: false }
    ],
    explanation: "Plus précisément, l'adjectif « quelles » est ici attribut du sujet « leurs bonnes intentions », puisqu'il se rapporte au noyau de ce sujet (intentions) par l'intermédiaire d'un verbe attributif (soient, qui est le verbe être au subjonctif).",
    rule: "Accord de quel que avec le sujet"
  },

  // Question 54 - PP adressés
  {
    id: 'jr-002',
    type: 'rule-justification',
    category: 'orthographe-grammaticale',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'accord du mot souligné.",
    questionSentence: "Les propos injurieux que ces politiciens se sont <u>adressés</u> ont surpris les membres de l'assemblée.",
    options: [
      { letter: 'a', text: "Le participe passé « adressés » s'accorde avec le complément direct « que », qui remplace « les propos injurieux », placé avant le verbe.", correct: true },
      { letter: 'b', text: "Le participe passé « adressés » s'accorde avec le complément direct « se », qui remplace « ces politiciens », placé avant le verbe.", correct: false },
      { letter: 'c', text: "Le participe passé « adressés » s'accorde avec le complément direct « se », qui remplace « les propos injurieux », placé avant le verbe.", correct: false },
      { letter: 'd', text: "Le participe passé « adressés » s'accorde avec le sujet « ces politiciens » parce que « se » est ici complément indirect.", correct: false }
    ],
    explanation: "Quand un verbe formé d'un auxiliaire et d'un participe passé a un complément direct (CD) placé avant, le participe passé s'accorde avec ce CD. Le CD « que » remplace « les propos injurieux » (masculin pluriel).",
    rule: "Accord du PP avec CD placé avant"
  },

  // Question 55 - Leur déterminant
  {
    id: 'jr-003',
    type: 'rule-justification',
    category: 'orthographe-grammaticale',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'emploi du mot souligné.",
    questionSentence: "Les chercheurs expérimenteront <u>leur</u> nouveau traitement en laboratoire le mois prochain.",
    options: [
      { letter: 'a', text: "Le mot « leur » est ici un déterminant possessif et s'accorde en genre et en nombre avec l'adjectif qu'il introduit, « nouveau ».", correct: false },
      { letter: 'b', text: "Le mot « leur » est ici un déterminant possessif et s'accorde en genre et en nombre avec le nom qu'il introduit, « traitement ».", correct: true },
      { letter: 'c', text: "Le mot « leur » est ici un pronom personnel complément direct du verbe « expérimenteront ».", correct: false },
      { letter: 'd', text: "Le mot « leur » est ici un pronom possessif et est du même genre et du même nombre que le nom qu'il remplace, « traitement ».", correct: false }
    ],
    explanation: "Le déterminant « leur » prend un « s » quand il introduit (ou détermine) un nom pluriel : leurs traitements. Ici, « traitement » est singulier, donc « leur » sans « s ».",
    rule: "Leur déterminant : accord avec le nom"
  },

  // Question 56 - PP + infinitif (CD pas sujet)
  {
    id: 'jr-004',
    type: 'rule-justification',
    category: 'orthographe-grammaticale',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'accord du mot souligné.",
    questionSentence: "Cette épicerie ne vendait pas les fruits exotiques qu'il aurait <u>aimé</u> offrir à ses invités.",
    options: [
      { letter: 'a', text: "Le complément direct « qu' », qui remplace « il », est placé avant le verbe et est sujet du verbe à l'infinitif « offrir ».", correct: false },
      { letter: 'b', text: "Le complément direct « qu' », qui remplace « les fruits exotiques », est placé avant le verbe.", correct: false },
      { letter: 'c', text: "Le complément direct « qu' », qui remplace « les fruits exotiques », est placé avant le verbe et est sujet du verbe à l'infinitif « offrir ».", correct: false },
      { letter: 'd', text: "Le complément direct « qu' », qui remplace « les fruits exotiques », est placé avant le verbe et n'est pas sujet du verbe à l'infinitif « offrir ».", correct: true }
    ],
    explanation: "« Qu' » (qui remplace les fruits exotiques) n'est pas sujet du verbe à l'infinitif « offrir », car ce ne sont pas les fruits exotiques qui offrent (quelque chose). Le PP reste donc invariable.",
    rule: "PP + infinitif : CD pas sujet = invariable"
  },

  // Question 57 - Participe présent vs adjectif verbal
  {
    id: 'jr-005',
    type: 'rule-justification',
    category: 'orthographe-grammaticale',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'emploi du mot souligné.",
    questionSentence: "<u>Exigeant</u> un travail impeccable, il a félicité son employé pour son dépliant publicitaire sans erreurs.",
    options: [
      { letter: 'a', text: "Le mot « exigeant » est un adjectif verbal et s'accorde en genre et en nombre avec le pronom qu'il qualifie, « il ».", correct: false },
      { letter: 'b', text: "Le mot « exigeant » est un adjectif verbal et s'accorde en genre et en nombre avec le nom qu'il qualifie, « employé ».", correct: false },
      { letter: 'c', text: "Le mot « exigeant » est un participe présent et s'accorde en genre et en nombre avec son sujet, « il ».", correct: false },
      { letter: 'd', text: "Le mot « exigeant » est un participe présent et reste invariable.", correct: true }
    ],
    explanation: "On peut distinguer le participe présent de l'adjectif verbal en vérifiant où on placerait un adverbe qui pourrait les modifier. Le participe présent (invariable) peut être suivi d'un adverbe : « Exigeant constamment un travail impeccable ». L'adjectif verbal (variable) peut être précédé d'un adverbe : « Les patrons extrêmement exigeants ».",
    rule: "Participe présent invariable"
  },

  // ============================================
  // 3. JUSTIFICATION DE RÈGLES - SYNTAXE ET PONCTUATION
  // Questions 58-60
  // ============================================

  // Question 58 - Pronom lui
  {
    id: 'jr-006',
    type: 'rule-justification',
    category: 'syntaxe-ponctuation',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'emploi du mot souligné.",
    questionSentence: "La troupe de théâtre a présenté à ce public un spectacle qui <u>lui</u> a valu une longue ovation debout.",
    options: [
      { letter: 'a', text: "Le pronom personnel « lui » est féminin singulier parce qu'il remplace le GPrép « à la troupe de théâtre », contenant un GN dont le noyau est « troupe ».", correct: true },
      { letter: 'b', text: "Le pronom personnel « lui » est masculin singulier parce qu'il remplace le GPrép « à ce public », contenant un GN dont le noyau est « public ».", correct: false },
      { letter: 'c', text: "Le pronom personnel « lui » est neutre parce qu'il remplace le GPrép « à ce public », contenant un GN dont le noyau est « public ».", correct: false },
      { letter: 'd', text: "Le pronom personnel « lui » est neutre parce qu'il remplace le GPrép « à la troupe de théâtre », contenant un GN dont le noyau est « troupe ».", correct: false }
    ],
    explanation: "Le pronom personnel « lui » remplace toujours un GPrép commençant par « à ». Ici, « lui » est complément indirect du verbe « a valu » et remplace « à la troupe de théâtre ». Il prend le genre et le nombre du noyau de ce GN (troupe = féminin singulier).",
    rule: "Pronom lui : remplace un GPrép en à"
  },

  // Question 59 - Virgules pour subordonnée circonstancielle
  {
    id: 'jr-007',
    type: 'rule-justification',
    category: 'syntaxe-ponctuation',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'emploi des signes de ponctuation soulignés.",
    questionSentence: "Ce jeune propriétaire de ferme<u>,</u> pour que son entreprise soit écologique<u>,</u> a fait installer un système d'épuration des eaux usées aux limites de sa terre.",
    options: [
      { letter: 'a', text: "Des virgules sont utilisées pour encadrer la subordonnée circonstancielle « pour que son entreprise soit écologique ».", correct: true },
      { letter: 'b', text: "Des virgules sont utilisées pour encadrer la subordonnée complétive « pour que son entreprise soit écologique ».", correct: false },
      { letter: 'c', text: "Des virgules sont utilisées pour encadrer la subordonnée relative déterminative « pour que son entreprise soit écologique ».", correct: false },
      { letter: 'd', text: "Des virgules sont utilisées pour encadrer la subordonnée relative explicative « pour que son entreprise soit écologique ».", correct: false }
    ],
    explanation: "La subordonnée circonstancielle est une phrase subordonnée qui commence par une conjonction différente de « que » (ici, « pour que ») et qui a la fonction de complément de phrase (CP). En tant que complément de phrase, cette subordonnée peut être déplacée et effacée.",
    rule: "Virgules pour encadrer une subordonnée circonstancielle déplacée"
  },

  // Question 60 - Pronom relatif dont (complément du nom)
  {
    id: 'jr-008',
    type: 'rule-justification',
    category: 'syntaxe-ponctuation',
    instruction: "La phrase ci-dessous ne contient pas d'erreur. Choisissez l'explication qui justifie l'emploi du mot souligné.",
    questionSentence: "Le mets turc <u>dont</u> tu m'avais donné la recette a beaucoup plu à mes convives.",
    options: [
      { letter: 'a', text: "On utilise le pronom relatif « dont » parce qu'il est complément du nom « mets ».", correct: false },
      { letter: 'b', text: "On utilise le pronom relatif « dont » parce qu'il est complément du nom « recette ».", correct: true },
      { letter: 'c', text: "On utilise le pronom relatif « dont » parce qu'il est complément indirect du verbe « avais donné ».", correct: false },
      { letter: 'd', text: "On utilise le pronom relatif « dont » parce que son antécédent est complément indirect du verbe « a plu ».", correct: false }
    ],
    explanation: "Le pronom relatif « dont » fait référence au nom « mets » et remplace un groupe de mots commençant par « de » dans la subordonnée relative. On peut mieux voir la fonction de « dont » en transformant la subordonnée en phrase autonome : « Tu m'avais donné la recette de ce mets ». Donc « dont » complète le nom « recette ».",
    rule: "Dont complément du nom"
  }
]

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

/**
 * Récupère les questions par catégorie
 */
export function getQuestionsByCategory(categoryId) {
  return tecfeeQuestions.filter(q => q.category === categoryId)
}

/**
 * Récupère un nombre aléatoire de questions
 */
export function getRandomQuestions(count, categories = null) {
  let pool = [...tecfeeQuestions]
  
  // Filtrer par catégories si spécifié
  if (categories && categories.length > 0) {
    pool = pool.filter(q => categories.includes(q.category))
  }
  
  // Mélanger et prendre le nombre demandé
  const shuffled = pool.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Génère une session d'examen officielle (60 questions, répartition officielle)
 * Répartition : 26 ortho gram + 13 syntaxe + 4 ortho lex + 17 vocab
 */
export function generateExamSession() {
  const exam = []
  
  // Répartition officielle TECFÉE
  const distribution = [
    { category: 'orthographe-grammaticale', count: 26 },
    { category: 'syntaxe-ponctuation', count: 13 },
    { category: 'orthographe-lexicale', count: 4 },
    { category: 'vocabulaire', count: 17 }
  ]
  
  distribution.forEach(({ category, count }) => {
    const categoryQuestions = getQuestionsByCategory(category)
    const shuffled = categoryQuestions.sort(() => Math.random() - 0.5)
    exam.push(...shuffled.slice(0, Math.min(count, shuffled.length)))
  })
  
  // Mélanger l'ordre final
  return exam.sort(() => Math.random() - 0.5)
}

/**
 * Statistiques sur la banque de questions
 */
export function getQuestionStats() {
  const stats = {
    total: tecfeeQuestions.length,
    byCategory: {},
    byType: {}
  }
  
  tecfeeQuestions.forEach(q => {
    // Par catégorie
    if (!stats.byCategory[q.category]) {
      stats.byCategory[q.category] = 0
    }
    stats.byCategory[q.category]++
    
    // Par type
    if (!stats.byType[q.type]) {
      stats.byType[q.type] = 0
    }
    stats.byType[q.type]++
  })
  
  return stats
}