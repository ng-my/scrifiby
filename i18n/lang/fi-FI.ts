// 芬兰语
let message = {
  // Etusivu
  HomePage: {
    home: "Koti",
    version: "Perusversio (ilmainen):",
    times: "{times} ilmaista litterointia päivässä, {left} jäljellä tänään. ",
    tips: "Päivitä Pro-versioon saadaksesi rajattomasti litterointeja.",
    update: "Päivitä nyt",
    folders: "Kansiot",
    rename: "Nimeä uudelleen",
    delete: "Poista",
    createTitle: "Luo kansio",
    deleteConfirm: `Haluatko varmasti poistaa kansion ja kaikki sen sisällä olevat tiedostot?`,
    cancel: "Peruuta",
    confirm: "Luo",
    dialogLabel: "Kansion nimi",
    recently: "Viimeaikaiset tiedostot",
    loading: "Lataa",
    tour: {
      step0: {
        title: "Tervetuloa {name}",
        tip: "Täällä voit:",
        content:
          "Tekstittää kertaluonteisia keskusteluja, kokouksia, luentoja ja paljon muuta",
        next: "Aloita"
      },
      step1: {
        title: "Tekstitä tiedostoja",
        content:
          "Tukee kolmea tekstitysmenetelmää: paikalliset tiedostot, linkit ja nauhoitukset."
      },
      step2: {
        title: "Luo kansio",
        content:
          'Napsauta "+" luodaksesi kansion ja järjestelläksesi tiedostoja.'
      },
      step3: {
        title: "Näytä tekstitystiedot ja muokkaa",
        content:
          "Napsauta kohdetta nähdäksesi tekstitystiedot, muokataksesi tai kääntääksesi sen."
      },
      next: "seuraava",
      finish: "Selvä"
    },
    export: {
      export: "Vie",
      title: "Luomme vientiäsi",
      title2: "Tiedostosi on valmis",
      singleLoadingContent: "1 tiedosto pakataan.",
      singleSuccessContent: "1 tiedosto on pakattu.",
      loadingContent: "{num} tiedostoa pakataan.",
      successContent: "{num} tiedostoa on pakattu.",
      cancel: "Peruuta vienti",
      error: "Vihevirhe",
      dialog: {
        title: "Varoitus",
        content: "Peruutetaanko vienti?",
        cancel: "Peruuta vienti",
        continue: "Jatka vientiä"
      }
    },
    welcome: {
      title: "Tervetuloa Scribifyyn!",
      description: "Täällä voit:",
      transcribe:
        "Litteroi vaivattomasti Scribifyllä—muunna puhekeskustelut selkeäksi, haettavaksi ja jaettavaksi tekstiksi hetkessä.",
      precision:
        "Saa tarkat litteraatiot puhujatunnisteilla ja aikaleimalla välittömästi.",
      translate:
        "Murra kielimuuri: käännä litteraatiot yli 200 kielelle helposti.",
      edit: "Muokkaa, hio ja vie litteraatiosi tarpeitasi vastaavissa muodoissa.",
      collaborate:
        "Tee yhteistyötä jakamalla litteroitu tekstisi muiden kanssa.",
      button: "Aloita",
      tip: "Valmis muuntamaan ääntä litteroiduksi tekstiksi? Aloita tutkiminen nyt!",
      tip2: "Aloita tutkiminen nyt!",
      tip1: "Valmis muuttamaan äänen litteroiduksi tekstiksi? "
    },
    subscriptionModal: {
      left: {
        title: "Hanki Pro-suunnitelma avataksesi lisää ominaisuuksia",
        c1: "Rajattomat litteroinnit",
        c2: "10 tunnin lataukset",
        c3: "Korkein prioriteetti",
        c4: "99% litterointitarkkuus",
        c5: "Yli 100 tuettua kieltä",
        c6: "Puhujan tunnistus",
        c7: "Litteraation kääntäminen",
        t1: "Rajattomat litteroinnit yhdelle henkilölle.",
        t2: "Jokainen tiedosto voi olla jopa 10 tuntia / 5 GB. Lataa 50 tiedostoa kerralla.",
        t3: "Litteroimme tiedostosi aina mahdollisimman pian korkeimmalla prioriteetilla."
      },
      right: {
        title: "Hanki Pro-suunnitelma",
        yearly: "Vuosittain",
        monthly: "Kuukausittain",
        save: "Säästö",
        preMonth: "kuukaudessa",
        preYear: "vuodessa",
        firstMonth: "ensimmäinen kuukausi",
        afterwards: "sen jälkeen"
      },
      subscribe: "Tilaa"
    }
  },
  // Kansiosivu
  FolderPage: {
    table: {
      name: "Nimi",
      duration: "Kesto",
      status: "Tila",
      date: "Luontipäivä",
      activity: "Toiminta",
      empty1: `Tyhjä.`,
      empty2: `Napsauta yllä olevaa painiketta tekstittääksesi tiedoston.`,
      just: "juuri",
      export: "Vie",
      delete: "Poista",
      share: "Jaa",
      rename: "Nimeä uudelleen",
      move: "Siirrä",
      failed: "Epäonnistui",
      selected: "Valittu",
      success: "Onnistui",
      fileList: "Tiedostoluettelo"
    },
    dialog: {
      move: {
        title: "Siirrä",
        label: "Valitse kansio",
        placeholder: "Valitse kansio",
        confirm: "Siirrä",
        cancel: "Peruuta"
      },
      rename: {
        title: "Nimeä uudelleen",
        label: "Tiedostonimi",
        confirm: "Nimeä uudelleen",
        cancel: "Peruuta"
      },
      delete: {
        title: "Poista",
        file: "tiedosto",
        files: "tiedostoa",
        label: "Vahvista poisto? Tätä toimintoa ei voi peruuttaa.",
        confirm: "Poista",
        cancel: "Peruuta"
      },
      share: {
        title: "Jaa",
        label:
          "Kuka tahansa, jolla on seuraava turvalinkki, voi tarkastella tätä tekstitystä ja siihen liittyvää mediatiedostoa.",
        confirm: "Kopioi linkki",
        success: "Kopiointi onnistui"
      },
      export: {
        title: "Vie",
        select: "Valitse tarvitsemasi muoto",
        settings: "Asetukset",
        speaker: "Sisällytä puhuja",
        timecodes: "Sisällytä aikakoodit",
        confirm: "Vie",
        cancel: "Peruuta",
        selectErr: "Valitse yksi tai useampi muoto"
      }
    },
    search: {
      placeholder: "Etsi"
    },
    recently: "Viimeaikaiset",
    record: "Nauhoita",
    transcribe: "Tekstitä",
    unclassified: "Luokittelemattomat kansiot",
    buttons: {
      transcribe: "Tekstitä tiedostoja",
      url: "Tekstitä linkit",
      record: "Nauhoita ja tekstitä",
      recording: "Nauhoitetaan..."
    },
    delSuccess: "Poisto onnistui",
    create: "Luo"
  },
  // Tiedoston lataus ja nauhoitus
  FileUploadAndRecording: {
    record: {
      record: "Nauhoita",
      pause: "Keskeytä",
      resume: "Jatka",
      stop: "Lopeta",
      endRecord: "Lopeta tallennus",
      delete: "Poista",
      transcribe: "Tekstitä",
      permissionDenied: "Mikrofonilupa evätty tai laitetta ei ole olemassa",
      dialog: {
        delete: {
          title: "Varoitus",
          label: "Haluatko varmasti poistaa tämän nauhoituksen?",
          confirm: "Poista",
          cancel: "Peruuta"
        },
        complete: {
          title: "Nauhoitus valmis",
          label:
            "Nauhoitus on saavuttanut 10 tuntia ja on pysähtynyt automaattisesti. Tekstitä se.",
          confirm: "Selvä"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Tekstitä verkkomedia",
        title: "Liitä linkit",
        label:
          "Liitä mediat seuraavilta alustoilta mm.: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Lisää",
        cancel: "Peruuta",
        errorTitle:
          "Antamasi linkkiosoite on virheellinen. Tarkista ja yritä uudelleen.",
        linkName: "Linkki"
      },
      file: {
        orTitle: "Tekstitä verkkomedia",
        dialogTitle: "Tekstitä tiedostoja",
        tip1: "Napsauta ladataksesi",
        tip2: "tai vedä ja pudota",
        or: "tai"
      },
      del: {
        title: "Varoitus",
        content:
          "Kaikki edistyminen menetetään. Haluatko varmasti peruuttaa tekstityksen?",
        cancel: "Vahvista peruutus",
        confirm: "Jatka tekstitystä"
      },
      files: "Tiedostot",
      resultDialogTitle: "Tekstitä tiedostoja",
      resultDialogTitle2: "Litteroi tiedosto",
      cancel: "Peruuta",
      confirm: "Tekstitä",
      return: "Palaa",
      addMore: "Lisää lisää",
      language: "Median kieli",
      failed: "Epäonnistui",
      tooLarge: "Tiedosto on liian suuri.",
      linkUpload: "Lähetetään...",
      fileFormat: "Tiedostomuoto ei ole sallittu",
      localFiles: "Paikalliset tiedostot",
      pasteLink: "Online-linkki",
      uploadErr: "Latausvirhe",
      hashErr: "Tarkistusvirhe",
      table: {
        status: "Tila",
        file: "Tiedosto",
        size: "Koko",
        noData: "Ei tietoja"
      },
      maxFileNum: "Tiedostojen määrä ei voi ylittää {num}.",
      speaker: "Puhujan tunnistus",
      speakerLabel: "Merkitse jokainen litteroinnin osa puhuvalla henkilöllä."
    }
  },
  // Tekstitystiedot sivu
  TranscriptionPage: {
    edit: "Muokkaa",
    translate: "Käännä",
    showSpeaker: "Näytä puhuja",
    showTimestamp: "Näytä aikaleima",
    share: "Jaa",
    shared: "jaettu",
    export: "Vie",
    speaker: "Puhuja_{ id }",
    unassignSpeaker: "Poista puhujan osoitus",
    play: "Toista",
    save: "Tallenna",
    undo: "Kumoa",
    redo: "Tee uudelleen",
    confirm: "Vahvista",
    cancel: "Peruuta",
    addNew: "Lisää uusi",
    createANewSpeaker: "Luo uusi puhuja",
    speakerName: "Puhujan nimi",
    addSpeaker: "Lisää puhuja",
    applyToAllMatchingSpeakers: "Käytä kaikkiin vastaaviin puhujiin",
    cancelTranslation: "Peruuta käännös",
    showVideo: "Näytä video",
    hideVideo: "Piilota video",
    langChooseV1: {
      recently: "Viimeaikaiset",
      popular: "Suositut",
      other: "Muut",
      searchLanguage: "Hae kieltä",
      noMatch: "Kieltä ei löytynyt",
      English: "Englanti",
      "English(US)": "Englanti (USA)",
      "English(UK)": "Englanti (Iso-Britannia)",
      Spanish: "Espanja",
      Portuguese: "Portugali",
      French: "Ranska",
      Italian: "Italia",
      German: "Saksa",
      Dutch: "Hollanti",
      Polish: "Puola",
      Danish: "Tanska",
      Japanese: "Japani",
      Korean: "Korea",
      Hungarian: "Unkari",
      Czech: "Tšekki",
      Chinese: "Kiina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Azerbaijani: "Azeri",
      Estonian: "Viro",
      Belarusian: "Valkovenäjä",
      Bulgarian: "Bulgaria",
      Icelandic: "Islanti",
      Bosnian: "Bosnia",
      Persian: "Persia",
      Russian: "Venäjä",
      "Chinese(Traditional)": "Perinteinen kiina",
      Finnish: "Suomi",
      Kazakh: "Kazakstan",
      Galician: "Galicia",
      Catalan: "Katalaani",
      "Chinese(Simplified)": "Yksinkertaistettu kiina",
      Kannada: "Kannada",
      Croatian: "Kroatia",
      Latvian: "Latvia",
      Lithuanian: "Liettua",
      Romanian: "Romania",
      Marathi: "Marathi",
      Malay: "Malaiji",
      Macedonian: "Makedonia",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norja",
      Swedish: "Ruotsi",
      Serbian: "Serbia",
      Slovak: "Slovakia",
      Slovenian: "Slovenia",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thaimaa",
      Turkish: "Turkki",
      Welsh: "Kymri",
      Urdu: "Urdu",
      Ukrainian: "Ukraina",
      Greek: "Kreikka",
      Armenian: "Armenia",
      Hindi: "Hindi",
      Indonesian: "Indonesia",
      Vietnamese: "Vietnam",
      Albanian: "Albania",
      Amharic: "Amhara",
      Assamese: "Assam",
      Occitan: "Oksitaani",
      Bashkir: "Baškiiri",
      Basque: "Baski",
      Breton: "Bretoni",
      Tibetan: "Tiibet",
      Faroese: "Fääri",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgia",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitin kreoli",
      Hausa: "Hausa",
      Latin: "Latina",
      Lao: "Laos",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburg",
      Malagasy: "Madagaskar",
      Maltese: "Malta",
      Malayalam: "Malayalam",
      Mongolian: "Mongolia",
      Bengali: "Bengali",
      Burmese: "Burma",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somalia",
      Tajik: "Tadžikki",
      Tatar: "Tataari",
      Telugu: "Telugu",
      Turkmen: "Turkmenistan",
      Uzbek: "Uzbekistan",
      Hawaiian: "Havaiji",
      "Norwegian Nynorsk": "Norjan nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Jiddiš",
      Yoruba: "Yoruba",
      Javanese: "Jaava",
      Cantonese: "Kantoninkiina",
      Abkhaz: "Abhasia",
      Afar: "Afar",
      alz: "Alz",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaari",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlanti",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osseetti",
      tpi: "Tok-pisin",
      bew: "Betawi",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Pohjoissotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balutši",
      bho: "Bhojpuri",
      bua: "Burjaatti",
      chm: "Marin kieli",
      Chamorro: "Tšamorro",
      Chechen: "Tšetšeeni",
      chk: "Chuuk",
      Chuvash: "Tšuvassi",
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
      "South Ndebele": "Eteländebele",
      dov: "Dombesa",
      "bm-Nkoo": "N'ko (Länsiafrikkalainen kirjaimisto)",
      "French(Canada)": "Ranska (Kanada)",
      Fijian: "Fidži",
      fon: "Fon",
      "Western Frisian": "Länsifriisi",
      fur: "Friuli",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Grönlanti",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisia",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikka",
      "crh-Latn": "Krimintataari (latinalainen)",
      crh: "Krimintataari (kyrillinen)",
      Quechua: "Ketšua",
      Kurdish: "Kurdi (Kurmanji)",
      ckb: "Kurdi (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalli",
      lij: "Liguria",
      Limburgish: "Limburg",
      Kirundi: "Rundi",
      luo: "Luo",
      Luganda: "Ganda",
      Kinyarwanda: "Ruanda",
      lmo: "Lombardi",
      rom: "Romani",
      mad: "Madura",
      Manx: "Manksin",
      mwr: "Marwari",
      "ms-Arab": "Malaiji (Jawi-kirjaimisto)",
      Marshallese: "Marshall",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Itäinen Huasteca)",
      "Southern Sotho": "Eteläsotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi-kirjaimisto)",
      "pt-PT": "Portugali (Portugali)",
      Chichewa: "Nyanja",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Twi",
      zap: "Sapoteekki",
      "Northern Sami": "Pohjoissaame",
      Samoan: "Samoa",
      kri: "Sierraleonenkrioli",
      crs: "Seychellienkreoli",
      Sango: "Sango",
      "sat-Latn": "Santali (latinalainen)",
      sat: "Santali (Ogham-kirjaimisto)",
      Esperanto: "Esperanto",
      Swati: "Swazi",
      "Scottish Gaelic": "Skotlanningaeli",
      sus: "Susu",
      ceb: "Cebu",
      ber: "Tamazight (Tifinagh-kirjaimisto)",
      "ber-Latn": "Tamazight (latinalainen)",
      Tahitian: "Tahiti",
      Tonga: "Tonga",
      Tigrinya: "Tigrinja",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuva",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetsia",
      Uyghur: "Uiguuri",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtti",
      szl: "Sileesia",
      scn: "Sisilia",
      hil: "Hiligaino",
      jam: "Jamaikankreoli",
      sah: "Sakha",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latinalainen)",
      Inuktitut: "Inuktitut (tavukirjoitus)",
      yua: "Jukataninmaja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Ei löytynyt",
    notFundDesc: "Emme löytäneet etsimääsi.",
    shareTips:
      "Kuka tahansa, jolla on seuraava turvalinkki, voi tarkastella tätä tekstitystä ja siihen liittyvää mediatiedostoa.",
    copyLink: "Kopioi linkki",
    copySuccessful: "Kopiointi onnistui",
    copyFail: "Kopiointi epäonnistui",
    closeTrans: "Peruuta käännös",
    upgradeBtn: "Päivitä nyt",
    upgradeTip30: "Tämä tiedosto ylittää 30 minuuttia.",
    upgradeTipMore:
      "Päivitä Scribify Pro:ksi saadaksesi puhtaaksi kirjoitetuiksi jopa 10 tunnin pituiset tiedostot",
    errorTips: "Jokin meni pieleen.",
    copiedLink: "Linkki kopioitu",
    copyGotIt: "sain sen"
  },
  // Kirjautuminen, rekisteröityminen, salasanan vaihto
  IdentityInfoManage: {
    or: "tai",
    LoginBtn: "Kirjaudu sisään sähköpostilla",
    LoginGoogle: "Kirjaudu sisään Googlella",
    SignupBtn: "Rekisteröidy sähköpostilla",
    SignupGoogle: "Rekisteröidy Googlella",
    SignupDes: "Rekisteröidy tänään ja koe taika — ilmaiseksi.",
    SignupTitle: "Tarkka ja rajaton transkriptio",
    signup: "Rekisteröidy",
    sign_up: "Rekisteröidy",
    loginByGoogle: "Jatka Googlella",
    emailAddress: "Anna sähköpostiosoitteesi",
    createAccount: "Luo uusi tili",
    accountExists: "Onko sinulla jo tili? ",
    agreeTerm: {
      agree: "Jatkamalla hyväksyt meidän {terms} ja {policy}.",
      terms: "Ehdot",
      policy: "Tietosuojakäytäntö"
    },
    setPassword: "Aseta salasana",
    code: "Vahvistuskoodi",
    resend: "Lähetä uudelleen",
    enterPassword: "Anna salasanasi.",
    passwordLeval: "Salasanan vahvuus",
    Weak: "Heikko",
    Medium: "Kohtalainen",
    Strong: "Vahva",
    confirmPassword: "Vahvista salasanasi",
    invalidEmail: "Virheellinen sähköpostiosoite",
    logInDirectly: "Tämä tili on jo olemassa. Kirjaudu suoraan sisään.",
    codeErrorTryAgain: "Vahvistuskoodi virheellinen. Yritä uudelleen.",
    atLeastSix: "Salasanan on oltava vähintään 6 merkkiä pitkä.",
    passwordNotMatch: "Salasanat eivät täsmää. Yritä uudelleen.",
    login: "Kirjaudu sisään",
    log_in: "Kirjaudu sisään",
    log_In: "Kirjaudu sisään",
    password: "Salasana",
    forgotPassword: "Unohditko salasanasi?",
    noAccount: "Eikö sinulla ole tiliä？",
    accountNotExists: "Tiliä ei ole olemassa.",
    passwordError: "Väärä salasana",
    sendCode: "Lähetä vahvistuskoodi",
    resetPassword: "Nollaa salasana",
    resetYourPassword: "Nollaa salasanasi",
    newOldCantSame: "Uusi salasana ei voi olla sama kuin vanha salasana.",
    passwordResetOk: "Salasanan nollaus onnistui！",
    signupToSaveProgress:
      "Viimeistele rekisteröityminen tallentaaksesi edistymisesi.",
    tip: "Vihje",
    tipContentEmail:
      "Olemme juuri lähettäneet tilisi kirjautumissalasanan sähköpostiisi.",
    tipContentPassword:
      "Tarkista saapuneet-kansiostasi ja kirjaudu sisään sähköpostiosoitteellasi ja salasanallasi.",
    codeToEmail:
      "Lähetimme juuri vahvistuskoodin sähköpostiisi. Tarkista saapuneet viestit ja liitä vahvistuskoodi yllä olevaan kenttään."
  },
  // Jaa sivu
  Sharepage: {},
  // Alustussivu
  InitPage: {},
  // Tiliasetukset
  AccountSettingsPage: {
    subscription: "Tilaussuunnitelma",
    freeversion: "Ilmainen",
    transcribeTimesDay: "3 transkriptiota päivässä",
    uploadMinutes: "30 minuutin lataukset",
    lowerPriority: "Alempi prioriteetti",
    currentPlan: "Nykyinen suunnitelma",
    professionalEdition: "ammattimainen versio",
    unlimitedTranscription: "Rajoittamaton transkriptio",
    unlimitedNumberOfTimes: "Rajoittamaton transkriptioitiöisyys ja kesto.",
    filesUploadedAtOnce:
      "Jokainen tiedosto voi olla enintään 10 tuntia pitkä / 5 GB. Lataa 50 tiedostoa kerralla.",
    highestPriority: "korkein prioriteetti",
    weWillGiveTheHighest:
      "Transkriboimme tiedostosi mahdollisimman nopeasti korkeimmalla prioriteetilla.",
    theFirstMonth: "Ensimmäinen kuukausi",
    subscribeTo: "tilaa",
    basicVersionFree: "Perusversio (ilmainen)",
    return: "Palaa",
    annualize: "vuosittain",
    monthly: "kuukausittain",
    everyYear: "joka vuosi",
    saved: "säästetty",
    byTheMonth: "kuukaudessa",
    firstMonth: "ensimmäinen kuukausi",
    afterwardsEveryMonth: "Sen jälkeen joka kuukausi",
    manageSubscription: "Hallitse tilausta",
    professionalYearbook: "Ammattimainen vuosikerta",
    professionalMonthly: "Ammattimainen kuukausittainen",
    subscriptionWillCancelledOn: "Tilauksesi peruutetaan",
    displayLanguage: "Näyttökieli",
    update: "Päivitä nyt",
    basicversion: "Perusversio (Ilmainen)",
    daily: "{start} / {end} päivittäisestä transkriptiosta käytetty",
    upgradetoPro: "Päivitä Pro-versioon",
    accountSetting: "Tilin asetukset",
    logOut: "Kirjaudu ulos",
    account: "Tili",
    email: "Sähköposti",
    id: "Tunnus",
    password: "Salasana",
    resetPassword: "Nollaa salasana",
    logIn: "Kirjaudu sisään",
    tryForFree: "Kokeile ilmaiseksi",
    notFund: "Ei löytynyt",
    couldntFind: "Emme löytäneet etsimääsi.",
    proAnnual: "Pro Vuosittain",
    proMonthly: "Pro Kuukausittain",
    perMonth: "kuukaudessa",
    afterwards: "sen jälkeen",
    accuracy: "transkription tarkkuus",
    supported: "tuetut kielet",
    identification: "Puhujan tunnistus",
    transcriptSranslation: "Transkription käännös",
    perYear: "vuodessa",
    getProPlan: "Hanki Pro-suunnitelma",
    changeToAnnual: "Vaihda vuosittaiseen",
    automaticRenewalon: "Automaattinen uusinta",
    eachMonth: "Automaattinen uusinta kuukauden {time}. päivänä.",
    automaticRenewal:
      "Automaattinen uusiminen epäonnistui, tarkista maksutapa.",
    eachYear: "Automaattinen uusiminen {time} joka vuosi.",
    returnAccountSetting: "Takaisin",
    needsToWaitLonger: "Odota kauemmin ennen kuin tiedostosi litteroidaan.",
    freeThreeTimesDay: "Litteroi 3 tiedostoa ilmaiseksi joka päivä.",
    oneFileUploaded:
      "Jokainen tiedosto voi olla enintään 30 minuuttia pitkä. Lataa 1 tiedosto kerrallaan.",
    uploadWithinHours: "10 tunnin lataukset",
      yourSubscription: "Tilauksesi peruutetaan {time}."
},
  // Kielen vastaavuussuhteet
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kiina (yksinkertaistettu)",
      "Chinese(Traditional)": "Kiina (perinteinen)",
      Japanese: "Japani",
      Danish: "Tanska",
      German: "Saksa",
      English: "Englanti",
      Spanish: "Espanja",
      French: "Ranska",
      Italian: "Italia",
      Hungarian: "Unkari",
      Dutch: "Hollanti",
      Norwegian: "Norja",
      Polish: "Puola",
      Portuguese: "Portugali",
      Finnish: "Suomi",
      Swedish: "Ruotsi",
      Turkish: "Turkki",
      Greek: "Kreikka",
      Russian: "Venäjä",
      Ukrainian: "Ukraina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Korean: "Korea"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Avoimen lähdekoodin Nuxt3 SaaS -malli, joka on esiin-tehty integroitu globaaleihin maksuyhdyskäytäviin (Stripe/Cream), Google OAuth:iin, i18n-reititykseen ja SEO-optimointityökaluihin. Suunniteltu kehittäjille, jotka julkaisevat monikielisiä verkkosovelluksia, se tarjoaa SSR/SSG-tuen ja tuotantotason turvallisuuden heti käyttöönotettaessa.",
    startLink: "Aloita ilmainen kokeilu~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Liity odotuslistalle, saa NuxtPron uusimmat uutiset ensimmäisenä ja alennukset!",
      placeholder: "Syötä sähköpostiosoitteesi",
      button: "Liity odotuslistalle",
      joinCountMessage:
        "🔥 Varhainen käyttäjä #{count} juuri liittyi odotuslistalle!"
    },
    seo: {
      title: "Avoimen lähdekoodin Nuxt SaaS -runko | NuxtPro",
      description:
        "NuxtJS-runko kaikilla ominaisuuksilla, jotta tuotteesi tavoittaa asiakkaat. Ideasta tuotantoon 5 minuutissa."
    },
    api: {
      title: "tämä on esittely",
      corpInfo: "yritystiedot"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videon latausvirhe"
      },
      mse: {
        code: 2,
        msg: "virhe virtaa liitettäessä"
      },
      parse: {
        code: 3,
        msg: "jäsennysvirhe"
      },
      format: {
        code: 4,
        msg: "väärä muoto"
      },
      decoder: {
        code: 5,
        msg: "dekoodausvirhe"
      },
      runtime: {
        code: 6,
        msg: "kielioppivirheet"
      },
      timeout: {
        code: 7,
        msg: "toiston aikakatkaisu"
      },
      other: {
        code: 8,
        msg: "muut virheet"
      }
    },
    HAVE_NOTHING: "Ei tietoa siitä, onko ääni/video valmiita",
    HAVE_METADATA: "Äänen/videon metadata on valmiina ",
    HAVE_CURRENT_DATA:
      "Tietoja nykyisestä toistopaikasta on saatavilla, mutta ei riittävästi tietoa seuraavan kehyksen/millisekunnin toistamiseen",
    HAVE_FUTURE_DATA: "Nykyinen ja vähintään yksi kehys saatavilla",
    HAVE_ENOUGH_DATA:
      "Käytettävissä olevat tiedot riittävät toiston aloittamiseen",
    NETWORK_EMPTY: "Ääni/video ei ole alustettu",
    NETWORK_IDLE:
      "Ääni/video on aktiivinen ja sen resurssit on valittu, mutta verkkoa ei käytetä",
    NETWORK_LOADING: "Selain lataa tietoja",
    NETWORK_NO_SOURCE: "Ääni-/videolähdettä ei löytynyt",
    MEDIA_ERR_ABORTED: "Hakutoiminto keskeytetty käyttäjän toimesta",
    MEDIA_ERR_NETWORK: "Latauksen aikana tapahtui virhe",
    MEDIA_ERR_DECODE: "Dekoodauksen aikana tapahtui virhe",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Ääni/video ei ole tuettu",
    REPLAY: "Toista uudelleen",
    ERROR: "Verkko on poissa käytöstä",
    PLAY_TIPS: "Toista",
    PAUSE_TIPS: "Tauko",
    PLAYNEXT_TIPS: "Toista seuraava",
    DOWNLOAD_TIPS: "Lataa",
    ROTATE_TIPS: "Kierrä",
    RELOAD_TIPS: "Lataa uudelleen",
    FULLSCREEN_TIPS: "Koko näyttö",
    EXITFULLSCREEN_TIPS: "Poistu koko näytöstä",
    CSSFULLSCREEN_TIPS: "Css-koko näyttö",
    EXITCSSFULLSCREEN_TIPS: "Poistu css-koko näytöstä",
    TEXTTRACK: "Tekstitys",
    PIP: "PIP",
    SCREENSHOT: "Kuvakaappaus",
    LIVE: "LIVE",
    OFF: "Pois",
    OPEN: "Avaa",
    MINI_DRAG: "Napsauta ja pidä hiirtä pohjassa vetämistä varten",
    MINISCREEN: "Pieni näyttö",
    REFRESH_TIPS: "Kokeile",
    REFRESH: "Päivitä",
    FORWARD: "eteenpäin",
    LIVE_TIP: "Suora lähetys",
    TM_SUBTITLE_SHOW_TIPS: "Ota tekstitykset käyttöön",
    TM_SUBTITLE_HIDE_TIPS: "Poista tekstitykset käytöstä",
    TM_MINIMIZE_TIPS: "Piilota video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Tietosuojakäytäntö",
    lastUpdated: "Viimeksi päivitetty: 25. elokuuta 2025",
    policyDescription:
      "Tässä käytäntöasiakirjassa kuvataan, miten Scribify (jäljempänä &quot;Scribify&quot;, &quot;me&quot;) kerää, käyttää ja luovuttaa henkilötietojasi, kun käytät palveluitamme, verkkosivustojamme",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "ja ohjelmistoja (yhdessä &quot;Palvelut&quot;).",
    policyAgreement:
      "Lue tämä tietosuojakäytäntö huolellisesti ja varmista, että ymmärrät sen. Käyttämällä mitä tahansa Palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy henkilötietojesi käyttöä tämän tietosuojakäytännön mukaisesti, sinun on lopetettava Palveluidemme käyttö välittömästi.",
    policyOverview:
      "Tässä tietosuojakäytännössä kerromme, mitä tietoja keräämme ja miksi; miten tietojasi käsitellään; ja mitkä ovat oikeutesi tietoihisi liittyen. Emme myy tietojasi.",
    scopeTitle: "1. Tietosuojakäytännön soveltamisala",
    whatWeCollectTitle: "2. Mitä keräämme ja miksi",
    accessShareTitle: "3. Milloin käytämme tai jaamme tietojasi",
    secureDataTitle: "4. Kuinka suojaamme tietosi",
    deleteContentTitle: "5. Mitä tapahtuu, kun poistat sisältösi",
    locationTitle: "6. Sivuston ja datan sijainti",
    childrenPrivacyTitle: "7. Lasten yksityisyys",
    updatesTitle: "8. Tämän tietosuojakäytännön päivitykset",
    contactUsTitle: "9. Ota yhteyttä",
    identityAccessTitle: "2.1 Henkilöllisyys ja käyttöoikeudet",
    billingInfoTitle: "2.2 Laskutustiedot",
    productInteractionsTitle: "2.3 Tuotteiden yhteisvaikutukset",
    websiteInteractionsTitle: "2.4 Verkkosivuston vuorovaikutus",
    cookiesTitle: "2.5 Evästeet",
    voluntaryCorrespondenceTitle: "2.6 Vapaaehtoinen kirjeenvaihto",
    scopeContent:
      "Tämä tietosuojakäytäntö koskee vain Palveluiden käyttäjiä koskevien tietojen keräämistä ja käsittelyä. Tämä tietosuojakäytäntö ei koske kolmansien osapuolten ylläpitämiä palveluita, verkkosivustoja tai ohjelmistoja, jotka ovat linkitettyjä meihin (riippumatta siitä, tarjoammeko me nämä linkit vai jakavatko muut käyttäjät niitä), eikä se koske kolmansien osapuolten sisältöä, tietoja, sovelluksia tai materiaaleja. Suosittelemme, että tarkistat minkä tahansa kolmannen osapuolen verkkosivuston tai ohjelmiston tietosuojakäytännöt ennen kuin annat niille tietoja.",
    collectPrinciple:
      "Ohjaavana periaatteenamme on kerätä vain se, mitä tarvitsemme. Käytännössä se tarkoittaa seuraavaa:",
    identityAccessContent:
      "Kun rekisteröidyt johonkin tuotteistamme, pyydämme sinulta tunnistettavia tietoja, kuten nimesi ja sähköpostiosoitteesi. Tämä on tarpeen tuotteen olennaisten toimintojen tarjoamiseksi ja jotta voimme lähettää sinulle tuotepäivityksiä ja muita tärkeitä tietoja.",
    billingInfoContent:
      "Jos rekisteröidyt maksulliseen tuotteeseen, sinua pyydetään antamaan maksutietosi ja laskutusosoitteesi. Maksutiedot lähetetään suoraan maksupalvelullemme, eivätkä ne päädy palvelimillemme.",
    productInteractionsContent:
      "Tallennamme palvelimillemme sisältöä, jonka lataat, vastaanotat tai ylläpidät tuotetileilläsi. Ellet poista tätä sisältöä, voimme säilyttää sitä niin kauan kuin tilisi on aktiivinen.",
    websiteInteractionsContent:
      "Keräämme tietoja selaustoiminnastasi analytiikka- ja tilastotarkoituksiin, kuten konversioastetestaukseen ja uusien tuotemallien kokeilemiseen. Näitä tietoja ovat esimerkiksi selaimesi ja käyttöjärjestelmäsi versiot, IP-osoitteesi, vierailemasi verkkosivut ja niiden latausaika sekä verkkosivusto, joka ohjasi sinut meille. Jos sinulla on tili ja olet kirjautuneena sisään, nämä verkkoanalytiikkatiedot yhdistetään IP-osoitteeseesi ja käyttäjätiliisi, kunnes tilisi ei ole enää aktiivinen.",
    cookiesContent1:
      "Käytämme myös pysyviä ensimmäisen osapuolen evästeitä ja joitakin kolmannen osapuolen evästeitä tiettyjen asetusten tallentamiseen, sovellustemme käytön helpottamiseen, A/B-testauksen suorittamiseen sekä analytiikan tukemiseen.",
    cookiesContent2:
      "Eväste on selaimesi tallentama tekstitiedosto. Se voi auttaa muistamaan kirjautumistiedot ja sivuston asetukset. Se voi myös kerätä tietoja, kuten selaimesi tyyppi, käyttöjärjestelmä, vieraillut verkkosivut, vierailun kesto, katsottu sisältö ja muita klikkaustietoja. Voit muuttaa evästeiden säilytysasetuksia ja hyväksyä tai estää yksittäisiä evästeitä selaimesi asetuksissa, vaikka sovelluksemme eivät toimi ja muut palvelumme osat eivät välttämättä toimi oikein, jos poistat evästeet käytöstä.",
    voluntaryCorrespondenceContent:
      "Kun lähetät meille sähköpostia kysymyksen tai pyydät apua, säilytämme kyseisen viestinnän, mukaan lukien sähköpostiosoitteesi, jotta meillä on historia aiemmasta viestinnästä, josta voimme tarkistaa, jos otat meihin yhteyttä tulevaisuudessa.",
    accessShareContent1:
      "Tarjotaksemme pyytämiäsi tuotteita tai palveluita. Käytämme joitakin kolmannen osapuolen alihankkijoita sovellustemme suorittamiseen ja Palveluiden tarjoamiseen sinulle. Näihin kuuluvat pilvi- ja analytiikkapalveluntarjoajat.",
    accessShareContent2:
      "Väärinkäytösten tutkimiseksi, estämiseksi tai niihin liittyvien toimien toteuttamiseksi. Asiakkaan tilin käyttö mahdollista väärinkäyttöä tutkittaessa on viimeinen keino. Haluamme suojella sekä asiakkaidemme että meille ongelmista ilmoittavien henkilöiden yksityisyyttä ja turvallisuutta, ja teemme parhaamme tasapainottaaksemme nämä vastuut koko prosessin ajan. Jos havaitsemme, että käytät tuotteitamme rajoitettuun tarkoitukseen, ryhdymme tarvittaviin toimiin, mukaan lukien tarvittaessa asianmukaisten viranomaisten ilmoittaminen.",
    accessShareContent3: "Kun sovellettava laki niin vaatii.",
    userDataRequests:
      "- Käyttäjätietojen pyynnöt. Käytäntömme on olla vastaamatta viranomaisten käyttäjätietoja koskeviin pyyntöihin, ellei laillinen prosessi tai rajoitetut olosuhteet vaadi meitä jakamaan tietoja, meidän on noudatettava niitä, jos Yhdysvaltain lainvalvontaviranomaisilla on kuitenkin tarvittava määräys, rikosoikeudellinen haaste tai tuomioistuimen määräys, joka edellyttää meitä jakamaan tietoja, meidän on noudatettava niitä. Vastaavasti vastaamme Yhdysvaltojen ulkopuolisten viranomaisten pyyntöihin vain, jos Yhdysvaltain hallitus velvoittaa meitä siihen keskinäisen oikeusapusopimuksen tai -sopimuksen mukaisesti. Käytäntömme on ilmoittaa asianomaisille käyttäjille ennen tietojen jakamista, ellei meitä lain mukaan kielletä tekemästä niin, lukuun ottamatta joitakin hätätilanteita.",
    preservationRequests:
      "- Säilytyspyynnöt. Vastaavasti käytäntömme on noudattaa tietojen säilyttämistä koskevia pyyntöjä vain, jos Yhdysvaltain liittovaltion tallennettua viestintää koskeva laki, 18 USC:n pykälä 2703(f) tai asianmukaisesti tiedoksi annettu Yhdysvaltain haaste siviilioikeudellisissa asioissa sitä edellyttää. Emme jaa säilytettyjä tietoja, ellei laki sitä vaadi tai tuomioistuimen määräys sitä vaadi, josta emme päätä valittaa. Lisäksi, ellemme saa asianmukaista määräystä, oikeuden määräystä tai haastetta ennen vaaditun säilytysajan päättymistä, tuhoamme kaikki säilytetyt kopiot asiakastiedoista säilytysajan päättyessä.",
    taxAudit:
      "- Jos veroviranomainen tarkastaa meidät, meidän on ehkä jaettava laskutukseen liittyviä tietoja. Tässä tapauksessa jaamme vain välttämättömät tiedot, kuten laskutusosoitteet ja verovapautustiedot.",
    secureDataContent1: "Kaikki tiedot salataan",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "kun tiedot lähetetään palvelimiltamme selaimeesi.",
    deleteContentContent:
      "Jos poistat sisältöä, se muuttuu välittömästi käyttökelvottomaksi.",
    locationContent:
      "Tuotteitamme ja muita verkkosivustojamme hoidetaan Yhdysvalloissa. Jos olet Euroopan unionissa, Isossa-Britanniassa tai muualla Yhdysvaltojen ulkopuolella, huomaathan, että kaikki meille antamasi tiedot siirretään ja tallennetaan Yhdysvaltoihin. Käyttämällä verkkosivustojamme tai palveluitamme ja/tai antamalla meille henkilötietojasi suostut tähän siirtoon.",
    childrenPrivacyContent:
      "Palvelut eivät ole suunnattu lapsille, emmekä tietoisesti kerää alle 13-vuotiaiden lasten henkilötietoja. Jos olet alle 13-vuotias, älä lähetä mitään henkilötietoja Palveluiden kautta. Jos uskot, että lapsi on antanut meille henkilötietoja tämän Käytännön vastaisesti, ota meihin yhteyttä alla kuvatulla tavalla.",
    updatesContent:
      "Saatamme päivittää tätä käytäntöä tarvittaessa asiaankuuluvien määräysten noudattamiseksi ja uusien käytäntöjen huomioon ottamiseksi. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme päivämäärän tämän sivun yläreunassa.",
    contactUsContent1:
      "Jos sinulla on kysyttävää, kommentteja tai valituksia tietosuojakäytännöstämme, ole hyvä ja",
    contactUs: "ota meihin yhteyttä",
    contactUsContent2:
      "ja pyrimme käsittelemään valituksesi mahdollisimman pian."
  },
  termsOfService: {
    termsOfServiceTitle: "Palveluehdot",
    lastUpdated: "Viimeksi päivitetty: 21. syyskuuta 2022",
    thankYouMessage: "Kiitos, että käytät tuotteitamme!",
    companyReference:
      "Kun sanomme tässä asiakirjassa ”Yritys”, ”me”, ”meidän” tai ”meitä”, viittaamme Scribifyyn.",
    servicesDefinition:
      "Kun sanomme &quot;Palvelut&quot;, tarkoitamme mitä tahansa Scribifyn luomaa ja ylläpitämää tuotetta, toimitettiinpa se sitten verkkoselaimessa, työpöytäsovelluksessa, mobiilisovelluksessa tai muussa muodossa.",
    termsUpdateNotice:
      "Saatamme päivittää näitä käyttöehtoja tulevaisuudessa. Tyypillisesti nämä muutokset ovat olleet joidenkin ehtojen selventämistä linkittämällä laajennettuun asiaankuuluvaan käytäntöön. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme tämän sivun yläreunassa olevan päivämäärän ja ryhdymme muihin asianmukaisiin toimiin ilmoittaaksemme siitä tilinhaltijoille.",
    acceptanceOfAgreementTitle: "1. Sopimuksen hyväksyminen",
    scribifyServicesTitle: "2. Scribifyn palvelut",
    accountTermsTitle: "3. Tilin ehdot",
    paymentRefundsTitle: "4. Maksaminen, hyvitykset ja sopimusmuutokset",
    cancellationTerminationTitle: "5. Peruutus ja irtisanominen",
    submissionsTitle: "6. Lähetykset",
    uptimeSecurityTitle: "7. Käyttöaika ja turvallisuus",
    siteManagementTitle: "8. Sivuston hallinta",
    copyrightContentTitle: "9. Tekijänoikeudet ja sisällön omistajuus",
    prohibitedActivitiesTitle: "10. Kielletyt toiminnot",
    featuresBugsTitle: "11. Ominaisuudet ja virheet",
    correctionsTitle: "12. KORJAUKSET",
    userDataTitle: "13. Käyttäjätiedot",
    privacyPolicyTitle: "14. Tietosuojakäytäntö",
    liabilityTitle: "15. Vastuu",
    miscellaneousTitle: "16. Sekalaiset",
    contactUsTitle: "17. Ota yhteyttä",
    acceptanceContent1:
      "Käyttämällä Palveluitamme ilmoitat hyväksyväsi tämän Sopimuksen, josta tulee sitova sopimus sinun ja Scribifyn välillä. Vakuutat, että olet laillisesti kykenevä hyväksymään nämä Ehdot ja vahvistat, että olet täysi-ikäinen solmimaan sitovan sopimuksen. Scribifyn hyväksyntä on nimenomaisesti ehdollinen sille, että hyväksyt kaikki tämän Sopimuksen ehdot.",
    acceptanceContent2:
      "Palveluita ei ole tarkoitettu alle 18-vuotiaille, eikä heidän tule käyttää niitä. Käyttämällä Palveluita vakuutat ja takaat, että täytät edellä mainitut kelpoisuusvaatimukset.",
    acceptanceContent3:
      "Termit &quot;sinä&quot;, &quot;sinun&quot; ja &quot;itse&quot; sisältävät myös työntekijäsi, edustajasi, liikekumppanisi ja kaikki muut henkilöt, joille annat pääsyn Palveluihin Tilisi kautta (kuten alla on määritelty). Olet vastuussa siitä, että kaikki Palveluita tilisi kautta käyttävät henkilöt ovat tietoisia näistä Ehdoista ja noudattavat niitä.",
    acceptanceContent4:
      "Scribify pidättää oikeuden tarkistaa ja päivittää näitä ehtoja aika ajoin oman harkintansa mukaan. Kaikki muutokset tulevat voimaan välittömästi niiden julkaisemisen jälkeen. Jatkamalla Palveluiden käyttöä tarkistettujen ehtojen julkaisemisen jälkeen hyväksyt muutokset. Sinun odotetaan tarkistavan tämä sivu aika ajoin, jotta olet tietoinen mahdollisista muutoksista, sillä ne sitovat sinua.",
    servicesContent1:
      "Palvelumme mahdollistavat käyttäjien muuntaa äänikeskusteluja litteroiduksi tekstiksi, jota voidaan hakea, kääntää ja jakaa muiden kanssa.",
    servicesContent2:
      "Voit valita, käytätkö Palveluiden ilmaisversiota (&quot;Ilmaiset palvelut&quot;) vai Palveluiden tilauspohjaista maksullista versiota, josta saatat joutua maksamaan maksuja (&quot;Maksulliset palvelut&quot;).",
    servicesContent3:
      "Tarjoamme Palvelut käyttöösi. Olet vastuussa kaikkien tarvittavien järjestelyjen tekemisestä Palveluiden käyttöä varten.",
    accountTerms1:
      "- Olet vastuussa tilisi turvallisuuden ylläpitämisestä. Yhtiö ei ole eikä tule olemaan vastuussa mistään menetyksistä tai vahingoista, jotka johtuvat tämän turvallisuusvelvoitteen noudattamatta jättämisestä.",
    accountTerms2:
      "- Et saa käyttää Palveluita mihinkään laittomaan, epäeettiseen tai moraalittomaan tarkoitukseen.",
    accountTerms3:
      "- Olet vastuussa kaikesta tililläsi julkaistusta sisällöstä ja toiminnasta. Tämä sisältää sisällön, jonka ovat julkaisseet muut, joilla joko: (a) on pääsy kirjautumistietoihisi; tai (b) on omat kirjautumistunnuksensa tilillesi.",
    accountTerms4:
      "- Sinun on oltava ihminen. &quot;Botien&quot; tai muiden automatisoitujen menetelmien avulla rekisteröidyt tilit eivät ole sallittuja.",
    paymentContent1:
      "- Maksullisten Palveluiden, jotka tarjoavat ilmaisen kokeilujakson, kokeilujakson kesto selitetään rekisteröitymisen yhteydessä. Kokeilujakson jälkeen sinun on maksettava etukäteen voidaksesi jatkaa Palvelun käyttöä. Jos et maksa, nämä palvelut päättyvät.",
    paymentContent2:
      "- Jos päivität ilmaisesta tilauksesta maksulliseen tilaukseen, veloitamme korttiasi välittömästi ja laskutusjaksosi alkaa päivityspäivänä.",
    paymentContent3:
      "- Kaikki maksut eivät sisällä veroviranomaisten määräämiä veroja, maksuja tai tulleja. Tarvittaessa keräämme kyseiset verot veroviranomaisen puolesta ja tilitämme ne veroviranomaisille. Muussa tapauksessa olet vastuussa kaikkien verojen, maksujen tai tullien maksamisesta.",
    paymentContent4:
      "- Kaikki ostokset ovat hyvittämättömiä. Voit peruuttaa minkä tahansa maksullisen palvelun milloin tahansa kirjautumalla tilillesi. Maksullisten tilausten peruutus tulee voimaan kuluvan maksetun kauden lopussa, ellei toisin mainita.",
    cancellationContent1:
      "- Jos peruutat Palvelun ennen maksetun ajan päättymistä, peruutuksesi tulee voimaan välittömästi, eikä sinulta veloiteta enää mitään. Emme automaattisesti suhteuta käyttämätöntä aikaa viimeisimmällä laskutusjaksolla.",
    cancellationContent2:
      "- Meillä on oikeus keskeyttää tai lopettaa tilisi ja evätä kaikki nykyinen tai tuleva Palveluidemme käyttö mistä tahansa syystä milloin tahansa. Keskeyttäminen tarkoittaa, että et voi käyttää tiliäsi tai sen sisältöä. Irtisanominen johtaa lisäksi tilisi tai tilillesi pääsyn poistamiseen sekä kaiken tilisi sisällön menettämiseen ja luovuttamiseen. Pidätämme myös oikeuden evätä Palveluiden käytön keneltä tahansa mistä tahansa syystä milloin tahansa. Meillä on tämä lauseke, koska tilastollisesti katsottuna sadoista tuhansista Palveluidemme tileistä ainakin yksi tekee jotain rikollista.",
    cancellationContent3:
      "- Yhtiön työntekijään tai toimihenkilöön kohdistuva suullinen, fyysinen, kirjallinen tai muu väärinkäyttö (mukaan lukien väärinkäytön tai koston uhkaaminen) voi johtaa tilin välittömään sulkemiseen.",
    submissionsContent:
      "Hyväksyt ja hyväksyt, että kaikki meille toimittamasi kysymykset, kommentit, ehdotukset, ideat, palautteet tai muut Sivustoa koskevat tiedot (&quot;Lähetykset&quot;) ovat ei-luottamuksellisia ja niistä tulee yksinomaista omaisuuttamme. Meillä on yksinoikeudet, mukaan lukien kaikki immateriaalioikeudet, ja meillä on oikeus käyttää ja levittää näitä Lähetyksiä rajoituksetta mihin tahansa lailliseen tarkoitukseen, kaupalliseen tai muuhun, ilman sinulle annettavaa tunnustusta tai korvausta. Luovut täten kaikista moraalisista oikeuksista tällaisiin Lähetyksiin ja takaat täten, että kaikki tällaiset Lähetykset ovat alkuperäisiä sinulle tai että sinulla on oikeus lähettää tällaisia Lähetyksiä. Hyväksyt, ettei meitä vastaan voi nostaa kannetta mistään väitetystä tai todellisesta Lähetystesi omistusoikeuden loukkauksesta tai väärinkäytöstä.",
    uptimeContent1:
      "- Palveluiden käyttö on yksinomaan omalla vastuullasi. Tarjoamme näitä Palveluita &quot;sellaisenaan&quot; ja &quot;saatavuuden mukaan&quot;. Emme tarjoa palvelutasosopimuksia useimmille Palveluillemme, mutta otamme sovellustemme käyttöajan vakavasti.",
    uptimeContent2:
      "- Pidätämme oikeuden tilapäisesti poistaa tilisi käytöstä, jos käyttösi ylittää merkittävästi muiden Palveluiden asiakkaiden tyypillisen käytön. Otamme luonnollisesti sinuun yhteyttä ennen toimenpiteisiin ryhtymistä, paitsi harvinaisissa tapauksissa, joissa käyttötaso voi vaikuttaa negatiivisesti Palvelun suorituskykyyn muille asiakkaille.",
    uptimeContent3:
      "- Käytämme monia toimenpiteitä tietojesi suojaamiseksi ja turvaamiseksi varmuuskopioiden, redundanssien ja salauksen avulla. Käytämme salausta tiedonsiirrossa julkisessa internetissä.",
    uptimeContent4:
      "- Käytämme kolmannen osapuolen toimittajia ja hosting-kumppaneita tarjoamaan Palveluiden suorittamiseen tarvittavat laitteistot, ohjelmistot, verkot, tallennustilan ja niihin liittyvän teknologian.",
    siteManagementContent:
      "Pidätämme oikeuden, mutta emme velvollisuutta, seuraavaa: (1) valvoa Sivustoa näiden Käyttöehtojen rikkomusten varalta; (2) ryhtyä asianmukaisiin oikeustoimiin ketä tahansa vastaan, joka oman harkintamme mukaan rikkoo lakia tai näitä Käyttöehtoja, mukaan lukien rajoituksetta tällaisen käyttäjän ilmoittaminen lainvalvontaviranomaisille; (3) oman harkintamme mukaan ja rajoituksetta evätä, rajoittaa pääsyä, rajoittaa saatavuutta tai poistaa käytöstä (siinä määrin kuin se on teknisesti mahdollista) minkä tahansa Muodoksesi tai minkä tahansa sen osan; (4) oman harkintamme mukaan ja rajoituksetta, ilman erillistä ilmoitusta tai vastuuta poistaa Sivustolta tai muuten poistaa käytöstä kaikki tiedostot ja sisällöt, jotka ovat kooltaan liian suuria tai jotka millään tavalla rasittavat järjestelmiämme; ja (5) muutoin hallita Sivustoa tavalla, joka on suunniteltu suojaamaan oikeuksiamme ja omaisuuttamme ja helpottamaan Sivuston asianmukaista toimintaa.",
    copyrightContent1:
      "- Kaiken Palveluihin lähetetyn sisällön on oltava Yhdysvaltain tekijänoikeuslain mukaista.",
    copyrightContent2:
      "- Emme vaadi immateriaalioikeuksia Palveluihin toimittamaanne materiaaliin. Kaikki ladatut materiaalit pysyvät sinun omaisuutenasi.",
    copyrightContent3:
      "- Emme esitarkista sisältöä, mutta pidätämme oikeuden (mutta emme velvollisuutta) oman harkintamme mukaan kieltäytyä tai poistaa mitä tahansa Palvelun kautta saatavilla olevaa sisältöä.",
    copyrightContent4:
      "- Palveluiden nimet, ulkoasu ja käyttökokemus ovat Yhtiön tekijänoikeuksin suojattuja. Kaikki oikeudet pidätetään. Et saa kopioida, kopioida tai käyttää uudelleen mitään osaa HTML-, CSS-, JavaScript- tai visuaalisista suunnitteluelementeistä ilman Yhtiön nimenomaista kirjallista lupaa. Sinun on pyydettävä lupaa käyttää Yhtiön logoa tai Palvelun logoja mainostarkoituksiin. Ole hyvä",
    emailUs: "Lähetä meille sähköpostia",
    copyrightContent5:
      "pyyntöjä logojen käyttöön. Pidätämme oikeuden peruuttaa tämän luvan, jos rikot näitä käyttöehtoja.",
    copyrightContent6:
      "- Sitoudut olemaan kopioimatta, jäljentämättä, myymättä, jälleenmyymättä tai hyödyntämättä mitään osaa Palveluista, Palveluiden käytöstä tai Palveluihin pääsystä ilman Yhtiön nimenomaista kirjallista lupaa.",
    copyrightContent7:
      "- Et saa muokata toista verkkosivustoa siten, että se antaa virheellisen kuvan siitä, että se liittyy Palveluihin tai Yhtiöön.",
    copyrightContent8:
      "- Kunnioitamme muiden immateriaalioikeuksia. Jos uskot, että Sivustolla tai sen kautta saatavilla oleva materiaali loukkaa omistamiasi tai hallinnoimiasi tekijänoikeuksia, ole hyvä ja ota välittömästi yhteyttä",
    contactUs: "ota meihin yhteyttä",
    copyrightContent9:
      "Ilmoituksestasi lähetetään kopio henkilölle, joka julkaisi tai tallensi Ilmoituksessa mainitun materiaalin. Huomaa, että sovellettavan lain nojalla sinut voidaan pitää vahingonkorvausvastuussa, jos annat Ilmoituksessa olennaisesti vääriä tietoja. Jos et siis ole varma, loukkaako Sivustolla oleva tai Sivustolta linkitetty materiaali tekijänoikeuksiasi, sinun kannattaa ensin ottaa yhteyttä asianajajaan.",
    prohibitedActivitiesIntro:
      "Et saa käyttää Sivustoa mihinkään muuhun tarkoitukseen kuin siihen, johon Sivusto on käytettävissä. Sivustoa ei saa käyttää mihinkään kaupalliseen toimintaan, paitsi jos se on nimenomaisesti hyväksyttyä tai hyväksyttyä.",
    prohibitedActivitiesUserAgreement: "Sivuston käyttäjänä sitoudut olemaan:",
    prohibitedActivity1:
      "- Hae systemaattisesti tietoja tai muuta sisältöä sivustolta luodaksesi tai kootaksesi, suoraan tai epäsuorasti, kokoelman, koosteen, tietokannan tai hakemiston ilman kirjallista lupaamme.",
    prohibitedActivity2:
      "- Huijata, petostaa tai johtaa harhaan meitä ja muita käyttäjiä, erityisesti yrittämällä saada selville arkaluonteisia tilitietoja, kuten käyttäjien salasanoja.",
    prohibitedActivity3:
      "- Kiertää, poistaa käytöstä tai muulla tavoin häiritä Sivuston turvallisuuteen liittyviä ominaisuuksia, mukaan lukien ominaisuuksia, jotka estävät tai rajoittavat Sisällön käyttöä tai kopiointia tai asettavat rajoituksia Sivuston ja/tai sen sisältämän Sisällön käytölle.",
    prohibitedActivity4:
      "- Halventaa, tahrata tai muuten vahingoittaa mielestämme meitä ja/tai Sivustoa.",
    prohibitedActivity5:
      "- Käyttää Sivustolta saatuja tietoja toisen henkilön häirintään, hyväksikäyttöön tai vahingoittamiseen.",
    prohibitedActivity6:
      "- Käytä tukipalveluitamme väärin tai lähetä vääriä ilmoituksia väärinkäytöksistä tai väärinkäytöksistä.",
    prohibitedActivity7:
      "- Käytä Sivustoa tavalla, joka on ristiriidassa sovellettavien lakien tai määräysten kanssa.",
    prohibitedActivity8:
      "- Osallistu sivuston luvattomaan kehystämiseen tai linkittämiseen.",
    prohibitedActivity9:
      "- Lataa tai lähetä (tai yritä ladata tai lähettää) viruksia, troijalaisia tai muuta materiaalia, mukaan lukien liiallinen isojen kirjainten käyttö ja roskapostitus (jatkuva toistuvan tekstin lähettäminen), joka häiritsee kenen tahansa osapuolen Sivuston keskeytymätöntä käyttöä ja nautintoa tai muokkaa, heikentää, keskeyttää, muuttaa tai häiritsee Sivuston käyttöä, ominaisuuksia, toimintoja, toimintaa tai ylläpitoa.",
    prohibitedActivity10:
      "- Käytä järjestelmää millään tavalla automaattisesti, kuten käytä komentosarjoja kommenttien tai viestien lähettämiseen tai käytä tiedonlouhintaa, robotteja tai vastaavia tiedonkeruu- ja poimintatyökaluja.",
    prohibitedActivity11:
      "- Poista tekijänoikeus- tai muut omistusoikeusilmoitukset mistä tahansa sisällöstä.",
    prohibitedActivity12:
      "- Yritä esiintyä toisena käyttäjänä tai henkilönä tai käyttää toisen käyttäjän käyttäjätunnusta.",
    prohibitedActivity13:
      "- Lataa tai lähetä (tai yritä ladata tai lähettää) mitään materiaalia, joka toimii passiivisena tai aktiivisena tiedonkeruu- tai -lähetysmekanismina, mukaan lukien rajoituksetta selkeät grafiikanvaihtomuodot (&quot;gif&quot;), 1×1-pikselit, verkkovirheet, evästeet tai muut vastaavat laitteet (joita joskus kutsutaan &quot;vakoiluohjelmiksi&quot; tai &quot;passiivisiksi keräysmekanismeiksi&quot; tai &quot;pcms&quot;).",
    prohibitedActivity14:
      "- Häiritse, keskeytä tai kuormita kohtuuttomasti Sivustoa tai Sivustoon yhdistettyjä verkkoja tai palveluita.",
    prohibitedActivity15:
      "- Häiritse, ärsytä, pelottele tai uhkaile ketään työntekijöitämme tai edustajiamme, jotka osallistuvat Sivuston minkä tahansa osan tarjoamiseen sinulle.",
    prohibitedActivity16:
      "- Yritä ohittaa Sivuston toimenpiteitä, joiden tarkoituksena on estää tai rajoittaa pääsyä Sivustolle tai sen osaan.",
    prohibitedActivity17:
      "- Sivuston ohjelmiston, mukaan lukien, mutta ei rajoittuen, Flashin, PHP:n, HTML:n, JavaScriptin tai muun koodin, kopioiminen tai muokkaaminen.",
    prohibitedActivity18:
      "- Ellei sovellettava laki sitä salli, tulkita, purkaa, hajottaa tai takaisinmallintaa mitään Sivustoon kuuluvaa tai sitä millään tavalla muodostavaa ohjelmistoa.",
    prohibitedActivity19:
      "- Käytä, käynnistä, kehitä tai jaa mitään automatisoitua järjestelmää, mukaan lukien rajoituksetta kaikki hakurobotit, huijausohjelmat, kaavintaohjelmat tai offline-lukijat, jotka käyttävät Sivustoa, tai käytä tai käynnistä luvattomia komentosarjoja tai muita ohjelmistoja, lukuun ottamatta sitä, mikä voi olla seurausta tavanomaisesta hakukoneen tai internetselaimen käytöstä.",
    prohibitedActivity20:
      "- Käytä ostoagenttia tai ostoedustajaa tehdäksesi ostoksia Sivustolla.",
    prohibitedActivity21:
      "- Sivuston luvaton käyttö, mukaan lukien käyttäjien käyttäjätunnusten ja/tai sähköpostiosoitteiden kerääminen sähköisesti tai muilla keinoin ei-toivottujen sähköpostien lähettämistä varten tai käyttäjätilien luominen automaattisesti tai väärien perusteiden avulla.",
    prohibitedActivity22:
      "- Käyttää Sivustoa osana mitään pyrkimystä kilpailla kanssamme tai muutoin käyttää Sivustoa ja/tai Sisältöä mihinkään tuloja tuottavaan tarkoitukseen tai kaupalliseen toimintaan.",
    prohibitedActivity23:
      "- Käyttää Sivustoa mainostaakseen tai tarjotakseen myytäväksi tavaroita ja palveluita.",
    prohibitedActivity24: "- Myydä tai muuten siirtää profiilisi.",
    featuresContent1:
      "Suunnittelemme Palvelumme huolella omien kokemustemme ja asiakkaidemme kokemusten pohjalta, jotka jakavat aikaansa ja palautettaan. Ei kuitenkaan ole olemassa sellaista asiaa kuin palvelu, joka miellyttäisi kaikkia. Emme takaa, että Palvelumme täyttävät erityisvaatimuksesi tai odotuksesi.",
    featuresContent2:
      "Testaamme myös kaikki ominaisuutemme ennen niiden julkaisemista. Kuten minkä tahansa ohjelmiston kanssa, Palveluissamme on väistämättä joitakin virheitä. Seuraamme meille ilmoitettuja virheitä ja työskentelemme niiden parissa, erityisesti turvallisuuteen tai yksityisyyteen liittyvien virheiden osalta. Kaikkia ilmoitettuja virheitä ei korjata, emmekä takaa täysin virheettömiä Palveluita.",
    correctionsContent1:
      "Sivustolla saattaa olla tietoja, jotka sisältävät typografisia virheitä, epätarkkuuksia tai puutteita, mukaan lukien kuvaukset, hinnat, saatavuus ja monia muita tietoja. Pidätämme oikeuden korjata virheitä, epätarkkuuksia tai puutteita sekä muuttaa tai päivittää Sivuston tietoja milloin tahansa ilman ennakkoilmoitusta.",
    correctionsContent2:
      "Emme voi taata, että Sivusto on käytettävissä kaikkina aikoina. Saatamme kohdata laitteisto-, ohjelmisto- tai muita ongelmia tai joutua suorittamaan Sivustoon liittyviä huoltotoimenpiteitä, jotka johtavat keskeytyksiin, viivästyksiin tai virheisiin. Pidätämme oikeuden muuttaa, tarkistaa, päivittää, keskeyttää, lopettaa tai muuten muokata Sivustoa milloin tahansa ja mistä tahansa syystä ilman erillistä ilmoitusta sinulle. Hyväksyt, ettemme ole millään tavalla vastuussa mistään menetyksestä, vahingosta tai haitasta, joka aiheutuu siitä, että et voi käyttää Sivustoa sen käyttökatkoksen tai lopettamisen aikana. Mitään näissä Käyttöehdoissa ei voida tulkita siten, että se velvoittaisi meitä ylläpitämään ja tukemaan Sivustoa tai toimittamaan siihen liittyviä korjauksia, päivityksiä tai julkaisuja.",
    userDataContent:
      "Säilytämme tiettyjä tietoja, jotka lähetät Sivustolle, Sivuston suorituskyvyn hallintaa varten, sekä tietoja, jotka liittyvät Sivuston käyttöön. Vaikka teemme säännöllisiä varmuuskopioita tiedoista, olet yksin vastuussa kaikista lähettämistäsi tiedoista tai tiedoista, jotka liittyvät mihin tahansa Sivuston avulla suorittamaasi toimintaan. Hyväksyt, ettemme ole vastuussa sinulle tällaisten tietojen katoamisesta tai vioittumisesta, ja luovut täten oikeudesta nostaa meitä vastaan ​​kanne, joka johtuu tällaisten tietojen katoamisesta tai vioittumisesta.",
    privacyPolicyContent1:
      "Välitämme tietosuojasta ja -turvallisuudesta. Tutustu valikoimaamme",
    privacyPolicy: "Tietosuojakäytäntö",
    privacyPolicyContent2:
      "Käyttämällä Sivustoa hyväksyt Tietosuojakäytäntömme, joka on sisällytetty näihin Käyttöehtoihin. Huomaa, että Sivustoa isännöidään Yhdysvalloissa. Jos käytät Sivustoa mistä tahansa muualta maailmasta, jonka lait tai muut vaatimukset henkilötietojen keräämisestä, käytöstä tai luovuttamisesta poikkeavat Yhdysvaltojen sovellettavista laeista, jatkamalla Sivuston käyttöä siirrät tietosi Yhdysvaltoihin ja suostut tietojesi siirtämiseen ja käsittelyyn Yhdysvalloissa.",
    liabilityIntro:
      "Mainitsemme vastuun kaikissa näissä ehdoissa, mutta yhteen osioon kootaksemme kaiken:",
    liabilityContent:
      "Ymmärrät ja hyväksyt nimenomaisesti, että Yhtiö ei ole lain tai oikeudenmukaisuuden nojalla vastuussa sinulle tai kolmannelle osapuolelle mistään suorista, epäsuorista, satunnaisista, menetetyistä voitoista, erityisistä, seuraamuksellisista, rankaisevista tai esimerkinomaisista vahingoista, mukaan lukien, mutta ei rajoittuen, vahingot voittojen, liikearvon, käytön, tietojen tai muiden aineettomien tappioiden menetyksestä (vaikka Yhtiölle olisi ilmoitettu tällaisten vahinkojen mahdollisuudesta), jotka johtuvat: (1) Palveluiden käytöstä tai käytön estymisestä; (2) sisällön ja materiaalien virheistä, erehdyksistä tai epätarkkuuksista; (3) minkä tahansa luonteen omaisuusvahingoista tai henkilövahingoista, jotka johtuvat sivuston käytöstä; (4) korvaavien tavaroiden ja palveluiden hankintakustannuksista, jotka johtuvat Palveluiden kautta ostetuista tai hankituista tavaroista, tiedoista, tiedoista tai palveluista tai vastaanotetuista viesteistä tai tehdyistä tapahtumista; (5) luvattomasta pääsystä suojattuihin palvelimiimme tai niiden ja/tai kaikkien niillä tallennettujen henkilötietojen ja/tai taloudellisten tietojen käytöstä; (6) sivustolle tai sivustolta tapahtuvan tiedonsiirron keskeytymisestä tai lopettamisesta; (7) kaikki virheet, virukset, troijalaiset tai vastaavat, joita kolmas osapuoli voi lähettää sivustolle tai sen kautta, ja/tai; (8) kaikki virheet tai puutteet sisällössä ja materiaaleissa tai minkäänlaiset menetykset tai vahingot, jotka johtuvat sivuston kautta julkaistun, lähetetyn tai muuten saatavilla olevan sisällön käytöstä; (9) kolmannen osapuolen lausunnot tai toiminta palvelussa; (10) tai mikä tahansa muu näihin käyttöehtoihin tai palveluihin liittyvä asia, olipa se sitten sopimusrikkomus, oikeudenloukkaus (mukaan lukien aktiivinen tai passiivinen huolimattomuus) tai mikä tahansa muu vastuun peruste.",
    miscellaneousContent:
      "Nämä käyttöehdot ja kaikki Sivustolle tai Sivustoon julkaisemamme käytännöt tai toimintasäännöt muodostavat koko sopimuksen ja yhteisymmärryksen sinun ja meidän välillämme. Se, että emme käytä tai pane täytäntöön mitään näiden käyttöehtojen oikeutta tai määräystä, ei tarkoita kyseisen oikeuden tai määräyksen luopumista. Näitä käyttöehtoja sovelletaan lain sallimassa laajuudessa. Voimme siirtää osan tai kaikki oikeutemme ja velvollisuutemme muille milloin tahansa. Emme ole vastuussa mistään menetyksestä, vahingosta, viivästyksestä tai toiminnan laiminlyönnistä, joka johtuu kohtuullisen hallintamme ulkopuolella olevasta syystä. Jos jokin näiden käyttöehtojen määräys tai sen osa katsotaan laittomaksi, mitättömäksi tai täytäntöönpanokelvottomaksi, kyseinen määräys tai sen osa katsotaan erotettavaksi näistä käyttöehdoista, eikä se vaikuta jäljellä olevien määräysten pätevyyteen ja täytäntöönpanokelpoisuuteen. Sinun ja meidän välillemme ei synny yhteisyritystä, kumppanuutta, työsuhdetta tai edustussuhdetta näiden käyttöehtojen tai Sivuston käytön seurauksena. Hyväksyt, että näitä käyttöehtoja ei tulkita meitä vastaan sillä perusteella, että olemme laatineet ne. Luovut täten kaikista puolustuksista, jotka sinulla saattavat perustua näiden käyttöehtojen sähköiseen muotoon ja siihen, että osapuolet eivät ole allekirjoittaneet näitä käyttöehtoja.",
    contactUsContent1:
      "Jos sinulla on kysyttävää jostakin käyttöehdoista, ole hyvä ja",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
