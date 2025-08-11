let message = {
  // 首页
  HomePage: {
    home: "Inicio",
    version: "Versión básica（Gratis）:",
    times:
      "Transcripción gratuita {times} veces al día, te quedan {left} transcripciones.",
    tips: "Actualiza a Pro para transcripciones ilimitadas.",
    update: "Actualizar ahora",
    folders: "Carpetas",
    rename: "Renombrar",
    delete: "Eliminar",
    createTitle: "Crear carpeta",
    deleteConfirm: `¿Estás seguro de que deseas eliminar la carpeta y todos los archivos en ella?`,
    cancel: "Cancelar",
    confirm: "Crear",
    dialogLabel: "Nombre de la carpeta",
    recently: "Archivos recientes",
    tour: {
      step0: {
        title: "Bienvenido a {name}",
        tip: "Aquí puedes:",
        content:
          "Transcribir conversaciones puntuales, reuniones, conferencias y más",
        next: "Comenzar"
      },
      step1: {
        title: "Transcribir archivos",
        content:
          "Soporta tres métodos de transcripción: archivos locales, enlaces y grabaciones."
      },
      step2: {
        title: "Crear una carpeta",
        content:
          'Haz clic en el "+" para crear una carpeta y organizar tus archivos.'
      },
      step3: {
        title: "Ver detalles de la transcripción y editar",
        content:
          "Haga clic en el elemento para ver los detalles de la transcripción y editarlo y traducirlo también."
      },
      next: "Siguiente",
      finish: "Entendido"
    },
    export: {
      export: "Exportar",
      title: "Estamos generando tu exportación",
      title2: "Tu archivo está listo",
      singleLoadingContent: "1 archivo se está comprimiendo.",
      singleSuccessContent: "1 archivo ha sido comprimido.",
      loadingContent: "{num} archivos se están comprimiendo.",
      successContent: "{num} archivos han sido comprimidos.",
      cancel: "Cancelar la exportación",
      error: "Error de exportación",
      dialog: {
        title: "Advertencia",
        content: "¿Cancelar la exportación?",
        cancel: "Cancelar exportación",
        continue: "Continuar exportando"
      }
    },
    welcome: {
      title: "¡Bienvenido a Scribify!",
      description: "Aquí puedes:",
      transcribe:
        "Transcribe sin esfuerzo con Scribify: convierte conversaciones de voz en texto claro, buscable y compartible en un instante.",
      precision:
        "Obtén transcripciones precisas con identificación de hablantes y marcas de tiempo al instante.",
      translate:
        "Rompe las barreras del idioma: traduce transcripciones a más de 200 idiomas con facilidad.",
      edit: "Edita, refina y exporta tus transcripciones en formatos que se adapten a tus necesidades.",
      collaborate: "Colabora compartiendo tu texto transcrito con otros.",
      button: "Comenzar",
      tip: "¿Listo para convertir audio en texto transcrito? ¡Comienza a explorar ahora!"
    },
    subscriptionModal: {
      left: {
        title: "Obtén el Plan Pro para desbloquear más",
        c1: "Transcripciones ilimitadas",
        c2: "Cargas de 10 horas",
        c3: "Máxima prioridad",
        c4: "99% de precisión en transcripción",
        c5: "Más de 100 idiomas soportados",
        c6: "Identificación de hablantes",
        c7: "Traducción de transcripciones",
        t1: "Transcripciones ilimitadas para una persona.",
        t2: "Cada archivo puede durar hasta 10 horas / 5 GB. Sube 50 archivos a la vez.",
        t3: "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad."
      },
      right: {
        title: "Obtén el Plan Pro",
        yearly: "Anual",
        monthly: "Mensual",
        save: "Ahorro",
        preMonth: "al mes",
        preYear: "al año",
        firstMonth: "primer mes",
        afterwards: "después"
      },
      subscribe: "Suscribirse"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Nombre",
      duration: "Duración",
      status: "Estado",
      date: "Fecha de creación",
      activity: "Actividad",
      empty1: `Está vacío.`,
      empty2: `Haz clic en el botón de arriba para transcribir un archivo.`,
      just: "ahora",
      export: "Exportar",
      delete: "Eliminar",
      share: "Compartir",
      rename: "Renombrar",
      move: "Mover",
      failed: "Fallido",
      selected: "Seleccionado",
      success: "Éxito"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Elige una carpeta",
        placeholder: "Elige una carpeta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renombrar",
        label: "Nombre del archivo",
        confirm: "Renombrar",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "archivo",
        files: "archivos",
        label: "¿Confirmar eliminación? Esta acción no se puede deshacer.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Compartir",
        label:
          "Cualquiera con el siguiente enlace seguro puede ver esta transcripción y el archivo multimedia asociado.",
        confirm: "Copiar enlace",
        success: "¡Copiado con éxito!"
      },
      export: {
        title: "Exportar",
        select: "Selecciona uno o más formatos",
        settings: "Configuraciones",
        speaker: "Incluir hablante",
        timecodes: "Incluir códigos de tiempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor selecciona uno o más formatos"
      }
    },
    search: {
      placeholder: "Buscar"
    },
    recently: "Reciente",
    record: "Grabar",
    transcribe: "Transcribir",
    unclassified: "Carpetas no clasificadas",
    buttons: {
      transcribe: "Transcribir archivos",
      url: "Transcribir enlaces",
      record: "Grabar y transcribir",
      recording: "Grabando..."
    },
    delSuccess: "Eliminado con éxito",
    create: "Crear"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Grabar",
      pause: "Pausar",
      resume: "Reanudar",
      stop: "Detener",
      delete: "Eliminar",
      transcribe: "Transcribir",
      permissionDenied:
        "Permiso de micrófono denegado o el dispositivo no existe",
      dialog: {
        delete: {
          title: "Advertencia",
          label: "¿Estás seguro de que deseas eliminar esta grabación?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Grabación completada",
          label:
            "La grabación ha alcanzado las 10 horas y se ha detenido automáticamente. Por favor, transcribe.",
          confirm: "Entendido"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcribir un medio en línea",
        title: "Pegar enlaces",
        label:
          "Pega el enlace del medio de las siguientes plataformas, pero no limitado a: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Transcribir",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "La dirección del enlace que ingresaste es incorrecta. Por favor, verifica e inténtalo de nuevo.",
        linkName: "Enlace"
      },
      file: {
        orTitle: "Transcribir un medio en línea",
        dialogTitle: "Transcribir archivos",
        tip: "Haz clic para subir o arrastra y suelta",
        or: "o"
      },
      del: {
        title: "Advertencia",
        content:
          "Todo el progreso se perderá. ¿Confirmar la cancelación de la transcripción?",
        cancel: "Confirmar cancelación",
        confirm: "Continuar transcribiendo"
      },
      files: "Archivos",
      resultDialogTitle: "Transcribir archivos",
      cancel: "Cancelar",
      confirm: "Transcribir",
      return: "Volver",
      addMore: "Agregar más",
      language: "Idioma del audio",
      failed: "Fallido",
      tooLarge: "El archivo es demasiado grande.",
      fileFormat: "El formato de archivo no está permitido",
      localFiles: "Archivos locales",
      pasteLink: "Pegar enlaces",
      uploadErr: "Error de carga",
      hashErr: "Error de hash",
      table: {
        status: "Estado",
        file: "Archivo",
        size: "Tamaño",
        noData: "Sin datos"
      },
      maxFileNum: "El número de archivos no puede exceder de {num}.",
      speaker: "Identificación del hablante",
      speakerLabel:
        "Etiqueta cada sección de la transcripción indicando quién habla."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Editar",
    translate: "Traducir",
    showSpeaker: "Mostrar hablante",
    showTimestamp: "Mostrar marca de tiempo",
    share: "Compartir",
    shared: "compartido",
    export: "Exportar",
    speaker: "Hablante_{ id }",
    unassignSpeaker: "Desasignar hablante",
    play: "Reproducir",
    save: "Guardar",
    undo: "Deshacer",
    redo: "Rehacer",
    confirm: "Confirmar",
    cancel: "Cancelar",
    addNew: "Agregar nuevo",
    createANewSpeaker: "Crear un nuevo hablante",
    speakerName: "Nombre del hablante",
    addSpeaker: "Agregar hablante",
    applyToAllMatchingSpeakers: "Aplicar a todos los hablantes coincidentes",
    cancelTranslation: "Cancelar traducción",
    showVideo: "Mostrar el video",
    hideVideo: "Ocultar el video",
    langChooseV1: {
      recently: "Reciente",
      popular: "Popular",
      other: "Otro",
      searchLanguage: "Buscar idioma",
      noMatch: "No se encontró ningún idioma coincidente",
      English: "Inglés",
      "English(US)": "Inglés (EE.UU.)",
      "English(UK)": "Inglés (Reino Unido)",
      Spanish: "Español",
      Portuguese: "Portugués",
      French: "Francés",
      Italian: "Italiano",
      German: "Alemán",
      Dutch: "Neerlandés",
      Polish: "Polaco",
      Danish: "Danés",
      Japanese: "Japonés",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Checo",
      Chinese: "Chino",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaiyano",
      Estonian: "Estonio",
      Belarusian: "Bielorruso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandés",
      Bosnian: "Bosnio",
      Persian: "Persa",
      Russian: "Ruso",
      "Chinese(Traditional)": "Chino (Tradicional)",
      Finnish: "Finlandés",
      Kazakh: "Kazajo",
      Galician: "Gallego",
      Catalan: "Catalán",
      "Chinese(Simplified)": "Chino (Simplificado)",
      Kannada: "Canarés",
      Croatian: "Croata",
      Latvian: "Letón",
      Lithuanian: "Lituano",
      Romanian: "Rumano",
      Marathi: "Maratí",
      Malay: "Malayo",
      Macedonian: "Macedonio",
      Maori: "Maorí",
      Afrikaans: "Afrikáans",
      Nepali: "Nepalí",
      Norwegian: "Noruego",
      Swedish: "Sueco",
      Serbian: "Serbio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suajili",
      Tagalog: "Tagalo",
      Tamil: "Tamil",
      Thai: "Tailandés",
      Turkish: "Turco",
      Welsh: "Galés",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Griego",
      Armenian: "Armenio",
      Hindi: "Hindi",
      Indonesian: "Indonesio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanés",
      Amharic: "Amárico",
      Assamese: "Asamés",
      Occitan: "Occitano",
      Bashkir: "Baskir",
      Basque: "Vasco",
      Breton: "Bretón",
      Tibetan: "Tibetano",
      Faroese: "Feroés",
      Sanskrit: "Sánscrito",
      Khmer: "Jemer",
      Georgian: "Georgiano",
      Gujarati: "Guyaratí",
      "Haitian Creole": "Criollo haitiano",
      Hausa: "Hausa",
      Latin: "Latín",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgués",
      Malagasy: "Malgache",
      Maltese: "Maltés",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengalí",
      Burmese: "Birmano",
      Punjabi: "Panyabí",
      Pashto: "Pastún",
      Sinhala: "Cingalés",
      Shona: "Shona",
      Somali: "Somalí",
      Tajik: "Tayiko",
      Tatar: "Tártaro",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Hawaiano",
      "Norwegian Nynorsk": "Nynorsk noruego",
      Sindhi: "Sindhi",
      Sundanese: "Sundanés",
      Yiddish: "Yidis",
      Yoruba: "Yoruba",
      Javanese: "Javanés",
      Cantonese: "Cantonés",
      Abkhaz: "Abjasio",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avar",
      Ewe: "Ewé",
      Aymara: "Aimara",
      Irish: "Irlandés",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osetio",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinés",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baoulé",
      Bambara: "Bambara",
      pag: "Pangasinán",
      pam: "Pampango",
      nso: "Sotho del Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Baluchi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Mari de la pradera",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chuukés",
      Chuvash: "Chuvasio",
      Tswana: "Setsuana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetun",
      Divehi: "Divehi",
      dyu: "Dioula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Ndebele del sur",
      dov: "Dombe",
      "bm-Nkoo": "N'Ko (escritura de África Occidental)",
      "French(Canada)": "Francés (Canadá)",
      Fijian: "Fiyiano",
      fon: "Fon",
      "Western Frisian": "Frisón occidental",
      fur: "Friulano",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandés",
      gom: "Konkani",
      Guarani: "Guaraní",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguís",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Q'eqchi'",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corso",
      "crh-Latn": "Tártaro de Crimea (latino)",
      crh: "Tártaro de Crimea (cirílico)",
      Quechua: "Quechua",
      Kurdish: "Kurdo (Kurmanji)",
      ckb: "Kurdo (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalio",
      lij: "Ligur",
      Limburgish: "Limburgués",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardo",
      rom: "Romaní",
      mad: "Madura",
      Manx: "Manés",
      mwr: "Marwari",
      "ms-Arab": "Malayo (Jawi)",
      Marshallese: "Marshalés",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Criollo mauriciano",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Náhuatl (Huasteca oriental)",
      "Southern Sotho": "Sotho del Sur",
      new: "Nevari (Nepal Bhasa)",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Panyabí (Shahmukhi)",
      "pt-PT": "Portugués (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Kasai",
      Akan: "Akan",
      zap: "Zapoteco",
      "Northern Sami": "Sami del Norte",
      Samoan: "Samoano",
      kri: "Krio de Sierra Leona",
      crs: "Criollo de Seychelles",
      Sango: "Sango",
      "sat-Latn": "Santali (latino)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Suazi",
      "Scottish Gaelic": "Gaélico escocés",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (latino)",
      Tahitian: "Tahitiano",
      Tonga: "Tongano",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvano",
      war: "Waray",
      mak: "Makassar",
      vec: "Véneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wólof",
      udm: "Udmurto",
      szl: "Silesio",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Patois jamaiquino",
      sah: "Yakuto",
      ace: "Acehnés",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilocano",
      "iu-Latn": "Inuktitut (latino)",
      Inuktitut: "Inuktitut (silabario)",
      yua: "Maya yucateco",
      Dzongkha: "Dzongkha",
      Zulu: "Zulú"
    },
    notFund: "No encontrado",
    notFundDesc: "No pudimos encontrar lo que buscabas.",
    shareTips:
      "Cualquiera con el siguiente enlace seguro puede ver esta transcripción y el archivo multimedia asociado.",
    copyLink: "Copiar enlace",
    copySuccessful: "¡Copiado con éxito!",
    copyFail: "Error al copiar",
    closeTrans: "Cancelar traducción",
    upgradeBtn: "Actualizar ahora",
    upgradeTip30: "Este archivo supera los 30 minutos.",
    upgradeTipMore:
      "Actualiza a Scribify Pro para transcribir archivos de hasta 10 horas"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "o", // 或
    signup: "Registrarse", // 注册
    sign_up: "Registrarse", // 注册
    loginByGoogle: "Continuar con Google", // 使用Google登录
    emailAddress: "Por favor, introduce tu correo electrónico", // 请输入您的邮箱
    createAccount: "Crear una nueva cuenta", // 创建账户
    accountExists: "¿Ya tienes una cuenta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Al usar {proName}, aceptas los {terms} y la {policy}.",
      terms: "Términos de servicio",
      policy: "Política de privacidad"
    },
    setPassword: "Establecer una contraseña", // 设置密码
    code: "Código de verificación", // 验证码
    resend: "Reenviar", // 重新发送
    codeToEmail:
      "Acabamos de enviar un código de registro temporal a tu correo electrónico. Por favor, revisa tu bandeja de entrada y pega el código de registro arriba.", // 我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。
    enterPassword: "Por favor, introduce tu contraseña.", // 请输入密码
    passwordLeval: "Nivel de contraseña", // 密码强度
    Weak: "Débil", // 弱 中 强
    Medium: "Medio", // 弱 中 强
    Strong: "Fuerte", // 弱 中 强
    confirmPassword: "Confirma tu contraseña", // 确认密码
    invalidEmail: "Dirección de correo electrónico no válida", // 无效的邮箱地址
    logInDirectly:
      "Esta cuenta ya existe. Por favor, inicia sesión directamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Código de verificación incorrecto. Inténtalo de nuevo.", // 验证码错误，请重试
    atLeastSix: "La contraseña debe tener al menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch: "Las contraseñas no coinciden. Inténtalo de nuevo.", // 密码不匹配，请重试
    login: "Iniciar sesión", // 登录
    log_in: "Iniciar sesión", // 登录
    log_In: "Iniciar sesión", // 登录
    password: "Contraseña", // 密码
    forgotPassword: "¿Olvidaste tu contraseña?", // 忘记密码？
    noAccount: "¿No tienes una cuenta？", // 没有账户？注册
    accountNotExists: "Esta cuenta no existe.", // 账户不存在
    passwordError: "Error de contraseña", // 密码错误
    sendCode: "Enviar código de verificación", // 发送验证码
    resetPassword: "Restablecer contraseña", // 重置密码
    resetYourPassword: "Restablece tu contraseña", // 重置你的密码
    newOldCantSame: "La nueva contraseña debe ser diferente de la anterior.", // 新密码与旧密码不能相同
    passwordResetOk: "¡Contraseña restablecida con éxito!" // 密码重置成功！
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plan de suscripción",
    freeversion: "Gratis",
    transcribeTimesDay: "3 transcripciones diarias",
    freeThreeTimesDay: "Transcribe 3 archivos gratis cada día.",
    uploadMinutes: "Subidas de 30 minutos",
    oneFileUploaded:
      "Cada archivo puede durar hasta 30 minutos, subiendo un archivo a la vez",
    lowerPriority: "Prioridad más baja",
    needsToWaitLonger:
      "3 transcripciones diarias Espera más tiempo para que tus archivos sean transcritos.",
    currentPlan: "Plan actual",
    professionalEdition: "edición profesional",
    unlimitedTranscription: "Transcripción ilimitada",
    unlimitedNumberOfTimes: "Transcripciones ilimitadas para una persona.",
    uploadWithinHours: "Subida hasta 10 horas",
    filesUploadedAtOnce:
      "Cada archivo puede durar hasta 10 horas/5 GB. Sube 50 archivos a la vez.",
    highestPriority: "máxima prioridad",
    weWillGiveTheHighest:
      "Siempre transcribiremos tus archivos lo antes posible con la máxima prioridad.",
    theFirstMonth: "El primer mes",
    subscribeTo: "suscribirse a",
    basicVersionFree: "Versión básica (gratis)",
    return: "Volver",
    annualize: "anualizar",
    monthly: "mensual",
    everyYear: "cada año",
    saved: "ahorrado",
    byTheMonth: "por mes",
    firstMonth: "primer mes",
    afterwardsEveryMonth: "Después, cada mes",
    manageSubscription: "Administrar suscripción",
    professionalYearbook: "Anual profesional",
    professionalMonthly: "Mensual profesional",
    subscriptionWillCancelledOn: "Tu suscripción se cancelará el",
    displayLanguage: "Idioma de visualización",
    update: "Actualizar ahora",
    basicversion: "Versión básica (Gratis)",
    daily: "{start} de {end} transcripciones diarias usadas",
    upgradetoPro: "Actualizar a Pro",
    accountSetting: "Configuración de cuenta",
    returnAccountSetting: "Volver a configuración de cuenta",
    logOut: "Cerrar sesión",
    account: "Cuenta",
    email: "Correo electrónico",
    id: "ID",
    password: "Contraseña",
    resetPassword: "Restablecer contraseña",
    logIn: "Iniciar sesión",
    tryForFree: "Probar gratis",
    notFund: "No encontrado",
    couldntFind: "No pudimos encontrar lo que buscabas.",
    proAnnual: "Pro Anual",
    yourSubscription: "Tu suscripción será cancelada el",
    proMonthly: "Pro Mensual",
    perMonth: "por mes",
    afterwards: "después",
    accuracy: "precisión de transcripción",
    supported: "idiomas admitidos",
    identification: "Identificación de hablante",
    transcriptSranslation: "Traducción de transcripción",
    perYear: "por año",
    getProPlan: "Obtener plan Pro",
    changeToAnnual: "Cambiar a anual",
    automaticRenewalon: "Renovación automática el"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chino(Simplificado)",
      "Chinese(Traditional)": "Chino(Tradicional)",
      Japanese: "Japonés",
      Danish: "Danés",
      German: "Alemán",
      English: "Inglés",
      Spanish: "Español",
      French: "Francés",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Neerlandés",
      Norwegian: "Noruego",
      Polish: "Polaco",
      Portuguese: "Portugués",
      Finnish: "Finlandés",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Griego",
      Russian: "Ruso",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebreo",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Plantilla SaaS de Nuxt3 de código abierto, preintegrada con pasarelas de pago globales (Stripe/Cream), Google OAuth, enrutamiento i18n y herramientas de optimización SEO. Diseñada para desarrolladores que lanzan aplicaciones web multilingües, ofrece soporte SSR/SSG y seguridad de nivel de producción lista para usar.",
    startLink: "Comienza la prueba gratuita~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "¡Únete a la lista de espera y recibe primero las últimas noticias y descuentos de NuxtPro!",
      placeholder: "Introduce tu correo electrónico",
      button: "Unirse a la lista de espera",
      joinCountMessage:
        "🔥 ¡El usuario temprano #{count} acaba de unirse a la lista de espera!"
    },
    seo: {
      title: "Plantilla SaaS de Nuxt de código abierto | NuxtPro",
      description:
        "El boilerplate de NuxtJS con todo lo que necesitas para poner tu producto frente a los clientes. De la idea a la producción en 5 minutos."
    },
    api: {
      title: "esto es una demo",
      corpInfo: "información de la empresa"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "error de descarga de video"
      },
      mse: {
        code: 2,
        msg: "error al añadir flujo"
      },
      parse: {
        code: 3,
        msg: "error de análisis"
      },
      format: {
        code: 4,
        msg: "formato incorrecto"
      },
      decoder: {
        code: 5,
        msg: "error de decodificación"
      },
      runtime: {
        code: 6,
        msg: "errores gramaticales"
      },
      timeout: {
        code: 7,
        msg: "tiempo de espera de reproducción"
      },
      other: {
        code: 8,
        msg: "otros errores"
      }
    },
    HAVE_NOTHING: "No hay información sobre si el audio/video está listo",
    HAVE_METADATA: "Los metadatos de audio/video están listos ",
    HAVE_CURRENT_DATA:
      "Hay datos sobre la ubicación de reproducción actual, pero no hay suficientes datos para reproducir el siguiente fotograma/milisegundo",
    HAVE_FUTURE_DATA:
      "Actualmente y al menos un fotograma de datos está disponible",
    HAVE_ENOUGH_DATA:
      "Los datos disponibles son suficientes para comenzar a reproducir",
    NETWORK_EMPTY: "El audio/video no ha sido inicializado",
    NETWORK_IDLE:
      "El audio/video está activo y se han seleccionado recursos, pero no se utiliza la red",
    NETWORK_LOADING: "El navegador está descargando los datos",
    NETWORK_NO_SOURCE: "No se encontró ninguna fuente de audio/video",
    MEDIA_ERR_ABORTED: "El usuario abortó el proceso de obtención",
    MEDIA_ERR_NETWORK: "Ocurrió un error al descargar",
    MEDIA_ERR_DECODE: "Ocurrió un error al decodificar",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video no es compatible",
    REPLAY: "Repetir",
    ERROR: "La red está desconectada",
    PLAY_TIPS: "Reproducir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproducir siguiente",
    DOWNLOAD_TIPS: "Descargar",
    ROTATE_TIPS: "Rotar",
    RELOAD_TIPS: "Recargar",
    FULLSCREEN_TIPS: "Pantalla completa",
    EXITFULLSCREEN_TIPS: "Salir de pantalla completa",
    CSSFULLSCREEN_TIPS: "Csspantallacompleta",
    EXITCSSFULLSCREEN_TIPS: "Salir de csspantallacompleta",
    TEXTTRACK: "Subtítulo",
    PIP: "PIP",
    SCREENSHOT: "Captura de pantalla",
    LIVE: "EN VIVO",
    OFF: "Apagar",
    OPEN: "Abrir",
    MINI_DRAG: "Haz clic y mantén presionado para arrastrar",
    MINISCREEN: "Minipantalla",
    REFRESH_TIPS: "Por favor, inténtalo",
    REFRESH: "Actualizar",
    FORWARD: "adelantar",
    LIVE_TIP: "En vivo",
    TM_SUBTITLE_SHOW_TIPS: "Activar subtítulos",
    TM_SUBTITLE_HIDE_TIPS: "Desactivar subtítulos",
    TM_MINIMIZE_TIPS: "Ocultar el video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de privacidad",
    lastUpdated: "Última actualización: 25 de agosto de 2025",
    policyDescription:
      "Esta Política describe cómo Scribify (en adelante, &quot;Scribify&quot;, &quot;nuestro&quot;, &quot;nosotros&quot;) recopila, usa y divulga su información personal cuando utiliza nuestros servicios, sitios web",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      ", y software (colectivamente, los &quot;Servicios&quot;).",
    policyAgreement:
      "Lea atentamente esta Política de Privacidad y asegúrese de comprenderla. Al utilizar cualquiera de nuestros Servicios, usted acepta esta Política de Privacidad. Si no está de acuerdo con el uso que hagamos de sus datos personales conforme a esta Política, debe dejar de usar nuestros Servicios inmediatamente.",
    policyOverview:
      "En esta política, explicamos qué datos recopilamos y por qué; cómo gestionamos sus datos; y sus derechos con respecto a ellos. No vendemos sus datos.",
    scopeTitle: "1. Alcance de esta Política de Privacidad",
    whatWeCollectTitle: "2. Qué recopilamos y por qué",
    accessShareTitle: "3. Cuándo accedemos o compartimos su información",
    secureDataTitle: "4. Cómo protegemos sus datos",
    deleteContentTitle: "5. ¿Qué sucede cuando eliminas tu contenido?",
    locationTitle: "6. Ubicación del sitio y datos",
    childrenPrivacyTitle: "7. Privacidad de los niños",
    updatesTitle: "8. Actualizaciones de esta Política de Privacidad",
    contactUsTitle: "9. Contáctenos",
    identityAccessTitle: "2.1 Identidad y acceso",
    billingInfoTitle: "2.2 Información de facturación",
    productInteractionsTitle: "2.3 Interacciones del producto",
    websiteInteractionsTitle: "2.4 Interacciones del sitio web",
    cookiesTitle: "2.5 Galletas",
    voluntaryCorrespondenceTitle: "2.6 Correspondencia voluntaria",
    scopeContent:
      "Esta Política de Privacidad se aplica únicamente a la recopilación y el procesamiento de información sobre los usuarios de los Servicios. No se aplica a ningún servicio, sitio web ni software operado por terceros que estén vinculados con nosotros (ya sea que proporcionemos dichos enlaces o que otros usuarios los compartan), ni al contenido, los datos, las aplicaciones ni los materiales de terceros. Le recomendamos que consulte las políticas de privacidad de cualquier sitio web o software de terceros antes de proporcionarles información.",
    collectPrinciple:
      "Nuestro principio rector es recolectar solo lo necesario. Esto significa en la práctica:",
    identityAccessContent:
      "Al suscribirse a uno de nuestros productos, le solicitamos información de identificación, como su nombre y correo electrónico. Esto nos permite ofrecerle funcionalidades esenciales del producto y enviarle actualizaciones y otra información esencial.",
    billingInfoContent:
      "Si se suscribe a un producto de pago, se le solicitará su información de pago y dirección de facturación. Esta información se envía directamente a nuestro procesador de pagos y no llega a nuestros servidores.",
    productInteractionsContent:
      "Almacenamos en nuestros servidores el contenido que usted sube, recibe o mantiene en sus cuentas de producto. A menos que lo elimine, podremos conservarlo mientras su cuenta esté activa.",
    websiteInteractionsContent:
      "Recopilamos información sobre su actividad de navegación con fines analíticos y estadísticos, como la evaluación de la tasa de conversión y la experimentación con nuevos diseños de productos. Esto incluye, por ejemplo, la versión de su navegador y sistema operativo, su dirección IP, las páginas web que visitó y su tiempo de carga, y el sitio web que lo refirió a nosotros. Si tiene una cuenta y ha iniciado sesión, estos datos de analítica web se vinculan a su dirección IP y cuenta de usuario hasta que su cuenta deje de estar activa.",
    cookiesContent1:
      "También utilizamos cookies propias persistentes y algunas cookies de terceros para almacenar determinadas preferencias, facilitarle el uso de nuestras aplicaciones, realizar pruebas A/B y respaldar algunos análisis.",
    cookiesContent2:
      "Una cookie es un fragmento de texto que almacena su navegador. Puede ayudarle a recordar la información de inicio de sesión y las preferencias del sitio. También puede recopilar información como el tipo de navegador, el sistema operativo, las páginas web visitadas, la duración de la visita, el contenido visualizado y otros datos de navegación. Puede ajustar la configuración de retención de cookies y aceptar o bloquear cookies individuales en la configuración de su navegador, aunque nuestras aplicaciones no funcionarán correctamente y otros aspectos de nuestro servicio podrían no funcionar correctamente si desactiva las cookies.",
    voluntaryCorrespondenceContent:
      "Cuando nos envía un correo electrónico con una pregunta o para solicitar ayuda, conservamos esa correspondencia, incluida su dirección de correo electrónico, para que tengamos un historial de correspondencia pasada para consultar si se comunica con nosotros en el futuro.",
    accessShareContent1:
      "Para proporcionarle los productos o servicios que ha solicitado. Utilizamos subprocesadores externos para el funcionamiento de nuestras aplicaciones y para prestarle los Servicios. Esto incluye proveedores de servicios en la nube y de análisis.",
    accessShareContent2:
      "Para investigar, prevenir o tomar medidas en caso de abuso. Acceder a la cuenta de un cliente para investigar un posible abuso es una medida de último recurso. Queremos proteger la privacidad y la seguridad tanto de nuestros clientes como de quienes nos informan sobre problemas, y hacemos todo lo posible por equilibrar estas responsabilidades durante todo el proceso. Si descubrimos que está utilizando nuestros productos para un fin restringido, tomaremos las medidas necesarias, incluyendo la notificación a las autoridades competentes cuando corresponda.",
    accessShareContent3: "Cuando lo requiera la legislación aplicable.",
    userDataRequests:
      "Solicitudes de datos de usuarios. Nuestra política es no responder a solicitudes gubernamentales de datos de usuarios, a menos que estemos obligados por un proceso legal o en circunstancias limitadas, en caso de una solicitud de emergencia. Sin embargo, si las autoridades policiales estadounidenses cuentan con la orden judicial, citación penal o resolución judicial que nos obligue a compartir datos, debemos cumplir. Asimismo, solo responderemos a solicitudes de autoridades gubernamentales fuera de EE. UU. si así lo exige el gobierno estadounidense mediante los procedimientos descritos en un tratado o acuerdo de asistencia legal mutua. Nuestra política es notificar a los usuarios afectados antes de compartir datos, a menos que tengamos prohibido hacerlo legalmente, y excepto en casos de emergencia.",
    preservationRequests:
      "Solicitudes de conservación. De igual forma, nuestra política es cumplir con las solicitudes de conservación de datos únicamente si así lo exige la Ley Federal de Comunicaciones Almacenadas de EE. UU., Título 18 del Código de los Estados Unidos, Sección 2703(f), o una citación judicial debidamente notificada en EE. UU. para asuntos civiles. No compartimos datos conservados a menos que lo exija la ley o una orden judicial que decidamos no apelar. Además, a menos que recibamos una orden judicial, una orden judicial o una citación judicial antes de que expire el plazo de conservación requerido, destruiremos cualquier copia conservada de los datos del cliente al finalizar dicho plazo.",
    taxAudit:
      "Si una autoridad fiscal nos audita, podríamos estar obligados a compartir información de facturación. En ese caso, compartiremos solo la mínima necesaria, como las direcciones de facturación y la información sobre exenciones fiscales.",
    secureDataContent1: "Todos los datos están encriptados mediante",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "cuando se transmiten desde nuestros servidores a su navegador.",
    deleteContentContent:
      "Si elimina cualquier contenido, éste quedará inmediatamente inaccesible.",
    locationContent:
      "Nuestros productos y otras propiedades web operan en Estados Unidos. Si se encuentra en la Unión Europea, el Reino Unido o en cualquier otro lugar fuera de Estados Unidos, tenga en cuenta que cualquier información que nos proporcione se transferirá y almacenará en Estados Unidos. Al utilizar nuestros sitios web o Servicios, o al proporcionarnos su información personal, usted consiente dicha transferencia.",
    childrenPrivacyContent:
      "Los Servicios no están dirigidos a menores y no recopilamos intencionalmente información personal de menores de 13 años. Si usted es menor de 13 años, le rogamos que no envíe información personal a través de los Servicios. Si cree que un menor nos ha proporcionado información personal infringiendo esta Política, póngase en contacto con nosotros como se indica a continuación.",
    updatesContent:
      "Podemos actualizar esta política según sea necesario para cumplir con la normativa pertinente y reflejar cualquier nueva práctica. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página.",
    contactUsContent1:
      "Si tiene alguna pregunta, comentario o queja sobre nuestra Política de Privacidad, por favor",
    contactUs: "Contáctanos",
    contactUsContent2:
      "y nos esforzaremos por atender su queja lo antes posible."
  },
  termsOfService: {
    termsOfServiceTitle: "Condiciones de servicio",
    lastUpdated: "Última actualización: 21 de septiembre de 2022",
    thankYouMessage: "¡Gracias por utilizar nuestros productos!",
    companyReference:
      "Cuando decimos &quot;Compañía&quot;, &quot;nosotros&quot;, &quot;nuestro&quot; o &quot;nos&quot; en este documento, nos referimos a Scribify.",
    servicesDefinition:
      "Cuando decimos &quot;Servicios&quot;, nos referimos a cualquier producto creado y mantenido por Scribify, ya sea entregado dentro de un navegador web, una aplicación de escritorio, una aplicación móvil u otro formato.",
    termsUpdateNotice:
      "Es posible que actualicemos estos Términos de Servicio en el futuro. Normalmente, estos cambios se han realizado para aclarar algunos de estos términos mediante enlaces a una política relacionada más amplia. Siempre que realicemos un cambio significativo en nuestras políticas, actualizaremos la fecha en la parte superior de esta página y tomaremos las medidas necesarias para notificar a los titulares de las cuentas.",
    acceptanceOfAgreementTitle: "1. Aceptación del Acuerdo",
    scribifyServicesTitle: "2. Servicios de Scribify",
    accountTermsTitle: "3. Condiciones de la cuenta",
    paymentRefundsTitle: "4. Pagos, reembolsos y cambios de plan",
    cancellationTerminationTitle: "5. Cancelación y terminación",
    submissionsTitle: "6. Envíos",
    uptimeSecurityTitle: "7. Tiempo de actividad y seguridad",
    siteManagementTitle: "8. Gestión del sitio",
    copyrightContentTitle: "9. Derechos de autor y propiedad del contenido",
    prohibitedActivitiesTitle: "10. Actividades prohibidas",
    featuresBugsTitle: "11. Características y errores",
    correctionsTitle: "12. CORRECCIONES",
    userDataTitle: "13. Datos del usuario",
    privacyPolicyTitle: "14. Política de privacidad",
    liabilityTitle: "15. Responsabilidad",
    miscellaneousTitle: "16. Varios",
    contactUsTitle: "17. Contáctenos",
    acceptanceContent1:
      "Al utilizar nuestros Servicios, usted acepta este Acuerdo, que se convierte en un contrato vinculante entre usted y Scribify. Declara tener la capacidad legal para aceptar estos Términos y afirma ser mayor de edad para formalizar un contrato vinculante. La aceptación por parte de Scribify está expresamente condicionada a su consentimiento a todos los términos y condiciones de este Acuerdo.",
    acceptanceContent2:
      "Los Servicios no están destinados a menores de 18 años ni deben ser utilizados por ellos. Al utilizar los Servicios, usted declara y garantiza que cumple con el requisito de elegibilidad anterior.",
    acceptanceContent3:
      "Los términos &quot;usted&quot;, &quot;su&quot; y &quot;usted mismo&quot; también incluyen a sus empleados, agentes, representantes comerciales y cualquier otra persona a la que proporcione acceso a los Servicios a través de su Cuenta (según se define más adelante). Usted es responsable de garantizar que todas las personas que accedan a los Servicios a través de su cuenta conozcan y cumplan estos Términos.",
    acceptanceContent4:
      "Scribify se reserva el derecho de revisar y actualizar estos Términos periódicamente a su entera discreción. Todos los cambios entran en vigor inmediatamente después de su publicación. Su uso continuado de los Servicios tras la publicación de los Términos revisados implica que acepta y está de acuerdo con los cambios. Le recomendamos que consulte esta página periódicamente para estar al tanto de cualquier cambio, ya que es vinculante.",
    servicesContent1:
      "Nuestros Servicios permiten a los usuarios transformar conversaciones de voz en texto transcrito que se puede buscar, traducir y compartir con otros.",
    servicesContent2:
      "Usted puede elegir si desea utilizar la versión gratuita de los Servicios (&quot;Servicios gratuitos&quot;) o la versión paga de los Servicios basada en suscripción por la que es posible que deba pagar tarifas (los &quot;Servicios pagados&quot;).",
    servicesContent3:
      "Pondremos los Servicios a su disposición. Usted es responsable de hacer todos los arreglos necesarios para acceder a ellos.",
    accountTerms1:
      "Usted es responsable de mantener la seguridad de su cuenta. La Compañía no se responsabiliza de ninguna pérdida o daño derivado del incumplimiento de esta obligación de seguridad.",
    accountTerms2:
      "- No puede utilizar los Servicios para ningún propósito ilegal, poco ético o inmoral.",
    accountTerms3:
      "- Usted es responsable de todo el contenido publicado y de la actividad que se realice en su cuenta. Esto incluye el contenido publicado por otras personas que: (a) tengan acceso a sus credenciales de inicio de sesión; o (b) tengan sus propias credenciales de inicio de sesión en su cuenta.",
    accountTerms4:
      "Debe ser un humano. No se permiten cuentas registradas mediante bots ni otros métodos automatizados.",
    paymentContent1:
      "Para los Servicios de pago que ofrecen una prueba gratuita, le explicamos la duración de la prueba al registrarse. Después del periodo de prueba, deberá pagar por adelantado para seguir usando el Servicio. Si no paga, estos servicios finalizarán.",
    paymentContent2:
      "- Si está actualizando de un plan gratuito a un plan pago, cobraremos su tarjeta inmediatamente y su ciclo de facturación comenzará el día de la actualización.",
    paymentContent3:
      "Todas las tarifas no incluyen impuestos, gravámenes ni aranceles impuestos por las autoridades fiscales. Cuando sea necesario, recaudaremos dichos impuestos en nombre de la autoridad fiscal y los remitiremos a la misma. De lo contrario, usted será responsable del pago de todos los impuestos, gravámenes o aranceles.",
    paymentContent4:
      "- Ninguna compra es reembolsable. Puede cancelar cualquier servicio de pago en cualquier momento iniciando sesión en su cuenta. En el caso de las suscripciones de pago, la cancelación se hará efectiva al finalizar el periodo de pago actual, a menos que se indique lo contrario.",
    cancellationContent1:
      "Si cancela el Servicio antes de que finalice el tiempo pagado, su cancelación se hará efectiva de inmediato y no se le cobrará de nuevo. No prorrateamos automáticamente el tiempo no utilizado en el último ciclo de facturación.",
    cancellationContent2:
      "Nos reservamos el derecho de suspender o cancelar su cuenta y denegarle el uso actual o futuro de nuestros Servicios, por cualquier motivo y en cualquier momento. La suspensión implica que no podrá acceder a la cuenta ni a su contenido. La cancelación también resultará en la eliminación de su cuenta o su acceso a ella, así como en la pérdida y renuncia a todo el contenido de su cuenta. También nos reservamos el derecho de denegar el uso de los Servicios a cualquier persona, por cualquier motivo y en cualquier momento. Esta cláusula se aplica porque, estadísticamente, de los cientos de miles de cuentas en nuestros Servicios, al menos una realiza actividades ilícitas.",
    cancellationContent3:
      "- El abuso verbal, físico, escrito o de otro tipo (incluidas las amenazas de abuso o represalias) de un empleado o funcionario de la Compañía puede resultar en la cancelación inmediata de la cuenta.",
    submissionsContent:
      "Usted reconoce y acepta que cualquier pregunta, comentario, sugerencia, idea, opinión u otra información relacionada con el Sitio (&quot;Contenidos&quot;) que nos proporcione no es confidencial y pasará a ser de nuestra exclusiva propiedad. Tendremos los derechos exclusivos, incluidos todos los derechos de propiedad intelectual, y tendremos derecho al uso y la difusión sin restricciones de estos Contenidos para cualquier fin lícito, comercial o de otro tipo, sin necesidad de reconocimiento ni compensación para usted. Por la presente, usted renuncia a todos los derechos morales sobre dichos Contenidos y garantiza que son originales suyos o que tiene derecho a enviarlos. Usted acepta que no habrá recurso contra nosotros por ninguna infracción o apropiación indebida, presunta o real, de ningún derecho de propiedad sobre sus Contenidos.",
    uptimeContent1:
      "El uso que usted hace de los Servicios es bajo su propio riesgo. Los proporcionamos tal como están y según disponibilidad. No ofrecemos acuerdos de nivel de servicio para la mayoría de nuestros Servicios, pero nos tomamos muy en serio el tiempo de actividad de nuestras aplicaciones.",
    uptimeContent2:
      "Nos reservamos el derecho a desactivar temporalmente su cuenta si su uso supera significativamente el uso habitual de otros clientes de los Servicios. Por supuesto, nos pondremos en contacto con usted antes de tomar cualquier medida, salvo en casos excepcionales en los que el nivel de uso pueda afectar negativamente el rendimiento del Servicio para otros clientes.",
    uptimeContent3:
      "Tomamos numerosas medidas para proteger y asegurar sus datos mediante copias de seguridad, redundancias y cifrado. Aplicamos cifrado para la transmisión de datos a través de la internet pública.",
    uptimeContent4:
      "- Utilizamos proveedores externos y socios de alojamiento para proporcionar el hardware, el software, la red, el almacenamiento y la tecnología relacionada necesarios para ejecutar los Servicios.",
    siteManagementContent:
      "Nos reservamos el derecho, pero no la obligación, de: (1) monitorear el Sitio para detectar violaciones de estos Términos de Servicio; (2) tomar las medidas legales apropiadas contra cualquier persona que, a nuestra entera discreción, viole la ley o estos Términos de Servicio, incluyendo, sin limitación, reportar a dicho usuario a las autoridades policiales; (3) a nuestra entera discreción y sin limitación, rechazar, restringir el acceso, limitar la disponibilidad de, o deshabilitar (en la medida que sea tecnológicamente factible) cualquiera de sus Contribuciones o cualquier parte de las mismas; (4) a nuestra entera discreción y sin limitación, aviso o responsabilidad, eliminar del Sitio o deshabilitar de otra manera todos los archivos y contenido que sean excesivos en tamaño o que de alguna manera sean una carga para nuestros sistemas; y (5) administrar de otra manera el Sitio de una manera diseñada para proteger nuestros derechos y propiedad y para facilitar el correcto funcionamiento del Sitio.",
    copyrightContent1:
      "- Todo el contenido publicado en los Servicios debe cumplir con la ley de derechos de autor de EE. UU.",
    copyrightContent2:
      "No reclamamos derechos de propiedad intelectual sobre el material que usted proporciona a los Servicios. Todo el material subido es suyo.",
    copyrightContent3:
      "- No seleccionamos previamente el contenido, pero nos reservamos el derecho (pero no la obligación), a nuestra entera discreción, de rechazar o eliminar cualquier contenido que esté disponible a través del Servicio.",
    copyrightContent4:
      "Los nombres, la apariencia y el funcionamiento de los Servicios son propiedad intelectual de la Compañía. Todos los derechos reservados. No puede duplicar, copiar ni reutilizar ninguna parte del HTML, CSS, JavaScript ni los elementos de diseño visual sin la autorización expresa por escrito de la Compañía. Debe solicitar permiso para usar el logotipo de la Compañía o cualquier logotipo del Servicio con fines promocionales.",
    emailUs: "Envíenos un correo electrónico",
    copyrightContent5:
      "Solicitudes de uso de logotipos. Nos reservamos el derecho de revocar este permiso si infringe estos Términos de Servicio.",
    copyrightContent6:
      "- Usted acepta no reproducir, duplicar, copiar, vender, revender o explotar ninguna parte de los Servicios, el uso de los Servicios o el acceso a los Servicios sin el permiso expreso por escrito de la Compañía.",
    copyrightContent7:
      "- No debe modificar otro sitio web de manera que dé a entender falsamente que está asociado con los Servicios o la Empresa.",
    copyrightContent8:
      "Respetamos los derechos de propiedad intelectual de terceros. Si cree que algún material disponible en el Sitio o a través de él infringe algún derecho de autor que usted posee o controla, por favor, compruébelo inmediatamente.",
    contactUs: "Contáctanos",
    copyrightContent9:
      "Se enviará una copia de su Notificación a la persona que publicó o almacenó el material mencionado en ella. Tenga en cuenta que, de acuerdo con la legislación aplicable, podría ser responsable de daños y perjuicios si realiza declaraciones falsas en una Notificación. Por lo tanto, si no está seguro de que el material que se encuentra en el Sitio o enlaza a él infrinja sus derechos de autor, le recomendamos contactar primero con un abogado.",
    prohibitedActivitiesIntro:
      "No podrá acceder ni utilizar el Sitio para ningún otro fin que no sea el previsto. El Sitio no podrá utilizarse para fines comerciales, salvo aquellos que estén específicamente respaldados o aprobados por nosotros.",
    prohibitedActivitiesUserAgreement:
      "Como usuario del Sitio, usted acepta no:",
    prohibitedActivity1:
      "- Recuperar sistemáticamente datos u otro contenido del Sitio para crear o compilar, directa o indirectamente, una colección, compilación, base de datos o directorio sin nuestro permiso por escrito.",
    prohibitedActivity2:
      "- Engañar, defraudar o confundirnos a nosotros o a otros usuarios, especialmente en cualquier intento de obtener información confidencial de la cuenta, como las contraseñas de los usuarios.",
    prohibitedActivity3:
      "- Eludir, deshabilitar o interferir de otro modo con las características relacionadas con la seguridad del Sitio, incluidas las características que impiden o restringen el uso o la copia de cualquier Contenido o imponen limitaciones en el uso del Sitio y/o el Contenido incluido en el mismo.",
    prohibitedActivity4:
      "- Menospreciar, manchar o de cualquier otra manera perjudicar, en nuestra opinión, a nosotros y/o al Sitio.",
    prohibitedActivity5:
      "- Utilizar cualquier información obtenida del Sitio para acosar, abusar o dañar a otra persona.",
    prohibitedActivity6:
      "- Hacer un uso indebido de nuestros servicios de soporte o enviar informes falsos de abuso o mala conducta.",
    prohibitedActivity7:
      "- Utilizar el Sitio de una manera incompatible con las leyes o reglamentaciones aplicables.",
    prohibitedActivity8:
      "- Participar en la creación de marcos o enlaces no autorizados al Sitio.",
    prohibitedActivity9:
      "- Cargar o transmitir (o intentar cargar o transmitir) virus, caballos de Troya u otro material, incluido el uso excesivo de letras mayúsculas y el spam (publicación continua de texto repetitivo), que interfiera con el uso y disfrute ininterrumpido del Sitio por parte de cualquier parte o que modifique, deteriore, interrumpa, altere o interfiera con el uso, las características, las funciones, el funcionamiento o el mantenimiento del Sitio.",
    prohibitedActivity10:
      "- Participar en cualquier uso automatizado del sistema, como utilizar scripts para enviar comentarios o mensajes, o utilizar cualquier minería de datos, robots o herramientas similares de recopilación y extracción de datos.",
    prohibitedActivity11:
      "- Eliminar el aviso de derechos de autor u otros derechos de propiedad de cualquier Contenido.",
    prohibitedActivity12:
      "- Intentar suplantar a otro usuario o persona o utilizar el nombre de usuario de otro usuario.",
    prohibitedActivity13:
      "- Cargar o transmitir (o intentar cargar o transmitir) cualquier material que actúe como un mecanismo pasivo o activo de recopilación o transmisión de información, incluidos, entre otros, formatos de intercambio de gráficos claros (&quot;gifs&quot;), píxeles 1×1, errores web, cookies u otros dispositivos similares (a veces denominados &quot;spyware&quot; o &quot;mecanismos de recopilación pasiva&quot; o &quot;pcms&quot;).",
    prohibitedActivity14:
      "- Interferir, interrumpir o crear una carga indebida en el Sitio o las redes o servicios conectados al Sitio.",
    prohibitedActivity15:
      "- Acosar, molestar, intimidar o amenazar a cualquiera de nuestros empleados o agentes involucrados en proporcionarle cualquier parte del Sitio.",
    prohibitedActivity16:
      "- Intentar eludir cualquier medida del Sitio diseñada para impedir o restringir el acceso al Sitio o a cualquier parte del Sitio.",
    prohibitedActivity17:
      "- Copiar o adaptar el software del Sitio, incluidos, entre otros, Flash, PHP, HTML, JavaScript u otro código.",
    prohibitedActivity18:
      "- Salvo que lo permita la ley aplicable, descifrar, descompilar, desensamblar o aplicar ingeniería inversa a ningún software que comprenda o forme parte de algún modo del Sitio.",
    prohibitedActivity19:
      "- Salvo que sea el resultado del uso estándar de un motor de búsqueda o de un navegador de Internet, utilizar, lanzar, desarrollar o distribuir cualquier sistema automatizado, incluidos, entre otros, cualquier araña, robot, utilidad de trampa, raspador o lector fuera de línea que acceda al Sitio, o utilizar o lanzar cualquier script u otro software no autorizado.",
    prohibitedActivity20:
      "- Utilizar un agente de compras o agente de compras para realizar compras en el Sitio.",
    prohibitedActivity21:
      "- Hacer cualquier uso no autorizado del Sitio, incluyendo la recopilación de nombres de usuario y/o direcciones de correo electrónico de los usuarios por medios electrónicos o de otro tipo con el fin de enviar correo electrónico no solicitado, o crear cuentas de usuario por medios automatizados o bajo falsas pretensiones.",
    prohibitedActivity22:
      "- Utilizar el Sitio como parte de cualquier esfuerzo para competir con nosotros o, de otro modo, utilizar el Sitio y/o el Contenido para cualquier esfuerzo generador de ingresos o empresa comercial.",
    prohibitedActivity23:
      "- Utilizar el Sitio para publicitar u ofrecer vender bienes y servicios.",
    prohibitedActivity24:
      "- Vender o transferir de cualquier otra forma su perfil.",
    featuresContent1:
      "Diseñamos nuestros Servicios con esmero, basándonos en nuestra propia experiencia y en la de nuestros clientes, quienes comparten su tiempo y comentarios. Sin embargo, no existe un servicio que satisfaga a todos. No garantizamos que nuestros Servicios satisfagan sus necesidades o expectativas específicas.",
    featuresContent2:
      "También probamos todas nuestras funciones antes de lanzarlas. Como con cualquier software, nuestros Servicios inevitablemente presentan errores. Hacemos un seguimiento de los errores que nos informan y los solucionamos, especialmente los relacionados con la seguridad o la privacidad. No todos los errores informados se solucionarán y no garantizamos que nuestros Servicios estén completamente libres de errores.",
    correctionsContent1:
      "El Sitio puede contener información que contenga errores tipográficos, inexactitudes u omisiones, incluyendo descripciones, precios, disponibilidad y otra información diversa. Nos reservamos el derecho de corregir cualquier error, inexactitud u omisión, así como de modificar o actualizar la información del Sitio en cualquier momento, sin previo aviso.",
    correctionsContent2:
      "No podemos garantizar la disponibilidad del Sitio en todo momento. Podríamos experimentar problemas de hardware, software u otros problemas, o necesitar realizar tareas de mantenimiento relacionadas con el Sitio, lo que podría provocar interrupciones, retrasos o errores. Nos reservamos el derecho a cambiar, revisar, actualizar, suspender, interrumpir o modificar el Sitio en cualquier momento y por cualquier motivo sin previo aviso. Usted acepta que no nos responsabilizamos de ninguna pérdida, daño o inconveniente causado por su imposibilidad de acceder o usar el Sitio durante cualquier periodo de inactividad o interrupción del mismo. Nada de lo dispuesto en estos Términos de Servicio se interpretará como una obligación para nosotros de mantener y dar soporte al Sitio ni de proporcionar correcciones, actualizaciones o actualizaciones relacionadas con el mismo.",
    userDataContent:
      "Mantendremos ciertos datos que transmita al Sitio para gestionar su rendimiento, así como los datos relacionados con su uso del mismo. Si bien realizamos copias de seguridad periódicas de los datos, usted es el único responsable de todos los datos que transmita o que se relacionen con cualquier actividad que haya realizado en el Sitio. Acepta que no nos responsabilizaremos de la pérdida o corrupción de dichos datos y, por la presente, renuncia a cualquier acción contra nosotros derivada de dicha pérdida o corrupción.",
    privacyPolicyContent1:
      "Nos preocupamos por la privacidad y seguridad de los datos. Por favor, revise nuestra",
    privacyPolicy: "política de privacidad",
    privacyPolicyContent2:
      "Al usar el Sitio, usted acepta nuestra Política de Privacidad, la cual se incorpora a estos Términos de Servicio. Tenga en cuenta que el Sitio está alojado en Estados Unidos. Si accede al Sitio desde cualquier otra región del mundo con leyes u otros requisitos que rijan la recopilación, el uso o la divulgación de datos personales que difieran de las leyes aplicables en Estados Unidos, al continuar usando el Sitio, estará transfiriendo sus datos a Estados Unidos y acepta que sus datos se transfieran y procesen allí.",
    liabilityIntro:
      "Mencionamos la responsabilidad a lo largo de estos Términos, pero para ponerlo todo en una sección:",
    liabilityContent:
      "Usted entiende y acepta expresamente que la Compañía no será responsable, en derecho o en equidad, ante usted o cualquier tercero por ningún daño directo, indirecto, incidental, lucro cesante, especial, consecuente, punitivo o ejemplar, incluyendo, pero no limitado a, daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles (incluso si la Compañía ha sido informada de la posibilidad de tales daños), resultantes de: (1) el uso o la imposibilidad de usar los Servicios; (2) errores, equivocaciones o inexactitudes de contenido y materiales; (3) lesiones personales o daños a la propiedad, de cualquier naturaleza, resultantes de su acceso y uso del sitio; (4) el costo de adquisición de bienes y servicios sustitutos resultantes de cualquier bien, dato, información o servicio comprado u obtenido o mensajes recibidos o transacciones realizadas a través o desde los Servicios; (5) cualquier acceso no autorizado o uso de nuestros servidores seguros y/o cualquier información personal y/o información financiera almacenada en los mismos; (6) cualquier interrupción o cese de la transmisión hacia o desde el sitio; (7) cualquier error, virus, troyano o similares que puedan transmitirse hacia o a través del sitio por un tercero, y/o; (8) cualquier error u omisión en cualquier contenido y material o por cualquier pérdida o daño de cualquier tipo incurrido como resultado del uso de cualquier contenido publicado, transmitido o puesto a disposición de otra manera a través del sitio; (9) declaraciones o conducta de cualquier tercero en el servicio; (10) o cualquier otro asunto relacionado con estos Términos de Servicio o los Servicios, ya sea como incumplimiento de contrato, agravio (incluida la negligencia, ya sea activa o pasiva), o cualquier otra teoría de responsabilidad.",
    miscellaneousContent:
      "Estos Términos de Servicio y cualquier política o norma operativa publicada por nosotros en el Sitio o con respecto al Sitio constituyen el acuerdo y entendimiento completo entre usted y nosotros. Nuestra falta de ejercicio o aplicación de cualquier derecho o disposición de estos Términos de Servicio no constituirá una renuncia a dicho derecho o disposición. Estos Términos de Servicio operan en la máxima medida permitida por la ley. Podemos ceder cualquiera o todos nuestros derechos y obligaciones a terceros en cualquier momento. No seremos responsables de ninguna pérdida, daño, demora u omisión causada por cualquier causa fuera de nuestro control razonable. Si alguna disposición o parte de una disposición de estos Términos de Servicio se determina ilegal, nula o inaplicable, dicha disposición o parte de la disposición se considerará separable de estos Términos de Servicio y no afectará la validez y aplicabilidad de las disposiciones restantes. No se crea ninguna relación de empresa conjunta, sociedad, empleo o agencia entre usted y nosotros como resultado de estos Términos de Servicio o del uso del Sitio. Usted acepta que estos Términos de Servicio no se interpretarán en nuestra contra por el hecho de haberlos redactado. Por la presente, usted renuncia a todas y cada una de las defensas que pueda tener basadas en la forma electrónica de estos Términos de Servicio y la falta de firma de las partes para ejecutar estos Términos de Servicio.",
    contactUsContent1:
      "Si tiene alguna pregunta sobre cualquiera de los Términos de Servicio, por favor",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
