let message = {
  // 首页
  HomePage: {
    home: "Hjem",
    version: "Basis version (Gratis):",
    times:
      "Gratis transskription {times} gange om dagen, du har {left} transskription tilbage. ",
    tips: "Opgrader til Pro for ubegrænsede transskriptioner.",
    update: "Opgrader nu",
    folders: "Mapper",
    rename: "Omdøb",
    delete: "Slet",
    createTitle: "Opret mappe",
    deleteConfirm: `Er du sikker på, at du vil slette mappen og alle filer i den?`,
    cancel: "Annuller",
    confirm: "Opret",
    dialogLabel: "Mappenavn",
    recently: "Seneste filer",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transskriber engangs samtaler, møder, forelæsninger og mere",
        next: "Kom i gang"
      },
      step1: {
        title: "Transskriber filer",
        content:
          "Understøtter tre transskriptionsmetoder: lokale filer, links og optagelser."
      },
      step2: {
        title: "Opret en mappe",
        content: 'Klik på "+" for at oprette en mappe og organisere dine filer.'
      },
      step3: {
        title: "Se transskriptionsdetaljer og rediger",
        content:
          "Klik på elementet for at se transskriptionsdetaljer og rediger, oversæt det også."
      },
      next: "næste",
      finish: "Forstået"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer din eksport",
      title2: "Din fil er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil er blevet komprimeret.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer er blevet komprimeret.",
      cancel: "Annuller eksporten",
      error: "Eksportfejl",
      dialog: {
        title: "Advarsel",
        content: "Annuller eksporten?",
        cancel: "Annuller eksport",
        continue: "Fortsæt eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transskribér ubesværet med Scribify – omdan stemmesamtaler til klar, søgbar og delbar tekst på et øjeblik.",
      precision:
        "Få præcise transskriptioner med taleridentifikation og tidsstempler øjeblikkeligt.",
      translate:
        "Bryd sprogbarrierer: oversæt transskriptioner til mere end 200 sprog nemt og enkelt.",
      edit: "Redigér, forbedr og eksportér dine transskriptioner i formater, der passer til dine behov.",
      collaborate: "Samarbejd ved at dele din transskriberede tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til at omdanne lyd til transskriberet tekst? Start med at udforske nu!"
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for at låse op for mere",
        c1: "Ubegrænset transskription",
        c2: "10 timers uploads",
        c3: "Højeste prioritet",
        c4: "99% transskriptionsnøjagtighed",
        c5: "Mere end 100 understøttede sprog",
        c6: "Taleridentifikation",
        c7: "Transskriptionsoversættelse",
        t1: "Ubegrænset transskription for én person.",
        t2: "Hver fil kan være op til 10 timer / 5 GB. Upload 50 filer ad gangen.",
        t3: "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årligt",
        monthly: "Månedligt",
        save: "Besparelse",
        preMonth: "pr. måned",
        preYear: "pr. år",
        firstMonth: "første måned",
        afterwards: "derefter"
      },
      subscribe: "Abonnér"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Navn",
      duration: "Varighed",
      status: "Status",
      date: "Oprettelsesdato",
      activity: "Aktivitet",
      empty1: `Den er tom.`,
      empty2: `Klik på knappen ovenfor for at transskribere en fil.`,
      just: "lige",
      export: "Eksporter",
      delete: "Slet",
      share: "Del",
      rename: "Omdøb",
      move: "Flyt",
      failed: "Mislykket",
      selected: "Valgt",
      success: "Succes"
    },
    dialog: {
      move: {
        title: "Flyt",
        label: "Vælg en mappe",
        placeholder: "Vælg en mappe",
        confirm: "Flyt",
        cancel: "Annuller"
      },
      rename: {
        title: "Omdøb",
        label: "Filnavn",
        confirm: "Omdøb",
        cancel: "Annuller"
      },
      delete: {
        title: "Slet",
        file: "fil",
        files: "filer",
        label: "Bekræft sletning? Denne handling kan ikke fortrydes.",
        confirm: "Slet",
        cancel: "Annuller"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre link kan se denne transskription og den tilknyttede mediefil.",
        confirm: "Kopier link",
        success: "Kopiering lykkedes"
      },
      export: {
        title: "Eksporter",
        select: "Vælg et eller flere formater",
        settings: "Indstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Annuller",
        selectErr: "Vælg venligst et eller flere formater"
      }
    },
    search: {
      placeholder: "Søg"
    },
    recently: "Senest",
    record: "Optag",
    transcribe: "Transskriber",
    unclassified: "Uklassificerede mapper",
    buttons: {
      transcribe: "Transskriber filer",
      url: "Transskriber links",
      record: "Optag og transskriber",
      recording: "Optager..."
    },
    delSuccess: "Slettet med succes",
    create: "Opret"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Optag",
      pause: "Pause",
      resume: "Genoptag",
      stop: "Stop",
      delete: "Slet",
      transcribe: "Transskriber",
      permissionDenied: "Mikrofon tilladelse nægtet eller enhed findes ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på, at du vil slette denne optagelse?",
          confirm: "Slet",
          cancel: "Annuller"
        },
        complete: {
          title: "Optagelse fuldført",
          label:
            "Optagelsen har nået 10 timer og er automatisk stoppet. Transskriber venligst.",
          confirm: "Forstået"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transskriber en online medie",
        title: "Indsæt links",
        label:
          "Indsæt medielink fra følgende platforme, men ikke begrænset til: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Transskriber",
        cancel: "Annuller",
        // 请输入正确的链接
        errorTitle:
          "Linkadressen du indtastede er forkert. Kontroller venligst og prøv igen.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transskriber en online medie",
        dialogTitle: "Transskriber filer",
        tip: "Klik for at uploade eller træk og slip",
        or: "eller"
      },
      del: {
        title: "Advarsel",
        content:
          "Al fremskridt vil gå tabt. Bekræft annullering af transskriptionen?",
        cancel: "Bekræft annullering",
        confirm: "Fortsæt transskribering"
      },
      files: "Filer",
      resultDialogTitle: "Transskriber filer",
      cancel: "Annuller",
      confirm: "Transskriber",
      return: "Tilbage",
      addMore: "Tilføj flere",
      language: "Lydsprog",
      failed: "Mislykket",
      tooLarge: "Filen er for stor.",
      fileFormat: "Filformat er ikke tilladt",
      localFiles: "Lokale filer",
      pasteLink: "Indsæt links",
      uploadErr: "Uploadfejl",
      hashErr: "Hashfejl",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antallet af filer kan ikke overstige {num}.",
      speaker: "Taleridentifikation",
      speakerLabel: "Mærker hver del af transskriptionen med taleren."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Rediger",
    translate: "Oversæt",
    showSpeaker: "Vis taler",
    showTimestamp: "Vis tidsstempel",
    share: "Del",
    shared: "delt",
    export: "Eksporter",
    speaker: "Taler_{ id }",
    unassignSpeaker: "Fjern taler",
    play: "Afspil",
    save: "Gem",
    undo: "Fortryd",
    redo: "Gendan",
    confirm: "Bekræft",
    cancel: "Annuller",
    addNew: "Tilføj ny",
    createANewSpeaker: "Opret en ny taler",
    speakerName: "Talernavn",
    addSpeaker: "Tilføj taler",
    applyToAllMatchingSpeakers: "Anvend til alle matchende talere",
    cancelTranslation: "Annuller oversættelse",
    showVideo: "Vis videoen",
    hideVideo: "Skjul videoen",
    langChooseV1: {
      recently: "Seneste",
      popular: "Populære",
      other: "Andre",
      searchLanguage: "Søg sprog",
      noMatch: "Ingen matchende sprog fundet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (UK)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Hollandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviderussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galicisk",
      Catalan: "Catalansk",
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Lettisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumænsk",
      Marathi: "Marathi",
      Malay: "Malajisk",
      Macedonian: "Makedonsk",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norsk",
      Swedish: "Svensk",
      Serbian: "Serbisk",
      Slovak: "Slovakisk",
      Slovenian: "Slovensk",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Tyrkisk",
      Welsh: "Walisisk",
      Urdu: "Urdu",
      Ukrainian: "Ukrainsk",
      Greek: "Græsk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitansk",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Bretonsk",
      Tibetan: "Tibetansk",
      Faroese: "Færøsk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreol",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Laotisk",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgsk",
      Malagasy: "Malagassisk",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Singalesisk",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tadsjikisk",
      Tatar: "Tatarisk",
      Telugu: "Telugu",
      Turkmen: "Turkmensk",
      Uzbek: "Usbekisk",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhasisk",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesisk",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Nord-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buryat",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Tjetjensk",
      chk: "Chuukesisk",
      Chuvash: "Tjuvasjisk",
      Tswana: "Setswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau (Zimbabwe)",
      "South Ndebele": "Syd-Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (Vestafrikansk skriftsprog)",
      "French(Canada)": "Fransk (Canada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfrisisk",
      fur: "Friulisk",
      Fulah: "Fula",
      Kongo: "Kikongo",
      Kalaallisut: "Grønlandsk",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatarisk (Latinsk)",
      crh: "Krim-Tatarisk (Kyrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Sorani)",
      trp: "Kokborok",
      ltg: "Latgallisk",
      lij: "Ligurisk",
      Limburgish: "Limburgsk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romani",
      mad: "Maduresisk",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajisk (Jawi)",
      Marshallese: "Marshallsk",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Eastern Huasteca)",
      "Southern Sotho": "Syd-Sotho",
      new: "Newar",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapotekisk",
      "Northern Sami": "Nordsamisk",
      Samoan: "Samoansk",
      kri: "Krio",
      crs: "Seychellisk kreol",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gælisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latinsk)",
      Tahitian: "Tahitisk",
      Tonga: "Tongansk",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassarese",
      vec: "Venetiansk",
      Uyghur: "Uighurisk",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesisk",
      scn: "Siciliansk",
      hil: "Hiligaynon",
      jam: "Jamaicansk kreol",
      sah: "Jakutisk",
      ace: "Achinese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelser)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Ikke fundet",
    notFundDesc: "Vi kunne ikke finde det, du ledte efter.",
    shareTips:
      "Alle med følgende sikre link kan se denne transskription og den tilknyttede mediefil.",
    copyLink: "Kopier link",
    copySuccessful: "Kopiering lykkedes",
    copyFail: "Kopiering mislykkedes",
    closeTrans: "Annuller oversættelse",
    upgradeBtn: "Opgrader nu",
    upgradeTip30: "Denne fil overstiger 30 minutter.",
    upgradeTipMore:
      "Opgrader til Scribify Pro for at transskribere filer op til 10 timer"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    signup: "Tilmeld", // 注册
    sign_up: "Tilmeld dig", // 注册
    loginByGoogle: "Fortsæt med Google", // 使用Google登录
    emailAddress: "Indtast venligst din e-mailadresse", // 请输入您的邮箱
    createAccount: "Opret en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ved at bruge {proName} accepterer du {terms} og {policy}.",
      terms: "Servicevilkår",
      policy: "Privatlivspolitik"
    },
    setPassword: "Sæt en adgangskode", // 设置密码
    code: "Verifikationskode", // 验证码
    resend: "Send igen", // 重新发送
    codeToEmail:
      "Vi har lige sendt en midlertidig tilmeldingskode til din e-mail. Kontroller venligst din indbakke og indsæt tilmeldingskoden ovenfor.", // 我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。
    enterPassword: "Indtast venligst din adgangskode.", // 请输入密码
    passwordLeval: "Adgangskode niveau", // 密码强度
    Weak: "Svag", // 弱 中 强
    Medium: "Medium", // 弱 中 强
    Strong: "Stærk", // 弱 中 强
    confirmPassword: "Bekræft din adgangskode", // 确认密码
    invalidEmail: "Ugyldig e-mailadresse", // 无效的邮箱地址
    logInDirectly: "Denne konto eksisterer allerede. Log venligst direkte ind.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Verifikationskode fejl. Prøv igen.", // 验证码错误，请重试
    atLeastSix: "Adgangskoden skal være mindst 6 tegn lang.", // 密码长度至少6位
    passwordNotMatch: "Adgangskoder matcher ikke. Prøv venligst igen.", // 密码不匹配，请重试
    login: "Log ind", // 登录
    log_in: "Log ind", // 登录
    log_In: "Log ind", // 登录
    password: "Adgangskode", // 密码
    forgotPassword: "Glemt din adgangskode?", // 忘记密码？
    noAccount: "Har du ikke en konto？", // 没有账户？注册
    accountNotExists: "Denne konto eksisterer ikke.", // 账户不存在
    passwordError: "Adgangskode fejl", // 密码错误
    sendCode: "Send verifikationskode", // 发送验证码
    resetPassword: "Nulstil adgangskode", // 重置密码
    resetYourPassword: "Nulstil din adgangskode", // 重置你的密码
    newOldCantSame:
      "Den nye adgangskode skal være forskellig fra den gamle adgangskode.", // 新密码与旧密码不能相同
    passwordResetOk: "Adgangskode nulstillet med succes！" // 密码重置成功！
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transskriptioner dagligt",
    freeThreeTimesDay: "Transskriber 3 filer gratis hver dag.",
    uploadMinutes: "30 minutters upload",
    oneFileUploaded:
      "Hver fil kan være op til 30 minutter lang, med én fil uploadet ad gangen",
    lowerPriority: "Lav prioritet",
    needsToWaitLonger:
      "3 transskriptioner dagligt Vent længere på at dine filer bliver transskriberet.",
    currentPlan: "Nuværende plan",
    professionalEdition: "professionel version",
    unlimitedTranscription: "Ubegrænset transskription",
    unlimitedNumberOfTimes: "Ubegrænsede transskriptioner for én person.",
    uploadWithinHours: "Upload inden for 10 timer",
    filesUploadedAtOnce:
      "Hver fil kan være op til 10 timer lang / 5 GB. Upload 50 filer ad gangen.",
    highestPriority: "højeste prioritet",
    weWillGiveTheHighest:
      "Vi vil altid transskribere dine filer hurtigst muligt med højeste prioritet.",
    theFirstMonth: "Den første måned",
    subscribeTo: "abonner på",
    basicVersionFree: "Basisversion (gratis)",
    return: "Tilbage",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "sparet",
    byTheMonth: "pr. måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Derefter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Professionel årlig",
    professionalMonthly: "Professionel månedlig",
    subscriptionWillCancelledOn: "Dit abonnement vil blive annulleret den",
    displayLanguage: "Visningssprog",
    update: "Opgrader nu",
    basicversion: "Basisversion (Gratis)",
    daily: "{start} af {end} daglige transskriptioner brugt",
    upgradetoPro: "Opgrader til Pro",
    accountSetting: "Kontoindstillinger",
    returnAccountSetting: "Tilbage til kontoindstillinger",
    logOut: "Log ud",
    account: "Konto",
    email: "E-mail",
    id: "ID",
    password: "Adgangskode",
    resetPassword: "Nulstil adgangskode",
    logIn: "Log ind",
    tryForFree: "Prøv gratis",
    notFund: "Ikke fundet",
    couldntFind: "Vi kunne ikke finde det, du ledte efter.",
    proAnnual: "Pro Årlig",
    yourSubscription: "Dit abonnement vil blive annulleret den",
    proMonthly: "Pro Månedlig",
    perMonth: "pr. måned",
    afterwards: "derefter",
    accuracy: "transskriptionsnøjagtighed",
    supported: "understøttede sprog",
    identification: "Taleridentifikation",
    transcriptSranslation: "Transskriptionsoversættelse",
    perYear: "pr. år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Skift til årlig",
    automaticRenewalon: "Automatisk fornyelse den"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (Forenklet)",
      "Chinese(Traditional)": "Kinesisk (Traditionelt)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Hollandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Græsk",
      Russian: "Russisk",
      Ukrainian: "Ukrainsk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Korean: "Koreansk"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS skabelon, forud integreret med globale betalingsgateways (Stripe/Cream), Google OAuth, i18n routing og SEO optimeringsværktøjer. Designet til udviklere, der lancerer flersprogede webapps, tilbyder den SSR/SSG support og produktionsklar sikkerhed ud af boksen.",
    startLink: "Start gratis prøveperiode~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Tilslut dig ventelisten, få de seneste NuxtPro nyheder først OG rabatter!",
      placeholder: "Indtast din e-mail",
      button: "Tilslut venteliste",
      joinCountMessage: "🔥 Tidlig bruger #{count} lige tilsluttet ventelisten!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "NuxtJS boilerplaten med alt det, du har brug for for at få dit produkt foran kunderne. Fra idé til produktion på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "virksomhedsinfo"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download fejl"
      },
      mse: {
        code: 2,
        msg: "stream append fejl"
      },
      parse: {
        code: 3,
        msg: "parsing fejl"
      },
      format: {
        code: 4,
        msg: "forkert format"
      },
      decoder: {
        code: 5,
        msg: "dekodningsfejl"
      },
      runtime: {
        code: 6,
        msg: "grammatiske fejl"
      },
      timeout: {
        code: 7,
        msg: "afspil timeout"
      },
      other: {
        code: 8,
        msg: "andre fejl"
      }
    },
    HAVE_NOTHING: "Der er ingen information om, hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar",
    HAVE_CURRENT_DATA:
      "Data om den nuværende afspilningsplacering er tilgængelig, men der er ikke nok data til at afspille næste frame/millisekund",
    HAVE_FUTURE_DATA: "Nuværende og mindst én frame af data er tilgængelig",
    HAVE_ENOUGH_DATA:
      "De tilgængelige data er tilstrækkelige til at starte afspilning",
    NETWORK_EMPTY: "Lyd/video er ikke blevet initialiseret",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er blevet valgt til ressourcer, men intet netværk bruges",
    NETWORK_LOADING: "Browseren downloader dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde blev fundet",
    MEDIA_ERR_ABORTED: "Hentningsprocessen afbrydes af brugeren",
    MEDIA_ERR_NETWORK: "Der opstod en fejl under download",
    MEDIA_ERR_DECODE: "Der opstod en fejl under dekodning",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video understøttes ikke",
    REPLAY: "Genafspil",
    ERROR: "Netværk er offline",
    PLAY_TIPS: "Afspil",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Afspil næste",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Genindlæs",
    FULLSCREEN_TIPS: "Gå fuldskærm",
    EXITFULLSCREEN_TIPS: "Afslut fuldskærm",
    CSSFULLSCREEN_TIPS: "Cssfuldskærm",
    EXITCSSFULLSCREEN_TIPS: "Afslut cssfuldskærm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skærmbillede",
    LIVE: "LIVE",
    OFF: "Slukket",
    OPEN: "Åbn",
    MINI_DRAG: "Klik og hold for at trække",
    MINISCREEN: "Miniskærm",
    REFRESH_TIPS: "Prøv venligst",
    REFRESH: "Opdater",
    FORWARD: "fremad",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Tænd undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Sluk undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Privatlivspolitik",
    lastUpdated: "Sidst opdateret: 25. august 2025",
    policyDescription:
      "Denne politik beskriver, hvordan Scribify (herefter benævnt &quot;Scribify&quot;, &quot;vores&quot;, &quot;vi&quot;, &quot;os&quot;) indsamler, bruger og videregiver dine personlige oplysninger, når du bruger vores tjenester, websteder",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "og software (samlet kaldet &quot;Tjenesterne&quot;).",
    policyAgreement:
      "Læs venligst denne privatlivspolitik omhyggeligt og sørg for, at du forstår den. Ved at bruge en af vores tjenester accepterer du denne privatlivspolitik. Hvis du ikke accepterer vores brug af dine personoplysninger i overensstemmelse med denne politik, skal du straks stoppe med at bruge vores tjenester.",
    policyOverview:
      "I denne politik beskriver vi: hvilke data vi indsamler og hvorfor; hvordan dine data håndteres; og dine rettigheder i forhold til dine data. Vi sælger ikke dine data.",
    scopeTitle: "1. Omfanget af denne privatlivspolitik",
    whatWeCollectTitle: "2. Hvad vi indsamler og hvorfor",
    accessShareTitle: "3. Hvornår vi tilgår eller deler dine oplysninger",
    secureDataTitle: "4. Sådan sikrer vi dine data",
    deleteContentTitle: "5. Hvad sker der, når du sletter dit indhold",
    locationTitle: "6. Placering af websted og data",
    childrenPrivacyTitle: "7. Børns privatliv",
    updatesTitle: "8. Opdateringer af denne privatlivspolitik",
    contactUsTitle: "9. Kontakt os",
    identityAccessTitle: "2.1 Identitet og adgang",
    billingInfoTitle: "2.2 Faktureringsoplysninger",
    productInteractionsTitle: "2.3 Produktinteraktioner",
    websiteInteractionsTitle: "2.4 Webstedsinteraktioner",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondance",
    scopeContent:
      "Denne privatlivspolitik gælder kun for vores indsamling og behandling af oplysninger om brugere af Tjenesterne. Denne privatlivspolitik gælder ikke for tjenester, websteder eller software, der drives af tredjeparter, og som er linket til os (uanset om vi leverer disse links, eller om andre brugere deler dem), og den gælder heller ikke for indhold, data, applikationer eller materialer fra tredjeparter. Vi anbefaler, at du tjekker privatlivspolitikkerne for tredjepartswebsteder eller -software, før du giver dem oplysninger.",
    collectPrinciple:
      "Vores ledende princip er kun at indsamle det, vi har brug for. Her er, hvad det betyder i praksis:",
    identityAccessContent:
      "Når du tilmelder dig et af vores produkter, beder vi om identificerende oplysninger såsom dit navn og din e-mailadresse. Dette er for at kunne levere essentiel produktfunktionalitet og sende dig produktopdateringer og andre vigtige oplysninger.",
    billingInfoContent:
      "Hvis du tilmelder dig et betalt produkt, vil du blive bedt om at angive dine betalingsoplysninger og faktureringsadresse. Betalingsoplysningerne sendes direkte til vores betalingsudbyder og når ikke vores servere.",
    productInteractionsContent:
      "Vi gemmer det indhold, du uploader, modtager eller vedligeholder på dine produktkonti, på vores servere. Medmindre du sletter dette indhold, kan vi gemme det, så længe din konto er aktiv.",
    websiteInteractionsContent:
      "Vi indsamler oplysninger om din browsingaktivitet til analyse- og statistiske formål, såsom test af konverteringsfrekvens og eksperimentering med nye produktdesigns. Dette omfatter f.eks. dine browser- og operativsystemversioner, din IP-adresse, hvilke websider du har besøgt, og hvor lang tid de tog at indlæse, og hvilket websted der henviste dig til os. Hvis du har en konto og er logget ind, er disse webanalysedata knyttet til din IP-adresse og brugerkonto, indtil din konto ikke længere er aktiv.",
    cookiesContent1:
      "Vi bruger også permanente førstepartscookies og nogle tredjepartscookies til at gemme bestemte præferencer, gøre det nemmere for dig at bruge vores applikationer og udføre A/B-test samt understøtte visse analyser.",
    cookiesContent2:
      "En cookie er et stykke tekst, der gemmes af din browser. Den kan hjælpe med at huske loginoplysninger og webstedspræferencer. Den kan også indsamle oplysninger såsom din browsertype, operativsystem, besøgte websider, besøgets varighed, set indhold og andre klikdata. Du kan justere indstillinger for cookieopbevaring og acceptere eller blokere individuelle cookies i dine browserindstillinger, selvom vores apps ikke fungerer, og andre aspekter af vores tjeneste muligvis ikke fungerer korrekt, hvis du slår cookies fra.",
    voluntaryCorrespondenceContent:
      "Når du sender os en e-mail med et spørgsmål eller for at bede om hjælp, gemmer vi denne korrespondance, inklusive din e-mailadresse, så vi har en historik over tidligere korrespondance, som vi kan bruge, hvis du kontakter os i fremtiden.",
    accessShareContent1:
      "For at levere produkter eller tjenester, du har anmodet om. Vi bruger nogle tredjeparts underdatabehandlere til at hjælpe med at køre vores applikationer og levere tjenesterne til dig. Dette inkluderer cloud- og analyseudbydere.",
    accessShareContent2:
      "At undersøge, forebygge eller træffe foranstaltninger vedrørende misbrug. Adgang til en kundes konto i forbindelse med undersøgelse af potentielt misbrug er en sidste udvej. Vi ønsker at beskytte privatlivets fred og sikkerheden for både vores kunder og de personer, der rapporterer problemer til os, og vi gør vores bedste for at afbalancere disse ansvarsområder gennem hele processen. Hvis vi opdager, at du bruger vores produkter til et begrænset formål, vil vi træffe nødvendige foranstaltninger, herunder underrette de relevante myndigheder, hvor det er berettiget.",
    accessShareContent3: "Når det er påkrævet i henhold til gældende lov.",
    userDataRequests:
      "- Anmodninger om brugerdata. Vores politik er ikke at svare på anmodninger fra myndigheder om brugerdata, medmindre vi er tvunget til det af en juridisk proces eller under begrænsede omstændigheder i tilfælde af en nødsituation. Hvis amerikanske retshåndhævende myndigheder har den nødvendige kendelse, strafferetlige stævning eller retskendelse, der kræver, at vi deler data, skal vi dog overholde dette. Ligeledes vil vi kun svare på anmodninger fra myndigheder uden for USA, hvis den amerikanske regering tvinger os til det gennem procedurer, der er beskrevet i en traktat eller aftale om gensidig retshjælp. Det er vores politik at underrette berørte brugere, før vi deler data, medmindre vi er juridisk forbudt at gøre det, og undtagen i visse nødsituationer.",
    preservationRequests:
      "- Anmodninger om databevaring. Ligeledes er det vores politik kun at efterkomme anmodninger om databevaring, hvis det er påkrævet af den amerikanske Federal Stored Communications Act, 18 USC Section 2703(f), eller af en behørigt forkyndt amerikansk stævning i civile sager. Vi deler ikke bevarede data, medmindre det er påkrævet ved lov eller påkrævet af en retskendelse, som vi vælger ikke at anke. Derudover vil vi, medmindre vi modtager en behørig kendelse, retskendelse eller stævning, inden den krævede bevaringsperiode udløber, destruere alle bevarede kopier af kundedata ved udgangen af bevaringsperioden.",
    taxAudit:
      "- Hvis vi bliver revideret af en skattemyndighed, kan vi være forpligtet til at dele faktureringsrelaterede oplysninger. Hvis det sker, deler vi kun det minimum, der er nødvendigt, såsom faktureringsadresser og oplysninger om skattefritagelse.",
    secureDataContent1: "Alle data krypteres via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "når den sendes fra vores servere til din browser.",
    deleteContentContent:
      "Hvis du sletter indhold, bliver det øjeblikkeligt utilgængeligt.",
    locationContent:
      "Vores produkter og andre web-ejendomme drives i USA. Hvis du befinder dig i Den Europæiske Union, Storbritannien eller andre steder uden for USA, skal du være opmærksom på, at alle oplysninger, du giver os, vil blive overført til og gemt i USA. Ved at bruge vores websteder eller tjenester og/eller give os dine personlige oplysninger, accepterer du denne overførsel.",
    childrenPrivacyContent:
      "Tjenesterne er ikke rettet mod børn, og vi indsamler ikke bevidst personlige oplysninger fra børn under 13 år. Hvis du er under 13 år, bedes du ikke indsende personlige oplysninger via Tjenesterne. Hvis du mener, at et barn har givet os personlige oplysninger i strid med denne politik, bedes du kontakte os som angivet nedenfor.",
    updatesContent:
      "Vi kan opdatere denne politik efter behov for at overholde relevante regler og afspejle eventuelle nye praksisser. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side.",
    contactUsContent1:
      "Hvis du har spørgsmål, kommentarer eller klager vedrørende vores privatlivspolitik, bedes du",
    contactUs: "kontakt os",
    contactUsContent2:
      "og vi vil bestræbe os på at behandle din klage hurtigst muligt."
  },
  termsOfService: {
    termsOfServiceTitle: "Servicevilkår",
    lastUpdated: "Sidst opdateret: 21. september 2022",
    thankYouMessage: "Tak fordi du bruger vores produkter!",
    companyReference:
      "Når vi siger &quot;Virksomhed&quot;, &quot;vi&quot;, &quot;vores&quot; eller &quot;os&quot; i dette dokument, henviser vi til Scribify.",
    servicesDefinition:
      "Når vi siger &quot;Tjenester&quot;, mener vi ethvert produkt, der er oprettet og vedligeholdt af Scribify, uanset om det leveres i en webbrowser, desktopapplikation, mobilapplikation eller et andet format.",
    termsUpdateNotice:
      "Vi kan opdatere disse servicevilkår i fremtiden. Typisk har disse ændringer været for at præcisere nogle af disse vilkår ved at linke til en udvidet relateret politik. Når vi foretager en væsentlig ændring af vores politikker, opdaterer vi datoen øverst på denne side og tager andre passende skridt for at underrette kontohaverne.",
    acceptanceOfAgreementTitle: "1. Accept af aftale",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusion og planændringer",
    cancellationTerminationTitle: "5. Annullering og opsigelse",
    submissionsTitle: "6. Indsendelser",
    uptimeSecurityTitle: "7. Oppetid og sikkerhed",
    siteManagementTitle: "8. Webstedsadministration",
    copyrightContentTitle: "9. Ophavsret og ejerskab af indhold",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funktioner og fejl",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brugerdata",
    privacyPolicyTitle: "14. Privatlivspolitik",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt os",
    acceptanceContent1:
      "Ved at bruge vores Tjenester angiver du din accept af denne Aftale, som dermed bliver en bindende kontrakt mellem dig og Scribify. Du erklærer, at du er juridisk i stand til at acceptere disse Vilkår, og bekræfter, at du er myndig nok til at indgå en bindende kontrakt. Scrifys accept er udtrykkeligt betinget af din accept af alle vilkår og betingelser i denne Aftale.",
    acceptanceContent2:
      "Tjenesterne er ikke beregnet til og bør ikke bruges af personer under 18 år. Ved at bruge Tjenesterne erklærer og garanterer du, at du opfylder ovenstående berettigelseskrav.",
    acceptanceContent3:
      "Udtrykkene &quot;du&quot;, &quot;din&quot;, &quot;dig selv&quot; omfatter også dine medarbejdere, agenter, forretningsrepræsentanter og alle andre personer, som du giver adgang til Tjenesterne via din Konto (som defineret nedenfor). Du er ansvarlig for at sikre, at alle personer, der tilgår Tjenesterne via din konto, er bekendt med disse Vilkår og overholder dem.",
    acceptanceContent4:
      "Scribify forbeholder sig retten til at revidere og opdatere disse vilkår fra tid til anden efter eget skøn. Alle ændringer træder i kraft med det samme, når de offentliggøres. Din fortsatte brug af tjenesterne efter offentliggørelsen af de reviderede vilkår betyder, at du accepterer og accepterer ændringerne. Du forventes at tjekke denne side fra tid til anden, så du er opmærksom på eventuelle ændringer, da de er bindende for dig.",
    servicesContent1:
      "Vores tjenester gør det muligt for brugere at omdanne stemmesamtaler til transskriberet tekst, der kan søges i, oversættes og deles med andre.",
    servicesContent2:
      "Du kan vælge, om du vil bruge den gratis version af Tjenesterne (&quot;Gratis Tjenester&quot;) eller den abonnementsbaserede, betalte version af Tjenesterne, som du muligvis skal betale gebyrer for (&quot;Betalte Tjenester&quot;).",
    servicesContent3:
      "Vi stiller Tjenesterne til rådighed for dig. Du er ansvarlig for at træffe alle nødvendige foranstaltninger for at du kan få adgang til Tjenesterne.",
    accountTerms1:
      "- Du er ansvarlig for at opretholde sikkerheden på din konto. Virksomheden kan ikke og vil ikke være ansvarlig for tab eller skade som følge af din manglende overholdelse af denne sikkerhedsforpligtelse.",
    accountTerms2:
      "- Du må ikke bruge Tjenesterne til ulovlige, uetiske eller umoralske formål.",
    accountTerms3:
      "- Du er ansvarlig for alt indhold, der offentliggøres, og alt aktivitet, der finder sted på din konto. Dette inkluderer indhold, der offentliggøres af andre, som enten: (a) har adgang til dine loginoplysninger; eller (b) har deres egne logins på din konto.",
    accountTerms4:
      "- Du skal være et menneske. Konti registreret af &quot;bots&quot; eller andre automatiserede metoder er ikke tilladt.",
    paymentContent1:
      "- For betalte tjenester, der tilbyder en gratis prøveperiode, forklarer vi prøveperiodens varighed, når du tilmelder dig. Efter prøveperioden skal du betale forud for at fortsætte med at bruge tjenesten. Hvis du ikke betaler, ophører disse tjenester.",
    paymentContent2:
      "- Hvis du opgraderer fra et gratis abonnement til et betalt abonnement, debiterer vi dit kort med det samme, og din faktureringsperiode starter på opgraderingsdagen.",
    paymentContent3:
      "- Alle gebyrer er eksklusive alle skatter, afgifter eller gebyrer pålagt af skattemyndighederne. Hvor det er nødvendigt, opkræver vi disse skatter på vegne af skattemyndighederne og indbetaler dem til skattemyndighederne. Ellers er du ansvarlig for betaling af alle skatter, afgifter eller gebyrer.",
    paymentContent4:
      "- Alle køb refunderes ikke. Du kan til enhver tid opsige alle betalte tjenester ved at logge ind på din konto. For betalte abonnementer træder din opsigelse i kraft ved udgangen af den nuværende betalte periode, medmindre andet er angivet.",
    cancellationContent1:
      "- Hvis du opsiger Tjenesten inden udgangen af en betalt periode, træder din opsigelse i kraft med det samme, og du vil ikke blive opkrævet igen. Vi beregner ikke automatisk forholdsmæssigt den ubrugte tid i den seneste faktureringsperiode.",
    cancellationContent2:
      "- Vi har ret til at suspendere eller opsige din konto og nægte enhver nuværende eller fremtidig brug af vores Tjenester af en hvilken som helst grund når som helst. Suspendering betyder, at du ikke vil kunne få adgang til kontoen eller noget indhold på kontoen. Opsigelse vil desuden resultere i sletning af din konto eller din adgang til din konto, og tab og afkald på alt indhold på din konto. Vi forbeholder os også retten til at nægte brugen af Tjenesterne til enhver af en hvilken som helst grund når som helst. Vi har denne klausul, fordi statistisk set er der mindst én ud af de hundredtusindvis af konti på vores Tjenester, der gør noget skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller anden form for misbrug (herunder trusler om misbrug eller gengældelse) af virksomhedens medarbejder eller funktionær kan resultere i øjeblikkelig lukning af kontoen.",
    submissionsContent:
      "Du anerkender og accepterer, at eventuelle spørgsmål, kommentarer, forslag, ideer, feedback eller andre oplysninger vedrørende webstedet (&quot;indsendelser&quot;), som du giver os, ikke er fortrolige og bliver vores ejendom. Vi ejer eksklusive rettigheder, herunder alle immaterielle rettigheder, og har ret til ubegrænset brug og formidling af disse indsendelser til ethvert lovligt formål, kommercielt eller andet, uden anerkendelse eller kompensation til dig. Du giver hermed afkald på alle moralske rettigheder til sådanne indsendelser, og du garanterer hermed, at sådanne indsendelser er originale fra dig, eller at du har ret til at indsende sådanne indsendelser. Du accepterer, at der ikke kan gøres krav mod os for påstået eller faktisk krænkelse eller misbrug af nogen ejendomsret i dine indsendelser.",
    uptimeContent1:
      "- Din brug af Tjenesterne sker på eget ansvar. Vi leverer disse Tjenester &quot;som de er&quot; og &quot;som tilgængelige&quot;. Vi tilbyder ikke serviceniveauaftaler for de fleste af vores Tjenester, men tager oppetiden for vores applikationer alvorligt.",
    uptimeContent2:
      "- Vi forbeholder os retten til midlertidigt at deaktivere din konto, hvis dit forbrug væsentligt overstiger det typiske forbrug for andre kunder af Tjenesterne. Vi vil naturligvis kontakte dig, før vi foretager os noget, undtagen i sjældne tilfælde, hvor brugsniveauet kan have en negativ indvirkning på Tjenestens ydeevne for andre kunder.",
    uptimeContent3:
      "- Vi tager mange forholdsregler for at beskytte og sikre dine data gennem sikkerhedskopiering, redundans og kryptering. Vi håndhæver kryptering til dataoverførsel over det offentlige internet.",
    uptimeContent4:
      "- Vi bruger tredjepartsleverandører og hostingpartnere til at levere den nødvendige hardware, software, netværk, lagring og relateret teknologi, der kræves for at køre Tjenesterne.",
    siteManagementContent:
      "Vi forbeholder os retten, men ikke forpligtelsen, til at: (1) overvåge webstedet for overtrædelser af disse servicevilkår; (2) tage passende retslige skridt mod enhver, der efter eget skøn overtræder loven eller disse servicevilkår, herunder, men ikke begrænset til, at rapportere en sådan bruger til retshåndhævende myndigheder; (3) efter eget skøn og uden begrænsning, nægte, begrænse adgang til, begrænse tilgængeligheden af eller deaktivere (i det omfang det er teknologisk muligt) dine bidrag eller dele deraf; (4) efter eget skøn og uden begrænsning, varsel eller ansvar, at fjerne fra webstedet eller på anden måde deaktivere alle filer og indhold, der er for store eller på nogen måde er belastende for vores systemer; og (5) på anden måde administrere webstedet på en måde, der er designet til at beskytte vores rettigheder og ejendom og til at fremme webstedets korrekte funktion.",
    copyrightContent1:
      "- Alt indhold, der offentliggøres på Tjenesterne, skal overholde amerikansk ophavsretslovgivning.",
    copyrightContent2:
      "- Vi gør ikke krav på nogen immaterielle rettigheder over det materiale, du leverer til Tjenesterne. Alt materiale, der uploades, forbliver dit.",
    copyrightContent3:
      "- Vi foretager ikke forhåndsscreening af indhold, men forbeholder os retten (men ikke pligten) til efter eget skøn at afvise eller fjerne indhold, der er tilgængeligt via Tjenesten.",
    copyrightContent4:
      "- Navnene, udseendet og følelsen af Tjenesterne er copyright© tilhørende Virksomheden. Alle rettigheder forbeholdes. Du må ikke duplikere, kopiere eller genbruge nogen del af HTML-, CSS-, JavaScript- eller visuelle designelementer uden udtrykkelig skriftlig tilladelse fra Virksomheden. Du skal anmode om tilladelse til at bruge Virksomhedens logo eller eventuelle Tjenestelogoer til reklameformål. Venligst",
    emailUs: "e-mail os",
    copyrightContent5:
      "anmodninger om at bruge logoer. Vi forbeholder os retten til at tilbagekalde denne tilladelse, hvis du overtræder disse servicevilkår.",
    copyrightContent6:
      "- Du accepterer ikke at reproducere, duplikere, kopiere, sælge, videresælge eller udnytte nogen del af Tjenesterne, brugen af Tjenesterne eller adgangen til Tjenesterne uden udtrykkelig skriftlig tilladelse fra Virksomheden.",
    copyrightContent7:
      "- Du må ikke ændre et andet websted på en måde, der fejlagtigt antyder, at det er forbundet med Tjenesterne eller Virksomheden.",
    copyrightContent8:
      "- Vi respekterer andres immaterielle rettigheder. Hvis du mener, at materiale, der er tilgængeligt på eller via webstedet, krænker en ophavsret, du ejer eller kontrollerer, bedes du straks",
    contactUs: "kontakt os",
    copyrightContent9:
      "En kopi af din meddelelse vil blive sendt til den person, der har lagt det materiale op, der er omhandlet i meddelelsen. Vær opmærksom på, at du i henhold til gældende lov kan blive holdt ansvarlig for erstatning, hvis du afgiver væsentlige urigtige oplysninger i en meddelelse. Hvis du derfor ikke er sikker på, at materiale, der findes på eller linkes til af webstedet, krænker din ophavsret, bør du overveje først at kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du må ikke tilgå eller bruge webstedet til andre formål end det, som vi stiller webstedet til rådighed for. Webstedet må ikke bruges i forbindelse med kommercielle bestræbelser, undtagen dem, der specifikt er godkendt af os.",
    prohibitedActivitiesUserAgreement:
      "Som bruger af webstedet accepterer du ikke at:",
    prohibitedActivity1:
      "- Systematisk hente data eller andet indhold fra webstedet for direkte eller indirekte at oprette eller kompilere en samling, kompilering, database eller fortegnelse uden skriftlig tilladelse fra os.",
    prohibitedActivity2:
      "- Narre, bedrage eller vildlede os og andre brugere, især i forsøg på at få adgang til følsomme kontooplysninger såsom brugeradgangskoder.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på anden måde forstyrre sikkerhedsrelaterede funktioner på webstedet, herunder funktioner, der forhindrer eller begrænser brugen eller kopieringen af indhold eller håndhæver begrænsninger på brugen af webstedet og/eller indholdet deri.",
    prohibitedActivity4:
      "- Nedgøre, plette eller på anden måde skade os og/eller webstedet efter vores mening.",
    prohibitedActivity5:
      "- Bruge oplysninger indhentet fra webstedet til at chikanere, misbruge eller skade en anden person.",
    prohibitedActivity6:
      "- Gøre ukorrekt brug af vores supporttjenester eller indsende falske rapporter om misbrug eller forseelser.",
    prohibitedActivity7:
      "- Bruge webstedet på en måde, der er uforenelig med gældende love eller regler.",
    prohibitedActivity8:
      "- Deltage i uautoriseret framing af eller linkning til webstedet.",
    prohibitedActivity9:
      "- Uploade eller overføre (eller forsøge at uploade eller overføre) virus, trojanske heste eller andet materiale, herunder overdreven brug af store bogstaver og spamming (kontinuerlig opslag af gentagne tekster), der forstyrrer en parts uafbrudte brug og nydelse af webstedet eller ændrer, forringer, forstyrrer, ændrer eller forstyrrer brugen, funktionerne, driften eller vedligeholdelsen af webstedet.",
    prohibitedActivity10:
      "- Bruge systemet automatisk på enhver måde, f.eks. ved at bruge scripts til at sende kommentarer eller beskeder eller ved at bruge datamining, robotter eller lignende dataindsamlings- og udtrækningsværktøjer.",
    prohibitedActivity11:
      "- Slet meddelelsen om ophavsret eller andre ejendomsrettigheder fra ethvert indhold.",
    prohibitedActivity12:
      "- Forsøg på at udgive dig for at være en anden bruger eller person eller bruge en anden brugers brugernavn.",
    prohibitedActivity13:
      "- Uploade eller overføre (eller forsøge at uploade eller overføre) materiale, der fungerer som en passiv eller aktiv informationsindsamlings- eller transmissionsmekanisme, herunder, men ikke begrænset til, klare grafikudvekslingsformater (&quot;gifs&quot;), 1×1 pixels, web bugs, cookies eller andre lignende enheder (undertiden omtalt som &quot;spyware&quot; eller &quot;passive indsamlingsmekanismer&quot; eller &quot;pcms&quot;).",
    prohibitedActivity14:
      "- Forstyrre, afbryde eller skabe en urimelig belastning på webstedet eller de netværk eller tjenester, der er forbundet til webstedet.",
    prohibitedActivity15:
      "- Chikanere, irritere, intimidere eller true nogen af vores medarbejdere eller agenter, der er involveret i at levere nogen del af webstedet til dig.",
    prohibitedActivity16:
      "- Forsøg at omgå eventuelle foranstaltninger på webstedet, der er designet til at forhindre eller begrænse adgang til webstedet eller nogen del af webstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse webstedets software, herunder, men ikke begrænset til, Flash, PHP, HTML, JavaScript eller anden kode.",
    prohibitedActivity18:
      "- Medmindre det er tilladt i henhold til gældende lov, at dechifrere, dekompilere, disassemblere eller reverse engineere nogen af de softwareprogrammer, der omfatter eller på nogen måde udgør en del af webstedet.",
    prohibitedActivity19:
      "- Medmindre det er et resultat af standardbrug af søgemaskiner eller internetbrowsere, bruge, starte, udvikle eller distribuere ethvert automatiseret system, herunder, men ikke begrænset til, enhver spider, robot, snydeværktøj, scraper eller offline-læser, der tilgår webstedet, eller bruge eller starte ethvert uautoriseret script eller anden software.",
    prohibitedActivity20:
      "- Brug en indkøbsagent eller en indkøbsagent til at foretage køb på webstedet.",
    prohibitedActivity21:
      "- Foretage uautoriseret brug af webstedet, herunder indsamling af brugernavne og/eller e-mailadresser på brugere elektronisk eller på anden måde med det formål at sende uopfordrede e-mails eller oprette brugerkonti automatisk eller under falske forudsætninger.",
    prohibitedActivity22:
      "- Bruge webstedet som en del af enhver bestræbelse på at konkurrere med os eller på anden måde bruge webstedet og/eller indholdet til enhver indtægtsgenererende eller kommerciel virksomhed.",
    prohibitedActivity23:
      "- Bruge webstedet til at annoncere eller tilbyde at sælge varer og tjenester.",
    prohibitedActivity24: "- Sælg eller overfør din profil på anden måde.",
    featuresContent1:
      "Vi designer vores tjenester med omhu, baseret på vores egne erfaringer og erfaringerne fra kunder, der deler deres tid og feedback. Der findes dog ikke en service, der tilfredsstiller alle. Vi garanterer ikke, at vores tjenester opfylder dine specifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle vores funktioner, før vi sender dem. Som med al software indeholder vores tjenester uundgåeligt nogle fejl. Vi sporer de fejl, der rapporteres til os, og arbejder på dem, især dem, der er relateret til sikkerhed eller privatliv. Ikke alle rapporterede fejl vil blive rettet, og vi garanterer ikke fuldstændig fejlfri tjenester.",
    correctionsContent1:
      "Der kan være oplysninger på webstedet, der indeholder typografiske fejl, unøjagtigheder eller udeladelser, herunder beskrivelser, priser, tilgængelighed og forskellige andre oplysninger. Vi forbeholder os retten til at rette eventuelle fejl, unøjagtigheder eller udeladelser og til at ændre eller opdatere oplysningerne på webstedet når som helst og uden forudgående varsel.",
    correctionsContent2:
      "Vi kan ikke garantere, at webstedet vil være tilgængeligt til enhver tid. Vi kan opleve hardware-, software- eller andre problemer, eller vi kan være nødt til at udføre vedligeholdelse relateret til webstedet, hvilket resulterer i afbrydelser, forsinkelser eller fejl. Vi forbeholder os retten til at ændre, revidere, opdatere, suspendere, afbryde eller på anden måde modificere webstedet når som helst og af en hvilken som helst grund uden varsel til dig. Du accepterer, at vi ikke har noget ansvar for tab, skade eller ulempe forårsaget af din manglende evne til at få adgang til eller bruge webstedet under nedetid eller ophør af webstedet. Intet i disse servicevilkår skal fortolkes som en forpligtelse for os til at vedligeholde og supportere webstedet eller til at levere rettelser, opdateringer eller udgivelser i forbindelse hermed.",
    userDataContent:
      "Vi opbevarer visse data, som du overfører til webstedet, med det formål at administrere webstedets ydeevne, samt data vedrørende din brug af webstedet. Selvom vi regelmæssigt udfører sikkerhedskopier af data, er du eneansvarlig for alle data, som du overfører, eller som vedrører enhver aktivitet, du har foretaget ved hjælp af webstedet. Du accepterer, at vi ikke har noget ansvar over for dig for tab eller beskadigelse af sådanne data, og du giver hermed afkald på enhver ret til at anlægge sag mod os som følge af et sådant tab eller beskadigelse af sådanne data.",
    privacyPolicyContent1:
      "Vi bekymrer os om databeskyttelse og -sikkerhed. Gennemgå venligst vores",
    privacyPolicy: "Privatlivspolitik",
    privacyPolicyContent2:
      "Ved at bruge webstedet accepterer du at være bundet af vores privatlivspolitik, som er indarbejdet i disse servicevilkår. Vær opmærksom på, at webstedet hostes i USA. Hvis du tilgår webstedet fra en anden region i verden med love eller andre krav vedrørende indsamling, brug eller videregivelse af personoplysninger, der afviger fra gældende love i USA, overfører du dine data til USA gennem din fortsatte brug af webstedet, og du accepterer at få dine data overført til og behandlet i USA.",
    liabilityIntro:
      "Vi nævner ansvar i alle disse vilkår, men for at samle det hele i ét afsnit:",
    liabilityContent:
      "Du forstår og accepterer udtrykkeligt, at Virksomheden ikke er ansvarlig, hverken i henhold til loven eller billighedsretten, over for dig eller nogen tredjepart for direkte, indirekte, tilfældige, tabt fortjeneste, særlige, følgeskader, pønalerstatninger eller eksemplariske skader, herunder, men ikke begrænset til, erstatning for tabt fortjeneste, goodwill, brug, data eller andre immaterielle tab (selvom Virksomheden er blevet underrettet om muligheden for sådanne skader), som følge af: (1) brugen af eller manglende evne til at bruge Tjenesterne; (2) fejl, mangler eller unøjagtigheder i indhold og materialer; (3) personskade eller materiel skade af enhver art, som følge af din adgang til og brug af webstedet; (4) omkostningerne ved anskaffelse af erstatningsvarer og -tjenester som følge af varer, data, oplysninger eller tjenester købt eller erhvervet eller beskeder modtaget eller transaktioner indgået via eller fra Tjenesterne; (5) uautoriseret adgang til eller brug af vores sikre servere og/eller alle personlige oplysninger og/eller finansielle oplysninger lagret deri; (6) afbrydelse eller ophør af transmission til eller fra webstedet; (7) eventuelle fejl, vira, trojanske heste eller lignende, der måtte blive overført til eller via webstedet af tredjeparter, og/eller; (8) eventuelle fejl eller udeladelser i indhold og materialer eller for tab eller skade af enhver art, der opstår som følge af brugen af indhold, der er lagt ud, transmitteret eller på anden måde gjort tilgængeligt via webstedet; (9) udtalelser eller adfærd fra tredjeparter på tjenesten; (10) eller ethvert andet forhold vedrørende disse Servicevilkår eller Tjenesterne, uanset om det er som kontraktbrud, erstatning uden for kontrakt (herunder uagtsomhed, aktiv eller passiv) eller enhver anden ansvarsteori.",
    miscellaneousContent:
      "Disse Servicevilkår og eventuelle politikker eller driftsregler, som vi har offentliggjort på webstedet eller i forbindelse med webstedet, udgør hele aftalen og forståelsen mellem dig og os. Vores undladelse af at udøve eller håndhæve nogen rettighed eller bestemmelse i disse Servicevilkår skal ikke fungere som et afkald på en sådan rettighed eller bestemmelse. Disse Servicevilkår gælder i det videst mulige omfang, det er tilladt ved lov. Vi kan til enhver tid overdrage enhver eller alle vores rettigheder og forpligtelser til andre. Vi er ikke ansvarlige for tab, skade, forsinkelse eller undladelse af at handle forårsaget af årsager uden for vores rimelige kontrol. Hvis nogen bestemmelse eller del af en bestemmelse i disse Servicevilkår anses for at være ulovlig, ugyldig eller ikke-håndhævelig, anses denne bestemmelse eller del af bestemmelsen for at være adskilt fra disse Servicevilkår og påvirker ikke gyldigheden og håndhævelsen af eventuelle resterende bestemmelser. Der er ikke skabt noget joint venture-, partnerskabs-, ansættelses- eller agenturforhold mellem dig og os som følge af disse Servicevilkår eller brug af webstedet. Du accepterer, at disse Servicevilkår ikke vil blive fortolket imod os i kraft af at have udarbejdet dem. Du giver hermed afkald på ethvert forsvar, du måtte have baseret på den elektroniske form af disse Servicevilkår og manglen på underskrift fra parterne heri for at opfylde disse Servicevilkår.",
    contactUsContent1:
      "Hvis du har spørgsmål til nogen af servicevilkårene, bedes du venligst",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
