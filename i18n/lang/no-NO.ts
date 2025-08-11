//挪威语
let message = {
  // 首页
  HomePage: {
    home: "Hjem",
    version: "Basisversjon (Gratis):",
    times: "{times} gratis transkripsjoner per dag, {left} igjen i dag. ",
    tips: "Oppgrader til Pro for ubegrenset transkripsjon.",
    update: "Oppgrader nå",
    folders: "Mapper",
    rename: "Gi nytt navn",
    delete: "Slett",
    createTitle: "Opprett mappe",
    deleteConfirm: `Er du sikker på at du vil slette mappen og alle filene i den?`,
    cancel: "Avbryt",
    confirm: "Opprett",
    dialogLabel: "Mappenavn",
    recently: "Nylige filer",
    loading: "Laster",
    tour: {
      step0: {
        title: "Velkommen til {name}",
        tip: "Her kan du:",
        content: "Transkribere enkeltsamtaler, møter, forelesninger og mer",
        next: "Kom i gang"
      },
      step1: {
        title: "Transkriber filer",
        content:
          "Støtter tre transkripsjonsmetoder: lokale filer, lenker og opptak."
      },
      step2: {
        title: "Opprett en mappe",
        content:
          'Klikk på "+" for å opprette en mappe og organisere filene dine.'
      },
      step3: {
        title: "Vis transkripsjonsdetaljer og rediger",
        content:
          "Klikk på elementet for å vise transkripsjonsdetaljer og redigere, samt oversette det."
      },
      next: "neste",
      finish: "Forstått"
    },
    export: {
      export: "Eksporter",
      title: "Vi genererer eksporten din",
      title2: "Filen din er klar",
      singleLoadingContent: "1 fil komprimeres.",
      singleSuccessContent: "1 fil har blitt komprimert.",
      loadingContent: "{num} filer komprimeres.",
      successContent: "{num} filer har blitt komprimert.",
      cancel: "Avbryt eksporten",
      error: "Eksporteringsfeil",
      dialog: {
        title: "Advarsel",
        content: "Avbryte eksporten?",
        cancel: "Avbryt eksport",
        continue: "Fortsett eksport"
      }
    },
    welcome: {
      title: "Velkommen til Scribify!",
      description: "Her kan du:",
      transcribe:
        "Transkriber uanstrengt med Scribify—gjør talesamtaler om til klar, søkbar og delbar tekst på et øyeblikk.",
      precision:
        "Få nøyaktige transkripsjoner med talegjenkjenning og tidsstempler øyeblikkelig.",
      translate:
        "Bryt språkbarrierer: oversett transkripsjoner til mer enn 200 språk med letthet.",
      edit: "Rediger, forbedre og eksporter transkripsjoner i formater som passer dine behov.",
      collaborate: "Samarbeid ved å dele din transkriberte tekst med andre.",
      button: "Kom i gang",
      tip: "Klar til å gjøre lyd om til transkribert tekst? Begynn å utforske nå!",
      tip2: "Begynn å utforske nå!",
      tip1: "Klar til å gjøre om lyd til transkribert tekst? "
    },
    subscriptionModal: {
      left: {
        title: "Få Pro-planen for å låse opp mer",
        c1: "Ubegrenset transkripsjon",
        c2: "10 timers opplastinger",
        c3: "Høyeste prioritet",
        c4: "99% transkripsjons-nøyaktighet",
        c5: "100+ støttede språk",
        c6: "Talegjenkjenning",
        c7: "Transkripsjons-oversettelse",
        t1: "Ubegrenset transkripsjon for én person.",
        t2: "Hver fil kan være opptil 10 timer / 5 GB. Last opp 50 filer om gangen.",
        t3: "Vi vil alltid transkribere filene dine så raskt som mulig med høyeste prioritet."
      },
      right: {
        title: "Få Pro-planen",
        yearly: "Årlig",
        monthly: "Månedlig",
        save: "Spart",
        preMonth: "per måned",
        preYear: "per år",
        firstMonth: "første måned",
        afterwards: "etterpå"
      },
      subscribe: "Abonner"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Navn",
      duration: "Varighet",
      status: "Status",
      date: "Opprettelsesdato",
      activity: "Aktivitet",
      empty1: `Den er tom.`,
      empty2: `Klikk på knappen ovenfor for å transkribere en fil.`,
      just: "akkurat nå",
      export: "Eksporter",
      delete: "Slett",
      share: "Del",
      rename: "Gi nytt navn",
      move: "Flytt",
      failed: "Mislykket",
      selected: "Valgt",
      success: "Vellykket",
      fileList: "Filliste"
    },
    dialog: {
      move: {
        title: "Flytt",
        label: "Velg en mappe",
        placeholder: "Velg en mappe",
        confirm: "Flytt",
        cancel: "Avbryt"
      },
      rename: {
        title: "Gi nytt navn",
        label: "Filnavn",
        confirm: "Gi nytt navn",
        cancel: "Avbryt"
      },
      delete: {
        title: "Slett",
        file: "fil",
        files: "filer",
        label: "Bekreft sletting? Denne handlingen kan ikke angres.",
        confirm: "Slett",
        cancel: "Avbryt"
      },
      share: {
        title: "Del",
        label:
          "Alle med følgende sikre lenke kan se denne transkripsjonen og den tilknyttede mediefilen.",
        confirm: "Kopier lenke",
        success: "Kopiering vellykket"
      },
      export: {
        title: "Eksporter",
        select: "Velg formatet du trenger",
        settings: "Innstillinger",
        speaker: "Inkluder taler",
        timecodes: "Inkluder tidskoder",
        confirm: "Eksporter",
        cancel: "Avbryt",
        selectErr: "Vennligst velg ett eller flere formater"
      }
    },
    search: {
      placeholder: "Søk"
    },
    recently: "Nylig",
    record: "Ta opp",
    transcribe: "Transkriber",
    unclassified: "Uklassifiserte mapper",
    buttons: {
      transcribe: "Transkriber filer",
      url: "Transkriber lenker",
      record: "Ta opp og transkriber",
      recording: "Tar opp..."
    },
    delSuccess: "Slettet",
    create: "Opprett"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Ta opp",
      pause: "Pause",
      resume: "Fortsett",
      stop: "Stopp",
      endRecord: "Avslutt opptak",
      delete: "Slett",
      transcribe: "Transkriber",
      permissionDenied:
        "Mikrofontillatelse nektet eller enheten eksisterer ikke",
      dialog: {
        delete: {
          title: "Advarsel",
          label: "Er du sikker på at du vil slette dette opptaket?",
          confirm: "Slett",
          cancel: "Avbryt"
        },
        complete: {
          title: "Opptak fullført",
          label:
            "Opptaket har nådd 10 timer og har automatisk stoppet. Vennligst transkriber.",
          confirm: "Forstått"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkriber et nettmedium",
        title: "Lim inn lenker",
        label:
          "Lim inn medielenken fra følgende plattformer, men ikke begrenset til: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Legg til",
        cancel: "Avbryt",
        // 请输入正确的链接
        errorTitle:
          "Lenkeadressen du har oppgitt er feil. Vennligst sjekk og prøv igjen.",
        linkName: "Lenke"
      },
      file: {
        orTitle: "Transkriber et nettmedium",
        dialogTitle: "Transkriber filer",
        tip1: "Klikk for å laste opp",
        tip2: "eller dra og slipp",
        or: "eller"
      },
      del: {
        title: "Advarsel",
        content:
          "All fremgang vil gå tapt. Bekreft avbrytelse av transkripsjonen?",
        cancel: "Bekreft avbrytelse",
        confirm: "Fortsett transkribering"
      },
      files: "Filer",
      resultDialogTitle: "Transkriber filer",
      resultDialogTitle2: "Transkriber fil",
      cancel: "Avbryt",
      confirm: "Transkriber",
      return: "Tilbake",
      addMore: "Legg til mer",
      language: "Mediaspråk",
      failed: "Mislykket",
      tooLarge: "Filen er for stor.",
      linkUpload: "Laster opp...",
      fileFormat: "Filformatet er ikke tillatt",
      localFiles: "Lokale filer",
      pasteLink: "Online lenke",
      uploadErr: "Opplastingsfeil",
      hashErr: "Hash-feil",
      table: {
        status: "Status",
        file: "Fil",
        size: "Størrelse",
        noData: "Ingen data"
      },
      maxFileNum: "Antall filer kan ikke overstige {num}.",
      speaker: "Taleridentifikasjon",
      speakerLabel:
        "Merk hvert segment av transkriptet med personen som snakker."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Rediger",
    translate: "Oversett",
    showSpeaker: "Vis taler",
    showTimestamp: "Vis tidsstempel",
    share: "Del",
    shared: "delt",
    export: "Eksporter",
    speaker: "Taler_{id}",
    unassignSpeaker: "Fjern taler",
    play: "Spill av",
    save: "Lagre",
    undo: "Angre",
    redo: "Gjenta",
    confirm: "Bekreft",
    cancel: "Avbryt",
    addNew: "Legg til ny",
    createANewSpeaker: "Opprett en ny taler",
    speakerName: "Talernavn",
    addSpeaker: "Legg til taler",
    applyToAllMatchingSpeakers: "Bruk på alle samsvarende talere",
    cancelTranslation: "Avbryt oversettelse",
    showVideo: "Vis videoen",
    hideVideo: "Skjul videoen",
    langChooseV1: {
      recently: "Nylig",
      popular: "Populær",
      other: "Andre",
      searchLanguage: "Søk språk",
      noMatch: "Ingen samsvarende språk funnet",
      English: "Engelsk",
      "English(US)": "Engelsk (USA)",
      "English(UK)": "Engelsk (Storbritannia)",
      Spanish: "Spansk",
      Portuguese: "Portugisisk",
      French: "Fransk",
      Italian: "Italiensk",
      German: "Tysk",
      Dutch: "Nederlandsk",
      Polish: "Polsk",
      Danish: "Dansk",
      Japanese: "Japansk",
      Korean: "Koreansk",
      Hungarian: "Ungarsk",
      Czech: "Tsjekkisk",
      Chinese: "Kinesisk",
      Hebrew: "Hebraisk",
      Arabic: "Arabisk",
      Azerbaijani: "Aserbajdsjansk",
      Estonian: "Estisk",
      Belarusian: "Hviterussisk",
      Bulgarian: "Bulgarsk",
      Icelandic: "Islandsk",
      Bosnian: "Bosnisk",
      Persian: "Persisk",
      Russian: "Russisk",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Finnish: "Finsk",
      Kazakh: "Kasakhisk",
      Galician: "Galisisk",
      Catalan: "Katalansk",
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      Kannada: "Kannada",
      Croatian: "Kroatisk",
      Latvian: "Latvisk",
      Lithuanian: "Litauisk",
      Romanian: "Rumensk",
      Marathi: "Marathi",
      Malay: "Malayisk",
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
      Greek: "Gresk",
      Armenian: "Armensk",
      Hindi: "Hindi",
      Indonesian: "Indonesisk",
      Vietnamese: "Vietnamesisk",
      Albanian: "Albansk",
      Amharic: "Amharisk",
      Assamese: "Assamesisk",
      Occitan: "Occitan",
      Bashkir: "Bashkirisk",
      Basque: "Baskisk",
      Breton: "Breton",
      Tibetan: "Tibetansk",
      Faroese: "Færøysk",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgisk",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreolsk",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgisk",
      Malagasy: "Malagasy",
      Maltese: "Maltesisk",
      Malayalam: "Malayalam",
      Mongolian: "Mongolsk",
      Bengali: "Bengali",
      Burmese: "Burmesisk",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajik",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turkmen",
      Uzbek: "Uzbek",
      Hawaiian: "Hawaiiansk",
      "Norwegian Nynorsk": "Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesisk",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanesisk",
      Cantonese: "Kantonesisk",
      Abkhaz: "Abkhazisk",
      Afar: "Afar",
      alz: "Alzh",
      ach: "Acholi",
      awa: "Awa",
      Avaric: "Avarisk",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irsk",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetisk",
      tpi: "Tpi",
      bew: "Badawi",
      ban: "Bali",
      btx: "Bata-Karo",
      bbc: "Bata-Kotabaru",
      bts: "Bata-Simalungun",
      bci: "Bawi",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sør-Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriatisk",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Chechen",
      chk: "Chukchi",
      Chuvash: "Chuvash",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndebele",
      "South Ndebele": "Sør-Ndebele",
      dov: "Dong",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Fransk (Kanada)",
      Fijian: "Fijiansk",
      fon: "Fon",
      "Western Frisian": "Vestfriesisk",
      fur: "Friulisk",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grønlandsk",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Cahuapaneco",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisisk",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikansk",
      "crh-Latn": "Krim-Tatar (Latinsk)",
      crh: "Krim-Tatar (Syrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdisk (Kurmanji)",
      ckb: "Kurdisk (Soran)",
      trp: "Tromelin",
      ltg: "Latgalian",
      lij: "Ligurisk",
      Limburgish: "Limburgisk",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardisk",
      rom: "Romansk",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaisk (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauretiusk kreolsk",
      "mni-Mtei": "Mizo (Mtei)",
      min: "Minangkabau",
      lus: "Lusoga",
      hmn: "Hmong",
      nhe: "Navajo (Ost-Sotkav)",
      "Southern Sotho": "Sør-Sotho",
      new: "Nepali språk (Navajo)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Portugisisk (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Nord)",
      Samoan: "Samoan",
      kri: "Sierra Leonekreolsk",
      crs: "Seychelleskreolsk",
      Sango: "Sango",
      "sat-Latn": "Santali (Latinsk)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gaelisk",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight",
      Tahitian: "Tahitian",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinisk",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetian",
      Uyghur: "Uyghur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtisk",
      szl: "Silesisk",
      scn: "Sicilisk",
      hil: "Hiligaynon",
      jam: "Jamaikansk patois",
      sah: "Jakutisk",
      ace: "Acehnesisk",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (Latinsk)",
      Inuktitut: "Inuktitut (Stavelse)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Ikke funnet",
    notFundDesc: "Vi kunne ikke finne det du lette etter.",
    shareTips:
      "Alle med følgende sikre lenke kan se denne transkripsjonen og den tilknyttede mediefilen.",
    copyLink: "Kopier lenke",
    copySuccessful: "Kopiering vellykket",
    copyFail: "Kopiering mislykket",
    closeTrans: "Avbryt oversettelse",
    upgradeBtn: "Oppgrader nå",
    upgradeTip30: "Denne filen overstiger 30 minutter.",
    upgradeTipMore:
      "Oppgrader til Scribify Pro for å transkribere filer opptil 10 timer",
    errorTips: "Noe gikk galt.",
    copiedLink: "Lenken er kopiert",
    copyGotIt: "visste"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "eller", // 或
    LoginBtn: "Logg inn med e-post",
    LoginGoogle: "Logg inn med Google",
    SignupBtn: "Registrer med e-post",
    SignupGoogle: "Registrer med Google",
    SignupDes: "Registrer deg i dag og opplev magien — gratis.",
    SignupTitle: "Nøyaktig og ubegrenset transkribering",
    signup: "Registrer deg", // 注册
    sign_up: "Registrer deg", // 注册
    loginByGoogle: "Fortsett med Google", // 使用Google登录
    emailAddress: "Vennligst oppgi e-postadressen din", // 请输入您的邮箱
    createAccount: "Opprett en ny konto", // 创建账户
    accountExists: "Har du allerede en konto? ", // 已经有账户了？登录
    agreeTerm: {
      agree: "Ved å fortsette, godtar du våre {terms} og {policy}.",
      terms: "Vilkår",
      policy: "Personvernregler"
    },
    setPassword: "Angi et passord", // 设置密码
    code: "Bekreftelseskode", // 验证码
    resend: "Send på nytt", // 重新发送
    enterPassword: "Vennligst oppgi passordet ditt.", // 请输入密码
    passwordLeval: "Passordstyrke", // 密码强度
    Weak: "Svak", // 弱 中 强
    Medium: "Middels", // 弱 中 强
    Strong: "Sterk", // 弱 中 强
    confirmPassword: "Bekreft passordet ditt", // 确认密码
    invalidEmail: "Ugyldig e-postadresse", // 无效的邮箱地址
    logInDirectly:
      "Denne kontoen eksisterer allerede. Vennligst logg inn direkte.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Feil bekreftelseskode. Prøv igjen.", // 验证码错误，请重试
    atLeastSix: "Passordet må være minst 6 tegn langt.", // 密码长度至少6位
    passwordNotMatch: "Passordene samsvarer ikke. Vennligst prøv igjen.", // 密码不匹配，请重试
    login: "Logg inn", // 登录
    log_in: "Logg inn", // 登录
    log_In: "Logg Inn", // 登录
    password: "Passord", // 密码
    forgotPassword: "Glemt passordet ditt?", // 忘记密码？
    noAccount: "Har du ikke en konto?", // 没有账户？注册
    accountNotExists: "Denne kontoen eksisterer ikke.", // 账户不存在
    passwordError: "Passordfeil", // 密码错误
    sendCode: "Send bekreftelseskode", // 发送验证码
    resetPassword: "Tilbakestill passord", // 重置密码
    resetYourPassword: "Tilbakestill passordet ditt", // 重置你的密码
    newOldCantSame:
      "Det nye passordet må være forskjellig fra det gamle passordet.", // 新密码与旧密码不能相同
    passwordResetOk: "Passordet er tilbakestilt!", // 密码重置成功！
    signupToSaveProgress: "Fullfør registreringen for å lagre fremgangen din",
    tip: "Tips",
    tipContentEmail:
      "Vi har nettopp sendt innloggingspassordet for kontoen din til e-postadressen din.",
    tipContentPassword:
      "Vennligst sjekk innboksen din og logg inn med e-postadressen og passordet ditt.",
    codeToEmail:
      "Vi har nettopp sendt en verifiseringskode til e-posten din. Vennligst sjekk innboksen din og lim inn verifiseringskoden ovenfor."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Abonnementsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transkripsjoner daglig",
    uploadMinutes: "30-minutters opplastinger",
    lowerPriority: "Lavere prioritet",
    currentPlan: "Nåværende plan",
    professionalEdition: "profesjonell utgave",
    unlimitedTranscription: "Ubegrenset transkripsjon",
    unlimitedNumberOfTimes: "Ubegrenset transkripsjonsfrekvens og varighet.",
    filesUploadedAtOnce:
      "Hver fil kan være opptil 10 timer lang / 5 GB. Last opp 50 filer samtidig.",
    highestPriority: "høyeste prioritet",
    weWillGiveTheHighest:
      "Vi vil alltid transkribere filene dine så raskt som mulig med høyest prioritet.",
    theFirstMonth: "Den første måneden",
    subscribeTo: "abonner på",
    basicVersionFree: "Grunnleggende versjon (gratis)",
    return: "Tilbake",
    annualize: "årlig",
    monthly: "månedlig",
    everyYear: "hvert år",
    saved: "spart",
    byTheMonth: "per måned",
    firstMonth: "første måned",
    afterwardsEveryMonth: "Deretter hver måned",
    manageSubscription: "Administrer abonnement",
    professionalYearbook: "Profesjonelt årlig",
    professionalMonthly: "Profesjonelt månedlig",
    subscriptionWillCancelledOn: "Abonnementet ditt vil bli avsluttet",
    displayLanguage: "Visningsspråk",
    update: "Oppgrader nå",
    basicversion: "Grunnleggende versjon (Gratis)",
    daily: "{start} av {end} daglige transkripsjoner brukt",
    upgradetoPro: "Oppgrader til Pro",
    accountSetting: "Kontoinnstillinger",
    logOut: "Logg ut",
    account: "Konto",
    email: "E-post",
    id: "ID",
    password: "Passord",
    resetPassword: "Tilbakestill passord",
    logIn: "Logg inn",
    tryForFree: "Prøv gratis",
    notFund: "Ikke funnet",
    couldntFind: "Vi kunne ikke finne det du lette etter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månedlig",
    perMonth: "per måned",
    afterwards: "etterpå",
    accuracy: "transkripsjonsnøyaktighet",
    supported: "støttede språk",
    identification: "Høytaleridentifikasjon",
    transcriptSranslation: "Transkripsjonsoversettelse",
    perYear: "per år",
    getProPlan: "Få Pro-planen",
    changeToAnnual: "Bytt til årlig",
    automaticRenewalon: "Automatisk fornyelse",
    eachMonth: "Automatisk fornyelse den {time}. hver måned.",
    automaticRenewal:
      "Automatisk fornyelse mislyktes, vennligst sjekk betalingsmetoden.",
    eachYear: "Automatisk fornyelse den {time} hvert år.",
    returnAccountSetting: "Tilbake",
    needsToWaitLonger: "Vent lenger før filene dine blir transkribert.",
    freeThreeTimesDay: "Transkriber 3 filer gratis hver dag.",
    oneFileUploaded:
      "Hver fil kan være opptil 30 minutter lang. Last opp 1 fil om gangen.",
    uploadWithinHours: "10 timers opplastinger",
      yourSubscription: "Abonnementet ditt vil bli avsluttet {time}."
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesisk (forenklet)",
      "Chinese(Traditional)": "Kinesisk (tradisjonell)",
      Japanese: "Japansk",
      Danish: "Dansk",
      German: "Tysk",
      English: "Engelsk",
      Spanish: "Spansk",
      French: "Fransk",
      Italian: "Italiensk",
      Hungarian: "Ungarsk",
      Dutch: "Nederlandsk",
      Norwegian: "Norsk",
      Polish: "Polsk",
      Portuguese: "Portugisisk",
      Finnish: "Finsk",
      Swedish: "Svensk",
      Turkish: "Tyrkisk",
      Greek: "Gresk",
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
      "​Åpen kildekode Nuxt3 SaaS-mal, forhåndsintegrert med globale betalingsportaler (Stripe/Cream), Google OAuth, i18n-ruting og SEO-optimaliseringsverktøy. Designet for utviklere som lanserer flerspråklige nettapplikasjoner, tilbyr det SSR/SSG-støtte og produksjonskvalitet sikkerhet ut av boksen.",
    startLink: "Start gratis prøveversjon~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Bli med på ventelisten, få de siste NuxtPro-nyhetene først OG rabatter!",
      placeholder: "Skriv inn e-postadressen din",
      button: "Bli med på ventelisten",
      joinCountMessage:
        "🔥 Tidlig bruker #{count} har nettopp blitt med på ventelisten!"
    },
    seo: {
      title: "Åpen kildekode Nuxt SaaS-mal | NuxtPro",
      description:
        "NuxtJS-malen med alt du trenger for å få produktet ditt foran kundene. Fra idé til produksjon på 5 minutter."
    },
    api: {
      title: "dette er en demo",
      corpInfo: "bedriftsinformasjon"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videolastingsfeil"
      },
      mse: {
        code: 2,
        msg: "strømtilleggsfeil"
      },
      parse: {
        code: 3,
        msg: "analysefeil"
      },
      format: {
        code: 4,
        msg: "feil format"
      },
      decoder: {
        code: 5,
        msg: "dekodingsfeil"
      },
      runtime: {
        code: 6,
        msg: "grammatikkfeil"
      },
      timeout: {
        code: 7,
        msg: "avspillingstimeout"
      },
      other: {
        code: 8,
        msg: "andre feil"
      }
    },
    HAVE_NOTHING: "Det finnes ingen informasjon om hvorvidt lyd/video er klar",
    HAVE_METADATA: "Lyd/video metadata er klar ",
    HAVE_CURRENT_DATA:
      "Data om gjeldende avspillingsplassering er tilgjengelig, men det er ikke nok data til å spille av neste ramme/millisekund",
    HAVE_FUTURE_DATA: "Gjeldende og minst én ramme av data er tilgjengelig",
    HAVE_ENOUGH_DATA:
      "Tilgjengelige data er tilstrekkelig for å starte avspilling",
    NETWORK_EMPTY: "Lyd/video har ikke blitt initialisert",
    NETWORK_IDLE:
      "Lyd/video er aktiv og er valgt for ressurser, men ingen nettverk brukes",
    NETWORK_LOADING: "Nettleseren laster ned dataene",
    NETWORK_NO_SOURCE: "Ingen lyd/video kilde ble funnet",
    MEDIA_ERR_ABORTED: "Nedlastingsprosessen er avbrutt av brukeren",
    MEDIA_ERR_NETWORK: "Det oppstod en feil under nedlasting",
    MEDIA_ERR_DECODE: "Det oppstod en feil under dekoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Lyd/video støttes ikke",
    REPLAY: "Spill av igjen",
    ERROR: "Nettverk er frakoblet",
    PLAY_TIPS: "Spill av",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Spill neste",
    DOWNLOAD_TIPS: "Last ned",
    ROTATE_TIPS: "Roter",
    RELOAD_TIPS: "Last inn på nytt",
    FULLSCREEN_TIPS: "Gå til fullskjerm",
    EXITFULLSCREEN_TIPS: "Avslutt fullskjerm",
    CSSFULLSCREEN_TIPS: "CSS-fullskjerm",
    EXITCSSFULLSCREEN_TIPS: "Avslutt CSS-fullskjerm",
    TEXTTRACK: "Undertekst",
    PIP: "PIP",
    SCREENSHOT: "Skjermbilde",
    LIVE: "DIREKTE",
    OFF: "Av",
    OPEN: "Åpne",
    MINI_DRAG: "Klikk og hold for å dra",
    MINISCREEN: "Miniskjerm",
    REFRESH_TIPS: "Vennligst prøv",
    REFRESH: "Oppdater",
    FORWARD: "fremover",
    LIVE_TIP: "Direkte",
    TM_SUBTITLE_SHOW_TIPS: "Slå på undertekster",
    TM_SUBTITLE_HIDE_TIPS: "Slå av undertekster",
    TM_MINIMIZE_TIPS: "Skjul videoen"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Personvernerklæring",
    lastUpdated: "Sist oppdatert: 25. august 2025",
    policyDescription:
      "Denne policyen beskriver hvordan Scribify (heretter referert til som «Scribify», «vår», «vi», «oss») samler inn, bruker og utleverer din personlige informasjon når du bruker tjenestene og nettstedene våre.",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "og programvare (samlet kalt «Tjenestene»).",
    policyAgreement:
      "Vennligst les denne personvernerklæringen nøye og sørg for at du forstår den. Ved å bruke noen av tjenestene våre, godtar du denne personvernerklæringen. Hvis du ikke samtykker i vår bruk av dine personopplysninger i samsvar med denne policyen, må du umiddelbart slutte å bruke tjenestene våre.",
    policyOverview:
      "I denne policyen beskriver vi hvilke data vi samler inn og hvorfor, hvordan dataene dine håndteres, og dine rettigheter med hensyn til dataene dine. Vi selger ikke dataene dine.",
    scopeTitle: "1. Omfanget av denne personvernerklæringen",
    whatWeCollectTitle: "2. Hva vi samler inn og hvorfor",
    accessShareTitle: "3. Når vi får tilgang til eller deler informasjonen din",
    secureDataTitle: "4. Hvordan vi sikrer dataene dine",
    deleteContentTitle: "5. Hva skjer når du sletter innholdet ditt",
    locationTitle: "6. Plassering av nettsted og data",
    childrenPrivacyTitle: "7. Barns personvern",
    updatesTitle: "8. Oppdateringer av denne personvernerklæringen",
    contactUsTitle: "9. Kontakt oss",
    identityAccessTitle: "2.1 Identitet og tilgang",
    billingInfoTitle: "2.2 Faktureringsinformasjon",
    productInteractionsTitle: "2.3 Produktinteraksjoner",
    websiteInteractionsTitle: "2.4 Nettstedsinteraksjoner",
    cookiesTitle: "2.5 informasjonskapsler",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondanse",
    scopeContent:
      "Denne personvernerklæringen gjelder kun for vår innsamling og behandling av informasjon om brukere av tjenestene. Denne personvernerklæringen gjelder ikke for tjenester, nettsteder eller programvare som drives av tredjeparter og som er lenket til oss (enten vi tilbyr disse lenkene eller andre brukere deler dem), og den gjelder heller ikke for innhold, data, applikasjoner eller materiale fra tredjeparter. Vi anbefaler at du sjekker personvernerklæringen til tredjepartsnettsteder eller programvare før du gir dem informasjon.",
    collectPrinciple:
      "Vårt veiledende prinsipp er å bare samle inn det vi trenger. Her er hva det betyr i praksis:",
    identityAccessContent:
      "Når du registrerer deg for et av produktene våre, ber vi om identifiserende informasjon som navn og e-postadresse. Dette er for å kunne tilby viktig produktfunksjonalitet og sende deg produktoppdateringer og annen viktig informasjon.",
    billingInfoContent:
      "Hvis du registrerer deg for et betalt produkt, vil du bli bedt om å oppgi betalingsinformasjon og faktureringsadresse. Betalingsinformasjonen sendes direkte til betalingsbehandleren vår og når ikke serverne våre.",
    productInteractionsContent:
      "Vi lagrer innholdet du laster opp, mottar eller vedlikeholder i produktkontoene dine på serverne våre. Med mindre du sletter dette innholdet, kan vi beholde det så lenge kontoen din er aktiv.",
    websiteInteractionsContent:
      "Vi samler inn informasjon om nettleseraktiviteten din for analyse og statistiske formål, som testing av konverteringsfrekvens og eksperimentering med nye produktdesign. Dette inkluderer for eksempel nettleser- og operativsystemversjoner, IP-adressen din, hvilke nettsider du besøkte og hvor lang tid det tok å laste inn, og hvilket nettsted som henviste deg til oss. Hvis du har en konto og er logget på, er disse nettanalysedataene knyttet til IP-adressen og brukerkontoen din inntil kontoen din ikke lenger er aktiv.",
    cookiesContent1:
      "Vi bruker også vedvarende førsteparts informasjonskapsler og noen tredjeparts informasjonskapsler for å lagre visse preferanser, gjøre det enklere for deg å bruke applikasjonene våre, utføre A/B-testing samt støtte noe analyse.",
    cookiesContent2:
      "En informasjonskapsel er en tekstbit som lagres av nettleseren din. Den kan bidra til å huske innloggingsinformasjon og nettstedsinnstillinger. Den kan også samle inn informasjon som nettlesertype, operativsystem, besøkte nettsider, besøksvarighet, vist innhold og andre klikkstrømdata. Du kan justere innstillinger for oppbevaring av informasjonskapsler og godta eller blokkere individuelle informasjonskapsler i nettleserinnstillingene dine, selv om appene våre ikke vil fungere, og andre aspekter ved tjenesten vår kanskje ikke fungerer som de skal hvis du slår av informasjonskapsler.",
    voluntaryCorrespondenceContent:
      "Når du sender oss en e-post med et spørsmål eller ber om hjelp, beholder vi denne korrespondansen, inkludert e-postadressen din, slik at vi har en historikk over tidligere korrespondanse å referere til hvis du tar kontakt i fremtiden.",
    accessShareContent1:
      "For å levere produkter eller tjenester du har bedt om. Vi bruker noen tredjeparts underdatabehandlere for å kjøre applikasjonene våre og levere tjenestene til deg. Dette inkluderer leverandører av skytjenester og analysetjenester.",
    accessShareContent2:
      "For å undersøke, forhindre eller iverksette tiltak angående misbruk. Tilgang til en kundes konto når man undersøker potensielt misbruk er en siste utvei. Vi ønsker å beskytte personvernet og sikkerheten til både kundene våre og de som rapporterer problemer til oss, og vi gjør vårt beste for å balansere dette ansvaret gjennom hele prosessen. Hvis vi oppdager at du bruker produktene våre til et begrenset formål, vil vi iverksette tiltak etter behov, inkludert å varsle relevante myndigheter der det er berettiget.",
    accessShareContent3: "Når det er påkrevd i henhold til gjeldende lov.",
    userDataRequests:
      "– Forespørsler om brukerdata. Vår policy er å ikke svare på forespørsler fra myndigheter om brukerdata med mindre vi er tvunget til det av en juridisk prosess eller under begrensede omstendigheter i tilfelle en nødforespørsel. Hvis amerikanske politimyndigheter har nødvendig arrestordre, stevning eller rettskjennelse som krever at vi deler data, må vi imidlertid etterkomme dette. På samme måte vil vi bare svare på forespørsler fra myndigheter utenfor USA hvis vi er tvunget til det av den amerikanske regjeringen gjennom prosedyrer som er beskrevet i en traktat eller avtale om gjensidig juridisk bistand. Det er vår policy å varsle berørte brukere før vi deler data, med mindre vi er juridisk forbudt å gjøre det, og unntatt i noen nødstilfeller.",
    preservationRequests:
      "– Forespørsler om bevaring. På samme måte er det vår policy å kun etterkomme forespørsler om å bevare data dersom det er pålagt av den amerikanske føderale lov om lagret kommunikasjon, 18 USC paragraf 2703(f), eller av en behørig amerikansk stevning for sivile saker. Vi deler ikke bevarte data med mindre det er pålagt av loven eller pålagt av en rettskjennelse som vi velger å ikke anke. Videre, med mindre vi mottar en behørig arrestordre, rettskjennelse eller stevning før den nødvendige bevaringsperioden utløper, vil vi ødelegge eventuelle bevarte kopier av kundedata ved slutten av bevaringsperioden.",
    taxAudit:
      "– Hvis vi blir revidert av en skattemyndighet, kan vi bli pålagt å dele faktureringsrelatert informasjon. Hvis det skjer, vil vi bare dele minimumsbehovet, for eksempel faktureringsadresser og informasjon om skattefritak.",
    secureDataContent1: "Alle data er kryptert via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "når den overføres fra serverne våre til nettleseren din.",
    deleteContentContent:
      "Hvis du sletter innhold, blir det umiddelbart utilgjengelig.",
    locationContent:
      "Våre produkter og andre nettsider drives i USA. Hvis du befinner deg i EU, Storbritannia eller andre steder utenfor USA, vær oppmerksom på at all informasjon du gir oss vil bli overført til og lagret i USA. Ved å bruke våre nettsteder eller tjenester og/eller gi oss din personlige informasjon, samtykker du til denne overføringen.",
    childrenPrivacyContent:
      "Tjenestene er ikke rettet mot barn, og vi samler ikke bevisst inn personopplysninger fra barn under 13 år. Hvis du er under 13 år, må du ikke sende inn personopplysninger gjennom tjenestene. Hvis du mener at et barn har gitt oss personopplysninger i strid med disse retningslinjene, kan du kontakte oss som angitt nedenfor.",
    updatesContent:
      "Vi kan oppdatere disse retningslinjene etter behov for å overholde relevante forskrifter og gjenspeile eventuelle nye praksiser. Når vi foretar en vesentlig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden.",
    contactUsContent1:
      "Hvis du har spørsmål, kommentarer eller klager angående vår personvernerklæring, vennligst",
    contactUs: "kontakt oss",
    contactUsContent2:
      "og vi vil gjøre vårt beste for å behandle klagen din så snart som mulig."
  },
  termsOfService: {
    termsOfServiceTitle: "Vilkår for bruk",
    lastUpdated: "Sist oppdatert: 21. september 2022",
    thankYouMessage: "Takk for at du bruker produktene våre!",
    companyReference:
      "Når vi sier «Selskap», «vi», «vår» eller «oss» i dette dokumentet, refererer vi til Scribify.",
    servicesDefinition:
      "Når vi sier «tjenester», mener vi ethvert produkt som er laget og vedlikeholdt av Scribify, enten det leveres i en nettleser, et skrivebordsprogram, en mobilapplikasjon eller et annet format.",
    termsUpdateNotice:
      "Vi kan oppdatere disse tjenestevilkårene i fremtiden. Vanligvis har disse endringene vært for å tydeliggjøre noen av disse vilkårene ved å lenke til en utvidet relatert policy. Når vi gjør en betydelig endring i retningslinjene våre, vil vi oppdatere datoen øverst på denne siden og iverksette andre nødvendige tiltak for å varsle kontoinnehavere.",
    acceptanceOfAgreementTitle: "1. Godkjenning av avtalen",
    scribifyServicesTitle: "2. Scribifys tjenester",
    accountTermsTitle: "3. Kontovilkår",
    paymentRefundsTitle: "4. Betaling, refusjon og planendringer",
    cancellationTerminationTitle: "5. Avbestilling og oppsigelse",
    submissionsTitle: "6. Innsendinger",
    uptimeSecurityTitle: "7. Oppetid og sikkerhet",
    siteManagementTitle: "8. Nettstedsadministrasjon",
    copyrightContentTitle: "9. Opphavsrett og innholdseierskap",
    prohibitedActivitiesTitle: "10. Forbudte aktiviteter",
    featuresBugsTitle: "11. Funksjoner og feil",
    correctionsTitle: "12. RETTELSER",
    userDataTitle: "13. Brukerdata",
    privacyPolicyTitle: "14. Personvernerklæring",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakt oss",
    acceptanceContent1:
      "Ved å bruke tjenestene våre, indikerer du at du godtar denne avtalen, som dermed blir en bindende kontrakt mellom deg og Scribify. Du erklærer at du er juridisk i stand til å godta disse vilkårene, og bekrefter at du er myndig nok til å inngå en bindende kontrakt. Scrifys aksept er uttrykkelig betinget av at du samtykker i alle vilkårene i denne avtalen.",
    acceptanceContent2:
      "Tjenestene er ikke ment for og skal ikke brukes av noen under 18 år. Ved å bruke tjenestene erklærer og garanterer du at du oppfyller de ovennevnte kvalifikasjonskravene.",
    acceptanceContent3:
      "Begrepene «du», «din» og «deg selv» skal også omfatte dine ansatte, agenter, forretningsrepresentanter og alle andre personer som du gir tilgang til Tjenestene gjennom Kontoen din (som definert nedenfor). Du er ansvarlig for å sørge for at alle personer som får tilgang til Tjenestene gjennom Kontoen din er klar over disse Vilkårene og overholder dem.",
    acceptanceContent4:
      "Scribify forbeholder seg retten til å revidere og oppdatere disse vilkårene fra tid til annen etter eget skjønn. Alle endringer trer i kraft umiddelbart etter publisering. Din fortsatte bruk av tjenestene etter publisering av reviderte vilkår betyr at du godtar og samtykker i endringene. Du forventes å sjekke denne siden fra tid til annen, slik at du er klar over eventuelle endringer, da de er bindende for deg.",
    servicesContent1:
      "Tjenestene våre lar brukere omdanne talesamtaler til transkribert tekst som kan søkes i, oversettes og deles med andre.",
    servicesContent2:
      "Du kan velge om du vil bruke gratisversjonen av tjenestene («Gratistjenester») eller den abonnementsbaserte, betalte versjonen av tjenestene som du kan bli pålagt å betale gebyrer for («Betalte tjenester»).",
    servicesContent3:
      "Vi vil gjøre tjenestene tilgjengelige for deg. Du er ansvarlig for å gjøre alle nødvendige ordninger for at du skal ha tilgang til tjenestene.",
    accountTerms1:
      "– Du er ansvarlig for å opprettholde sikkerheten til kontoen din. Selskapet kan ikke og vil ikke være ansvarlig for tap eller skade som følge av din manglende overholdelse av denne sikkerhetsforpliktelsen.",
    accountTerms2:
      "- Du har ikke lov til å bruke Tjenestene til noe ulovlig, uetisk eller umoralsk formål.",
    accountTerms3:
      "– Du er ansvarlig for alt innhold som legges ut og aktivitet som skjer på kontoen din. Dette inkluderer innhold som legges ut av andre som enten: (a) har tilgang til påloggingsinformasjonen din; eller (b) har sine egne pålogginger på kontoen din.",
    accountTerms4:
      "– Du må være et menneske. Kontoer registrert av «boter» eller andre automatiserte metoder er ikke tillatt.",
    paymentContent1:
      "– For betalte tjenester som tilbyr en gratis prøveperiode, forklarer vi prøveperiodens lengde når du registrerer deg. Etter prøveperioden må du betale på forhånd for å fortsette å bruke tjenesten. Hvis du ikke betaler, vil disse tjenestene opphøre.",
    paymentContent2:
      "– Hvis du oppgraderer fra et gratisabonnement til et betalt abonnement, belaster vi kortet ditt umiddelbart, og faktureringsperioden starter på oppgraderingsdagen.",
    paymentContent3:
      "– Alle gebyrer er eksklusive alle skatter, avgifter eller gebyrer pålagt av skattemyndighetene. Der det er nødvendig, vil vi innkreve disse skattene på vegne av skattemyndighetene og overføre dem til skattemyndighetene. Ellers er du ansvarlig for betaling av alle skatter, avgifter eller gebyrer.",
    paymentContent4:
      "– Alle kjøp refunderes ikke. Du kan når som helst kansellere betalte tjenester ved å logge inn på kontoen din. For betalte abonnementer vil oppsigelsen tre i kraft ved utgangen av den gjeldende betalte perioden, med mindre annet er oppgitt.",
    cancellationContent1:
      "– Hvis du kansellerer Tjenesten før utløpet av en betalt periode, vil kanselleringen tre i kraft umiddelbart, og du vil ikke bli belastet igjen. Vi fordeler ikke automatisk ubrukt tid forholdsmessig i forrige faktureringsperiode.",
    cancellationContent2:
      "– Vi har rett til å suspendere eller avslutte kontoen din og nekte enhver nåværende eller fremtidig bruk av tjenestene våre uansett grunn når som helst. Suspensjon betyr at du ikke vil kunne få tilgang til kontoen eller noe innhold på kontoen. Oppsigelse vil videre føre til sletting av kontoen din eller din tilgang til kontoen din, og tap og avståelse av alt innhold på kontoen din. Vi forbeholder oss også retten til å nekte bruk av tjenestene til hvem som helst uansett grunn når som helst. Vi har denne klausulen fordi statistisk sett, av hundretusenvis av kontoer på tjenestene våre, er det minst én som gjør noe skumelt.",
    cancellationContent3:
      "- Verbal, fysisk, skriftlig eller annen mishandling (inkludert trusler om mishandling eller gjengjeldelse) av selskapets ansatt eller leder kan føre til umiddelbar oppsigelse av kontoen.",
    submissionsContent:
      "Du erkjenner og samtykker i at eventuelle spørsmål, kommentarer, forslag, ideer, tilbakemeldinger eller annen informasjon angående nettstedet («bidrag») som du gir oss, ikke er konfidensielle og skal bli vår eiendom. Vi skal eie eksklusive rettigheter, inkludert alle immaterielle rettigheter, og skal ha rett til ubegrenset bruk og formidling av disse bidragene for ethvert lovlig formål, kommersielt eller annet, uten bekreftelse eller kompensasjon til deg. Du fraskriver deg herved alle moralske rettigheter til slike bidrag, og du garanterer herved at slike bidrag er originale fra deg, eller at du har rett til å sende inn slike bidrag. Du samtykker i at det ikke skal være noen regressrett mot oss for påstått eller faktisk krenkelse eller misbruk av noen eiendomsrett i dine bidrag.",
    uptimeContent1:
      "– Din bruk av tjenestene skjer på egen risiko. Vi tilbyr disse tjenestene «som de er» og «som tilgjengelig». Vi tilbyr ikke tjenestenivåavtaler for de fleste av tjenestene våre, men tar oppetiden til applikasjonene våre på alvor.",
    uptimeContent2:
      "– Vi forbeholder oss retten til å midlertidig deaktivere kontoen din dersom bruken din overstiger den vanlige bruken til andre kunder av tjenestene betydelig. Vi vil selvfølgelig kontakte deg før vi iverksetter tiltak, bortsett fra i sjeldne tilfeller der bruksnivået kan påvirke ytelsen til tjenesten negativt for andre kunder.",
    uptimeContent3:
      "– Vi tar mange tiltak for å beskytte og sikre dataene dine gjennom sikkerhetskopiering, redundans og kryptering. Vi håndhever kryptering for dataoverføring over det offentlige internett.",
    uptimeContent4:
      "– Vi bruker tredjepartsleverandører og hostingpartnere til å levere nødvendig maskinvare, programvare, nettverk, lagring og relatert teknologi som kreves for å kjøre Tjenestene.",
    siteManagementContent:
      "Vi forbeholder oss retten, men ikke plikten, til å: (1) overvåke nettstedet for brudd på disse tjenestevilkårene; (2) iverksette passende rettslige skritt mot alle som, etter eget skjønn, bryter loven eller disse tjenestevilkårene, inkludert, men ikke begrenset til, å rapportere en slik bruker til politimyndigheter; (3) etter eget skjønn og uten begrensning, nekte, begrense tilgang til, begrense tilgjengeligheten til eller deaktivere (i den grad det er teknologisk mulig) noen av dine bidrag eller deler av disse; (4) etter eget skjønn og uten begrensning, varsel eller ansvar, fjerne fra nettstedet eller på annen måte deaktivere alle filer og innhold som er for store eller på noen måte er byrdefulle for våre systemer; og (5) ellers administrere nettstedet på en måte som er utformet for å beskytte våre rettigheter og eiendom og for å legge til rette for at nettstedet fungerer som det skal.",
    copyrightContent1:
      "– Alt innhold som legges ut på Tjenestene må være i samsvar med amerikansk lov om opphavsrett.",
    copyrightContent2:
      "– Vi gjør ikke krav på noen immaterielle rettigheter over materialet du leverer til tjenestene. Alt materiale som lastes opp forblir ditt.",
    copyrightContent3:
      "– Vi forhåndssjekker ikke innhold, men forbeholder oss retten (men ikke plikten) til etter eget skjønn å nekte eller fjerne innhold som er tilgjengelig via Tjenesten.",
    copyrightContent4:
      "– Navnene, utseendet og følelsen av tjenestene er opphavsrettsbeskyttet © til selskapet. Alle rettigheter forbeholdt. Du kan ikke duplisere, kopiere eller gjenbruke noen del av HTML-, CSS-, JavaScript- eller visuelle designelementer uten uttrykkelig skriftlig tillatelse fra selskapet. Du må be om tillatelse til å bruke selskapets logo eller noen tjenestelogoer til markedsføringsformål. Vennligst",
    emailUs: "e-post oss",
    copyrightContent5:
      "forespørsler om bruk av logoer. Vi forbeholder oss retten til å trekke tilbake denne tillatelsen hvis du bryter disse tjenestevilkårene.",
    copyrightContent6:
      "- Du samtykker i å ikke reprodusere, duplisere, kopiere, selge, videreselge eller utnytte noen del av Tjenestene, bruk av Tjenestene eller tilgang til Tjenestene uten uttrykkelig skriftlig tillatelse fra Selskapet.",
    copyrightContent7:
      "– Du må ikke endre et annet nettsted på en feilaktig måte antyde at det er tilknyttet Tjenestene eller Selskapet.",
    copyrightContent8:
      "– Vi respekterer andres immaterielle rettigheter. Hvis du mener at materiale som er tilgjengelig på eller gjennom nettstedet krenker opphavsretten du eier eller kontrollerer, ber vi deg umiddelbart om å",
    contactUs: "kontakt oss",
    copyrightContent9:
      "En kopi av varselet ditt vil bli sendt til personen som la ut eller lagret materialet som er omtalt i varselet. Vær oppmerksom på at du i henhold til gjeldende lov kan bli holdt ansvarlig for erstatning dersom du gir vesentlige feilaktige fremstillinger i et varsel. Hvis du derfor ikke er sikker på om materiale som ligger på eller lenkes til av nettstedet krenker opphavsretten din, bør du først vurdere å kontakte en advokat.",
    prohibitedActivitiesIntro:
      "Du har ikke tillatelse til å få tilgang til eller bruke nettstedet til noe annet formål enn det vi gjør nettstedet tilgjengelig for. Nettstedet kan ikke brukes i forbindelse med kommersielle tiltak, bortsett fra de som er spesifikt anbefalt eller godkjent av oss.",
    prohibitedActivitiesUserAgreement:
      "Som bruker av nettstedet samtykker du i å ikke:",
    prohibitedActivity1:
      "- Systematisk hente data eller annet innhold fra nettstedet for å opprette eller kompilere, direkte eller indirekte, en samling, sammenstilling, database eller katalog uten skriftlig tillatelse fra oss.",
    prohibitedActivity2:
      "- Lure, bedra eller villede oss og andre brukere, spesielt i forsøk på å få tilgang til sensitiv kontoinformasjon som brukerpassord.",
    prohibitedActivity3:
      "- Omgå, deaktivere eller på annen måte forstyrre sikkerhetsrelaterte funksjoner på nettstedet, inkludert funksjoner som forhindrer eller begrenser bruk eller kopiering av innhold eller håndhever begrensninger på bruken av nettstedet og/eller innholdet der.",
    prohibitedActivity4:
      "- Nedsette, sverte eller på annen måte skade oss og/eller nettstedet etter vår mening.",
    prohibitedActivity5:
      "- Bruke informasjon innhentet fra nettstedet til å trakassere, misbruke eller skade en annen person.",
    prohibitedActivity6:
      "- Gjøre upassende bruk av våre støttetjenester eller sende inn falske rapporter om misbruk eller misbruk.",
    prohibitedActivity7:
      "- Bruke nettstedet på en måte som er uforenlig med gjeldende lover eller forskrifter.",
    prohibitedActivity8:
      "- Delta i uautorisert innramming av eller lenking til nettstedet.",
    prohibitedActivity9:
      "- Laste opp eller overføre (eller forsøke å laste opp eller overføre) virus, trojanske hester eller annet materiale, inkludert overdreven bruk av store bokstaver og spamming (kontinuerlig publisering av repeterende tekst), som forstyrrer en parts uavbrutte bruk og glede av nettstedet, eller som modifiserer, svekker, forstyrrer, endrer eller forstyrrer bruken, funksjonene, driften eller vedlikeholdet av nettstedet.",
    prohibitedActivity10:
      "- Delta i automatisert bruk av systemet, for eksempel bruk av skript for å sende kommentarer eller meldinger, eller bruk av datautvinning, roboter eller lignende verktøy for datainnsamling og -utvinning.",
    prohibitedActivity11:
      "- Slett opphavsretts- eller annen eiendomsrettserklæring fra alt innhold.",
    prohibitedActivity12:
      "- Forsøke å utgi seg for å være en annen bruker eller person, eller bruke brukernavnet til en annen bruker.",
    prohibitedActivity13:
      "- Laste opp eller overføre (eller forsøke å laste opp eller overføre) materiale som fungerer som en passiv eller aktiv informasjonsinnsamlings- eller overføringsmekanisme, inkludert, men ikke begrenset til, klare grafikkutvekslingsformater (&quot;gifs&quot;), 1×1-piksler, web bugs, informasjonskapsler eller andre lignende enheter (noen ganger referert til som &quot;spyware&quot; eller &quot;passive innsamlingsmekanismer&quot; eller &quot;pcms&quot;).",
    prohibitedActivity14:
      "- Forstyrre, avbryte eller skape en urimelig belastning på nettstedet eller nettverkene eller tjenestene som er koblet til nettstedet.",
    prohibitedActivity15:
      "- Trakassere, irritere, skremme eller true noen av våre ansatte eller agenter som er involvert i å tilby deg deler av nettstedet.",
    prohibitedActivity16:
      "- Forsøke å omgå eventuelle tiltak på nettstedet som er utformet for å forhindre eller begrense tilgang til nettstedet, eller deler av nettstedet.",
    prohibitedActivity17:
      "- Kopiere eller tilpasse nettstedets programvare, inkludert, men ikke begrenset til, Flash, PHP, HTML, JavaScript eller annen kode.",
    prohibitedActivity18:
      "- Med unntak av det som er tillatt i henhold til gjeldende lov, dechiffrere, dekompilere, demontere eller omvendt utvikle programvare som omfatter eller på noen måte utgjør en del av nettstedet.",
    prohibitedActivity19:
      "- Med unntak av det som måtte være et resultat av standard bruk av søkemotorer eller nettlesere, bruke, lansere, utvikle eller distribuere automatiserte systemer, inkludert, men ikke begrenset til, spider-programmer, roboter, jukseverktøy, skrapere eller offline-lesere som får tilgang til nettstedet, eller bruk eller lansering av uautoriserte skript eller annen programvare.",
    prohibitedActivity20:
      "- Bruk en innkjøpsagent eller innkjøpsagent for å foreta kjøp på nettstedet.",
    prohibitedActivity21:
      "- Foreta uautorisert bruk av nettstedet, inkludert innsamling av brukernavn og/eller e-postadresser til brukere elektronisk eller på andre måter med det formål å sende uønsket e-post, eller opprette brukerkontoer automatisk eller under falske forutsetninger.",
    prohibitedActivity22:
      "- Bruke nettstedet som en del av enhver innsats for å konkurrere med oss eller på annen måte bruke nettstedet og/eller innholdet til inntektsgenererende oppgaver eller kommersielle foretak.",
    prohibitedActivity23:
      "- Bruk nettstedet til å annonsere eller tilby salg av varer og tjenester.",
    prohibitedActivity24: "- Selg eller overfør profilen din på annen måte.",
    featuresContent1:
      "Vi utformer tjenestene våre med omhu, basert på vår egen erfaring og erfaringene til kunder som deler sin tid og tilbakemeldinger. Det finnes imidlertid ingen tjeneste som tilfredsstiller alle. Vi gir ingen garantier for at tjenestene våre vil oppfylle dine spesifikke krav eller forventninger.",
    featuresContent2:
      "Vi tester også alle funksjonene våre før vi sender dem ut. Som med all programvare, inneholder tjenestene våre uunngåelig noen feil. Vi sporer feilene som rapporteres til oss og jobber med dem, spesielt de som er relatert til sikkerhet eller personvern. Ikke alle rapporterte feil vil bli rettet, og vi garanterer ikke helt feilfrie tjenester.",
    correctionsContent1:
      "Det kan være informasjon på nettstedet som inneholder typografiske feil, unøyaktigheter eller utelatelser, inkludert beskrivelser, priser, tilgjengelighet og diverse annen informasjon. Vi forbeholder oss retten til å korrigere eventuelle feil, unøyaktigheter eller utelatelser og til å endre eller oppdatere informasjonen på nettstedet når som helst, uten forvarsel.",
    correctionsContent2:
      "Vi kan ikke garantere at nettstedet vil være tilgjengelig til enhver tid. Vi kan oppleve problemer med maskinvare, programvare eller andre problemer, eller måtte utføre vedlikehold knyttet til nettstedet, noe som kan føre til avbrudd, forsinkelser eller feil. Vi forbeholder oss retten til å endre, revidere, oppdatere, suspendere, avvikle eller på annen måte modifisere nettstedet når som helst og av en hvilken som helst grunn uten varsel til deg. Du samtykker i at vi ikke har noe ansvar for tap, skade eller ulempe forårsaket av din manglende evne til å få tilgang til eller bruke nettstedet under nedetid eller avvikling av nettstedet. Ingenting i disse tjenestevilkårene skal tolkes slik at vi forplikter oss til å vedlikeholde og støtte nettstedet eller til å levere rettelser, oppdateringer eller utgivelser i forbindelse med dette.",
    userDataContent:
      "Vi vil lagre visse data du overfører til nettstedet med det formål å administrere nettstedets ytelse, samt data knyttet til din bruk av nettstedet. Selv om vi regelmessig sikkerhetskopierer data, er du eneansvarlig for alle data du overfører eller som er relatert til aktivitet du har utført ved bruk av nettstedet. Du samtykker i at vi ikke har noe ansvar overfor deg for tap eller ødeleggelse av slike data, og du fraskriver deg herved enhver rett til å reise søksmål mot oss som følge av slikt tap eller ødeleggelse av slike data.",
    privacyPolicyContent1:
      "Vi bryr oss om personvern og sikkerhet. Vennligst les vår",
    privacyPolicy: "Personvernerklæring",
    privacyPolicyContent2:
      "Ved å bruke nettstedet godtar du å være bundet av vår personvernerklæring, som er innlemmet i disse tjenestevilkårene. Vær oppmerksom på at nettstedet er vertskap for i USA. Hvis du besøker nettstedet fra en annen region i verden med lover eller andre krav som regulerer innsamling, bruk eller utlevering av personopplysninger som avviker fra gjeldende lover i USA, overfører du gjennom din fortsatte bruk av nettstedet dine data til USA, og du samtykker i at dataene dine overføres til og behandles i USA.",
    liabilityIntro:
      "Vi nevner ansvar gjennomgående i disse vilkårene, men for å samle alt i én seksjon:",
    liabilityContent:
      "Du forstår og samtykker uttrykkelig i at Selskapet ikke skal være ansvarlig, verken i henhold til lov eller billighetsrett, overfor deg eller noen tredjepart for direkte, indirekte, tilfeldige, tapte fortjeneste, spesielle, følgeskader, straffende eller eksemplariske erstatninger, inkludert, men ikke begrenset til, erstatning for tapt fortjeneste, goodwill, bruk, data eller andre immaterielle tap (selv om Selskapet har blitt informert om muligheten for slike skader), som følge av: (1) bruk eller manglende evne til å bruke Tjenestene; (2) feil, mangler eller unøyaktigheter i innhold og materiale; (3) personskade eller skade på eiendom, av noen art, som følge av din tilgang til og bruk av nettstedet; (4) kostnaden for anskaffelse av erstatningsvarer og -tjenester som følge av varer, data, informasjon eller tjenester kjøpt eller innhentet eller meldinger mottatt eller transaksjoner inngått gjennom eller fra Tjenestene; (5) uautorisert tilgang til eller bruk av våre sikre servere og/eller all personlig informasjon og/eller finansiell informasjon lagret der; (6) avbrudd eller opphør av overføring til eller fra nettstedet; (7) eventuelle feil, virus, trojanske hester eller lignende som kan overføres til eller gjennom nettstedet av en tredjepart, og/eller; (8) eventuelle feil eller utelatelser i innhold og materialer eller for tap eller skade av noe slag som følge av bruk av innhold som er lagt ut, overført eller på annen måte gjort tilgjengelig via nettstedet; (9) uttalelser eller oppførsel fra en tredjepart på tjenesten; (10) eller andre forhold knyttet til disse tjenestevilkårene eller tjenestene, enten som kontraktsbrudd, erstatningsansvar (inkludert aktiv eller passiv uaktsomhet) eller annen ansvarsteori.",
    miscellaneousContent:
      "Disse tjenestevilkårene og eventuelle retningslinjer eller driftsregler som er lagt ut av oss på nettstedet eller i forbindelse med nettstedet, utgjør hele avtalen og forståelsen mellom deg og oss. Dersom vi ikke utøver eller håndhever noen rettighet eller bestemmelse i disse tjenestevilkårene, skal dette ikke anses som en fraskrivelse av en slik rettighet eller bestemmelse. Disse tjenestevilkårene gjelder i den grad loven tillater det. Vi kan når som helst overdra noen eller alle våre rettigheter og forpliktelser til andre. Vi er ikke ansvarlige for tap, skade, forsinkelse eller unnlatelse av å handle forårsaket av årsaker utenfor vår rimelige kontroll. Hvis noen bestemmelse eller del av en bestemmelse i disse tjenestevilkårene anses å være ulovlig, ugyldig eller ikke-håndhevbar, anses denne bestemmelsen eller delen av bestemmelsen å være atskilt fra disse tjenestevilkårene og påvirker ikke gyldigheten og håndhevbarheten av eventuelle gjenværende bestemmelser. Det oppstår ikke noe joint venture-, partnerskaps-, ansettelses- eller agenturforhold mellom deg og oss som følge av disse tjenestevilkårene eller bruk av nettstedet. Du samtykker i at disse tjenestevilkårene ikke skal tolkes mot oss i kraft av at vi har utarbeidet dem. Du frasier deg herved ethvert forsvar du måtte ha basert på den elektroniske formen av disse tjenestevilkårene og mangelen på signering fra partene heri for å undertegne disse tjenestevilkårene.",
    contactUsContent1:
      "Hvis du har et spørsmål om noen av tjenestevilkårene, vennligst",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
