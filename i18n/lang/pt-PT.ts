let message = {
  // 首页
  HomePage: {
    home: "Início",
    version: "Versão básica (Gratuita):",
    times:
      "Transcrição gratuita {times} vezes por dia, você tem {left} transcrições restantes. ",
    tips: "Atualize para Pro para transcrições ilimitadas.",
    update: "Atualizar agora",
    folders: "Pastas",
    rename: "Renomear",
    delete: "Eliminar",
    createTitle: "Criar pasta",
    deleteConfirm: `Tem certeza de que deseja eliminar a pasta e todos os arquivos nela?`,
    cancel: "Cancelar",
    confirm: "Criar",
    dialogLabel: "Nome da pasta",
    recently: "Arquivos recentes",
    tour: {
      step0: {
        title: "Bem-vindo ao {name}",
        tip: "Aqui, você pode:",
        content:
          "Transcrever conversas pontuais, reuniões, palestras e muito mais",
        next: "Começar"
      },
      step1: {
        title: "Transcrever arquivos",
        content:
          "Suporta três métodos de transcrição: arquivos locais, links e gravações."
      },
      step2: {
        title: "Criar uma pasta",
        content: 'Clique no "+" para criar uma pasta e organizar seus arquivos.'
      },
      step3: {
        title: "Ver detalhes da transcrição e editar",
        content:
          "Clique no item para ver os detalhes da transcrição e editar, bem como traduzi-la."
      },
      next: "próximo",
      finish: "Entendi"
    },
    export: {
      export: "Exportar",
      title: "Estamos a gerar a sua exportação",
      title2: "O seu arquivo está pronto",
      singleLoadingContent: "1 arquivo está sendo comprimido.",
      singleSuccessContent: "1 arquivo foi comprimido.",
      loadingContent: "{num} arquivos estão sendo comprimidos.",
      successContent: "{num} arquivos foram comprimidos.",
      cancel: "Cancelar a exportação",
      error: "Erro de exportação",
      dialog: {
        title: "Aviso",
        content: "Cancelar a exportação?",
        cancel: "Cancelar exportação",
        continue: "Continuar exportação"
      }
    },
    welcome: {
      title: "Bem-vindo ao Scribify!",
      description: "Aqui, pode:",
      transcribe:
        "Transcreva sem esforço com Scribify—transforme conversas de voz em texto claro, pesquisável e partilhável num instante.",
      precision:
        "Obtenha transcrições precisas com identificação de oradores e marcas temporais instantaneamente.",
      translate:
        "Quebre barreiras linguísticas: traduza transcrições para mais de 200 idiomas com facilidade.",
      edit: "Edite, refine e exporte as suas transcrições em formatos que se adequem às suas necessidades.",
      collaborate: "Colabore partilhando o seu texto transcrito com outros.",
      button: "Começar",
      tip: "Pronto para transformar áudio em texto transcrito? Comece a explorar agora!"
    },
    subscriptionModal: {
      left: {
        title: "Obtenha o Plano Pro para desbloquear mais",
        c1: "Transcrições ilimitadas",
        c2: "Carregamentos de 10 horas",
        c3: "Prioridade máxima",
        c4: "99% de precisão na transcrição",
        c5: "Mais de 100 idiomas suportados",
        c6: "Identificação de oradores",
        c7: "Tradução de transcrição",
        t1: "Transcrições ilimitadas para uma pessoa.",
        t2: "Cada ficheiro pode ter até 10 horas / 5 GB. Carregue 50 ficheiros de uma vez.",
        t3: "Transcrevemos sempre os seus ficheiros o mais rapidamente possível com a prioridade máxima."
      },
      right: {
        title: "Obter Plano Pro",
        yearly: "Anual",
        monthly: "Mensal",
        save: "Poupança",
        preMonth: "por mês",
        preYear: "por ano",
        firstMonth: "primeiro mês",
        afterwards: "depois"
      },
      subscribe: "Subscrever"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "Nome",
      duration: "Duração",
      status: "Estado",
      date: "Data de criação",
      activity: "Atividade",
      empty1: `Está vazio.`,
      empty2: `Clique no botão acima para transcrever um arquivo.`,
      just: "agora mesmo",
      export: "Exportar",
      delete: "Eliminar",
      share: "Partilhar",
      rename: "Renomear",
      move: "Mover",
      failed: "Falhou",
      selected: "Selecionado",
      success: "Sucesso"
    },
    dialog: {
      move: {
        title: "Mover",
        label: "Escolher uma pasta",
        placeholder: "Escolher uma pasta",
        confirm: "Mover",
        cancel: "Cancelar"
      },
      rename: {
        title: "Renomear",
        label: "Nome do arquivo",
        confirm: "Renomear",
        cancel: "Cancelar"
      },
      delete: {
        title: "Eliminar",
        file: "arquivo",
        files: "arquivos",
        label: "Confirmar eliminação? Esta ação não pode ser desfeita.",
        confirm: "Eliminar",
        cancel: "Cancelar"
      },
      share: {
        title: "Partilhar",
        label:
          "Qualquer pessoa com o seguinte link seguro pode ver esta transcrição e o arquivo de mídia associado.",
        confirm: "Copiar link",
        success: "Cópia bem-sucedida"
      },
      export: {
        title: "Exportar",
        select: "Selecione um ou mais formatos",
        settings: "Configurações",
        speaker: "Incluir orador",
        timecodes: "Incluir códigos de tempo",
        confirm: "Exportar",
        cancel: "Cancelar",
        selectErr: "Por favor, selecione um ou mais formatos"
      }
    },
    search: {
      placeholder: "Pesquisar"
    },
    recently: "Recentes",
    record: "Gravar",
    transcribe: "Transcrever",
    unclassified: "Pastas não classificadas",
    buttons: {
      transcribe: "Transcrever arquivos",
      url: "Transcrever links",
      record: "Gravar e transcrever",
      recording: "Gravando..."
    },
    delSuccess: "Eliminado com sucesso",
    create: "Criar"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "Gravar",
      pause: "Pausar",
      resume: "Retomar",
      stop: "Parar",
      delete: "Eliminar",
      transcribe: "Transcrever",
      permissionDenied:
        "Permissão de microfone negada ou dispositivo não existe",
      dialog: {
        delete: {
          title: "Aviso",
          label: "Tem certeza de que deseja eliminar esta gravação?",
          confirm: "Eliminar",
          cancel: "Cancelar"
        },
        complete: {
          title: "Gravação concluída",
          label:
            "A gravação atingiu 10 horas e parou automaticamente. Por favor, transcreva.",
          confirm: "Entendi"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transcrever uma mídia online",
        title: "Colar links",
        label:
          "Cole o link de mídia das seguintes plataformas, mas não limitado a: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "Transcrever",
        cancel: "Cancelar",
        // 请输入正确的链接
        errorTitle:
          "O endereço do link que inseriu está incorreto. Por favor, verifique e tente novamente.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transcrever uma mídia online",
        dialogTitle: "Transcrever arquivos",
        tip: "Clique para carregar ou arraste e solte",
        or: "ou"
      },
      del: {
        title: "Aviso",
        content:
          "Todo o progresso será perdido. Confirmar o cancelamento da transcrição?",
        cancel: "Confirmar cancelamento",
        confirm: "Continuar a transcrever"
      },
      files: "Arquivos",
      resultDialogTitle: "Transcrever arquivos",
      cancel: "Cancelar",
      confirm: "Transcrever",
      return: "Voltar",
      addMore: "Adicionar mais",
      language: "Idioma do áudio",
      failed: "Falhou",
      tooLarge: "O arquivo é demasiado grande.",
      fileFormat: "O formato do arquivo não é permitido",
      localFiles: "Arquivos locais",
      pasteLink: "Colar links",
      uploadErr: "Erro de carregamento",
      hashErr: "Erro de hash",
      table: {
        status: "Estado",
        file: "Arquivo",
        size: "Tamanho",
        noData: "Sem dados"
      },
      maxFileNum: "O número de arquivos não pode exceder {num}.",
      speaker: "Identificação de locutor",
      speakerLabel: "Rotula cada secção da transcrição com o interlocutor."
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "Editar",
    translate: "Traduzir",
    showSpeaker: "Mostrar orador",
    showTimestamp: "Mostrar marca temporal",
    share: "Partilhar",
    shared: "partilhado",
    export: "Exportar",
    speaker: "Orador_{ id }",
    unassignSpeaker: "Remover orador",
    play: "Reproduzir",
    save: "Guardar",
    undo: "Desfazer",
    redo: "Refazer",
    confirm: "Confirmar",
    cancel: "Cancelar",
    addNew: "Adicionar novo",
    createANewSpeaker: "Criar um novo orador",
    speakerName: "Nome do orador",
    addSpeaker: "Adicionar orador",
    applyToAllMatchingSpeakers: "Aplicar a todos os oradores correspondentes",
    cancelTranslation: "Cancelar tradução",
    showVideo: "Mostrar o vídeo",
    hideVideo: "Ocultar o vídeo",
    langChooseV1: {
      recently: "Recentes",
      popular: "Populares",
      other: "Outros",
      searchLanguage: "Pesquisar idioma",
      noMatch: "Nenhum idioma correspondente encontrado",
      English: "Inglês",
      "English(US)": "Inglês (EUA)",
      "English(UK)": "Inglês (Reino Unido)",
      Spanish: "Espanhol",
      Portuguese: "Português",
      French: "Francês",
      Italian: "Italiano",
      German: "Alemão",
      Dutch: "Holandês",
      Polish: "Polonês",
      Danish: "Dinamarquês",
      Japanese: "Japonês",
      Korean: "Coreano",
      Hungarian: "Húngaro",
      Czech: "Tcheco",
      Chinese: "Chinês",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Azerbaijani: "Azerbaijano",
      Estonian: "Estoniano",
      Belarusian: "Bielorrusso",
      Bulgarian: "Búlgaro",
      Icelandic: "Islandês",
      Bosnian: "Bósnio",
      Persian: "Persa",
      Russian: "Russo",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Finnish: "Finlandês",
      Kazakh: "Cazaque",
      Galician: "Galego",
      Catalan: "Catalão",
      "Chinese(Simplified)": "Chinês (Simplificado)",
      Kannada: "Canarês",
      Croatian: "Croata",
      Latvian: "Letão",
      Lithuanian: "Lituano",
      Romanian: "Romeno",
      Marathi: "Marata",
      Malay: "Malaio",
      Macedonian: "Macedônio",
      Maori: "Maori",
      Afrikaans: "Africâner",
      Nepali: "Nepalês",
      Norwegian: "Norueguês",
      Swedish: "Sueco",
      Serbian: "Sérvio",
      Slovak: "Eslovaco",
      Slovenian: "Esloveno",
      Swahili: "Suaíli",
      Tagalog: "Tagalo",
      Tamil: "Tâmil",
      Thai: "Tailandês",
      Turkish: "Turco",
      Welsh: "Galês",
      Urdu: "Urdu",
      Ukrainian: "Ucraniano",
      Greek: "Grego",
      Armenian: "Armênio",
      Hindi: "Hindi",
      Indonesian: "Indonésio",
      Vietnamese: "Vietnamita",
      Albanian: "Albanês",
      Amharic: "Amárico",
      Assamese: "Assamês",
      Occitan: "Occitano",
      Bashkir: "Bashkir",
      Basque: "Basco",
      Breton: "Breton",
      Tibetan: "Tibetano",
      Faroese: "Faroês",
      Sanskrit: "Sânscrito",
      Khmer: "Khmer",
      Georgian: "Grego",
      Gujarati: "Gujarati",
      "Haitian Creole": "Crioulo Haitiano",
      Hausa: "Hausa",
      Latin: "Latim",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburguês",
      Malagasy: "Malagasy",
      Maltese: "Maltês",
      Malayalam: "Malayalam",
      Mongolian: "Mongol",
      Bengali: "Bengali",
      Burmese: "Birmanês",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Cingalês",
      Shona: "Shona",
      Somali: "Somali",
      Tajik: "Tajique",
      Tatar: "Tatar",
      Telugu: "Telugu",
      Turkmen: "Turcomano",
      Uzbek: "Uzbeko",
      Hawaiian: "Havaiano",
      "Norwegian Nynorsk": "Norueguês Nynorsk",
      Sindhi: "Sindi",
      Sundanese: "Sundanês",
      Yiddish: "Iídiche",
      Yoruba: "Iorubá",
      Javanese: "Iauajava",
      Cantonese: "Cantonês",
      Abkhaz: "Abkhaze",
      Afar: "Afar",
      alz: "Aluz",
      ach: "Acholi",
      awa: "Ava",
      Avaric: "Avaric",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlandês",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossétio",
      tpi: "Pidgin de Papua",
      bew: "Badaw",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Bawur",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Sotho do Norte",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balochi",
      bho: "Bhojpuri",
      bua: "Buriat",
      chm: "Chamorro",
      Chamorro: "Chamorro",
      Chechen: "Checheno",
      chk: "Chukcheo",
      Chuvash: "Chuvash",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Divehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndebele do Sul",
      "South Ndebele": "Ndebele do Sul",
      dov: "Dong",
      "bm-Nkoo": "N'Ko (alfabeto escrito)",
      "French(Canada)": "Francês (Canadá)",
      Fijian: "Fijiano",
      fon: "Fon",
      "Western Frisian": "Frísio Ocidental",
      fur: "Friulano",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Groenlandês",
      gom: "Gom",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirguiz",
      ktu: "Ktu",
      gaa: "Gbe",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Corsicano",
      "crh-Latn": "Crimeu (Latim)",
      crh: "Crimeu (Cirílico)",
      Quechua: "Quechua",
      Kurdish: "Curdo (Kurmanji)",
      ckb: "Curdo (Soranî)",
      trp: "Trepang",
      ltg: "Latgalian",
      lij: "Liguriano",
      Limburgish: "Limburguês",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombard",
      rom: "Românico",
      mad: "Madurese",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malaio (Jawi)",
      Marshallese: "Marshallês",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maori (Crioulo)",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Lus",
      hmn: "Hmong",
      nhe: "Navajo (Navaho)",
      "Southern Sotho": "Sotho do Sul",
      new: "Nepalês (Navajo)",
      nus: "Nus",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shamkhî)",
      "pt-PT": "Português (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Lua",
      Akan: "Akan",
      zap: "Zapotec",
      "Northern Sami": "Sami (Norte)",
      Samoan: "Samoano",
      kri: "Crioulo de Serra Leoa",
      crs: "Crioulo de Seicheles",
      Sango: "Sango",
      "sat-Latn": "Santali (Latim)",
      sat: "Santali (Ogham)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Gaélico Escocês",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (Latim)",
      Tahitian: "Tahitiano",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinian",
      war: "Waray",
      mak: "Makassar",
      vec: "Vêneto",
      Uyghur: "Uigur",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurt",
      szl: "Silesiano",
      scn: "Siciliano",
      hil: "Hiligaynon",
      jam: "Jamaican Creole",
      sah: "Iacuto",
      ace: "Acehês",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Iloko",
      "iu-Latn": "Inuktitut (Latim)",
      Inuktitut: "Inuktitut (Syllabary)",
      yua: "Yucateco Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    },
    notFund: "Não encontrado",
    notFundDesc: "Não conseguimos encontrar o que estava a procurar.",
    shareTips:
      "Qualquer pessoa com o seguinte link seguro pode ver esta transcrição e o arquivo de mídia associado.",
    copyLink: "Copiar link",
    copySuccessful: "Cópia bem-sucedida",
    copyFail: "Falha na cópia",
    closeTrans: "Cancelar tradução",
    upgradeBtn: "Atualizar agora",
    upgradeTip30: "Este arquivo excede 30 minutos.",
    upgradeTipMore:
      "Atualize para o Scribify Pro para transcrever arquivos de até 10 horas"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "ou", // 或
    signup: "Registar", // 注册
    sign_up: "Registar", // 注册
    loginByGoogle: "Continuar com Google", // 使用Google登录
    emailAddress: "Por favor, insira o seu endereço de e-mail", // 请输入您的邮箱
    createAccount: "Criar uma nova conta", // 创建账户
    accountExists: "Já tem uma conta? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "Ao usar {proName}, você concorda com os {terms} e a {policy}.",
      terms: "Termos de Serviço",
      policy: "Política de Privacidade"
    },
    setPassword: "Definir uma palavra-passe", // 设置密码
    code: "Código de verificação", // 验证码
    resend: "Reenviar", // 重新发送
    codeToEmail:
      "Acabámos de enviar um código de registo temporário para o seu e-mail. Por favor, verifique a sua caixa de entrada e cole o código de registo acima.", // 我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。
    enterPassword: "Por favor, insira a sua palavra-passe.", // 请输入密码
    passwordLeval: "Nível de palavra-passe", // 密码强度
    Weak: "Fraca", // 弱 中 强
    Medium: "Média", // 弱 中 强
    Strong: "Forte", // 弱 中 强
    confirmPassword: "Confirme a sua palavra-passe", // 确认密码
    invalidEmail: "Endereço de e-mail inválido", // 无效的邮箱地址
    logInDirectly:
      "Esta conta já existe. Por favor, inicie sessão diretamente.", // 账户已存在，请直接登录
    codeErrorTryAgain: "Erro no código de verificação. Tente novamente.", // 验证码错误，请重试
    atLeastSix: "A palavra-passe deve ter pelo menos 6 caracteres.", // 密码长度至少6位
    passwordNotMatch:
      "As palavras-passe não coincidem. Por favor, tente novamente.", // 密码不匹配，请重试
    login: "Iniciar sessão", // 登录
    log_in: "Iniciar sessão", // 登录
    log_In: "Iniciar Sessão", // 登录
    password: "Palavra-passe", // 密码
    forgotPassword: "Esqueceu a sua palavra-passe?", // 忘记密码？
    noAccount: "Não tem uma conta?", // 没有账户？注册
    accountNotExists: "Esta conta não existe.", // 账户不存在
    passwordError: "Erro na palavra-passe", // 密码错误
    sendCode: "Enviar código de verificação", // 发送验证码
    resetPassword: "Redefinir palavra-passe", // 重置密码
    resetYourPassword: "Redefina a sua palavra-passe", // 重置你的密码
    newOldCantSame: "A nova palavra-passe deve ser diferente da antiga.", // 新密码与旧密码不能相同
    passwordResetOk: "Palavra-passe redefinida com sucesso!" // 密码重置成功！
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "Plano de subscrição",
    freeversion: "Grátis",
    transcribeTimesDay: "3 Transcrições Diárias",
    freeThreeTimesDay: "Transcreva 3 ficheiros gratuitamente todos os dias.",
    uploadMinutes: "Carregamentos de 30 minutos",
    oneFileUploaded:
      "Cada ficheiro pode ter até 30 minutos, com um ficheiro carregado de cada vez",
    lowerPriority: "Prioridade mais baixa",
    needsToWaitLonger:
      "3 Transcrições Diárias Espere mais tempo até os seus ficheiros serem transcritos.",
    currentPlan: "Plano atual",
    professionalEdition: "edição profissional",
    unlimitedTranscription: "Transcrição ilimitada",
    unlimitedNumberOfTimes: "Transcrições ilimitadas para uma pessoa.",
    uploadWithinHours: "Carregar até 10 horas",
    filesUploadedAtOnce:
      "Cada ficheiro pode ter até 10 horas/5 GB. Carregue 50 ficheiros de cada vez.",
    highestPriority: "prioridade máxima",
    weWillGiveTheHighest:
      "Transcreveremos sempre os seus ficheiros o mais rápido possível com a máxima prioridade.",
    theFirstMonth: "O primeiro mês",
    subscribeTo: "subscrever",
    basicVersionFree: "Versão básica (grátis)",
    return: "Voltar",
    annualize: "anual",
    monthly: "mensal",
    everyYear: "todos os anos",
    saved: "poupado",
    byTheMonth: "por mês",
    firstMonth: "primeiro mês",
    afterwardsEveryMonth: "Posteriormente, todos os meses",
    manageSubscription: "Gerir Subscrição",
    professionalYearbook: "Anual Profissional",
    professionalMonthly: "Mensal Profissional",
    subscriptionWillCancelledOn: "Sua assinatura será cancelada em",
    displayLanguage: "Idioma de exibição",
    update: "Atualizar Agora",
    basicversion: "Versão Básica (Grátis)",
    daily: "{start} de {end} transcrições diárias utilizadas",
    upgradetoPro: "Atualizar para Pro",
    accountSetting: "Definições da Conta",
    returnAccountSetting: "Voltar às definições da conta",
    logOut: "Terminar sessão",
    account: "Conta",
    email: "E-mail",
    id: "ID",
    password: "Palavra-passe",
    resetPassword: "Repor palavra-passe",
    logIn: "Iniciar sessão",
    tryForFree: "Experimente grátis",
    notFund: "Não encontrado",
    couldntFind: "Não conseguimos encontrar o que procura.",
    proAnnual: "Pro Anual",
    yourSubscription: "A sua subscrição será cancelada a",
    proMonthly: "Pro Mensal",
    perMonth: "por mês",
    afterwards: "posteriormente",
    accuracy: "precisão da transcrição",
    supported: "idiomas suportados",
    identification: "Identificação do orador",
    transcriptSranslation: "Tradução da transcrição",
    perYear: "por ano",
    getProPlan: "Obter Plano Pro",
    changeToAnnual: "Mudar para Anual",
    automaticRenewalon: "Renovação automática a"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chinês (Simplificado)",
      "Chinese(Traditional)": "Chinês (Tradicional)",
      Japanese: "Japonês",
      Danish: "Dinamarquês",
      German: "Alemão",
      English: "Inglês",
      Spanish: "Espanhol",
      French: "Francês",
      Italian: "Italiano",
      Hungarian: "Húngaro",
      Dutch: "Holandês",
      Norwegian: "Norueguês",
      Polish: "Polonês",
      Portuguese: "Português",
      Finnish: "Finlandês",
      Swedish: "Sueco",
      Turkish: "Turco",
      Greek: "Grego",
      Russian: "Russo",
      Ukrainian: "Ucraniano",
      Hebrew: "Hebraico",
      Arabic: "Árabe",
      Korean: "Coreano"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​Modelo SaaS Nuxt3 de código aberto, pré-integrado com gateways de pagamento globais (Stripe/Cream), Google OAuth, rotas i18n e ferramentas de otimização SEO. Projetado para desenvolvedores que lançam aplicações web multilíngues, oferece suporte SSR/SSG e segurança de nível de produção logo de início.",
    startLink: "Iniciar teste gratuito~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Junte-se à lista de espera, receba as últimas notícias do NuxtPro em primeira mão E descontos!",
      placeholder: "Insira o seu e-mail",
      button: "Juntar-se à lista de espera",
      joinCountMessage:
        "🔥 Utilizador inicial #{count} acabou de se juntar à lista de espera!"
    },
    seo: {
      title: "Modelo SaaS Nuxt de código aberto | NuxtPro",
      description:
        "O modelo NuxtJS com tudo o que precisa para colocar o seu produto à frente dos clientes. Da ideia à produção em 5 minutos."
    },
    api: {
      title: "isto é uma demonstração",
      corpInfo: "informações corporativas"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "erro de download de vídeo"
      },
      mse: {
        code: 2,
        msg: "erro de anexo de stream"
      },
      parse: {
        code: 3,
        msg: "erro de análise"
      },
      format: {
        code: 4,
        msg: "formato incorreto"
      },
      decoder: {
        code: 5,
        msg: "erro de descodificação"
      },
      runtime: {
        code: 6,
        msg: "erros gramaticais"
      },
      timeout: {
        code: 7,
        msg: "tempo limite de reprodução"
      },
      other: {
        code: 8,
        msg: "outros erros"
      }
    },
    HAVE_NOTHING: "Não há informações sobre se o áudio/vídeo está pronto",
    HAVE_METADATA: "Os metadados de áudio/vídeo estão prontos ",
    HAVE_CURRENT_DATA:
      "Os dados sobre a localização atual de reprodução estão disponíveis, mas não há dados suficientes para reproduzir o próximo frame/milissegundo",
    HAVE_FUTURE_DATA:
      "Os dados atuais e pelo menos um frame de dados estão disponíveis",
    HAVE_ENOUGH_DATA:
      "Os dados disponíveis são suficientes para iniciar a reprodução",
    NETWORK_EMPTY: "O áudio/vídeo não foi inicializado",
    NETWORK_IDLE:
      "O áudio/vídeo está ativo e foi selecionado para recursos, mas nenhuma rede é utilizada",
    NETWORK_LOADING: "O navegador está a descarregar os dados",
    NETWORK_NO_SOURCE: "Nenhuma fonte de áudio/vídeo foi encontrada",
    MEDIA_ERR_ABORTED: "O processo de busca foi interrompido pelo utilizador",
    MEDIA_ERR_NETWORK: "Ocorreu um erro durante o download",
    MEDIA_ERR_DECODE: "Ocorreu um erro durante a descodificação",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Áudio/vídeo não é suportado",
    REPLAY: "Reproduzir novamente",
    ERROR: "A rede está offline",
    PLAY_TIPS: "Reproduzir",
    PAUSE_TIPS: "Pausar",
    PLAYNEXT_TIPS: "Reproduzir próximo",
    DOWNLOAD_TIPS: "Descarregar",
    ROTATE_TIPS: "Rodar",
    RELOAD_TIPS: "Recarregar",
    FULLSCREEN_TIPS: "Entrar em ecrã inteiro",
    EXITFULLSCREEN_TIPS: "Sair do ecrã inteiro",
    CSSFULLSCREEN_TIPS: "Ecrã inteiro CSS",
    EXITCSSFULLSCREEN_TIPS: "Sair do ecrã inteiro CSS",
    TEXTTRACK: "Legenda",
    PIP: "PIP",
    SCREENSHOT: "Captura de ecrã",
    LIVE: "AO VIVO",
    OFF: "Desligado",
    OPEN: "Abrir",
    MINI_DRAG: "Clique e mantenha pressionado para arrastar",
    MINISCREEN: "Mini-ecrã",
    REFRESH_TIPS: "Por favor, tente",
    REFRESH: "Atualizar",
    FORWARD: "avançar",
    LIVE_TIP: "Ao vivo",
    TM_SUBTITLE_SHOW_TIPS: "Ativar legendas",
    TM_SUBTITLE_HIDE_TIPS: "Desativar legendas",
    TM_MINIMIZE_TIPS: "Ocultar o vídeo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "política de Privacidade",
    lastUpdated: "Última atualização: 25 de agosto de 2025",
    policyDescription:
      "Esta Política descreve como o Scribify (doravante denominado &quot;Scribify&quot;, &quot;nosso&quot;, &quot;nós&quot;) coleta, usa e divulga suas informações pessoais quando você usa nossos serviços, sites",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      ", e software (coletivamente, os &quot;Serviços&quot;).",
    policyAgreement:
      "Leia esta Política de Privacidade com atenção e certifique-se de que a compreende. Ao utilizar qualquer um dos nossos Serviços, você concorda com esta Política de Privacidade. Caso não concorde com o uso dos seus dados pessoais em conformidade com esta Política, você deverá interromper imediatamente o uso dos nossos Serviços.",
    policyOverview:
      "Nesta política, descrevemos: quais dados coletamos e por quê; como seus dados são tratados; e seus direitos em relação aos seus dados. Não vendemos seus dados.",
    scopeTitle: "1. Âmbito desta Política de Privacidade",
    whatWeCollectTitle: "2. O que coletamos e por quê",
    accessShareTitle: "3. Quando acessamos ou compartilhamos suas informações",
    secureDataTitle: "4. Como protegemos seus dados",
    deleteContentTitle: "5. O que acontece quando você exclui seu conteúdo",
    locationTitle: "6. Localização do site e dos dados",
    childrenPrivacyTitle: "7. Privacidade das crianças",
    updatesTitle: "8. Atualizações desta Política de Privacidade",
    contactUsTitle: "9. Contate-nos",
    identityAccessTitle: "2.1 Identidade e acesso",
    billingInfoTitle: "2.2 Informações de cobrança",
    productInteractionsTitle: "2.3 Interações do produto",
    websiteInteractionsTitle: "2.4 Interações no site",
    cookiesTitle: "2.5 Cookies",
    voluntaryCorrespondenceTitle: "2.6 Correspondência voluntária",
    scopeContent:
      "Esta Política de Privacidade aplica-se apenas à nossa coleta e processamento de informações sobre os usuários dos Serviços. Esta Política de Privacidade não se aplica a quaisquer serviços, sites ou softwares operados por terceiros que estejam vinculados a nós (sejam esses links fornecidos por nós ou compartilhados por outros usuários), nem se aplica a conteúdo, dados, aplicativos ou materiais de terceiros. Recomendamos que você verifique as políticas de privacidade de qualquer site ou software de terceiros antes de fornecer qualquer informação a eles.",
    collectPrinciple:
      "Nosso princípio norteador é coletar apenas o que precisamos. Veja o que isso significa na prática:",
    identityAccessContent:
      "Ao se cadastrar em um de nossos produtos, solicitamos informações de identificação, como seu nome e endereço de e-mail. Isso visa fornecer funcionalidades essenciais do produto e permitir o envio de atualizações e outras informações essenciais.",
    billingInfoContent:
      "Ao se inscrever em um produto pago, você será solicitado a fornecer suas informações de pagamento e endereço de cobrança. As informações de pagamento são enviadas diretamente ao nosso processador de pagamentos e não chegam aos nossos servidores.",
    productInteractionsContent:
      "Armazenamos em nossos servidores o conteúdo que você carrega, recebe ou mantém em suas contas de produtos. A menos que você exclua esse conteúdo, podemos mantê-lo enquanto sua conta estiver ativa.",
    websiteInteractionsContent:
      "Coletamos informações sobre sua atividade de navegação para fins analíticos e estatísticos, como testes de taxa de conversão e experimentação com novos designs de produtos. Isso inclui, por exemplo, as versões do seu navegador e sistema operacional, seu endereço IP, quais páginas da web você visitou e quanto tempo elas levaram para carregar, e qual site o encaminhou para nós. Se você tiver uma conta e estiver conectado, esses dados de análise da web serão vinculados ao seu endereço IP e à sua conta de usuário até que sua conta não esteja mais ativa.",
    cookiesContent1:
      "Também usamos cookies primários persistentes e alguns cookies de terceiros para armazenar determinadas preferências, facilitar o uso de nossos aplicativos e realizar testes A/B, além de dar suporte a algumas análises.",
    cookiesContent2:
      "Um cookie é um pedaço de texto armazenado pelo seu navegador. Ele pode ajudar a lembrar informações de login e preferências do site. Também pode coletar informações como o tipo de navegador, sistema operacional, páginas visitadas, duração da visita, conteúdo visualizado e outros dados de fluxo de cliques. Você pode ajustar as configurações de retenção de cookies e aceitar ou bloquear cookies individuais nas configurações do seu navegador, embora nossos aplicativos não funcionem e outros aspectos do nosso serviço possam não funcionar corretamente se você desativar os cookies.",
    voluntaryCorrespondenceContent:
      "Quando você nos envia um e-mail com uma dúvida ou para pedir ajuda, guardamos essa correspondência, incluindo seu endereço de e-mail, para que tenhamos um histórico de correspondências anteriores para referência caso você entre em contato conosco no futuro.",
    accessShareContent1:
      "Para fornecer produtos ou serviços que você solicitou. Utilizamos alguns subprocessadores terceirizados para ajudar a executar nossos aplicativos e fornecer os Serviços a você. Isso inclui provedores de nuvem e análise.",
    accessShareContent2:
      "Para investigar, prevenir ou tomar medidas em relação a abusos. Acessar a conta de um cliente durante a investigação de possíveis abusos é uma medida de último recurso. Queremos proteger a privacidade e a segurança tanto de nossos clientes quanto das pessoas que nos relatam problemas, e fazemos o possível para equilibrar essas responsabilidades ao longo do processo. Se descobrirmos que você está usando nossos produtos para uma finalidade restrita, tomaremos as medidas necessárias, incluindo notificar as autoridades competentes, quando necessário.",
    accessShareContent3: "Quando exigido pela legislação aplicável.",
    userDataRequests:
      "- Solicitações de dados do usuário. Nossa política é não responder a solicitações governamentais de dados do usuário, a menos que sejamos obrigados por processo legal ou, em circunstâncias limitadas, em caso de solicitação emergencial. No entanto, se as autoridades policiais dos EUA tiverem o mandado, intimação criminal ou ordem judicial necessária exigindo que compartilhemos dados, devemos obedecer. Da mesma forma, somente responderemos a solicitações de autoridades governamentais fora dos EUA se obrigados pelo governo dos EUA por meio de procedimentos descritos em um tratado ou acordo de assistência jurídica mútua. Nossa política é notificar os usuários afetados antes de compartilharmos dados, a menos que sejamos legalmente proibidos de fazê-lo e exceto em alguns casos de emergência.",
    preservationRequests:
      "- Solicitações de preservação. Da mesma forma, nossa política é atender a solicitações de preservação de dados somente se exigido pela Lei Federal de Comunicações Armazenadas dos EUA, 18 USC Seção 2703(f), ou por uma intimação americana devidamente notificada para questões civis. Não compartilhamos dados preservados, a menos que seja exigido por lei ou obrigado por uma ordem judicial da qual optamos por não recorrer. Além disso, a menos que recebamos um mandado, ordem judicial ou intimação adequados antes do término do período de preservação exigido, destruiremos quaisquer cópias preservadas dos dados do cliente ao final do período de preservação.",
    taxAudit:
      "- Caso sejamos auditados por uma autoridade fiscal, poderemos ser obrigados a compartilhar informações relacionadas à cobrança. Nesse caso, compartilharemos apenas o mínimo necessário, como endereços de cobrança e informações sobre isenção fiscal.",
    secureDataContent1: "Todos os dados são criptografados via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "quando transmitidos de nossos servidores para seu navegador.",
    deleteContentContent:
      "Se você excluir qualquer conteúdo, ele ficará imediatamente inacessível.",
    locationContent:
      "Nossos produtos e outras propriedades da web são operados nos Estados Unidos. Se você estiver localizado na União Europeia, no Reino Unido ou em qualquer outro lugar fora dos Estados Unidos, esteja ciente de que quaisquer informações que você nos fornecer serão transferidas e armazenadas nos Estados Unidos. Ao utilizar nossos sites ou Serviços e/ou nos fornecer suas informações pessoais, você concorda com essa transferência.",
    childrenPrivacyContent:
      "Os Serviços não são destinados a crianças e não coletamos intencionalmente Informações Pessoais de crianças menores de 13 anos. Se você tiver menos de 13 anos, não envie nenhuma informação pessoal por meio dos Serviços. Se você acredita que uma criança nos forneceu Informações Pessoais em violação a esta Política, entre em contato conosco conforme indicado abaixo.",
    updatesContent:
      "Podemos atualizar esta política conforme necessário para cumprir com as regulamentações relevantes e refletir quaisquer novas práticas. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página.",
    contactUsContent1:
      "Se você tiver alguma dúvida, comentário ou reclamação sobre nossa Política de Privacidade, por favor",
    contactUs: "Contate-nos",
    contactUsContent2:
      "e nos esforçaremos para lidar com sua reclamação o mais rápido possível."
  },
  termsOfService: {
    termsOfServiceTitle: "Termos de Serviço",
    lastUpdated: "Última atualização: 21 de setembro de 2022",
    thankYouMessage: "Obrigado por usar nossos produtos!",
    companyReference:
      "Quando dizemos &quot;Empresa&quot;, &quot;nós&quot;, &quot;nosso&quot; ou &quot;nos&quot; neste documento, estamos nos referindo à Scribify.",
    servicesDefinition:
      "Quando dizemos &quot;Serviços&quot;, queremos dizer qualquer produto criado e mantido pela Scribify, seja entregue em um navegador da web, aplicativo de desktop, aplicativo móvel ou outro formato.",
    termsUpdateNotice:
      "Poderemos atualizar estes Termos de Serviço no futuro. Normalmente, essas alterações visam esclarecer alguns destes termos, vinculando-os a uma política relacionada mais detalhada. Sempre que fizermos uma alteração significativa em nossas políticas, atualizaremos a data no topo desta página e tomaremos as medidas cabíveis para notificar os titulares das contas.",
    acceptanceOfAgreementTitle: "1. Aceitação do Acordo",
    scribifyServicesTitle: "2. Serviços do Scribify",
    accountTermsTitle: "3. Termos da conta",
    paymentRefundsTitle: "4. Pagamento, Reembolsos e Alterações de Plano",
    cancellationTerminationTitle: "5. Cancelamento e Rescisão",
    submissionsTitle: "6. Submissões",
    uptimeSecurityTitle: "7. Tempo de atividade e segurança",
    siteManagementTitle: "8. Gerenciamento do Site",
    copyrightContentTitle: "9. Direitos autorais e propriedade de conteúdo",
    prohibitedActivitiesTitle: "10. Atividades Proibidas",
    featuresBugsTitle: "11. Recursos e bugs",
    correctionsTitle: "12. CORREÇÕES",
    userDataTitle: "13. Dados do Usuário",
    privacyPolicyTitle: "14. Política de Privacidade",
    liabilityTitle: "15. Responsabilidade",
    miscellaneousTitle: "16. Diversos",
    contactUsTitle: "17. Contate-nos",
    acceptanceContent1:
      "Ao utilizar nossos Serviços, você indica sua aceitação deste Contrato, que se torna um contrato vinculativo entre você e a Scribify. Você declara que tem capacidade legal para aceitar estes Termos e afirma ser maior de idade para firmar um contrato vinculativo. A aceitação pela Scribify está expressamente condicionada à sua concordância com todos os termos e condições deste Contrato.",
    acceptanceContent2:
      "Os Serviços não se destinam e não devem ser usados por menores de 18 anos. Ao usar os Serviços, você declara e garante que atende ao requisito de elegibilidade acima.",
    acceptanceContent3:
      "Os termos &quot;você&quot;, &quot;seu&quot;, &quot;você mesmo&quot; também incluem seus funcionários, agentes, representantes comerciais e quaisquer outros indivíduos aos quais você concede acesso aos Serviços por meio de sua Conta (conforme definido abaixo). Você é responsável por garantir que todas as pessoas que acessam os Serviços por meio de sua conta estejam cientes destes Termos e os cumpram.",
    acceptanceContent4:
      "A Scribify reserva-se o direito de revisar e atualizar estes Termos periodicamente, a seu exclusivo critério. Todas as alterações entram em vigor imediatamente após sua publicação. O uso contínuo dos Serviços após a publicação dos Termos revisados significa que você aceita e concorda com as alterações. Recomendamos que você consulte esta página periodicamente para estar ciente de quaisquer alterações, pois elas são vinculativas.",
    servicesContent1:
      "Nossos serviços permitem que os usuários transformem conversas de voz em texto transcrito que pode ser pesquisado, traduzido e compartilhado com outras pessoas.",
    servicesContent2:
      "Você pode escolher se deseja usar a versão gratuita dos Serviços (&quot;Serviços Gratuitos&quot;) ou a versão paga baseada em assinatura dos Serviços, pela qual você pode ser obrigado a pagar taxas (os &quot;Serviços Pagos&quot;).",
    servicesContent3:
      "Nós disponibilizaremos os Serviços a você. Você é responsável por tomar todas as providências necessárias para ter acesso aos Serviços.",
    accountTerms1:
      "- Você é responsável por manter a segurança da sua conta. A Empresa não pode e não será responsável por qualquer perda ou dano decorrente do seu descumprimento desta obrigação de segurança.",
    accountTerms2:
      "- Você não pode usar os Serviços para nenhuma finalidade ilegal, antiética ou imoral.",
    accountTerms3:
      "- Você é responsável por todo o conteúdo publicado e atividades que ocorrem em sua conta. Isso inclui conteúdo publicado por outras pessoas que: (a) tenham acesso às suas credenciais de login; ou (b) tenham seus próprios logins em sua conta.",
    accountTerms4:
      "- Você deve ser humano. Contas registradas por &quot;bots&quot; ou outros métodos automatizados não são permitidas.",
    paymentContent1:
      "- Para Serviços pagos que oferecem um teste gratuito, explicamos a duração do teste no momento da assinatura. Após o período de teste, você precisa pagar antecipadamente para continuar usando o Serviço. Se você não pagar, esses serviços serão encerrados.",
    paymentContent2:
      "- Se você estiver atualizando de um plano gratuito para um plano pago, cobraremos seu cartão imediatamente e seu ciclo de cobrança começará no dia da atualização.",
    paymentContent3:
      "- Todas as taxas excluem todos os impostos, taxas ou encargos cobrados pelas autoridades fiscais. Quando necessário, cobraremos esses impostos em nome da autoridade fiscal e os remeteremos às autoridades fiscais. Caso contrário, você será responsável pelo pagamento de todos os impostos, taxas ou encargos.",
    paymentContent4:
      "- Todas as compras não são reembolsáveis. Você pode cancelar qualquer serviço pago a qualquer momento, acessando sua conta. Para assinaturas pagas, o cancelamento entrará em vigor ao final do período pago atual, salvo indicação em contrário.",
    cancellationContent1:
      "- Se você cancelar o Serviço antes do término de qualquer período pago, o cancelamento entrará em vigor imediatamente e você não será cobrado novamente. Não rateamos automaticamente o tempo não utilizado no último ciclo de cobrança.",
    cancellationContent2:
      "- Temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro de nossos Serviços por qualquer motivo e a qualquer momento. Suspensão significa que você não poderá acessar a conta ou qualquer conteúdo nela contido. O encerramento resultará, além disso, na exclusão da sua conta ou do seu acesso à sua conta, e na perda e renúncia de todo o conteúdo da sua conta. Também nos reservamos o direito de recusar o uso dos Serviços a qualquer pessoa, por qualquer motivo e a qualquer momento. Temos esta cláusula porque, estatisticamente falando, das centenas de milhares de contas em nossos Serviços, há pelo menos uma praticando atos ilícitos.",
    cancellationContent3:
      "- Abuso verbal, físico, escrito ou de outro tipo (incluindo ameaças de abuso ou retaliação) contra funcionários ou executivos da Empresa pode resultar no encerramento imediato da conta.",
    submissionsContent:
      "Você reconhece e concorda que quaisquer perguntas, comentários, sugestões, ideias, feedback ou outras informações relativas ao Site (&quot;Envios&quot;) fornecidos por você não são confidenciais e se tornarão nossa propriedade exclusiva. Deteremos direitos exclusivos, incluindo todos os direitos de propriedade intelectual, e teremos o direito de usar e disseminar irrestritamente estes Envios para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você. Você, por meio deste, renuncia a todos os direitos morais sobre tais Envios e garante que tais Envios são originais e que você tem o direito de enviá-los. Você concorda que não haverá recurso contra nós por qualquer violação ou apropriação indevida, alegada ou real, de qualquer direito de propriedade sobre seus Envios.",
    uptimeContent1:
      "- O uso dos Serviços é por sua conta e risco. Fornecemos estes Serviços &quot;no estado em que se encontram&quot; e &quot;conforme disponíveis&quot;. Não oferecemos contratos de nível de serviço para a maioria dos nossos Serviços, mas levamos a sério o tempo de atividade dos nossos aplicativos.",
    uptimeContent2:
      "- Reservamo-nos o direito de desativar temporariamente sua conta caso seu uso exceda significativamente o uso típico dos Serviços por outros clientes. Obviamente, entraremos em contato com você antes de tomar qualquer medida, exceto em casos raros em que o nível de uso possa impactar negativamente o desempenho do Serviço para outros clientes.",
    uptimeContent3:
      "- Tomamos diversas medidas para proteger e proteger seus dados por meio de backups, redundâncias e criptografia. Aplicamos criptografia para transmissão de dados pela internet pública.",
    uptimeContent4:
      "- Usamos fornecedores terceirizados e parceiros de hospedagem para fornecer o hardware, software, rede, armazenamento e tecnologia relacionada necessários para executar os Serviços.",
    siteManagementContent:
      "Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar o Site em busca de violações destes Termos de Serviço; (2) tomar as medidas legais cabíveis contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos de Serviço, incluindo, sem limitação, denunciar tal usuário às autoridades policiais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir o acesso, limitar a disponibilidade ou desabilitar (na medida em que for tecnologicamente viável) qualquer uma de suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso ou responsabilidade, remover do Site ou desabilitar de outra forma todos os arquivos e conteúdos que sejam excessivos em tamanho ou que sejam de alguma forma onerosos para nossos sistemas; e (5) gerenciar o Site de outra forma projetada para proteger nossos direitos e propriedade e para facilitar o funcionamento adequado do Site.",
    copyrightContent1:
      "- Todo o conteúdo publicado nos Serviços deve estar em conformidade com a lei de direitos autorais dos EUA.",
    copyrightContent2:
      "- Não reivindicamos direitos de propriedade intelectual sobre o material que você fornece aos Serviços. Todos os materiais enviados permanecem seus.",
    copyrightContent3:
      "- Não fazemos uma triagem prévia do conteúdo, mas nos reservamos o direito (mas não a obrigação), a nosso exclusivo critério, de recusar ou remover qualquer conteúdo que esteja disponível por meio do Serviço.",
    copyrightContent4:
      "- Os nomes, a aparência e a funcionalidade dos Serviços são protegidos por direitos autorais © da Empresa. Todos os direitos reservados. Você não pode duplicar, copiar ou reutilizar qualquer parte do HTML, CSS, JavaScript ou elementos de design visual sem a permissão expressa por escrito da Empresa. Você deve solicitar permissão para usar o logotipo da Empresa ou qualquer logotipo dos Serviços para fins promocionais.",
    emailUs: "envie-nos um e-mail",
    copyrightContent5:
      "solicitações de uso de logotipos. Reservamo-nos o direito de revogar esta permissão caso você viole estes Termos de Serviço.",
    copyrightContent6:
      "- Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços, uso dos Serviços ou acesso aos Serviços sem a permissão expressa por escrito da Empresa.",
    copyrightContent7:
      "- Você não deve modificar outro site de modo a implicar falsamente que ele está associado aos Serviços ou à Empresa.",
    copyrightContent8:
      "- Respeitamos os direitos de propriedade intelectual de terceiros. Se você acredita que qualquer material disponível no Site ou por meio dele infringe quaisquer direitos autorais que você possui ou controla, entre em contato imediatamente.",
    contactUs: "Contate-nos",
    copyrightContent9:
      "Uma cópia da sua Notificação será enviada à pessoa que publicou ou armazenou o material abordado na Notificação. Esteja ciente de que, de acordo com a legislação aplicável, você poderá ser responsabilizado por danos caso faça declarações falsas em uma Notificação. Portanto, se você não tiver certeza de que o material localizado ou vinculado ao Site viola seus direitos autorais, considere primeiro entrar em contato com um advogado.",
    prohibitedActivitiesIntro:
      "Você não poderá acessar ou utilizar o Site para qualquer finalidade que não seja aquela para a qual o disponibilizamos. O Site não poderá ser utilizado em conexão com quaisquer empreendimentos comerciais, exceto aqueles que sejam especificamente endossados ou aprovados por nós.",
    prohibitedActivitiesUserAgreement:
      "Como usuário do Site, você concorda em não:",
    prohibitedActivity1:
      "- Recuperar sistematicamente dados ou outro conteúdo do Site para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa permissão por escrito.",
    prohibitedActivity2:
      "- Enganar, fraudar ou induzir a nós e a outros usuários em erro, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuários.",
    prohibitedActivity3:
      "- Contornar, desabilitar ou interferir de outra forma nos recursos de segurança do Site, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou impõem limitações ao uso do Site e/ou do Conteúdo nele contido.",
    prohibitedActivity4:
      "- Desprezar, manchar ou de outra forma prejudicar, em nossa opinião, nós e/ou o Site.",
    prohibitedActivity5:
      "- Usar qualquer informação obtida no Site para assediar, abusar ou prejudicar outra pessoa.",
    prohibitedActivity6:
      "- Fazer uso indevido de nossos serviços de suporte ou enviar relatórios falsos de abuso ou má conduta.",
    prohibitedActivity7:
      "- Usar o Site de maneira inconsistente com quaisquer leis ou regulamentos aplicáveis.",
    prohibitedActivity8:
      "- Envolver-se em enquadramento ou vinculação não autorizados ao Site.",
    prohibitedActivity9:
      "- Carregar ou transmitir (ou tentar carregar ou transmitir) vírus, cavalos de Troia ou outro material, incluindo uso excessivo de letras maiúsculas e spam (publicação contínua de texto repetitivo), que interfira no uso ininterrupto e no aproveitamento do Site por qualquer parte ou modifique, prejudique, interrompa, altere ou interfira no uso, recursos, funções, operação ou manutenção do Site.",
    prohibitedActivity10:
      "- Envolver-se em qualquer uso automatizado do sistema, como usar scripts para enviar comentários ou mensagens, ou usar qualquer mineração de dados, robôs ou ferramentas semelhantes de coleta e extração de dados.",
    prohibitedActivity11:
      "- Excluir o aviso de direitos autorais ou outros direitos de propriedade de qualquer Conteúdo.",
    prohibitedActivity12:
      "- Tentar se passar por outro usuário ou pessoa ou usar o nome de usuário de outro usuário.",
    prohibitedActivity13:
      "- Carregar ou transmitir (ou tentar carregar ou transmitir) qualquer material que atue como um mecanismo passivo ou ativo de coleta ou transmissão de informações, incluindo, sem limitação, formatos de intercâmbio gráfico transparentes (&quot;gifs&quot;), pixels 1×1, web bugs, cookies ou outros dispositivos semelhantes (às vezes chamados de &quot;spyware&quot; ou &quot;mecanismos de coleta passiva&quot; ou &quot;pcms&quot;).",
    prohibitedActivity14:
      "- Interferir, interromper ou criar uma carga indevida no Site ou nas redes ou serviços conectados ao Site.",
    prohibitedActivity15:
      "- Assediar, incomodar, intimidar ou ameaçar qualquer um dos nossos funcionários ou agentes envolvidos no fornecimento de qualquer parte do Site para você.",
    prohibitedActivity16:
      "- Tentar contornar quaisquer medidas do Site projetadas para impedir ou restringir o acesso ao Site ou a qualquer parte do Site.",
    prohibitedActivity17:
      "- Copiar ou adaptar o software do Site, incluindo, mas não se limitando a Flash, PHP, HTML, JavaScript ou outro código.",
    prohibitedActivity18:
      "- Exceto quando permitido pela lei aplicável, decifrar, descompilar, desmontar ou fazer engenharia reversa de qualquer software que componha ou de qualquer forma faça parte do Site.",
    prohibitedActivity19:
      "- Exceto quando for resultado do uso de mecanismos de busca padrão ou navegadores da Internet, usar, lançar, desenvolver ou distribuir qualquer sistema automatizado, incluindo, sem limitação, qualquer spider, robô, utilitário de trapaça, scraper ou leitor offline que acesse o Site, ou usar ou lançar qualquer script não autorizado ou outro software.",
    prohibitedActivity20:
      "- Utilize um agente de compras ou agente de compras para fazer compras no Site.",
    prohibitedActivity21:
      "- Fazer qualquer uso não autorizado do Site, incluindo a coleta de nomes de usuários e/ou endereços de e-mail de usuários por meios eletrônicos ou outros, com a finalidade de enviar e-mails não solicitados, ou criar contas de usuários por meios automatizados ou sob falsos pretextos.",
    prohibitedActivity22:
      "- Usar o Site como parte de qualquer esforço para competir conosco ou usar o Site e/ou o Conteúdo para qualquer empreendimento de geração de receita ou empreendimento comercial.",
    prohibitedActivity23:
      "- Usar o Site para anunciar ou oferecer a venda de produtos e serviços.",
    prohibitedActivity24: "- Vender ou transferir seu perfil.",
    featuresContent1:
      "Projetamos nossos Serviços com cuidado, com base em nossa própria experiência e nas experiências de clientes que compartilham seu tempo e feedback. No entanto, não existe um serviço que agrade a todos. Não garantimos que nossos Serviços atenderão às suas necessidades ou expectativas específicas.",
    featuresContent2:
      "Também testamos todos os nossos recursos antes de lançá-los. Como acontece com qualquer software, nossos Serviços inevitavelmente apresentam alguns bugs. Monitoramos os bugs relatados e os solucionamos, especialmente aqueles relacionados à segurança ou privacidade. Nem todos os bugs relatados serão corrigidos e não garantimos que os Serviços estejam completamente livres de erros.",
    correctionsContent1:
      "Pode haver informações no Site que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e diversas outras informações. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações no Site a qualquer momento, sem aviso prévio.",
    correctionsContent2:
      "Não podemos garantir que o Site estará disponível o tempo todo. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenção relacionada ao Site, resultando em interrupções, atrasos ou erros. Reservamo-nos o direito de alterar, revisar, atualizar, suspender, descontinuar ou modificar o Site a qualquer momento ou por qualquer motivo, sem aviso prévio. Você concorda que não temos qualquer responsabilidade por qualquer perda, dano ou inconveniência causada pela sua incapacidade de acessar ou usar o Site durante qualquer período de inatividade ou descontinuação do Site. Nada nestes Termos de Serviço será interpretado como uma obrigação para nós de manter e dar suporte ao Site ou de fornecer quaisquer correções, atualizações ou lançamentos relacionados a ele.",
    userDataContent:
      "Manteremos determinados dados que você transmitir ao Site com a finalidade de gerenciar o desempenho do Site, bem como dados relacionados ao seu uso do Site. Embora realizemos backups regulares de dados, você é o único responsável por todos os dados que transmitir ou que se relacionem a qualquer atividade que tenha realizado usando o Site. Você concorda que não teremos qualquer responsabilidade perante você por qualquer perda ou corrupção de tais dados e, por meio deste, renuncia a qualquer direito de ação contra nós decorrente de tal perda ou corrupção de tais dados.",
    privacyPolicyContent1:
      "Preocupamo-nos com a privacidade e a segurança dos dados. Consulte a nossa Política de Privacidade.",
    privacyPolicy: "política de Privacidade",
    privacyPolicyContent2:
      "Ao utilizar o Site, você concorda em estar vinculado à nossa Política de Privacidade, que está incorporada a estes Termos de Serviço. Informamos que o Site está hospedado nos Estados Unidos. Se você acessar o Site de qualquer outra região do mundo com leis ou outros requisitos que regem a coleta, o uso ou a divulgação de dados pessoais diferentes das leis aplicáveis nos Estados Unidos, ao continuar usando o Site, você estará transferindo seus dados para os Estados Unidos e concorda que seus dados sejam transferidos e processados nos Estados Unidos.",
    liabilityIntro:
      "Mencionamos a responsabilidade ao longo destes Termos, mas para colocar tudo em uma seção:",
    liabilityContent:
      "Você expressamente entende e concorda que a Empresa não será responsável, em lei ou em equidade, perante você ou qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, lucros cessantes, especiais, consequenciais, punitivos ou exemplares, incluindo, mas não se limitando a, danos por perda de lucros, ágio, uso, dados ou outras perdas intangíveis (mesmo que a Empresa tenha sido avisada da possibilidade de tais danos), resultantes de: (1) o uso ou a incapacidade de usar os Serviços; (2) erros, enganos ou imprecisões de conteúdo e materiais; (3) danos pessoais ou materiais, de qualquer natureza, resultantes do seu acesso e uso do site; (4) o custo de aquisição de bens e serviços substitutos resultantes de quaisquer bens, dados, informações ou serviços adquiridos ou obtidos ou mensagens recebidas ou transações realizadas por meio ou a partir dos Serviços; (5) qualquer acesso ou uso não autorizado de nossos servidores seguros e/ou quaisquer e todas as informações pessoais e/ou informações financeiras armazenadas neles; (6) qualquer interrupção ou cessação de transmissão de ou para o site; (7) quaisquer bugs, vírus, cavalos de Troia ou similares que possam ser transmitidos ao site ou por meio dele por terceiros e/ou; (8) quaisquer erros ou omissões em qualquer conteúdo e materiais ou por qualquer perda ou dano de qualquer tipo incorrido como resultado do uso de qualquer conteúdo publicado, transmitido ou de outra forma disponibilizado por meio do site; (9) declarações ou conduta de terceiros no serviço; (10) ou qualquer outro assunto relacionado a estes Termos de Serviço ou aos Serviços, seja como quebra de contrato, ato ilícito (incluindo negligência ativa ou passiva) ou qualquer outra teoria de responsabilidade.",
    miscellaneousContent:
      "Estes Termos de Serviço e quaisquer políticas ou regras operacionais publicadas por nós no Site ou em relação ao Site constituem o acordo e entendimento integral entre você e nós. Nossa falha em exercer ou executar qualquer direito ou disposição destes Termos de Serviço não operará como uma renúncia de tal direito ou disposição. Estes Termos de Serviço operam na máxima extensão permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a terceiros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou omissão de ação causados por qualquer causa além do nosso controle razoável. Se qualquer disposição ou parte de uma disposição destes Termos de Serviço for determinada ilegal, nula ou inexequível, essa disposição ou parte da disposição será considerada separável destes Termos de Serviço e não afetará a validade e a exequibilidade de quaisquer disposições restantes. Não há nenhuma relação de joint venture, parceria, emprego ou agência criada entre você e nós como resultado destes Termos de Serviço ou do uso do Site. Você concorda que estes Termos de Serviço não serão interpretados contra nós em virtude de tê-los elaborado. Você renuncia a toda e qualquer defesa que possa ter com base no formato eletrônico destes Termos de Serviço e na falta de assinatura pelas partes para executar estes Termos de Serviço.",
    contactUsContent1:
      "Se você tiver alguma dúvida sobre qualquer um dos Termos de Serviço, por favor",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
