let message = {
  // 首頁
  HomePage: {
    home: "首頁",
    version: "基礎版本（免費）：",
    times: "每天免費轉錄 {times} 次，您還有 {left} 次轉錄機會。",
    tips: "升級到專業版以獲得無限轉錄。",
    update: "立即升級",
    folders: "資料夾",
    rename: "重新命名",
    delete: "刪除",
    createTitle: "建立資料夾",
    deleteConfirm: "您確定要刪除此資料夾及其中的所有檔案嗎？",
    cancel: "取消",
    confirm: "建立",
    dialogLabel: "資料夾名稱",
    recently: "最近檔案",
    tour: {
      step0: {
        title: "歡迎使用 {name}",
        tip: "在這裡，您可以：",
        content: "轉錄一次性對話、會議、講座等",
        next: "開始使用"
      },
      step1: {
        title: "轉錄檔案",
        content: "支援三種轉錄方式：本地檔案、連結和錄音。"
      },
      step2: {
        title: "建立資料夾",
        content: '點擊"+"建立資料夾並整理您的檔案。'
      },
      step3: {
        title: "查看轉錄詳情並編輯",
        content: "點擊項目以查看轉錄詳情並進行編輯和翻譯。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "匯出",
      title: "我們正在生成您的匯出檔案",
      title2: "您的檔案已準備就緒",
      singleLoadingContent: "正在壓縮 1 個檔案。",
      singleSuccessContent: "已壓縮 1 個檔案。",
      loadingContent: "正在壓縮 {num} 個檔案。",
      successContent: "已壓縮 {num} 個檔案。",
      cancel: "取消匯出",
      error: "匯出錯誤",
      dialog: {
        title: "警告",
        content: "取消匯出？",
        cancel: "取消匯出",
        continue: "繼續匯出"
      }
    },
    welcome: {
      title: "歡迎使用 Scribify！",
      description: "在這裡，您可以：",
      transcribe:
        "使用 Scribify 輕鬆轉錄—瞬間將語音對話轉換為清晰、可搜尋和可共享的文字。",
      precision: "立即獲得帶有說話者識別和時間戳的精確轉錄。",
      translate: "打破語言障礙：輕鬆將轉錄翻譯成200多種語言。",
      edit: "編輯、完善並以適合您需求的格式匯出轉錄文字。",
      collaborate: "通過與他人共享轉錄文字進行協作。",
      button: "開始使用",
      tip: "準備好將音訊轉換為轉錄文字了嗎？現在就開始探索！"
    },
    subscriptionModal: {
      left: {
        title: "獲取專業版解鎖更多功能",
        c1: "無限轉錄",
        c2: "10小時上傳",
        c3: "最高優先級",
        c4: "99%轉錄準確率",
        c5: "支援100多種語言",
        c6: "說話者識別",
        c7: "轉錄翻譯",
        t1: "為一個人提供無限轉錄。",
        t2: "每個檔案可長達10小時/5 GB。一次上傳50個檔案。",
        t3: "我們將始終以最高優先級盡快轉錄您的檔案。"
      },
      right: {
        title: "獲取專業版",
        yearly: "年付",
        monthly: "月付",
        save: "節省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一個月",
        afterwards: "之後"
      },
      subscribe: "訂閱"
    }
  },
  // 文件夾頁
  FolderPage: {
    table: {
      name: "名稱",
      duration: "時長",
      status: "狀態",
      date: "創建日期",
      activity: "活動",
      empty1: "這裡是空的。",
      empty2: "點擊上方按鈕轉錄檔案。",
      just: "剛剛",
      export: "匯出",
      delete: "刪除",
      share: "分享",
      rename: "重新命名",
      move: "移動",
      failed: "失敗",
      selected: "已選擇",
      success: "成功"
    },
    dialog: {
      move: {
        title: "移動",
        label: "選擇資料夾",
        placeholder: "選擇資料夾",
        confirm: "移動",
        cancel: "取消"
      },
      rename: {
        title: "重新命名",
        label: "檔案名",
        confirm: "重新命名",
        cancel: "取消"
      },
      delete: {
        title: "刪除",
        file: "檔案",
        files: "檔案",
        label: "確認刪除？此操作無法撤銷。",
        confirm: "刪除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何擁有以下安全連結的人都可以查看此轉錄文本和相關的媒體檔案。",
        confirm: "複製連結",
        success: "複製成功"
      },
      export: {
        title: "匯出",
        select: "選擇一個或多個格式",
        settings: "設定",
        speaker: "包含說話人",
        timecodes: "包含時間碼",
        confirm: "匯出",
        cancel: "取消",
        selectErr: "請選擇一個或多個格式"
      }
    },
    search: {
      placeholder: "搜尋"
    },
    recently: "最近",
    record: "錄音",
    transcribe: "轉錄",
    unclassified: "未分類資料夾",
    buttons: {
      transcribe: "轉錄檔案",
      url: "轉錄連結",
      record: "錄音並轉錄",
      recording: "錄音中..."
    },
    delSuccess: "刪除成功",
    create: "建立"
  },
  // 文件上傳與錄音
  FileUploadAndRecording: {
    record: {
      record: "錄音",
      pause: "暫停",
      resume: "繼續",
      stop: "停止",
      delete: "刪除",
      transcribe: "轉錄",
      permissionDenied: "麥克風權限被拒絕或設備不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您確定要刪除此錄音嗎？",
          confirm: "刪除",
          cancel: "取消"
        },
        complete: {
          title: "錄音完成",
          label: "錄音已達到10小時並自動停止。請進行轉錄。",
          confirm: "知道了"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "轉錄線上媒體",
        title: "貼上連結",
        label:
          "貼上以下平台但不限於：YouTube、Facebook、X、Dropbox、Google Drive、Vimeo 的媒體連結",
        confirm: "轉錄",
        cancel: "取消",
        errorTitle: "您輸入的連結地址不正確。請檢查後重試。",
        linkName: "連結"
      },
      file: {
        orTitle: "轉錄線上媒體",
        dialogTitle: "轉錄檔案",
        tip: "點擊上傳或拖拽放置",
        or: "或"
      },
      del: {
        title: "警告",
        content: "所有進度將遺失。確認取消轉錄？",
        cancel: "確認取消",
        confirm: "繼續轉錄"
      },
      files: "檔案",
      resultDialogTitle: "轉錄檔案",
      cancel: "取消",
      confirm: "轉錄",
      return: "返回",
      addMore: "添加更多",
      language: "音頻語言",
      failed: "失敗",
      tooLarge: "檔案太大。",
      fileFormat: "檔案格式不被允許",
      localFiles: "本地檔案",
      pasteLink: "貼上連結",
      uploadErr: "上傳錯誤",
      hashErr: "哈希錯誤",
      table: {
        status: "狀態",
        file: "檔案",
        size: "大小",
        noData: "無數據"
      },
      maxFileNum: "檔案數量不能超過 {num}。",
      speaker: "說話者辨識",
      speakerLabel: "標註轉錄文本中各片段的說話者身份"
    }
  },
  // 轉錄詳情頁
  TranscriptionPage: {
    edit: "編輯",
    translate: "翻譯",
    showSpeaker: "顯示說話人",
    showTimestamp: "顯示時間戳",
    share: "分享",
    shared: "已分享",
    export: "匯出",
    speaker: "說話人_{ id }",
    unassignSpeaker: "取消分配說話人",
    play: "播放",
    save: "保存",
    undo: "撤銷",
    redo: "重做",
    confirm: "確認",
    cancel: "取消",
    addNew: "添加新項",
    createANewSpeaker: "建立新說話人",
    speakerName: "說話人名稱",
    addSpeaker: "添加說話人",
    applyToAllMatchingSpeakers: "應用於所有匹配的說話人",
    cancelTranslation: "取消翻譯",
    showVideo: "顯示視頻",
    hideVideo: "隱藏視頻",
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜尋語言",
      noMatch: "未找到匹配的語言",
      English: "英語",
      "English(US)": "英語（美國）",
      "English(UK)": "英語（英國）",
      Spanish: "西班牙語",
      Portuguese: "葡萄牙語",
      French: "法語",
      Italian: "義大利語",
      German: "德語",
      Dutch: "荷蘭語",
      Polish: "波蘭語",
      Danish: "丹麥語",
      Japanese: "日語",
      Korean: "韓語",
      Hungarian: "匈牙利語",
      Czech: "捷克語",
      Chinese: "中文",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Azerbaijani: "阿塞拜疆語",
      Estonian: "愛沙尼亞語",
      Belarusian: "白俄羅斯語",
      Bulgarian: "保加利亞語",
      Icelandic: "冰島語",
      Bosnian: "波斯尼亞語",
      Persian: "波斯語",
      Russian: "俄語",
      "Chinese(Traditional)": "繁體中文",
      Finnish: "芬蘭語",
      Kazakh: "哈薩克語",
      Galician: "加利西亞語",
      Catalan: "加泰羅尼亞語",
      "Chinese(Simplified)": "簡體中文",
      Kannada: "卡納達語",
      Croatian: "克羅地亞語",
      Latvian: "拉脫維亞語",
      Lithuanian: "立陶宛語",
      Romanian: "羅馬尼亞語",
      Marathi: "馬拉地語",
      Malay: "馬來語",
      Macedonian: "馬其頓語",
      Maori: "毛利語",
      Afrikaans: "南非語 (阿非利卡語)",
      Nepali: "尼泊爾語",
      Norwegian: "挪威語",
      Swedish: "瑞典語",
      Serbian: "塞爾維亞語",
      Slovak: "斯洛伐克語",
      Slovenian: "斯洛文尼亞語",
      Swahili: "斯瓦希里語",
      Tagalog: "菲律賓語",
      Tamil: "泰米爾語",
      Thai: "泰語",
      Turkish: "土耳其語",
      Welsh: "威爾士語",
      Urdu: "烏爾都語",
      Ukrainian: "烏克蘭語",
      Greek: "希臘語",
      Armenian: "亞美尼亞語",
      Hindi: "印地語",
      Indonesian: "印度尼西亞語",
      Vietnamese: "越南語",
      Albanian: "阿爾巴尼亞語",
      Amharic: "阿姆哈拉語",
      Assamese: "阿薩姆語",
      Occitan: "奧克語",
      Bashkir: "巴什基爾語",
      Basque: "巴斯克語",
      Breton: "布列塔尼語",
      Tibetan: "藏語",
      Faroese: "法羅語",
      Sanskrit: "梵語",
      Khmer: "高棉語",
      Georgian: "格魯吉亞語",
      Gujarati: "古吉拉特語",
      "Haitian Creole": "海地克里奧爾語",
      Hausa: "豪薩語",
      Latin: "拉丁語",
      Lao: "老撾語",
      Lingala: "林加拉語",
      Luxembourgish: "盧森堡語",
      Malagasy: "馬爾加什語",
      Maltese: "馬耳他語",
      Malayalam: "馬拉雅拉姆語",
      Mongolian: "蒙古語",
      Bengali: "孟加拉語",
      Burmese: "緬甸語",
      Punjabi: "旁遮普語",
      Pashto: "普什圖語",
      Sinhala: "僧伽羅語",
      Shona: "修納語",
      Somali: "索馬里語",
      Tajik: "塔吉克語",
      Tatar: "鞑靼語",
      Telugu: "泰盧固語",
      Turkmen: "土庫曼語",
      Uzbek: "烏茲別克語",
      Hawaiian: "夏威夷語",
      "Norwegian Nynorsk": "新挪威語",
      Sindhi: "信德語",
      Sundanese: "巽他語",
      Yiddish: "意第緒語",
      Yoruba: "約魯巴語",
      Javanese: "爪哇語",
      Cantonese: "粵語",
      Abkhaz: "阿布哈茲語",
      Afar: "阿法爾語",
      alz: "阿盧爾語",
      ach: "阿喬利語",
      awa: "阿瓦德語",
      Avaric: "阿瓦爾語",
      Ewe: "埃維語",
      Aymara: "艾馬拉語",
      Irish: "愛爾蘭語",
      Oriya: "奧利亞語",
      Oromo: "奧羅莫語",
      Ossetian: "奧塞梯語",
      tpi: "巴布亞皮欽語",
      bew: "巴達維語",
      ban: "巴厘語",
      btx: "巴塔克卡羅語",
      bbc: "巴塔克托巴語",
      bts: "巴塔克西馬隆貢語",
      bci: "巴烏雷語",
      Bambara: "班巴拉語",
      pag: "邦阿西楠語",
      pam: "邦板牙語",
      nso: "北索托語",
      bem: "奔巴語",
      bik: "比科爾語",
      bal: "俾路支語",
      bho: "博傑普爾語",
      bua: "布里亞特語",
      chm: "草原馬里語",
      Chamorro: "查莫羅語",
      Chechen: "車臣語",
      chk: "楚克語",
      Chuvash: "楚瓦什語",
      Tswana: "茨瓦納語",
      Tsonga: "聰加語",
      "fa-AF": "達里語",
      shn: "掸語",
      tet: "德頓語",
      Divehi: "迪維希語",
      dyu: "迪尤拉語",
      tiv: "蒂夫語",
      din: "丁卡語",
      doi: "多格拉語",
      "ndc-ZW": "恩道語",
      "South Ndebele": "恩德貝萊語（南部）",
      dov: "恩敦貝語",
      "bm-Nkoo": "恩科字母（西非書面文字）",
      "French(Canada)": "法語（加拿大）",
      Fijian: "斐濟語",
      fon: "豐語",
      "Western Frisian": "弗里西語",
      fur: "弗留利語",
      Fulah: "富拉尼語",
      Kongo: "剛果語",
      Kalaallisut: "格陵蘭語",
      gom: "貢根語",
      Guarani: "瓜拉尼語",
      cnh: "哈卡欽語",
      hrx: "洪斯呂克語",
      Kyrgyz: "吉爾吉斯語",
      ktu: "吉土巴語",
      gaa: "加語",
      kac: "景頗語",
      Kanuri: "卡努里語",
      kha: "卡西語",
      kek: "凱克其語",
      Komi: "科米語",
      Xhosa: "科薩語",
      Corsican: "科西嘉語",
      "crh-Latn": "克里米亞鞑靼語（拉丁文）",
      crh: "克里米亞鞑靼語（西里爾文）",
      Quechua: "克丘亞語",
      Kurdish: "庫爾德語（庫爾曼吉語）",
      ckb: "庫爾德語（索拉尼）",
      trp: "廓克博若克語",
      ltg: "拉特加萊語",
      lij: "利古里亞語",
      Limburgish: "林堡語",
      Kirundi: "隆迪語",
      luo: "盧奧語",
      Luganda: "盧干達語",
      Kinyarwanda: "盧旺達語",
      lmo: "倫巴第語",
      rom: "羅姆語",
      mad: "馬都拉語",
      Manx: "馬恩島語",
      mwr: "馬爾瓦迪語",
      "ms-Arab": "馬來語（爪夷文）",
      Marshallese: "馬紹爾語",
      mam: "瑪姆語",
      mai: "邁蒂利語",
      mfe: "毛里裘斯克里奧耳語",
      "mni-Mtei": "梅泰語（曼尼普爾語）",
      min: "米南語",
      lus: "米佐語",
      hmn: "苗語",
      nhe: "納瓦特爾語（東部瓦斯特卡）",
      "Southern Sotho": "南索托語",
      new: "尼泊爾語言（尼瓦爾語）",
      nus: "努爾語",
      pap: "帕皮阿門托語",
      "pa-Arab": "旁遮普語（沙木基文）",
      "pt-PT": "葡萄牙語（葡萄牙）",
      Chichewa: "齊切瓦語",
      cgg: "奇加語",
      lua: "奇盧伯語",
      Akan: "契維語",
      zap: "薩巴特克語",
      "Northern Sami": "薩米語（北部）",
      Samoan: "薩摩亞語",
      kri: "塞拉利昂克里奧爾語",
      crs: "塞舌爾克里奧爾語",
      Sango: "桑戈語",
      "sat-Latn": "桑塔利語（拉丁文）",
      sat: "桑塔利語（歐甘文）",
      Esperanto: "世界語",
      Swati: "斯瓦特語",
      "Scottish Gaelic": "蘇格蘭蓋爾語",
      sus: "蘇蘇語",
      ceb: "宿務語",
      ber: "塔馬齊格特語（提非納文）",
      "ber-Latn": "塔馬塞特語",
      Tahitian: "塔希提語",
      Tonga: "湯加語",
      Tigrinya: "提格里尼亞語",
      tcy: "圖魯語",
      tum: "圖姆布卡語",
      tyv: "圖瓦語",
      war: "瓦瑞語",
      mak: "望加錫語",
      vec: "威尼斯語",
      Uyghur: "維吾爾語",
      Venda: "文達語",
      Wolof: "沃洛夫語",
      udm: "烏德穆爾特語",
      szl: "西里西亞語",
      scn: "西西里語",
      hil: "希利蓋農語",
      jam: "牙買加土語",
      sah: "雅庫特語",
      ace: "亞齊語",
      iba: "伊班語",
      Igbo: "伊博語",
      ilo: "伊洛卡諾語",
      "iu-Latn": "因紐特語（拉丁文）",
      Inuktitut: "因紐特語（音節）",
      yua: "尤卡坦瑪雅語",
      Dzongkha: "宗卡語",
      Zulu: "祖魯語"
    },
    notFund: "未找到",
    notFundDesc: "我們未能找到您要查找的內容。",
    shareTips: "擁有以下安全連結的任何人都可以查看此文字記錄和相關媒體檔案。",
    copyLink: "複製連結",
    copySuccessful: "複製成功",
    copyFail: "複製失敗",
    closeTrans: "取消翻譯",
    upgradeBtn: "立即升級",
    upgradeTip30: "此文件長度超過30分鐘。",
    upgradeTipMore: "升級到Scrify 專業版即可轉錄長達10小時的文件"
  },
  // 登錄、註冊、修改密碼
  IdentityInfoManage: {
    or: "或", // 或
    signup: "註冊", // 註冊
    sign_up: "註冊", // 註冊
    loginByGoogle: "使用Google登錄", // 使用Google登錄
    emailAddress: "請輸入您的郵箱", // 請輸入您的郵箱
    createAccount: "建立帳戶", // 建立帳戶
    accountExists: "已經有帳戶了? ", // 已經有帳戶了？登錄
    agreeTerm: {
      // // 我同意 XXX 服務條款和隱私政策
      agree: "我同意{proName}{terms}和{policy}。",
      terms: "服務條款",
      policy: "隱私政策"
    },
    setPassword: "設置密碼", // 設置密碼
    code: "驗證碼", // 驗證碼
    resend: "重新發送", // 重新發送
    codeToEmail:
      "我們剛剛向您的郵箱發送了驗證碼，請查看收件箱並將驗證碼粘貼到上方。", // 我們剛剛向您的郵箱發送了驗證碼，請查看收件箱並將驗證碼粘貼到上方。
    enterPassword: "請輸入密碼。", // 請輸入密碼
    passwordLeval: "密碼強度", // 密碼強度
    Weak: "弱", // 弱 中 強
    Medium: "中", // 弱 中 強
    Strong: "強", // 弱 中 強
    confirmPassword: "確認密碼", // 確認密碼
    invalidEmail: "無效的郵箱地址", // 無效的郵箱地址
    logInDirectly: "帳戶已存在，請直接登錄。", // 帳戶已存在，請直接登錄
    codeErrorTryAgain: "驗證碼錯誤，請重試。", // 驗證碼錯誤，請重試
    atLeastSix: "密碼長度至少6位。", // 密碼長度至少6位
    passwordNotMatch: "密碼不匹配，請重試。", // 密碼不匹配，請重試
    login: "登錄", // 登錄
    log_in: "登錄", // 登錄
    log_In: "登錄", // 登錄
    password: "密碼", // 密碼
    forgotPassword: "忘記密碼？", // 忘記密碼？
    noAccount: "沒有帳戶？", // 沒有帳戶？註冊
    accountNotExists: "帳戶不存在。", // 帳戶不存在
    passwordError: "密碼錯誤", // 密碼錯誤
    sendCode: "發送驗證碼", // 發送驗證碼
    resetPassword: "重置密碼", // 重置密碼
    resetYourPassword: "重置密碼", // 重置你的密碼
    newOldCantSame: "新密碼與舊密碼不能相同。", // 新密碼與舊密碼不能相同
    passwordResetOk: "密碼重置成功！" // 密碼重置成功！
  },
  // 分享詳情頁
  Sharepage: {},
  // 初始化頁
  InitPage: {},
  // 帳戶設定
  AccountSettingsPage: {
    subscription: "訂閱方案",
    freeversion: "免費版",
    transcribeTimesDay: "每日3次轉錄",
    freeThreeTimesDay: "每天免費轉錄3個檔案。",
    uploadMinutes: "30分鐘上傳",
    oneFileUploaded: "每個檔案最長30分鐘，每次僅能上傳一個檔案",
    lowerPriority: "低優先級",
    needsToWaitLonger: "每日3次轉錄。檔案轉錄前需要等待較長時間。",
    currentPlan: "當前方案",
    professionalEdition: "專業版",
    unlimitedTranscription: "無限次轉錄",
    unlimitedNumberOfTimes: "單人無限次轉錄服務。",
    uploadWithinHours: "10小時以內上傳",
    filesUploadedAtOnce: "單個檔案最長10小時/5GB。可同時上傳50個檔案。",
    highestPriority: "最高優先級",
    weWillGiveTheHighest: "我們將始終以最高優先級盡快轉錄您的檔案。",
    theFirstMonth: "首月",
    subscribeTo: "訂閱",
    basicVersionFree: "基礎版（免費）",
    return: "返回",
    annualize: "按年訂閱",
    monthly: "按月訂閱",
    everyYear: "每年",
    saved: "已節省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之後每月",
    manageSubscription: "管理訂閱",
    professionalYearbook: "專業年費版",
    professionalMonthly: "專業月費版",
    subscriptionWillCancelledOn: "訂閱到期日",
    displayLanguage: "顯示語言",
    update: "立即升級",
    basicversion: "基礎版（免費）",
    daily: "已用{start}次，每日限額{end}次",
    upgradetoPro: "升級至專業版",
    accountSetting: "帳戶設定",
    returnAccountSetting: "返回帳戶設定",
    logOut: "登出",
    account: "帳戶",
    email: "電子郵件",
    id: "ID",
    password: "密碼",
    resetPassword: "重設密碼",
    logIn: "登入",
    tryForFree: "免費試用",
    notFund: "找不到",
    couldntFind: "找不到您要的內容。",
    proAnnual: "專業年費版",
    yourSubscription: "您的訂閱將於以下日期取消",
    proMonthly: "專業月費版",
    perMonth: "每月",
    afterwards: "之後",
    accuracy: "轉錄準確率",
    supported: "支援語言",
    identification: "說話人識別",
    transcriptSranslation: "轉錄翻譯",
    perYear: "每年",
    getProPlan: "獲取專業版",
    changeToAnnual: "切換為年費",
    automaticRenewalon: "自動續費日期"
  },
  // 語言對應關係
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(簡體)",
      "Chinese(Traditional)": "中文(繁體)",
      Japanese: "日語",
      Danish: "丹麥語",
      German: "德語",
      English: "英語",
      Spanish: "西班牙語",
      French: "法語",
      Italian: "義大利語",
      Hungarian: "匈牙利語",
      Dutch: "荷蘭語",
      Norwegian: "挪威語",
      Polish: "波蘭語",
      Portuguese: "葡萄牙語",
      Finnish: "芬蘭語",
      Swedish: "瑞典語",
      Turkish: "土耳其語",
      Greek: "希臘語",
      Russian: "俄語",
      Ukrainian: "烏克蘭語",
      Hebrew: "希伯來語",
      Arabic: "阿拉伯語",
      Korean: "韓語"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​開源的Nuxt3 SaaS模板，預集成全球支付網關（Stripe/Cream）、Google OAuth、i18n路由和SEO優化工具。專為開發多語言Web應用的開發者設計，提供SSR/SSG支持和生產級安全性。",
    startLink: "開始免費試用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候補名單，第一時間獲取最新NuxtPro新聞和折扣！",
      placeholder: "輸入您的郵箱",
      button: "加入候補名單",
      joinCountMessage: "🔥 早期用戶 #{count} 剛剛加入了候補名單！"
    },
    seo: {
      title: "開源Nuxt SaaS樣板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS樣板，讓您的產品快速面向客戶。從想法到生產只需5分鐘。"
    },
    api: {
      title: "這是一個演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "視頻下載錯誤"
      },
      mse: {
        code: 2,
        msg: "流追加錯誤"
      },
      parse: {
        code: 3,
        msg: "解析錯誤"
      },
      format: {
        code: 4,
        msg: "格式錯誤"
      },
      decoder: {
        code: 5,
        msg: "解碼錯誤"
      },
      runtime: {
        code: 6,
        msg: "語法錯誤"
      },
      timeout: {
        code: 7,
        msg: "播放超時"
      },
      other: {
        code: 8,
        msg: "其他錯誤"
      }
    },
    HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息",
    HAVE_METADATA: "音頻/視頻的元數據已就緒",
    HAVE_CURRENT_DATA:
      "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下一幀/毫秒",
    HAVE_FUTURE_DATA: "當前及至少下一幀的數據是可用的",
    HAVE_ENOUGH_DATA: "可用數據足以開始播放",
    NETWORK_EMPTY: "音頻/視頻尚未初始化",
    NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網路",
    NETWORK_LOADING: "瀏覽器正在下載數據",
    NETWORK_NO_SOURCE: "未找到音頻/視頻來源",
    MEDIA_ERR_ABORTED: "取回過程被用戶中止",
    MEDIA_ERR_NETWORK: "網路錯誤",
    MEDIA_ERR_DECODE: "解碼錯誤",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支援的音頻/視頻格式",
    REPLAY: "重播",
    ERROR: "網路連接似乎出現了問題",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暫停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下載",
    ROTATE_TIPS: "旋轉",
    RELOAD_TIPS: "重新載入",
    FULLSCREEN_TIPS: "進入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "進入樣式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出樣式全屏",
    TEXTTRACK: "字幕",
    PIP: "畫中畫",
    SCREENSHOT: "截圖",
    LIVE: "正在直播",
    OFF: "關閉",
    OPEN: "開啟",
    MINI_DRAG: "點擊按住可拖動視頻",
    MINISCREEN: "小螢幕",
    REFRESH_TIPS: "請試試",
    REFRESH: "刷新",
    FORWARD: "快進中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "開啟字幕",
    TM_SUBTITLE_HIDE_TIPS: "關閉字幕",
    TM_MINIMIZE_TIPS: "隱藏視頻"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隱私權政策",
    lastUpdated: "最後更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下簡稱「Scribify」、「我們的」、「我們」）在您使用我們的服務、網站時如何收集、使用和揭露您的個人資訊",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及軟體（統稱為「服務」）。",
    policyAgreement:
      "請仔細閱讀本隱私權政策，並確保您瞭解其內容。使用我們的任何服務，即表示您同意本隱私權政策。如果您不同意我們根據本政策使用您的個人數據，您必須立即停止使用我們的服務。",
    policyOverview:
      "在本政策中，我們闡述了：我們收集哪些資料以及收集原因；您的資料將如何處理；以及您對您的資料享有的權利。我們不會出售您的資料。",
    scopeTitle: "1.本隱私權政策的範圍",
    whatWeCollectTitle: "2. 我們收集哪些資訊以及為什麼",
    accessShareTitle: "3. 我們何時存取或分享您的訊息",
    secureDataTitle: "4. 我們如何保護您的數據",
    deleteContentTitle: "5. 刪除內容後會發生什麼",
    locationTitle: "6. 站點和資料的位置",
    childrenPrivacyTitle: "7.兒童隱私",
    updatesTitle: "8. 本隱私權政策的更新",
    contactUsTitle: "9. 聯絡我們",
    identityAccessTitle: "2.1 身分與訪問",
    billingInfoTitle: "2.2 帳單資訊",
    productInteractionsTitle: "2.3 產品交互",
    websiteInteractionsTitle: "2.4 網站互動",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自願通信",
    scopeContent:
      "本隱私權政策僅適用於我們對服務使用者資訊的收集和處理。本隱私權政策不適用於任何連結至我們的第三方所經營的服務、網站或軟體（無論這些連結是由我們提供的或其他使用者分享的），也不適用於來自第三方的內容、資料、應用程式或資料。我們建議您在向任何第三方網站或軟體提供任何資訊之前，先查看其隱私權政策。",
    collectPrinciple:
      "我們的指導原則是只收集我們需要的資訊。以下是實際操作中的意義：",
    identityAccessContent:
      "當您註冊我們的某款產品時，我們會要求您提供身份訊息，例如您的姓名、電子郵件地址。這是為了提供必要的產品功能，並方便我們向您發送產品更新和其他重要資訊。",
    billingInfoContent:
      "如果您註冊付費產品，我們將要求您提供付款資訊和帳單地址。付款資訊將直接提交給我們的付款處理器，不會發送到我們的伺服器。",
    productInteractionsContent:
      "我們將您在產品帳戶中上傳、接收或維護的內容儲存在我們的伺服器上。除非您刪除這些內容，否則只要您的帳戶處於活躍狀態，我們就會一直保留這些內容。",
    websiteInteractionsContent:
      "我們收集您的瀏覽活動信息，用於分析和統計目的，例如轉換率測試和新產品設計實驗。這些資訊包括：例如，您的瀏覽器和作業系統版本、您的 IP 位址、您造訪的網頁及其載入時間，以及哪個網站將您推薦給我們。如果您擁有帳戶並已登錄，這些網路分析資料將與您的 IP 位址和使用者帳戶綁定，直到您的帳戶不再活躍。",
    cookiesContent1:
      "我們還使用持久性第一方 cookie 和一些第三方 cookie 來儲存某些偏好，讓您更輕鬆地使用我們的應用程序，並執行 A/B 測試以及支援一些分析。",
    cookiesContent2:
      "Cookie 是瀏覽器儲存的一段文字。它可以幫助您記住登入資訊和網站偏好設定。它還可能收集您的瀏覽器類型、作業系統、造訪過的網頁、造訪時間、瀏覽過的內容以及其他點擊流資料等資訊。您可以在瀏覽器設定中調整 Cookie 保留設置，並接受或封鎖單一 Cookie。但是，如果您關閉 Cookie，我們的應用程式將無法運行，我們服務的其他方面也可能無法正常運作。",
    voluntaryCorrespondenceContent:
      "當您透過電子郵件向我們提出問題或尋求協助時，我們會保留該通訊記錄，包括您的電子郵件地址，以便我們在您將來聯絡我們時可以參考過去的通訊記錄。",
    accessShareContent1:
      "為了提供您所要求的產品或服務。我們會使用一些第三方子處理器來協助運行我們的應用程式並向您提供服務。這包括雲端和分析提供者。",
    accessShareContent2:
      "調查、預防或採取行動應對濫用行為。在調查潛在濫用行為時，存取客戶帳戶是不得已而為之。我們希望保護客戶和舉報人的隱私和安全，並在整個過程中盡力平衡這些責任。如果我們發現您將我們的產品用於受限用途，我們將採取必要的措施，包括在必要時通知相關部門。",
    accessShareContent3: "根據適用法律的要求。",
    userDataRequests:
      "- 用戶資料請求。我們的政策是，除非法律程序強制要求或在有限的緊急情況下，否則我們不會回應政府的用戶資料請求。但是，如果美國執法機構持有必要的搜索令、刑事傳票或法院命令要求我們共享數據，我們必須遵守。同樣，只有在美國政府透過司法互助條約或協議中規定的程序強制要求的情況下，我們才會回應來自美國境外政府機構的請求。我們的政策是在共享資料之前通知受影響的用戶，除非法律禁止我們這樣做，並且某些緊急情況除外。",
    preservationRequests:
      "- 儲存請求。同樣，我們的政策是，只有在美國《聯邦儲存通訊法》第 18 USC 第 2703(f) 條或美國民事傳票強制要求的情況下，我們才會遵守保存資料的請求。除非法律要求或法院命令強制要求（我們選擇不上訴），否則我們不會共享已保存的資料。此外，除非我們在規定保存期到期前收到適當的搜索令、法院命令或傳票，否則我們將在保存期結束時銷毀任何已保存的客戶資料副本。",
    taxAudit:
      "- 如果我們受到稅務機關的審計，我們可能需要分享帳單相關資訊。在這種情況下，我們只會分享必要的最低限度的信息，例如帳單地址和免稅資訊。",
    secureDataContent1: "所有資料均透過加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "當從我們的伺服器傳輸到您的瀏覽器。",
    deleteContentContent: "如果您刪除任何內容，它將立即變得無法存取。",
    locationContent:
      "我們的產品和其他網路資產在美國運作。如果您位於歐盟、英國或美國以外的其他地方，請注意，您向我們提供的任何資訊都將傳輸至美國並儲存於美國。使用我們的網站或服務和/或向我們提供您的個人信息，即表示您同意此類傳輸。",
    childrenPrivacyContent:
      "本服務並非針對兒童，我們不會故意收集 13 歲以下兒童的個人資訊。若您未滿 13 歲，請勿透過本服務提交任何個人資訊。如果您認為有兒童違反本政策向我們提供了個人信息，請按照以下方式與我們聯繫。",
    updatesContent:
      "我們可能會根據需要更新本政策，以符合相關法規並反映任何新的做法。每當我們的政策做出重大變更時，我們都會更新本頁面頂部的日期。",
    contactUsContent1: "如果您對我們的隱私權政策有任何疑問、意見或投訴，請",
    contactUs: "聯絡我們",
    contactUsContent2: "我們將盡力盡快處理您的投訴。"
  },
  termsOfService: {
    termsOfServiceTitle: "服務條款",
    lastUpdated: "最後更新：2022 年 9 月 21 日",
    thankYouMessage: "感謝您使用我們的產品！",
    companyReference:
      "當我們在本文檔中說「本公司」、「我們」、「我們的」或「我們」時，我們指的是 Scribify。",
    servicesDefinition:
      "當我們說「服務」時，我們指的是 Scribify 創建和維護的任何產品，無論是透過網頁瀏覽器、桌面應用程式、行動應用程式或其他格式交付。",
    termsUpdateNotice:
      "我們未來可能會更新本服務條款。通常，這些變更旨在透過連結至更詳細的相關政策來澄清部分條款。每當我們對保單做出重大變更時，我們都會更新本頁面頂部的日期，並採取其他適當措施通知帳戶持有人。",
    acceptanceOfAgreementTitle: "1. 接受協議",
    scribifyServicesTitle: "2. Scribify 的服務",
    accountTermsTitle: "3. 帳戶條款",
    paymentRefundsTitle: "4. 付款、退款和計劃變更",
    cancellationTerminationTitle: "5. 取消和終止",
    submissionsTitle: "6. 提交內容",
    uptimeSecurityTitle: "7. 正常運作時間和安全性",
    siteManagementTitle: "8.現場管理",
    copyrightContentTitle: "9. 版權和內容所有權",
    prohibitedActivitiesTitle: "10.禁止的活動",
    featuresBugsTitle: "11. 功能和錯誤",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用戶數據",
    privacyPolicyTitle: "14. 隱私權政策",
    liabilityTitle: "15. 責任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 聯絡我們",
    acceptanceContent1:
      "使用我們的服務，即表示您接受本協議，本協議由此成為您與 Scribify 之間具有約束力的合約。您聲明您具備法定能力接受這些條款，並確認您已達到訂立具有約束力合約的法定年齡。 Scribify 的接受度明確以您同意本協議的所有條款和條件為前提。",
    acceptanceContent2:
      "該服務不適用於 18 歲以下的任何人，也不應該由 18 歲以下的任何人使用。透過使用本服務，您聲明並保證您符合上述資格要求。",
    acceptanceContent3:
      "「您」、「您的」、「您本人」等字眼也包括您的員工、代理人、業務代表以及您允許透過您的帳戶（定義見下文）存取服務的任何其他個人。您有責任確保所有透過您的帳號存取服務的人員均知悉並遵守本條款。",
    acceptanceContent4:
      "Scribify 保留隨時自行決定修改和更新本條款的權利。所有變更一經發布即刻生效。如果您在修訂條款發布後繼續使用本服務，即表示您接受並同意這些變更。由於變更對您具有約束力，因此請您不時查看此頁面，以了解任何變更。",
    servicesContent1:
      "我們的服務使用戶能夠將語音對話轉換為可搜尋、翻譯和與他人共享的轉錄文字。",
    servicesContent2:
      "您可以選擇使用本服務的免費版本（「免費服務」）或可能需要支付費用的訂閱式付費版本服務（「付費服務」）。",
    servicesContent3:
      "我們將向您提供服務。您有責任做好一切必要安排，以便存取服務。",
    accountTerms1:
      "- 您有責任維護您的帳戶安全。若您未能履行此安全義務，本公司將不承擔任何因您未能履行此安全義務而造成的任何損失或損害。",
    accountTerms2: "- 您不得將服務用於任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您應對您帳戶下發布的所有內容和活動負責。這包括以下人員發佈的內容：(a) 有權存取您的登入憑證；或 (b) 在您的帳戶下擁有自己的登入資訊。",
    accountTerms4:
      "- 您必須是人類。不允許使用「機器人」或其他自動化方法註冊的帳戶。",
    paymentContent1:
      "- 對於提供免費試用的付費服務，我們會在您註冊時說明試用期限。試用期結束後，您需要提前付費才能繼續使用服務。如果您不付費，這些服務將被終止。",
    paymentContent2:
      "- 如果您從免費計劃升級到付費計劃，我們將立即從您的卡中扣款，您的計費週期從升級當天開始。",
    paymentContent3:
      "- 所有費用均不含稅務機關徵收的任何稅費、徵稅或關稅。如有需要，我們將代表稅務機關代收這些稅費，並將稅費匯給稅務機關。否則，您需自行承擔所有稅金、徵稅或關稅。",
    paymentContent4:
      "- 所有購買均不可退款。您可以隨時登入您的帳戶取消任何付費服務。對於付費訂閱，除非另有說明，否則您的取消將在當前付費期限結束時生效。",
    cancellationContent1:
      "- 如果您在任何付費期限結束前取消服務，您的取消將立即生效，並且不會再次向您收費。我們不會在上一個計費週期內自動按比例分配未使用的時間。",
    cancellationContent2:
      "- 我們有權隨時以任何理由暫停或終止您的帳戶，並拒絕您目前或未來使用我們的服務。暫停錶示您將無法存取該帳戶或帳戶中的任何內容。終止將導致您的帳戶或您對帳戶的存取權限被刪除，以及您帳戶中所有內容的喪失和放棄。我們也保留隨時以任何理由拒絕任何人使用服務的權利。我們制定此條款是因為從統計數據來看，在我們服務的數十萬個帳戶中，至少有一個帳戶正在從事惡意活動。",
    cancellationContent3:
      "- 對公司員工或官員進行口頭、身體、書面或其他辱罵（包括辱罵或報復威脅）可能會導致立即終止帳戶。",
    submissionsContent:
      "您確認並同意，您向我們提供的關於本網站的任何問題、評論、建議、想法、反饋或其他信息（統稱“提交內容”）均非保密信息，並將成為我們的唯一財產。我們擁有包括所有智慧財產權在內的專有權利，並有權出於任何合法目的（商業或其他目的）不受限制地使用和傳播這些提交內容，而無需向您確認或支付任何報酬。您特此放棄對任何此類提交內容的所有精神權利，並保證任何此類提交內容均為您的原創或您有權提交此類提交內容。您同意，對於任何涉嫌或實際侵犯或盜用您提交內容中任何專有權利的行為，您不得向我們追訴。",
    uptimeContent1:
      "- 您使用本服務的風險由您自行承擔。我們以「現狀」和「可用」為基礎提供這些服務。我們大多數服務不提供服務等級協議，但我們非常重視應用程式的正常運作時間。",
    uptimeContent2:
      "- 如果您的使用量顯著超過其他使用者的平均使用量，我們保留暫時停用您帳戶的權利。當然，我們會在採取任何措施之前與您聯繫，除非在極少數情況下，您的使用量可能會對其他使用者的服務效能產生負面影響。",
    uptimeContent3:
      "- 我們採取多種措施，透過備份、冗餘和加密來保護您的資料安全。我們對透過公共互聯網傳輸的資料強制加密。",
    uptimeContent4:
      "- 我們使用第三方供應商和託管合作夥伴來提供運行服務所需的必要硬體、軟體、網路、儲存和相關技術。",
    siteManagementContent:
      "我們保留以下權利（但沒有義務）：（1）監控網站是否違反本服務條款；（2）對我們自行決定違反法律或本服務條款的任何人採取適當的法律行動，包括但不限於向執法部門舉報該使用者；（3）我們自行決定且不受限制地拒絕、限制存取、限制可用性或停用（在技術可行的範圍內）您的任何貢獻或其任何部分；（4）我們自行決定且不受限制地、通知或承擔責任，從網站中刪除或以其他方式禁用所有過大或以任何方式對我們的系統造成負擔的文件和內容；以及（5）以旨在保護我們的權利和財產並促進網站正常運行的方式管理網站。",
    copyrightContent1: "- 服務上發布的所有內容必須符合美國版權法。",
    copyrightContent2:
      "- 我們對您提供給服務的資料不主張任何智慧財產權。所有上傳的資料仍歸您所有。",
    copyrightContent3:
      "- 我們不預先篩選內容，但保留自行決定拒絕或刪除透過本服務提供的任何內容的權利（但沒有義務）。",
    copyrightContent4:
      "- 本服務的名稱、外觀和風格均受本公司版權©保護。保留所有權利。未經本公司明確書面許可，您不得複製、抄襲或重複使用任何 HTML、CSS、JavaScript 或視覺設計元素。您必須申請許可才能將公司徽標或任何服務徽標用於推廣目的。請",
    emailUs: "給我們發電子郵件",
    copyrightContent5:
      "請求使用徽標。如果您違反本服務條款，我們保留撤銷此許可的權利。",
    copyrightContent6:
      "- 您同意未經本公司明確的書面許可，不得複製、影印、拷貝、出售、轉售或利用本服務的任何部分、使用本服務或存取服務。",
    copyrightContent7: "- 您不得修改其他網站以錯誤地暗示其與服務或公司相關。",
    copyrightContent8:
      "- 我們尊重他人的智慧財產權。如果您認為本網站上或透過本網站提供的任何資料侵犯了您擁有或控制的任何版權，請立即",
    contactUs: "聯絡我們",
    copyrightContent9:
      "您的通知副本將發送給發布或儲存通知中提及資料的人員。請注意，根據適用法律，如果您在通知中作出重大不實陳述，您可能需承擔損害賠償責任。因此，如果您不確定本網站上或連結的資料是否侵犯了您的版權，您應該先考慮聯絡律師。",
    prohibitedActivitiesIntro:
      "您不得為我們提供本網站目的以外的任何目的造訪或使用本網站。除我們明確認可或批准的商業活動外，本網站不得用於任何商業活動。",
    prohibitedActivitiesUserAgreement: "作為本網站的用戶，您同意不：",
    prohibitedActivity1:
      "- 未經我們書面許可，有系統地從網站檢索資料或其他內容，以直接或間接地建立或編譯集合、彙編、資料庫或目錄。",
    prohibitedActivity2:
      "- 欺騙、詐騙或誤導我們和其他用戶，尤其是試圖了解用戶密碼等敏感帳戶資訊。",
    prohibitedActivity3:
      "- 規避、停用或以其他方式乾擾本網站的安全相關功能，包括封鎖或限制使用或複製任何內容或強制限制使用本網站和/或其中包含的內容的功能。",
    prohibitedActivity4:
      "- 我們認為，貶低、玷污或以其他方式損害我們和/或本網站。",
    prohibitedActivity5: "- 使用從本網站獲得的任何資訊來騷擾、辱罵或傷害他人。",
    prohibitedActivity6:
      "- 不當使用我們的支援服務或提交虛假的濫用或不當行為報告。",
    prohibitedActivity7: "- 以不符合任何適用法律或法規的方式使用本網站。",
    prohibitedActivity8: "- 未經授權建置或連結本網站。",
    prohibitedActivity9:
      "- 上傳或傳輸（或試圖上傳或傳輸）病毒、特洛伊木馬或其他資料，包括過度使用大寫字母和垃圾郵件（連續發布重複文字），幹擾任何一方對網站的不間斷使用和享受，或修改、損害、破壞、更改或乾擾網站的使用、特性、功能、操作或維護。",
    prohibitedActivity10:
      "- 從事任何自動化系統使用，例如使用腳本發送評論或訊息，或使用任何資料探勘、機器人或類似的資料收集和提取工具。",
    prohibitedActivity11: "- 從任何內容中刪除版權或其他所有權聲明。",
    prohibitedActivity12:
      "- 試圖冒充其他使用者或個人或使用其他使用者的使用者名稱。",
    prohibitedActivity13:
      "- 上傳或傳輸（或試圖上傳或傳輸）任何作為被動或主動資訊收集或傳輸機制的資料，包括但不限於清晰圖形交換格式（「gif」）、1×1像素、網路臭蟲、cookies或其他類似裝置（有時稱為「間諜軟體」或「被動收集機制」或「pcms」）。",
    prohibitedActivity14:
      "- 幹擾、破壞或對本網站或與本網站連結的網路或服務造成不當負擔。",
    prohibitedActivity15:
      "- 騷擾、煩擾、恐嚇或威脅任何向您提供本網站任何部分的員工或代理人。",
    prohibitedActivity16:
      "- 試圖繞過本網站為防止或限制存取本網站或本網站任何部分而設計的任何措施。",
    prohibitedActivity17:
      "- 複製或改編本網站的軟體，包括但不限於 Flash、PHP、HTML、JavaScript 或其他程式碼。",
    prohibitedActivity18:
      "- 除適用法律允許外，不得對包含或以任何方式構成本網站一部分的任何軟體進行解密、反編譯、反彙編或反向工程。",
    prohibitedActivity19:
      "- 除標準搜尋引擎或網路瀏覽器的使用結果外，使用、啟動、開發或分發任何自動化系統，包括但不限於存取本網站的任何蜘蛛、機器人、欺騙實用程式、抓取工具或離線閱讀器，或使用或啟動任何未經授權的腳本或其他軟體。",
    prohibitedActivity20: "- 使用採購代理或採購代理在網站上進行購買。",
    prohibitedActivity21:
      "- 未經授權使用本網站，包括透過電子或其他方式收集使用者的使用者名稱和/或電子郵件地址以發送未經請求的電子郵件，或透過自動方式或虛假藉口建立使用者帳戶。",
    prohibitedActivity22:
      "- 將本網站用作與我們競爭的任何努力的一部分，或以其他方式將本網站和/或內容用於任何創收活動或商業企業。",
    prohibitedActivity23: "- 使用本網站宣傳或提供銷售商品和服務。",
    prohibitedActivity24: "- 出售或以其他方式轉讓您的個人資料。",
    featuresContent1:
      "我們根據自身經驗以及客戶分享的時間和回饋，精心設計我們的服務。然而，不可能有讓所有人滿意的服務。我們不保證我們的服務一定能滿足您的特定要求或期望。",
    featuresContent2:
      "我們也會測試所有功能，然後再發布。與任何軟體一樣，我們的服務不可避免地會存在一些錯誤。我們會追蹤收到的錯誤報告並努力解決，尤其是與安全或隱私相關的錯誤。並非所有報告的錯誤都會修復，我們也無法保證服務完全沒有錯誤。",
    correctionsContent1:
      "本網站上的資訊可能有排印錯誤、不準確或遺漏，包括描述、價格、供貨情況以及其他各種資訊。我們保留隨時更正任何錯誤、不準確或遺漏以及更改或更新本網站資訊的權利，恕不另行通知。",
    correctionsContent2:
      "我們無法保證本網站始終可用。我們可能會遇到硬體、軟體或其他問題，或需要執行與本網站相關的維護，導致中斷、延遲或錯誤。我們保留隨時以任何理由更改、修訂、更新、暫停、中止或以其他方式修改本網站的權利，恕不另行通知。您同意，對於您在本網站停機或中止期間無法存取或使用本網站而造成的任何損失、損害或不便，我們概不負責。本服務條款中的任何內容均不得解釋為我們有義務維護和支持本網站，或提供與此相關的任何更正、更新或發布。",
    userDataContent:
      "我們將保留您傳輸至本網站的某些數據，用於管理本網站的效能，以及與您使用本網站相關的數據。儘管我們會定期備份數據，但您應對您傳輸的所有數據或與您使用本網站進行的任何活動相關的數據承擔全部責任。您同意，對於任何此類資料的遺失或損壞，我們概不負責，並且您特此放棄因任何此類資料的遺失或損壞而向我們提起訴訟的權利。",
    privacyPolicyContent1: "我們重視資料隱私和安全。請查看我們的",
    privacyPolicy: "隱私權政策",
    privacyPolicyContent2:
      ". 使用本網站即表示您同意遵守我們的隱私權政策，該政策已納入本服務條款。請注意，本網站託管於美國。如果您從世界任何其他地區造訪本網站，且該等地區在管理個人資料收集、使用或揭露方面適用的法律或其他要求與美國適用法律不同，則您繼續使用本網站即表示您將把您的資料傳輸至美國，並且您同意將您的資料傳輸至美國並在美國進行處理。",
    liabilityIntro: "我們在這些條款中都提到了責任，但將其全部放在一個部分：",
    liabilityContent:
      "您明確瞭解並同意，對於因以下原因造成的任何直接、間接、附帶、利潤損失、特殊、後果性、懲罰性或懲戒性損害，包括但不限於利潤損失、商譽損失、使用損失、數據損失或其他無形損失（即使公司已被告知發生此類損害的可能性），本公司不對您或任何第三方承擔法律或衡平法上的錯誤責任：（1）準確之處；（3）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因您造訪和使用本網站而造成的任何性質的人身傷害或財產損失；（4）因透過或從本服務購買或取得的任何商品、資料、資訊或服務或收到的訊息或達成的交易而產生的替代商品和服務的採購成本；（5）未經授權存取或使用我們的安全伺服器和/或儲存在其中的任何財務資訊和所有資訊或使用我們的任何財務資訊（6/） (7) 任何第三方傳輸到或透過本網站的任何錯誤、病毒、特洛伊木馬或類似物，和/或； (8) 任何內容和資料中的任何錯誤或遺漏，或因使用透過本網站發布、傳輸或以其他方式提供的任何內容而導致的任何損失或損害； (9) 任何第三方在本服務上的聲明或行為； (10)或與本服務條款或服務有關的任何其他事項，無論是違約、侵權行為（包括主動或被動的疏忽）或任何其他責任理論。",
    miscellaneousContent:
      "本服務條款以及我們在網站上發布的或與網站相關的任何政策或營運規則構成您與我們之間的完整協議和諒解。我們未行使或執行本服務條款中的任何權利或規定，並不構成對該權利或規定的放棄。本服務條款在法律允許的最大範圍內有效。我們可隨時將我們的部分或全部權利和義務轉讓給他人。對於因超出我們合理控制範圍的任何原因造成的任何損失、損害、延誤或未能採取行動，我們概不負責。如果本服務條款的任何規定或部分規定被認定為非法、無效或不可執行，則該規定或部分規定將被視為可與本服務條款分割，且不影響任何其他規定的有效性和可執行性。您與我們之間並未因本服務條款或使用本網站而建立合資、合作、僱用或代理關係。您同意，本服務條款不會因起草本服務條款而被解釋為我們無效。您特此放棄基於本服務條款的電子形式以及本協議各方未簽署執行本服務條款而可能擁有的任何及所有抗辯。",
    contactUsContent1: "如果您對任何服務條款有疑問，請",
    contactUsContent2: "。"
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
