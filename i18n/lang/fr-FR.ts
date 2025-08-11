// 法语
let message = {
  // 首页
  HomePage: {
    home: "Accueil",
    version: "Version de base (Gratuite) :",
    times:
      "{times} transcriptions gratuites par jour, {left} restantes aujourd'hui. ",
    tips: "Passez à Pro pour des transcriptions illimitées.",
    update: "Mettre à niveau maintenant",
    folders: "Dossiers",
    rename: "Renommer",
    delete: "Supprimer",
    createTitle: "Créer un dossier",
    deleteConfirm: `Êtes-vous sûr de vouloir supprimer le dossier et tous les fichiers qu'il contient ?`,
    cancel: "Annuler",
    confirm: "Créer",
    dialogLabel: "Nom du dossier",
    recently: "Fichiers récents",
    loading: "Chargement",
    tour: {
      step0: {
        title: "Bienvenue sur {name}",
        tip: "Ici, vous pouvez :",
        content:
          "Transcrire des conversations uniques, des réunions, des conférences et plus encore",
        next: "Commencer"
      },
      step1: {
        title: "Transcrire des fichiers",
        content:
          "Prend en charge trois méthodes de transcription : fichiers locaux, liens et enregistrements."
      },
      step2: {
        title: "Créer un dossier",
        content:
          'Cliquez sur le "+" pour créer un dossier et organiser vos fichiers.'
      },
      step3: {
        title: "Voir les détails de la transcription et éditer",
        content:
          "Cliquez sur l'élément pour voir les détails de la transcription, l'éditer et la traduire."
      },
      next: "suivant",
      finish: "Compris"
    },
    export: {
      export: "Exporter",
      title: "Nous générons votre exportation",
      title2: "Votre fichier est prêt",
      singleLoadingContent: "1 fichier est en cours de compression.",
      singleSuccessContent: "1 fichier a été compressé.",
      loadingContent: "{num} fichiers sont en cours de compression.",
      successContent: "{num} fichiers ont été compressés.",
      cancel: "Annuler l'exportation",
      error: "Erreur d'exportation",
      dialog: {
        title: "Avertissement",
        content: "Annuler l'exportation ?",
        cancel: "Annuler l'exportation",
        continue: "Continuer l'exportation"
      }
    },
    welcome: {
      title: "Bienvenue sur Scribify !",
      description: "Ici, vous pouvez :",
      transcribe:
        "Transcrivez sans effort avec Scribify — transformez les conversations vocales en texte clair, consultable et partageable en un instant.",
      precision:
        "Obtenez des transcriptions précises avec identification des interlocuteurs et horodatage instantanément.",
      translate:
        "Brisez les barrières linguistiques : traduisez les transcriptions dans plus de 200 langues facilement.",
      edit: "Modifiez, affinez et exportez vos transcriptions dans des formats adaptés à vos besoins.",
      collaborate:
        "Collaborez en partageant votre texte transcrit avec d'autres personnes.",
      button: "Commencer",
      tip: "Prêt à transformer l'audio en texte transcrit ? Commencez à explorer maintenant !",
      tip2: "Commencez à explorer maintenant !",
      tip1: "Prêt à transformer l'audio en texte transcrit ? "
    },
    subscriptionModal: {
      left: {
        title: "Obtenez le Plan Pro pour débloquer plus",
        c1: "Transcriptions illimitées",
        c2: "Téléchargements de 10 heures",
        c3: "Priorité maximale",
        c4: "99% de précision de transcription",
        c5: "Plus de 100 langues prises en charge",
        c6: "Identification des interlocuteurs",
        c7: "Traduction de transcription",
        t1: "Transcriptions illimitées pour une personne.",
        t2: "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
        t3: "Nous transcrirons toujours vos fichiers dès que possible avec la plus haute priorité."
      },
      right: {
        title: "Obtenir le Plan Pro",
        yearly: "Annuel",
        monthly: "Mensuel",
        save: "Économie",
        preMonth: "par mois",
        preYear: "par an",
        firstMonth: "premier mois",
        afterwards: "ensuite"
      },
      subscribe: "S'abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Nom",
      duration: "Durée",
      status: "Statut",
      date: "Date de création",
      activity: "Activité",
      empty1: `Il est vide.`,
      empty2: `Cliquez sur le bouton ci-dessus pour transcrire un fichier.`,
      just: "juste",
      export: "Exporter",
      delete: "Supprimer",
      share: "Partager",
      rename: "Renommer",
      move: "Déplacer",
      failed: "Échoué",
      selected: "Sélectionné",
      success: "Succès",
      fileList: "Liste de Fichiers"
    },
    dialog: {
      move: {
        title: "Déplacer",
        label: "Choisissez un dossier",
        placeholder: "Choisissez un dossier",
        confirm: "Déplacer",
        cancel: "Annuler"
      },
      rename: {
        title: "Renommer",
        label: "Nom du fichier",
        confirm: "Renommer",
        cancel: "Annuler"
      },
      delete: {
        title: "Supprimer",
        file: "fichier",
        files: "fichiers",
        label:
          "Confirmer la suppression ? Cette action ne peut pas être annulée.",
        confirm: "Supprimer",
        cancel: "Annuler"
      },
      share: {
        title: "Partager",
        label:
          "Tout le monde avec le lien sécurisé suivant peut voir cette transcription et le fichier audio associé.",
        confirm: "Copier le lien",
        success: "Copie réussie"
      },
      export: {
        title: "Exporter",
        select: "Sélectionnez le format dont vous avez besoin",
        settings: "Paramètres",
        speaker: "Inclure le locuteur",
        timecodes: "Inclure les codes de temps",
        confirm: "Exporter",
        cancel: "Annuler",
        selectErr: "Veuillez sélectionner un ou plusieurs formats"
      }
    },
    search: {
      placeholder: "Rechercher"
    },
    recently: "Récemment",
    record: "Enregistrer",
    transcribe: "Transcrire",
    unclassified: "Dossiers non classés",
    buttons: {
      transcribe: "Transcrire les fichiers",
      url: "Transcrire les liens",
      record: "Enregistrer et transcrire",
      recording: "Enregistrement..."
    },
    delSuccess: "Supprimé avec succès",
    create: "Créer"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Enregistrer",
      pause: "Pause",
      resume: "Reprendre",
      stop: "Arrêter",
      endRecord: "Terminer l'enregistrement",
      delete: "Supprimer",
      transcribe: "Transcrire",
      permissionDenied:
        "Permission microphonique refusée ou appareil non existant",
      dialog: {
        delete: {
          title: "Avertissement",
          label: "Êtes-vous sûr de vouloir supprimer cette enregistrement ?",
          confirm: "Supprimer",
          cancel: "Annuler"
        },
        complete: {
          title: "Enregistrement terminé",
          label:
            "L'enregistrement a atteint 10 heures et s'est automatiquement arrêté. Veuillez transcrire.",
          confirm: "Compris"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrire un média en ligne",
        title: "Coller les liens",
        label:
          "Collez le lien média de la plateforme suivante mais pas limité à : YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Ajouter",
        cancel: "Annuler",
        // Veuillez entrer un lien valide
        errorTitle:
          "Le lien que vous avez entré est incorrect. Veuillez vérifier et réessayer.",
        linkName: "Lien"
      },
      file: {
        orTitle: "Transcrire un média en ligne",
        dialogTitle: "Transcrire les fichiers",
        tip1: "Cliquez pour téléverser",
        tip2: "ou glissez-déposez",
        or: "ou"
      },
      del: {
        title: "Avertissement",
        content:
          "Toutes les données de progression seront perdues. Confirmez-vous l'annulation de la transcription ?",
        cancel: "Confirmer l'annulation",
        confirm: "Continuer la transcription"
      },
      files: "Fichiers",
      resultDialogTitle: "Transcrire les fichiers",
      resultDialogTitle2: "Transcrire le fichier",
      cancel: "Annuler",
      confirm: "Transcrire",
      return: "Retour",
      addMore: "Ajouter plus",
      language: "Langue du média",
      failed: "Échoué",
      tooLarge: "Le fichier est trop grand.",
      linkUpload: "Téléchargement...",
      fileFormat: "Format de fichier non autorisé",
      localFiles: "Fichiers locaux",
      pasteLink: "Lien en ligne",
      uploadErr: "Erreur de téléchargement",
      hashErr: "Erreur de hachage",
      table: {
        status: "Statut",
        file: "Fichier",
        size: "Taille",
        noData: "Aucune donnée"
      },
      maxFileNum: "Le nombre de fichiers ne peut pas dépasser {num}.",
      speaker: "Identification de l'interlocuteur",
      speakerLabel:
        "Étiquetez chaque segment de la transcription avec la personne qui parle."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Éditer",
    translate: "Traduire",
    showSpeaker: "Afficher le locuteur",
    showTimestamp: "Afficher les horodatages",
    share: "Partager",
    shared: "partagé",
    export: "Exporter",
    speaker: "Locuteur_{ id }",
    unassignSpeaker: "Supprimer le locuteur",
    play: "Lire",
    save: "Enregistrer",
    undo: "Annuler",
    redo: "Refaire",
    confirm: "Confirmer",
    cancel: "Annuler",
    addNew: "Ajouter nouveau",
    createANewSpeaker: "Créer un nouveau locuteur",
    speakerName: "Nom du locuteur",
    addSpeaker: "Ajouter un locuteur",
    applyToAllMatchingSpeakers: "Appliquer à tous les locuteurs correspondants",
    cancelTranslation: "Annuler la traduction",
    showVideo: "Afficher la vidéo",
    hideVideo: "Masquer la vidéo",
    langChooseV1: {
      recently: "Récemment",
      popular: "Populaire",
      other: "Autre",
      searchLanguage: "Rechercher une langue",
      noMatch: "Aucune langue correspondante trouvée",
      English: "Anglais",
      "English(US)": "Anglais (États-Unis)",
      "English(UK)": "Anglais (Royaume-Uni)",
      Spanish: "Espagnol",
      Portuguese: "Portugais",
      French: "Français",
      Italian: "Italien",
      German: "Allemand",
      Dutch: "Néerlandais",
      Polish: "Polonais",
      Danish: "Danois",
      Japanese: "Japonais",
      Korean: "Coréen",
      Hungarian: "Hongrois",
      Czech: "Tchèque",
      Chinese: "Chinois",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Azerbaijani: "Azerbaïdjanais",
      Estonian: "Estonien",
      Belarusian: "Biélorusse",
      Bulgarian: "Bulgare",
      Icelandic: "Islandais",
      Bosnian: "Bosniaque",
      Persian: "Persan",
      Russian: "Russe",
      "Chinese(Traditional)": "Chinois (Traditionnel)",
      Finnish: "Finnois",
      Kazakh: "Kazakh",
      Galician: "Galicien",
      Catalan: "Catalan",
      "Chinese(Simplified)": "Chinois (Simplifié)",
      Kannada: "Kannada",
      Croatian: "Croate",
      Latvian: "Letton",
      Lithuanian: "Lituanien",
      Romanian: "Roumain",
      Marathi: "Marathi",
      Malay: "Malais",
      Macedonian: "Macédonien",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Népalais",
      Norwegian: "Norvégien",
      Swedish: "Suédois",
      Serbian: "Serbe",
      Slovak: "Slovaque",
      Slovenian: "Slovène",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamoul",
      Thai: "Thaï",
      Turkish: "Turc",
      Welsh: "Gallois",
      Urdu: "Ourdou",
      Ukrainian: "Ukrainien",
      Greek: "Grec",
      Armenian: "Arménien",
      Hindi: "Hindi",
      Indonesian: "Indonésien",
      Vietnamese: "Vietnamien",
      Albanian: "Albanais",
      Amharic: "Amharique",
      Assamese: "Assamais",
      Occitan: "Occitan",
      Bashkir: "Bachkir",
      Basque: "Basque",
      Breton: "Breton",
      Tibetan: "Tibétain",
      Faroese: "Féroïen",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Géorgien",
      Gujarati: "Gujarati",
      "Haitian Creole": "Créole haïtien",
      Hausa: "Haoussa",
      Latin: "Latin",
      Lao: "Laotien",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgeois",
      Malagasy: "Malgache",
      Maltese: "Maltais",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birman",
      Punjabi: "Pendjabi",
      Pashto: "Pachto",
      Sinhala: "Cingalais",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadjik",
      Tatar: "Tatar",
      Telugu: "Télougou",
      Turkmen: "Turkmène",
      Uzbek: "Ouzbek",
      Hawaiian: "Hawaïen",
      "Norwegian Nynorsk": "Norvégien Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Soundanais",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanais",
      Cantonese: "Cantonais",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Éwé",
      Aymara: "Aymara",
      Irish: "Irlandais",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossète",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinais",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Sepedi",
      bem: "Bemba",
      bik: "Bicolano",
      bal: "Baloutche",
      bho: "Bhojpuri",
      bua: "Bouriate",
      chm: "Mari des prairies",
      Chamorro: "Chamorro",
      Chechen: "Tchétchène",
      chk: "Chuuk",
      Chuvash: "Tchouvache",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tétoum",
      Divehi: "Maldivien",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele du Sud",
      dov: "Dombe",
      "bm-Nkoo": "Bambara (N'ko)",
      "French(Canada)": "Français (Canada)",
      Fijian: "Fidjien",
      fon: "Fon",
      "Western Frisian": "Frison occidental",
      fur: "Frioulan",
      Fulah: "Peul",
      Kongo: "Kikongo",
      Kalaallisut: "Groenlandais",
      gom: "Konkani Goanais",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrückisch",
      Kyrgyz: "Kirghiz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanouri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corse",
      "crh-Latn": "Tatar de Crimée (latin)",
      crh: "Tatar de Crimée (cyrillique)",
      Quechua: "Quechua",
      Kurdish: "Kurde (Kurmanji)",
      ckb: "Kurde (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalien",
      lij: "Ligure",
      Limburgish: "Limbourgeois",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romani",
      mad: "Madurais",
      Manx: "Mannois",
      mwr: "Marwari",
      "ms-Arab": "Malais (Jawi)",
      Marshallese: "Marshallais",
      mam: "Mam",
      mai: "Maïthili",
      mfe: "Créole mauricien",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl de l'Est Huasteca",
      "Southern Sotho": "Sotho du Sud",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendjabi (Shahmukhi)",
      "pt-PT": "Portugais (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasaï",
      Akan: "Akan",
      zap: "Zapotèque",
      "Northern Sami": "Sami du Nord",
      Samoan: "Samoan",
      kri: "Krio",
      crs: "Créole seychellois",
      Sango: "Sango",
      "sat-Latn": "Santali (latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Espéranto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélique écossais",
      sus: "Soussou",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latin)",
      Tahitian: "Tahitien",
      Tonga: "Tongan",
      Tigrinya: "Tigrigna",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Touva",
      war: "Waray",
      mak: "Makassar",
      vec: "Vénitien",
      Uyghur: "Ouïghour",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Oudmourte",
      szl: "Silésien",
      scn: "Sicilien",
      hil: "Hiligaynon",
      jam: "Créole jamaïcain",
      sah: "Iakoute",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latin)",
      Inuktitut: "Inuktitut (syllabaire)",
      yua: "Maya yucatèque",
      Dzongkha: "Dzongkha",
      Zulu: "Zoulou"
    },
    notFund: "Non trouvé",
    notFundDesc: "Nous n'avons pas trouvé ce que vous cherchiez.",
    shareTips:
      "Tout le monde avec le lien sécurisé suivant peut voir cette transcription et le fichier audio associé.",
    copyLink: "Copier le lien",
    copySuccessful: "Copie réussie",
    copyFail: "Copie échouée",
    closeTrans: "Annuler la traduction",
    upgradeBtn: "Mettre à niveau maintenant",
    upgradeTip30: "Ce fichier dépasse 30 minutes.",
    upgradeTipMore:
      "Passez à Scribify Pro pour transcrire des fichiers jusqu'à 10 heures",
    errorTips: "Quelque chose s'est mal passé.",
    copiedLink: "Lien copié",
    copyGotIt: "savait"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    LoginBtn: "Connectez-vous avec Email",
    LoginGoogle: "Connectez-vous avec Google",
    SignupBtn: "Inscrivez-vous avec Email",
    SignupGoogle: "Inscrivez-vous avec Google",
    SignupDes:
      "Inscrivez-vous aujourd'hui pour découvrir la magie — gratuitement.",
    SignupTitle: "Transcription précise et illimitée",
    signup: "S'inscrire", // 注册
    sign_up: "S'inscrire", // 注册
    loginByGoogle: "Continuer avec Google", // 使用Google登录
    emailAddress: "Veuillez entrer votre adresse email", // 请输入您的邮箱
    createAccount: "Créer un nouveau compte", // 创建账户
    accountExists: "Vous avez déjà un compte ? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "En continuant, vous acceptez nos {terms} et {policy}.",
      terms: "Conditions",
      policy: "Politique de confidentialité"
    },
    setPassword: "Définir un mot de passe", // 设置密码
    code: "Code de vérification", // 验证码
    resend: "Renvoyer", // 重新发送
    enterPassword: "Veuillez entrer votre mot de passe.", // 请输入密码
    passwordLeval: "Niveau du mot de passe", // 密码强度
    Weak: "Faible", // 弱 中 强
    Medium: "Moyen", // 弱 中 强
    Strong: "Fort", // 弱 中 强
    confirmPassword: "Confirmez votre mot de passe", // 确认密码
    invalidEmail: "Adresse email invalide", // 无效的邮箱地址
    logInDirectly:
      "Ce compte existe déjà. Veuillez vous connecter directement.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Code de vérification erroné. Réessayez.", // 验证码错误，请重试
    atLeastSix: "Le mot de passe doit comporter au moins 6 caractères.", // 密码长度至少6位
    passwordNotMatch:
      "Les mots de passe ne correspondent pas. Veuillez réessayer.", // 密码不匹配，请重试
    login: "Connexion", // 登录
    log_in: "Connexion", // 登录
    log_In: "Connexion", // 登录
    password: "Mot de passe", // 密码
    forgotPassword: "Mot de passe oublié ?", // 忘记密码？
    noAccount: "Vous n'avez pas de compte ?", // 没有账户？注册
    accountNotExists: "Ce compte n'existe pas.", // 账户不存在
    passwordError: "Erreur de mot de passe", // 密码错误
    sendCode: "Envoyer le code de vérification", // 发送验证码
    resetPassword: "Réinitialiser le mot de passe", // 重置密码
    resetYourPassword: "Réinitialiser votre mot de passe", // 重置你的密码
    newOldCantSame:
      "Le nouveau mot de passe doit être différent de l'ancien mot de passe.", // 新密码与旧密码不能相同
    passwordResetOk: "Mot de passe réinitialisé avec succès !", // 密码重置成功！
    signupToSaveProgress:
      "Finalisez votre inscription pour sauvegarder votre progression.",
    tip: "Astuce",
    tipContentEmail:
      "Nous venons d'envoyer votre mot de passe de connexion à votre adresse e-mail.",
    tipContentPassword:
      "Veuillez vérifier votre boîte de réception et vous connecter avec votre e-mail et mot de passe.",
    codeToEmail:
      "Nous venons d'envoyer un code de vérification à votre adresse e-mail. Veuillez vérifier votre boîte de réception et coller le code de vérification ci-dessus."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnement",
    freeversion: "Gratuit",
    transcribeTimesDay: "3 transcriptions par jour",
    uploadMinutes: "Téléchargements de 30 minutes",
    lowerPriority: "Priorité inférieure",
    currentPlan: "Forfait actuel",
    professionalEdition: "version professionnelle",
    unlimitedTranscription: "Transcription illimitée",
    unlimitedNumberOfTimes: "Fréquence et durée de transcription illimitées.",
    filesUploadedAtOnce:
      "Chaque fichier peut durer jusqu'à 10 heures / 5 Go. Téléchargez 50 fichiers à la fois.",
    highestPriority: "priorité maximale",
    weWillGiveTheHighest:
      "Nous transcrirons toujours vos fichiers dès que possible avec la priorité la plus élevée.",
    theFirstMonth: "Le premier mois",
    subscribeTo: "s'abonner à",
    basicVersionFree: "Version de base (gratuite)",
    return: "Retour",
    annualize: "annuel",
    monthly: "mensuel",
    everyYear: "chaque année",
    saved: "économisé",
    byTheMonth: "par mois",
    firstMonth: "premier mois",
    afterwardsEveryMonth: "Ensuite, chaque mois",
    manageSubscription: "Gérer l'abonnement",
    professionalYearbook: "Abonnement annuel professionnel",
    professionalMonthly: "Abonnement mensuel professionnel",
    subscriptionWillCancelledOn: "Votre abonnement sera résilié le",
    displayLanguage: "Langue d'affichage",
    update: "Mettre à niveau maintenant",
    basicversion: "Version de base (Gratuite)",
    daily: "{start} sur {end} transcriptions quotidiennes utilisées",
    upgradetoPro: "Passer à la version Pro",
    accountSetting: "Paramètres du compte",
    logOut: "Se déconnecter",
    account: "Compte",
    email: "Email",
    id: "ID",
    password: "Mot de passe",
    resetPassword: "Réinitialiser le mot de passe",
    logIn: "Se connecter",
    tryForFree: "Essai gratuit",
    notFund: "Non trouvé",
    couldntFind: "Nous n'avons pas trouvé ce que vous cherchiez.",
    proAnnual: "Pro Annuel",
    proMonthly: "Pro Mensuel",
    perMonth: "par mois",
    afterwards: "ensuite",
    accuracy: "précision de transcription",
    supported: "langues prises en charge",
    identification: "Identification de l'orateur",
    transcriptSranslation: "Traduction de transcription",
    perYear: "par an",
    getProPlan: "Obtenir le forfait Pro",
    changeToAnnual: "Passer à l'annuel",
    automaticRenewalon: "Renouvellement automatique le",
    eachMonth: "Renouvellement automatique le {time} de chaque mois.",
    automaticRenewal:
      "Échec du renouvellement automatique, veuillez vérifier votre moyen de paiement.",
    eachYear: "Renouvellement automatique le {time} chaque année.",
    returnAccountSetting: "Retour",
    needsToWaitLonger:
      "Attendez plus longtemps avant que vos fichiers ne soient transcrits.",
    freeThreeTimesDay: "Transcrivez 3 fichiers gratuitement chaque jour.",
    oneFileUploaded:
      "Chaque fichier peut durer jusqu'à 30 minutes. Téléversez 1 fichier à la fois.",
    uploadWithinHours: "Téléchargements de 10 heures",
      yourSubscription: "Votre abonnement sera annulé le {time}."
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinois(Simplifié)",
      "Chinese(Traditional)": "Chinois(Traditionnel)",
      Japanese: "Japonais",
      Danish: "Danois",
      German: "Allemand",
      English: "Anglais",
      Spanish: "Espagnol",
      French: "Français",
      Italian: "Italien",
      Hungarian: "Hongrois",
      Dutch: "Néerlandais",
      Norwegian: "Norvégien",
      Polish: "Polonais",
      Portuguese: "Portugais",
      Finnish: "Finnois",
      Swedish: "Suédois",
      Turkish: "Turc",
      Greek: "Grec",
      Russian: "Russe",
      Ukrainian: "Ukrainien",
      Hebrew: "Hébreu",
      Arabic: "Arabe",
      Korean: "Coréen"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Commencer l'essai gratuit~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Rejoignez la liste d'attente, obtenez les dernières nouvelles de NuxtPro et les remises !",
      placeholder: "Entrez votre email",
      button: "Rejoindre la liste d'attente",
      joinCountMessage:
        "🔥 Utilisateur précoce #{count} vient de rejoindre la liste d'attente !"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "c'est une démonstration",
      corpInfo: "corp info"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erreur de téléchargement vidéo"
      },
      mse: {
        code: 2,
        msg: "erreur d'ajout de flux"
      },
      parse: {
        code: 3,
        msg: "erreur de parsing"
      },
      format: {
        code: 4,
        msg: "format incorrect"
      },
      decoder: {
        code: 5,
        msg: "erreur de décodage"
      },
      runtime: {
        code: 6,
        msg: "erreurs grammaticales"
      },
      timeout: {
        code: 7,
        msg: "dépassement de délai"
      },
      other: {
        code: 8,
        msg: "autres erreurs"
      }
    },
    HAVE_NOTHING:
      "Il n'y a pas d'informations sur la disponibilité audio/vidéo",
    HAVE_METADATA: "Les métadonnées audio/vidéo sont prêtes ",
    HAVE_CURRENT_DATA:
      "Les données sur la position de lecture actuelle sont disponibles, mais il n'y a pas assez de données pour lire la prochaine image/milliseconde",
    HAVE_FUTURE_DATA:
      "Les données actuelles et au moins une image de données sont disponibles",
    HAVE_ENOUGH_DATA:
      "Les données disponibles sont suffisantes pour démarrer la lecture",
    NETWORK_EMPTY: "Audio/vidéo n'a pas été initialisé",
    NETWORK_IDLE:
      "Audio/vidéo est actif et a été sélectionné pour les ressources, mais aucun réseau n'est utilisé",
    NETWORK_LOADING: "Le navigateur télécharge les données",
    NETWORK_NO_SOURCE: "Aucune source audio/vidéo n'a été trouvée",
    MEDIA_ERR_ABORTED:
      "Le processus de récupération est annulé par l'utilisateur",
    MEDIA_ERR_NETWORK: "Une erreur est survenue lors du téléchargement",
    MEDIA_ERR_DECODE: "Une erreur est survenue lors du décodage",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/vidéo n'est pas supporté",
    REPLAY: "Relancer",
    ERROR: "Réseau hors ligne",
    PLAY_TIPS: "Lire",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Lire la suite",
    DOWNLOAD_TIPS: "Télécharger",
    ROTATE_TIPS: "Tourner",
    RELOAD_TIPS: "Recharger",
    FULLSCREEN_TIPS: "Aller en plein écran",
    EXITFULLSCREEN_TIPS: "Quitter le plein écran",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Quitter cssfullscreen",
    TEXTTRACK: "Sous-titre",
    PIP: "PIP",
    SCREENSHOT: "Capture d'écran",
    LIVE: "LIVE",
    OFF: "Désactivé",
    OPEN: "Ouvert",
    MINI_DRAG: "Cliquez et maintenez pour glisser",
    MINISCREEN: "Mini-écran",
    REFRESH_TIPS: "Veuillez réessayer",
    REFRESH: "Actualiser",
    FORWARD: "en avant",
    LIVE_TIP: "LIVE",
    TM_SUBTITLE_SHOW_TIPS: "Activer les sous-titres",
    TM_SUBTITLE_HIDE_TIPS: "Désactiver les sous-titres",
    TM_MINIMIZE_TIPS: "Masquer la vidéo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 25 août 2025",
    policyDescription:
      "Cette politique décrit comment Scribify (ci-après dénommé « Scribify », « notre », « nous ») collecte, utilise et divulgue vos informations personnelles lorsque vous utilisez nos services, sites Web",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "et des logiciels (collectivement, les « Services »).",
    policyAgreement:
      "Veuillez lire attentivement cette Politique de confidentialité et vous assurer de bien la comprendre. En utilisant l'un de nos Services, vous acceptez cette Politique de confidentialité. Si vous n'acceptez pas que nous utilisions vos données personnelles conformément à cette Politique, vous devez cesser immédiatement d'utiliser nos Services.",
    policyOverview:
      "Dans cette politique, nous expliquons : quelles données nous collectons et pourquoi ; comment vos données sont traitées ; et vos droits concernant vos données. Nous ne vendons pas vos données.",
    scopeTitle: "1. Portée de la présente politique de confidentialité",
    whatWeCollectTitle: "2. Ce que nous collectons et pourquoi",
    accessShareTitle:
      "3. Lorsque nous accédons à vos informations ou les partageons",
    secureDataTitle: "4. Comment nous sécurisons vos données",
    deleteContentTitle:
      "5. Que se passe-t-il lorsque vous supprimez votre contenu",
    locationTitle: "6. Localisation du site et des données",
    childrenPrivacyTitle: "7. Vie privée des enfants",
    updatesTitle: "8. Mises à jour de cette politique de confidentialité",
    contactUsTitle: "9. Contactez-nous",
    identityAccessTitle: "2.1 Identité et accès",
    billingInfoTitle: "2.2 Informations de facturation",
    productInteractionsTitle: "2.3 Interactions avec les produits",
    websiteInteractionsTitle: "2.4 Interactions sur le site Web",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondance volontaire",
    scopeContent:
      "La présente Politique de confidentialité s'applique uniquement à la collecte et au traitement des informations concernant les utilisateurs des Services. Elle ne s'applique pas aux services, sites web ou logiciels exploités par des tiers liés à nous (que nous fournissions ces liens ou que d'autres utilisateurs les partagent), ni aux contenus, données, applications ou documents de tiers. Nous vous conseillons de consulter les politiques de confidentialité de tout site web ou logiciel tiers avant de leur fournir des informations.",
    collectPrinciple:
      "Notre principe directeur est de ne collecter que ce dont nous avons besoin. Voici ce que cela signifie concrètement :",
    identityAccessContent:
      "Lorsque vous vous inscrivez à l'un de nos produits, nous vous demandons des informations d'identification telles que votre nom et votre adresse e-mail. Ces informations nous permettent de bénéficier des fonctionnalités essentielles du produit et de vous envoyer des mises à jour et d'autres informations essentielles.",
    billingInfoContent:
      "Si vous souscrivez à un produit payant, vous serez invité à fournir vos informations de paiement et votre adresse de facturation. Ces informations sont transmises directement à notre processeur de paiement et ne transitent pas par nos serveurs.",
    productInteractionsContent:
      "Nous stockons sur nos serveurs le contenu que vous téléchargez, recevez ou conservez dans vos comptes produits. Sauf si vous supprimez ce contenu, nous pouvons le conserver tant que votre compte est actif.",
    websiteInteractionsContent:
      "Nous collectons des informations sur votre navigation à des fins d'analyse et de statistiques, telles que les tests de taux de conversion et l'expérimentation de nouveaux produits. Ces informations incluent, par exemple, les versions de votre navigateur et de votre système d'exploitation, votre adresse IP, les pages web que vous avez consultées et leur temps de chargement, ainsi que le site web qui vous a redirigé vers nous. Si vous possédez un compte et êtes connecté, ces données d'analyse web sont liées à votre adresse IP et à votre compte utilisateur jusqu'à la désactivation de votre compte.",
    cookiesContent1:
      "Nous utilisons également des cookies persistants propriétaires et certains cookies tiers pour stocker certaines préférences, faciliter l'utilisation de nos applications et effectuer des tests A/B ainsi que prendre en charge certaines analyses.",
    cookiesContent2:
      "Un cookie est un fichier texte stocké par votre navigateur. Il peut mémoriser vos informations de connexion et vos préférences de navigation. Il peut également collecter des informations telles que votre type de navigateur, votre système d'exploitation, les pages web consultées, la durée de votre visite, le contenu consulté et d'autres données relatives à votre parcours de navigation. Vous pouvez configurer les paramètres de conservation des cookies et accepter ou bloquer des cookies individuels dans les paramètres de votre navigateur. Cependant, si vous désactivez les cookies, nos applications et d'autres aspects de nos services risquent de ne pas fonctionner correctement.",
    voluntaryCorrespondenceContent:
      "Lorsque vous nous envoyez un e-mail avec une question ou pour demander de l'aide, nous conservons cette correspondance, y compris votre adresse e-mail, afin que nous ayons un historique de la correspondance passée à laquelle nous référer si vous nous contactez à l'avenir.",
    accessShareContent1:
      "Pour vous fournir les produits ou services que vous avez demandés. Nous faisons appel à des sous-traitants tiers pour gérer nos applications et vous fournir les services. Il s'agit notamment de fournisseurs de services cloud et d'analyse.",
    accessShareContent2:
      "Pour enquêter sur un abus, le prévenir ou prendre des mesures. L'accès au compte d'un client lors d'une enquête sur un abus potentiel est une mesure de dernier recours. Nous souhaitons protéger la confidentialité et la sécurité de nos clients et des personnes qui nous signalent des problèmes, et nous mettons tout en œuvre pour équilibrer ces responsabilités tout au long du processus. Si nous découvrons que vous utilisez nos produits à des fins restreintes, nous prendrons les mesures nécessaires, y compris en informant les autorités compétentes si nécessaire.",
    accessShareContent3: "Lorsque la loi applicable l’exige.",
    userDataRequests:
      "- Demandes de données utilisateur. Notre politique est de ne pas répondre aux demandes gouvernementales de données utilisateur, sauf obligation légale ou, dans certaines circonstances, en cas de demande urgente. Toutefois, si les autorités policières américaines disposent d'un mandat, d'une assignation pénale ou d'une décision de justice nous obligeant à partager des données, nous devons nous y conformer. De même, nous ne répondrons aux demandes émanant d'autorités gouvernementales extérieures aux États-Unis que si le gouvernement américain nous y contraint, conformément aux procédures décrites dans un traité ou un accord d'entraide judiciaire. Nous avons pour politique d'avertir les utilisateurs concernés avant de partager des données, sauf interdiction légale et sauf en cas d'urgence.",
    preservationRequests:
      "- Demandes de conservation. De même, notre politique est de répondre aux demandes de conservation de données uniquement si la loi américaine sur les communications stockées (18 USC Section 2703(f)) l'exige, ou si une assignation à comparaître en matière civile est dûment signifiée. Nous ne partageons pas les données conservées, sauf si la loi l'exige ou si nous y sommes contraints par une décision de justice que nous choisissons de ne pas contester. De plus, sauf si nous recevons un mandat, une ordonnance ou une assignation en bonne et due forme avant l'expiration de la période de conservation requise, nous détruirons toute copie conservée des données clients à la fin de cette période.",
    taxAudit:
      "- En cas de contrôle fiscal, nous pourrions être amenés à communiquer des informations de facturation. Dans ce cas, nous ne communiquerons que le strict nécessaire, comme les adresses de facturation et les informations d'exonération fiscale.",
    secureDataContent1: "Toutes les données sont cryptées via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "lorsqu'elles sont transmises depuis nos serveurs vers votre navigateur.",
    deleteContentContent:
      "Si vous supprimez du contenu, il deviendra immédiatement inaccessible.",
    locationContent:
      "Nos produits et autres sites web sont exploités aux États-Unis. Si vous résidez dans l'Union européenne, au Royaume-Uni ou ailleurs qu'aux États-Unis, sachez que toutes les informations que vous nous fournissez seront transférées et stockées aux États-Unis. En utilisant nos sites web ou nos Services et/ou en nous fournissant vos informations personnelles, vous consentez à ce transfert.",
    childrenPrivacyContent:
      "Les Services ne sont pas destinés aux enfants et nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans. Si vous avez moins de 13 ans, veuillez ne pas soumettre d'informations personnelles via les Services. Si vous pensez qu'un enfant nous a fourni des informations personnelles en violation de la présente Politique, veuillez nous contacter comme indiqué ci-dessous.",
    updatesContent:
      "Nous pouvons mettre à jour cette politique si nécessaire afin de nous conformer à la réglementation en vigueur et de refléter toute nouvelle pratique. Chaque fois que nous apportons une modification importante à nos politiques, nous actualisons la date en haut de cette page.",
    contactUsContent1:
      "Si vous avez des questions, des commentaires ou des plaintes concernant notre politique de confidentialité, veuillez",
    contactUs: "Contactez-nous",
    contactUsContent2:
      "et nous nous efforcerons de traiter votre réclamation dans les plus brefs délais."
  },
  termsOfService: {
    termsOfServiceTitle: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 21 septembre 2022",
    thankYouMessage: "Merci d'utiliser nos produits !",
    companyReference:
      "Lorsque nous disons « Société », « nous », « notre » ou « nos » dans ce document, nous faisons référence à Scribify.",
    servicesDefinition:
      "Lorsque nous disons « Services », nous entendons tout produit créé et maintenu par Scribify, qu'il soit fourni dans un navigateur Web, une application de bureau, une application mobile ou un autre format.",
    termsUpdateNotice:
      "Nous sommes susceptibles de mettre à jour ces Conditions d'utilisation ultérieurement. Ces modifications visent généralement à clarifier certaines de ces conditions en créant un lien vers une politique connexe plus complète. Chaque fois que nous apportons une modification importante à nos politiques, nous actualiserons la date en haut de cette page et prendrons toutes les mesures nécessaires pour en informer les titulaires de compte.",
    acceptanceOfAgreementTitle: "1. Acceptation de l'accord",
    scribifyServicesTitle: "2. Services de Scribify",
    accountTermsTitle: "3. Conditions du compte",
    paymentRefundsTitle:
      "4. Paiement, remboursements et modifications de forfait",
    cancellationTerminationTitle: "5. Annulation et résiliation",
    submissionsTitle: "6. Soumissions",
    uptimeSecurityTitle: "7. Disponibilité et sécurité",
    siteManagementTitle: "8. Gestion du site",
    copyrightContentTitle: "9. Droits d'auteur et propriété du contenu",
    prohibitedActivitiesTitle: "10. Activités interdites",
    featuresBugsTitle: "11. Fonctionnalités et bugs",
    correctionsTitle: "12. CORRECTIONS",
    userDataTitle: "13. Données utilisateur",
    privacyPolicyTitle: "14. Politique de confidentialité",
    liabilityTitle: "15. Responsabilité",
    miscellaneousTitle: "16. Divers",
    contactUsTitle: "17. Contactez-nous",
    acceptanceContent1:
      "En utilisant nos Services, vous acceptez le présent Contrat, qui constitue un contrat contraignant entre vous et Scribify. Vous déclarez être légalement capable d'accepter les présentes Conditions et affirmez avoir l'âge légal pour conclure un contrat. L'acceptation par Scribify est expressément conditionnée à votre acceptation de l'ensemble des termes et conditions du présent Contrat.",
    acceptanceContent2:
      "Les Services ne sont pas destinés et ne doivent pas être utilisés par des personnes de moins de 18 ans. En utilisant les Services, vous déclarez et garantissez que vous remplissez les conditions d'éligibilité susmentionnées.",
    acceptanceContent3:
      "Les termes « vous », « votre », « vous-même » incluent également vos employés, agents, représentants commerciaux et toute autre personne à qui vous donnez accès aux Services via votre Compte (tel que défini ci-dessous). Vous êtes responsable de vous assurer que toutes les personnes accédant aux Services via votre compte connaissent les présentes Conditions et les respectent.",
    acceptanceContent4:
      "Scribify se réserve le droit de réviser et de mettre à jour les présentes Conditions de temps à autre, à sa seule discrétion. Toutes les modifications entrent en vigueur dès leur publication. En continuant à utiliser les Services après la publication des Conditions révisées, vous acceptez les modifications. Vous êtes invité à consulter régulièrement cette page afin de prendre connaissance de ces modifications, car elles vous engagent.",
    servicesContent1:
      "Nos services permettent aux utilisateurs de transformer des conversations vocales en texte transcrit qui peut être recherché, traduit et partagé avec d’autres.",
    servicesContent2:
      "Vous pouvez choisir d'utiliser la version gratuite des Services (« Services gratuits ») ou la version payante des Services par abonnement pour laquelle vous devrez peut-être payer des frais (les « Services payants »).",
    servicesContent3:
      "Nous mettrons les Services à votre disposition. Il vous incombe de prendre toutes les dispositions nécessaires pour y accéder.",
    accountTerms1:
      "- Vous êtes responsable de la sécurité de votre compte. La Société ne peut être tenue responsable de toute perte ou dommage résultant du non-respect de cette obligation de sécurité.",
    accountTerms2:
      "- Vous ne pouvez pas utiliser les Services à des fins illégales, contraires à l'éthique ou immorales.",
    accountTerms3:
      "- Vous êtes responsable de tout le contenu publié et de toute activité effectuée sur votre compte. Cela inclut le contenu publié par d'autres personnes qui : (a) ont accès à vos identifiants ; ou (b) possèdent leurs propres identifiants de connexion sur votre compte.",
    accountTerms4:
      "- Vous devez être un humain. Les comptes créés par des robots ou d'autres méthodes automatisées ne sont pas autorisés.",
    paymentContent1:
      "Pour les services payants proposant un essai gratuit, nous vous expliquons la durée de l'essai lors de votre inscription. Après la période d'essai, vous devrez payer à l'avance pour continuer à utiliser le service. Sans paiement, ces services prendront fin.",
    paymentContent2:
      "- Si vous passez d'un forfait gratuit à un forfait payant, nous débiterons votre carte immédiatement et votre cycle de facturation commence le jour de la mise à niveau.",
    paymentContent3:
      "- Tous les frais s'entendent hors taxes, prélèvements ou droits imposés par les autorités fiscales. Le cas échéant, nous percevons ces taxes pour le compte des autorités fiscales et les reversons à ces dernières. Dans le cas contraire, vous êtes responsable du paiement de ces taxes, prélèvements ou droits.",
    paymentContent4:
      "- Aucun achat n'est remboursable. Vous pouvez annuler tout service payant à tout moment en vous connectant à votre compte. Pour les abonnements payants, l'annulation prendra effet à la fin de la période d'abonnement en cours, sauf mention contraire.",
    cancellationContent1:
      "- Si vous annulez le Service avant la fin de la période payée, votre annulation prendra effet immédiatement et aucun nouveau prélèvement ne vous sera facturé. Nous ne calculons pas automatiquement au prorata le temps non utilisé lors du dernier cycle de facturation.",
    cancellationContent2:
      "- Nous nous réservons le droit de suspendre ou de résilier votre compte et de refuser toute utilisation actuelle ou future de nos Services, pour quelque raison que ce soit et à tout moment. La suspension signifie que vous ne pourrez plus accéder à votre compte ni à son contenu. La résiliation entraînera également la suppression de votre compte ou de votre accès à celui-ci, ainsi que la confiscation et l'abandon de tout son contenu. Nous nous réservons également le droit de refuser l'utilisation des Services à quiconque, pour quelque raison que ce soit et à tout moment. Cette clause s'explique par le fait que, statistiquement parlant, parmi les centaines de milliers de comptes présents sur nos Services, au moins un commet une infraction.",
    cancellationContent3:
      "- Les abus verbaux, physiques, écrits ou autres (y compris les menaces d'abus ou de représailles) envers un employé ou un dirigeant de la Société peuvent entraîner la résiliation immédiate du compte.",
    submissionsContent:
      "Vous reconnaissez et acceptez que les questions, commentaires, suggestions, idées, retours ou autres informations concernant le Site (les « Soumissions ») que vous nous fournissez ne sont pas confidentiels et deviennent notre propriété exclusive. Nous détenons les droits exclusifs, y compris tous les droits de propriété intellectuelle, et sommes autorisés à utiliser et diffuser sans restriction ces Soumissions à toute fin légale, commerciale ou autre, sans reconnaissance ni compensation. Vous renoncez par les présentes à tous droits moraux sur ces Soumissions et garantissez par les présentes que ces Soumissions sont originales et que vous avez le droit de les soumettre. Vous acceptez qu'aucun recours ne soit possible contre nous pour toute violation ou détournement, allégué ou réel, de tout droit de propriété sur vos Soumissions.",
    uptimeContent1:
      "- Vous utilisez les Services à vos seuls risques. Nous les fournissons « en l'état » et « selon disponibilité ». Nous ne proposons pas de contrats de service pour la plupart de nos Services, mais nous accordons une grande importance à la disponibilité de nos applications.",
    uptimeContent2:
      "- Nous nous réservons le droit de désactiver temporairement votre compte si votre utilisation dépasse largement celle des autres clients des Services. Bien entendu, nous vous contacterons avant toute action, sauf dans les rares cas où le niveau d'utilisation pourrait nuire aux performances du Service pour les autres clients.",
    uptimeContent3:
      "Nous prenons de nombreuses mesures pour protéger et sécuriser vos données grâce à des sauvegardes, des redondances et le chiffrement. Nous appliquons le chiffrement pour la transmission de données sur l'Internet public.",
    uptimeContent4:
      "- Nous utilisons des fournisseurs tiers et des partenaires d'hébergement pour fournir le matériel, les logiciels, le réseau, le stockage et la technologie associée nécessaires à l'exécution des Services.",
    siteManagementContent:
      "Nous nous réservons le droit, mais non l'obligation, de : (1) surveiller le Site pour détecter toute violation des présentes Conditions d'utilisation ; (2) prendre les mesures juridiques appropriées contre quiconque, à notre seule discrétion, viole la loi ou les présentes Conditions d'utilisation, y compris, sans limitation, signaler cet utilisateur aux autorités chargées de l'application de la loi ; (3) à notre seule discrétion et sans limitation, refuser, restreindre l'accès, limiter la disponibilité ou désactiver (dans la mesure où cela est technologiquement possible) l'une de vos Contributions ou toute partie de celles-ci ; (4) à notre seule discrétion et sans limitation, préavis ou responsabilité, de supprimer du Site ou de désactiver de toute autre manière tous les fichiers et contenus qui sont de taille excessive ou qui sont de quelque manière que ce soit encombrants pour nos systèmes ; et (5) gérer le Site d'une manière conçue pour protéger nos droits et notre propriété et pour faciliter le bon fonctionnement du Site.",
    copyrightContent1:
      "- Tout le contenu publié sur les Services doit être conforme à la loi américaine sur le droit d'auteur.",
    copyrightContent2:
      "Nous ne revendiquons aucun droit de propriété intellectuelle sur le contenu que vous fournissez aux Services. Tous les contenus téléchargés restent votre propriété.",
    copyrightContent3:
      "- Nous ne présélectionnons pas le contenu, mais nous nous réservons le droit (mais pas l'obligation) à notre seule discrétion de refuser ou de supprimer tout contenu disponible via le Service.",
    copyrightContent4:
      "Les noms, l'apparence et la convivialité des Services sont protégés par le droit d'auteur © de la Société. Tous droits réservés. Vous ne pouvez pas dupliquer, copier ou réutiliser une quelconque partie des éléments HTML, CSS, JavaScript ou visuels sans l'autorisation écrite expresse de la Société. Vous devez demander l'autorisation d'utiliser le logo de la Société ou tout logo de Service à des fins promotionnelles. Veuillez",
    emailUs: "envoyez-nous un e-mail",
    copyrightContent5:
      "Demandes d'utilisation de logos. Nous nous réservons le droit de révoquer cette autorisation en cas de violation des présentes Conditions d'utilisation.",
    copyrightContent6:
      "- Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie des Services, l'utilisation des Services ou l'accès aux Services sans l'autorisation écrite expresse de la Société.",
    copyrightContent7:
      "- Vous ne devez pas modifier un autre site Web de manière à laisser entendre à tort qu'il est associé aux Services ou à la Société.",
    copyrightContent8:
      "Nous respectons les droits de propriété intellectuelle d'autrui. Si vous pensez qu'un contenu disponible sur ou via le Site porte atteinte à un droit d'auteur que vous détenez ou contrôlez, veuillez immédiatement nous le signaler.",
    contactUs: "Contactez-nous",
    copyrightContent9:
      "Une copie de votre notification sera envoyée à la personne ayant publié ou stocké le contenu visé par la notification. Veuillez noter que, conformément à la loi applicable, vous pouvez être tenu responsable de dommages et intérêts si vous faites de fausses déclarations dans une notification. Par conséquent, si vous n'êtes pas certain que le contenu figurant sur le site ou auquel il renvoie porte atteinte à vos droits d'auteur, nous vous conseillons de contacter au préalable un avocat.",
    prohibitedActivitiesIntro:
      "Vous ne pouvez accéder au Site ni l'utiliser à d'autres fins que celles pour lesquelles nous le mettons à disposition. Le Site ne peut être utilisé dans le cadre d'activités commerciales, sauf celles expressément approuvées par nous.",
    prohibitedActivitiesUserAgreement:
      "En tant qu'utilisateur du Site, vous acceptez de ne pas :",
    prohibitedActivity1:
      "- Récupérer systématiquement des données ou d'autres contenus du Site pour créer ou compiler, directement ou indirectement, une collection, une compilation, une base de données ou un répertoire sans notre autorisation écrite.",
    prohibitedActivity2:
      "- Nous tromper, nous escroquer ou nous induire en erreur, ainsi que d'autres utilisateurs, en particulier dans toute tentative d'obtenir des informations de compte sensibles telles que les mots de passe des utilisateurs.",
    prohibitedActivity3:
      "- Contourner, désactiver ou interférer de toute autre manière avec les fonctionnalités liées à la sécurité du Site, y compris les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de tout Contenu ou imposent des limitations à l'utilisation du Site et/ou du Contenu qu'il contient.",
    prohibitedActivity4:
      "- Dénigrer, ternir ou nuire de toute autre manière, à notre avis, à nous-mêmes et/ou au Site.",
    prohibitedActivity5:
      "- Utiliser toute information obtenue à partir du Site afin de harceler, d'abuser ou de nuire à une autre personne.",
    prohibitedActivity6:
      "- Faire un usage abusif de nos services d’assistance ou soumettre de faux rapports d’abus ou de mauvaise conduite.",
    prohibitedActivity7:
      "- Utiliser le Site d’une manière incompatible avec les lois ou réglementations applicables.",
    prohibitedActivity8:
      "- Participer à un cadrage ou à un lien non autorisé vers le Site.",
    prohibitedActivity9:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) des virus, des chevaux de Troie ou d'autres éléments, y compris l'utilisation excessive de majuscules et le spam (publication continue de texte répétitif), qui interfère avec l'utilisation et la jouissance ininterrompues du Site par une partie ou qui modifie, altère, perturbe, altère ou interfère avec l'utilisation, les fonctionnalités, les fonctions, le fonctionnement ou la maintenance du Site.",
    prohibitedActivity10:
      "- Participer à toute utilisation automatisée du système, comme l'utilisation de scripts pour envoyer des commentaires ou des messages, ou l'utilisation d'outils d'exploration de données, de robots ou d'outils similaires de collecte et d'extraction de données.",
    prohibitedActivity11:
      "- Supprimez les avis de droits d'auteur ou autres droits de propriété de tout contenu.",
    prohibitedActivity12:
      "- Tenter d'usurper l'identité d'un autre utilisateur ou d'une autre personne ou d'utiliser le nom d'utilisateur d'un autre utilisateur.",
    prohibitedActivity13:
      "- Télécharger ou transmettre (ou tenter de télécharger ou de transmettre) tout matériel qui agit comme un mécanisme passif ou actif de collecte ou de transmission d'informations, y compris, sans limitation, les formats d'échange de graphiques clairs (« gifs »), les pixels 1 × 1, les bogues Web, les cookies ou autres dispositifs similaires (parfois appelés « logiciels espions » ou « mécanismes de collecte passive » ou « pcms »).",
    prohibitedActivity14:
      "- Interférer avec, perturber ou créer une charge excessive sur le Site ou les réseaux ou services connectés au Site.",
    prohibitedActivity15:
      "- Harceler, ennuyer, intimider ou menacer l'un de nos employés ou agents engagés dans la fourniture de toute partie du Site.",
    prohibitedActivity16:
      "- Tenter de contourner toute mesure du Site conçue pour empêcher ou restreindre l'accès au Site, ou à toute partie du Site.",
    prohibitedActivity17:
      "- Copier ou adapter le logiciel du Site, y compris, mais sans s'y limiter, Flash, PHP, HTML, JavaScript ou autre code.",
    prohibitedActivity18:
      "- Sauf dans les cas autorisés par la loi applicable, déchiffrer, décompiler, désassembler ou procéder à une ingénierie inverse de tout logiciel composant ou constituant de quelque manière que ce soit une partie du Site.",
    prohibitedActivity19:
      "- Sauf si cela résulte de l'utilisation standard d'un moteur de recherche ou d'un navigateur Internet, utilisez, lancez, développez ou distribuez tout système automatisé, y compris, sans limitation, toute araignée, tout robot, tout utilitaire de triche, tout scraper ou tout lecteur hors ligne qui accède au Site, ou utilisez ou lancez tout script ou autre logiciel non autorisé.",
    prohibitedActivity20:
      "- Faire appel à un agent d'achat ou à un intermédiaire pour effectuer des achats sur le Site.",
    prohibitedActivity21:
      "- Faire toute utilisation non autorisée du Site, y compris la collecte de noms d'utilisateur et/ou d'adresses e-mail d'utilisateurs par des moyens électroniques ou autres dans le but d'envoyer des e-mails non sollicités, ou de créer des comptes d'utilisateurs par des moyens automatisés ou sous de faux prétextes.",
    prohibitedActivity22:
      "- Utiliser le Site dans le cadre de tout effort visant à nous concurrencer ou utiliser le Site et/ou le Contenu pour toute activité génératrice de revenus ou entreprise commerciale.",
    prohibitedActivity23:
      "- Utiliser le Site pour faire de la publicité ou proposer à la vente des biens et services.",
    prohibitedActivity24: "- Vendre ou transférer votre profil.",
    featuresContent1:
      "Nous concevons nos services avec soin, en nous appuyant sur notre propre expérience et sur celle de nos clients qui partagent leur expérience et leurs commentaires. Cependant, il n'existe pas de service qui plaise à tout le monde. Nous ne garantissons pas que nos services répondront à vos besoins ou attentes spécifiques.",
    featuresContent2:
      "Nous testons également toutes nos fonctionnalités avant leur lancement. Comme tout logiciel, nos services comportent inévitablement des bugs. Nous suivons les bugs qui nous sont signalés et les corrigeons, notamment ceux liés à la sécurité ou à la confidentialité. Tous les bugs signalés ne sont pas corrigés et nous ne garantissons pas des services totalement exempts d'erreurs.",
    correctionsContent1:
      "Certaines informations du Site peuvent contenir des erreurs typographiques, des inexactitudes ou des omissions, notamment concernant les descriptions, les prix, la disponibilité et diverses autres informations. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission et de modifier ou mettre à jour les informations du Site à tout moment et sans préavis.",
    correctionsContent2:
      "Nous ne pouvons garantir la disponibilité permanente du Site. Nous pouvons rencontrer des problèmes matériels, logiciels ou autres, ou être amenés à effectuer des opérations de maintenance, entraînant des interruptions, des retards ou des erreurs. Nous nous réservons le droit de modifier, réviser, mettre à jour, suspendre, interrompre ou autrement modifier le Site à tout moment et pour quelque raison que ce soit, sans préavis. Vous reconnaissez que nous déclinons toute responsabilité en cas de perte, dommage ou inconvénient causé par votre incapacité à accéder au Site ou à l'utiliser pendant une période d'indisponibilité ou d'interruption de son fonctionnement. Aucune disposition des présentes Conditions d'utilisation ne saurait être interprétée comme nous obligeant à maintenir et à soutenir le Site, ni à fournir des corrections, mises à jour ou versions connexes.",
    userDataContent:
      "Nous conserverons certaines données que vous transmettez au Site afin d'en gérer les performances, ainsi que les données relatives à votre utilisation. Bien que nous effectuions régulièrement des sauvegardes de données, vous êtes seul responsable de toutes les données que vous transmettez ou liées à toute activité que vous avez entreprise sur le Site. Vous reconnaissez que nous déclinons toute responsabilité envers vous en cas de perte ou de corruption de ces données, et vous renoncez par les présentes à tout droit d'action contre nous découlant de cette perte ou corruption.",
    privacyPolicyContent1:
      "La confidentialité et la sécurité des données nous tiennent à cœur. Veuillez consulter notre",
    privacyPolicy: "politique de confidentialité",
    privacyPolicyContent2:
      "En utilisant le Site, vous acceptez d'être lié par notre Politique de confidentialité, intégrée aux présentes Conditions d'utilisation. Veuillez noter que le Site est hébergé aux États-Unis. Si vous accédez au Site depuis une autre région du monde dont les lois ou autres exigences régissant la collecte, l'utilisation ou la divulgation des données personnelles diffèrent des lois applicables aux États-Unis, votre utilisation continue du Site implique le transfert de vos données vers les États-Unis et vous acceptez que vos données soient transférées et traitées aux États-Unis.",
    liabilityIntro:
      "Nous mentionnons la responsabilité tout au long des présentes Conditions, mais pour tout regrouper dans une seule section :",
    liabilityContent:
      "Français Vous comprenez et acceptez expressément que la Société ne sera pas responsable, en droit ou en équité, envers vous ou envers un tiers de tout dommage direct, indirect, accessoire, perte de profits, spécial, consécutif, punitif ou exemplaire, y compris, mais sans s'y limiter, les dommages pour perte de profits, de clientèle, d'utilisation, de données ou autres pertes intangibles (même si la Société a été informée de la possibilité de tels dommages), résultant de : (1) l'utilisation ou l'impossibilité d'utiliser les Services ; (2) des erreurs, fautes ou inexactitudes de contenu et de matériel ; (3) des blessures corporelles ou des dommages matériels, de quelque nature que ce soit, résultant de votre accès et de votre utilisation du site ; (4) le coût d'approvisionnement de biens et services de substitution résultant de tout bien, donnée, information ou service acheté ou obtenu ou de messages reçus ou de transactions conclues via ou à partir des Services ; (5) tout accès ou utilisation non autorisé de nos serveurs sécurisés et/ou de toutes les informations personnelles et/ou financières qui y sont stockées ; (6) toute interruption ou cessation de transmission vers ou depuis le site ; (7) tout bug, virus, cheval de Troie ou autre qui pourrait être transmis au site ou via le site par un tiers, et/ou ; (8) toute erreur ou omission dans tout contenu et matériel ou pour toute perte ou dommage de toute nature subi à la suite de l'utilisation de tout contenu publié, transmis ou autrement mis à disposition via le site ; (9) les déclarations ou la conduite de tout tiers sur le service ; (10) ou toute autre question relative aux présentes Conditions d'utilisation ou aux Services, qu'il s'agisse d'une rupture de contrat, d'un délit (y compris la négligence, qu'elle soit active ou passive), ou de toute autre théorie de responsabilité.",
    miscellaneousContent:
      "Les présentes Conditions d'utilisation et toutes les politiques ou règles de fonctionnement publiées par nous sur le Site ou relatives à celui-ci constituent l'intégralité de l'accord et de l'entente entre vous et nous. Notre manquement à exercer ou à appliquer un droit ou une disposition des présentes Conditions d'utilisation ne saurait constituer une renonciation à ce droit ou à cette disposition. Les présentes Conditions d'utilisation s'appliquent dans toute la mesure permise par la loi. Nous pouvons céder tout ou partie de nos droits et obligations à des tiers à tout moment. Nous déclinons toute responsabilité en cas de perte, de dommage, de retard ou d'inaction causés par une cause indépendante de notre volonté. Si une disposition ou une partie d'une disposition des présentes Conditions d'utilisation est jugée illégale, nulle ou inapplicable, cette disposition ou partie de disposition est réputée dissociable des présentes Conditions d'utilisation et n'affecte pas la validité et l'applicabilité des autres dispositions. Aucune relation de coentreprise, de partenariat, d'emploi ou d'agence n'est créée entre vous et nous du fait des présentes Conditions d'utilisation ou de l'utilisation du Site. Vous acceptez que les présentes Conditions d'utilisation ne soient pas interprétées à notre détriment du fait de leur rédaction. Vous renoncez par la présente à toute défense que vous pourriez avoir sur la base de la forme électronique des présentes Conditions d'utilisation et de l'absence de signature par les parties aux présentes pour exécuter les présentes Conditions d'utilisation.",
    contactUsContent1:
      "Si vous avez une question sur l'une des conditions d'utilisation, veuillez",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
