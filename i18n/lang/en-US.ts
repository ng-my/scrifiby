let message = {
  // 首页
  HomePage: {
    home: "Home",
    version: "Basic version（Free）:",
    times:
      "Free transcription {times} times a day,you have {left} transcription left. ",
    tips: "Upgrade to Pro for unlimited transcriptions.",
    update: "Upgrade Now",
    folders: "Folders",
    rename: "Rename",
    delete: "Delete",
    createTitle: "Create folder",
    deleteConfirm: `Are you sure you want to delete the folder and all files in it?`,
    cancel: "Cancel",
    confirm: "Create",
    dialogLabel: "Folder name",
    recently: "Recently Files",
    tour: {
      step0: {
        title: "Welcome to {name}",
        tip: "Here, you can:",
        content:
          "Transcribe one-off conversations, meetings, lectures and more",
        next: "Get Started"
      },
      step1: {
        title: "Transcribe Files",
        content:
          "Supports three transcription methods: local files, links, and recordings."
      },
      step2: {
        title: "Create a folder",
        content: 'Click the "+" to create a folder and organize your files.'
      },
      step3: {
        title: "View transcription details and edit",
        content:
          "Click the item to view transcription details and edit, translate it as well."
      },
      next: "next",
      finish: "Got it"
    },
    export: {
      export: "Export",
      title: "We're generating your export",
      title2: "Your file is ready",
      singleLoadingContent: "1 file is being compressed.",
      singleSuccessContent: "1 file has been compressed..",
      loadingContent: "{num} files are being compressed.",
      successContent: "{num} files have been compressed.",
      cancel: "Cancel the export",
      error: "Export Error",
      dialog: {
        title: "Warning",
        content: "Cancel the export?",
        cancel: "Cancel Export",
        continue: "Continue Export"
      }
    },
    welcome: {
      title: "Welcome to Scribify!",
      description: "Here, you can:",
      transcribe:
        "Effortlessly transcribe with Scribify—turn voice conversations into clear, searchable, and shareable text in a flash.",
      precision:
        "Get precise transcripts with speakers and timestamps instantly.",
      translate:
        "Break language barriers: translate transcripts into more than 200 languages with ease.",
      edit: "Edit, refine, and export your transcripts in formats that fit your needs.",
      collaborate: "Collaborate by sharing your transcribed text with others.",
      button: "Get Started",
      tip: "Ready to turn audio into transcribed text? Start exploring now!"
    },
    subscriptionModal: {
      left: {
        title: "Get Pro Plan to unlock more",
        c1: "Unlimited Transcriptions",
        c2: "10 Hour Uploads",
        c3: "Highest Priority",
        c4: "99% transcription accuracy",
        c5: "100+ languages supported",
        c6: "Speaker identification",
        c7: "Transcript translation",
        t1: "Unlimited transcriptions for one person.",
        t2: "Each file can be up to 10 hours long / 5 GB. Upload 50 files at a time.",
        t3: "We'll always transcribe your files ASAP with the highest priority."
      },
      right: {
        title: "Get Pro Plan",
        yearly: "Yearly",
        monthly: "Monthly",
        save: "Saved",
        preMonth: "pre month",
        preYear: "pre year",
        firstMonth: "first month",
        afterwards: "afterwards"
      },
      subscribe: "Subscribe"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Name",
      duration: "Duration",
      status: "Status",
      date: "Date Created",
      activity: "Activity",
      empty1: `It is empty.`,
      empty2: `Click the button above to transcribe a file.`,
      just: "just",
      export: "Export",
      delete: "Delete",
      share: "Share",
      rename: "Rename",
      move: "Move",
      failed: "Failed",
      selected: "Selected",
      success: "Success"
    },
    dialog: {
      move: {
        title: "Move",
        label: "Choose a folder",
        placeholder: "Choose a folder",
        confirm: "Move",
        cancel: "Cancel"
      },
      rename: {
        title: "Rename",
        label: "File Name",
        confirm: "Rename",
        cancel: "Cancel"
      },
      delete: {
        title: "Delete",
        file: "file",
        files: "files",
        label: "Confirm deletion? This action cannot be undone.",
        confirm: "Delete",
        cancel: "Cancel"
      },
      share: {
        title: "Share",
        label:
          "Anyone with the following secure link can view this transcript and the associated media file.",
        confirm: "Copy Link",
        success: "Copy successful"
      },
      export: {
        title: "Export",
        select: "Select one or more formats",
        settings: "Settings",
        speaker: "Include speaker",
        timecodes: "Include timecodes",
        confirm: "Export",
        cancel: "Cancel",
        selectErr: "Please select one or more formats"
      }
    },
    search: {
      placeholder: "Search"
    },
    recently: "Recently",
    record: "Record",
    transcribe: "Transcribe",
    unclassified: "Unclassified folders",
    buttons: {
      transcribe: "Transcribe Files",
      url: "Transcribe Links",
      record: "Record and Transcribe",
      recording: "Recording..."
    },
    delSuccess: "Deleted successfully",
    create: "Create"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Record",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      delete: "Delete",
      transcribe: "Transcribe",
      permissionDenied: "Microphone permission denied or device does not exist",
      dialog: {
        delete: {
          title: "Warning",
          label: "Are you sure you want to delete this recording?",
          confirm: "Delete",
          cancel: "Cancel"
        },
        complete: {
          title: "Recording Completed",
          label:
            "The recording has reached 10 hours and has automatically stopped. Please transcribe.",
          confirm: "Got It"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcribe an online media",
        title: "Paste links",
        label:
          "Paste the media link of the following platforms but not limited to: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Transcribe",
        cancel: "Cancel",
        // 请输入正确的链接
        errorTitle:
          "The link address you entered is incorrect. Please check and try again.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transcribe an online media",
        dialogTitle: "Transcribe Files",
        tip: "Click to upload or drag and drop",
        or: "or"
      },
      del: {
        title: "Warning",
        content:
          "All progress will be lost. Confirm cancelling the transcription?",
        cancel: "Confirm Cancel",
        confirm: "Continue Transcribing"
      },
      files: "Files",
      resultDialogTitle: "Transcribe Files",
      cancel: "Cancel",
      confirm: "Transcribe",
      return: "Return",
      addMore: "Add more",
      language: "Audio Language",
      failed: "Failed",
      tooLarge: "The file is too large.",
      fileFormat: "File format is not allowed",
      localFiles: "Local files",
      pasteLink: "Paste links",
      uploadErr: "Upload Error",
      hashErr: "Hash Error",
      table: {
        status: "Status",
        file: "File",
        size: "Size",
        noData: "No data"
      },
      maxFileNum: "The number of files cannot exceed {num}.",
      speaker: "Speaker Identification",
      speakerLabel:
        "Labels each section of the transcript with who is speaking."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Edit",
    translate: "Translate",
    showSpeaker: "Show Speaker",
    showTimestamp: "Show Timestamp",
    share: "Share",
    shared: "shared",
    export: "Export",
    speaker: "Speaker_{ id }",
    unassignSpeaker: "Unassign speaker",
    play: "Play",
    save: "Save",
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    cancel: "Cancel",
    addNew: "Add New",
    createANewSpeaker: "Create A New Speaker",
    speakerName: "Speaker Name",
    addSpeaker: "Add Speaker",
    applyToAllMatchingSpeakers: "Apply To All Matching Speakers",
    cancelTranslation: "Cancel Translation",
    showVideo: "Show the Video",
    hideVideo: "Hide the Video",
    langChooseV1: {
      recently: "Recently",
      popular: "Popular",
      other: "Other",
      searchLanguage: "Search Language",
      noMatch: "No matching languages found",
      English: "English",
      "English(US)": "English(US)",
      "English(UK)": "English(UK)",
      Spanish: "Spanish",
      Portuguese: "Portuguese",
      French: "French",
      Italian: "Italian",
      German: "German",
      Dutch: "Dutch",
      Polish: "Polish",
      Danish: "Danish",
      Japanese: "Japanese",
      Korean: "Korean",
      Hungarian: "Hungarian",
      Czech: "Czech",
      Chinese: "Chinese",
      Hebrew: "Hebrew",
      Arabic: "Arabic",
      Azerbaijani: "Azerbaijani",
      Estonian: "Estonian",
      Belarusian: "Belarusian",
      Bulgarian: "Bulgarian",
      Icelandic: "Icelandic",
      Bosnian: "Bosnian",
      Persian: "Persian",
      Russian: "Russian",
      "Chinese(Traditional)": "Chinese(Traditional)",
      Finnish: "Finnish",
      Kazakh: "Kazakh",
      Galician: "Galician",
      Catalan: "Catalan",
      "Chinese(Simplified)": "Chinese(Simplified)",
      Kannada: "Kannada",
      Croatian: "Croatian",
      Latvian: "Latvian",
      Lithuanian: "Lithuanian",
      Romanian: "Romanian",
      Marathi: "Marathi",
      Malay: "Malay",
      Macedonian: "Macedonian",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norwegian",
      Swedish: "Swedish",
      Serbian: "Serbian",
      Slovak: "Slovak",
      Slovenian: "Slovenian",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Turkish",
      Welsh: "Welsh",
      Urdu: "Urdu",
      Ukrainian: "Ukrainian",
      Greek: "Greek",
      Armenian: "Armenian",
      Hindi: "Hindi",
      Indonesian: "Indonesian",
      Vietnamese: "Vietnamese",
      Albanian: "Albanian",
      Amharic: "Amharic",
      Assamese: "Assamese",
      Occitan: "Occitan",
      Bashkir: "Bashkir",
      Basque: "Basque",
      Breton: "Breton",
      Tibetan: "Tibetan",
      Faroese: "Faroese",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgian",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitian Creole",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxembourgish",
      Malagasy: "Malagasy",
      Maltese: "Maltese",
      Malayalam: "Malayalam",
      Mongolian: "Mongolian",
      Bengali: "Bengali",
      Burmese: "Burmese",
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
      Hawaiian: "Hawaiian",
      "Norwegian Nynorsk": "Norwegian Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Yiddish",
      Yoruba: "Yoruba",
      Javanese: "Javanese",
      Cantonese: "Cantonese",
      Abkhaz: "Abkhaz",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irish",
      Oriya: "Odia",
      Oromo: "Oromo",
      Ossetian: "Ossetian",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinese",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Northern Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Meadow Mari",
      Chamorro: "Chamorro",
      Chechen: "Chechen",
      chk: "Chuukese",
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
      "ndc-ZW": "Ndau",
      "South Ndebele": "South Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'ko",
      "French(Canada)": "French (Canada)",
      Fijian: "Fijian",
      fon: "Fon",
      "Western Frisian": "Western Frisian",
      fur: "Friulian",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Kalaallisut",
      gom: "Goan Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kyrgyz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corsican",
      "crh-Latn": "Crimean Tatar (Latin)",
      crh: "Crimean Tatar (Cyrillic)",
      Quechua: "Quechua",
      Kurdish: "Kurdish (Kurmanji)",
      ckb: "Kurdish (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgalian",
      lij: "Ligurian",
      Limburgish: "Limburgish",
      Kirundi: "Rundi",
      luo: "Luo",
      Luganda: "Ganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romany",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malay (Jawi)",
      Marshallese: "Marshallese",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritian Creole",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Eastern Huasteca Nahuatl",
      "Southern Sotho": "Southern Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portuguese (Portugal)",
      Chichewa: "Chewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Northern Sami",
      Samoan: "Samoan",
      kri: "Krio",
      crs: "Seychellois Creole",
      Sango: "Sango",
      "sat-Latn": "Santali (Latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Scottish Gaelic",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latin)",
      Tahitian: "Tahitian",
      Tonga: "Tongan",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvan",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetian",
      Uyghur: "Uyghur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesian",
      scn: "Sicilian",
      hil: "Hiligaynon",
      jam: "Jamaican Creole",
      sah: "Yakut",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (Latin)",
      Inuktitut: "Inuktitut (Syllabics)",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Not Found",
    notFundDesc: "We couldn't find what you were looking for.",
    shareTips:
      "Anyone with the following secure link can view this transcript and the associated media file.",
    copyLink: "Copy Link",
    copySuccessful: "Copy successful",
    copyFail: "Copy fail",
    closeTrans: "Cancel Translation",
    upgradeBtn: "Upgrade Now",
    upgradeTip30: "This file exceeds 30 minutes.",
    upgradeTipMore:
      "Upgrade to Scribify Pro to transcribe files up to 10 hours in length"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "or", // 或
    signup: "Signup", // 注册
    sign_up: "Sign up", // 注册
    loginByGoogle: "Continue with Google", // 使用Google登录
    emailAddress: "Please enter your email address", // 请输入您的邮箱
    createAccount: "Create a new account", // 创建账户
    accountExists: "Already have an account? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "By using {proName}, you agree to the {terms} and {policy}.",
      terms: "Terms of Service",
      policy: "Privacy Policy"
    },
    setPassword: "Set a password", // 设置密码
    code: "Verification code", // 验证码
    resend: "Resend", // 重新发送
    codeToEmail:
      "We have just sent a temporary sign up code to your email. Please check your inbox and paste the sign up code above.", // 我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。
    enterPassword: "Please enter your password.", // 请输入密码
    passwordLeval: "Password level", // 密码强度
    Weak: "Weak", // 弱 中 强
    Medium: "Medium", // 弱 中 强
    Strong: "Strong", // 弱 中 强
    confirmPassword: "Confirm your password", // 确认密码
    invalidEmail: "Invalid email address", // 无效的邮箱地址
    logInDirectly: "This account already exists. Please log in directly.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Verification code error. Try again.", // 验证码错误，请重试
    atLeastSix: "Password must be at least 6 characters long.", // 密码长度至少6位
    passwordNotMatch: "Passwords do not match. Please try again.", // 密码不匹配，请重试
    login: "Login", // 登录
    log_in: "Log in", // 登录
    log_In: "Log In", // 登录
    password: "Password", // 密码
    forgotPassword: "Forgot your password?", // 忘记密码？
    noAccount: "Don't have an account？", // 没有账户？注册
    accountNotExists: "This account does not exist.", // 账户不存在
    passwordError: "Password error", // 密码错误
    sendCode: "Send verification code", // 发送验证码
    resetPassword: "Reset password", // 重置密码
    resetYourPassword: "Reset your password", // 重置你的密码
    newOldCantSame: "The new password must be different from the old password.", // 新密码与旧密码不能相同
    passwordResetOk: "Password reset successfully！" // 密码重置成功！
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Subscription plan",
    freeversion: "Free",
    transcribeTimesDay: "3 Transcripts Daily",
    freeThreeTimesDay: "ranscribe 3 files for free every day.",
    uploadMinutes: "30 Minute Uploads",
    oneFileUploaded:
      "Each file can be up to 30 minutes long, with one file uploaded at a time",
    lowerPriority: "Lower priority",
    needsToWaitLonger:
      "3 Transcripts Daily Wait longer before your files are transcribed.",
    currentPlan: "Current plan",
    professionalEdition: "professional edition",
    unlimitedTranscription: "Unlimited transcription",
    unlimitedNumberOfTimes: "Unlimited transcriptions for one person.",
    uploadWithinHours: "Upload within 10 hours",
    filesUploadedAtOnce:
      "Each file can be up to 10 hours long / 5 GB. Upload 50 files at a time.",
    highestPriority: "highest priority",
    weWillGiveTheHighest:
      "We'll always transcribe your files ASAP with the highest priority.",
    theFirstMonth: "The first month",
    subscribeTo: "subscribe to",
    basicVersionFree: "Basic version (free)",
    return: "Return",
    annualize: "annualize",
    monthly: "monthly",
    everyYear: "every year",
    saved: "saved",
    byTheMonth: "byTheMonth",
    firstMonth: "first month",
    afterwardsEveryMonth: "Afterwards, every month",
    manageSubscription: "Manage Subscription",
    professionalYearbook: "Professional Yearbook",
    professionalMonthly: "Professional Monthly",
    subscriptionWillCancelledOn: "Your subscription will be canceled on",
    displayLanguage: "Display language",
    update: "Upgrade Now",
    basicversion: "Basic version(Free)",
    daily: "{start} of {end} daily transcriptions used",
    upgradetoPro: "Upgrade to Pro",
    accountSetting: "Account Settings",
    returnAccountSetting: "Return account settings",
    logOut: "Log out",
    account: "Account",
    email: "Email",
    id: "ID",
    password: "Password",
    resetPassword: "Reset Password",
    logIn: "Log in",
    tryForFree: "Try for free",
    notFund: "Not Found",
    couldntFind: "We couldn't find what you were looking for.",
    proAnnual: "Pro Annual",
    yourSubscription: "Your subscription will be canceled on",
    proMonthly: "Pro Monthly",
    perMonth: "per month",
    afterwards: "afterwards",
    accuracy: "transcription accuracy",
    supported: "languages supported",
    identification: "Speaker identification",
    transcriptSranslation: "Transcript translation",
    perYear: "per year",
    getProPlan: "Get Pro Plan",
    changeToAnnual: "Change to Annual",
    automaticRenewalon: "Automatic renewal on"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinese(Simplified)",
      "Chinese(Traditional)": "Chinese(Traditional)",
      Japanese: "Japanese",
      Danish: "Danish",
      German: "German",
      English: "English",
      Spanish: "Spanish",
      French: "French",
      Italian: "Italian",
      Hungarian: "Hungarian",
      Dutch: "Dutch",
      Norwegian: "Norwegian",
      Polish: "Polish",
      Portuguese: "Portuguese",
      Finnish: "Finnish",
      Swedish: "Swedish",
      Turkish: "Turkish",
      Greek: "Greek",
      Russian: "Russian",
      Ukrainian: "Ukrainian",
      Hebrew: "Hebrew",
      Arabic: "Arabic",
      Korean: "Korean"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Open-source Nuxt3 SaaS template, pre-integrated with global payment gateways (Stripe/Cream), Google OAuth, i18n routing, and SEO optimization tools. Designed for developers launching multilingual web apps, it offers SSR/SSG support and production-grade security out of the box.",
    startLink: "Start Free Trial~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Join the Waitlist,Get the Latest NuxtPro News First AND Discounts!",
      placeholder: "Enter your email",
      button: "Join Waitlist",
      joinCountMessage: "🔥 Early user #{count} just joined the waitlist!"
    },
    seo: {
      title: "OpenSource Nuxt SaaS Boilerplate | NuxtPro",
      description:
        "The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
    },
    api: {
      title: "this is a demo",
      corpInfo: "corp info"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "video download error"
      },
      mse: {
        code: 2,
        msg: "stream append error"
      },
      parse: {
        code: 3,
        msg: "parsing error"
      },
      format: {
        code: 4,
        msg: "wrong format"
      },
      decoder: {
        code: 5,
        msg: "decoding error"
      },
      runtime: {
        code: 6,
        msg: "grammatical errors"
      },
      timeout: {
        code: 7,
        msg: "play timeout"
      },
      other: {
        code: 8,
        msg: "other errors"
      }
    },
    HAVE_NOTHING: "There is no information on whether audio/video is ready",
    HAVE_METADATA: "Audio/video metadata is ready ",
    HAVE_CURRENT_DATA:
      "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
    HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
    HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
    NETWORK_EMPTY: "Audio/video has not been initialized",
    NETWORK_IDLE:
      "Audio/video is active and has been selected for resources, but no network is used",
    NETWORK_LOADING: "The browser is downloading the data",
    NETWORK_NO_SOURCE: "No audio/video source was found",
    MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
    MEDIA_ERR_NETWORK: "An error occurred while downloading",
    MEDIA_ERR_DECODE: "An error occurred while decoding",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
    REPLAY: "Replay",
    ERROR: "Network is offline",
    PLAY_TIPS: "Play",
    PAUSE_TIPS: "Pause",
    PLAYNEXT_TIPS: "Play next",
    DOWNLOAD_TIPS: "Download",
    ROTATE_TIPS: "Rotate",
    RELOAD_TIPS: "Reload",
    FULLSCREEN_TIPS: "Go full screen",
    EXITFULLSCREEN_TIPS: "Exit full screen",
    CSSFULLSCREEN_TIPS: "Cssfullscreen",
    EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
    TEXTTRACK: "Caption",
    PIP: "PIP",
    SCREENSHOT: "Screenshot",
    LIVE: "LIVE",
    OFF: "Off",
    OPEN: "Open",
    MINI_DRAG: "Click and hold to drag",
    MINISCREEN: "Miniscreen",
    REFRESH_TIPS: "Please Try",
    REFRESH: "Refresh",
    FORWARD: "forward",
    LIVE_TIP: "Live",
    TM_SUBTITLE_SHOW_TIPS: "Turn on subtitles",
    TM_SUBTITLE_HIDE_TIPS: "Turn off subtitles",
    TM_MINIMIZE_TIPS: "Hide the video"
  },
  privacyPolicy: {
    // 页面标题
    privacyPolicyTitle: "Privacy Policy",

    // 重要信息
    lastUpdated: "Last updated: August 25, 2025",
    policyDescription:
      'This Policy describes how Scribify (hereinafter referred to as "Scribify", "our", "we", "us") collects, uses, and discloses your personal information when you use our services, websites',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: ', and software (collectively, the "Services").',

    policyAgreement:
      "Please read this Privacy Policy carefully and ensure that you understand it. By using any of our Services, you agree to this Privacy Policy. If you do not agree to our use of your personal data in line with this Policy, you must stop using our Services immediately.",

    policyOverview:
      "In this policy, we lay out: what data we collect and why; how your data is handled; and your rights with respect to your data. We do not sell your data.",

    // 章节标题
    scopeTitle: "1. Scope of this Privacy Policy",
    whatWeCollectTitle: "2. What we collect and why",
    accessShareTitle: "3. When we access or share your information",
    secureDataTitle: "4. How we secure your data",
    deleteContentTitle: "5. What happens when you delete your content",
    locationTitle: "6. Location of site and data",
    childrenPrivacyTitle: "7. Children's Privacy",
    updatesTitle: "8. Updates to this Privacy Policy",
    contactUsTitle: "9. Contact Us",

    // 子章节标题
    identityAccessTitle: "2.1 Identity & access",
    billingInfoTitle: "2.2 Billing information",
    productInteractionsTitle: "2.3 Product interactions",
    websiteInteractionsTitle: "2.4 Website interactions",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Voluntary correspondence",

    // 1. Scope of this Privacy Policy 内容
    scopeContent:
      "This Privacy Policy applies only to our collection and processing of information about users of the Services. This Privacy Policy does not apply to any services, websites or software operated by third parties that are linked to us (whether we provide those links or other users share them) nor does it apply to content, data, applications or materials from third parties. We advise you to check the privacy policies of any third party website or software before providing any information to them.",

    // 2. What we collect and why 内容
    collectPrinciple:
      "Our guiding principle is to collect only what we need. Here's what that means in practice:",

    // 2.1 Identity & access
    identityAccessContent:
      "When you sign up for one of our products, we ask for identifying information such as your name, email address. This is to provide essential product functionality and so we can send you product updates and other essential information.",

    // 2.2 Billing information
    billingInfoContent:
      "If you sign up for a paid product, you will be asked to provide your payment information and billing address. Payment information is submitted directly to our payment processor and doesn't hit our servers.",

    // 2.3 Product interactions
    productInteractionsContent:
      "We store on our servers the content that you upload or receive or maintain in your product accounts. Unless you delete this content, we may keep this content as long as your account is active.",

    // 2.4 Website interactions
    websiteInteractionsContent:
      "We collect information about your browsing activity for analytics and statistical purposes such as conversion rate testing and experimenting with new product designs. This includes, for example, your browser and operating system versions, your IP address, which web pages you visited and how long they took to load, and which website referred you to us. If you have an account and are signed in, these web analytics data are tied to your IP address and user account until your account is no longer active.",

    // 2.5 Cookies
    cookiesContent1:
      "We also use persistent first-party cookies and some third-party cookies to store certain preferences, make it easier for you to use our applications, and perform A/B testing as well as support some analytics.",

    cookiesContent2:
      "A cookie is a piece of text stored by your browser. It may help remember login information and site preferences. It might also collect information such as your browser type, operating system, web pages visited, duration of visit, content viewed, and other click-stream data. You can adjust cookie retention settings and accept or block individual cookies in your browser settings, although our apps won't work and other aspects of our service may not function properly if you turn cookies off.",

    // 2.6 Voluntary correspondence
    voluntaryCorrespondenceContent:
      "When you email us with a question or to ask for help, we keep that correspondence, including your email address, so that we have a history of past correspondence to reference if you reach out in the future.",

    // 3. When we access or share your information 内容
    accessShareContent1:
      "To provide products or services you've requested. We use some third-party subprocessors to help run our applications and provide the Services to you. This includes cloud and analytics providers.",

    accessShareContent2:
      "To investigate, prevent, or take action regarding abuse. Accessing a customer's account when investigating potential abuse is a measure of last resort. We want to protect the privacy and safety of both our customers and the people reporting issues to us, and we do our best to balance those responsibilities throughout the process. If we discover you are using our products for a restricted purpose, we will take action as necessary, including notifying appropriate authorities where warranted.",

    accessShareContent3: "When required under applicable law.",

    userDataRequests:
      "- Requests for user data. Our policy is to not respond to government requests for user data unless we are compelled by legal process or in limited circumstances in the event of an emergency request. However, if U.S. law enforcement authorities have the necessary warrant, criminal subpoena, or court order requiring us to share data, we must comply. Likewise, we will only respond to requests from government authorities outside the U.S. if compelled by the U.S. government through procedures outlined in a mutual legal assistance treaty or agreement. It is our policy to notify affected users before we share data unless we are legally prohibited from doing so, and except in some emergency cases.",

    preservationRequests:
      "- Preservation requests. Similarly, our policy is to comply with requests to preserve data only if compelled by the U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f), or by a properly served U.S. subpoena for civil matters. We do not share preserved data unless required by law or compelled by a court order that we choose not to appeal. Furthermore, unless we receive a proper warrant, court order, or subpoena before the required preservation period expires, we will destroy any preserved copies of customer data at the end of the preservation period.",

    taxAudit:
      "- If we are audited by a tax authority, we may be required to share billing-related information. If that happens, we will share only the minimum needed, such as billing addresses and tax exemption information.",

    // 4. How we secure your data 内容
    secureDataContent1: "All data is encrypted via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "when transmitted from our servers to your browser.",

    // 5. What happens when you delete your content 内容
    deleteContentContent:
      "If you delete any content, it will become immediately inaccessible.",

    // 6. Location of site and data 内容
    locationContent:
      "Our products and other web properties are operated in the United States. If you are located in the European Union, UK, or elsewhere outside of the United States, please be aware that any information you provide to us will be transferred to and stored in the United States. By using our websites or Services and/or providing us with your personal information, you consent to this transfer.",

    // 7. Children's Privacy 内容
    childrenPrivacyContent:
      "The Services are not aimed at children, and we do not knowingly collect Personal Information from children under the age of 13. If you are under the age of 13, please do not submit any personal information through the Services. If you believe that a child has provided us with Personal Information in violation of this Policy, please contact us as indicated below.",

    // 8. Updates to this Privacy Policy 内容
    updatesContent:
      "We may update this policy as needed to comply with relevant regulations and reflect any new practices. Whenever we make a significant change to our policies, we will refresh the date at the top of this page.",

    // 9. Contact Us 内容
    contactUsContent1:
      "If you have any questions, comments or complaints about our Privacy Policy, please",
    contactUs: "contact us",
    contactUsContent2:
      "and we will endeavor to deal with your complaint as soon as possible."
  },
  termsOfService: {
    // TermsOfService.vue 英文文本提取

    // 页面标题
    termsOfServiceTitle: "Terms of Service",

    // 重要信息
    lastUpdated: "Last updated: September 21, 2022",
    thankYouMessage: "Thank you for using our products!",
    companyReference:
      'When we say "Company", "we", "our", or "us" in this document, we are referring to Scribify.',
    servicesDefinition:
      'When we say "Services", we mean any product created and maintained by Scribify, whether delivered within a web browser, desktop application, mobile application, or another format.',
    termsUpdateNotice:
      "We may update these Terms of Service in the future. Typically these changes have been to clarify some of these terms by linking to an expanded related policy. Whenever we make a significant change to our policies, we will refresh the date at the top of this page and take any other appropriate steps to notify account holders.",

    // 章节标题
    acceptanceOfAgreementTitle: "1. Acceptance of Agreement",
    scribifyServicesTitle: "2. Scribify's Services",
    accountTermsTitle: "3. Account Terms",
    paymentRefundsTitle: "4. Payment, Refunds, and Plan Changes",
    cancellationTerminationTitle: "5. Cancellation and Termination",
    submissionsTitle: "6. Submissions",
    uptimeSecurityTitle: "7. Uptime and Security",
    siteManagementTitle: "8. Site Management",
    copyrightContentTitle: "9. Copyright and Content Ownership",
    prohibitedActivitiesTitle: "10. Prohibited Activities",
    featuresBugsTitle: "11. Features and Bugs",
    correctionsTitle: "12. CORRECTIONS",
    userDataTitle: "13. User Data",
    privacyPolicyTitle: "14. Privacy Policy",
    liabilityTitle: "15. Liability",
    miscellaneousTitle: "16. Miscellaneous",
    contactUsTitle: "17. Contact Us",

    // 1. Acceptance of Agreement 内容
    acceptanceContent1:
      "By using our Services, you are indicating your acceptance of this Agreement, which thereby becomes a binding contract between you and Scribify. You represent that you are legally able to accept these Terms, and affirm that you are of legal age to form a binding contract. Scribify's acceptance is expressly conditioned upon your assent to all the terms and conditions of this Agreement.",

    acceptanceContent2:
      "The Services are not intended for and should not be used by anyone under the age of 18. By using the Services, you represent and warrant that you meet the foregoing eligibility requirement.",

    acceptanceContent3:
      'The terms "you," "your," "yourself" shall also include your employees, agents, business representatives and any other individuals that you provide access to the Services through your Account (as defined below). You are responsible for ensuring that all persons who access the Services through your account are aware of these Terms and comply with them.',

    acceptanceContent4:
      "Scribify reserves the right to revise and update these Terms from time to time in its sole discretion. All changes are effective immediately when posted. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.",

    // 2. Scribify's Services 内容
    servicesContent1:
      "Our Services enables users to transform voice conversations into transcribed text that can be searched, translated and shared with others.",

    servicesContent2:
      'You may choose whether to use the free version of the Services ("Free Services") or the subscription-based paid version of the Services for which you may be required to pay fees (the "Paid Services").',

    servicesContent3:
      "We will make the Services available to you. You are responsible for making all arrangements necessary for you to have access to the Services.",

    // 3. Account Terms 内容
    accountTerms1:
      "- You are responsible for maintaining the security of your account. The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",

    accountTerms2:
      "- You may not use the Services for any unlawful, unethical, or immoral purpose.",

    accountTerms3:
      "- You are responsible for all content posted and activity that occurs under your account. That includes content posted by others who either: (a) have access to your login credentials; or (b) have their own logins under your account.",

    accountTerms4:
      '- You must be a human. Accounts registered by "bots" or other automated methods are not permitted.',

    // 4. Payment, Refunds, and Plan Changes 内容
    paymentContent1:
      "- For paid Services that offer a free trial, we explain the length of trial when you sign up. After the trial period, you need to pay in advance to keep using the Service. If you do not pay, these services will end.",

    paymentContent2:
      "- If you are upgrading from a free plan to a paid plan, we will charge your card immediately and your billing cycle starts on the day of upgrade.",

    paymentContent3:
      "- All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities. Where required, we will collect those taxes on behalf of the taxing authority and remit those taxes to taxing authorities. Otherwise, you are responsible for payment of all taxes, levies, or duties.",

    paymentContent4:
      "- All purchases are non-refundable. You can cancel any paid services at any time by logging into your account. For paid subscriptions, your cancellation will take effect at the end of the current paid term, unless otherwise stated.",

    // 5. Cancellation and Termination 内容
    cancellationContent1:
      "- If you cancel the Service before the end of any paid up time, your cancellation will take effect immediately, and you will not be charged again. We do not automatically prorate unused time in the last billing cycle.",

    cancellationContent2:
      "- We have the right to suspend or terminate your account and refuse any and all current or future use of our Services for any reason at any time. Suspension means you will not be able to access the account or any content in the account. Termination will furthermore result in the deletion of your account or your access to your account, and the forfeiture and relinquishment of all content in your account. We also reserve the right to refuse the use of the Services to anyone for any reason at any time. We have this clause because statistically speaking, out of the hundreds of thousands of accounts on our Services, there is at least one doing something nefarious.",

    cancellationContent3:
      "- Verbal, physical, written or other abuse (including threats of abuse or retribution) of Company employee or officer may result in immediate account termination.",

    // 6. Submissions 内容
    submissionsContent:
      'You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.',

    // 7. Uptime and Security 内容
    uptimeContent1:
      '- Your use of the Services is at your sole risk. We provide these Services on an "as is" and "as available" basis. We do not offer service-level agreements for most of our Services, but do take uptime of our applications seriously.',

    uptimeContent2:
      "- We reserve the right to temporarily disable your account if your usage significantly exceeds the typical usage of other customers of the Services. Of course, we'll reach out to the you before taking any action except in rare cases where the level of use may negatively impact the performance of the Service for other customers.",

    uptimeContent3:
      "- We take many measures to protect and secure your data through backups, redundancies, and encryption. We enforce encryption for data transmission over the public Internet.",

    uptimeContent4:
      "- We use third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Services.",

    // 8. Site Management 内容
    siteManagementContent:
      "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service ; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service , including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",

    // 9. Copyright and Content Ownership 内容
    copyrightContent1:
      "- All content posted on the Services must comply with U.S. copyright law.",

    copyrightContent2:
      "- We claim no intellectual property rights over the material you provide to the Services. All materials uploaded remain yours.",

    copyrightContent3:
      "- We do not pre-screen content, but reserve the right (but not the obligation) in our sole discretion to refuse or remove any content that is available via the Service.",

    copyrightContent4:
      "- The names, look, and feel of the Services are copyright© to the Company. All rights reserved. You may not duplicate, copy, or reuse any portion of the HTML, CSS, JavaScript, or visual design elements without express written permission from the Company. You must request permission to use the Company's logo or any Service logos for promotional purposes. Please",

    emailUs: "email us",

    copyrightContent5:
      "requests to use logos. We reserve the right to rescind this permission if you violate these Terms of Service.",

    copyrightContent6:
      "- You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Services, use of the Services, or access to the Services without the express written permission by the Company.",

    copyrightContent7:
      "- You must not modify another website so as to falsely imply that it is associated with the Services or the Company.",

    copyrightContent8:
      "- We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately",

    contactUs: "contact us",

    copyrightContent9:
      ". A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.",

    // 10. Prohibited Activities 内容
    prohibitedActivitiesIntro:
      "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",

    prohibitedActivitiesUserAgreement:
      "As a user of the Site, you agree not to:",

    prohibitedActivity1:
      "- Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",

    prohibitedActivity2:
      "- Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",

    prohibitedActivity3:
      "- Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.",

    prohibitedActivity4:
      "- Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.",

    prohibitedActivity5:
      "- Use any information obtained from the Site in order to harass, abuse, or harm another person.",

    prohibitedActivity6:
      "- Make improper use of our support services or submit false reports of abuse or misconduct.",

    prohibitedActivity7:
      "- Use the Site in a manner inconsistent with any applicable laws or regulations.",

    prohibitedActivity8:
      "- Engage in unauthorized framing of or linking to the Site.",

    prohibitedActivity9:
      "- Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.",

    prohibitedActivity10:
      "- Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",

    prohibitedActivity11:
      "- Delete the copyright or other proprietary rights notice from any Content.",

    prohibitedActivity12:
      "- Attempt to impersonate another user or person or use the username of another user.",

    prohibitedActivity13:
      '- Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").',

    prohibitedActivity14:
      "- Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.",

    prohibitedActivity15:
      "- Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.",

    prohibitedActivity16:
      "- Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.",

    prohibitedActivity17:
      "- Copy or adapt the Site's software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",

    prohibitedActivity18:
      "- Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.",

    prohibitedActivity19:
      "- Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.",

    prohibitedActivity20:
      "- Use a buying agent or purchasing agent to make purchases on the Site.",

    prohibitedActivity21:
      "- Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",

    prohibitedActivity22:
      "- Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.",

    prohibitedActivity23:
      "- Use the Site to advertise or offer to sell goods and services.",

    prohibitedActivity24: "- Sell or otherwise transfer your profile.",

    // 11. Features and Bugs 内容
    featuresContent1:
      "We design our Services with care, based on our own experience and the experiences of customers who share their time and feedback. However, there is no such thing as a service that pleases everybody. We make no guarantees that our Services will meet your specific requirements or expectations.",

    featuresContent2:
      "We also test all of our features before shipping them. As with any software, our Services inevitably have some bugs. We track the bugs reported to us and work through them, especially any related to security or privacy. Not all reported bugs will get fixed and we don't guarantee completely error-free Services.",

    // 12. CORRECTIONS 内容
    correctionsContent1:
      "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.",

    correctionsContent2:
      "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.",

    // 13. User Data 内容
    userDataContent:
      "We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",

    // 14. Privacy Policy 内容
    privacyPolicyContent1:
      "We care about data privacy and security. Please review our",
    privacyPolicy: "Privacy Policy",
    privacyPolicyContent2:
      ". By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Service. Please be advised the Site is hosted in the United States. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States , then through your continued use of the Site, you are transferring your data to the United States , and you agree to have your data transferred to and processed in the United States.",

    // 15. Liability 内容
    liabilityIntro:
      "We mention liability throughout these Terms but to put it all in one section:",

    liabilityContent:
      "You expressly understand and agree that the Company shall not be liable, in law or in equity, to you or to any third party for any direct, indirect, incidental, lost profits, special, consequential, punitive or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if the Company has been advised of the possibility of such damages), resulting from: (1) the use or the inability to use the Services; (2) errors, mistakes, or inaccuracies of content and materials; (3) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the site; (4) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the Services; (5) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein; (6) any interruption or cessation of transmission to or from the site; (7) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the site by any third party, and/or; (8) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the site; (9) statements or conduct of any third party on the service; (10) or any other matter relating to this Terms of Service or the Services, whether as a breach of contract, tort (including negligence whether active or passive), or any other theory of liability.",

    // 16. Miscellaneous 内容
    miscellaneousContent:
      "These Terms of Service and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Service or use of the Site. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service.",

    // 17. Contact Us 内容
    contactUsContent1:
      "If you have a question about any of the Terms of Service, please",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
