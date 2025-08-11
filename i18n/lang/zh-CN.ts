let message = {
  // 首页
  HomePage: {
    home: "首页",
    version: "基础版本（免费）：",
    times: "每天免费转录 {times} 次，您还有 {left} 次转录机会。",
    tips: "升级到专业版以获得无限转录。",
    update: "立即升级",
    folders: "文件夹",
    rename: "重命名",
    delete: "删除",
    createTitle: "创建文件夹",
    deleteConfirm: "您确定要删除该文件夹及其中的所有文件吗？",
    cancel: "取消",
    confirm: "创建",
    dialogLabel: "文件夹名称",
    recently: "最近文件",
    tour: {
      step0: {
        title: "欢迎使用 {name}",
        tip: "在这里，您可以：",
        content: "转录一次性对话、会议、讲座等",
        next: "开始使用"
      },
      step1: {
        title: "转录文件",
        content: "支持三种转录方式：本地文件、链接和录音。"
      },
      step2: {
        title: "创建文件夹",
        content: '点击"+"创建文件夹并整理您的文件。'
      },
      step3: {
        title: "查看转录详情并编辑",
        content: "点击项目以查看转录详情并进行编辑和翻译。"
      },
      next: "下一步",
      finish: "知道了"
    },
    export: {
      export: "导出",
      title: "我们正在生成您的导出文件",
      title2: "您的文件已准备就绪",
      singleLoadingContent: "正在压缩 1 个文件。",
      singleSuccessContent: "已压缩 1 个文件。",
      loadingContent: "正在压缩 {num} 个文件。",
      successContent: "已压缩 {num} 个文件。",
      cancel: "取消导出",
      error: "导出错误",
      dialog: {
        title: "警告",
        content: "取消导出？",
        cancel: "取消导出",
        continue: "继续导出"
      }
    },
    welcome: {
      title: "欢迎使用 Scribify！",
      description: "在这里，您可以：",
      transcribe:
        "使用 Scribify 轻松转录—瞬间将语音对话转换为清晰、可搜索和可共享的文本。",
      precision: "立即获得带有说话者识别和时间戳的精确转录。",
      translate: "打破语言障碍：轻松将转录翻译成200多种语言。",
      edit: "编辑、完善并以适合您需求的格式导出转录文本。",
      collaborate: "通过与他人共享转录文本进行协作。",
      button: "开始使用",
      tip: "准备好将音频转换为转录文本了吗？现在就开始探索！"
    },
    subscriptionModal: {
      left: {
        title: "获取专业版解锁更多功能",
        c1: "无限转录",
        c2: "10小时上传",
        c3: "最高优先级",
        c4: "99%转录准确率",
        c5: "支持100多种语言",
        c6: "说话者识别",
        c7: "转录翻译",
        t1: "为一个人提供无限转录。",
        t2: "每个文件可长达10小时/5 GB。一次上传50个文件。",
        t3: "我们将始终以最高优先级尽快转录您的文件。"
      },
      right: {
        title: "获取专业版",
        yearly: "年付",
        monthly: "月付",
        save: "节省",
        preMonth: "每月",
        preYear: "每年",
        firstMonth: "第一个月",
        afterwards: "之后"
      },
      subscribe: "订阅"
    }
  },
  // 文件夹页
  FolderPage: {
    table: {
      name: "名称",
      duration: "时长",
      status: "状态",
      date: "创建日期",
      activity: "活动",
      empty1: "这里是空的。",
      empty2: "点击上方按钮转录文件。",
      just: "刚刚",
      export: "导出",
      delete: "删除",
      share: "分享",
      rename: "重命名",
      move: "移动",
      failed: "失败",
      selected: "已选择",
      success: "成功"
    },
    dialog: {
      move: {
        title: "移动",
        label: "选择文件夹",
        placeholder: "选择文件夹",
        confirm: "移动",
        cancel: "取消"
      },
      rename: {
        title: "重命名",
        label: "文件名",
        confirm: "重命名",
        cancel: "取消"
      },
      delete: {
        title: "删除",
        file: "文件",
        files: "文件",
        label: "确认删除？此操作无法撤销。",
        confirm: "删除",
        cancel: "取消"
      },
      share: {
        title: "分享",
        label: "任何拥有以下安全链接的人都可以查看此转录文本和相关的媒体文件。",
        confirm: "复制链接",
        success: "复制成功"
      },
      export: {
        title: "导出",
        select: "选择一个或多个格式",
        settings: "设置",
        speaker: "包含说话人",
        timecodes: "包含时间码",
        confirm: "导出",
        cancel: "取消",
        selectErr: "请选择一个或多个格式"
      }
    },
    search: {
      placeholder: "搜索"
    },
    recently: "最近",
    record: "录音",
    transcribe: "转录",
    unclassified: "未分类文件夹",
    buttons: {
      transcribe: "转录文件",
      url: "转录链接",
      record: "录音并转录",
      recording: "录音中..."
    },
    delSuccess: "删除成功",
    create: "创建"
  },
  // 文件上传与录音
  FileUploadAndRecording: {
    record: {
      record: "录音",
      pause: "暂停",
      resume: "继续",
      stop: "停止",
      delete: "删除",
      transcribe: "转录",
      permissionDenied: "麦克风权限被拒绝或设备不存在",
      dialog: {
        delete: {
          title: "警告",
          label: "您确定要删除此录音吗？",
          confirm: "删除",
          cancel: "取消"
        },
        complete: {
          title: "录音完成",
          label: "录音已达到10小时并自动停止。请进行转录。",
          confirm: "知道了"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "转录在线媒体",
        title: "粘贴链接",
        label:
          "粘贴以下平台但不限于：YouTube、Facebook、X、Dropbox、Google Drive、Vimeo 的媒体链接",
        confirm: "转录",
        cancel: "取消",
        errorTitle: "您输入的链接地址不正确。请检查后重试。",
        linkName: "链接"
      },
      file: {
        orTitle: "转录在线媒体",
        dialogTitle: "转录文件",
        tip: "点击上传或拖拽放置",
        or: "或"
      },
      del: {
        title: "警告",
        content: "所有进度将丢失。确认取消转录？",
        cancel: "确认取消",
        confirm: "继续转录"
      },
      files: "文件",
      resultDialogTitle: "转录文件",
      cancel: "取消",
      confirm: "转录",
      return: "返回",
      addMore: "添加更多",
      language: "音频语言",
      failed: "失败",
      tooLarge: "文件太大。",
      fileFormat: "文件格式不被允许",
      localFiles: "本地文件",
      pasteLink: "粘贴链接",
      uploadErr: "上传错误",
      hashErr: "哈希错误",
      table: {
        status: "状态",
        file: "文件",
        size: "大小",
        noData: "无数据"
      },
      maxFileNum: "文件数量不能超过 {num}。",
      speaker: "说话人识别",
      speakerLabel: "标记转录文本中每个片段的说话人身份"
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "编辑",
    translate: "翻译",
    showSpeaker: "显示说话人",
    showTimestamp: "显示时间戳",
    share: "分享",
    shared: "已分享",
    export: "导出",
    speaker: "说话人_{ id }",
    unassignSpeaker: "取消分配说话人",
    play: "播放",
    save: "保存",
    undo: "撤销",
    redo: "重做",
    confirm: "确认",
    cancel: "取消",
    addNew: "添加新项",
    createANewSpeaker: "创建新说话人",
    speakerName: "说话人名称",
    addSpeaker: "添加说话人",
    applyToAllMatchingSpeakers: "应用于所有匹配的说话人",
    cancelTranslation: "取消翻译",
    showVideo: "显示视频",
    hideVideo: "隐藏视频",
    langChooseV1: {
      recently: "最近",
      popular: "常用",
      other: "其他",
      searchLanguage: "搜索语言",
      noMatch: "未找到匹配的语言",
      English: "英语",
      "English(US)": "英语（美国）",
      "English(UK)": "英语（英国）",
      Spanish: "西班牙语",
      Portuguese: "葡萄牙语",
      French: "法语",
      Italian: "意大利语",
      German: "德语",
      Dutch: "荷兰语",
      Polish: "波兰语",
      Danish: "丹麦语",
      Japanese: "日语",
      Korean: "韩语",
      Hungarian: "匈牙利语",
      Czech: "捷克语",
      Chinese: "中文",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Azerbaijani: "阿塞拜疆语",
      Estonian: "爱沙尼亚语",
      Belarusian: "白俄罗斯语",
      Bulgarian: "保加利亚语",
      Icelandic: "冰岛语",
      Bosnian: "波斯尼亚语",
      Persian: "波斯语",
      Russian: "俄语",
      "Chinese(Traditional)": "繁体中文",
      Finnish: "芬兰语",
      Kazakh: "哈萨克语",
      Galician: "加利西亚语",
      Catalan: "加泰罗尼亚语",
      "Chinese(Simplified)": "简体中文",
      Kannada: "卡纳达语",
      Croatian: "克罗地亚语",
      Latvian: "拉脱维亚语",
      Lithuanian: "立陶宛语",
      Romanian: "罗马尼亚语",
      Marathi: "马拉地语",
      Malay: "马来语",
      Macedonian: "马其顿语",
      Maori: "毛利语",
      Afrikaans: "南非语 (阿非利卡语)",
      Nepali: "尼泊尔语",
      Norwegian: "挪威语",
      Swedish: "瑞典语",
      Serbian: "塞尔维亚语",
      Slovak: "斯洛伐克语",
      Slovenian: "斯洛文尼亚语",
      Swahili: "斯瓦希里语",
      Tagalog: "菲律宾语",
      Tamil: "泰米尔语",
      Thai: "泰语",
      Turkish: "土耳其语",
      Welsh: "威尔士语",
      Urdu: "乌尔都语",
      Ukrainian: "乌克兰语",
      Greek: "希腊语",
      Armenian: "亚美尼亚语",
      Hindi: "印地语",
      Indonesian: "印度尼西亚语",
      Vietnamese: "越南语",
      Albanian: "阿尔巴尼亚语",
      Amharic: "阿姆哈拉语",
      Assamese: "阿萨姆语",
      Occitan: "奥克语",
      Bashkir: "巴什基尔语",
      Basque: "巴斯克语",
      Breton: "布列塔尼语",
      Tibetan: "藏语",
      Faroese: "法罗语",
      Sanskrit: "梵语",
      Khmer: "高棉语",
      Georgian: "格鲁吉亚语",
      Gujarati: "古吉拉特语",
      "Haitian Creole": "海地克里奥尔语",
      Hausa: "豪萨语",
      Latin: "拉丁语",
      Lao: "老挝语",
      Lingala: "林加拉语",
      Luxembourgish: "卢森堡语",
      Malagasy: "马尔加什语",
      Maltese: "马耳他语",
      Malayalam: "马拉雅拉姆语",
      Mongolian: "蒙古语",
      Bengali: "孟加拉语",
      Burmese: "缅甸语",
      Punjabi: "旁遮普语",
      Pashto: "普什图语",
      Sinhala: "僧伽罗语",
      Shona: "修纳语",
      Somali: "索马里语",
      Tajik: "塔吉克语",
      Tatar: "鞑靼语",
      Telugu: "泰卢固语",
      Turkmen: "土库曼语",
      Uzbek: "乌兹别克语",
      Hawaiian: "夏威夷语",
      "Norwegian Nynorsk": "新挪威语",
      Sindhi: "信德语",
      Sundanese: "巽他语",
      Yiddish: "意第绪语",
      Yoruba: "约鲁巴语",
      Javanese: "爪哇语",
      Cantonese: "粤语",
      Abkhaz: "阿布哈兹语",
      Afar: "阿法尔语",
      alz: "阿卢尔语",
      ach: "阿乔利语",
      awa: "阿瓦德语",
      Avaric: "阿瓦尔语",
      Ewe: "埃维语",
      Aymara: "艾马拉语",
      Irish: "爱尔兰语",
      Oriya: "奥利亚语",
      Oromo: "奥罗莫语",
      Ossetian: "奥塞梯语",
      tpi: "巴布亚皮钦语",
      bew: "巴达维语",
      ban: "巴厘语",
      btx: "巴塔克卡罗语",
      bbc: "巴塔克托巴语",
      bts: "巴塔克西马隆贡语",
      bci: "巴乌雷语",
      Bambara: "班巴拉语",
      pag: "邦阿西楠语",
      pam: "邦板牙语",
      nso: "北索托语",
      bem: "奔巴语",
      bik: "比科尔语",
      bal: "俾路支语",
      bho: "博杰普尔语",
      bua: "布里亚特语",
      chm: "草原马里语",
      Chamorro: "查莫罗语",
      Chechen: "车臣语",
      chk: "楚克语",
      Chuvash: "楚瓦什语",
      Tswana: "茨瓦纳语",
      Tsonga: "聪加语",
      "fa-AF": "达里语",
      shn: "掸语",
      tet: "德顿语",
      Divehi: "迪维希语",
      dyu: "迪尤拉语",
      tiv: "蒂夫语",
      din: "丁卡语",
      doi: "多格拉语",
      "ndc-ZW": "恩道语",
      "South Ndebele": "恩德贝莱语（南部）",
      dov: "恩敦贝语",
      "bm-Nkoo": "恩科字母（西非书面文字）",
      "French(Canada)": "法语（加拿大）",
      Fijian: "斐济语",
      fon: "丰语",
      "Western Frisian": "弗里西语",
      fur: "弗留利语",
      Fulah: "富拉尼语",
      Kongo: "刚果语",
      Kalaallisut: "格陵兰语",
      gom: "贡根语",
      Guarani: "瓜拉尼语",
      cnh: "哈卡钦语",
      hrx: "洪斯吕克语",
      Kyrgyz: "吉尔吉斯语",
      ktu: "吉土巴语",
      gaa: "加语",
      kac: "景颇语",
      Kanuri: "卡努里语",
      kha: "卡西语",
      kek: "凯克其语",
      Komi: "科米语",
      Xhosa: "科萨语",
      Corsican: "科西嘉语",
      "crh-Latn": "克里米亚鞑靼语（拉丁文）",
      crh: "克里米亚鞑靼语（西里尔文）",
      Quechua: "克丘亚语",
      Kurdish: "库尔德语（库尔曼吉语）",
      ckb: "库尔德语（索拉尼）",
      trp: "廓克博若克语",
      ltg: "拉特加莱语",
      lij: "利古里亚语",
      Limburgish: "林堡语",
      Kirundi: "隆迪语",
      luo: "卢奥语",
      Luganda: "卢干达语",
      Kinyarwanda: "卢旺达语",
      lmo: "伦巴第语",
      rom: "罗姆语",
      mad: "马都拉语",
      Manx: "马恩岛语",
      mwr: "马尔瓦迪语",
      "ms-Arab": "马来语（爪夷文）",
      Marshallese: "马绍尔语",
      mam: "玛姆语",
      mai: "迈蒂利语",
      mfe: "毛里裘斯克里奥耳语",
      "mni-Mtei": "梅泰语（曼尼普尔语）",
      min: "米南语",
      lus: "米佐语",
      hmn: "苗语",
      nhe: "纳瓦特尔语（东部瓦斯特卡）",
      "Southern Sotho": "南索托语",
      new: "尼泊尔语言（尼瓦尔语）",
      nus: "努尔语",
      pap: "帕皮阿门托语",
      "pa-Arab": "旁遮普语（沙木基文）",
      "pt-PT": "葡萄牙语（葡萄牙）",
      Chichewa: "齐切瓦语",
      cgg: "奇加语",
      lua: "奇卢伯语",
      Akan: "契维语",
      zap: "萨巴特克语",
      "Northern Sami": "萨米语（北部）",
      Samoan: "萨摩亚语",
      kri: "塞拉利昂克里奥尔语",
      crs: "塞舌尔克里奥尔语",
      Sango: "桑戈语",
      "sat-Latn": "桑塔利语（拉丁文）",
      sat: "桑塔利语（欧甘文）",
      Esperanto: "世界语",
      Swati: "斯瓦特语",
      "Scottish Gaelic": "苏格兰盖尔语",
      sus: "苏苏语",
      ceb: "宿务语",
      ber: "塔马齐格特语（提非纳文）",
      "ber-Latn": "塔马塞特语",
      Tahitian: "塔希提语",
      Tonga: "汤加语",
      Tigrinya: "提格里尼亚语",
      tcy: "图鲁语",
      tum: "图姆布卡语",
      tyv: "图瓦语",
      war: "瓦瑞语",
      mak: "望加锡语",
      vec: "威尼斯语",
      Uyghur: "维吾尔语",
      Venda: "文达语",
      Wolof: "沃洛夫语",
      udm: "乌德穆尔特语",
      szl: "西里西亚语",
      scn: "西西里语",
      hil: "希利盖农语",
      jam: "牙买加土语",
      sah: "雅库特语",
      ace: "亚齐语",
      iba: "伊班语",
      Igbo: "伊博语",
      ilo: "伊洛卡诺语",
      "iu-Latn": "因纽特语（拉丁文）",
      Inuktitut: "因纽特语（音节）",
      yua: "尤卡坦玛雅语",
      Dzongkha: "宗卡语",
      Zulu: "祖鲁语"
    },
    notFund: "未找到",
    notFundDesc: "我们未能找到您要查找的内容。",
    shareTips: "拥有以下安全链接的任何人都可以查看此文字记录和相关媒体文件。",
    copyLink: "复制链接",
    copySuccessful: "复制成功",
    copyFail: "复制失败",
    closeTrans: "取消翻译",
    upgradeBtn: "立即升级",
    upgradeTip30: "此文件超过30分钟时长。",
    upgradeTipMore: "升级到Scribify 专业版可转录长达10小时的文件"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "或", // 或
    signup: "注册", // 注册
    sign_up: "注册", // 注册
    loginByGoogle: "使用Google登录", // 使用Google登录
    emailAddress: "请输入您的邮箱", // 请输入您的邮箱
    createAccount: "创建账户", // 创建账户
    accountExists: "已经有账户了? ", // 已经有账户了？登录
    agreeTerm: {
      // // 我同意 XXX 服务条款和隐私政策
      agree: "我同意{proName}{terms}和{policy}。",
      terms: "服务条款",
      policy: "隐私政策"
    },
    setPassword: "设置密码", // 设置密码
    code: "验证码", // 验证码
    resend: "重新发送", // 重新发送
    codeToEmail:
      "我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。", // 我们刚刚向您的邮箱发送了验证码，请查看收件箱并将验证码粘贴到上方。
    enterPassword: "请输入密码。", // 请输入密码
    passwordLeval: "密码强度", // 密码强度
    Weak: "弱", // 弱 中 强
    Medium: "中", // 弱 中 强
    Strong: "强", // 弱 中 强
    confirmPassword: "确认密码", // 确认密码
    invalidEmail: "无效的邮箱地址", // 无效的邮箱地址
    logInDirectly: "账户已存在，请直接登录。", // 账户已存在，请直接登录
    codeErrorTryAgain: "验证码错误，请重试。", // 验证码错误，请重试
    atLeastSix: "密码长度至少6位。", // 密码长度至少6位
    passwordNotMatch: "密码不匹配，请重试。", // 密码不匹配，请重试
    login: "登录", // 登录
    log_in: "登录", // 登录
    log_In: "登录", // 登录
    password: "密码", // 密码
    forgotPassword: "忘记密码？", // 忘记密码？
    noAccount: "没有账户？", // 没有账户？注册
    accountNotExists: "账户不存在。", // 账户不存在
    passwordError: "密码错误", // 密码错误
    sendCode: "发送验证码", // 发送验证码
    resetPassword: "重置密码", // 重置密码
    resetYourPassword: "重置密码", // 重置你的密码
    newOldCantSame: "新密码与旧密码不能相同。", // 新密码与旧密码不能相同
    passwordResetOk: "密码重置成功！" // 密码重置成功！
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "订阅计划",
    freeversion: "免费版",
    transcribeTimesDay: "每日3次转录",
    freeThreeTimesDay: "每天免费转录3个文件。",
    uploadMinutes: "30分钟上传",
    oneFileUploaded: "每个文件最长30分钟，每次仅能上传一个文件",
    lowerPriority: "低优先级",
    needsToWaitLonger: "每日3次转录。文件转录前需要等待更长时间。",
    currentPlan: "当前计划",
    professionalEdition: "专业版",
    unlimitedTranscription: "无限次转录",
    unlimitedNumberOfTimes: "单人无限次转录服务。",
    uploadWithinHours: "10小时以内上传",
    filesUploadedAtOnce: "单个文件最长10小时/5GB。可同时上传50个文件。",
    highestPriority: "最高优先级",
    weWillGiveTheHighest: "我们将始终以最高优先级尽快转录您的文件。",
    theFirstMonth: "首月",
    subscribeTo: "订阅",
    basicVersionFree: "基础版（免费）",
    return: "返回",
    annualize: "按年订阅",
    monthly: "按月订阅",
    everyYear: "每年",
    saved: "已节省",
    byTheMonth: "按月",
    firstMonth: "首月",
    afterwardsEveryMonth: "之后每月",
    manageSubscription: "管理订阅",
    professionalYearbook: "专业年费版",
    professionalMonthly: "专业月费版",
    subscriptionWillCancelledOn: "订阅到期日",
    displayLanguage: "显示语言",
    update: "立即升级",
    basicversion: "基础版（免费）",
    daily: "已用{start}次，每日限额{end}次",
    upgradetoPro: "升级至专业版",
    accountSetting: "账户设置",
    returnAccountSetting: "返回账户设置",
    logOut: "退出登录",
    account: "账户",
    email: "电子邮箱",
    id: "ID",
    password: "密码",
    resetPassword: "重置密码",
    logIn: "登录",
    tryForFree: "免费试用",
    notFund: "未找到",
    couldntFind: "找不到您要的内容。",
    proAnnual: "专业年费版",
    yourSubscription: "您的订阅将于以下日期取消",
    proMonthly: "专业月费版",
    perMonth: "每月",
    afterwards: "之后",
    accuracy: "转录准确率",
    supported: "支持语言",
    identification: "说话人识别",
    transcriptSranslation: "转录翻译",
    perYear: "每年",
    getProPlan: "获取专业版",
    changeToAnnual: "切换为年费",
    automaticRenewalon: "自动续费日期"
  },
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中文(简体)",
      "Chinese(Traditional)": "中文(繁体)",
      Japanese: "日语",
      Danish: "丹麦语",
      German: "德语",
      English: "英语",
      Spanish: "西班牙语",
      French: "法语",
      Italian: "意大利语",
      Hungarian: "匈牙利语",
      Dutch: "荷兰语",
      Norwegian: "挪威语",
      Polish: "波兰语",
      Portuguese: "葡萄牙语",
      Finnish: "芬兰语",
      Swedish: "瑞典语",
      Turkish: "土耳其语",
      Greek: "希腊语",
      Russian: "俄语",
      Ukrainian: "乌克兰语",
      Hebrew: "希伯来语",
      Arabic: "阿拉伯语",
      Korean: "韩语"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "​开源的Nuxt3 SaaS模板，预集成全球支付网关（Stripe/Cream）、Google OAuth、i18n路由和SEO优化工具。专为开发多语言Web应用的开发者设计，提供SSR/SSG支持和生产级安全性。",
    startLink: "开始免费试用~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle: "加入候补名单，第一时间获取最新NuxtPro新闻和折扣！",
      placeholder: "输入您的邮箱",
      button: "加入候补名单",
      joinCountMessage: "🔥 早期用户 #{count} 刚刚加入了候补名单！"
    },
    seo: {
      title: "开源Nuxt SaaS样板 | NuxtPro",
      description:
        "包含您需要的一切的NuxtJS样板，让您的产品快速面向客户。从想法到生产只需5分钟。"
    },
    api: {
      title: "这是一个演示",
      corpInfo: "公司信息"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "视频下载错误"
      },
      mse: {
        code: 2,
        msg: "流追加错误"
      },
      parse: {
        code: 3,
        msg: "解析错误"
      },
      format: {
        code: 4,
        msg: "格式错误"
      },
      decoder: {
        code: 5,
        msg: "解码错误"
      },
      runtime: {
        code: 6,
        msg: "语法错误"
      },
      timeout: {
        code: 7,
        msg: "播放超时"
      },
      other: {
        code: 8,
        msg: "其他错误"
      }
    },
    HAVE_NOTHING: "没有关于音频/视频是否就绪的信息",
    HAVE_METADATA: "音频/视频的元数据已就绪",
    HAVE_CURRENT_DATA:
      "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒",
    HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的",
    HAVE_ENOUGH_DATA: "可用数据足以开始播放",
    NETWORK_EMPTY: "音频/视频尚未初始化",
    NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络",
    NETWORK_LOADING: "浏览器正在下载数据",
    NETWORK_NO_SOURCE: "未找到音频/视频来源",
    MEDIA_ERR_ABORTED: "取回过程被用户中止",
    MEDIA_ERR_NETWORK: "网络错误",
    MEDIA_ERR_DECODE: "解码错误",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式",
    REPLAY: "重播",
    ERROR: "网络连接似乎出现了问题",
    PLAY_TIPS: "播放",
    PAUSE_TIPS: "暂停",
    PLAYNEXT_TIPS: "下一集",
    DOWNLOAD_TIPS: "下载",
    ROTATE_TIPS: "旋转",
    RELOAD_TIPS: "重新载入",
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: "退出全屏",
    CSSFULLSCREEN_TIPS: "进入样式全屏",
    EXITCSSFULLSCREEN_TIPS: "退出样式全屏",
    TEXTTRACK: "字幕",
    PIP: "画中画",
    SCREENSHOT: "截图",
    LIVE: "正在直播",
    OFF: "关闭",
    OPEN: "开启",
    MINI_DRAG: "点击按住可拖动视频",
    MINISCREEN: "小屏幕",
    REFRESH_TIPS: "请试试",
    REFRESH: "刷新",
    FORWARD: "快进中",
    LIVE_TIP: "直播",
    TM_SUBTITLE_SHOW_TIPS: "开启字幕",
    TM_SUBTITLE_HIDE_TIPS: "关闭字幕",
    TM_MINIMIZE_TIPS: "隐藏视频"
  },
  privacyPolicy: {
    privacyPolicyTitle: "隐私政策",
    lastUpdated: "最后更新：2025年8月25日",
    policyDescription:
      "本政策描述了 Scribify（以下简称“Scribify”、“我们的”、“我们”）在您使用我们的服务、网站时如何收集、使用和披露您的个人信息",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition: "以及软件（统称为“服务”）。",
    policyAgreement:
      "请仔细阅读本隐私政策，并确保您理解其内容。使用我们的任何服务，即表示您同意本隐私政策。如果您不同意我们根据本政策使用您的个人数据，您必须立即停止使用我们的服务。",
    policyOverview:
      "在本政策中，我们阐述了：我们收集哪些数据以及收集原因；您的数据将如何处理；以及您对您的数据享有的权利。我们不会出售您的数据。",
    scopeTitle: "1.本隐私政策的范围",
    whatWeCollectTitle: "2. 我们收集哪些信息以及为什么",
    accessShareTitle: "3. 我们何时访问或共享您的信息",
    secureDataTitle: "4. 我们如何保护您的数据",
    deleteContentTitle: "5. 删除内容后会发生什么",
    locationTitle: "6. 站点和数据的位置",
    childrenPrivacyTitle: "7.儿童隐私",
    updatesTitle: "8. 本隐私政策的更新",
    contactUsTitle: "9. 联系我们",
    identityAccessTitle: "2.1 身份与访问",
    billingInfoTitle: "2.2 账单信息",
    productInteractionsTitle: "2.3 产品交互",
    websiteInteractionsTitle: "2.4 网站互动",
    cookiesTitle: "2.5 Cookie",
    voluntaryCorrespondenceTitle: "2.6 自愿通信",
    scopeContent:
      "本隐私政策仅适用于我们对服务用户信息的收集和处理。本隐私政策不适用于任何链接到我们的第三方运营的服务、网站或软件（无论这些链接是由我们提供的还是其他用户分享的），也不适用于来自第三方的内容、数据、应用程序或资料。我们建议您在向任何第三方网站或软件提供任何信息之前，先查看其隐私政策。",
    collectPrinciple:
      "我们的指导原则是只收集我们需要的信息。以下是实际操作中的含义：",
    identityAccessContent:
      "当您注册我们的某款产品时，我们会要求您提供身份信息，例如您的姓名、电子邮件地址。这是为了提供必要的产品功能，并方便我们向您发送产品更新和其他重要信息。",
    billingInfoContent:
      "如果您注册付费产品，我们将要求您提供付款信息和账单地址。付款信息将直接提交给我们的付款处理器，不会发送到我们的服务器。",
    productInteractionsContent:
      "我们将您在产品帐户中上传、接收或维护的内容存储在我们的服务器上。除非您删除这些内容，否则只要您的帐户处于活跃状态，我们就会一直保留这些内容。",
    websiteInteractionsContent:
      "我们收集您的浏览活动信息，用于分析和统计目的，例如转化率测试和新产品设计实验。这些信息包括：例如，您的浏览器和操作系统版本、您的 IP 地址、您访问过的网页及其加载时间，以及哪个网站将您推荐给我们。如果您拥有账户并已登录，这些网络分析数据将与您的 IP 地址和用户账户绑定，直至您的账户不再活跃。",
    cookiesContent1:
      "我们还使用持久性第一方 cookie 和一些第三方 cookie 来存储某些偏好，让您更轻松地使用我们的应用程序，并执行 A/B 测试以及支持一些分析。",
    cookiesContent2:
      "Cookie 是浏览器存储的一段文本。它可以帮助您记住登录信息和站点偏好设置。它还可能收集您的浏览器类型、操作系统、访问过的网页、访问时长、浏览过的内容以及其他点击流数据等信息。您可以在浏览器设置中调整 Cookie 保留设置，并接受或阻止单个 Cookie。但是，如果您关闭 Cookie，我们的应用程序将无法运行，我们服务的其他方面也可能无法正常运行。",
    voluntaryCorrespondenceContent:
      "当您通过电子邮件向我们提出问题或寻求帮助时，我们会保留该通信记录，包括您的电子邮件地址，以便我们在您将来联系我们时可以参考过去的通信记录。",
    accessShareContent1:
      "为了提供您所请求的产品或服务。我们会使用一些第三方子处理器来协助运行我们的应用程序并向您提供服务。这包括云和分析提供商。",
    accessShareContent2:
      "调查、预防或采取行动应对滥用行为。在调查潜在滥用行为时，访问客户账户是不得已而为之。我们希望保护客户和举报人的隐私和安全，并在整个过程中尽力平衡这些责任。如果我们发现您将我们的产品用于受限用途，我们将采取必要的措施，包括在必要时通知相关部门。",
    accessShareContent3: "根据适用法律的要求。",
    userDataRequests:
      "- 用户数据请求。我们的政策是，除非法律程序强制要求或在有限的紧急情况下，否则我们不会响应政府的用户数据请求。但是，如果美国执法机构持有必要的搜查令、刑事传票或法院命令要求我们共享数据，我们必须遵守。同样，只有在美国政府通过司法互助条约或协议中规定的程序强制要求的情况下，我们才会响应来自美国境外政府机构的请求。我们的政策是在共享数据之前通知受影响的用户，除非法律禁止我们这样做，并且某些紧急情况除外。",
    preservationRequests:
      "- 保存请求。同样，我们的政策是，仅在美国《联邦存储通信法》第 18 USC 第 2703(f) 条或美国民事传票强制要求的情况下，我们才会遵守保存数据的请求。除非法律要求或法院命令强制要求（我们选择不上诉），否则我们不会共享已保存的数据。此外，除非我们在规定保存期到期前收到适当的搜查令、法院命令或传票，否则我们将在保存期结束时销毁任何已保存的客户数据副本。",
    taxAudit:
      "- 如果我们受到税务机关的审计，我们可能需要共享账单相关信息。在这种情况下，我们只会共享必要的最低限度的信息，例如账单地址和免税信息。",
    secureDataContent1: "所有数据均通过加密",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "当从我们的服务器传输到您的浏览器时。",
    deleteContentContent: "如果您删除任何内容，它将立即变得无法访问。",
    locationContent:
      "我们的产品和其他网络资产在美国运营。如果您位于欧盟、英国或美国以外的其他地方，请注意，您向我们提供的任何信息都将被传输至美国并存储于美国。使用我们的网站或服务和/或向我们提供您的个人信息，即表示您同意此类传输。",
    childrenPrivacyContent:
      "本服务并非针对儿童，我们不会故意收集 13 岁以下儿童的个人信息。如果您未满 13 岁，请勿通过本服务提交任何个人信息。如果您认为有儿童违反本政策向我们提供了个人信息，请按照以下方式联系我们。",
    updatesContent:
      "我们可能会根据需要更新本政策，以符合相关法规并反映任何新的做法。每当我们的政策做出重大变更时，我们都会更新本页面顶部的日期。",
    contactUsContent1: "如果您对我们的隐私政策有任何疑问、意见或投诉，请",
    contactUs: "联系我们",
    contactUsContent2: "我们将尽力尽快处理您的投诉。"
  },
  termsOfService: {
    termsOfServiceTitle: "服务条款",
    lastUpdated: "最后更新：2022 年 9 月 21 日",
    thankYouMessage: "感谢您使用我们的产品！",
    companyReference:
      "当我们在本文档中说“公司”、“我们”、“我们的”或“我们”时，我们指的是 Scribify。",
    servicesDefinition:
      "当我们说“服务”时，我们指的是 Scribify 创建和维护的任何产品，无论是通过网络浏览器、桌面应用程序、移动应用程序还是其他格式交付。",
    termsUpdateNotice:
      "我们未来可能会更新本服务条款。通常，这些变更旨在通过链接至更详细的相关政策来澄清部分条款。每当我们对政策做出重大变更时，我们都会更新本页面顶部的日期，并采取其他适当措施通知帐户持有人。",
    acceptanceOfAgreementTitle: "1. 接受协议",
    scribifyServicesTitle: "2. Scribify 的服务",
    accountTermsTitle: "3. 账户条款",
    paymentRefundsTitle: "4. 付款、退款和计划变更",
    cancellationTerminationTitle: "5. 取消和终止",
    submissionsTitle: "6. 提交内容",
    uptimeSecurityTitle: "7. 正常运行时间和安全性",
    siteManagementTitle: "8.现场管理",
    copyrightContentTitle: "9. 版权和内容所有权",
    prohibitedActivitiesTitle: "10.禁止的活动",
    featuresBugsTitle: "11. 功能和错误",
    correctionsTitle: "12. 更正",
    userDataTitle: "13.用户数据",
    privacyPolicyTitle: "14. 隐私政策",
    liabilityTitle: "15. 责任",
    miscellaneousTitle: "16. 其他",
    contactUsTitle: "17. 联系我们",
    acceptanceContent1:
      "使用我们的服务，即表示您接受本协议，本协议由此成为您与 Scribify 之间具有约束力的合同。您声明您具备法定能力接受这些条款，并确认您已达到订立具有约束力合同的法定年龄。Scribify 的接受明确以您同意本协议的所有条款和条件为前提。",
    acceptanceContent2:
      "该服务不适用于 18 岁以下的任何人，也不应该由 18 岁以下的任何人使用。通过使用该服务，您声明并保证您符合上述资格要求。",
    acceptanceContent3:
      "“您”、“您的”、“您本人”等词语也包括您的员工、代理人、业务代表以及您允许通过您的帐户（定义见下文）访问服务的任何其他个人。您有责任确保所有通过您的帐户访问服务的人员均知悉并遵守本条款。",
    acceptanceContent4:
      "Scribify 保留随时自行决定修改和更新本条款的权利。所有变更一经发布即刻生效。如果您在修订条款发布后继续使用服务，即表示您接受并同意这些变更。由于变更对您具有约束力，因此请您不时查看此页面，以了解任何变更。",
    servicesContent1:
      "我们的服务使用户能够将语音对话转换为可搜索、翻译和与他人共享的转录文本。",
    servicesContent2:
      "您可以选择使用服务的免费版本（“免费服务”）或可能需要支付费用的订阅式付费版本服务（“付费服务”）。",
    servicesContent3:
      "我们将向您提供服务。您有责任做好一切必要安排，以便访问服务。",
    accountTerms1:
      "- 您有责任维护您的账户安全。如果您未能履行此安全义务，本公司将不承担任何因您未能履行此安全义务而造成的任何损失或损害。",
    accountTerms2: "- 您不得将服务用于任何非法、不道德或不道德的目的。",
    accountTerms3:
      "- 您应对您帐户下发布的所有内容和活动负责。这包括以下人员发布的内容：(a) 有权访问您的登录凭据；或 (b) 在您的帐户下拥有自己的登录信息。",
    accountTerms4:
      "- 您必须是人类。不允许使用“机器人”或其他自动化方法注册的账户。",
    paymentContent1:
      "- 对于提供免费试用的付费服务，我们会在您注册时说明试用期限。试用期结束后，您需要提前付费才能继续使用服务。如果您不付费，这些服务将被终止。",
    paymentContent2:
      "- 如果您从免费计划升级到付费计划，我们将立即从您的卡中扣款，您的计费周期从升级当天开始。",
    paymentContent3:
      "- 所有费用均不含税务机关征收的任何税费、征税或关税。如有需要，我们将代表税务机关代收这些税费，并将税费汇给税务机关。否则，您需自行承担所有税费、征税或关税。",
    paymentContent4:
      "- 所有购买均不可退款。您可以随时登录您的帐户取消任何付费服务。对于付费订阅，除非另有说明，否则您的取消将在当前付费期限结束时生效。",
    cancellationContent1:
      "- 如果您在任何付费期限结束前取消服务，您的取消将立即生效，并且不会再次向您收费。我们不会在上一个计费周期内自动按比例分配未使用的时间。",
    cancellationContent2:
      "- 我们有权随时以任何理由暂停或终止您的帐户，并拒绝您当前或未来使用我们的服务。暂停意味着您将无法访问该帐户或帐户中的任何内容。终止将导致您的帐户或您对帐户的访问权限被删除，以及您帐户中所有内容的丧失和放弃。我们还保留随时以任何理由拒绝任何人使用服务的权利。我们制定此条款是因为从统计数据来看，在我们服务的数十万个帐户中，至少有一个帐户正在从事恶意活动。",
    cancellationContent3:
      "- 对公司员工或官员进行口头、身体、书面或其他辱骂（包括辱骂或报复威胁）可能会导致立即终止帐户。",
    submissionsContent:
      "您确认并同意，您向我们提供的关于本网站的任何问题、评论、建议、想法、反馈或其他信息（统称“提交内容”）均非保密信息，并将成为我们的唯一财产。我们拥有包括所有知识产权在内的专有权利，并有权出于任何合法目的（商业或其他目的）不受限制地使用和传播这些提交内容，而无需向您确认或支付任何报酬。您特此放弃对任何此类提交内容的所有精神权利，并保证任何此类提交内容均为您的原创或您有权提交此类提交内容。您同意，对于任何涉嫌或实际侵犯或盗用您提交内容中任何专有权利的行为，您不得向我们追诉。",
    uptimeContent1:
      "- 您使用本服务的风险由您自行承担。我们以“现状”和“可用”为基础提供这些服务。我们大多数服务不提供服务级别协议，但我们非常重视应用程序的正常运行时间。",
    uptimeContent2:
      "- 如果您的使用量显著超过其他用户的平均使用量，我们保留暂时停用您帐户的权利。当然，我们会在采取任何措施之前与您联系，除非在极少数情况下，您的使用量可能会对其他用户的服务性能产生负面影响。",
    uptimeContent3:
      "- 我们采取多种措施，通过备份、冗余和加密来保护您的数据安全。我们对通过公共互联网传输的数据强制加密。",
    uptimeContent4:
      "- 我们使用第三方供应商和托管合作伙伴来提供运行服务所需的必要硬件、软件、网络、存储和相关技术。",
    siteManagementContent:
      "我们保留以下权利（但没有义务）：（1）监控网站是否违反这些服务条款；（2）对我们自行决定违反法律或这些服务条款的任何人采取适当的法律行动，包括但不限于向执法部门举报该用户；（3）我们自行决定且不受限制地拒绝、限制访问、限制可用性或禁用（在技术可行的范围内）您的任何贡献或其任何部分；（4）我们自行决定且不受限制地、通知或承担责任，从网站中删除或以其他方式禁用所有过大或以任何方式对我们的系统造成负担的文件和内容；以及（5）以旨在保护我们的权利和财产并促进网站正常运行的方式管理网站。",
    copyrightContent1: "- 服务上发布的所有内容必须符合美国版权法。",
    copyrightContent2:
      "- 我们对您向服务提供的材料不主张任何知识产权。所有上传的材料仍归您所有。",
    copyrightContent3:
      "- 我们不预先筛选内容，但保留自行决定拒绝或删除通过服务提供的任何内容的权利（但没有义务）。",
    copyrightContent4:
      "- 服务的名称、外观和风格均受公司版权©保护。保留所有权利。未经公司明确书面许可，您不得复制、抄袭或重复使用任何 HTML、CSS、JavaScript 或视觉设计元素。您必须申请许可才能将公司徽标或任何服务徽标用于推广目的。请",
    emailUs: "给我们发电子邮件",
    copyrightContent5:
      "请求使用徽标。如果您违反本服务条款，我们保留撤销此许可的权利。",
    copyrightContent6:
      "- 您同意未经公司明确的书面许可，不得复制、复印、拷贝、出售、转售或利用服务的任何部分、使用服务或访问服务。",
    copyrightContent7: "- 您不得修改其他网站以错误地暗示其与服务或公司相关。",
    copyrightContent8:
      "- 我们尊重他人的知识产权。如果您认为本网站上或通过本网站提供的任何材料侵犯了您拥有或控制的任何版权，请立即",
    contactUs: "联系我们",
    copyrightContent9:
      "您的通知副本将发送给发布或存储通知中提及资料的人员。请注意，根据适用法律，如果您在通知中作出重大失实陈述，您可能需承担损害赔偿责任。因此，如果您不确定本网站上或链接的资料是否侵犯了您的版权，您应该首先考虑联系律师。",
    prohibitedActivitiesIntro:
      "您不得出于我们提供本网站目的以外的任何目的访问或使用本网站。除我们明确认可或批准的商业活动外，不得将本网站用于任何商业活动。",
    prohibitedActivitiesUserAgreement: "作为本网站的用户，您同意不：",
    prohibitedActivity1:
      "- 未经我们书面许可，系统地从网站检索数据或其他内容，以直接或间接地创建或编译集合、汇编、数据库或目录。",
    prohibitedActivity2:
      "- 欺骗、诈骗或误导我们和其他用户，尤其是试图了解用户密码等敏感帐户信息。",
    prohibitedActivity3:
      "- 规避、禁用或以其他方式干扰本网站的安全相关功能，包括阻止或限制使用或复制任何内容或强制限制使用本网站和/或其中包含的内容的功能。",
    prohibitedActivity4:
      "- 我们认为，贬低、玷污或以其他方式损害我们和/或本网站。",
    prohibitedActivity5: "- 使用从本网站获得的任何信息来骚扰、辱骂或伤害他人。",
    prohibitedActivity6:
      "- 不当使用我们的支持服务或提交虚假的滥用或不当行为报告。",
    prohibitedActivity7: "- 以不符合任何适用法律或法规的方式使用本网站。",
    prohibitedActivity8: "- 未经授权构建或链接本网站。",
    prohibitedActivity9:
      "- 上传或传输（或试图上传或传输）病毒、特洛伊木马或其他材料，包括过度使用大写字母和垃圾邮件（连续发布重复文本），干扰任何一方对网站的不间断使用和享受，或修改、损害、破坏、更改或干扰网站的使用、特性、功能、操作或维护。",
    prohibitedActivity10:
      "- 从事任何自动化系统使用，例如使用脚本发送评论或消息，或使用任何数据挖掘、机器人或类似的数据收集和提取工具。",
    prohibitedActivity11: "- 从任何内容中删除版权或其他所有权声明。",
    prohibitedActivity12: "- 试图冒充其他用户或个人或使用其他用户的用户名。",
    prohibitedActivity13:
      "- 上传或传输（或试图上传或传输）任何作为被动或主动信息收集或传输机制的材料，包括但不限于清晰图形交换格式（“gif”）、1×1像素、网络臭虫、cookies或其他类似设备（有时称为“间谍软件”或“被动收集机制”或“pcms”）。",
    prohibitedActivity14:
      "- 干扰、破坏或对本网站或与本网站相连的网络或服务造成不当负担。",
    prohibitedActivity15:
      "- 骚扰、烦扰、恐吓或威胁任何向您提供本网站任何部分的员工或代理人。",
    prohibitedActivity16:
      "- 试图绕过本网站为防止或限制访问本网站或本网站任何部分而设计的任何措施。",
    prohibitedActivity17:
      "- 复制或改编本网站的软件，包括但不限于 Flash、PHP、HTML、JavaScript 或其他代码。",
    prohibitedActivity18:
      "- 除适用法律允许外，不得对包含或以任何方式构成本网站一部分的任何软件进行解密、反编译、反汇编或反向工程。",
    prohibitedActivity19:
      "- 除标准搜索引擎或互联网浏览器的使用结果外，使用、启动、开发或分发任何自动化系统，包括但不限于访问本网站的任何蜘蛛、机器人、欺骗实用程序、抓取工具或离线阅读器，或使用或启动任何未经授权的脚本或其他软件。",
    prohibitedActivity20: "- 使用采购代理或采购代理在网站上进行购买。",
    prohibitedActivity21:
      "- 未经授权使用本网站，包括通过电子或其他方式收集用户的用户名和/或电子邮件地址以发送未经请求的电子邮件，或通过自动方式或虚假借口创建用户帐户。",
    prohibitedActivity22:
      "- 将本网站用作与我们竞争的任何努力的一部分，或以其他方式将本网站和/或内容用于任何创收活动或商业企业。",
    prohibitedActivity23: "- 使用本网站宣传或提供销售商品和服务。",
    prohibitedActivity24: "- 出售或以其他方式转让您的个人资料。",
    featuresContent1:
      "我们根据自身经验以及客户分享的时间和反馈，精心设计我们的服务。然而，不可能存在让所有人满意的服务。我们不保证我们的服务一定能满足您的特定要求或期望。",
    featuresContent2:
      "我们还会测试所有功能，然后再发布。与任何软件一样，我们的服务不可避免地会存在一些错误。我们会跟踪收到的错误报告并努力解决，尤其是与安全或隐私相关的错误。并非所有报告的错误都会得到修复，我们也无法保证服务完全没有错误。",
    correctionsContent1:
      "本网站上的信息可能存在排印错误、不准确或遗漏，包括描述、价格、供货情况以及其他各种信息。我们保留随时更正任何错误、不准确或遗漏以及更改或更新本网站信息的权利，恕不另行通知。",
    correctionsContent2:
      "我们无法保证本网站始终可用。我们可能会遇到硬件、软件或其他问题，或需要执行与本网站相关的维护，从而导致中断、延迟或错误。我们保留随时以任何理由更改、修订、更新、暂停、中止或以其他方式修改本网站的权利，恕不另行通知。您同意，对于因您在本网站停机或中止期间无法访问或使用本网站而造成的任何损失、损害或不便，我们概不负责。本服务条款中的任何内容均不得解释为我们有义务维护和支持本网站，或提供与此相关的任何更正、更新或发布。",
    userDataContent:
      "我们将保留您传输至本网站的某些数据，用于管理本网站的性能，以及与您使用本网站相关的数据。尽管我们会定期备份数据，但您应对您传输的所有数据或与您使用本网站进行的任何活动相关的数据承担全部责任。您同意，对于任何此类数据的丢失或损坏，我们概不负责，并且您特此放弃因任何此类数据的丢失或损坏而向我们提起诉讼的权利。",
    privacyPolicyContent1: "我们重视数据隐私和安全。请查看我们的",
    privacyPolicy: "隐私政策",
    privacyPolicyContent2:
      ". 使用本网站即表示您同意遵守我们的隐私政策，该政策已纳入本服务条款。请注意，本网站托管于美国。如果您从世界任何其他地区访问本网站，且该等地区在管理个人数据收集、使用或披露方面适用的法律或其他要求与美国适用法律不同，则您继续使用本网站即表示您将把您的数据传输至美国，并且您同意将您的数据传输至美国并在美国进行处理。",
    liabilityIntro: "我们在这些条款中都提到了责任，但将其全部放在一个部分：",
    liabilityContent:
      "您明确理解并同意，对于因以下原因造成的任何直接、间接、附带、利润损失、特殊、后果性、惩罚性或惩戒性损害，包括但不限于利润损失、商誉损失、使用损失、数据损失或其他无形损失（即使公司已被告知发生此类损害的可能性），本公司不对您或任何第三方承担法律或衡平法上的责任：（1）使用或无法使用服务；（2）内容和材料的错误、失误或不准确之处；（3）因您访问和使用本网站而造成的任何性质的人身伤害或财产损失；（4）因通过或从服务购买或获得的任何商品、数据、信息或服务或收到的消息或达成的交易而产生的替代商品和服务的采购成本；（5）未经授权访问或使用我们的安全服务器和/或存储在其中的任何和所有个人信息和/或财务信息；（6）中断或停止往返于本网站的传输； (7) 任何第三方传输到或通过本网站的任何错误、病毒、特洛伊木马或类似物，和/或； (8) 任何内容和材料中的任何错误或遗漏，或因使用通过本网站发布、传输或以其他方式提供的任何内容而导致的任何损失或损害； (9) 任何第三方在服务上的声明或行为； (10) 或与本服务条款或服务有关的任何其他事项，无论是违约、侵权行为（包括主动或被动的疏忽）还是任何其他责任理论。",
    miscellaneousContent:
      "本服务条款以及我们在网站上发布的或与网站相关的任何政策或运营规则构成您与我们之间的完整协议和谅解。我们未能行使或执行本服务条款中的任何权利或规定，并不构成对该权利或规定的放弃。本服务条款在法律允许的最大范围内有效。我们可随时将我们的部分或全部权利和义务转让给他人。对于因超出我们合理控制范围的任何原因造成的任何损失、损害、延误或未能采取行动，我们概不负责。如果本服务条款的任何规定或部分规定被认定为非法、无效或不可执行，则该规定或部分规定将被视为可与本服务条款分割，且不影响任何其他规定的有效性和可执行性。您与我们之间并未因本服务条款或使用本网站而建立合资、合作、雇佣或代理关系。您同意，本服务条款不会因起草本服务条款而被解释为我们无效。您特此放弃基于本服务条款的电子形式以及本协议各方未签署执行本服务条款而可能拥有的任何及所有抗辩。",
    contactUsContent1: "如果您对任何服务条款有疑问，请",
    contactUsContent2: "。"
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
