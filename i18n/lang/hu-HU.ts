// 匈牙利语
let message = {
  // 首页
  HomePage: {
    home: "Főoldal",
    version: "Alapverzió (Ingyenes):",
    times: "Napi {times} ingyenes átírás, ma {left} maradt.",
    tips: "Váltson Pro-ra a korlátlan átiratokhoz.",
    update: "Frissítés most",
    folders: "Mappák",
    rename: "Átnevezés",
    delete: "Törlés",
    createTitle: "Mappa létrehozása",
    deleteConfirm: `Biztosan törölni szeretnéd a mappát és az összes benne lévő fájlt?`,
    cancel: "Mégse",
    confirm: "Létrehozás",
    dialogLabel: "Mappa neve",
    recently: "Legutóbbi fájlok",
    loading: "Betöltés",
    tour: {
      step0: {
        title: "Üdvözlünk a {name} alkalmazásban",
        tip: "Itt a következőket teheted:",
        content: "Beszélgetések, értekezletek, előadások és egyebek átírása",
        next: "Kezdés"
      },
      step1: {
        title: "Fájlok átírása",
        content:
          "Három átírási módszert támogat: helyi fájlok, linkek és felvételek."
      },
      step2: {
        title: "Mappa létrehozása",
        content:
          'Kattints a "+" jelre mappa létrehozásához és fájljaid rendszerezéséhez.'
      },
      step3: {
        title: "Átiratok részleteinek megtekintése és szerkesztése",
        content:
          "Kattints az elemre az átirat részleteinek megtekintéséhez, szerkesztéséhez és fordításához."
      },
      next: "tovább",
      finish: "Értem"
    },
    export: {
      export: "Exportálás",
      title: "Generáljuk az exportálást",
      title2: "A fájl készen áll",
      singleLoadingContent: "1 fájl tömörítése folyamatban.",
      singleSuccessContent: "1 fájl tömörítése kész.",
      loadingContent: "{num} fájl tömörítése folyamatban.",
      successContent: "{num} fájl tömörítése kész.",
      cancel: "Exportálás megszakítása",
      error: "Exportálási hiba",
      dialog: {
        title: "Figyelmeztetés",
        content: "Megszakítod az exportálást?",
        cancel: "Exportálás megszakítása",
        continue: "Exportálás folytatása"
      }
    },
    welcome: {
      title: "Üdvözöljük a Scribify-ban!",
      description: "Itt a következőket teheti:",
      transcribe:
        "Könnyedén készítsen átiratokat a Scribify-jal—alakítsa át a hangbeszélgetéseket tiszta, kereshető és megosztható szöveggé egy pillanat alatt.",
      precision:
        "Kapjon pontos átiratokat azonnali beszélőazonosítással és időbélyegekkel.",
      translate:
        "Törje át a nyelvi korlátokat: fordítsa le az átiratokat több mint 200 nyelvre könnyedén.",
      edit: "Szerkessze, finomítsa és exportálja átiratait az igényeinek megfelelő formátumokban.",
      collaborate: "Működjön együtt másokkal az átírt szöveg megosztásával.",
      button: "Kezdés",
      tip: "Készen áll a hang átírt szöveggé alakítására? Kezdje el a felfedezést most!",
      tip2: "Kezdj el felfedezni most!",
      tip1: "Készen állsz a hangot átirat szöveggé alakítani? "
    },
    subscriptionModal: {
      left: {
        title: "Szerezze meg a Pro csomagot további funkciók feloldásához",
        c1: "Korlátlan átiratok",
        c2: "10 órás feltöltések",
        c3: "Legmagasabb prioritás",
        c4: "99%-os átírási pontosság",
        c5: "Több mint 100 támogatott nyelv",
        c6: "Beszélőazonosítás",
        c7: "Átirat fordítás",
        t1: "Korlátlan átiratok egy személy számára.",
        t2: "Minden fájl akár 10 óra / 5 GB hosszú lehet. Töltsön fel egyszerre 50 fájlt.",
        t3: "Mindig a lehető leghamarabb, a legmagasabb prioritással írjuk át a fájljait."
      },
      right: {
        title: "Pro csomag beszerzése",
        yearly: "Éves",
        monthly: "Havi",
        save: "Megtakarítás",
        preMonth: "havonta",
        preYear: "évente",
        firstMonth: "első hónap",
        afterwards: "ezt követően"
      },
      subscribe: "Előfizetés"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Név",
      duration: "Időtartam",
      status: "Állapot",
      date: "Létrehozás dátuma",
      activity: "Tevékenység",
      empty1: `Üres.`,
      empty2: `Kattints a fenti gombra egy fájl átírásához.`,
      just: "épp most",
      export: "Exportálás",
      delete: "Törlés",
      share: "Megosztás",
      rename: "Átnevezés",
      move: "Áthelyezés",
      failed: "Sikertelen",
      selected: "Kiválasztva",
      success: "Sikeres",
      fileList: "Fájllista"
    },
    dialog: {
      move: {
        title: "Áthelyezés",
        label: "Válassz mappát",
        placeholder: "Válassz mappát",
        confirm: "Áthelyezés",
        cancel: "Mégse"
      },
      rename: {
        title: "Átnevezés",
        label: "Fájl neve",
        confirm: "Átnevezés",
        cancel: "Mégse"
      },
      delete: {
        title: "Törlés",
        file: "fájl",
        files: "fájlok",
        label: "Megerősíted a törlést? Ez a művelet nem vonható vissza.",
        confirm: "Törlés",
        cancel: "Mégse"
      },
      share: {
        title: "Megosztás",
        label:
          "Bárki, aki rendelkezik a következő biztonságos linkkel, megtekintheti ezt az átiratot és a hozzá tartozó médiafájlt.",
        confirm: "Link másolása",
        success: "Sikeres másolás"
      },
      export: {
        title: "Exportálás",
        select: "Válaszd ki a szükséges formátumot",
        settings: "Beállítások",
        speaker: "Beszélő megjelenítése",
        timecodes: "Időkódok megjelenítése",
        confirm: "Exportálás",
        cancel: "Mégse",
        selectErr: "Kérjük, válassz egy vagy több formátumot"
      }
    },
    search: {
      placeholder: "Keresés"
    },
    recently: "Legutóbbi",
    record: "Felvétel",
    transcribe: "Átírás",
    unclassified: "Kategorizálatlan mappák",
    buttons: {
      transcribe: "Fájlok átírása",
      url: "Linkek átírása",
      record: "Felvétel és átírás",
      recording: "Felvétel..."
    },
    delSuccess: "Sikeresen törölve",
    create: "Létrehozás"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Felvétel",
      pause: "Szünet",
      resume: "Folytatás",
      stop: "Leállítás",
      endRecord: "Felvétel befejezése",
      delete: "Törlés",
      transcribe: "Átírás",
      permissionDenied:
        "Mikrofon hozzáférés megtagadva vagy az eszköz nem létezik",
      dialog: {
        delete: {
          title: "Figyelmeztetés",
          label: "Biztosan törölni szeretnéd ezt a felvételt?",
          confirm: "Törlés",
          cancel: "Mégse"
        },
        complete: {
          title: "Felvétel befejezve",
          label:
            "A felvétel elérte a 10 órát és automatikusan leállt. Kérjük, írd át.",
          confirm: "Értem"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Online média átírása",
        title: "Linkek beillesztése",
        label:
          "Illeszd be a következő platformok médialinkjét (de nem csak ezekre korlátozódva): YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Hozzáadás",
        cancel: "Mégse",
        // 请输入正确的链接
        errorTitle:
          "A megadott link helytelen. Kérjük, ellenőrizd és próbáld újra.",
        linkName: "Link"
      },
      file: {
        orTitle: "Online média átírása",
        dialogTitle: "Fájlok átírása",
        tip1: "Kattintson a feltöltéshez",
        tip2: "vagy húzza ide",
        or: "vagy"
      },
      del: {
        title: "Figyelmeztetés",
        content: "Minden folyamat elvész. Megerősíted az átírás megszakítását?",
        cancel: "Megszakítás megerősítése",
        confirm: "Átírás folytatása"
      },
      files: "Fájlok",
      resultDialogTitle: "Fájlok átírása",
      resultDialogTitle2: "Fájl átirata",
      cancel: "Mégse",
      confirm: "Átírás",
      return: "Vissza",
      addMore: "További hozzáadása",
      language: "Média nyelve",
      failed: "Sikertelen",
      tooLarge: "A fájl túl nagy.",
      linkUpload: "Feltöltés...",
      fileFormat: "A fájlformátum nem engedélyezett",
      localFiles: "Helyi fájlok",
      pasteLink: "Online link",
      uploadErr: "Feltöltési hiba",
      hashErr: "Hash hiba",
      table: {
        status: "Állapot",
        file: "Fájl",
        size: "Méret",
        noData: "Nincs adat"
      },
      maxFileNum: "A fájlok száma nem haladhatja meg a {num} darabot.",
      speaker: "Beszélő azonosítás",
      speakerLabel:
        "Címkézze meg az átirat minden szegmensét a beszélő személlyel."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Szerkesztés",
    translate: "Fordítás",
    showSpeaker: "Beszélő mutatása",
    showTimestamp: "Időbélyeg mutatása",
    share: "Megosztás",
    shared: "megosztva",
    export: "Exportálás",
    speaker: "Beszélő_{id}",
    unassignSpeaker: "Beszélő hozzárendelésének megszüntetése",
    play: "Lejátszás",
    save: "Mentés",
    undo: "Visszavonás",
    redo: "Újra",
    confirm: "Megerősítés",
    cancel: "Mégse",
    addNew: "Új hozzáadása",
    createANewSpeaker: "Új beszélő létrehozása",
    speakerName: "Beszélő neve",
    addSpeaker: "Beszélő hozzáadása",
    applyToAllMatchingSpeakers: "Alkalmazás minden egyező beszélőre",
    cancelTranslation: "Fordítás megszakítása",
    showVideo: "Videó megjelenítése",
    hideVideo: "Videó elrejtése",
    langChooseV1: {
      recently: "Legutóbbi",
      popular: "Népszerű",
      other: "Egyéb",
      searchLanguage: "Nyelvek keresése",
      noMatch: "Nem található egyező nyelv",
      English: "Angol",
      "English(US)": "Angol (USA)",
      "English(UK)": "Angol (UK)",
      Spanish: "Spanyol",
      Portuguese: "Portugál",
      French: "Francia",
      Italian: "Olasz",
      German: "Német",
      Dutch: "Holland",
      Polish: "Lengyel",
      Danish: "Dán",
      Japanese: "Japán",
      Korean: "Koreai",
      Hungarian: "Magyar",
      Czech: "Cseh",
      Chinese: "Kínai",
      Hebrew: "Héber",
      Arabic: "Arab",
      Azerbaijani: "Azerbajdzsáni",
      Estonian: "Észt",
      Belarusian: "Belorusz",
      Bulgarian: "Bolgár",
      Icelandic: "Izlandi",
      Bosnian: "Bosnyák",
      Persian: "Perzsa",
      Russian: "Orosz",
      "Chinese(Traditional)": "Kínai (hagyományos)",
      Finnish: "Finn",
      Kazakh: "Kazah",
      Galician: "Galíciai",
      Catalan: "Katalán",
      "Chinese(Simplified)": "Kínai (egyszerűsített)",
      Kannada: "Kannada",
      Croatian: "Horvát",
      Latvian: "Lett",
      Lithuanian: "Litván",
      Romanian: "Román",
      Marathi: "Maráthi",
      Malay: "Maláj",
      Macedonian: "Macedón",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepáli",
      Norwegian: "Norvég",
      Swedish: "Svéd",
      Serbian: "Szerb",
      Slovak: "Szlovák",
      Slovenian: "Szlovén",
      Swahili: "Szuahéli",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thai",
      Turkish: "Török",
      Welsh: "Wales",
      Urdu: "Urdu",
      Ukrainian: "Ukrán",
      Greek: "Görög",
      Armenian: "Örmény",
      Hindi: "Hindi",
      Indonesian: "Indonéz",
      Vietnamese: "Vietnámi",
      Albanian: "Albán",
      Amharic: "Amhara",
      Assamese: "Asszámi",
      Occitan: "Okcitán",
      Bashkir: "Baskír",
      Basque: "Baszk",
      Breton: "Breton",
      Tibetan: "Tibeti",
      Faroese: "Feröeri",
      Sanskrit: "Szanszkrit",
      Khmer: "Khmer",
      Georgian: "Grúz",
      Gujarati: "Gudzsaráti",
      "Haitian Creole": "Haiti kreol",
      Hausa: "Hausza",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgi",
      Malagasy: "Malgas",
      Maltese: "Máltai",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengáli",
      Burmese: "Burmai",
      Punjabi: "Pandzsábi",
      Pashto: "Pastu",
      Sinhala: "Szingaléz",
      Shona: "Sona",
      Somali: "Szomáli",
      Tajik: "Tádzsik",
      Tatar: "Tatár",
      Telugu: "Telugu",
      Turkmen: "Türkmén",
      Uzbek: "Üzbég",
      Hawaiian: "Hawaii",
      "Norwegian Nynorsk": "Újnorvég",
      Sindhi: "Szindhi",
      Sundanese: "Szundanéz",
      Yiddish: "Jiddis",
      Yoruba: "Joruba",
      Javanese: "Jávai",
      Cantonese: "Kantoni",
      Abkhaz: "Abház",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acsoli",
      awa: "Avadhi",
      Avaric: "Avar",
      Ewe: "Eve",
      Aymara: "Ajmara",
      Irish: "Ír",
      Oriya: "Orija",
      Oromo: "Oromo",
      Ossetian: "Oszét",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinéz",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangaszinan",
      pam: "Pampanga",
      nso: "Északi sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beludzs",
      bho: "Bodzspuri",
      bua: "Burját",
      chm: "Mari",
      Chamorro: "Csamorro",
      Chechen: "Csecsen",
      chk: "Csukéz",
      Chuvash: "Csuvas",
      Tswana: "Csvana",
      Tsonga: "Conga",
      "fa-AF": "Dari",
      shn: "San",
      tet: "Tetum",
      Divehi: "Divehi",
      dyu: "Djula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Déli ndebele",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko",
      "French(Canada)": "Francia (Kanada)",
      Fijian: "Fidzsi",
      fon: "Fon",
      "Western Frisian": "Nyugati fríz",
      fur: "Friuli",
      Fulah: "Ful",
      Kongo: "Kongó",
      Kalaallisut: "Grönlandi",
      gom: "Goan konkáni",
      Guarani: "Guarani",
      cnh: "Hakha chin",
      hrx: "Hunsrücki",
      Kyrgyz: "Kirgiz",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kacsin",
      Kanuri: "Kanuri",
      kha: "Khászi",
      kek: "Q'eqchi'",
      Komi: "Komi",
      Xhosa: "Xhosza",
      Corsican: "Korzikai",
      "crh-Latn": "Krími tatár (latin)",
      crh: "Krími tatár (cirill)",
      Quechua: "Kecsua",
      Kurdish: "Kurd (kurmancsi)",
      ckb: "Kurd (szoráni)",
      trp: "Kok Borok",
      ltg: "Latgaliai",
      lij: "Ligur",
      Limburgish: "Limburgi",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Romani",
      mad: "Madurai",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Maláj (Jawi)",
      Marshallese: "Marshall-szigeteki",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritiusi kreol",
      "mni-Mtei": "Meitei (manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (keleti Huasteca)",
      "Southern Sotho": "Déli sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pandzsábi (Sahmukhi)",
      "pt-PT": "Portugál (Portugália)",
      Chichewa: "Csicseva",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapoték",
      "Northern Sami": "Északi számi",
      Samoan: "Szamoai",
      kri: "Krio",
      crs: "Seychelle-i kreol",
      Sango: "Szangó",
      "sat-Latn": "Szantáli (latin)",
      sat: "Szantáli (Ol Chiki)",
      Esperanto: "Eszperantó",
      Swati: "Szvázi",
      "Scottish Gaelic": "Skót gael",
      sus: "Szuszu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latin)",
      Tahitian: "Tahiti",
      Tonga: "Tongai",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvai",
      war: "Waray",
      mak: "Makassar",
      vec: "Velencei",
      Uyghur: "Ujgur",
      Venda: "Venda",
      Wolof: "Volof",
      udm: "Udmurt",
      szl: "Sziléziai",
      scn: "Szicíliai",
      hil: "Hiligaynon",
      jam: "Jamaikai patois",
      sah: "Jakut",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbó",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latin)",
      Inuktitut: "Inuktitut (szillabikus)",
      yua: "Yucatec maja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Nem található",
    notFundDesc: "Nem találtuk meg, amit kerestél.",
    shareTips:
      "Bárki, aki rendelkezik a következő biztonságos linkkel, megtekintheti ezt az átiratot és a hozzá tartozó médiafájlt.",
    copyLink: "Link másolása",
    copySuccessful: "Sikeres másolás",
    copyFail: "Másolás sikertelen",
    closeTrans: "Fordítás megszakítása",
    upgradeBtn: "Frissítés most",
    upgradeTip30: "Ez a fájl meghaladja a 30 percet.",
    upgradeTipMore:
      "Frissítsen Scribify Pro-ra, hogy akár 10 órás hosszúságú fájlokat is átírjon",
    errorTips: "Valami baj történt.",
    copiedLink: "Link másolva",
    copyGotIt: "értem"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "vagy", // 或
    LoginBtn: "Bejelentkezés e-maillel",
    LoginGoogle: "Bejelentkezés Google-lel",
    SignupBtn: "Regisztráció e-maillel",
    SignupGoogle: "Regisztráció Google-lel",
    SignupDes: "Regisztrálj ma, és tapasztald meg a varázslatot — ingyen.",
    SignupTitle: "Pontos és korlátlan átirat",
    signup: "Regisztráció", // 注册
    sign_up: "Regisztráció", // 注册
    loginByGoogle: "Folytatás Google-fiókkal", // 使用Google登录
    emailAddress: "Kérjük, add meg az e-mail címedet", // 请输入您的邮箱
    createAccount: "Új fiók létrehozása", // 创建账户
    accountExists: "Már van fiókod? ", // 已经有账户了？登录
    agreeTerm: {
      agree: "Folytatásával elfogadod a feltételeinket és a {policy}.",
      terms: "Feltételek",
      policy: "Adatvédelmi szabályzat"
    },
    setPassword: "Jelszó beállítása", // 设置密码
    code: "Ellenőrző kód", // 验证码
    resend: "Újraküldés", // 重新发送
    enterPassword: "Kérjük, add meg a jelszavadat.", // 请输入密码
    passwordLeval: "Jelszó erőssége", // 密码强度
    Weak: "Gyenge", // 弱 中 强
    Medium: "Közepes", // 弱 中 强
    Strong: "Erős", // 弱 中 强
    confirmPassword: "Jelszó megerősítése", // 确认密码
    invalidEmail: "Érvénytelen e-mail cím", // 无效的邮箱地址
    logInDirectly: "Ez a fiók már létezik. Kérjük, jelentkezz be közvetlenül.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Ellenőrző kód hiba. Próbáld újra.", // 验证码错误，请重试
    atLeastSix: "A jelszónak legalább 6 karakter hosszúnak kell lennie.", // 密码长度至少6位
    passwordNotMatch: "A jelszavak nem egyeznek. Próbáld újra.", // 密码不匹配，请重试
    login: "Bejelentkezés", // 登录
    log_in: "Bejelentkezés", // 登录
    log_In: "Bejelentkezés", // 登录
    password: "Jelszó", // 密码
    forgotPassword: "Elfelejtetted a jelszavad?", // 忘记密码？
    noAccount: "Nincs még fiókod?", // 没有账户？注册
    accountNotExists: "Ez a fiók nem létezik.", // 账户不存在
    passwordError: "Jelszó hiba", // 密码错误
    sendCode: "Ellenőrző kód küldése", // 发送验证码
    resetPassword: "Jelszó visszaállítása", // 重置密码
    resetYourPassword: "Jelszavad visszaállítása", // 重置你的密码
    newOldCantSame: "Az új jelszónak különböznie kell a régi jelszótól.", // 新密码与旧密码不能相同
    passwordResetOk: "Jelszó sikeresen visszaállítva!", // 密码重置成功！
    signupToSaveProgress: "Fejezze be a regisztrációt a folyamat mentéséhez.",
    tip: "Tipp",
    tipContentEmail:
      "Most küldtük el fiókja bejelentkezési jelszavát az Ön e-mail címére.",
    tipContentPassword:
      "Kérjük, ellenőrizze a beérkezett üzeneteit, majd jelentkezzen be e-mail címével és jelszavával.",
    codeToEmail:
      "Most küldtünk egy ellenőrző kódot az Ön e-mail címére. Kérjük, ellenőrizze a postaládáját, és illessze be az ellenőrző kódot a fenti mezőbe."
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Előfizetési csomag",
    freeversion: "Ingyenes",
    transcribeTimesDay: "3 átirat naponta",
    uploadMinutes: "30 perces feltöltések",
    lowerPriority: "Alacsonyabb prioritás",
    currentPlan: "Jelenlegi csomag",
    professionalEdition: "professzionális verzió",
    unlimitedTranscription: "Korlátlan átirat",
    unlimitedNumberOfTimes:
      "Korlátlan átiratkészítési gyakoriság és időtartam.",
    filesUploadedAtOnce:
      "Minden fájl legfeljebb 10 óra hosszú / 5 GB lehet. Egyszerre 50 fájl tölthető fel.",
    highestPriority: "legmagasabb prioritás",
    weWillGiveTheHighest:
      "Fájljaidat mindig a lehető leggyorsabban, legmagasabb prioritással írjuk át.",
    theFirstMonth: "Az első hónap",
    subscribeTo: "előfizetés",
    basicVersionFree: "Alapverzió (ingyenes)",
    return: "Vissza",
    annualize: "éves",
    monthly: "havi",
    everyYear: "évente",
    saved: "megtakarított",
    byTheMonth: "havonta",
    firstMonth: "első hónap",
    afterwardsEveryMonth: "Ezután minden hónapban",
    manageSubscription: "Előfizetés kezelése",
    professionalYearbook: "Professzionális éves",
    professionalMonthly: "Professzionális havi",
    subscriptionWillCancelledOn: "Előfizetésed lemondásra kerül",
    displayLanguage: "Megjelenítési nyelv",
    update: "Frissítés most",
    basicversion: "Alapverzió (Ingyenes)",
    daily: "{start} / {end} napi átirat felhasználva",
    upgradetoPro: "Frissítés Pro verzióra",
    accountSetting: "Fiókbeállítások",
    logOut: "Kijelentkezés",
    account: "Fiók",
    email: "E-mail",
    id: "Azonosító",
    password: "Jelszó",
    resetPassword: "Jelszó visszaállítása",
    logIn: "Bejelentkezés",
    tryForFree: "Próbálja ingyen",
    notFund: "Nem található",
    couldntFind: "Nem találtuk meg, amit keresett.",
    proAnnual: "Pro Éves",
    proMonthly: "Pro Havi",
    perMonth: "havonta",
    afterwards: "azt követően",
    accuracy: "átirat pontossága",
    supported: "támogatott nyelvek",
    identification: "Beszélő azonosítása",
    transcriptSranslation: "Átirat fordítása",
    perYear: "évente",
    getProPlan: "Pro csomag igénylése",
    changeToAnnual: "Váltás évesre",
    automaticRenewalon: "Automatikus megújítás",
    eachMonth: "Automatikus megújítás minden hónap {time}. napján.",
    automaticRenewal:
      "Az automatikus megújítás sikertelen volt, kérjük, ellenőrizze a fizetési módot.",
    eachYear: "Automatikus megújítás minden év {time} napján.",
    returnAccountSetting: "Vissza",
    needsToWaitLonger: "Várjon tovább, amíg fájljai átírást kapnak.",
    freeThreeTimesDay: "Naponta 3 fájl ingyenes átírása.",
    oneFileUploaded:
      "Minden fájl legfeljebb 30 perc hosszú lehet. Töltsön fel egyszerre 1 fájlt.",
    uploadWithinHours: "10 órás feltöltések",
      yourSubscription: "Az előfizetése {time} törlésre kerül."
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kínai (egyszerűsített)",
      "Chinese(Traditional)": "Kínai (hagyományos)",
      Japanese: "Japán",
      Danish: "Dán",
      German: "Német",
      English: "Angol",
      Spanish: "Spanyol",
      French: "Francia",
      Italian: "Olasz",
      Hungarian: "Magyar",
      Dutch: "Holland",
      Norwegian: "Norvég",
      Polish: "Lengyel",
      Portuguese: "Portugál",
      Finnish: "Finn",
      Swedish: "Svéd",
      Turkish: "Török",
      Greek: "Görög",
      Russian: "Orosz",
      Ukrainian: "Ukrán",
      Hebrew: "Héber",
      Arabic: "Arab",
      Korean: "Koreai"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Nyílt forráskódú Nuxt3 SaaS sablon, előre integrálva globális fizetési átjárókkal (Stripe/Cream), Google OAuth-szal, i18n útválasztással és SEO optimalizálási eszközökkel. Többnyelvű webalkalmazások indítására tervezett fejlesztőknek, SSR/SSG támogatással és gyári szintű biztonsággal.",
    startLink: "Ingyenes próba indítása~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Iratkozz fel a várólistára, elsőként értesülj a NuxtPro hírekről ÉS kedvezményekről!",
      placeholder: "Add meg az e-mail címed",
      button: "Feliratkozás a várólistára",
      joinCountMessage:
        "🔥 A #{count}. korai felhasználó épp most csatlakozott a várólistához!"
    },
    seo: {
      title: "Nyílt forráskódú Nuxt SaaS keretrendszer | NuxtPro",
      description:
        "A NuxtJS keretrendszer mindazzal, amire szükséged van, hogy terméked eljusson az ügyfelekhez. Az ötlettől a gyártásig 5 perc alatt."
    },
    api: {
      title: "ez egy demó",
      corpInfo: "céginformáció"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videó letöltési hiba"
      },
      mse: {
        code: 2,
        msg: "adatfolyam hozzáadási hiba"
      },
      parse: {
        code: 3,
        msg: "elemzési hiba"
      },
      format: {
        code: 4,
        msg: "hibás formátum"
      },
      decoder: {
        code: 5,
        msg: "dekódolási hiba"
      },
      runtime: {
        code: 6,
        msg: "nyelvtani hibák"
      },
      timeout: {
        code: 7,
        msg: "lejátszási időtúllépés"
      },
      other: {
        code: 8,
        msg: "egyéb hibák"
      }
    },
    HAVE_NOTHING: "Nincs információ arról, hogy a hang/videó készen áll-e",
    HAVE_METADATA: "A hang/videó metaadatok készen állnak",
    HAVE_CURRENT_DATA:
      "Az aktuális lejátszási helyről elérhető adat, de nincs elég adat a következő képkocka/ezredmásodperc lejátszásához",
    HAVE_FUTURE_DATA: "Az aktuális és legalább egy képkocka adat elérhető",
    HAVE_ENOUGH_DATA:
      "A rendelkezésre álló adatok elegendőek a lejátszás megkezdéséhez",
    NETWORK_EMPTY: "A hang/videó nincs inicializálva",
    NETWORK_IDLE:
      "A hang/videó aktív és ki van választva az erőforrásokhoz, de a hálózat nincs használatban",
    NETWORK_LOADING: "A böngésző letölti az adatokat",
    NETWORK_NO_SOURCE: "Nem található hang/videó forrás",
    MEDIA_ERR_ABORTED: "A lekérési folyamatot a felhasználó megszakította",
    MEDIA_ERR_NETWORK: "Hiba történt a letöltés során",
    MEDIA_ERR_DECODE: "Hiba történt a dekódolás során",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "A hang/videó nem támogatott",
    REPLAY: "Újrajátszás",
    ERROR: "A hálózat offline",
    PLAY_TIPS: "Lejátszás",
    PAUSE_TIPS: "Szünet",
    PLAYNEXT_TIPS: "Következő lejátszása",
    DOWNLOAD_TIPS: "Letöltés",
    ROTATE_TIPS: "Forgatás",
    RELOAD_TIPS: "Újratöltés",
    FULLSCREEN_TIPS: "Teljes képernyő",
    EXITFULLSCREEN_TIPS: "Kilépés a teljes képernyőből",
    CSSFULLSCREEN_TIPS: "CSS teljes képernyő",
    EXITCSSFULLSCREEN_TIPS: "Kilépés a CSS teljes képernyőből",
    TEXTTRACK: "Felirat",
    PIP: "Kép a képben",
    SCREENSHOT: "Képernyőkép",
    LIVE: "ÉLŐ",
    OFF: "Ki",
    OPEN: "Megnyitás",
    MINI_DRAG: "Kattints és tartsd a húzáshoz",
    MINISCREEN: "Mini képernyő",
    REFRESH_TIPS: "Kérjük, próbáld meg",
    REFRESH: "Frissítés",
    FORWARD: "előre",
    LIVE_TIP: "Élő",
    TM_SUBTITLE_SHOW_TIPS: "Feliratok bekapcsolása",
    TM_SUBTITLE_HIDE_TIPS: "Feliratok kikapcsolása",
    TM_MINIMIZE_TIPS: "Videó elrejtése"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Adatvédelmi irányelvek",
    lastUpdated: "Utolsó frissítés: 2025. augusztus 25.",
    policyDescription:
      "Ez a Szabályzat leírja, hogyan gyűjti, használja és hozza nyilvánosságra a Scribify (a továbbiakban: „Scribify”, „mi”, „minket”) az Ön személyes adatait, amikor Ön szolgáltatásainkat, webhelyeinket vagy szolgáltatásainkat használja.",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: ", és szoftverek (együttesen a „Szolgáltatások”).",
    policyAgreement:
      "Kérjük, figyelmesen olvassa el ezt az Adatvédelmi Szabályzatot, és győződjön meg arról, hogy megértette. Szolgáltatásaink bármelyikének használatával Ön elfogadja ezt az Adatvédelmi Szabályzatot. Ha nem ért egyet azzal, hogy személyes adatait a jelen Szabályzattal összhangban felhasználjuk, azonnal abba kell hagynia Szolgáltatásaink használatát.",
    policyOverview:
      "Ebben a szabályzatban a következőket ismertetjük: milyen adatokat gyűjtünk és miért; hogyan kezeljük az adatait; és milyen jogai vannak az adataival kapcsolatban. Az adatait nem értékesítjük.",
    scopeTitle: "1. Az adatvédelmi irányelvek hatálya",
    whatWeCollectTitle: "2. Mit gyűjtünk és miért",
    accessShareTitle:
      "3. Mikor férünk hozzá az adataihoz, vagy mikor osztjuk meg azokat",
    secureDataTitle: "4. Hogyan védjük az adatait",
    deleteContentTitle: "5. Mi történik, ha törlöd a tartalmaidat?",
    locationTitle: "6. A webhely és az adatok helye",
    childrenPrivacyTitle: "7. Gyermekek adatainak védelme",
    updatesTitle: "8. Az adatvédelmi irányelvek frissítései",
    contactUsTitle: "9. Kapcsolatfelvétel",
    identityAccessTitle: "2.1 Azonosítás és hozzáférés",
    billingInfoTitle: "2.2 Számlázási információk",
    productInteractionsTitle: "2.3 Termékkölcsönhatások",
    websiteInteractionsTitle: "2.4 Weboldalon belüli interakciók",
    cookiesTitle: "2.5 Sütik",
    voluntaryCorrespondenceTitle: "2.6 Önkéntes levelezés",
    scopeContent:
      "Ez az Adatvédelmi Szabályzat kizárólag a Szolgáltatások felhasználóival kapcsolatos információk gyűjtésére és feldolgozására vonatkozik. Ez az Adatvédelmi Szabályzat nem vonatkozik harmadik felek által üzemeltetett, hozzánk kapcsolódó szolgáltatásokra, weboldalakra vagy szoftverekre (függetlenül attól, hogy mi biztosítjuk ezeket a linkeket, vagy más felhasználók megosztják azokat), valamint nem vonatkozik harmadik felektől származó tartalmakra, adatokra, alkalmazásokra vagy anyagokra. Javasoljuk, hogy ellenőrizze a harmadik fél weboldalainak vagy szoftvereinek adatvédelmi szabályzatát, mielőtt bármilyen információt megadna nekik.",
    collectPrinciple:
      "A vezérelvünk, hogy csak azt gyűjtsük be, amire szükségünk van. Íme, mit jelent ez a gyakorlatban:",
    identityAccessContent:
      "Amikor regisztrál valamelyik termékünkre, olyan azonosító adatokat kérünk Öntől, mint a neve és az e-mail címe. Erre azért van szükség, hogy biztosítsuk a termék alapvető funkcióit, és hogy termékfrissítéseket és egyéb lényeges információkat küldhessünk Önnek.",
    billingInfoContent:
      "Ha fizetős termékre regisztrál, meg kell adnia fizetési adatait és számlázási címét. A fizetési információk közvetlenül a fizetésfeldolgozónknak kerülnek elküldésre, és nem kerülnek a szervereinkre.",
    productInteractionsContent:
      "A szervereinken tároljuk azokat a tartalmakat, amelyeket feltöltött, fogadott vagy a termékfiókjaiban tárol. Amíg Ön nem törli ezeket a tartalmakat, addig megőrizhetjük őket, amíg a fiókja aktív.",
    websiteInteractionsContent:
      "Elemzési és statisztikai célokra, például konverziós arány teszteléséhez és új termékdizájnokkal való kísérletezéshez gyűjtünk információkat a böngészési tevékenységéről. Ez magában foglalja például a böngésző és az operációs rendszer verzióit, az IP-címét, a meglátogatott weboldalakat és azok betöltési idejét, valamint azt, hogy melyik webhely irányította Önt hozzánk. Ha van fiókja és be van jelentkezve, ezeket a webanalitikai adatokat az IP-címéhez és a felhasználói fiókjához kötjük, amíg a fiókja már nem aktív.",
    cookiesContent1:
      "Állandó első féltől származó sütiket és néhány harmadik féltől származó sütit is használunk bizonyos beállítások tárolására, alkalmazásaink használatának megkönnyítésére, A/B tesztelés elvégzésére, valamint bizonyos elemzések támogatására.",
    cookiesContent2:
      "A süti egy szöveges fájl, amelyet a böngészője tárol. Segíthet megjegyezni a bejelentkezési adatokat és a webhely beállításait. Olyan információkat is gyűjthet, mint a böngésző típusa, az operációs rendszer, a meglátogatott weboldalak, a látogatás időtartama, a megtekintett tartalom és egyéb kattintásfolyam-adatok. A böngésző beállításaiban módosíthatja a sütik megőrzési beállításait, valamint elfogadhatja vagy blokkolhatja az egyes sütiket, bár az alkalmazásaink nem fognak működni, és szolgáltatásunk más részei sem biztos, hogy megfelelően fognak működni, ha kikapcsolja a sütiket.",
    voluntaryCorrespondenceContent:
      "Amikor kérdéssel vagy segítségkéréssel fordul hozzánk e-mailben, megőrizzük ezt a levelezést, beleértve az Ön e-mail címét is, hogy a jövőben hivatkozni tudjunk a korábbi levelezésekre.",
    accessShareContent1:
      "Az Ön által kért termékek vagy szolgáltatások biztosítása érdekében. Néhány harmadik féltől származó alfeldolgozót veszünk igénybe alkalmazásaink futtatásához és a Szolgáltatások nyújtásához. Ide tartoznak a felhő- és elemzőszolgáltatók.",
    accessShareContent2:
      "A visszaélések kivizsgálása, megelőzése vagy az azokkal kapcsolatos intézkedések megtétele. Az ügyfél fiókjához való hozzáférés a potenciális visszaélések kivizsgálása során csak végső megoldás. Szeretnénk megvédeni mind ügyfeleink, mind a problémákat nekünk bejelentő személyek adatainak védelmét és biztonságát, és mindent megteszünk annak érdekében, hogy egyensúlyt teremtsünk e felelősségi körök között a folyamat során. Ha felfedezzük, hogy termékeinket korlátozott célra használja, a szükséges intézkedéseket megtesszük, beleértve az illetékes hatóságok értesítését is, ahol indokolt.",
    accessShareContent3: "Amikor a vonatkozó jogszabályok előírják.",
    userDataRequests:
      "- Felhasználói adatokra vonatkozó kérelmek. Irányelveink szerint nem válaszolunk felhasználói adatokra vonatkozó kormányzati kérelmekre, kivéve, ha jogi eljárás vagy korlátozott körülmények között vészhelyzet esetén erre kötelez minket. Ha azonban az Egyesült Államok bűnüldöző hatóságai rendelkeznek a szükséges paranccsal, büntetőjogi idézéssel vagy bírósági végzéssel, amely előírja számunkra az adatok megosztását, akkor kötelesek vagyunk eleget tenni a kérésnek. Hasonlóképpen, az Egyesült Államokon kívüli kormányzati hatóságok kérelmeire csak akkor válaszolunk, ha az Egyesült Államok kormánya a kölcsönös jogsegélyszerződésben vagy megállapodásban meghatározott eljárásokon keresztül kötelez minket. Irányelveink szerint az érintett felhasználókat az adatok megosztása előtt értesítjük, kivéve, ha erre törvény tilt minket, és kivéve néhány vészhelyzetet.",
    preservationRequests:
      "- Megőrzési kérelmek. Hasonlóképpen, szabályzatunk szerint az adatok megőrzésére irányuló kérelmeket csak akkor teljesítjük, ha azt az Egyesült Államok Szövetségi Tárolt Hírközlési Törvénye, a 18 USC 2703(f) szakasza, vagy megfelelően kézbesített amerikai idézés írja elő polgári ügyekben. Nem osztunk meg megőrzött adatokat, kivéve, ha törvény írja elő, vagy olyan bírósági végzés írja elő, amely ellen úgy döntünk, hogy nem fellebbezünk. Továbbá, kivéve, ha a szükséges megőrzési időszak lejárta előtt megfelelő parancsot, bírósági végzést vagy idézést kapunk, a megőrzési időszak végén megsemmisítjük az ügyféladatok megőrzött másolatait.",
    taxAudit:
      "- Ha adóhatóság ellenőrzi a cégünket, előfordulhat, hogy meg kell osztanunk a számlázással kapcsolatos információkat. Ebben az esetben csak a legszükségesebbeket osztjuk meg, például a számlázási címeket és az adómentességi információkat.",
    secureDataContent1: "Minden adat titkosítva van a következőn keresztül:",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "amikor szervereinkről továbbítják az Ön böngészőjébe.",
    deleteContentContent:
      "Ha bármilyen tartalmat töröl, az azonnal elérhetetlenné válik.",
    locationContent:
      "Termékeinket és egyéb webes felületeinket az Amerikai Egyesült Államokban üzemeltetjük. Ha az Európai Unióban, az Egyesült Királyságban vagy az Amerikai Egyesült Államokon kívül tartózkodik, kérjük, vegye figyelembe, hogy az Ön által megadott összes információ az Amerikai Egyesült Államokba kerül átvitelre és ott kerül tárolásra. Weboldalaink vagy Szolgáltatásaink használatával és/vagy személyes adatainak megadásával Ön hozzájárul ehhez az adatátvitelhez.",
    childrenPrivacyContent:
      "A Szolgáltatások nem gyermekeknek szólnak, és tudatosan nem gyűjtünk Személyes adatokat 13 év alatti gyermekektől. Ha Ön 13 év alatti, kérjük, ne adjon meg semmilyen személyes adatot a Szolgáltatásokon keresztül. Ha úgy gondolja, hogy egy gyermek a jelen Szabályzatot megsértve adott meg nekünk Személyes adatokat, kérjük, vegye fel velünk a kapcsolatot az alábbiakban megadott módon.",
    updatesContent:
      "Szükség szerint frissíthetjük ezt a szabályzatot, hogy megfeleljen a vonatkozó szabályozásoknak és tükrözze az új gyakorlatokat. Szabályzataink jelentős módosítása esetén frissítjük a dátumot az oldal tetején.",
    contactUsContent1:
      "Ha bármilyen kérdése, észrevétele vagy panasza van az Adatvédelmi Szabályzatunkkal kapcsolatban, kérjük,",
    contactUs: "lépjen kapcsolatba velünk",
    contactUsContent2:
      "és igyekszünk a lehető leghamarabb foglalkozni a panaszával."
  },
  termsOfService: {
    termsOfServiceTitle: "Szolgáltatási feltételek",
    lastUpdated: "Utolsó frissítés: 2022. szeptember 21.",
    thankYouMessage: "Köszönjük, hogy termékeinket használja!",
    companyReference:
      "Amikor ebben a dokumentumban a „Vállalat”, „mi”, „minket” vagy „minket” kifejezéseket használjuk, a Scribify-ra utalunk.",
    servicesDefinition:
      "Amikor azt mondjuk, hogy „Szolgáltatások”, akkor a Scribify által létrehozott és karbantartott bármely terméket értünk alatta, függetlenül attól, hogy webböngészőn, asztali alkalmazáson, mobilalkalmazáson vagy más formátumon belül kerül-e kézbesítésre.",
    termsUpdateNotice:
      "Előfordulhat, hogy a jövőben frissítjük ezeket a Szolgáltatási Feltételeket. Ezek a változtatások jellemzően a feltételek egy részének tisztázását célozták egy kibővített kapcsolódó szabályzatra mutató hivatkozás révén. Valahányszor jelentős változtatást hajtunk végre szabályzatainkban, frissítjük az oldal tetején található dátumot, és megteszünk minden egyéb megfelelő lépést a fióktulajdonosok értesítése érdekében.",
    acceptanceOfAgreementTitle: "1. A megállapodás elfogadása",
    scribifyServicesTitle: "2. A Scribify szolgáltatásai",
    accountTermsTitle: "3. Fiókfeltételek",
    paymentRefundsTitle: "4. Fizetés, visszatérítések és csomagmódosítások",
    cancellationTerminationTitle: "5. Lemondás és megszüntetés",
    submissionsTitle: "6. Beküldések",
    uptimeSecurityTitle: "7. Üzemidő és biztonság",
    siteManagementTitle: "8. Telephelykezelés",
    copyrightContentTitle: "9. Szerzői jogok és tartalom tulajdonjoga",
    prohibitedActivitiesTitle: "10. Tiltott tevékenységek",
    featuresBugsTitle: "11. Funkciók és hibák",
    correctionsTitle: "12. HIBAJAVÍTÁSOK",
    userDataTitle: "13. Felhasználói adatok",
    privacyPolicyTitle: "14. Adatvédelmi irányelvek",
    liabilityTitle: "15. Felelősség",
    miscellaneousTitle: "16. Egyéb",
    contactUsTitle: "17. Kapcsolatfelvétel",
    acceptanceContent1:
      "Szolgáltatásaink használatával Ön jelzi, hogy elfogadja ezt a Megállapodást, amely ezáltal kötelező érvényű szerződéssé válik Ön és a Scribify között. Ön kijelenti, hogy jogilag képes elfogadni ezeket a Feltételeket, és megerősíti, hogy betöltötte a kötelező érvényű szerződés megkötéséhez szükséges nagykorút. A Scribify elfogadása kifejezetten attól függ, hogy Ön beleegyezik-e a jelen Megállapodás összes feltételébe.",
    acceptanceContent2:
      "A Szolgáltatások nem 18 év alatti személyek számára készültek, és azokat nem szabad 18 év alatti személyek használniuk. A Szolgáltatások használatával Ön kijelenti és szavatolja, hogy megfelel a fenti jogosultsági követelményeknek.",
    acceptanceContent3:
      "Az „Ön”, „Öné”, „Maga” kifejezések magukban foglalják az Ön alkalmazottait, ügynökeit, üzleti képviselőit és minden más személyt is, akiknek Ön hozzáférést biztosít a Szolgáltatásokhoz a Fiókján (az alábbiakban meghatározottak szerint) keresztül. Ön felelős azért, hogy mindenki, aki az Ön fiókján keresztül fér hozzá a Szolgáltatásokhoz, tisztában legyen ezekkel a Feltételekkel és betartsa azokat.",
    acceptanceContent4:
      "A Scribify fenntartja a jogot, hogy ezeket a Feltételeket időről időre saját belátása szerint felülvizsgálja és frissítse. Minden módosítás a közzétételt követően azonnal hatályba lép. A Szolgáltatások további használata a felülvizsgált Feltételek közzétételét követően azt jelenti, hogy elfogadja és egyetért a módosításokkal. Elvárjuk, hogy időről időre ellenőrizze ezt az oldalt, hogy tisztában legyen a változásokkal, mivel azok kötelező érvényűek Önre nézve.",
    servicesContent1:
      "Szolgáltatásaink lehetővé teszik a felhasználók számára, hogy hangbeszélgetéseket átírt szöveggé alakítsanak, amely kereshető, lefordítható és megosztható másokkal.",
    servicesContent2:
      "Eldöntheti, hogy a Szolgáltatások ingyenes verzióját („Ingyenes Szolgáltatások”) vagy az előfizetéses, fizetős verzióját használja, amelyért díjat kell fizetnie („Fizetős Szolgáltatások”).",
    servicesContent3:
      "Mi biztosítjuk az Ön számára a Szolgáltatásokat. Ön felelős minden szükséges intézkedés megtételéért a Szolgáltatásokhoz való hozzáférés érdekében.",
    accountTerms1:
      "- Ön felelős fiókja biztonságának megőrzéséért. A Társaság nem vállal és nem is vállal felelősséget semmilyen veszteségért vagy kárért, amely a biztonsági kötelezettség be nem tartásából ered.",
    accountTerms2:
      "- A Szolgáltatásokat nem használhatja semmilyen jogellenes, etikátlan vagy erkölcstelen célra.",
    accountTerms3:
      "- Ön felelős a fiókjában közzétett összes tartalomért és tevékenységért. Ez magában foglalja azokat a tartalmakat is, amelyeket mások tettek közzé, akik: (a) hozzáférnek az Ön bejelentkezési adataihoz; vagy (b) saját bejelentkezési adatokkal rendelkeznek az Ön fiókjában.",
    accountTerms4:
      "- Embernek kell lenned. &quot;Botok&quot; vagy más automatizált módszerek által regisztrált fiókok nem engedélyezettek.",
    paymentContent1:
      "- Az ingyenes próbaidőszakot kínáló fizetős Szolgáltatások esetében a regisztrációkor ismertetjük a próbaidőszak hosszát. A próbaidőszak lejárta után előre kell fizetnie a Szolgáltatás további használatához. Ha nem fizet, a szolgáltatások megszűnnek.",
    paymentContent2:
      "- Ha ingyenes csomagról fizetős csomagra frissít, azonnal megterheljük a kártyáját, és a számlázási ciklus a frissítés napján kezdődik.",
    paymentContent3:
      "- Minden díj nem tartalmazza az adóhatóságok által kivetett adókat, illetékeket vagy vámokat. Szükség esetén az adóhatóság nevében beszedjük ezeket az adókat, és átutaljuk azokat az adóhatóságoknak. Ellenkező esetben Ön felelős minden adó, illeték vagy vám megfizetéséért.",
    paymentContent4:
      "- A vásárlások vételára nem visszatéríthető. Bármikor lemondhatja a fizetős szolgáltatásokat a fiókjába való bejelentkezéssel. Fizetős előfizetések esetén a lemondás az aktuális fizetős időszak végén lép hatályba, hacsak másként nem jelezzük.",
    cancellationContent1:
      "- Ha a Szolgáltatást a kifizetett időszak vége előtt lemondja, a lemondás azonnal hatályba lép, és nem számítunk fel több díjat. A fel nem használt időt nem arányosítjuk automatikusan az utolsó számlázási ciklusban.",
    cancellationContent2:
      "- Jogunkban áll bármikor, bármilyen okból felfüggeszteni vagy megszüntetni fiókját, és megtagadni Szolgáltatásaink jelenlegi vagy jövőbeni használatát. A felfüggesztés azt jelenti, hogy nem fog tudni hozzáférni a fiókhoz vagy a fiókban található tartalmakhoz. A megszüntetés továbbá a fiókja vagy a fiókjához való hozzáférés törlését, valamint a fiókjában található összes tartalom elvesztését és feladását vonja maga után. Fenntartjuk a jogot arra is, hogy bármikor, bármilyen okból megtagadjuk a Szolgáltatások használatát bárkitől. Ezt a záradékot azért alkalmazzuk, mert statisztikailag nézve a Szolgáltatásainkon található több százezer fiók közül legalább egy valami rosszindulatú dolgot tesz.",
    cancellationContent3:
      "- A vállalati alkalmazott vagy tisztviselő szóbeli, fizikai, írásbeli vagy egyéb bántalmazása (beleértve a bántalmazással vagy megtorlással való fenyegetést is) a fiók azonnali megszüntetését vonhatja maga után.",
    submissionsContent:
      "Ön tudomásul veszi és elfogadja, hogy az Ön által a Webhellyel kapcsolatban („Beküldések”) megadott kérdések, megjegyzések, javaslatok, ötletek, visszajelzések vagy egyéb információk nem bizalmasak, és a mi kizárólagos tulajdonunkat képezik. Kizárólagos jogokkal rendelkezünk, beleértve az összes szellemi tulajdonjogot is, és jogosultak vagyunk ezen Beküldések korlátlan felhasználására és terjesztésére bármilyen jogszerű, kereskedelmi vagy egyéb célra, az Ön elismerése vagy kártalanítása nélkül. Ön ezennel lemond minden erkölcsi jogáról az ilyen Beküldésekhez, és ezennel szavatolja, hogy az ilyen Beküldések eredetiek Öntől, vagy hogy Önnek joga van azokat benyújtani. Ön beleegyezik, hogy velünk szemben nem támasztható jogorvoslat a Beküldéseivel kapcsolatos bármely tulajdonjog állítólagos vagy tényleges megsértése vagy jogtalan elsikkasztása miatt.",
    uptimeContent1:
      "- A Szolgáltatások használata kizárólag az Ön felelősségére történik. Ezeket a Szolgáltatásokat „ahogy van” és „ahogy elérhető” alapon biztosítjuk. A legtöbb Szolgáltatásunkra nem kínálunk szolgáltatási szintű megállapodásokat, de komolyan vesszük alkalmazásaink üzemidejét.",
    uptimeContent2:
      "- Fenntartjuk a jogot, hogy ideiglenesen letiltsuk fiókját, amennyiben a használat jelentősen meghaladja a Szolgáltatások más ügyfeleinek tipikus használati szintjét. Természetesen a további lépések megtétele előtt felvesszük Önnel a kapcsolatot, kivéve azokat a ritka eseteket, amikor a használat szintje negatívan befolyásolhatja a Szolgáltatás teljesítményét más ügyfelek számára.",
    uptimeContent3:
      "- Számos intézkedést teszünk adatainak védelme és biztonsága érdekében biztonsági mentések, redundanciák és titkosítás révén. A nyilvános interneten keresztüli adatátvitel során titkosítást alkalmazunk.",
    uptimeContent4:
      "- Harmadik fél beszállítókat és tárhelyszolgáltató partnereket veszünk igénybe a Szolgáltatások futtatásához szükséges hardver, szoftver, hálózatépítés, tárhely és kapcsolódó technológia biztosításához.",
    siteManagementContent:
      "Fenntartjuk a jogot, de nem a kötelezettséget, hogy: (1) figyelemmel kísérjük a Weboldalt a jelen Szolgáltatási Feltételek megsértése szempontjából; (2) megfelelő jogi lépéseket tegyünk bárkivel szemben, aki saját belátásunk szerint megsérti a törvényt vagy a jelen Szolgáltatási Feltételeket, beleértve korlátozás nélkül az ilyen felhasználó bejelentését a bűnüldöző hatóságoknak; (3) saját belátásunk szerint és korlátozás nélkül megtagadjuk, korlátozzuk a hozzáférést, korlátozzuk az elérhetőségét vagy letiltjuk (amennyire technológiailag megvalósítható) az Ön Hozzájárulásait vagy azok bármely részét; (4) saját belátásunk szerint és korlátozás nélkül, értesítés vagy felelősségvállalás nélkül eltávolítsuk a Weboldalról vagy más módon letiltsuk az összes olyan fájlt és tartalmat, amely túlzott méretű vagy bármilyen módon terhet jelent a rendszereinkre; és (5) egyéb módon kezeljük a Weboldalt jogaink és tulajdonunk védelme, valamint a Weboldal megfelelő működésének elősegítése érdekében.",
    copyrightContent1:
      "- A Szolgáltatásokon közzétett összes tartalomnak meg kell felelnie az Egyesült Államok szerzői jogi törvényeinek.",
    copyrightContent2:
      "- Nem tartunk igényt szellemi tulajdonjogokra az Ön által a Szolgáltatásoknak megadott anyagok felett. Minden feltöltött anyag az Ön tulajdonában marad.",
    copyrightContent3:
      "- Nem végzünk előzetes tartalomszűrést, de fenntartjuk a jogot (de nem a kötelezettséget), hogy saját belátásunk szerint elutasítsuk vagy eltávolítsuk a Szolgáltatáson keresztül elérhető tartalmakat.",
    copyrightContent4:
      "- A Szolgáltatások nevei, kinézete és hangulata szerzői jogvédelem alatt állnak a Vállalat számára. Minden jog fenntartva. A HTML, CSS, JavaScript vagy vizuális elemek semmilyen részét nem másolhatja, sokszorosíthatja vagy újrafelhasználhatja a Vállalat kifejezett írásbeli engedélye nélkül. A Vállalat logójának vagy bármely Szolgáltatás logójának promóciós célokra történő felhasználásához engedélyt kell kérnie. Kérjük,",
    emailUs: "írjon nekünk",
    copyrightContent5:
      "logók használatára vonatkozó kérések. Fenntartjuk a jogot, hogy visszavonjuk ezt az engedélyt, ha megsérti ezeket a Szolgáltatási Feltételeket.",
    copyrightContent6:
      "- Ön beleegyezik, hogy a Társaság kifejezett írásbeli engedélye nélkül nem reprodukálja, másolja, adja el, értékesíti tovább vagy hasznosítja a Szolgáltatások bármely részét, a Szolgáltatások használatát vagy a Szolgáltatásokhoz való hozzáférést.",
    copyrightContent7:
      "- Tilos más weboldalakat úgy módosítani, hogy hamisan azt sugallja, hogy azok a Szolgáltatásokhoz vagy a Társasághoz kapcsolódnak.",
    copyrightContent8:
      "- Tiszteletben tartjuk mások szellemi tulajdonjogait. Ha úgy gondolja, hogy a weboldalon vagy azon keresztül elérhető bármely anyag sérti az Ön tulajdonában lévő vagy ellenőrzése alatt álló szerzői jogokat, kérjük, azonnal",
    contactUs: "lépjen kapcsolatba velünk",
    copyrightContent9:
      "Értesítésének egy példányát elküldjük annak a személynek, aki közzétette vagy tárolta az Értesítésben említett anyagot. Tájékoztatjuk, hogy a vonatkozó törvények értelmében kártérítési felelősségre vonható, ha az Értesítésben lényegesen félrevezető információkat tesz. Ezért, ha nem biztos abban, hogy a Webhelyen található vagy azon keresztül linkelt anyag sérti-e a szerzői jogait, először érdemes ügyvédhez fordulnia.",
    prohibitedActivitiesIntro:
      "A Weboldalt nem használhatja más célra, mint amelyre a Weboldalt elérhetővé tettük. A Weboldal nem használható kereskedelmi célokra, kivéve azokat, amelyeket kifejezetten támogatunk vagy jóváhagyunk.",
    prohibitedActivitiesUserAgreement:
      "A Webhely felhasználójaként Ön beleegyezik, hogy nem:",
    prohibitedActivity1:
      "- Szisztematikusan adatokat vagy egyéb tartalmakat lekérni a webhelyről gyűjtemény, összeállítás, adatbázis vagy könyvtár létrehozása vagy összeállítása céljából, közvetlenül vagy közvetve, írásos engedélyünk nélkül.",
    prohibitedActivity2:
      "- Ne csapjon be, ne csapjon be vagy tévesszen meg minket és más felhasználókat, különösen bizalmas fiókadatok, például felhasználói jelszavak megszerzésére tett kísérlet esetén.",
    prohibitedActivity3:
      "- A Webhely biztonsággal kapcsolatos funkcióinak megkerülése, letiltása vagy egyéb módon történő zavarása, beleértve azokat a funkciókat is, amelyek megakadályozzák vagy korlátozzák a Tartalom használatát vagy másolását, illetve korlátozásokat szabnak meg a Webhely és/vagy az abban található Tartalom használatára vonatkozóan.",
    prohibitedActivity4:
      "- Véleményünk szerint becsmérelni, becsmérelni vagy más módon károsítani minket és/vagy a weboldalt.",
    prohibitedActivity5:
      "- A webhelyről származó információk felhasználása más személyek zaklatására, bántalmazására vagy károsítására.",
    prohibitedActivity6:
      "- Nem megfelelően használja a támogatási szolgáltatásainkat, vagy hamis bejelentéseket tesz visszaélésekről vagy helytelen viselkedésről.",
    prohibitedActivity7:
      "- A weboldal használata a vonatkozó törvényekkel vagy szabályozásokkal ellentétes módon.",
    prohibitedActivity8:
      "- A webhely jogosulatlan keretezésében vagy a webhelyre mutató hivatkozások használatában részt venni.",
    prohibitedActivity9:
      "- Vírusok, trójai programok vagy egyéb olyan anyagok feltöltése vagy továbbítása (vagy feltöltésének vagy továbbításának megkísérlése), beleértve a nagybetűk túlzott használatát és a spammelést (ismétlődő szöveg folyamatos közzététele), amelyek zavarják bármely fél számára a Webhely zavartalan használatát és élvezetét, vagy módosítják, rontják, megzavarják, megváltoztatják vagy zavarják a Webhely használatát, funkcióit, működését vagy karbantartását.",
    prohibitedActivity10:
      "- A rendszer bármilyen automatizált használatában részt venni, például szkriptek használata megjegyzések vagy üzenetek küldésére, illetve adatbányászati, robotok vagy hasonló adatgyűjtő és -kinyerő eszközök használata.",
    prohibitedActivity11:
      "- Törölje a szerzői jogi vagy egyéb tulajdonjogokra vonatkozó közleményt bármely Tartalomból.",
    prohibitedActivity12:
      "- Más felhasználónak vagy személynek kiadni magát, vagy más felhasználó felhasználónevét használni próbálni.",
    prohibitedActivity13:
      "- Olyan anyag feltöltése vagy továbbítása (vagy feltöltésének vagy továbbításának megkísérlése), amely passzív vagy aktív információgyűjtési vagy -továbbítási mechanizmusként működik, beleértve korlátozás nélkül az átlátszó grafikus csereformátumokat („gif”), az 1×1 pixeleket, a webbugokat, a sütiket vagy más hasonló eszközöket (néha „kémprogramnak” vagy „passzív gyűjtési mechanizmusoknak” vagy „pcms”-eknek is nevezik).",
    prohibitedActivity14:
      "- A webhely vagy a webhelyhez kapcsolódó hálózatok vagy szolgáltatások zavarása, megzavarása vagy indokolatlan terhelése.",
    prohibitedActivity15:
      "- Zaklatni, bosszantani, megfélemlíteni vagy fenyegetni a Webhely bármely részének az Ön számára történő biztosításában részt vevő alkalmazottainkat vagy ügynökeinket.",
    prohibitedActivity16:
      "- Megkísérelni megkerülni a Webhely azon intézkedéseit, amelyek célja a Webhelyhez vagy annak bármely részéhez való hozzáférés megakadályozása vagy korlátozása.",
    prohibitedActivity17:
      "- A webhely szoftverének másolása vagy adaptálása, beleértve, de nem kizárólagosan a Flash, PHP, HTML, JavaScript vagy egyéb kódokat.",
    prohibitedActivity18:
      "- A vonatkozó törvények által megengedett esetek kivételével tilos megfejteni, visszafejteni, szétszerelni vagy visszafejteni a Webhely részét képező vagy azt bármilyen módon alkotó szoftvereket.",
    prohibitedActivity19:
      "- Kivéve, ha az a szokásos keresőmotor vagy internetböngésző használatának eredménye, ne használjon, indítson, fejlesszen vagy terjesszen bármilyen automatizált rendszert, beleértve korlátozás nélkül bármely pókot, robotot, csaló segédprogramot, adatkaparót vagy offline olvasót, amely hozzáfér a webhelyhez, illetve ne használjon vagy indítson el jogosulatlan szkriptet vagy egyéb szoftvert.",
    prohibitedActivity20:
      "- Vásárlóközvetítőt vagy beszerzési ügynököt igénybe venni a weboldalon történő vásárlásokhoz.",
    prohibitedActivity21:
      "- A Webhely jogosulatlan használata, beleértve a felhasználók felhasználóneveinek és/vagy e-mail címeinek elektronikus vagy egyéb módon történő gyűjtését kéretlen e-mailek küldése céljából, illetve felhasználói fiókok automatizált eszközökkel vagy hamis ürügyeken történő létrehozását.",
    prohibitedActivity22:
      "- A Webhely használata bármilyen, velünk való versenyzésre irányuló erőfeszítés részeként, illetve a Webhely és/vagy a Tartalom bármilyen bevételt termelő tevékenységre vagy kereskedelmi vállalkozásra való felhasználása.",
    prohibitedActivity23:
      "- A weboldal használata áruk és szolgáltatások hirdetésére vagy eladásra kínálására.",
    prohibitedActivity24: "- Eladni vagy más módon átruházni a profilodat.",
    featuresContent1:
      "Szolgáltatásainkat gondosan tervezzük meg, saját tapasztalataink és az idejüket és visszajelzéseiket megosztó ügyfeleink véleménye alapján. Azonban nincs olyan, hogy mindenki elégedett legyen. Nem garantáljuk, hogy Szolgáltatásaink megfelelnek az Ön egyedi igényeinek vagy elvárásainak.",
    featuresContent2:
      "A kiszállítás előtt minden funkciónkat teszteljük. Mint minden szoftver esetében, Szolgáltatásainkban is elkerülhetetlenül előfordulhatnak hibák. Nyomon követjük a nekünk jelentett hibákat, és kijavítjuk őket, különösen a biztonsággal vagy adatvédelemmel kapcsolatosakat. Nem minden jelentett hibát javítunk ki, és nem garantáljuk a Szolgáltatások teljesen hibamentes működését.",
    correctionsContent1:
      "A weboldalon előfordulhatnak olyan információk, amelyek tipográfiai hibákat, pontatlanságokat vagy hiányosságokat tartalmaznak, beleértve a leírásokat, az árakat, az elérhetőséget és különféle egyéb információkat. Fenntartjuk a jogot, hogy a hibákat, pontatlanságokat vagy hiányosságokat bármikor, előzetes értesítés nélkül kijavítsuk, valamint a weboldalon található információkat megváltoztassuk vagy frissítsük.",
    correctionsContent2:
      "Nem garantálhatjuk, hogy az Oldal mindenkor elérhető lesz. Előfordulhatnak hardver-, szoftver- vagy egyéb problémák, illetve karbantartásra lehet szükség az Oldallal kapcsolatban, ami megszakításokat, késéseket vagy hibákat eredményezhet. Fenntartjuk a jogot, hogy az Oldal bármikor és bármilyen okból, előzetes értesítés nélkül megváltoztassuk, felülvizsgáljuk, frissítsük, felfüggesszük, megszüntessük vagy egyéb módon módosítsuk. Ön beleegyezik, hogy semmilyen felelősséget nem vállalunk semmilyen veszteségért, kárért vagy kellemetlenségért, amelyet az Oldal leállása vagy megszűnése miatt az Oldal elérésének vagy használatának hiánya okoz. A jelen Szolgáltatási Feltételekben semmi sem értelmezhető úgy, hogy kötelezne minket az Oldal karbantartására és támogatására, illetve az azzal kapcsolatos javítások, frissítések vagy kiadások biztosítására.",
    userDataContent:
      "Bizonyos adatokat, amelyeket Ön a Webhelyre továbbít, a Webhely teljesítményének kezelése céljából, valamint a Webhely használatával kapcsolatos adatokat is megőrizzük. Bár rendszeres biztonsági mentéseket készítünk az adatokról, Ön kizárólagosan felelős minden olyan adatért, amelyet Ön továbbít, vagy amely a Webhely használatával végzett tevékenységéhez kapcsolódik. Ön beleegyezik, hogy nem vállalunk felelősséget az ilyen adatok elvesztéséért vagy sérüléséért, és ezennel lemond minden olyan jogról, amely az ilyen adatok elvesztéséből vagy sérüléséből eredhet ellenünk.",
    privacyPolicyContent1:
      "Törődünk az adatvédelemmel és -biztonsággal. Kérjük, tekintse át a következőt:",
    privacyPolicy: "Adatvédelmi irányelvek",
    privacyPolicyContent2:
      "A Webhely használatával Ön elfogadja, hogy az Adatvédelmi Szabályzatunk kötelező érvényű Önre, amely a jelen Szolgáltatási Feltételek részét képezi. Tájékoztatjuk, hogy a Webhely az Amerikai Egyesült Államokban található. Ha a világ bármely más régiójából éri el a Webhelyet, ahol a személyes adatok gyűjtésére, felhasználására vagy közzétételére vonatkozó törvények vagy egyéb követelmények eltérnek az Amerikai Egyesült Államokban alkalmazandó törvényektől, akkor a Webhely további használatával adatait az Amerikai Egyesült Államokba továbbítja, és hozzájárul ahhoz, hogy adatait az Amerikai Egyesült Államokba továbbítsák és ott dolgozzák fel.",
    liabilityIntro:
      "A felelősségre vonatkozó általános szerződési feltételek mindegyikében említést teszünk, de hogy mindent egy helyen összefoglaljunk:",
    liabilityContent:
      "Ön kifejezetten tudomásul veszi és elfogadja, hogy a Társaság jogi vagy méltányossági alapon nem vállal felelősséget Önnel vagy harmadik féllel szemben semmilyen közvetlen, közvetett, véletlenszerű, elmaradt haszonért, különleges, következményes, büntető vagy elítélő kárért, beleértve, de nem kizárólagosan, az elmaradt haszonért, a jó hírnévért, a használatért, az adatokért vagy egyéb immateriális veszteségekért járó károkat (még akkor sem, ha a Társaságot tájékoztatták az ilyen károk lehetőségéről), amelyek a következőkből erednek: (1) a Szolgáltatások használatából vagy a használatuk lehetetlenségéből; (2) a tartalom és az anyagok hibáiból, tévedéseiből vagy pontatlanságaiból; (3) a webhelyhez való hozzáféréséből és használatából eredő bármilyen személyi sérülésből vagy vagyoni kárból; (4) a Szolgáltatásokon keresztül vagy azokból vásárolt vagy megszerzett árukból, adatokból, információkból vagy szolgáltatásokból, fogadott üzenetekből vagy végrehajtott tranzakciókból eredő helyettesítő áruk és szolgáltatások beszerzésének költségei; (5) biztonságos szervereinkhez és/vagy az azokon tárolt személyes adatokhoz és/vagy pénzügyi információkhoz való jogosulatlan hozzáférés vagy azok használata; (6) a webhelyre vagy a webhelyről történő adatátvitel megszakításából vagy megszüntetéséből; (7) bármely harmadik fél által a webhelyre vagy azon keresztül továbbított hibáért, vírusért, trójai vírusért vagy hasonlóért, és/vagy; (8) bármely tartalomban és anyagban található hibáért vagy hiányosságért, illetve a webhelyen közzétett, továbbított vagy más módon elérhetővé tett tartalom használatából eredő bármilyen veszteségért vagy kárért; (9) bármely harmadik fél nyilatkozatáért vagy magatartásáért a szolgáltatással kapcsolatban; (10) vagy bármely más, a jelen Szolgáltatási Feltételekkel vagy a Szolgáltatásokkal kapcsolatos ügyért, legyen az szerződésszegés, károkozás (beleértve az aktív vagy passzív gondatlanságot is), vagy bármely más felelősségi elmélet.",
    miscellaneousContent:
      "Jelen Szolgáltatási Feltételek, valamint az általunk a Webhelyen vagy a Webhelyre vonatkozóan közzétett irányelvek vagy működési szabályok alkotják a teljes megállapodást és egyetértést Ön és köztünk. A jelen Szolgáltatási Feltételekben foglalt bármely jog vagy rendelkezés gyakorlásának vagy érvényesítésének elmulasztása nem jelenti az ilyen jogról vagy rendelkezésről való lemondást. Jelen Szolgáltatási Feltételek a törvény által megengedett legteljesebb mértékben érvényesek. Jogainkat és kötelezettségeinket bármikor átruházhatjuk másokra. Nem vállalunk felelősséget semmilyen veszteségért, kárért, késedelemért vagy mulasztásért, amelyet az ésszerű ellenőrzésünkön kívül eső ok okoz. Ha a jelen Szolgáltatási Feltételek bármely rendelkezése vagy annak egy része jogellenesnek, semmisnek vagy végrehajthatatlannak bizonyul, az adott rendelkezés vagy annak egy része elválaszthatónak tekintendő a jelen Szolgáltatási Feltételektől, és nem befolyásolja a fennmaradó rendelkezések érvényességét és végrehajthatóságát. A jelen Szolgáltatási Feltételek vagy a Webhely használata eredményeként nem jön létre köztünk közös vállalkozás, partnerség, munkaviszony vagy ügynöki viszony. Ön beleegyezik, hogy a jelen Szolgáltatási Feltételeket nem értelmezik ellenünk amiatt, hogy mi fogalmaztuk meg azokat. Ön ezennel lemond minden olyan védekezési jogról, amely a jelen Szolgáltatási Feltételek elektronikus formájára és a felek jelen Szolgáltatási Feltételek aláírásának hiányára hivatkozik.",
    contactUsContent1:
      "Ha kérdése van a Szolgáltatási Feltételekkel kapcsolatban, kérjük,",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
