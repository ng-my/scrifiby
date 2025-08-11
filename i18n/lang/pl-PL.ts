// 波兰语
let message = {
  // Strona główna
  HomePage: {
    home: "Strona główna",
    version: "Wersja podstawowa (Darmowa):",
    times:
      "{times} darmowych transkrypcji dziennie, {left} pozostało dzisiaj. ",
    tips: "Przejdź na Pro, aby uzyskać nieograniczone transkrypcje.",
    update: "Ulepsz teraz",
    folders: "Foldery",
    rename: "Zmień nazwę",
    delete: "Usuń",
    createTitle: "Utwórz folder",
    deleteConfirm: `Czy na pewno chcesz usunąć folder i wszystkie pliki w nim zawarte?`,
    cancel: "Anuluj",
    confirm: "Utwórz",
    dialogLabel: "Nazwa folderu",
    recently: "Ostatnie pliki",
    loading: "Ładowanie",
    tour: {
      step0: {
        title: "Witamy w {name}",
        tip: "Tutaj możesz:",
        content:
          "Transkrybować pojedyncze rozmowy, spotkania, wykłady i więcej",
        next: "Rozpocznij"
      },
      step1: {
        title: "Transkrybuj pliki",
        content:
          "Obsługuje trzy metody transkrypcji: pliki lokalne, linki i nagrania."
      },
      step2: {
        title: "Utwórz folder",
        content: 'Kliknij "+" aby utworzyć folder i zorganizować swoje pliki.'
      },
      step3: {
        title: "Przeglądaj szczegóły transkrypcji i edytuj",
        content:
          "Kliknij element, aby zobaczyć szczegóły transkrypcji, edytować i tłumaczyć."
      },
      next: "dalej",
      finish: "Rozumiem"
    },
    export: {
      export: "Eksportuj",
      title: "Generujemy Twój eksport",
      title2: "Twój plik jest gotowy",
      singleLoadingContent: "1 plik jest kompresowany.",
      singleSuccessContent: "1 plik został skompresowany.",
      loadingContent: "{num} plików jest kompresowanych.",
      successContent: "{num} plików zostało skompresowanych.",
      cancel: "Anuluj eksport",
      error: "Błąd eksportu",
      dialog: {
        title: "Ostrzeżenie",
        content: "Anulować eksport?",
        cancel: "Anuluj eksport",
        continue: "Kontynuuj eksport"
      }
    },
    welcome: {
      title: "Witamy w Scribify!",
      description: "Tutaj możesz:",
      transcribe:
        "Bez wysiłku transkrybować z Scribify—zamień rozmowy głosowe w jasny, przeszukiwalny i udostępnialny tekst w mgnieniu oka.",
      precision:
        "Uzyskaj dokładne transkrypcje z identyfikacją mówiących i znacznikami czasu natychmiast.",
      translate:
        "Przełamuj bariery językowe: tłumacz transkrypcje na ponad 200 języków z łatwością.",
      edit: "Edytuj, udoskonalaj i eksportuj swoje transkrypcje w formatach dopasowanych do Twoich potrzeb.",
      collaborate: "Współpracuj, udostępniając swój przepisany tekst innym.",
      button: "Zacznij",
      tip: "Gotowy na zamianę dźwięku w przepisany tekst? Zacznij eksplorować teraz!",
      tip2: "Rozpocznij eksplorację już teraz!",
      tip1: "Gotowy przekształcić audio w transkrypcję tekstu? "
    },
    subscriptionModal: {
      left: {
        title: "Wybierz Plan Pro, aby odblokować więcej",
        c1: "Nieograniczone transkrypcje",
        c2: "10-godzinne przesyłanie",
        c3: "Najwyższy priorytet",
        c4: "99% dokładność transkrypcji",
        c5: "Ponad 100 obsługiwanych języków",
        c6: "Identyfikacja mówiących",
        c7: "Tłumaczenie transkrypcji",
        t1: "Nieograniczone transkrypcje dla jednej osoby.",
        t2: "Każdy plik może mieć do 10 godzin / 5 GB. Prześlij 50 plików na raz.",
        t3: "Zawsze przepiszemy Twoje pliki tak szybko, jak to możliwe, z najwyższym priorytetem."
      },
      right: {
        title: "Wybierz Plan Pro",
        yearly: "Rocznie",
        monthly: "Miesięcznie",
        save: "Oszczędność",
        preMonth: "miesięcznie",
        preYear: "rocznie",
        firstMonth: "pierwszy miesiąc",
        afterwards: "później"
      },
      subscribe: "Subskrybuj"
    }
  },
  // Strona folderów
  FolderPage: {
    table: {
      name: "Nazwa",
      duration: "Czas trwania",
      status: "Status",
      date: "Data utworzenia",
      activity: "Aktywność",
      empty1: `Jest pusty.`,
      empty2: `Kliknij przycisk powyżej, aby transkrybować plik.`,
      just: "właśnie",
      export: "Eksportuj",
      delete: "Usuń",
      share: "Udostępnij",
      rename: "Zmień nazwę",
      move: "Przenieś",
      failed: "Nieudane",
      selected: "Wybrane",
      success: "Sukces",
      fileList: "Lista Plików"
    },
    dialog: {
      move: {
        title: "Przenieś",
        label: "Wybierz folder",
        placeholder: "Wybierz folder",
        confirm: "Przenieś",
        cancel: "Anuluj"
      },
      rename: {
        title: "Zmień nazwę",
        label: "Nazwa pliku",
        confirm: "Zmień nazwę",
        cancel: "Anuluj"
      },
      delete: {
        title: "Usuń",
        file: "plik",
        files: "pliki",
        label: "Potwierdzić usunięcie? Tej akcji nie można cofnąć.",
        confirm: "Usuń",
        cancel: "Anuluj"
      },
      share: {
        title: "Udostępnij",
        label:
          "Każdy z poniższym bezpiecznym linkiem może zobaczyć tę transkrypcję i powiązany plik multimedialny.",
        confirm: "Kopiuj link",
        success: "Kopiowanie udane"
      },
      export: {
        title: "Eksportuj",
        select: "Wybierz potrzebny format",
        settings: "Ustawienia",
        speaker: "Uwzględnij mówcę",
        timecodes: "Uwzględnij kody czasowe",
        confirm: "Eksportuj",
        cancel: "Anuluj",
        selectErr: "Wybierz jeden lub więcej formatów"
      }
    },
    search: {
      placeholder: "Szukaj"
    },
    recently: "Ostatnio",
    record: "Nagrywaj",
    transcribe: "Transkrybuj",
    unclassified: "Niesklasyfikowane foldery",
    buttons: {
      transcribe: "Transkrybuj pliki",
      url: "Transkrybuj linki",
      record: "Nagrywaj i transkrybuj",
      recording: "Nagrywanie..."
    },
    delSuccess: "Usunięto pomyślnie",
    create: "Utwórz"
  },
  // Przesyłanie plików i nagrywanie
  FileUploadAndRecording: {
    record: {
      record: "Nagrywaj",
      pause: "Pauza",
      resume: "Wznów",
      stop: "Stop",
      endRecord: "Zakończ nagrywanie",
      delete: "Usuń",
      transcribe: "Transkrybuj",
      permissionDenied:
        "Odmowa dostępu do mikrofonu lub urządzenie nie istnieje",
      dialog: {
        delete: {
          title: "Ostrzeżenie",
          label: "Czy na pewno chcesz usunąć to nagranie?",
          confirm: "Usuń",
          cancel: "Anuluj"
        },
        complete: {
          title: "Nagrywanie zakończone",
          label:
            "Nagranie osiągnęło 10 godzin i zostało automatycznie zatrzymane. Proszę o transkrypcję.",
          confirm: "Rozumiem"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkrybuj media online",
        title: "Wklej linki",
        label:
          "Wklej link do mediów z następujących platform, ale nie tylko: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Dodaj",
        cancel: "Anuluj",
        // Wprowadź poprawny link
        errorTitle:
          "Wprowadzony adres linku jest nieprawidłowy. Sprawdź i spróbuj ponownie.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transkrybuj media online",
        dialogTitle: "Transkrybuj pliki",
        tip1: "Kliknij, aby przesłać",
        tip2: "lub przeciągnij i upuść",
        or: "lub"
      },
      del: {
        title: "Ostrzeżenie",
        content:
          "Cały postęp zostanie utracony. Potwierdzić anulowanie transkrypcji?",
        cancel: "Potwierdź anulowanie",
        confirm: "Kontynuuj transkrypcję"
      },
      files: "Pliki",
      resultDialogTitle: "Transkrybuj pliki",
      resultDialogTitle2: "Transkrypcja pliku",
      cancel: "Anuluj",
      confirm: "Transkrybuj",
      return: "Powrót",
      addMore: "Dodaj więcej",
      language: "Język mediów",
      failed: "Nieudane",
      tooLarge: "Plik jest za duży.",
      linkUpload: "Przesyłanie...",
      fileFormat: "Format pliku jest niedozwolony",
      localFiles: "Pliki lokalne",
      pasteLink: "Link online",
      uploadErr: "Błąd przesyłania",
      hashErr: "Błąd hash",
      table: {
        status: "Status",
        file: "Plik",
        size: "Rozmiar",
        noData: "Brak danych"
      },
      maxFileNum: "Liczba plików nie może przekroczyć {num}.",
      speaker: "Identyfikacja mówcy",
      speakerLabel: "Oznacz każdy segment transkrypcji osobą mówiącą."
    }
  },
  // Strona szczegółów transkrypcji
  TranscriptionPage: {
    edit: "Edytuj",
    translate: "Tłumacz",
    showSpeaker: "Pokaż mówcę",
    showTimestamp: "Pokaż znacznik czasu",
    share: "Udostępnij",
    shared: "udostępnione",
    export: "Eksportuj",
    speaker: "Mówca_{ id }",
    unassignSpeaker: "Usuń przypisanie mówcy",
    play: "Odtwórz",
    save: "Zapisz",
    undo: "Cofnij",
    redo: "Ponów",
    confirm: "Potwierdź",
    cancel: "Anuluj",
    addNew: "Dodaj nowy",
    createANewSpeaker: "Utwórz nowego mówcę",
    speakerName: "Nazwa mówcy",
    addSpeaker: "Dodaj mówcę",
    applyToAllMatchingSpeakers: "Zastosuj do wszystkich pasujących mówców",
    cancelTranslation: "Anuluj tłumaczenie",
    showVideo: "Pokaż wideo",
    hideVideo: "Ukryj wideo",
    langChooseV1: {
      recently: "Ostatnio",
      popular: "Popularne",
      other: "Inne",
      searchLanguage: "Szukaj języka",
      noMatch: "Nie znaleziono pasującego języka",
      English: "Angielski",
      "English(US)": "Angielski (USA)",
      "English(UK)": "Angielski (UK)",
      Spanish: "Hiszpański",
      Portuguese: "Portugalski",
      French: "Francuski",
      Italian: "Włoski",
      German: "Niemiecki",
      Dutch: "Holenderski",
      Polish: "Polski",
      Danish: "Duński",
      Japanese: "Japoński",
      Korean: "Koreański",
      Hungarian: "Węgierski",
      Czech: "Czeski",
      Chinese: "Chiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Azerbaijani: "Azerski",
      Estonian: "Estoński",
      Belarusian: "Białoruski",
      Bulgarian: "Bułgarski",
      Icelandic: "Islandzki",
      Bosnian: "Bośniacki",
      Persian: "Perski",
      Russian: "Rosyjski",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Finnish: "Fiński",
      Kazakh: "Kazachski",
      Galician: "Galicyjski",
      Catalan: "Kataloński",
      "Chinese(Simplified)": "Chiński (uproszczony)",
      Kannada: "Kannada",
      Croatian: "Chorwacki",
      Latvian: "Łotewski",
      Lithuanian: "Litewski",
      Romanian: "Rumuński",
      Marathi: "Marathi",
      Malay: "Malajski",
      Macedonian: "Macedoński",
      Maori: "Maoryski",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalski",
      Norwegian: "Norweski",
      Swedish: "Szwedzki",
      Serbian: "Serbski",
      Slovak: "Słowacki",
      Slovenian: "Słoweński",
      Swahili: "Suahili",
      Tagalog: "Tagalski",
      Tamil: "Tamilski",
      Thai: "Tajski",
      Turkish: "Turecki",
      Welsh: "Walijski",
      Urdu: "Urdu",
      Ukrainian: "Ukraiński",
      Greek: "Grecki",
      Armenian: "Ormiański",
      Hindi: "Hindi",
      Indonesian: "Indonezyjski",
      Vietnamese: "Wietnamski",
      Albanian: "Albański",
      Amharic: "Amharski",
      Assamese: "Asamski",
      Occitan: "Oksytański",
      Bashkir: "Baszkirski",
      Basque: "Baskijski",
      Breton: "Bretoński",
      Tibetan: "Tybetański",
      Faroese: "Farerski",
      Sanskrit: "Sanskryt",
      Khmer: "Khmerski",
      Georgian: "Gruziński",
      Gujarati: "Gudżarati",
      "Haitian Creole": "Kreolski haitański",
      Hausa: "Hausa",
      Latin: "Łaciński",
      Lao: "Laotański",
      Lingala: "Lingala",
      Luxembourgish: "Luksemburski",
      Malagasy: "Malgaski",
      Maltese: "Maltański",
      Malayalam: "Malajalam",
      Mongolian: "Mongolski",
      Bengali: "Bengalski",
      Burmese: "Birmański",
      Punjabi: "Pendżabski",
      Pashto: "Paszto",
      Sinhala: "Syngaleski",
      Shona: "Shona",
      Somali: "Somalijski",
      Tajik: "Tadżycki",
      Tatar: "Tatarski",
      Telugu: "Telugu",
      Turkmen: "Turkmeński",
      Uzbek: "Uzbecki",
      Hawaiian: "Hawajski",
      "Norwegian Nynorsk": "Norweski Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundajski",
      Yiddish: "Jidysz",
      Yoruba: "Joruba",
      Javanese: "Jawajski",
      Cantonese: "Kantoński",
      Abkhaz: "Abchaski",
      Afar: "Afar",
      alz: "Alur",
      ach: "Aczoli",
      awa: "Awadhi",
      Avaric: "Awarski",
      Ewe: "Ewe",
      Aymara: "Ajmara",
      Irish: "Irlandzki",
      Oriya: "Orija",
      Oromo: "Oromo",
      Ossetian: "Osetyjski",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balijski",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Północny Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beludżi",
      bho: "Bhodżpuri",
      bua: "Buriacki",
      chm: "Maryjski",
      Chamorro: "Czamorro",
      Chechen: "Czeczeński",
      chk: "Chuuk",
      Chuvash: "Czuwaski",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Szan",
      tet: "Tetum",
      Divehi: "Malediwski",
      dyu: "Diula",
      tiv: "Tiw",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Południowy Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "Pismo N'Ko",
      "French(Canada)": "Francuski (Kanada)",
      Fijian: "Fidżyjski",
      fon: "Fon",
      "Western Frisian": "Zachodniofryzyjski",
      fur: "Friulski",
      Fulah: "Fulani",
      Kongo: "Kongo",
      Kalaallisut: "Grenlandzki",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgiski",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kaczin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsykański",
      "crh-Latn": "Krymsko-tatarski (łaciński)",
      crh: "Krymsko-tatarski (cyrylica)",
      Quechua: "Keczua",
      Kurdish: "Kurdyjski (Kurmanji)",
      ckb: "Kurdyjski (Sorani)",
      trp: "Kok Borok",
      ltg: "Łatgalski",
      lij: "Liguryjski",
      Limburgish: "Limburgijski",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardzki",
      rom: "Romski",
      mad: "Madurajski",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajski (Jawi)",
      Marshallese: "Marszalski",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maurytyjski kreolski",
      "mni-Mtei": "Meitei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (wschodnie Huasteca)",
      "Southern Sotho": "Południowy Sotho",
      new: "Newarski",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendżabski (Shahmukhi)",
      "pt-PT": "Portugalski (Portugalia)",
      Chichewa: "Cziczewa",
      cgg: "Kiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotecki",
      "Northern Sami": "Północnosaamski",
      Samoan: "Samoański",
      kri: "Krio",
      crs: "Kreolski seszelski",
      Sango: "Sango",
      "sat-Latn": "Santali (łaciński)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Szkocki gaelicki",
      sus: "Susu",
      ceb: "Cebuański",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (łaciński)",
      Tahitian: "Tahitański",
      Tonga: "Tongijski",
      Tigrinya: "Tigrinia",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuwiński",
      war: "Warajski",
      mak: "Makasarski",
      vec: "Wenecki",
      Uyghur: "Ujgurski",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurcki",
      szl: "Śląski",
      scn: "Sycylijski",
      hil: "Hiligaynon",
      jam: "Jamajski patois",
      sah: "Jakucki",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (łaciński)",
      Inuktitut: "Inuktitut (sylabiczny)",
      yua: "Jukatański maja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Nie znaleziono",
    notFundDesc: "Nie mogliśmy znaleźć tego, czego szukasz.",
    shareTips:
      "Każdy z poniższym bezpiecznym linkiem może zobaczyć tę transkrypcję i powiązany plik multimedialny.",
    copyLink: "Kopiuj link",
    copySuccessful: "Kopiowanie udane",
    copyFail: "Kopiowanie nieudane",
    closeTrans: "Anuluj tłumaczenie",
    upgradeBtn: "Ulepsz teraz",
    upgradeTip30: "Ten plik przekracza 30 minut.",
    upgradeTipMore:
      "Ulepsz do Scribify Pro, aby transkrybować pliki do 10 godzin",
    errorTips: "Coś poszło nie tak.",
    copiedLink: "Link skopiowany",
    copyGotIt: "wiedział"
  },
  // Logowanie, rejestracja, zmiana hasła
  IdentityInfoManage: {
    or: "lub", // lub
    LoginBtn: "Zaloguj się przez e-mail",
    LoginGoogle: "Zaloguj się przez Google",
    SignupBtn: "Zarejestruj się przez e-mail",
    SignupGoogle: "Zarejestruj się przez Google",
    SignupDes: "Zarejestruj się już dziś i zobacz magię — za darmo.",
    SignupTitle: "Dokładna i nieograniczona transkrypcja",
    signup: "Zarejestruj się", // rejestracja
    sign_up: "Zarejestruj się", // rejestracja
    loginByGoogle: "Kontynuuj z Google", // logowanie przez Google
    emailAddress: "Wprowadź swój adres email", // wprowadź swój email
    createAccount: "Utwórz nowe konto", // utwórz konto
    accountExists: "Masz już konto? ", // masz już konto? zaloguj się
    agreeTerm: {
      agree: "Kontynuując, zgadzasz się z naszymi {terms} i {policy}.",
      terms: "Warunkami",
      policy: "Polityką prywatności"
    },
    setPassword: "Ustaw hasło", // ustaw hasło
    code: "Kod weryfikacyjny", // kod weryfikacyjny
    resend: "Wyślij ponownie", // wyślij ponownie
    enterPassword: "Wprowadź swoje hasło.", // wprowadź hasło
    passwordLeval: "Poziom hasła", // siła hasła
    Weak: "Słabe", // słabe, średnie, silne
    Medium: "Średnie", // słabe, średnie, silne
    Strong: "Silne", // słabe, średnie, silne
    confirmPassword: "Potwierdź swoje hasło", // potwierdź hasło
    invalidEmail: "Nieprawidłowy adres email", // nieprawidłowy adres email
    logInDirectly: "To konto już istnieje. Zaloguj się bezpośrednio.", // konto już istnieje, zaloguj się bezpośrednio
    codeErrorTryAgain: "Błąd kodu weryfikacyjnego. Spróbuj ponownie.", // błąd kodu weryfikacyjnego, spróbuj ponownie
    atLeastSix: "Hasło musi mieć co najmniej 6 znaków.", // hasło musi mieć co najmniej 6 znaków
    passwordNotMatch: "Hasła nie pasują do siebie. Spróbuj ponownie.", // hasła nie pasują do siebie, spróbuj ponownie
    login: "Zaloguj się", // zaloguj się
    log_in: "Zaloguj się", // zaloguj się
    log_In: "Zaloguj się", // zaloguj się
    password: "Hasło", // hasło
    forgotPassword: "Zapomniałeś hasła?", // zapomniałeś hasła?
    noAccount: "Nie masz konta?", // nie masz konta? zarejestruj się
    accountNotExists: "To konto nie istnieje.", // konto nie istnieje
    passwordError: "Błąd hasła", // błąd hasła
    sendCode: "Wyślij kod weryfikacyjny", // wyślij kod weryfikacyjny
    resetPassword: "Zresetuj hasło", // zresetuj hasło
    resetYourPassword: "Zresetuj swoje hasło", // zresetuj swoje hasło
    newOldCantSame: "Nowe hasło musi być inne niż stare hasło.", // nowe hasło musi być inne niż stare hasło
    passwordResetOk: "Hasło zostało pomyślnie zresetowane!", // hasło zostało pomyślnie zresetowane!
    signupToSaveProgress: "Dokończ rejestrację, aby zapisać swój postęp.",
    tip: "Wskazówka",
    tipContentEmail:
      "Właśnie wysłaliśmy hasło logowania do Twojego konta na podany adres e-mail.",
    tipContentPassword:
      "Sprawdź swoją skrzynkę odbiorczą i zaloguj się za pomocą adresu e-mail oraz hasła.",
    codeToEmail:
      "Właśnie wysłaliśmy kod weryfikacyjny na Twój adres e-mail. Sprawdź swoją skrzynkę odbiorczą i wklej kod weryfikacyjny powyżej."
  },
  // Strona szczegółów udostępniania
  Sharepage: {},
  // Strona inicjalizacji
  InitPage: {},
  // Ustawienia konta
  AccountSettingsPage: {
    subscription: "Plan subskrypcji",
    freeversion: "Darmowa",
    transcribeTimesDay: "3 transkrypcje dziennie",
    uploadMinutes: "Przesyłanie 30-minutowe",
    lowerPriority: "Niższy priorytet",
    currentPlan: "Obecny plan",
    professionalEdition: "wersja profesjonalna",
    unlimitedTranscription: "Nielimitowana transkrypcja",
    unlimitedNumberOfTimes:
      "Nieograniczona częstotliwość i czas trwania transkrypcji.",
    filesUploadedAtOnce:
      "Każdy plik może mieć do 10 godzin/5 GB. Prześlij 50 plików naraz.",
    highestPriority: "najwyższy priorytet",
    weWillGiveTheHighest:
      "Zawsze transkrybujemy Twoje pliki najszybciej jak to możliwe z najwyższym priorytetem.",
    theFirstMonth: "Pierwszy miesiąc",
    subscribeTo: "subskrybuj",
    basicVersionFree: "Wersja podstawowa (darmowa)",
    return: "Powrót",
    annualize: "roczny",
    monthly: "miesięczny",
    everyYear: "co roku",
    saved: "zapisano",
    byTheMonth: "miesięcznie",
    firstMonth: "pierwszy miesiąc",
    afterwardsEveryMonth: "Następnie co miesiąc",
    manageSubscription: "Zarządzaj subskrypcją",
    professionalYearbook: "Profesjonalna roczna",
    professionalMonthly: "Profesjonalna miesięczna",
    subscriptionWillCancelledOn: "Twoja subskrypcja zostanie anulowana",
    displayLanguage: "Język wyświetlania",
    update: "Ulepsz teraz",
    basicversion: "Wersja podstawowa (Darmowa)",
    daily: "{start} z {end} dziennych transkrypcji wykorzystanych",
    upgradetoPro: "Ulepsz do Pro",
    accountSetting: "Ustawienia konta",
    logOut: "Wyloguj się",
    account: "Konto",
    email: "Email",
    id: "ID",
    password: "Hasło",
    resetPassword: "Zresetuj hasło",
    logIn: "Zaloguj się",
    tryForFree: "Wypróbuj za darmo",
    notFund: "Nie znaleziono",
    couldntFind: "Nie znaleźliśmy tego, czego szukasz.",
    proAnnual: "Pro Roczna",
    proMonthly: "Pro Miesięczna",
    perMonth: "miesięcznie",
    afterwards: "następnie",
    accuracy: "dokładność transkrypcji",
    supported: "obsługiwane języki",
    identification: "Identyfikacja mówcy",
    transcriptSranslation: "Tłumaczenie transkrypcji",
    perYear: "rocznie",
    getProPlan: "Zdobądź plan Pro",
    changeToAnnual: "Zmień na roczny",
    automaticRenewalon: "Automatyczne odnawianie",
    eachMonth: "Automatyczne odnawianie {time}. dnia każdego miesiąca.",
    automaticRenewal:
      "Automatyczne odnowienie nie powiodło się, sprawdź metodę płatności.",
    eachYear: "Automatyczne odnawianie w dniu {time} każdego roku.",
    returnAccountSetting: "Powrót",
    needsToWaitLonger:
      "Poczekaj dłużej, zanim Twoje pliki zostaną przetranskrybowane.",
    freeThreeTimesDay: "Codziennie przetranskrybuj 3 pliki za darmo.",
    oneFileUploaded:
      "Każdy plik może trwać do 30 minut. Prześlij 1 plik na raz.",
    uploadWithinHours: "10-godzinne przesyłanie",
      yourSubscription: "Twoja subskrypcja zostanie anulowana {time}."
},
  // Mapa języków
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chiński (uproszczony)",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Japanese: "Japoński",
      Danish: "Duński",
      German: "Niemiecki",
      English: "Angielski",
      Spanish: "Hiszpański",
      French: "Francuski",
      Italian: "Włoski",
      Hungarian: "Węgierski",
      Dutch: "Holenderski",
      Norwegian: "Norweski",
      Polish: "Polski",
      Portuguese: "Portugalski",
      Finnish: "Fiński",
      Swedish: "Szwedzki",
      Turkish: "Turecki",
      Greek: "Grecki",
      Russian: "Rosyjski",
      Ukrainian: "Ukraiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Korean: "Koreański"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Szablon SaaS Nuxt3 typu open-source, z wstępnie zintegrowanymi globalnymi bramkami płatności (Stripe/Cream), Google OAuth, routingiem i18n oraz narzędziami do optymalizacji SEO. Zaprojektowany dla deweloperów uruchamiających wielojęzyczne aplikacje internetowe, oferuje wsparcie SSR/SSG i bezpieczeństwo klasy produkcyjnej od razu po instalacji.",
    startLink: "Rozpocznij bezpłatny okres próbny~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Dołącz do listy oczekujących, otrzymuj najnowsze wiadomości NuxtPro jako pierwszy ORAZ zniżki!",
      placeholder: "Wprowadź swój email",
      button: "Dołącz do listy oczekujących",
      joinCountMessage:
        "🔥 Wczesny użytkownik #{count} właśnie dołączył do listy oczekujących!"
    },
    seo: {
      title: "Szablon SaaS Nuxt z otwartym kodem źródłowym | NuxtPro",
      description:
        "Szablon NuxtJS ze wszystkim, czego potrzebujesz, aby zaprezentować swój produkt klientom. Od pomysłu do produkcji w 5 minut."
    },
    api: {
      title: "to jest demo",
      corpInfo: "informacje o firmie"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "błąd pobierania wideo"
      },
      mse: {
        code: 2,
        msg: "błąd dodawania strumienia"
      },
      parse: {
        code: 3,
        msg: "błąd analizy"
      },
      format: {
        code: 4,
        msg: "nieprawidłowy format"
      },
      decoder: {
        code: 5,
        msg: "błąd dekodowania"
      },
      runtime: {
        code: 6,
        msg: "błędy gramatyczne"
      },
      timeout: {
        code: 7,
        msg: "przekroczenie czasu odtwarzania"
      },
      other: {
        code: 8,
        msg: "inne błędy"
      }
    },
    HAVE_NOTHING: "Brak informacji o gotowości audio/wideo",
    HAVE_METADATA: "Metadane audio/wideo są gotowe ",
    HAVE_CURRENT_DATA:
      "Dane o aktualnym położeniu odtwarzania są dostępne, ale nie ma wystarczających danych do odtworzenia następnej klatki/milisekundy",
    HAVE_FUTURE_DATA: "Dostępne są aktualne dane i przynajmniej jedna klatka",
    HAVE_ENOUGH_DATA:
      "Dostępne dane są wystarczające do rozpoczęcia odtwarzania",
    NETWORK_EMPTY: "Audio/wideo nie zostało zainicjalizowane",
    NETWORK_IDLE:
      "Audio/wideo jest aktywne i zostało wybrane dla zasobów, ale sieć nie jest używana",
    NETWORK_LOADING: "Przeglądarka pobiera dane",
    NETWORK_NO_SOURCE: "Nie znaleziono źródła audio/wideo",
    MEDIA_ERR_ABORTED: "Proces pobierania został przerwany przez użytkownika",
    MEDIA_ERR_NETWORK: "Wystąpił błąd podczas pobierania",
    MEDIA_ERR_DECODE: "Wystąpił błąd podczas dekodowania",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/wideo nie jest obsługiwane",
    REPLAY: "Odtwórz ponownie",
    ERROR: "Sieć jest offline",
    PLAY_TIPS: "Odtwórz",
    PAUSE_TIPS: "Pauza",
    PLAYNEXT_TIPS: "Odtwórz następne",
    DOWNLOAD_TIPS: "Pobierz",
    ROTATE_TIPS: "Obróć",
    RELOAD_TIPS: "Odśwież",
    FULLSCREEN_TIPS: "Pełny ekran",
    EXITFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu",
    CSSFULLSCREEN_TIPS: "Pełny ekran CSS",
    EXITCSSFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu CSS",
    TEXTTRACK: "Napisy",
    PIP: "PIP",
    SCREENSHOT: "Zrzut ekranu",
    LIVE: "NA ŻYWO",
    OFF: "Wyłącz",
    OPEN: "Otwórz",
    MINI_DRAG: "Kliknij i przytrzymaj, aby przeciągnąć",
    MINISCREEN: "Mini ekran",
    REFRESH_TIPS: "Spróbuj ponownie",
    REFRESH: "Odśwież",
    FORWARD: "Do przodu",
    LIVE_TIP: "Na żywo",
    TM_SUBTITLE_SHOW_TIPS: "Włącz napisy",
    TM_SUBTITLE_HIDE_TIPS: "Wyłącz napisy",
    TM_MINIMIZE_TIPS: "Ukryj wideo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja: 25 sierpnia 2025 r.",
    policyDescription:
      "Niniejsza Polityka opisuje sposób, w jaki Scribify (zwany dalej „Scribify”, „nasz”, „my”, „nas”) gromadzi, wykorzystuje i ujawnia Twoje dane osobowe, gdy korzystasz z naszych usług, stron internetowych",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "i oprogramowania (zwanych łącznie „Usługami”).",
    policyAgreement:
      "Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności i upewnienie się, że ją rozumiesz. Korzystając z naszych Usług, akceptujesz niniejszą Politykę Prywatności. Jeśli nie wyrażasz zgody na wykorzystywanie przez nas Twoich danych osobowych zgodnie z niniejszą Polityką, musisz natychmiast zaprzestać korzystania z naszych Usług.",
    policyOverview:
      "W niniejszej polityce określamy: jakie dane gromadzimy i dlaczego; jak przetwarzamy Twoje dane; oraz Twoje prawa związane z Twoimi danymi. Nie sprzedajemy Twoich danych.",
    scopeTitle: "1. Zakres niniejszej Polityki Prywatności",
    whatWeCollectTitle: "2. Co zbieramy i dlaczego",
    accessShareTitle:
      "3. Kiedy uzyskujemy dostęp do Twoich danych lub udostępniamy je",
    secureDataTitle: "4. Jak zabezpieczamy Twoje dane",
    deleteContentTitle: "5. Co się dzieje, gdy usuniesz swoją treść",
    locationTitle: "6. Lokalizacja witryny i danych",
    childrenPrivacyTitle: "7. Prywatność dzieci",
    updatesTitle: "8. Aktualizacje niniejszej Polityki Prywatności",
    contactUsTitle: "9. Skontaktuj się z nami",
    identityAccessTitle: "2.1 Tożsamość i dostęp",
    billingInfoTitle: "2.2 Informacje rozliczeniowe",
    productInteractionsTitle: "2.3 Interakcje produktów",
    websiteInteractionsTitle: "2.4 Interakcje ze stroną internetową",
    cookiesTitle: "2.5 Pliki cookie",
    voluntaryCorrespondenceTitle: "2.6 Korespondencja dobrowolna",
    scopeContent:
      "Niniejsza Polityka Prywatności dotyczy wyłącznie gromadzenia i przetwarzania przez nas informacji o użytkownikach Usług. Niniejsza Polityka Prywatności nie ma zastosowania do usług, stron internetowych ani oprogramowania obsługiwanych przez osoby trzecie, do których prowadzą linki z naszej strony (niezależnie od tego, czy to my udostępniamy te linki, czy inni użytkownicy je udostępniają), ani do treści, danych, aplikacji ani materiałów pochodzących od osób trzecich. Zalecamy zapoznanie się z polityką prywatności stron internetowych lub oprogramowania osób trzecich przed udostępnieniem im jakichkolwiek informacji.",
    collectPrinciple:
      "Naszą naczelną zasadą jest zbieranie tylko tego, czego potrzebujemy. Oto, co to oznacza w praktyce:",
    identityAccessContent:
      "Rejestrując się w jednym z naszych produktów, prosimy o podanie danych identyfikacyjnych, takich jak imię i nazwisko oraz adres e-mail. Ma to na celu zapewnienie podstawowych funkcji produktu oraz umożliwienie nam wysyłania aktualizacji i innych istotnych informacji.",
    billingInfoContent:
      "Jeśli zarejestrujesz się w celu zakupu produktu płatnego, zostaniesz poproszony o podanie danych do płatności i adresu rozliczeniowego. Dane do płatności są przesyłane bezpośrednio do naszego systemu przetwarzania płatności i nie trafiają na nasze serwery.",
    productInteractionsContent:
      "Przechowujemy na naszych serwerach treści, które przesyłasz, odbierasz lub przechowujesz na swoich kontach produktowych. O ile nie usuniesz tych treści, możemy je przechowywać tak długo, jak długo Twoje konto jest aktywne.",
    websiteInteractionsContent:
      "Gromadzimy informacje o Twojej aktywności w przeglądarce do celów analitycznych i statystycznych, takich jak testowanie współczynnika konwersji i eksperymentowanie z nowymi projektami produktów. Obejmuje to na przykład wersje Twojej przeglądarki i systemu operacyjnego, Twój adres IP, odwiedzone strony internetowe i czas ich ładowania oraz stronę, która Cię do nas skierowała. Jeśli posiadasz konto i jesteś zalogowany, te dane analityczne są powiązane z Twoim adresem IP i kontem użytkownika, dopóki Twoje konto nie będzie już aktywne.",
    cookiesContent1:
      "Używamy również trwałych plików cookie własnych i niektórych plików cookie podmiotów trzecich, aby zapisywać pewne preferencje, ułatwiać korzystanie z naszych aplikacji, przeprowadzać testy A/B, a także wspierać niektóre analizy.",
    cookiesContent2:
      "Plik cookie to fragment tekstu przechowywany przez przeglądarkę. Może on pomóc w zapamiętaniu danych logowania i preferencji witryny. Może również gromadzić informacje takie jak typ przeglądarki, system operacyjny, odwiedzane strony internetowe, czas trwania wizyty, przeglądane treści i inne dane dotyczące kliknięć. Możesz dostosować ustawienia przechowywania plików cookie oraz akceptować lub blokować poszczególne pliki cookie w ustawieniach przeglądarki, jednak nasze aplikacje nie będą działać, a inne aspekty naszych usług mogą nie działać poprawnie, jeśli wyłączysz obsługę plików cookie.",
    voluntaryCorrespondenceContent:
      "Gdy wysyłasz do nas wiadomość e-mail z pytaniem lub prośbą o pomoc, przechowujemy tę korespondencję, łącznie z Twoim adresem e-mail, aby mieć historię wcześniejszej korespondencji, która może się przydać, jeśli skontaktujesz się z nami w przyszłości.",
    accessShareContent1:
      "Aby dostarczać żądane przez Ciebie produkty lub usługi. Korzystamy z usług zewnętrznych podprocesorów, aby pomóc w obsłudze naszych aplikacji i świadczeniu Ci Usług. Dotyczy to również dostawców usług w chmurze i usług analitycznych.",
    accessShareContent2:
      "W celu zbadania, zapobiegania lub podjęcia działań w związku z nadużyciami. Dostęp do konta klienta podczas badania potencjalnego nadużycia jest ostatecznością. Chcemy chronić prywatność i bezpieczeństwo zarówno naszych klientów, jak i osób zgłaszających nam problemy i dokładamy wszelkich starań, aby zrównoważyć te obowiązki w całym procesie. Jeśli odkryjemy, że korzystasz z naszych produktów w celach objętych ograniczeniami, podejmiemy niezbędne działania, w tym powiadomimy odpowiednie organy, jeśli będzie to uzasadnione.",
    accessShareContent3: "Jeśli wymagają tego obowiązujące przepisy prawa.",
    userDataRequests:
      "- Żądania udostępnienia danych użytkowników. Naszą polityką jest nieodpowiadanie na rządowe żądania udostępnienia danych użytkowników, chyba że jesteśmy do tego zobowiązani na mocy postępowania prawnego lub w wyjątkowych okolicznościach w przypadku żądania w trybie pilnym. Jednakże, jeśli amerykańskie organy ścigania posiadają niezbędny nakaz sądowy, wezwanie do sądu w postępowaniu karnym lub nakaz sądowy nakazujący nam udostępnienie danych, musimy się do niego zastosować. Podobnie, będziemy odpowiadać na żądania władz rządowych spoza Stanów Zjednoczonych wyłącznie na wniosek rządu USA, zgodnie z procedurami określonymi w umowie o wzajemnej pomocy prawnej. Naszą polityką jest powiadamianie użytkowników, których dane dotyczą, przed udostępnieniem danych, chyba że jest to prawnie zabronione, oraz z wyjątkiem sytuacji nadzwyczajnych.",
    preservationRequests:
      "- Żądania dotyczące zabezpieczenia danych. Podobnie, naszą polityką jest spełnianie żądań dotyczących zabezpieczenia danych wyłącznie na mocy amerykańskiej federalnej ustawy o przechowywaniu danych (US Federal Stored Communications Act), § 2703(f) tytułu 18 Kodeksu Stanów Zjednoczonych (USC), lub na mocy prawidłowo doręczonego wezwania sądowego w sprawach cywilnych. Nie udostępniamy zabezpieczonych danych, chyba że wymaga tego prawo lub nakaz sądowy, od którego nie wnosimy apelacji. Ponadto, o ile nie otrzymamy odpowiedniego nakazu sądowego, postanowienia sądu lub wezwania sądowego przed upływem wymaganego okresu przechowywania, zniszczymy wszelkie zabezpieczone kopie danych klientów po upływie okresu przechowywania.",
    taxAudit:
      "- W przypadku kontroli przez organ podatkowy możemy zostać zobowiązani do udostępnienia informacji dotyczących rozliczeń. W takim przypadku udostępnimy tylko niezbędne informacje, takie jak adresy rozliczeniowe i informacje o zwolnieniach podatkowych.",
    secureDataContent1: "Wszystkie dane są szyfrowane za pomocą",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "gdy są przesyłane z naszych serwerów do Twojej przeglądarki.",
    deleteContentContent:
      "Jeśli usuniesz jakąkolwiek treść, stanie się ona natychmiast niedostępna.",
    locationContent:
      "Nasze produkty i inne zasoby internetowe są obsługiwane w Stanach Zjednoczonych. Jeśli mieszkasz w Unii Europejskiej, Wielkiej Brytanii lub innym miejscu poza Stanami Zjednoczonymi, pamiętaj, że wszelkie informacje, które nam przekazujesz, będą przesyłane do Stanów Zjednoczonych i tam przechowywane. Korzystając z naszych stron internetowych lub Usług i/lub przekazując nam swoje dane osobowe, wyrażasz zgodę na takie przesyłanie.",
    childrenPrivacyContent:
      "Usługi nie są skierowane do dzieci i świadomie nie gromadzimy danych osobowych dzieci poniżej 13. roku życia. Jeśli nie masz ukończonych 13 lat, prosimy o nieprzesyłanie żadnych danych osobowych za pośrednictwem Usług. Jeśli uważasz, że dziecko przekazało nam dane osobowe z naruszeniem niniejszej Polityki, skontaktuj się z nami, korzystając z poniższych wskazówek.",
    updatesContent:
      "Możemy aktualizować tę politykę w razie potrzeby, aby była zgodna z obowiązującymi przepisami i odzwierciedlała wszelkie nowe praktyki. Za każdym razem, gdy wprowadzimy istotną zmianę w naszych zasadach, odświeżymy datę na górze tej strony.",
    contactUsContent1:
      "Jeśli masz jakiekolwiek pytania, uwagi lub skargi dotyczące naszej Polityki prywatności, prosimy o kontakt:",
    contactUs: "Skontaktuj się z nami",
    contactUsContent2:
      "i postaramy się rozpatrzyć Twoją skargę najszybciej jak to możliwe."
  },
  termsOfService: {
    termsOfServiceTitle: "Warunki korzystania z usługi",
    lastUpdated: "Ostatnia aktualizacja: 21 września 2022 r.",
    thankYouMessage: "Dziękujemy za korzystanie z naszych produktów!",
    companyReference:
      "Kiedy w niniejszym dokumencie używamy słów „Firma”, „my”, „nasz” lub „nas”, mamy na myśli Scribify.",
    servicesDefinition:
      "Gdy mówimy o „Usługach”, mamy na myśli wszelkie produkty tworzone i utrzymywane przez Scribify, niezależnie od tego, czy są dostarczane w przeglądarce internetowej, aplikacji komputerowej, aplikacji mobilnej czy w innym formacie.",
    termsUpdateNotice:
      "Możemy aktualizować niniejsze Warunki korzystania z usługi w przyszłości. Zazwyczaj zmiany te mają na celu doprecyzowanie niektórych z tych warunków poprzez dodanie linku do rozszerzonej, powiązanej polityki. Za każdym razem, gdy wprowadzamy istotną zmianę w naszych zasadach, odświeżamy datę na górze tej strony i podejmujemy wszelkie inne stosowne kroki w celu powiadomienia posiadaczy kont.",
    acceptanceOfAgreementTitle: "1. Akceptacja Umowy",
    scribifyServicesTitle: "2. Usługi Scribify",
    accountTermsTitle: "3. Warunki konta",
    paymentRefundsTitle: "4. Płatności, zwroty i zmiany planu",
    cancellationTerminationTitle: "5. Anulowanie i rozwiązanie umowy",
    submissionsTitle: "6. Zgłoszenia",
    uptimeSecurityTitle: "7. Czas sprawności i bezpieczeństwo",
    siteManagementTitle: "8. Zarządzanie witryną",
    copyrightContentTitle: "9. Prawa autorskie i własność treści",
    prohibitedActivitiesTitle: "10. Zabronione działania",
    featuresBugsTitle: "11. Funkcje i błędy",
    correctionsTitle: "12. KOREKTY",
    userDataTitle: "13. Dane użytkownika",
    privacyPolicyTitle: "14. Polityka prywatności",
    liabilityTitle: "15. Odpowiedzialność",
    miscellaneousTitle: "16. Różne",
    contactUsTitle: "17. Skontaktuj się z nami",
    acceptanceContent1:
      "Korzystając z naszych Usług, wyrażasz zgodę na niniejszą Umowę, która tym samym staje się wiążącą umową między Tobą a Scribify. Oświadczasz, że jesteś prawnie zdolny do zaakceptowania niniejszych Warunków i potwierdzasz, że osiągnąłeś wiek umożliwiający zawarcie wiążącej umowy. Akceptacja Scribify jest wyraźnie uzależniona od Twojej zgody na wszystkie postanowienia niniejszej Umowy.",
    acceptanceContent2:
      "Usługi nie są przeznaczone dla osób poniżej 18 roku życia i nie powinny być przez nie używane. Korzystając z Usług, oświadczasz i gwarantujesz, że spełniasz powyższe wymagania kwalifikacyjne.",
    acceptanceContent3:
      "Terminy „Ty”, „Twój”, „Ty sam” obejmują również Twoich pracowników, agentów, przedstawicieli handlowych i wszelkie inne osoby, którym zapewniasz dostęp do Usług za pośrednictwem swojego Konta (zgodnie z definicją poniżej). Ponosisz odpowiedzialność za zapewnienie, że wszystkie osoby uzyskujące dostęp do Usług za pośrednictwem Twojego konta znają niniejsze Warunki i ich przestrzegają.",
    acceptanceContent4:
      "Scribify zastrzega sobie prawo do okresowej zmiany i aktualizacji niniejszych Warunków według własnego uznania. Wszystkie zmiany wchodzą w życie natychmiast po ich opublikowaniu. Dalsze korzystanie z Usług po opublikowaniu zmienionych Warunków oznacza akceptację i zgodę na zmiany. Oczekuje się, że będziesz regularnie sprawdzać tę stronę, aby być na bieżąco z wszelkimi zmianami, ponieważ są one dla Ciebie wiążące.",
    servicesContent1:
      "Nasze Usługi umożliwiają użytkownikom przekształcanie rozmów głosowych w transkrybowany tekst, który można przeszukiwać, tłumaczyć i udostępniać innym osobom.",
    servicesContent2:
      "Możesz wybrać, czy chcesz korzystać z bezpłatnej wersji Usług („Usługi bezpłatne”), czy z płatnej wersji Usług opartej na subskrypcji, za którą możesz być zobowiązany do uiszczenia opłat („Usługi płatne”).",
    servicesContent3:
      "Udostępnimy Ci Usługi. Ponosisz odpowiedzialność za podjęcie wszelkich niezbędnych działań, aby uzyskać dostęp do Usług.",
    accountTerms1:
      "- Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta. Firma nie ponosi i nie będzie ponosić odpowiedzialności za jakiekolwiek straty lub szkody wynikające z nieprzestrzegania przez Ciebie tego obowiązku bezpieczeństwa.",
    accountTerms2:
      "- Nie możesz używać Usług w celach niezgodnych z prawem, nieetycznych lub niemoralnych.",
    accountTerms3:
      "- Ponosisz odpowiedzialność za wszystkie treści publikowane i działania podejmowane na Twoim koncie. Dotyczy to również treści publikowanych przez inne osoby, które: (a) mają dostęp do Twoich danych logowania; lub (b) posiadają własne loginy do Twojego konta.",
    accountTerms4:
      "- Musisz być człowiekiem. Konta zarejestrowane przez „boty” lub inne zautomatyzowane metody są niedozwolone.",
    paymentContent1:
      "- W przypadku Usług płatnych, które oferują bezpłatny okres próbny, informujemy o jego długości podczas rejestracji. Po upływie okresu próbnego, aby móc nadal korzystać z Usługi, należy uiścić opłatę z góry. Jeśli nie dokonasz opłaty, Usługi przestaną obowiązywać.",
    paymentContent2:
      "- Jeśli dokonujesz aktualizacji z planu bezpłatnego na plan płatny, obciążymy Twoją kartę natychmiast, a cykl rozliczeniowy rozpocznie się w dniu aktualizacji.",
    paymentContent3:
      "- Wszystkie opłaty nie obejmują podatków, opłat ani ceł nałożonych przez organy podatkowe. W razie potrzeby pobierzemy te podatki w imieniu organu podatkowego i przekażemy je organom podatkowym. W przeciwnym razie jesteś odpowiedzialny za zapłatę wszystkich podatków, opłat lub ceł.",
    paymentContent4:
      "- Wszystkie zakupy nie podlegają zwrotowi. Możesz anulować dowolne usługi płatne w dowolnym momencie, logując się na swoje konto. W przypadku subskrypcji płatnych, anulowanie wejdzie w życie z końcem bieżącego okresu rozliczeniowego, o ile nie zaznaczono inaczej.",
    cancellationContent1:
      "- Jeśli anulujesz Usługę przed upływem opłaconego okresu, anulacja wejdzie w życie natychmiast i nie zostaniesz obciążony żadnymi opłatami. Nie naliczamy automatycznie proporcjonalnego czasu niewykorzystanego w ostatnim cyklu rozliczeniowym.",
    cancellationContent2:
      "- Mamy prawo zawiesić lub zamknąć Twoje konto i odmówić Ci dostępu do naszych Usług, zarówno obecnie, jak i w przyszłości, z dowolnego powodu i w dowolnym momencie. Zawieszenie oznacza utratę dostępu do konta i wszelkich treści na nim zawartych. Ponadto zamknięcie konta spowoduje usunięcie konta lub zablokowanie dostępu do niego, a także utratę i zrzeczenie się wszelkich treści na koncie. Zastrzegamy sobie również prawo do odmowy korzystania z Usług dowolnej osobie, z dowolnego powodu i w dowolnym momencie. Wprowadziliśmy tę klauzulę, ponieważ statystycznie rzecz biorąc, spośród setek tysięcy kont w naszych Usługach, co najmniej jedno prowadzi do niegodziwych działań.",
    cancellationContent3:
      "- Werbalne, fizyczne, pisemne lub inne formy znęcania się (w tym groźby znęcania się lub odwetu) nad pracownikiem lub członkiem zarządu Spółki mogą skutkować natychmiastowym zamknięciem konta.",
    submissionsContent:
      "Przyjmujesz do wiadomości i zgadzasz się, że wszelkie pytania, komentarze, sugestie, pomysły, opinie lub inne informacje dotyczące Witryny („Zgłoszenia”) przekazane nam przez Ciebie nie są poufne i staną się naszą wyłączną własnością. Będziemy posiadać wyłączne prawa, w tym wszelkie prawa własności intelektualnej, i będziemy uprawnieni do nieograniczonego wykorzystywania i rozpowszechniania tych Zgłoszeń w dowolnym zgodnym z prawem celu, komercyjnym lub innym, bez konieczności potwierdzania tego faktu lub wypłacania Ci odszkodowania. Niniejszym zrzekasz się wszelkich praw moralnych do takich Zgłoszeń i gwarantujesz, że wszystkie takie Zgłoszenia są Twoje i że masz prawo je przesłać. Zgadzasz się, że nie przysługuje Ci żadne roszczenie wobec nas z tytułu domniemanego lub faktycznego naruszenia lub sprzeniewierzenia jakichkolwiek praw własności do Twoich Zgłoszeń.",
    uptimeContent1:
      "- Korzystasz z Usług na własne ryzyko. Usługi te świadczymy „w stanie, w jakim się znajdują” i „w miarę dostępności”. Nie oferujemy umów o poziomie usług dla większości naszych Usług, ale poważnie traktujemy kwestię dostępności naszych aplikacji.",
    uptimeContent2:
      "Zastrzegamy sobie prawo do tymczasowego wyłączenia Twojego konta, jeśli Twoje korzystanie z Usług znacznie przekroczy typowe korzystanie z nich przez innych klientów. Oczywiście skontaktujemy się z Tobą przed podjęciem jakichkolwiek działań, z wyjątkiem rzadkich przypadków, gdy poziom korzystania może negatywnie wpłynąć na działanie Usługi dla innych klientów.",
    uptimeContent3:
      "- Podejmujemy wiele działań w celu ochrony i zabezpieczenia Twoich danych poprzez tworzenie kopii zapasowych, redundancję i szyfrowanie. Stosujemy szyfrowanie transmisji danych w publicznym Internecie.",
    uptimeContent4:
      "- Korzystamy z usług zewnętrznych dostawców i partnerów hostingowych w celu zapewnienia niezbędnego sprzętu, oprogramowania, sieci, pamięci masowej i powiązanych technologii wymaganych do prowadzenia Usług.",
    siteManagementContent:
      "Zastrzegamy sobie prawo, ale nie obowiązek, do: (1) monitorowania Witryny pod kątem naruszeń niniejszych Warunków korzystania z usługi; (2) podejmowania odpowiednich kroków prawnych przeciwko każdemu, kto według naszego wyłącznego uznania narusza prawo lub niniejsze Warunki korzystania z usługi, w tym, bez ograniczeń, zgłaszania takiego użytkownika organom ścigania; (3) według naszego wyłącznego uznania i bez ograniczeń, odmowy, ograniczenia dostępu do, ograniczenia dostępności lub wyłączenia (w zakresie technologicznie wykonalnym) któregokolwiek z Twoich Wkładów lub jakiejkolwiek jego części; (4) według naszego wyłącznego uznania i bez ograniczeń, powiadomienia lub odpowiedzialności, usunięcia z Witryny lub w inny sposób wyłączenia wszystkich plików i treści o nadmiernym rozmiarze lub w jakikolwiek sposób obciążających nasze systemy; oraz (5) w inny sposób zarządzania Witryną w sposób mający na celu ochronę naszych praw i własności oraz ułatwienie prawidłowego funkcjonowania Witryny.",
    copyrightContent1:
      "- Wszelkie treści publikowane w ramach Usług muszą być zgodne z prawem autorskim obowiązującym w Stanach Zjednoczonych.",
    copyrightContent2:
      "- Nie rościmy sobie żadnych praw własności intelektualnej do materiałów udostępnianych przez Ciebie w ramach Usług. Wszystkie przesłane materiały pozostają Twoją własnością.",
    copyrightContent3:
      "- Nie dokonujemy wstępnej selekcji treści, ale zastrzegamy sobie prawo (ale nie obowiązek), według własnego uznania, do odmowy publikacji lub usunięcia wszelkich treści dostępnych za pośrednictwem Serwisu.",
    copyrightContent4:
      "- Nazwy, wygląd i działanie Usług są chronione prawem autorskim © Spółki. Wszelkie prawa zastrzeżone. Zabrania się powielania, kopiowania ani ponownego wykorzystywania jakiejkolwiek części kodu HTML, CSS, JavaScript lub elementów graficznych bez wyraźnej pisemnej zgody Spółki. Należy wystąpić o pozwolenie na używanie logo Spółki lub logo Usług w celach promocyjnych.",
    emailUs: "napisz do nas",
    copyrightContent5:
      "prośby o użycie logo. Zastrzegamy sobie prawo do cofnięcia tego pozwolenia w przypadku naruszenia niniejszych Warunków korzystania z usługi.",
    copyrightContent6:
      "- Użytkownik zgadza się nie odtwarzać, nie duplikować, nie kopiować, nie sprzedawać, nie odsprzedawać ani nie wykorzystywać żadnej części Usług, sposobu korzystania z Usług ani dostępu do Usług bez wyraźnej pisemnej zgody Spółki.",
    copyrightContent7:
      "- Nie wolno modyfikować innej witryny internetowej w sposób fałszywie sugerujący, że jest ona powiązana z Usługami lub Spółką.",
    copyrightContent8:
      "- Szanujemy prawa własności intelektualnej innych osób. Jeśli uważasz, że jakikolwiek materiał dostępny na Stronie lub za jej pośrednictwem narusza jakiekolwiek prawa autorskie, które posiadasz lub kontrolujesz, prosimy o natychmiastowe powiadomienie.",
    contactUs: "Skontaktuj się z nami",
    copyrightContent9:
      "Kopia Twojego Powiadomienia zostanie wysłana do osoby, która opublikowała lub przechowywała materiały, których dotyczy Powiadomienie. Informujemy, że zgodnie z obowiązującym prawem możesz ponieść odpowiedzialność za szkody, jeśli w Powiadomieniu podasz istotne nieprawdziwe informacje. Dlatego, jeśli nie masz pewności, czy materiały znajdujące się na Stronie lub do których linki znajdują się na Stronie naruszają Twoje prawa autorskie, powinieneś najpierw rozważyć kontakt z prawnikiem.",
    prohibitedActivitiesIntro:
      "Nie możesz uzyskiwać dostępu do Witryny ani korzystać z niej w żadnym innym celu niż ten, dla którego ją udostępniamy. Witryny nie wolno wykorzystywać w związku z żadnymi przedsięwzięciami komercyjnymi, z wyjątkiem tych, które zostały przez nas wyraźnie zatwierdzone lub poparte.",
    prohibitedActivitiesUserAgreement:
      "Jako użytkownik Serwisu zgadzasz się, że nie będziesz:",
    prohibitedActivity1:
      "- Systematyczne pobieranie danych lub innej treści ze Strony w celu tworzenia lub kompilowania, bezpośrednio lub pośrednio, zbiorów, kompilacji, baz danych lub katalogów bez naszej pisemnej zgody.",
    prohibitedActivity2:
      "- Oszukiwać, wprowadzać w błąd nas i innych użytkowników, zwłaszcza w celu zdobycia poufnych informacji o koncie, takich jak hasła użytkowników.",
    prohibitedActivity3:
      "- Omijać, wyłączać lub w inny sposób ingerować w funkcje związane z bezpieczeństwem Witryny, w tym funkcje, które uniemożliwiają lub ograniczają korzystanie z Treści lub ich kopiowanie lub nakładają ograniczenia na korzystanie z Witryny i/lub Treści w niej zawartych.",
    prohibitedActivity4:
      "- naszym zdaniem dyskredytować, szkalować lub w inny sposób szkodzić nam i/lub Witrynie.",
    prohibitedActivity5:
      "- Wykorzystywać informacji uzyskanych ze Strony w celu nękania, znęcania się lub wyrządzania krzywdy innej osobie.",
    prohibitedActivity6:
      "- Niewłaściwie korzystaj z naszych usług wsparcia lub przesyłaj fałszywe raporty o nadużyciach lub niewłaściwym zachowaniu.",
    prohibitedActivity7:
      "- Korzystać ze Strony w sposób niezgodny z obowiązującymi przepisami prawa.",
    prohibitedActivity8:
      "- Angażować się w nieautoryzowane tworzenie ramek lub linków do Witryny.",
    prohibitedActivity9:
      "- Przesyłać lub przekazywać (lub podejmować próby przesyłania lub przekazywać) wirusów, koni trojańskich lub innych materiałów, w tym nadmiernego używania wielkich liter i spamowania (ciągłego zamieszczania powtarzalnego tekstu), które zakłócają nieprzerwane korzystanie z Witryny przez jakąkolwiek stronę lub powodują zmiany, upośledzenia, zakłócenia, modyfikacje lub zakłócają korzystanie z Witryny, jej funkcje, działanie lub konserwację.",
    prohibitedActivity10:
      "- Podejmować jakiekolwiek zautomatyzowane działania związane z korzystaniem z systemu, takie jak stosowanie skryptów do wysyłania komentarzy lub wiadomości, bądź korzystanie z narzędzi do eksploracji danych, robotów lub podobnych narzędzi do gromadzenia i ekstrakcji danych.",
    prohibitedActivity11:
      "- Usuń informacje o prawach autorskich i innych prawach własności z wszelkich Treści.",
    prohibitedActivity12:
      "- Próba podszywania się pod innego użytkownika lub osobę albo posługiwania się nazwą użytkownika innego użytkownika.",
    prohibitedActivity13:
      "- Przesyłać lub przekazywać (lub podejmować próby przesłania lub przekazania) jakichkolwiek materiałów, które działają jako pasywny lub aktywny mechanizm gromadzenia lub przekazywania informacji, w tym, bez ograniczeń, formatów wymiany czystych grafik („gifów”), pikseli 1×1, błędów sieciowych, plików cookie lub innych podobnych urządzeń (czasami określanych jako „oprogramowanie szpiegujące” lub „pasywne mechanizmy gromadzenia” lub „pcms”).",
    prohibitedActivity14:
      "- Zakłócać, przerywać lub powodować nadmierne obciążenie Witryny lub sieci i usług połączonych z Witryną.",
    prohibitedActivity15:
      "- Nękać, drażnić, zastraszać lub grozić któremukolwiek z naszych pracowników lub agentów zajmujących się udostępnianiem jakiejkolwiek części Witryny.",
    prohibitedActivity16:
      "- Podejmować próby obejścia jakichkolwiek środków Witryny mających na celu uniemożliwienie lub ograniczenie dostępu do Witryny lub jakiejkolwiek jej części.",
    prohibitedActivity17:
      "- Kopiowanie lub adaptowanie oprogramowania Witryny, w tym między innymi Flash, PHP, HTML, JavaScript i innych kodów.",
    prohibitedActivity18:
      "- Z wyjątkiem przypadków dozwolonych przez obowiązujące prawo, nie wolno rozszyfrowywać, dekompilować, dezasemblować ani dokonywać inżynierii wstecznej żadnego oprogramowania wchodzącego w skład Witryny lub w jakikolwiek sposób stanowiącego jej część.",
    prohibitedActivity19:
      "- Z wyjątkiem przypadków wynikających ze standardowego korzystania z wyszukiwarki lub przeglądarki internetowej, nie wolno używać, uruchamiać, rozwijać ani rozpowszechniać żadnych zautomatyzowanych systemów, w tym między innymi pająków, robotów, narzędzi do oszukiwania, scraperów ani czytników offline uzyskujących dostęp do Witryny, ani używać lub uruchamiać żadnych nieautoryzowanych skryptów lub innego oprogramowania.",
    prohibitedActivity20:
      "- Dokonuj zakupów na Stronie za pośrednictwem agenta kupującego lub pośrednika zakupowego.",
    prohibitedActivity21:
      "- Nie wolno wykorzystywać Serwisu w sposób nieautoryzowany, w tym zbierać nazw użytkowników i/lub adresów e-mail użytkowników drogą elektroniczną lub inną w celu wysyłania niechcianej poczty elektronicznej lub tworzyć kont użytkowników za pomocą środków automatycznych lub pod fałszywymi pozorami.",
    prohibitedActivity22:
      "- Korzystać ze Strony w celu konkurowania z nami lub w inny sposób wykorzystywać Stronę i/lub Treści w celach generujących dochód lub w ramach przedsięwzięcia komercyjnego.",
    prohibitedActivity23:
      "- Wykorzystywać Serwis do reklamowania lub oferowania sprzedaży towarów i usług.",
    prohibitedActivity24: "- Sprzedać lub w inny sposób przenieść swój profil.",
    featuresContent1:
      "Projektujemy nasze Usługi z dbałością, opierając się na własnym doświadczeniu oraz na doświadczeniach klientów, którzy poświęcają nam swój czas i dzielą się swoimi opiniami. Nie ma jednak usługi, która zadowoliłaby wszystkich. Nie gwarantujemy, że nasze Usługi spełnią Państwa konkretne wymagania lub oczekiwania.",
    featuresContent2:
      "Testujemy również wszystkie nasze funkcje przed ich udostępnieniem. Jak w przypadku każdego oprogramowania, nasze Usługi nieuchronnie zawierają błędy. Śledzimy zgłaszane nam błędy i pracujemy nad nimi, zwłaszcza nad tymi związanymi z bezpieczeństwem i prywatnością. Nie wszystkie zgłoszone błędy zostaną naprawione i nie gwarantujemy, że Usługi będą całkowicie wolne od błędów.",
    correctionsContent1:
      "Informacje na Stronie mogą zawierać błędy typograficzne, nieścisłości lub pominięcia, w tym opisy, ceny, dostępność i inne informacje. Zastrzegamy sobie prawo do poprawiania wszelkich błędów, nieścisłości lub pominięć oraz do zmiany lub aktualizacji informacji na Stronie w dowolnym momencie i bez uprzedniego powiadomienia.",
    correctionsContent2:
      "Nie możemy zagwarantować, że Strona będzie dostępna przez cały czas. Możemy napotkać problemy ze sprzętem, oprogramowaniem lub inne problemy, a także przeprowadzić konserwację Strony, co może skutkować przerwami, opóźnieniami lub błędami. Zastrzegamy sobie prawo do zmiany, rewizji, aktualizacji, zawieszenia, zaprzestania lub innej modyfikacji Strony w dowolnym momencie i z dowolnego powodu bez powiadomienia. Zgadzasz się, że nie ponosimy żadnej odpowiedzialności za jakiekolwiek straty, szkody lub niedogodności spowodowane brakiem dostępu do Strony lub korzystania z niej podczas przestoju lub zaprzestania jej działania. Żadne z postanowień niniejszych Warunków korzystania z usługi nie będzie interpretowane jako zobowiązujące nas do utrzymywania i wspierania Strony ani do dostarczania jakichkolwiek korekt, aktualizacji lub wydań w związku z tym.",
    userDataContent:
      "Będziemy przechowywać pewne dane przesyłane przez Ciebie do Serwisu w celu zarządzania jego działaniem, a także dane dotyczące korzystania z niego. Chociaż regularnie tworzymy kopie zapasowe danych, ponosisz wyłączną odpowiedzialność za wszelkie dane przesyłane przez Ciebie lub związane z jakąkolwiek aktywnością wykonywaną przez Ciebie za pośrednictwem Serwisu. Zgadzasz się, że nie ponosimy wobec Ciebie żadnej odpowiedzialności za utratę lub uszkodzenie takich danych i niniejszym zrzekasz się wszelkich praw dochodzenia roszczeń wobec nas z tytułu takiej utraty lub uszkodzenia takich danych.",
    privacyPolicyContent1:
      "Dbamy o prywatność i bezpieczeństwo danych. Zapoznaj się z naszą",
    privacyPolicy: "Polityka prywatności",
    privacyPolicyContent2:
      "Korzystając z Witryny, wyrażasz zgodę na przestrzeganie naszej Polityki Prywatności, która stanowi integralną część niniejszych Warunków Korzystania z Usługi. Informujemy, że Witryna jest hostowana w Stanach Zjednoczonych. Jeśli uzyskujesz dostęp do Witryny z dowolnego innego regionu świata, w którym obowiązują przepisy lub inne wymogi dotyczące gromadzenia, wykorzystywania lub ujawniania danych osobowych, które różnią się od przepisów obowiązujących w Stanach Zjednoczonych, dalsze korzystanie z Witryny oznacza przekazanie Twoich danych do Stanów Zjednoczonych i wyrażasz zgodę na ich przesyłanie i przetwarzanie w Stanach Zjednoczonych.",
    liabilityIntro:
      "Wspominamy o odpowiedzialności w całym niniejszym Regulaminie, ale żeby zawrzeć to wszystko w jednej sekcji:",
    liabilityContent:
      "Wyraźnie rozumiesz i zgadzasz się, że Spółka nie ponosi odpowiedzialności, z mocy prawa lub w oparciu o zasadę słuszności, wobec Ciebie lub jakiejkolwiek osoby trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, utracone zyski, szkody szczególne, wynikowe, karne lub przykładowe, w tym, ale nie wyłącznie, szkody za utratę zysków, dobrej woli, użytkowania, danych lub inne straty niematerialne (nawet jeśli Spółka została poinformowana o możliwości wystąpienia takich szkód), wynikające z: (1) korzystania z Usług lub niemożności korzystania z nich; (2) błędów, pomyłek lub nieścisłości w treści i materiałach; (3) obrażeń ciała lub szkód majątkowych, jakiegokolwiek rodzaju, wynikających z dostępu do witryny i korzystania z niej; (4) kosztów zakupu towarów i usług zastępczych wynikających z jakichkolwiek towarów, danych, informacji lub usług zakupionych lub uzyskanych lub wiadomości otrzymanych lub transakcji zawartych za pośrednictwem Usług; (5) jakiegokolwiek nieautoryzowanego dostępu do lub korzystania z naszych bezpiecznych serwerów i/lub wszelkich danych osobowych i/lub informacji finansowych w nich przechowywanych; (6) jakiekolwiek przerwanie lub zaprzestanie transmisji do lub z witryny; (7) jakiekolwiek błędy, wirusy, konie trojańskie lub podobne, które mogą zostać przesłane do lub za pośrednictwem witryny przez osoby trzecie i/lub; (8) jakiekolwiek błędy lub pominięcia w jakiejkolwiek treści i materiałach lub za jakiekolwiek straty lub szkody poniesione w wyniku korzystania z jakiejkolwiek treści opublikowanej, przesłanej lub w inny sposób udostępnionej za pośrednictwem witryny; (9) oświadczenia lub zachowanie jakiejkolwiek osoby trzeciej w ramach usługi; (10) lub jakakolwiek inna kwestia związana z niniejszymi Warunkami korzystania z usługi lub Usługami, niezależnie od tego, czy stanowi to naruszenie umowy, czyn niedozwolony (w tym zaniedbanie czynne lub bierne), czy jakąkolwiek inną teorię odpowiedzialności.",
    miscellaneousContent:
      "Niniejsze Warunki Świadczenia Usług oraz wszelkie polityki lub zasady operacyjne opublikowane przez nas w Serwisie lub w odniesieniu do Serwisu stanowią całość umowy i porozumienia między Tobą a nami. Niewykonanie lub niewyegzekwowanie przez nas któregokolwiek z praw lub postanowień niniejszych Warunków Świadczenia Usług nie stanowi zrzeczenia się takiego prawa lub postanowienia. Niniejsze Warunki Świadczenia Usług obowiązują w najszerszym zakresie dozwolonym przez prawo. Możemy w dowolnym momencie przenieść część lub całość naszych praw i obowiązków na inne osoby. Nie ponosimy odpowiedzialności za jakiekolwiek straty, szkody, opóźnienia lub zaniechania spowodowane przyczynami pozostającymi poza naszą uzasadnioną kontrolą. Jeżeli którekolwiek z postanowień niniejszych Warunków Świadczenia Usług zostanie uznane za niezgodne z prawem, nieważne lub niewykonalne, to postanowienie lub część postanowienia uznaje się za oddzielne od niniejszych Warunków Świadczenia Usług i nie wpływa to na ważność i wykonalność pozostałych postanowień. W wyniku niniejszych Warunków Świadczenia Usług lub korzystania z Serwisu nie powstaje między Tobą a nami żaden stosunek joint venture, partnerstwa, zatrudnienia ani agencyjny. Zgadzasz się, że niniejsze Warunki Świadczenia Usług nie będą interpretowane na naszą niekorzyść z tytułu ich sporządzenia. Niniejszym zrzekasz się wszelkich zarzutów, jakie możesz mieć w związku z elektroniczną formą niniejszych Warunków świadczenia usług oraz brakiem podpisania przez strony niniejszego dokumentu w celu wykonania niniejszych Warunków świadczenia usług.",
    contactUsContent1:
      "Jeśli masz pytanie dotyczące któregokolwiek z Warunków korzystania z usługi, skontaktuj się z nami.",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
