import { Quiz } from './types';

const allQuizzes: Quiz[] = [
  {
    "metadata": {
      "id": "quiz-action",
      "slug": "action",
      "title": "Prêt à passer à l'action ?",
      "description": "Teste ta capacité à mettre en œuvre concrètement la transition vers le libre dans ton établissement.",
      "category": "action",
      "difficulty": "avance",
      "estimatedTime": 8,
      "questionsCount": 10,
      "icon": "🚀",
      "color": "#06b6d4",
      "gradient": "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      "keywords": ["action", "mise en œuvre", "stratégie", "transition", "pratique"]
    },
    "questions": [
      {
        "id": "q1",
        "question": "Par quelle action commencer la transition vers le libre ?",
        "subtitle": "Choisis l'approche la plus pragmatique",
        "options": [
          {
            "id": "q1-a",
            "text": "Remplacer tous les PC par des machines Linux d'un coup",
            "points": 0
          },
          {
            "id": "q1-b",
            "text": "Former les équipes et tester sur quelques machines pilotes",
            "points": 3
          },
          {
            "id": "q1-c",
            "text": "Attendre que tout le monde soit prêt",
            "points": 0
          },
          {
            "id": "q1-d",
            "text": "Imposer le changement sans concertation",
            "points": 0
          }
        ],
        "explanation": "La transition doit être progressive, concertée et accompagnée. Commencer par des pilotes permet de tester, former, ajuster avant un déploiement plus large. C'est la méthode NIRD.",
        "source": "Collectif NIRD",
        "sourceUrl": "https://nird.forge.apps.education.fr/",
        "difficulty": "avance",
        "tags": ["stratégie", "déploiement", "changement"]
      },
      {
        "id": "q2",
        "question": "Un enseignant refuse de passer au libre. Tu...",
        "options": [
          {
            "id": "q2-a",
            "text": "L'obliges quand même",
            "points": 0
          },
          {
            "id": "q2-b",
            "text": "Écoutes ses craintes, le formes et l'accompagnes",
            "points": 3
          },
          {
            "id": "q2-c",
            "text": "Abandonnes l'idée de transition",
            "points": 0
          },
          {
            "id": "q2-d",
            "text": "Lui montres que ses collègues y arrivent bien",
            "points": 2
          }
        ],
        "explanation": "La résistance au changement est normale. L'accompagnement, la formation et l'écoute sont essentiels. Montrer des exemples de réussite aide aussi. Ne jamais imposer brutalement.",
        "source": "Gestion du changement",
        "difficulty": "avance",
        "tags": ["humain", "accompagnement", "résistance"]
      },
      {
        "id": "q3",
        "question": "Comment convaincre ta direction d'investir dans le libre ?",
        "options": [
          {
            "id": "q3-a",
            "text": "Présenter uniquement l'aspect idéologique",
            "points": 1
          },
          {
            "id": "q3-b",
            "text": "Chiffrer les économies et montrer les bénéfices concrets",
            "points": 3
          },
          {
            "id": "q3-c",
            "text": "Dire que c'est gratuit donc sans risque",
            "points": 1
          },
          {
            "id": "q3-d",
            "text": "Attendre que la direction propose d'elle-même",
            "points": 0
          }
        ],
        "explanation": "Les arguments concrets (économies chiffrées, souveraineté, durabilité, autonomie) parlent aux décideurs. Un business case solide avec des exemples de réussite est crucial.",
        "source": "Collectif NIRD",
        "difficulty": "avance",
        "tags": ["argumentation", "management", "stratégie"]
      },
      {
        "id": "q4",
        "question": "Un logiciel métier spécifique n'a pas d'équivalent libre. Tu...",
        "options": [
          {
            "id": "q4-a",
            "text": "Abandonnes toute la transition",
            "points": 0
          },
          {
            "id": "q4-b",
            "text": "Gardes ce logiciel et libères tout le reste",
            "points": 3
          },
          {
            "id": "q4-c",
            "text": "Cherches une solution imparfaite mais libre",
            "points": 2
          },
          {
            "id": "q4-d",
            "text": "Développes toi-même l'alternative",
            "points": 1
          }
        ],
        "explanation": "Le pragmatisme est clé. On peut garder quelques outils propriétaires si nécessaire tout en libérant le maximum. La transition est progressive, pas dogmatique.",
        "source": "Bonnes pratiques NIRD",
        "difficulty": "avance",
        "tags": ["pragmatisme", "hybride", "réalisme"]
      },
      {
        "id": "q5",
        "question": "Comment organiser la formation des équipes ?",
        "options": [
          {
            "id": "q5-a",
            "text": "Une formation unique de 2h pour tout le monde",
            "points": 1
          },
          {
            "id": "q5-b",
            "text": "Rien, les gens se débrouilleront",
            "points": 0
          },
          {
            "id": "q5-c",
            "text": "Formations progressives + documentation + référents",
            "points": 3
          },
          {
            "id": "q5-d",
            "text": "Envoyer des tutoriels par mail",
            "points": 1
          }
        ],
        "explanation": "La formation doit être progressive, adaptée aux niveaux, avec des référents internes pour l'entraide. Documentation accessible et accompagnement continu sont essentiels.",
        "source": "Collectif NIRD",
        "difficulty": "avance",
        "tags": ["formation", "accompagnement", "organisation"]
      },
      {
        "id": "q6",
        "question": "Un parent d'élève s'inquiète que son enfant n'apprenne pas Windows. Tu réponds...",
        "options": [
          {
            "id": "q6-a",
            "text": "Windows n'est pas important",
            "points": 0
          },
          {
            "id": "q6-b",
            "text": "On forme aux compétences numériques, pas à une marque",
            "points": 3
          },
          {
            "id": "q6-c",
            "text": "Linux est mieux que Windows",
            "points": 1
          },
          {
            "id": "q6-d",
            "text": "Les entreprises utilisent de plus en plus Linux",
            "points": 2
          }
        ],
        "explanation": "L'école enseigne des compétences transférables, pas des produits commerciaux. Un élève qui maîtrise Linux saura utiliser Windows et inversement. On forme à l'adaptabilité.",
        "source": "Pédagogie NIRD",
        "difficulty": "avance",
        "tags": ["communication", "parents", "pédagogie"]
      },
      {
        "id": "q7",
        "question": "Quel budget prévoir pour la transition ?",
        "options": [
          {
            "id": "q7-a",
            "text": "Aucun, c'est gratuit",
            "points": 0
          },
          {
            "id": "q7-b",
            "text": "Formation, temps humain, accompagnement",
            "points": 3
          },
          {
            "id": "q7-c",
            "text": "Nouvelles machines obligatoires",
            "points": 0
          },
          {
            "id": "q7-d",
            "text": "Juste quelques licences Linux",
            "points": 0
          }
        ],
        "explanation": "Le libre est gratuit, mais la transition a un coût : formation, temps d'accompagnement, documentation. C'est un investissement qui se rentabilise très vite (plus de licences annuelles).",
        "source": "Économie du libre",
        "difficulty": "avance",
        "tags": ["budget", "coûts", "investissement"]
      },
      {
        "id": "q8",
        "question": "Comment mesurer le succès de la transition ?",
        "options": [
          {
            "id": "q8-a",
            "text": "Nombre de machines sous Linux",
            "points": 2
          },
          {
            "id": "q8-b",
            "text": "Économies réalisées + satisfaction des utilisateurs",
            "points": 3
          },
          {
            "id": "q8-c",
            "text": "Réduction de l'empreinte carbone",
            "points": 2
          },
          {
            "id": "q8-d",
            "text": "On ne mesure pas",
            "points": 0
          }
        ],
        "explanation": "Le succès est multidimensionnel : économies, satisfaction utilisateurs, autonomie gagnée, impact environnemental, compétences acquises. Il faut mesurer plusieurs indicateurs.",
        "source": "KPI NIRD",
        "difficulty": "avance",
        "tags": ["évaluation", "indicateurs", "succès"]
      },
      {
        "id": "q9",
        "question": "La collectivité territoriale est réticente. Tu...",
        "options": [
          {
            "id": "q9-a",
            "text": "Fais quand même sans eux",
            "points": 0
          },
          {
            "id": "q9-b",
            "text": "Présentes des exemples de territoires qui ont réussi",
            "points": 3
          },
          {
            "id": "q9-c",
            "text": "Abandonnes",
            "points": 0
          },
          {
            "id": "q9-d",
            "text": "Proposes un projet pilote limité",
            "points": 2
          }
        ],
        "explanation": "Les exemples concrets et les projets pilotes rassurent. Montrer que d'autres territoires ont réussi (avec données chiffrées) et proposer de commencer petit sont de bonnes stratégies.",
        "source": "Dialogue territorial NIRD",
        "difficulty": "avance",
        "tags": ["collectivités", "politique", "persuasion"]
      },
      {
        "id": "q10",
        "question": "Après 1 an de transition, un bilan s'impose. Tu...",
        "options": [
          {
            "id": "q10-a",
            "text": "Continues sans évaluer",
            "points": 0
          },
          {
            "id": "q10-b",
            "text": "Collectes retours, chiffres, ajustes la stratégie",
            "points": 3
          },
          {
            "id": "q10-c",
            "text": "Accélères le déploiement quoi qu'il arrive",
            "points": 0
          },
          {
            "id": "q10-d",
            "text": "Célèbres les succès seulement",
            "points": 1
          }
        ],
        "explanation": "L'évaluation régulière est cruciale : collecter les retours, mesurer les impacts, identifier les difficultés, ajuster. Célébrer les succès motive, mais l'amélioration continue est essentielle.",
        "source": "Amélioration continue",
        "difficulty": "avance",
        "tags": ["évaluation", "bilan", "ajustement"]
      }
    ],
    "profils": [
      {
        "id": "vercingetorix",
        "name": "Observateur",
        "minScore": 0,
        "maxScore": 18,
        "title": "Spectateur",
        "subtitle": "👀 Tu observes mais n'agis pas encore",
        "description": "Tu comprends les enjeux mais tu n'es pas encore passé à l'action. C'est normal, le changement fait peur. Mais chaque grand voyage commence par un premier pas. Il est temps de devenir acteur !",
        "icon": "👀",
        "color": "#ef4444",
        "gradient": "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        "recommendations": [
          "🎯 Fixe-toi un petit objectif réalisable cette semaine",
          "👥 Trouve un allié dans ton établissement",
          "📞 Contacte le collectif NIRD pour être accompagné",
          "📝 Rédige une liste d'actions concrètes et simples"
        ],
        "nextSteps": [
          "Propose un atelier 'Découverte du libre' dans ton établissement",
          "Teste Linux en dual-boot sur ta machine perso",
          "Identifie 3 logiciels à remplacer facilement"
        ],
        "shareMessage": "Je me prépare à passer à l'action pour un numérique libre à l'école ! 👀 #NIRD #PreparationTransition"
      },
      {
        "id": "guerrier",
        "name": "Initiateur",
        "minScore": 19,
        "maxScore": 24,
        "title": "Lanceur de Projet",
        "subtitle": "🌱 Tu sèmes les graines du changement",
        "description": "Bien ! Tu commences à agir concrètement. Tu as les bonnes intuitions sur comment mener la transition. Continue sur cette voie, affine ta stratégie, et tu verras ton village numérique se transformer.",
        "icon": "🌱",
        "color": "#f97316",
        "gradient": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "recommendations": [
          "📊 Structure ton projet de transition (planning, étapes...)",
          "🤝 Crée une équipe projet avec collègues motivés",
          "💼 Prépare un argumentaire chiffré pour la direction",
          "📚 Documente tes premiers succès pour motiver"
        ],
        "nextSteps": [
          "Lance un projet pilote sur 1-2 classes",
          "Organise une formation pour les collègues",
          "Rejoins les groupes de travail NIRD"
        ],
        "shareMessage": "Je lance la transition vers le libre dans mon établissement ! 🌱 Premières actions concrètes en cours. #NIRD #Initiateur"
      },
      {
        "id": "asterix",
        "name": "Chef de Projet",
        "minScore": 25,
        "maxScore": 28,
        "title": "Stratège de la Transition",
        "subtitle": "⚔️ Tu mènes le changement efficacement",
        "description": "Excellent ! Tu sais comment conduire le changement. Tu es pragmatique, tu accompagnes les équipes, tu mesures l'impact. Tu es un vrai chef de projet de transformation numérique. Ton village résiste efficacement !",
        "icon": "⚔️",
        "color": "#fbbf24",
        "gradient": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        "recommendations": [
          "🎓 Deviens formateur pour d'autres établissements",
          "📖 Partage ton retour d'expérience (articles, conf...)",
          "🌍 Étends la démarche au territoire/académie",
          "🔬 Expérimente des solutions innovantes à partager"
        ],
        "nextSteps": [
          "Mentorise un établissement débutant",
          "Interviens dans des événements NIRD",
          "Documente ta méthodologie sur la Forge"
        ],
        "shareMessage": "Je pilote la transition numérique vers le libre ! ⚔️ Stratégie, accompagnement, résultats concrets. #NIRD #ChefDeProjet"
      },
      {
        "id": "panoramix",
        "name": "Leader",
        "minScore": 29,
        "maxScore": 30,
        "title": "Architecte de la Résistance",
        "subtitle": "🧙‍♂️ Tu es un maître du changement",
        "description": "Exceptionnel ! Tu maîtrises parfaitement la conduite du changement vers le libre. Tu es pragmatique, stratégique, humain. Tu transformes ton établissement et inspires les autres. Un vrai druide de la transition !",
        "icon": "🧙‍♂️",
        "color": "#10b981",
        "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "recommendations": [
          "🎤 Deviens ambassadeur national NIRD",
          "📚 Écris des guides méthodologiques",
          "🏆 Présente ton projet dans des conférences majeures",
          "🌟 Participe aux décisions stratégiques du collectif"
        ],
        "nextSteps": [
          "Forme des chefs de projet pour d'autres territoires",
          "Contribue aux politiques publiques du numérique éducatif",
          "Inspire et accompagne un réseau d'établissements"
        ],
        "shareMessage": "Architecte de la transition numérique libre ! 🧙‍♂️ Je transforme mon établissement et j'accompagne d'autres vers l'autonomie. #NIRD #Leader #Transformation"
      }
    ]
  },
  {
    "metadata": {
      "id": "quiz-connaissance",
      "slug": "connaissance",
      "title": "Connais-tu vraiment les alternatives libres ?",
      "description": "Teste tes connaissances sur les logiciels libres, Linux et les solutions alternatives aux Big Tech.",
      "category": "connaissance",
      "difficulty": "intermediaire",
      "estimatedTime": 7,
      "questionsCount": 12,
      "icon": "🧠",
      "color": "#8b5cf6",
      "gradient": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      "keywords": ["connaissances", "logiciels libres", "linux", "alternatives", "culture"]
    },
    "questions": [
      {
        "id": "q1",
        "question": "Qu'est-ce qu'un logiciel libre ?",
        "options": [
          {
            "id": "q1-a",
            "text": "Un logiciel gratuit",
            "points": 1
          },
          {
            "id": "q1-b",
            "text": "Un logiciel dont le code source est accessible et modifiable",
            "points": 3
          },
          {
            "id": "q1-c",
            "text": "Un logiciel sans publicité",
            "points": 0
          },
          {
            "id": "q1-d",
            "text": "Un logiciel open source",
            "points": 2
          }
        ],
        "explanation": "Un logiciel libre garantit 4 libertés essentielles : utiliser, étudier, modifier et redistribuer. La gratuité est une conséquence, pas une définition. Open source et libre sont proches mais ont des nuances philosophiques.",
        "source": "Free Software Foundation",
        "difficulty": "intermediaire",
        "tags": ["définition", "philosophie", "libertés"]
      },
      {
        "id": "q2",
        "question": "Quelle est l'alternative libre à Microsoft Office ?",
        "options": [
          {
            "id": "q2-a",
            "text": "Google Docs",
            "points": 0
          },
          {
            "id": "q2-b",
            "text": "LibreOffice",
            "points": 3
          },
          {
            "id": "q2-c",
            "text": "WPS Office",
            "points": 1
          },
          {
            "id": "q2-d",
            "text": "Apple iWork",
            "points": 0
          }
        ],
        "explanation": "LibreOffice est la suite bureautique libre de référence, compatible avec les formats Microsoft, gratuite et complète. Google Docs est gratuit mais propriétaire et centralisé.",
        "source": "The Document Foundation",
        "sourceUrl": "https://www.libreoffice.org/",
        "difficulty": "debutant",
        "tags": ["alternatives", "bureautique"]
      },
      {
        "id": "q3",
        "question": "Linux est...",
        "options": [
          {
            "id": "q3-a",
            "text": "Un système d'exploitation complet",
            "points": 2
          },
          {
            "id": "q3-b",
            "text": "Uniquement le noyau du système",
            "points": 3
          },
          {
            "id": "q3-c",
            "text": "Un logiciel de bureautique",
            "points": 0
          },
          {
            "id": "q3-d",
            "text": "Une marque d'ordinateur",
            "points": 0
          }
        ],
        "explanation": "Techniquement, Linux est le noyau. Les distributions (Ubuntu, Debian, Fedora...) combinent Linux avec d'autres logiciels pour former un système complet. On devrait dire GNU/Linux !",
        "source": "Linux Foundation",
        "difficulty": "intermediaire",
        "tags": ["linux", "technique"]
      },
      {
        "id": "q4",
        "question": "Quelle alternative libre pour retoucher des photos ?",
        "options": [
          {
            "id": "q4-a",
            "text": "GIMP",
            "points": 3
          },
          {
            "id": "q4-b",
            "text": "Canva",
            "points": 0
          },
          {
            "id": "q4-c",
            "text": "Photopea",
            "points": 1
          },
          {
            "id": "q4-d",
            "text": "Pixlr",
            "points": 0
          }
        ],
        "explanation": "GIMP (GNU Image Manipulation Program) est l'alternative libre à Photoshop. Gratuit, puissant et multiplateforme, il est utilisé par des millions de professionnels et amateurs.",
        "source": "GIMP",
        "sourceUrl": "https://www.gimp.org/",
        "difficulty": "debutant",
        "tags": ["alternatives", "graphisme"]
      },
      {
        "id": "q5",
        "question": "Quel navigateur web est libre et respectueux de la vie privée ?",
        "options": [
          {
            "id": "q5-a",
            "text": "Google Chrome",
            "points": 0
          },
          {
            "id": "q5-b",
            "text": "Firefox",
            "points": 3
          },
          {
            "id": "q5-c",
            "text": "Edge",
            "points": 0
          },
          {
            "id": "q5-d",
            "text": "Opera",
            "points": 1
          }
        ],
        "explanation": "Firefox (Mozilla) est le principal navigateur libre. Il respecte la vie privée, est personnalisable et indépendant des GAFAM. Chromium est open source mais contrôlé par Google.",
        "source": "Mozilla Foundation",
        "sourceUrl": "https://www.mozilla.org/",
        "difficulty": "debutant",
        "tags": ["alternatives", "navigateurs", "vie privée"]
      },
      {
        "id": "q6",
        "question": "Pour du montage vidéo libre, on peut utiliser...",
        "options": [
          {
            "id": "q6-a",
            "text": "Adobe Premiere",
            "points": 0
          },
          {
            "id": "q6-b",
            "text": "Kdenlive",
            "points": 3
          },
          {
            "id": "q6-c",
            "text": "DaVinci Resolve",
            "points": 1
          },
          {
            "id": "q6-d",
            "text": "Final Cut Pro",
            "points": 0
          }
        ],
        "explanation": "Kdenlive est un éditeur vidéo libre professionnel. DaVinci Resolve est gratuit mais propriétaire. D'autres alternatives libres existent : OpenShot, Shotcut...",
        "source": "KDE",
        "sourceUrl": "https://kdenlive.org/",
        "difficulty": "intermediaire",
        "tags": ["alternatives", "vidéo", "multimédia"]
      },
      {
        "id": "q7",
        "question": "Quelle est la licence libre la plus utilisée ?",
        "options": [
          {
            "id": "q7-a",
            "text": "MIT",
            "points": 2
          },
          {
            "id": "q7-b",
            "text": "GPL (GNU General Public License)",
            "points": 3
          },
          {
            "id": "q7-c",
            "text": "Apache",
            "points": 2
          },
          {
            "id": "q7-d",
            "text": "BSD",
            "points": 1
          }
        ],
        "explanation": "La GPL est la licence historique du logiciel libre, créée par Richard Stallman. Elle garantit que les modifications restent libres (copyleft). MIT et Apache sont aussi très populaires.",
        "source": "GNU Project",
        "difficulty": "avance",
        "tags": ["licences", "juridique", "technique"]
      },
      {
        "id": "q8",
        "question": "Pour remplacer Dropbox/Google Drive, on peut utiliser...",
        "options": [
          {
            "id": "q8-a",
            "text": "Nextcloud",
            "points": 3
          },
          {
            "id": "q8-b",
            "text": "OneDrive",
            "points": 0
          },
          {
            "id": "q8-c",
            "text": "iCloud",
            "points": 0
          },
          {
            "id": "q8-d",
            "text": "Mega",
            "points": 1
          }
        ],
        "explanation": "Nextcloud est une solution de cloud libre et auto-hébergeable. Elle offre stockage, partage, calendrier, contacts... le tout sous ton contrôle. Idéal pour la souveraineté des données scolaires.",
        "source": "Nextcloud",
        "sourceUrl": "https://nextcloud.com/",
        "difficulty": "intermediaire",
        "tags": ["alternatives", "cloud", "souveraineté"]
      },
      {
        "id": "q9",
        "question": "Quel lecteur multimédia libre lit presque tous les formats ?",
        "options": [
          {
            "id": "q9-a",
            "text": "Windows Media Player",
            "points": 0
          },
          {
            "id": "q9-b",
            "text": "iTunes",
            "points": 0
          },
          {
            "id": "q9-c",
            "text": "VLC",
            "points": 3
          },
          {
            "id": "q9-d",
            "text": "QuickTime",
            "points": 0
          }
        ],
        "explanation": "VLC (VideoLAN) est LE lecteur multimédia universel. Libre, gratuit, multiplateforme, il lit tout sans codecs additionnels. Un incontournable !",
        "source": "VideoLAN",
        "sourceUrl": "https://www.videolan.org/",
        "difficulty": "debutant",
        "tags": ["alternatives", "multimédia"]
      },
      {
        "id": "q10",
        "question": "Pour enregistrer son écran en libre, on utilise...",
        "options": [
          {
            "id": "q10-a",
            "text": "Camtasia",
            "points": 0
          },
          {
            "id": "q10-b",
            "text": "OBS Studio",
            "points": 3
          },
          {
            "id": "q10-c",
            "text": "Snagit",
            "points": 0
          },
          {
            "id": "q10-d",
            "text": "ScreenFlow",
            "points": 0
          }
        ],
        "explanation": "OBS Studio (Open Broadcaster Software) est la référence pour le streaming et l'enregistrement d'écran. Utilisé par les youtubeurs et les enseignants pour créer des tutoriels.",
        "source": "OBS Project",
        "sourceUrl": "https://obsproject.com/",
        "difficulty": "intermediaire",
        "tags": ["alternatives", "capture", "enseignement"]
      },
      {
        "id": "q11",
        "question": "Quelle distribution Linux est recommandée pour débuter ?",
        "options": [
          {
            "id": "q11-a",
            "text": "Arch Linux",
            "points": 0
          },
          {
            "id": "q11-b",
            "text": "Ubuntu ou Linux Mint",
            "points": 3
          },
          {
            "id": "q11-c",
            "text": "Gentoo",
            "points": 0
          },
          {
            "id": "q11-d",
            "text": "Kali Linux",
            "points": 0
          }
        ],
        "explanation": "Ubuntu et Linux Mint sont très accessibles pour débuter. Interface familière, vaste communauté, logithèque riche. Pour l'éducation, Debian Edu et Primtux sont aussi excellentes.",
        "source": "Lycée Carnot",
        "sourceUrl": "https://tube-numerique-educatif.apps.education.fr/w/3LXem3XK4asbwZa5R1qGkW",
        "difficulty": "debutant",
        "tags": ["linux", "distributions", "débutants"]
      },
      {
        "id": "q12",
        "question": "Combien coûte LibreOffice pour une école de 1000 élèves ?",
        "options": [
          {
            "id": "q12-a",
            "text": "10 000€",
            "points": 0
          },
          {
            "id": "q12-b",
            "text": "5 000€",
            "points": 0
          },
          {
            "id": "q12-c",
            "text": "1 000€",
            "points": 0
          },
          {
            "id": "q12-d",
            "text": "0€ (gratuit)",
            "points": 3
          }
        ],
        "explanation": "LibreOffice est 100% gratuit, sans limite d'utilisateurs. Comparez avec Office 365 : environ 80€/an/utilisateur = 80 000€/an pour 1000 élèves. Sur 5 ans : 400 000€ d'économies !",
        "source": "The Document Foundation",
        "difficulty": "debutant",
        "tags": ["coûts", "économies", "bureautique"]
      }
    ],
    "profils": [
      {
        "id": "vercingetorix",
        "name": "Novice du Libre",
        "minScore": 0,
        "maxScore": 24,
        "title": "Apprenti Gaulois",
        "subtitle": "🌱 Tu débutes dans le monde du libre",
        "description": "Tu découvres tout juste l'univers du logiciel libre. C'est un excellent début ! Avec un peu de formation et de pratique, tu vas vite progresser. Chaque druide a commencé comme toi.",
        "icon": "🌱",
        "color": "#ef4444",
        "gradient": "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        "recommendations": [
          "📚 Visite Framasoft.org pour découvrir les alternatives",
          "💻 Installe une distribution Linux en dual-boot ou sur une clé USB",
          "🎥 Regarde des tutoriels sur PeerTube",
          "👥 Rejoins une communauté d'entraide (forums, Discord...)"
        ],
        "nextSteps": [
          "Refais ce quiz après avoir exploré les alternatives",
          "Essaie 3 logiciels libres cette semaine",
          "Passe au quiz 'Action' pour des cas pratiques"
        ],
        "shareMessage": "Je découvre le monde du logiciel libre ! 🌱 C'est le début de mon voyage vers l'autonomie numérique. #NIRD #ApprentissageLibre"
      },
      {
        "id": "guerrier",
        "name": "Connaisseur",
        "minScore": 25,
        "maxScore": 29,
        "title": "Gaulois Éclairé",
        "subtitle": "📚 Tu connais bien les alternatives",
        "description": "Bravo ! Tu as de bonnes connaissances sur le libre. Tu identifies les principales alternatives et comprends les enjeux. Continue à approfondir et à expérimenter pour devenir expert.",
        "icon": "📚",
        "color": "#f97316",
        "gradient": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "recommendations": [
          "🔧 Passe à la pratique : installe et utilise quotidiennement",
          "📖 Lis sur les licences libres et la philosophie du libre",
          "🎓 Forme un collègue aux outils que tu maîtrises",
          "🌐 Contribue à un projet libre (traduction, doc, code...)"
        ],
        "nextSteps": [
          "Deviens référent logiciels libres dans ton établissement",
          "Participe à des événements (Journée du Libre, RMLL...)",
          "Propose un atelier dans ton établissement"
        ],
        "shareMessage": "Connaisseur du logiciel libre ! 📚 Je maîtrise les alternatives et je les partage autour de moi. #NIRD #CultureLibre"
      },
      {
        "id": "asterix",
        "name": "Expert",
        "minScore": 30,
        "maxScore": 33,
        "title": "Druide en Devenir",
        "subtitle": "🎓 Expert des solutions libres",
        "description": "Excellent ! Tu maîtrises très bien l'écosystème du libre. Tu connais les outils, les concepts et les enjeux. Tu es prêt à transmettre et à accompagner d'autres vers l'autonomie numérique.",
        "icon": "🎓",
        "color": "#fbbf24",
        "gradient": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        "recommendations": [
          "🎤 Interviens dans des formations ou conférences",
          "✍️ Rédige des tutoriels et guides",
          "🤝 Mentorise des débutants",
          "🔬 Explore des solutions avancées (serveurs, DevOps libre...)"
        ],
        "nextSteps": [
          "Deviens formateur NIRD",
          "Contribue activement à des projets libres",
          "Partage ton expertise sur la Forge"
        ],
        "shareMessage": "Expert du logiciel libre ! 🎓 Je maîtrise les alternatives et j'accompagne la transition numérique. #NIRD #ExpertLibre"
      },
      {
        "id": "panoramix",
        "name": "Maître",
        "minScore": 34,
        "maxScore": 36,
        "title": "Grand Druide du Libre",
        "subtitle": "🧙‍♂️ Maître absolu des alternatives",
        "description": "Exceptionnel ! Tu es un véritable expert du libre. Tu connais les moindres détails, tu maîtrises les concepts avancés. Tu es un pilier de la communauté. Continue à partager ta sagesse !",
        "icon": "🧙‍♂️",
        "color": "#10b981",
        "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "recommendations": [
          "🌟 Deviens ambassadeur du libre",
          "📚 Écris un livre ou des articles de référence",
          "🎯 Crée du contenu éducatif (vidéos, cours...)",
          "🌍 Participe à la gouvernance de projets libres majeurs"
        ],
        "nextSteps": [
          "Rejoins les instances de décision du libre éducatif",
          "Représente NIRD dans des événements nationaux/internationaux",
          "Innove et crée de nouvelles solutions"
        ],
        "shareMessage": "Grand Druide du Libre ! 🧙‍♂️ Score parfait au quiz NIRD. Je partage ma passion pour un numérique libre, éthique et souverain. #NIRD #GrandDruide #MaîtreLibre"
      }
    ]
  }
  ,
  {
    "metadata": {
      "id": "quiz-diagnostic",
      "slug": "diagnostic",
      "title": "Es-tu prisonnier de l'Empire numérique ?",
      "description": "Évalue le niveau de dépendance numérique de ton établissement aux Big Tech et découvre ton profil de résistant.",
      "category": "diagnostic",
      "difficulty": "debutant",
      "estimatedTime": 5,
      "questionsCount": 15,
      "icon": "🔍",
      "color": "#3b82f6",
      "gradient": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      "keywords": ["diagnostic", "dépendance", "big tech", "windows", "autonomie"]
    },
    "questions": [
      {
        "id": "q1",
        "question": "Combien ton établissement dépense-t-il par an en licences logicielles ?",
        "subtitle": "Windows, Office, antivirus, logiciels spécialisés...",
        "options": [
          {
            "id": "q1-a",
            "text": "Moins de 10 000€",
            "points": 3
          },
          {
            "id": "q1-b",
            "text": "Entre 10 000€ et 50 000€",
            "points": 2
          },
          {
            "id": "q1-c",
            "text": "Plus de 50 000€",
            "points": 1
          },
          {
            "id": "q1-d",
            "text": "Je ne sais pas du tout",
            "points": 0
          }
        ],
        "explanation": "En moyenne, un lycée français dépense entre 30 000€ et 60 000€ par an en licences propriétaires. Avec le libre, ce coût pourrait être réduit à quasi zéro, libérant des budgets pour d'autres projets pédagogiques.",
        "source": "Collectif NIRD",
        "sourceUrl": "https://nird.forge.apps.education.fr/",
        "difficulty": "debutant",
        "tags": ["coûts", "licences", "budget"]
      },
      {
        "id": "q2",
        "question": "Que se passera-t-il quand Windows 10 ne sera plus supporté (octobre 2025) ?",
        "options": [
          {
            "id": "q2-a",
            "text": "On devra acheter de nouveaux PC pour Windows 11",
            "points": 0
          },
          {
            "id": "q2-b",
            "text": "On peut installer Linux sur les anciens PC",
            "points": 3
          },
          {
            "id": "q2-c",
            "text": "On continuera avec Windows 10 sans mise à jour",
            "points": 1
          },
          {
            "id": "q2-d",
            "text": "Je ne sais pas",
            "points": 0
          }
        ],
        "explanation": "La fin du support de Windows 10 crée une obsolescence programmée massive. Linux permet de donner une seconde vie à des milliers d'ordinateurs parfaitement fonctionnels, évitant un gaspillage environnemental et financier énorme.",
        "source": "France Info",
        "sourceUrl": "https://www.youtube.com/watch?v=76T8oubek-c",
        "difficulty": "debutant",
        "tags": ["windows", "obsolescence", "linux"]
      },
      {
        "id": "q3",
        "question": "Où sont stockées les données de ton établissement ?",
        "options": [
          {
            "id": "q3-a",
            "text": "Sur des serveurs en France/UE",
            "points": 3
          },
          {
            "id": "q3-b",
            "text": "Sur le cloud (Google, Microsoft, etc.)",
            "points": 1
          },
          {
            "id": "q3-c",
            "text": "Un mix des deux",
            "points": 2
          },
          {
            "id": "q3-d",
            "text": "Aucune idée",
            "points": 0
          }
        ],
        "explanation": "Le stockage des données scolaires hors UE pose des problèmes de souveraineté et de conformité RGPD. Les solutions NIRD privilégient des hébergements locaux ou dans l'UE, garantissant le contrôle des données éducatives.",
        "source": "RGPD",
        "difficulty": "debutant",
        "tags": ["données", "rgpd", "souveraineté"]
      },
      {
        "id": "q4",
        "question": "Combien de PC fonctionnels risquent d'être jetés à cause de Windows 11 ?",
        "options": [
          {
            "id": "q4-a",
            "text": "Quelques centaines",
            "points": 0
          },
          {
            "id": "q4-b",
            "text": "Quelques milliers",
            "points": 1
          },
          {
            "id": "q4-c",
            "text": "Plusieurs dizaines de milliers",
            "points": 2
          },
          {
            "id": "q4-d",
            "text": "Des centaines de milliers",
            "points": 3
          }
        ],
        "explanation": "En France, ce sont potentiellement des centaines de milliers d'ordinateurs de l'Éducation Nationale qui pourraient être jetés alors qu'ils fonctionnent parfaitement. Un désastre écologique et financier évitable avec Linux.",
        "source": "Reportage France Info",
        "sourceUrl": "https://www.youtube.com/watch?v=76T8oubek-c",
        "difficulty": "debutant",
        "tags": ["environnement", "obsolescence", "gaspillage"]
      },
      {
        "id": "q5",
        "question": "Ton établissement peut-il choisir librement ses logiciels ?",
        "options": [
          {
            "id": "q5-a",
            "text": "Oui, totalement autonome",
            "points": 3
          },
          {
            "id": "q5-b",
            "text": "Partiellement, selon le budget",
            "points": 2
          },
          {
            "id": "q5-c",
            "text": "Non, c'est imposé par la collectivité/académie",
            "points": 1
          },
          {
            "id": "q5-d",
            "text": "Je ne sais pas",
            "points": 0
          }
        ],
        "explanation": "Beaucoup d'établissements sont dépendants des choix des collectivités ou académies, limitant leur autonomie. La démarche NIRD vise à redonner du pouvoir d'agir aux équipes éducatives locales.",
        "source": "Collectif NIRD",
        "sourceUrl": "https://nird.forge.apps.education.fr/",
        "difficulty": "debutant",
        "tags": ["autonomie", "gouvernance"]
      },
      {
        "id": "q6",
        "question": "Combien d'élèves ont déjà utilisé Linux dans ton établissement ?",
        "options": [
          {
            "id": "q6-a",
            "text": "La majorité",
            "points": 3
          },
          {
            "id": "q6-b",
            "text": "Quelques classes",
            "points": 2
          },
          {
            "id": "q6-c",
            "text": "Très peu ou aucun",
            "points": 1
          },
          {
            "id": "q6-d",
            "text": "C'est quoi Linux ?",
            "points": 0
          }
        ],
        "explanation": "Linux est un système d'exploitation libre, gratuit et performant. Au lycée Carnot de Bruay, les élèves l'utilisent quotidiennement et affirment : 'Linux, c'est facile !' La peur du changement est souvent infondée.",
        "source": "Lycée Carnot",
        "sourceUrl": "https://tube-numerique-educatif.apps.education.fr/w/3LXem3XK4asbwZa5R1qGkW",
        "difficulty": "debutant",
        "tags": ["linux", "élèves", "formation"]
      },
      {
        "id": "q7",
        "question": "Quel pourcentage du budget numérique va aux abonnements annuels ?",
        "options": [
          {
            "id": "q7-a",
            "text": "Moins de 20%",
            "points": 3
          },
          {
            "id": "q7-b",
            "text": "Entre 20% et 50%",
            "points": 2
          },
          {
            "id": "q7-c",
            "text": "Plus de 50%",
            "points": 1
          },
          {
            "id": "q7-d",
            "text": "Je ne sais pas",
            "points": 0
          }
        ],
        "explanation": "Les abonnements (Office 365, Adobe, antivirus, etc.) représentent une part croissante des budgets, créant une dépendance financière permanente. Le libre supprime ces coûts récurrents.",
        "source": "Collectif NIRD",
        "difficulty": "debutant",
        "tags": ["abonnements", "coûts", "budget"]
      },
      {
        "id": "q8",
        "question": "Les enseignants de ton établissement connaissent-ils des alternatives libres ?",
        "options": [
          {
            "id": "q8-a",
            "text": "Oui, la plupart en utilisent",
            "points": 3
          },
          {
            "id": "q8-b",
            "text": "Certains connaissent mais n'utilisent pas",
            "points": 2
          },
          {
            "id": "q8-c",
            "text": "Très peu connaissent",
            "points": 1
          },
          {
            "id": "q8-d",
            "text": "Personne ne connaît",
            "points": 0
          }
        ],
        "explanation": "La formation et la sensibilisation sont essentielles. LibreOffice, GIMP, Audacity, OBS Studio... de nombreuses alternatives gratuites et performantes existent. Le collectif NIRD propose formations et accompagnement.",
        "source": "Collectif NIRD",
        "sourceUrl": "https://nird.forge.apps.education.fr/",
        "difficulty": "debutant",
        "tags": ["formation", "alternatives", "enseignants"]
      },
      {
        "id": "q9",
        "question": "Ton établissement reconditionne-t-il du matériel informatique ?",
        "options": [
          {
            "id": "q9-a",
            "text": "Oui, systématiquement",
            "points": 3
          },
          {
            "id": "q9-b",
            "text": "Parfois, selon les cas",
            "points": 2
          },
          {
            "id": "q9-c",
            "text": "Rarement",
            "points": 1
          },
          {
            "id": "q9-d",
            "text": "Jamais, on jette",
            "points": 0
          }
        ],
        "explanation": "Le reconditionnement et le réemploi sont au cœur de la démarche NIRD. Un PC sous Linux peut servir 10 ans au lieu de 5, réduisant drastiquement l'impact environnemental et les coûts.",
        "source": "ADEME",
        "difficulty": "debutant",
        "tags": ["reconditionnement", "environnement", "durabilité"]
      },
      {
        "id": "q10",
        "question": "Les élèves sont-ils sensibilisés à la sobriété numérique ?",
        "options": [
          {
            "id": "q10-a",
            "text": "Oui, c'est intégré aux cours",
            "points": 3
          },
          {
            "id": "q10-b",
            "text": "Quelques actions ponctuelles",
            "points": 2
          },
          {
            "id": "q10-c",
            "text": "Très peu",
            "points": 1
          },
          {
            "id": "q10-d",
            "text": "Pas du tout",
            "points": 0
          }
        ],
        "explanation": "La sobriété numérique est un enjeu majeur. Former les élèves aux impacts environnementaux du numérique et aux alternatives durables est essentiel pour former des citoyens responsables.",
        "source": "Collectif NIRD",
        "difficulty": "debutant",
        "tags": ["sobriété", "éducation", "environnement"]
      },
      {
        "id": "q11",
        "question": "Combien de logiciels propriétaires utilisez-vous quotidiennement ?",
        "options": [
          {
            "id": "q11-a",
            "text": "Aucun, que du libre",
            "points": 3
          },
          {
            "id": "q11-b",
            "text": "1 à 3",
            "points": 2
          },
          {
            "id": "q11-c",
            "text": "4 à 10",
            "points": 1
          },
          {
            "id": "q11-d",
            "text": "Plus de 10",
            "points": 0
          }
        ],
        "explanation": "Chaque logiciel propriétaire est un point de dépendance. Identifier les alternatives libres pour chacun est la première étape vers l'autonomie numérique.",
        "source": "Collectif NIRD",
        "difficulty": "debutant",
        "tags": ["logiciels", "dépendance"]
      },
      {
        "id": "q12",
        "question": "Votre établissement participe-t-il à des communautés du libre éducatif ?",
        "options": [
          {
            "id": "q12-a",
            "text": "Oui, activement",
            "points": 3
          },
          {
            "id": "q12-b",
            "text": "On observe de loin",
            "points": 2
          },
          {
            "id": "q12-c",
            "text": "On ne connaît pas ces communautés",
            "points": 1
          },
          {
            "id": "q12-d",
            "text": "Qu'est-ce que c'est ?",
            "points": 0
          }
        ],
        "explanation": "La Forge des Communs Numériques Éducatifs, le collectif NIRD et d'autres communautés partagent ressources, outils et bonnes pratiques. Rejoindre ces réseaux accélère la transition.",
        "source": "La Forge",
        "sourceUrl": "https://forge.apps.education.fr/",
        "difficulty": "debutant",
        "tags": ["communauté", "partage", "collaboration"]
      },
      {
        "id": "q13",
        "question": "Les données personnelles des élèves sont-elles protégées conformément au RGPD ?",
        "options": [
          {
            "id": "q13-a",
            "text": "Oui, totalement conformes",
            "points": 3
          },
          {
            "id": "q13-b",
            "text": "Probablement, mais non vérifié",
            "points": 2
          },
          {
            "id": "q13-c",
            "text": "Des doutes subsistent",
            "points": 1
          },
          {
            "id": "q13-d",
            "text": "Je ne sais pas",
            "points": 0
          }
        ],
        "explanation": "Le RGPD impose des obligations strictes. Utiliser des services US (Google, Microsoft) pose des questions juridiques. Les solutions libres et européennes garantissent une meilleure conformité.",
        "source": "CNIL",
        "difficulty": "debutant",
        "tags": ["rgpd", "données", "protection"]
      },
      {
        "id": "q14",
        "question": "Existe-t-il un plan de transition vers le libre dans votre établissement ?",
        "options": [
          {
            "id": "q14-a",
            "text": "Oui, en cours de déploiement",
            "points": 3
          },
          {
            "id": "q14-b",
            "text": "En discussion",
            "points": 2
          },
          {
            "id": "q14-c",
            "text": "Évoqué mais pas de plan concret",
            "points": 1
          },
          {
            "id": "q14-d",
            "text": "Aucun plan",
            "points": 0
          }
        ],
        "explanation": "La transition vers le libre doit être progressive et planifiée. Le collectif NIRD propose des méthodologies éprouvées pour accompagner les établissements étape par étape.",
        "source": "Collectif NIRD",
        "sourceUrl": "https://nird.forge.apps.education.fr/",
        "difficulty": "debutant",
        "tags": ["transition", "planification", "stratégie"]
      },
      {
        "id": "q15",
        "question": "Les techniciens/administrateurs réseaux sont-ils formés à Linux ?",
        "options": [
          {
            "id": "q15-a",
            "text": "Oui, ils maîtrisent",
            "points": 3
          },
          {
            "id": "q15-b",
            "text": "Partiellement formés",
            "points": 2
          },
          {
            "id": "q15-c",
            "text": "Peu ou pas formés",
            "points": 1
          },
          {
            "id": "q15-d",
            "text": "Pas de technicien dédié",
            "points": 0
          }
        ],
        "explanation": "La formation des équipes techniques est cruciale. Le collectif NIRD organise des formations et met en relation les établissements pour mutualiser les compétences.",
        "source": "Collectif NIRD",
        "difficulty": "debutant",
        "tags": ["formation", "technique", "linux"]
      }
    ],
    "profils": [
      {
        "id": "vercingetorix",
        "name": "Vercingétorix",
        "minScore": 0,
        "maxScore": 30,
        "title": "Prisonnier de l'Empire",
        "subtitle": "⛓️ Totalement sous le joug des Big Tech",
        "description": "Ton établissement est complètement dépendant de l'empire numérique. Les Big Tech contrôlent tes outils, tes données et ton budget. Mais tout espoir n'est pas perdu ! Même Vercingétorix a fini par comprendre qu'il fallait changer de stratégie. Il est temps de rejoindre le village des irréductibles !",
        "icon": "⛓️",
        "color": "#ef4444",
        "gradient": "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        "recommendations": [
          "📺 Commence par regarder les vidéos NIRD pour comprendre les enjeux (5 min)",
          "💰 Utilise le calculateur pour évaluer le coût de ta dépendance actuelle",
          "🔍 Identifie 3 logiciels que tu pourrais remplacer facilement (ex: LibreOffice pour Office)",
          "👥 Contacte le collectif NIRD pour être accompagné dans les premiers pas"
        ],
        "nextSteps": [
          "Passe au quiz 'Connaissance' pour découvrir les alternatives",
          "Regarde la vidéo 'Linux c'est facile !' du lycée Carnot",
          "Visite le site NIRD et rejoins la communauté"
        ],
        "shareMessage": "Je suis encore prisonnier de l'Empire numérique 🏰 mais je vais résister ! Rejoins la démarche NIRD pour un numérique libre à l'école. #NIRD #LogicielLibre #EducationNumerique"
      },
      {
        "id": "guerrier",
        "name": "Guerrier",
        "minScore": 31,
        "maxScore": 60,
        "title": "Guerrier en Formation",
        "subtitle": "⚔️ Tu résistes, mais tu peux faire mieux",
        "description": "Tu as pris conscience du problème et commencé à résister ! Quelques alternatives libres sont utilisées, mais l'Empire garde encore une forte emprise sur ton établissement. Continue ton entraînement, apprends les techniques de combat numérique, et tu deviendras bientôt un Astérix confirmé !",
        "icon": "⚔️",
        "color": "#f97316",
        "gradient": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "recommendations": [
          "📚 Approfondis tes connaissances avec le quiz 'Connaissance'",
          "🎯 Fixe-toi un objectif : remplacer 5 logiciels propriétaires cette année",
          "👨‍🏫 Forme 3 collègues aux alternatives libres que tu utilises déjà",
          "📊 Présente un plan de transition progressif à ta direction",
          "🔧 Participe à un atelier technique NIRD pour monter en compétence"
        ],
        "nextSteps": [
          "Rejoins la communauté NIRD sur la Forge",
          "Propose un atelier 'Découverte de Linux' dans ton établissement",
          "Teste une distribution Linux éducative (Ubuntu, Debian Edu...)"
        ],
        "shareMessage": "En formation pour résister aux Big Tech ! ⚔️ Mon établissement progresse vers un numérique libre et responsable. #NIRD #LogicielLibre #TransitionNumerique"
      },
      {
        "id": "asterix",
        "name": "Astérix",
        "minScore": 61,
        "maxScore": 85,
        "title": "Astérix Confirmé",
        "subtitle": "🛡️ Belle résistance numérique !",
        "description": "Bravo ! Ton établissement résiste efficacement à l'empire numérique. Tu utilises de nombreuses solutions libres, tu formes tes équipes et tu as une vraie stratégie d'autonomie. Il reste encore quelques bastions de l'Empire à conquérir, mais tu es sur la bonne voie. La potion magique du libre te donne la force de continuer !",
        "icon": "🛡️",
        "color": "#fbbf24",
        "gradient": "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        "recommendations": [
          "🌟 Deviens ambassadeur NIRD pour inspirer d'autres établissements",
          "📝 Documente ton expérience sur la Forge pour la communauté",
          "🤝 Aide un établissement voisin à démarrer sa transition",
          "🎓 Forme des élèves pour qu'ils deviennent ambassadeurs du libre",
          "🔬 Expérimente des solutions avancées (serveurs libres, cloud souverain...)"
        ],
        "nextSteps": [
          "Complète ton village avec le quiz 'Action' pour aller plus loin",
          "Organise une journée portes ouvertes 'Numérique Libre'",
          "Contacte les collectivités pour étendre NIRD au territoire"
        ],
        "shareMessage": "Mon établissement résiste aux Big Tech ! 🛡️ Autonomie numérique, logiciels libres, sobriété : on y arrive ! #NIRD #IrréductiblesGaulois #EducationLibre"
      },
      {
        "id": "panoramix",
        "name": "Panoramix",
        "minScore": 86,
        "maxScore": 100,
        "title": "Druide du Libre",
        "subtitle": "🧙‍♂️ Maître de la potion numérique !",
        "description": "Exceptionnel ! Tu es un véritable druide du numérique libre. Ton établissement est un modèle d'autonomie, de souveraineté et de durabilité. Tu formes, tu partages, tu innoves. Ton village inspire les autres et montre que la résistance est possible et efficace. Continue à préparer ta potion magique et à la partager avec tous les villages voisins !",
        "icon": "🧙‍♂️",
        "color": "#10b981",
        "gradient": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "recommendations": [
          "🎤 Interviens dans des conférences et événements pour témoigner",
          "📖 Rédige des guides et tutoriels pour la communauté",
          "🌍 Connecte-toi avec d'autres druides du libre (Framasoft, April, etc.)",
          "🏆 Candidate aux prix/reconnaissances du numérique libre éducatif",
          "🔮 Innove et expérimente de nouvelles solutions à partager"
        ],
        "nextSteps": [
          "Deviens référent NIRD pour ta région",
          "Propose des formations pour d'autres établissements",
          "Participe aux groupes de travail nationaux sur le libre éducatif"
        ],
        "shareMessage": "Druide du numérique libre ! 🧙‍♂️ Notre établissement prouve qu'un autre numérique éducatif est possible : libre, souverain, durable. #NIRD #DruideDuLibre #Champion"
      }
    ]
  }
]

export default allQuizzes