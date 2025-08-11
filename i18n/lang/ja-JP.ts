// 日语
let message = {
  proName: "Scribify",
  HomePage: {
    home: "ホームページ",
    times: "1日{times}回の無料転写、今日は{left}回残っています。",
    tips: "無制限の文字起こしのためにProにアップグレードしてください。",
    version: "基本版（無料）: ",
    update: "今すぐアップグレード",
    folders: "フォルダー",
    rename: "名前変更",
    delete: "削除",
    createTitle: "フォルダーの作成",
    deleteConfirm:
      "「{name}」を削除してもよろしいですか？フォルダ内の全ファイルも削除されます。",
    cancel: "キャンセル",
    confirm: "作成",
    dialogLabel: "フォルダー名",
    recently: "最近使用したファイル",
    loading: "読み込み中",
    tour: {
      step0: {
        title: "{name}へようこそ",
        tip: "ここでできること:",
        content: "一回限りの会話、会議、講義などを文字起こし",
        next: "はじめる"
      },
      step1: {
        title: "ファイルの文字起こし",
        content: "3つの文字起こし方法をサポート: ローカルファイル、リンク、録音"
      },
      step2: {
        title: "フォルダーの作成",
        content: "「+」をクリックしてフォルダーを作成し、ファイルを整理"
      },
      step3: {
        title: "文字起こし詳細の表示と編集",
        content:
          "項目をクリックすると、転写の詳細が表示され、編集したり、翻訳したりすることもできます。"
      },
      next: "次へ",
      finish: "了解"
    },
    export: {
      export: "エクスポート",
      title: "エクスポートファイルを生成しています",
      title2: "ファイルの準備ができました",
      singleLoadingContent: "1つのファイルを圧縮中です。",
      singleSuccessContent: "1つのファイルを圧縮しました。",
      loadingContent: "{num}個のファイルを圧縮中です。",
      successContent: "{num}個のファイルを圧縮しました。",
      cancel: "エクスポートをキャンセル",
      error: "エクスポートエラー",
      dialog: {
        title: "警告",
        content: "エクスポートをキャンセルしますか？",
        cancel: "エクスポートをキャンセル",
        continue: "エクスポートを続行"
      }
    },
    welcome: {
      title: "Scribifyへようこそ！",
      description: "ここでできること：",
      transcribe:
        "Scribifyで簡単に文字起こし—音声会話を明確で検索可能、共有可能なテキストに瞬時に変換します。",
      precision: "話者識別とタイムスタンプを含む正確な文字起こしをすぐに取得。",
      translate: "言語の壁を打ち破る：200以上の言語に文字起こしを簡単に翻訳。",
      edit: "必要に応じたフォーマットで文字起こしの編集、改善、エクスポート。",
      collaborate: "文字起こしテキストを他の人と共有して協力作業。",
      button: "はじめる",
      tip: "音声を文字起こしテキストに変換する準備はできましたか？今すぐ探索を始めましょう！",
      tip2: "今すぐ探索を始めましょう！",
      tip1: "音声を文字起こしテキストに変換する準備はできましたか？ "
    },
    subscriptionModal: {
      left: {
        title: "Proプランでさらに機能を解除",
        c1: "無制限の文字起こし",
        c2: "10時間のアップロード",
        c3: "最高優先度",
        c4: "99%の文字起こし精度",
        c5: "100以上の言語サポート",
        c6: "話者識別",
        c7: "文字起こし翻訳",
        t1: "1人用の無制限文字起こし。",
        t2: "各ファイルは10時間/5 GBまで。一度に50ファイルをアップロード可能。",
        t3: "常に最高優先度であなたのファイルをできるだけ早く文字起こしします。"
      },
      right: {
        title: "Proプランを取得",
        yearly: "年間",
        monthly: "月間",
        save: "節約",
        preMonth: "月あたり",
        preYear: "年あたり",
        firstMonth: "初月",
        afterwards: "その後"
      },
      subscribe: "購読する"
    }
  },
  FolderPage: {
    table: {
      name: "名前",
      duration: "長さ",
      status: "ステータス",
      date: "作成日",
      activity: "アクティビティ",
      empty1: "ここは空です。",
      empty2: "上のボタンをクリックしてファイルを文字起こしします。",
      just: "たった今",
      export: "エクスポート",
      delete: "削除",
      share: "共有",
      rename: "名前変更",
      move: "移動",
      failed: "失敗",
      selected: "選択済み",
      success: "成功",
      fileList: "ファイルリスト"
    },
    dialog: {
      move: {
        title: "移動",
        label: "フォルダーを選択",
        placeholder: "フォルダーを選択",
        confirm: "移動",
        cancel: "キャンセル"
      },
      rename: {
        title: "名前変更",
        label: "ファイル名",
        confirm: "名前変更",
        cancel: "キャンセル"
      },
      delete: {
        title: "削除",
        file: "ファイル",
        files: "ファイル",
        label: "削除を確認しますか？この操作は元に戻せません。",
        confirm: "削除",
        cancel: "キャンセル"
      },
      share: {
        title: "共有",
        label:
          "以下の安全なリンクを持つ人は、この文字起こしテキストと関連するメディアファイルを閲覧できます。",
        confirm: "リンクをコピー",
        success: "コピー成功"
      },
      export: {
        title: "エクスポート",
        select: "必要な形式を選択してください",
        settings: "設定",
        speaker: "話者を含める",
        timecodes: "タイムコードを含める",
        confirm: "エクスポート",
        cancel: "キャンセル",
        selectErr: "1つ以上の形式を選択してください"
      }
    },
    search: {
      placeholder: "検索"
    },
    recently: "最近",
    record: "録音",
    transcribe: "文字起こし",
    unclassified: "未分類フォルダー",
    buttons: {
      transcribe: "ファイルを文字起こし",
      url: "リンクを文字起こし",
      record: "録音して文字起こし",
      recording: "録音中..."
    },
    delSuccess: "削除成功",
    create: "作成"
  },
  FileUploadAndRecording: {
    record: {
      record: "録音",
      pause: "一時停止",
      resume: "再開",
      stop: "停止",
      endRecord: "録音を終了",
      delete: "削除",
      transcribe: "文字起こし",
      permissionDenied: "マイク権限が拒否されたかデバイスが存在しません",
      dialog: {
        delete: {
          title: "警告",
          label: "この録音を削除してもよろしいですか？",
          confirm: "削除",
          cancel: "キャンセル"
        },
        complete: {
          title: "録音完了",
          label:
            "10時間に達したため録音を自動停止しました。文字起こしを行ってください。",
          confirm: "了解"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "オンラインメディアの文字起こし",
        title: "リンクを貼り付け",
        label:
          "以下のプラットフォーム（YouTube、Facebook、X、Dropbox、Google Drive、Vimeo など）からメディアリンクを貼り付けてください",
        confirm: "追加",
        cancel: "キャンセル",
        errorTitle:
          "入力したリンクアドレスが正しくありません。ご確認の上、再度お試しください。",
        linkName: "リンク"
      },
      file: {
        orTitle: "オンラインメディアの文字起こし",
        dialogTitle: "ファイルの文字起こし",
        tip1: "クリックしてアップロード",
        tip2: "またはドラッグ＆ドロップ",
        or: "または"
      },
      del: {
        title: "警告",
        content:
          "すべての進行状況が失われます。文字起こしをキャンセルしてもよろしいですか？",
        cancel: "キャンセルを確認",
        confirm: "文字起こしを続行"
      },
      files: "ファイル",
      resultDialogTitle: "ファイルの文字起こし",
      resultDialogTitle2: "ファイルを転写",
      cancel: "キャンセル",
      confirm: "文字起こし",
      return: "戻る",
      addMore: "さらに追加",
      language: "メディア言語",
      failed: "失敗",
      tooLarge: "ファイルが大きすぎます。",
      linkUpload: "アップロード中...",
      fileFormat: "ファイル形式が許可されていません",
      localFiles: "ローカルファイル",
      pasteLink: "オンラインリンク",
      uploadErr: "アップロードエラー",
      hashErr: "ハッシュエラー",
      table: {
        status: "ステータス",
        file: "ファイル",
        size: "サイズ",
        noData: "データなし"
      },
      maxFileNum: "ファイル数は{num}を超えることはできません。",
      speaker: "話者識別",
      speakerLabel:
        "トランスクリプトの各セグメントに話している人をラベル付けします。"
    }
  },
  // 转录详情页
  TranscriptionPage: {
    edit: "編集",
    translate: "翻訳",
    showSpeaker: "話し手を表示",
    showTimestamp: "タイムスタンプを表示",
    share: "共有",
    shared: "共有済み",
    export: "エクスポート",
    speaker: "話し手_{ id }",
    unassignSpeaker: "話し手の割り当てを解除",
    play: "再生",
    save: "保存",
    undo: "元に戻す",
    redo: "やり直し",
    confirm: "確認",
    cancel: "キャンセル",
    addNew: "新規追加",
    createANewSpeaker: "新しい話し手を作成",
    speakerName: "話し手名",
    addSpeaker: "話し手を追加",
    applyToAllMatchingSpeakers: "一致するすべての話し手に適用",
    cancelTranslation: "翻訳をキャンセル",
    showVideo: "ビデオを表示",
    hideVideo: "ビデオを非表示",
    langChooseV1: {
      recently: "最近",
      popular: "よく使われる",
      other: "その他",
      searchLanguage: "言語を検索",
      noMatch: "一致する言語が見つかりません",
      English: "英語",
      "English(US)": "英語（アメリカ）",
      "English(UK)": "英語（イギリス）",
      Spanish: "スペイン語",
      Portuguese: "ポルトガル語",
      French: "フランス語",
      Italian: "イタリア語",
      German: "ドイツ語",
      Dutch: "オランダ語",
      Polish: "ポーランド語",
      Danish: "デンマーク語",
      Japanese: "日本語",
      Korean: "韓国語",
      Hungarian: "ハンガリー語",
      Czech: "チェコ語",
      Chinese: "中国語",
      Hebrew: "ヘブライ語",
      Arabic: "アラビア語",
      Azerbaijani: "アゼルバイジャン語",
      Estonian: "エストニア語",
      Belarusian: "ベラルーシ語",
      Bulgarian: "ブルガリア語",
      Icelandic: "アイスランド語",
      Bosnian: "ボスニア語",
      Persian: "ペルシャ語",
      Russian: "ロシア語",
      "Chinese(Traditional)": "中国語（繁体字）",
      Finnish: "フィンランド語",
      Kazakh: "カザフ語",
      Galician: "ガリシア語",
      Catalan: "カタルーニャ語",
      "Chinese(Simplified)": "中国語（簡体字）",
      Kannada: "カンナダ語",
      Croatian: "クロアチア語",
      Latvian: "ラトビア語",
      Lithuanian: "リトアニア語",
      Romanian: "ルーマニア語",
      Marathi: "マラーティー語",
      Malay: "マレー語",
      Macedonian: "マケドニア語",
      Maori: "マオリ語",
      Afrikaans: "アフリカーンス語",
      Nepali: "ネパール語",
      Norwegian: "ノルウェー語",
      Swedish: "スウェーデン語",
      Serbian: "セルビア語",
      Slovak: "スロバキア語",
      Slovenian: "スロベニア語",
      Swahili: "スワヒリ語",
      Tagalog: "タガログ語",
      Tamil: "タミル語",
      Thai: "タイ語",
      Turkish: "トルコ語",
      Welsh: "ウェールズ語",
      Urdu: "ウルドゥー語",
      Ukrainian: "ウクライナ語",
      Greek: "ギリシャ語",
      Armenian: "アルメニア語",
      Hindi: "ヒンディー語",
      Indonesian: "インドネシア語",
      Vietnamese: "ベトナム語",
      Albanian: "アルバニア語",
      Amharic: "アムハラ語",
      Assamese: "アッサム語",
      Occitan: "オック語",
      Bashkir: "バシキール語",
      Basque: "バスク語",
      Breton: "ブルトン語",
      Tibetan: "チベット語",
      Faroese: "フェロー語",
      Sanskrit: "サンスクリット語",
      Khmer: "クメール語",
      Georgian: "グルジア語",
      Gujarati: "グジャラート語",
      "Haitian Creole": "ハイチ語",
      Hausa: "ハウサ語",
      Latin: "ラテン語",
      Lao: "ラオス語",
      Lingala: "リンガラ語",
      Luxembourgish: "ルクセンブルク語",
      Malagasy: "マダガスカル語",
      Maltese: "マルタ語",
      Malayalam: "マラヤーラム語",
      Mongolian: "モンゴル語",
      Bengali: "ベンガル語",
      Burmese: "ビルマ語",
      Punjabi: "パンジャブ語",
      Pashto: "パシュトー語",
      Sinhala: "シンハラ語",
      Shona: "ショナ語",
      Somali: "ソマリ語",
      Tajik: "タジク語",
      Tatar: "タタール語",
      Telugu: "テルグ語",
      Turkmen: "トルクメン語",
      Uzbek: "ウズベク語",
      Hawaiian: "ハワイ語",
      "Norwegian Nynorsk": "ノルウェー語（ニーノシュク）",
      Sindhi: "シンド語",
      Sundanese: "スンダ語",
      Yiddish: "イディッシュ語",
      Yoruba: "ヨルバ語",
      Javanese: "ジャワ語",
      Cantonese: "広東語",
      Abkhaz: "アブハズ語",
      Afar: "アファル語",
      alz: "アルール語",
      ach: "アチョリ語",
      awa: "アワディ語",
      Avaric: "アヴァル語",
      Ewe: "エウェ語",
      Aymara: "アイマラ語",
      Irish: "アイルランド語",
      Oriya: "オリヤ語",
      Oromo: "オロモ語",
      Ossetian: "オセット語",
      tpi: "トク・ピシン語",
      bew: "バタヴィア語",
      ban: "バリ語",
      btx: "バタック・カロ語",
      bbc: "バタック・トバ語",
      bts: "バタック・シマルングン語",
      bci: "バウレ語",
      Bambara: "バンバラ語",
      pag: "パンガシナン語",
      pam: "パンパンガ語",
      nso: "北ソト語",
      bem: "ベンバ語",
      bik: "ビコル語",
      bal: "バローチー語",
      bho: "ボージュプリー語",
      bua: "ブリヤート語",
      chm: "マリ語（草原）",
      Chamorro: "チャモロ語",
      Chechen: "チェチェン語",
      chk: "チューク語",
      Chuvash: "チュヴァシ語",
      Tswana: "ツワナ語",
      Tsonga: "ツォンガ語",
      "fa-AF": "ダリー語",
      shn: "シャン語",
      tet: "テトゥン語",
      Divehi: "ディベヒ語",
      dyu: "ジュラ語",
      tiv: "ティブ語",
      din: "ディンカ語",
      doi: "ドーグリー語",
      "ndc-ZW": "ンダウ語",
      "South Ndebele": "南ンデベレ語",
      dov: "ンドンベ語",
      "bm-Nkoo": "ンコ語（西アフリカ文字）",
      "French(Canada)": "フランス語（カナダ）",
      Fijian: "フィジー語",
      fon: "フォン語",
      "Western Frisian": "西フリジア語",
      fur: "フリウリ語",
      Fulah: "フラニ語",
      Kongo: "コンゴ語",
      Kalaallisut: "カラリット語",
      gom: "コンカニ語",
      Guarani: "グアラニー語",
      cnh: "ハカチン語",
      hrx: "フンスリュック語",
      Kyrgyz: "キルギス語",
      ktu: "キトゥバ語",
      gaa: "ガ語",
      kac: "カチン語",
      Kanuri: "カヌリ語",
      kha: "カシ語",
      kek: "ケクチ語",
      Komi: "コミ語",
      Xhosa: "コーサ語",
      Corsican: "コルシカ語",
      "crh-Latn": "クリミア・タタール語（ラテン文字）",
      crh: "クリミア・タタール語（キリル文字）",
      Quechua: "ケチュア語",
      Kurdish: "クルド語（クルマンジー）",
      ckb: "クルド語（ソラニー）",
      trp: "コクボロク語",
      ltg: "ラトガリア語",
      lij: "リグリア語",
      Limburgish: "リンブルフ語",
      Kirundi: "ルンディ語",
      luo: "ルオ語",
      Luganda: "ルガンダ語",
      Kinyarwanda: "ルワンダ語",
      lmo: "ロンバルド語",
      rom: "ロマ語",
      mad: "マドゥラ語",
      Manx: "マン島語",
      mwr: "マールワーリー語",
      "ms-Arab": "マレー語（ジャウィ文字）",
      Marshallese: "マーシャル語",
      mam: "マム語",
      mai: "マイティリー語",
      mfe: "モーリシャス・クレオール語",
      "mni-Mtei": "メイテイ語（マニプル語）",
      min: "ミナンカバウ語",
      lus: "ミゾ語",
      hmn: "ミャオ語",
      nhe: "ナワトル語（東部ワステカ）",
      "Southern Sotho": "南ソト語",
      new: "ネワール語",
      nus: "ヌエル語",
      pap: "パピアメント語",
      "pa-Arab": "パンジャブ語（シャームキー文字）",
      "pt-PT": "ポルトガル語（ポルトガル）",
      Chichewa: "チェワ語",
      cgg: "チガ語",
      lua: "ルバ・ルルア語",
      Akan: "アカン語",
      zap: "サポテカ語",
      "Northern Sami": "サーミ語（北部）",
      Samoan: "サモア語",
      kri: "シエラレオネ・クレオール語",
      crs: "セーシェル・クレオール語",
      Sango: "サンゴ語",
      "sat-Latn": "サンタル語（ラテン文字）",
      sat: "サンタル語（オルチャ文字）",
      Esperanto: "エスペラント語",
      Swati: "スワジ語",
      "Scottish Gaelic": "スコットランド・ゲール語",
      sus: "スス語",
      ceb: "セブアノ語",
      ber: "タマジグト語（ティフィナグ文字）",
      "ber-Latn": "タマセク語",
      Tahitian: "タヒチ語",
      Tonga: "トンガ語",
      Tigrinya: "ティグリニャ語",
      tcy: "トゥル語",
      tum: "トゥンブカ語",
      tyv: "トゥバ語",
      war: "ワライ語",
      mak: "マカッサル語",
      vec: "ヴェネツィア語",
      Uyghur: "ウイグル語",
      Venda: "ヴェンダ語",
      Wolof: "ウォロフ語",
      udm: "ウドムルト語",
      szl: "シレジア語",
      scn: "シチリア語",
      hil: "ヒリガイノン語",
      jam: "ジャマイカ・クレオール語",
      sah: "サハ語",
      ace: "アチェ語",
      iba: "イバン語",
      Igbo: "イボ語",
      ilo: "イロカノ語",
      "iu-Latn": "イヌクティトゥット語（ラテン文字）",
      Inuktitut: "イヌクティトゥット語（音節文字）",
      yua: "ユカテク・マヤ語",
      Dzongkha: "ゾンカ語",
      Zulu: "ズールー語"
    },
    notFund: "見つかりません",
    notFundDesc: "探していた内容が見つかりませんでした。",
    shareTips:
      "以下の安全なリンクを持つ誰でも、この文字起こしと関連メディアファイルを閲覧できます。",
    copyLink: "リンクをコピー",
    copySuccessful: "コピーに成功しました",
    copyFail: "コピーに失敗しました",
    closeTrans: "翻訳をキャンセル",
    upgradeBtn: "今すぐアップグレード",
    upgradeTip30: "このファイルは30分を超えています",
    upgradeTipMore:
      "Scribify Proにアップグレードすると、最大10時間のファイルを文字起こしできます",
    errorTips: "問題が発生しました。",
    copiedLink: "リンクをコピーしました",
    copyGotIt: "知っていた"
  },
  // 登录、注册、修改密码
  IdentityInfoManage: {
    or: "または",
    LoginBtn: "メールでログイン",
    LoginGoogle: "Googleでログイン",
    SignupBtn: "メールで登録",
    SignupGoogle: "Googleで登録",
    SignupDes: "今すぐ無料でその魔法を体験しましょう。",
    SignupTitle: "高精度かつ無制限の文字起こし",
    signup: "サインアップ",
    sign_up: "サインアップ",
    loginByGoogle: "Googleでログイン",
    emailAddress: "メールアドレスを入力してください",
    createAccount: "アカウントを作成",
    accountExists: "すでにアカウントをお持ちですか？",
    agreeTerm: {
      agree: "続行することで、当社の{terms}と{policy}に同意するものとします。",
      terms: "規約",
      policy: "プライバシーポリシー"
    },
    setPassword: "パスワードを設定",
    code: "認証コード",
    resend: "再送信",
    enterPassword: "パスワードを入力してください。",
    passwordLeval: "パスワード強度",
    Weak: "弱い",
    Medium: "中",
    Strong: "強い",
    confirmPassword: "パスワードを確認",
    invalidEmail: "無効なメールアドレス",
    logInDirectly: "アカウントは既に存在します。直接ログインしてください。",
    codeErrorTryAgain: "認証コードが間違っています。再試行してください。",
    atLeastSix: "パスワードは6文字以上で入力してください。",
    passwordNotMatch: "パスワードが一致しません。再試行してください。",
    login: "ログイン",
    log_in: "ログイン",
    log_In: "ログイン",
    password: "パスワード",
    forgotPassword: "パスワードをお忘れですか？",
    noAccount: "アカウントをお持ちでないですか？",
    accountNotExists: "アカウントが存在しません。",
    passwordError: "パスワードが間違っています",
    sendCode: "認証コードを送信",
    resetPassword: "パスワードをリセット",
    resetYourPassword: "パスワードをリセット",
    newOldCantSame: "新しいパスワードは古いパスワードと同じにできません。",
    passwordResetOk: "パスワードが正常にリセットされました！",
    signupToSaveProgress: "登録を完了して進捗を保存",
    tip: "ご案内",
    tipContentEmail:
      "アカウントのログインパスワードをメールアドレス宛てに送信いたしました。",
    tipContentPassword:
      "受信トレイをご確認の上、メールアドレスとパスワードでログインしてください。",
    codeToEmail:
      "確認コードをメールで送信しました。受信トレイを確認し、上記に確認コードを貼り付けてください。"
  },
  // 分享详情页
  Sharepage: {},
  // 初始化页
  InitPage: {},
  // 账户设置
  AccountSettingsPage: {
    subscription: "サブスクリプションプラン",
    freeversion: "無料",
    transcribeTimesDay: "1日3回の文字起こし",
    uploadMinutes: "30分のアップロード",
    lowerPriority: "低い優先度",
    currentPlan: "現在のプラン",
    professionalEdition: "プロフェッショナル版",
    unlimitedTranscription: "無制限の文字起こし",
    unlimitedNumberOfTimes: "無制限の文字起こし頻度と時間",
    filesUploadedAtOnce:
      "各ファイルは最大10時間/5GBまで。一度に50ファイルアップロード可能",
    highestPriority: "最高優先度",
    weWillGiveTheHighest: "常に最優先でファイルの文字起こしを行います。",
    theFirstMonth: "初月",
    subscribeTo: "購読する",
    basicVersionFree: "基本版（無料）",
    return: "戻る",
    annualize: "年間",
    monthly: "月間",
    everyYear: "毎年",
    saved: "保存済み",
    byTheMonth: "月ごと",
    firstMonth: "最初の月",
    afterwardsEveryMonth: "その後毎月",
    manageSubscription: "サブスクリプション管理",
    professionalYearbook: "プロフェッショナル年間プラン",
    professionalMonthly: "プロフェッショナル月間プラン",
    subscriptionWillCancelledOn: "定期購読は以下の日付で解約されます",
    displayLanguage: "表示言語",
    update: "今すぐアップグレード",
    basicversion: "基本版（無料）",
    daily: "使用済み {start}/{end} 日次文字起こし",
    upgradetoPro: "Proにアップグレード",
    accountSetting: "アカウント設定",
    logOut: "ログアウト",
    account: "アカウント",
    email: "メール",
    id: "ID",
    password: "パスワード",
    resetPassword: "パスワードリセット",
    logIn: "ログイン",
    tryForFree: "無料で試す",
    notFund: "見つかりません",
    couldntFind: "お探しのものを見つけられませんでした。",
    proAnnual: "Pro年間プラン",
    proMonthly: "Pro月間プラン",
    perMonth: "月額",
    afterwards: "その後",
    accuracy: "文字起こし精度",
    supported: "対応言語",
    identification: "話者識別",
    transcriptSranslation: "文字起こし翻訳",
    perYear: "年額",
    getProPlan: "Proプランを取得",
    changeToAnnual: "年間プランに変更",
    automaticRenewalon: "自動更新日",
    eachMonth: "毎月{time}日に自動更新.",
    automaticRenewal:
      "自動更新に失敗しました。お支払い方法を確認してください。",
    eachYear: "毎年{time}に自動更新.",
    returnAccountSetting: "戻る",
    needsToWaitLonger:
      "ファイルが文字起こしされるまで、もう少しお待ちください。",
    freeThreeTimesDay: "毎日3ファイルを無料で文字起こしできます。",
    oneFileUploaded:
      "各ファイルは最大30分まで。1回に1ファイルをアップロードしてください。",
    uploadWithinHours: "10時間アップロード",
      yourSubscription: "あなたのサブスクリプションは{time}にキャンセルされます。"
},
  // 语言对应关系
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "中国語（簡体字）",
      "Chinese(Traditional)": "中国語（繁体字）",
      Japanese: "日本語",
      Danish: "デンマーク語",
      German: "ドイツ語",
      English: "英語",
      Spanish: "スペイン語",
      French: "フランス語",
      Italian: "イタリア語",
      Hungarian: "ハンガリー語",
      Dutch: "オランダ語",
      Norwegian: "ノルウェー語",
      Polish: "ポーランド語",
      Portuguese: "ポルトガル語",
      Finnish: "フィンランド語",
      Swedish: "スウェーデン語",
      Turkish: "トルコ語",
      Greek: "ギリシャ語",
      Russian: "ロシア語",
      Ukrainian: "ウクライナ語",
      Hebrew: "ヘブライ語",
      Arabic: "アラビア語",
      Korean: "韓国語"
    }
  },
  demo: {
    title: "服务端渲染+",
    description:
      "基于Nuxt3的企业级SaaS出海模板，预集成Stripe/Cream支付、谷歌登录、多语言路由和SEO工具。快速构建SSR的全球化Web应用，开箱即用",
    startLink: "立即开始免费体验~",
    thirdPartyLink: "前往Github~",
    waitlist: {
      cardTitle: "加入等待列表,第一时间获取NuxtPro最新消息及折扣优惠！",
      placeholder: "输入你的邮箱吧~",
      button: "立即加入！",
      joinCountMessage: "🔥 刚刚，第 {count} 位早期用户加入了等待名单！"
    },
    seo: {
      title:
        "NuxtPro:开源的Nuxt3 SaaS一站式出海模板 | 多语言、支付和友好SEO（Nuxt3）",
      description:
        "NuxtPro是一款基于Nuxt3的开源企业级SaaS模板，预集成全球支付网关（Stripe/Cream）、谷歌OAuth、多语言路由和SEO优化工具。为开发人员提供SSR/SSG支持，开箱即用。"
    },
    api: {
      title: "这是一个样例",
      corpInfo: "公司信息"
    }
  },
  upgrade: {
    title: "プロ版にアップグレード"
  },
  logOut: {
    title: "ログアウト"
  },
  accountSettings: {
    title: "アカウント設定"
  },
  basicVersion: {
    title: "基本バージョン（無料）"
  },
  layout: {
    version:
      "基本バージョン（無料）: 1日に{times}回の文字起こしが無料で利用可能です。残り{left}回の文字起こしが可能です。無制限の文字起こし機能は{update}へアップグレードしてください。",
    update: "今すぐアップグレード"
  },
  fileManager: {
    folders: "フォルダー",
    newFolder: "+",
    rename: "名前変更",
    delete: "削除",
    createTitle: "フォルダーの作成",
    deleteConfirm:
      "{name}を削除してもよろしいですか？フォルダ内の全ファイルも削除されます。",
    cancel: "キャンセル",
    confirm: "作成",
    dialogLabel: "フォルダー名"
  },
  folderHome: {
    table: {
      name: "名前",
      duration: "長さ",
      status: "ステータス",
      date: "作成日",
      activity: "アクティビティ",
      empty1: "フォルダーが空です",
      empty2: "上部のボタンをクリックしてファイルを文字起こし",
      just: "たった今",
      export: "エクスポート",
      delete: "削除",
      share: "共有",
      rename: "名前変更",
      move: "移動",
      failed: "失敗",
      selected: "選択済み"
    },
    dialog: {
      move: {
        title: "移動",
        label: "フォルダを選択",
        placeholder: "フォルダを選択",
        confirm: "移動",
        cancel: "キャンセル"
      },
      rename: {
        title: "名前変更",
        label: "ファイル名",
        confirm: "名前変更",
        cancel: "キャンセル"
      },
      delete: {
        title: "削除",
        file: "ファイル",
        files: "ファイル",
        label:
          "{num}個の{name}を削除してもよろしいですか？この操作は元に戻せません。",
        confirm: "削除",
        cancel: "キャンセル"
      },
      share: {
        title: "共有",
        label:
          "以下のセキュアリンクを持つ人は、この文字起こしファイルと関連メディアファイルを閲覧できます。",
        confirm: "リンクをコピー"
      },
      export: {
        title: "エクスポート",
        select: "形式を1つ以上選択",
        settings: "設定",
        speaker: "話者を含める",
        timecodes: "タイムコードを含める",
        confirm: "エクスポート",
        cancel: "キャンセル"
      }
    },
    search: {
      placeholder: "検索"
    },
    recently: "最近",
    record: "録音",
    transcribe: "文字起こし",
    buttons: {
      transcribe: "ファイルを文字起こし",
      url: "リンクを文字起こし",
      record: "録音して文字起こし"
    }
  },
  record: {
    record: "録音",
    pause: "一時停止",
    resume: "再開",
    stop: "停止",
    delete: "削除",
    transcribe: "文字起こし",
    permissionDenied: "マイク権限が拒否されたかデバイスが存在しません",
    dialog: {
      delete: {
        title: "警告",
        label: "この録音を削除してもよろしいですか？",
        confirm: "削除",
        cancel: "キャンセル"
      },
      complete: {
        title: "録音完了",
        label:
          "10時間に達したため録音を自動停止しました。文字起こしを行ってください。",
        confirm: "了解"
      }
    }
  },
  upload: {
    link: {
      dialogTitle: "オンラインメディアの文字起こし",
      title: "リンクを貼り付け",
      label:
        "以下のプラットフォーム（YouTube、Facebook、X、Dropbox、Google Drive、Vimeo など）からメディアリンクを貼り付けてください",
      confirm: "文字起こし",
      cancel: "キャンセル",
      errorTitle:
        "入力したリンクアドレスが正しくありません。ご確認の上、再度お試しください。",
      linkName: "リンク"
    },
    file: {
      orTitle: "オンラインメディアの文字起こし",
      dialogTitle: "ファイルの文字起こし",
      tip: "クリックしてアップロード、またはドラッグ＆ドロップしてください",
      or: "または"
    },
    del: {
      title: "警告",
      content:
        "すべての進行状況が失われます。文字起こしをキャンセルしてもよろしいですか？",
      cancel: "キャンセルを確認",
      confirm: "文字起こしを続行"
    },
    files: "ファイル",
    resultDialogTitle: "ファイルの文字起こし",
    cancel: "キャンセル",
    confirm: "文字起こし",
    return: "戻る",
    addMore: "さらに追加",
    language: "音声言語",
    failed: "失敗",
    tooLarge: "ファイルが大きすぎます。",
    fileFormat: "ファイル形式が許可されていません",
    localFiles: "ローカルファイル",
    pasteLink: "リンクを貼り付け",
    uploadErr: "アップロードエラー",
    hashErr: "ハッシュエラー",
    table: {
      status: "ステータス",
      file: "ファイル",
      size: "サイズ",
      noData: "データなし"
    },
    maxFileNum: "ファイル数は{num}を超えることはできません。"
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "ビデオダウンロードエラー"
      },
      mse: {
        code: 2,
        msg: "ストリーム追加エラー"
      },
      parse: {
        code: 3,
        msg: "解析エラー"
      },
      format: {
        code: 4,
        msg: "間違ったフォーマット"
      },
      decoder: {
        code: 5,
        msg: "デコードエラー"
      },
      runtime: {
        code: 6,
        msg: "文法エラー"
      },
      timeout: {
        code: 7,
        msg: "再生タイムアウト"
      },
      other: {
        code: 8,
        msg: "その他のエラー"
      }
    },
    HAVE_NOTHING: "オーディオ/ビデオが準備できているか情報がありません",
    HAVE_METADATA: "オーディオ/ビデオのメタデータは準備できています",
    HAVE_CURRENT_DATA:
      "現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません",
    HAVE_FUTURE_DATA: "現在、少なくとも次のフレームのデータが利用可能です",
    HAVE_ENOUGH_DATA: "利用可能なデータは再生を開始するのに十分です",
    NETWORK_EMPTY: "オーディオ/ビデオが初期化されていません",
    NETWORK_IDLE:
      "オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません",
    NETWORK_LOADING: "ブラウザーはデータをダウンロードしています",
    NETWORK_NO_SOURCE: "オーディオ/ビデオ のソースが見つかりません",
    MEDIA_ERR_ABORTED: "ユーザーによってフェッチプロセスが中止されました",
    MEDIA_ERR_NETWORK: "ダウンロード中にエラーが発生しました",
    MEDIA_ERR_DECODE: "デコード中にエラーが発生しました",
    MEDIA_ERR_SRC_NOT_SUPPORTED:
      "オーディオ/ビデオ の形式がサポートされていません",
    REPLAY: "リプレイ",
    ERROR: "ネットワークの接続に問題が発生しました",
    PLAY_TIPS: "プレイ",
    PAUSE_TIPS: "一時停止",
    PLAYNEXT_TIPS: "次をプレイ",
    DOWNLOAD_TIPS: "ダウンロード",
    ROTATE_TIPS: "回転",
    RELOAD_TIPS: "再読み込み",
    FULLSCREEN_TIPS: "フルスクリーン",
    EXITFULLSCREEN_TIPS: "フルスクリーンを終了",
    CSSFULLSCREEN_TIPS: "シアターモード",
    EXITCSSFULLSCREEN_TIPS: "シアターモードを終了",
    TEXTTRACK: "字幕",
    PIP: "ミニプレーヤー",
    SCREENSHOT: "スクリーンショット",
    LIVE: "生放送",
    OFF: "オフ",
    OPEN: "開いた",
    MINI_DRAG: "ボタンを押して働画をドラッグする",
    MINISCREEN: "小さな画面",
    REFRESH: "リフレッシュ",
    REFRESH_TIPS: "してみてください",
    FORWARD: "早送り",
    LIVE_TIP: "生放送",
    TM_SUBTITLE_SHOW_TIPS: "字幕をオンにする",
    TM_SUBTITLE_HIDE_TIPS: "クローズドキャプション",
    TM_MINIMIZE_TIPS: "ビデオを非表示"
  },
  privacyPolicy: {
    privacyPolicyTitle: "プライバシーポリシー",
    lastUpdated: "最終更新日: 2025年8月25日",
    policyDescription:
      "本ポリシーは、Scribify（以下「Scribify」、「当社」、「私たち」、「私たち」）が、お客様が当社のサービス、ウェブサイトを使用する際に、お客様の個人情報を収集、使用、開示する方法について説明します。",
    websiteLink: "（https://www.scribify.ai/）",
    servicesDefinition:
      "、およびソフトウェア（以下、総称して「サービス」といいます。）",
    policyAgreement:
      "本プライバシーポリシーをよくお読みになり、内容をご理解ください。当社のサービスをご利用いただくことで、お客様は本プライバシーポリシーに同意されたものとみなされます。本ポリシーに従って当社がお客様の個人情報を利用することに同意されない場合は、直ちに当社のサービスのご利用を中止してください。",
    policyOverview:
      "本ポリシーでは、当社が収集するデータの種類とその理由、お客様のデータの取り扱い方法、そしてお客様のデータに関する権利についてご説明します。当社はお客様のデータを販売することはありません。",
    scopeTitle: "1. 本プライバシーポリシーの適用範囲",
    whatWeCollectTitle: "2. 収集する情報とその理由",
    accessShareTitle: "3. お客様の情報にアクセスまたは共有する場合",
    secureDataTitle: "4. データの保護方法",
    deleteContentTitle: "5. コンテンツを削除するとどうなるか",
    locationTitle: "6. サイトとデータの場所",
    childrenPrivacyTitle: "7. 子供のプライバシー",
    updatesTitle: "8. 本プライバシーポリシーの更新",
    contactUsTitle: "9. お問い合わせ",
    identityAccessTitle: "2.1 アイデンティティとアクセス",
    billingInfoTitle: "2.2 請求情報",
    productInteractionsTitle: "2.3 製品の相互作用",
    websiteInteractionsTitle: "2.4 ウェブサイトのインタラクション",
    cookiesTitle: "2.5 クッキー",
    voluntaryCorrespondenceTitle: "2.6 自発的な通信",
    scopeContent:
      "本プライバシーポリシーは、本サービスのユーザーに関する情報の収集および処理にのみ適用されます。本プライバシーポリシーは、当社にリンクされている第三者が運営するサービス、ウェブサイト、またはソフトウェア（当社がリンクを提供しているか、他のユーザーがリンクを共有しているかを問わず）には適用されません。また、第三者のコンテンツ、データ、アプリケーション、または資料にも適用されません。第三者のウェブサイトまたはソフトウェアに情報を提供する前に、当該ウェブサイトまたはソフトウェアのプライバシーポリシーを確認することをお勧めします。",
    collectPrinciple:
      "私たちの指針は、必要なものだけを収集することです。具体的には以下のようになります。",
    identityAccessContent:
      "当社の製品にご登録いただく際、お名前やメールアドレスなどの個人情報をご提供いただきます。これは、製品の基本的な機能を提供するため、また製品のアップデートやその他の重要な情報をお送りするためです。",
    billingInfoContent:
      "有料製品にご登録いただく場合、お支払い情報と請求先住所のご入力をお願いしております。お支払い情報は当社の決済代行業者に直接送信され、当社のサーバーには送信されません。",
    productInteractionsContent:
      "お客様がアップロード、受信、または製品アカウントで保持するコンテンツは、当社のサーバーに保存されます。お客様がこれらのコンテンツを削除しない限り、お客様のアカウントがアクティブである限り、当社はこれらのコンテンツを保管することがあります。",
    websiteInteractionsContent:
      "当社は、コンバージョン率のテストや新製品デザインの実験など、分析および統計目的でお客様の閲覧アクティビティに関する情報を収集します。収集する情報には、ブラウザとオペレーティングシステムのバージョン、IPアドレス、アクセスしたウェブページとその読み込み時間、当社へのアクセス元となるウェブサイトなどが含まれます。アカウントをお持ちでサインインしている場合、これらのウェブ分析データは、アカウントが無効になるまで、お客様のIPアドレスとユーザーアカウントに関連付けられます。",
    cookiesContent1:
      "当社では、特定の設定を保存し、お客様が当社アプリケーションをより簡単に使用できるようにし、A/B テストを実行し、一部の分析をサポートするために、永続的なファーストパーティ Cookie と一部のサードパーティ Cookie も使用します。",
    cookiesContent2:
      "Cookieとは、ブラウザに保存されるテキストファイルです。ログイン情報やサイトの設定を記憶するのに役立ちます。また、ブラウザの種類、オペレーティングシステム、アクセスしたウェブページ、アクセス時間、閲覧したコンテンツ、その他のクリックストリームデータなどの情報も収集する場合があります。ブラウザの設定でCookieの保存期間を調整したり、個々のCookieを許可またはブロックしたりできますが、Cookieを無効にすると、アプリが動作しなくなり、サービスの他の機能も正常に動作しなくなる可能性があります。",
    voluntaryCorrespondenceContent:
      "お客様が質問やサポートの依頼をメールで当社に送信した場合、当社はお客様のメールアドレスを含むその通信を保存します。これは、お客様が将来当社に連絡を取った場合に参照できる過去の通信履歴となるためです。",
    accessShareContent1:
      "お客様がリクエストした製品またはサービスを提供するため。当社は、アプリケーションの運用とお客様へのサービス提供を支援するために、サードパーティのサブプロセッサーを利用しています。これには、クラウドプロバイダーやアナリティクスプロバイダーが含まれます。",
    accessShareContent2:
      "不正使用に関する調査、防止、または措置を講じるため。不正使用の可能性を調査する際にお客様のアカウントにアクセスすることは、最終手段です。当社は、お客様と問題を報告していただいた方々のプライバシーと安全を守るため、プロセス全体を通して責任のバランスをとるよう最善を尽くします。お客様が当社の製品を制限された目的で使用していることが発覚した場合、必要に応じて適切な当局への通報を含む、必要な措置を講じます。",
    accessShareContent3: "適用法に基づいて要求される場合。",
    userDataRequests:
      "- ユーザーデータに関する要求。当社の方針では、法的手続きにより強制される場合、または緊急の要請があった場合など、限られた状況を除き、政府によるユーザーデータに関する要請には応じません。ただし、米国の法執行機関が、データ共有を要求する必要な令状、刑事召喚状、または裁判所命令を保有している場合は、当社はこれに従わなければなりません。同様に、米国外の政府機関からの要請については、相互司法援助条約または協定に定められた手続きを通じて米国政府から強制された場合に限り対応します。当社は、法的に禁止されている場合を除き、また一部の緊急事態を除き、データを共有する前に影響を受けるユーザーに通知することを方針としています。",
    preservationRequests:
      "- 保存要求。同様に、当社のポリシーでは、米国連邦通信保存法（18 USC Section 2703(f)）、または民事訴訟における米国召喚状によって強制される場合にのみ、データ保存要求に応じます。当社は、法律で義務付けられている場合、または当社が控訴しないことを選択した裁判所命令によって強制されている場合を除き、保存データを共有しません。さらに、必要な保存期間の満了前に適切な令状、裁判所命令、または召喚状を受領しない限り、保存期間の終了時に保存されている顧客データのコピーを破棄します。",
    taxAudit:
      "- 税務当局による監査を受けた場合、請求関連情報の開示を求められることがあります。その場合、請求先住所や免税情報など、必要最小限の情報のみを開示いたします。",
    secureDataContent1: "すべてのデータは、",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "当社のサーバーからお客様のブラウザに送信されるとき。",
    deleteContentContent:
      "コンテンツを削除すると、直ちにアクセスできなくなります。",
    locationContent:
      "当社の製品およびその他のウェブプロパティは米国で運営されています。欧州連合（EU）、英国、または米国以外の地域にお住まいの場合、お客様が当社に提供した情報は米国に転送され、米国で保管されることにご注意ください。当社のウェブサイトまたはサービスをご利用いただくこと、および／または当社に個人情報をご提供いただくことにより、お客様はこの転送に同意したものとみなされます。",
    childrenPrivacyContent:
      "本サービスは子供向けではなく、13歳未満のお子様から故意に個人情報を収集することはありません。13歳未満の方は、本サービスを通じて個人情報を送信しないでください。お子様が本ポリシーに違反して個人情報を提供したと思われる場合は、下記までご連絡ください。",
    updatesContent:
      "当社は、関連規制の遵守および新たな慣行の反映のため、必要に応じて本ポリシーを更新することがあります。本ポリシーに重大な変更があった場合は、このページ上部の日付を更新します。",
    contactUsContent1:
      "当社のプライバシーポリシーについてご質問、ご意見、ご不満がございましたら、",
    contactUs: "お問い合わせ",
    contactUsContent2:
      "当社はお客様の苦情にできるだけ早く対処するよう努めます。"
  },
  termsOfService: {
    termsOfServiceTitle: "利用規約",
    lastUpdated: "最終更新日: 2022年9月21日",
    thankYouMessage: "弊社製品をご利用いただきありがとうございます！",
    companyReference:
      "この文書で「会社」、「当社」、「当社の」または「弊社」と記載されている場合、それは Scribify を指します。",
    servicesDefinition:
      "「サービス」とは、Web ブラウザ、デスクトップ アプリケーション、モバイル アプリケーション、またはその他の形式で提供される、Scribify によって作成および管理されるあらゆる製品を指します。",
    termsUpdateNotice:
      "当社は今後、本利用規約を更新する場合があります。これらの変更は通常、関連ポリシーの拡張版へのリンクを提供することで、本利用規約の一部を明確化するために行われます。ポリシーに重大な変更を加える場合は、このページ上部の日付を更新し、アカウント所有者に通知するための適切な措置を講じます。",
    acceptanceOfAgreementTitle: "1. 契約の承諾",
    scribifyServicesTitle: "2. Scribifyのサービス",
    accountTermsTitle: "3. アカウント規約",
    paymentRefundsTitle: "4. 支払い、払い戻し、プラン変更",
    cancellationTerminationTitle: "5. キャンセルと終了",
    submissionsTitle: "6. 提出物",
    uptimeSecurityTitle: "7. 稼働時間とセキュリティ",
    siteManagementTitle: "8. サイト管理",
    copyrightContentTitle: "9. 著作権とコンテンツの所有権",
    prohibitedActivitiesTitle: "10. 禁止行為",
    featuresBugsTitle: "11. 機能とバグ",
    correctionsTitle: "12. 訂正",
    userDataTitle: "13. ユーザーデータ",
    privacyPolicyTitle: "14. プライバシーポリシー",
    liabilityTitle: "15. 責任",
    miscellaneousTitle: "16. その他",
    contactUsTitle: "17. お問い合わせ",
    acceptanceContent1:
      "本サービスをご利用いただくことで、お客様は本契約に同意したものとみなされ、これによりお客様とScribifyとの間の拘束力のある契約が成立します。お客様は、本規約に法的に同意できること、および拘束力のある契約を締結できる法定年齢に達していることを表明するものとします。Scribifyによる本契約の承諾は、お客様が本契約のすべての条件に同意することを明示的に条件とします。",
    acceptanceContent2:
      "本サービスは 18 歳未満の方を対象としておらず、18 歳未満の方はご利用いただけません。本サービスを利用することにより、お客様は前述の資格要件を満たしていることを表明し、保証するものとします。",
    acceptanceContent3:
      "「お客様」、「お客様の」、「お客様自身」という用語には、お客様の従業員、代理人、事業代表者、およびお客様のアカウント（以下に定義）を通じて本サービスへのアクセスを提供するその他の個人も含まれます。お客様は、お客様のアカウントを通じて本サービスにアクセスするすべての人が本規約を理解し、遵守することを保証する責任を負います。",
    acceptanceContent4:
      "Scribifyは、独自の裁量により、本利用規約を随時改訂および更新する権利を留保します。すべての変更は、掲載された時点で直ちに有効となります。改訂された利用規約の掲載後も引き続き本サービスをご利用いただく場合、お客様は変更内容を承諾し、同意したものとみなされます。変更内容はお客様にとって拘束力を持つため、変更内容をご確認いただくため、このページを定期的にご確認ください。",
    servicesContent1:
      "当社のサービスにより、ユーザーは音声会話を文字に変換し、検索、翻訳、他のユーザーと共有できるようになります。",
    servicesContent2:
      "お客様は、本サービスの無料版（以下「無料サービス」といいます）を使用するか、料金の支払いが必要となる可能性のあるサブスクリプションベースの有料版（以下「有料サービス」といいます）を使用するかを選択できます。",
    servicesContent3:
      "当社は、お客様に本サービスをご提供いたします。本サービスへのアクセスに必要なすべての手配は、お客様の責任となります。",
    accountTerms1:
      "- お客様はアカウントのセキュリティを維持する責任を負います。当社は、お客様がこのセキュリティ義務を遵守しなかったことに起因する損失または損害について、一切責任を負いません。",
    accountTerms2:
      "- 違法、非倫理的、または不道徳な目的で本サービスを使用することはできません。",
    accountTerms3:
      "- お客様は、お客様のアカウントで投稿されたすべてのコンテンツおよび発生するすべてのアクティビティについて責任を負います。これには、(a) お客様のログイン認証情報にアクセスできる、または (b) お客様のアカウントで独自のログイン情報を持つ他のユーザーが投稿したコンテンツも含まれます。",
    accountTerms4:
      "- 人間である必要があります。「ボット」やその他の自動化された方法で登録されたアカウントは許可されません。",
    paymentContent1:
      "- 無料トライアルを提供している有料サービスについては、お申し込み時にトライアル期間をご案内いたします。トライアル期間終了後、サービスを継続してご利用いただくには、前払いでお支払いいただく必要があります。お支払いいただけない場合、これらのサービスは終了いたします。",
    paymentContent2:
      "- 無料プランから有料プランにアップグレードする場合、カードに即時請求され、請求サイクルはアップグレードの日から開始されます。",
    paymentContent3:
      "- すべての料金には、税務当局が課す税金、賦課金、関税は含まれません。必要な場合、当社は税務当局に代わってこれらの税金を徴収し、税務当局に納付します。それ以外の場合、すべての税金、賦課金、関税のお支払いはお客様の責任となります。",
    paymentContent4:
      "- ご購入いただいた商品は返金不可です。有料サービスは、アカウントにログインすることでいつでもキャンセルできます。有料サブスクリプションの場合、別途記載がない限り、現在の有料期間の終了時にキャンセルが有効になります。",
    cancellationContent1:
      "- お支払い済みの利用期間の終了前にサービスをキャンセルされた場合、キャンセルは直ちに有効となり、再度請求されることはありません。未使用期間については、前回の請求サイクルで自動的に日割り計算は行われません。",
    cancellationContent2:
      "- 当社は、お客様のアカウントをいつでもいかなる理由においても停止または終了し、現在および将来の当社サービスのご利用を一切拒否する権利を有します。停止とは、お客様がアカウントまたはアカウント内のコンテンツにアクセスできなくなることを意味します。また、アカウントの終了は、お客様のアカウントまたはアカウントへのアクセスの削除、およびアカウント内のすべてのコンテンツの没収および放棄につながります。当社はまた、いつでもいかなる理由においても、いかなる者に対してもサービスの利用を拒否する権利を留保します。この条項を設けているのは、統計的に、当社のサービス上の数十万ものアカウントのうち、少なくとも1つは不正行為を行っているアカウントが存在するためです。",
    cancellationContent3:
      "- 会社の従業員または役員に対する口頭、身体、書面またはその他の虐待（虐待または報復の脅迫を含む）は、即時アカウント終了につながる可能性があります。",
    submissionsContent:
      "お客様は、お客様から当社に提供される本サイトに関するご質問、ご意見、ご提案、アイデア、フィードバック、その他の情報（以下「投稿」といいます）は機密情報ではなく、当社の独占的財産となることを承認し、同意するものとします。当社は、すべての知的財産権を含む独占的権利を保有し、お客様への謝辞または補償なしに、商業目的か否かを問わず、あらゆる合法的な目的でこれらの投稿を無制限に使用および配布する権利を有します。お客様は、かかる投稿に対するすべての著作者人格権を放棄し、かかる投稿がお客様自身のオリジナルであること、またはかかる投稿を提出する権利を有していることを保証します。お客様は、お客様の投稿におけるいかなる所有権の侵害または不正流用または疑惑に関しても、当社に対していかなる請求権も行使できないことに同意するものとします。",
    uptimeContent1:
      "- 本サービスのご利用は、お客様ご自身の責任において行っていただきます。当社は、本サービスを「現状有姿」かつ「利用可能な範囲で」提供します。ほとんどのサービスにおいてサービスレベル契約は提供しておりませんが、アプリケーションの稼働時間には細心の注意を払っております。",
    uptimeContent2:
      "- お客様のご利用が本サービスの他のお客様の通常のご利用を大幅に上回った場合、当社はお客様のアカウントを一時的に無効化する権利を留保します。ただし、ご利用状況が他のお客様のサービスパフォーマンスに悪影響を及ぼす可能性がある稀な場合を除き、何らかの措置を講じる前にお客様にご連絡いたします。",
    uptimeContent3:
      "- 当社は、バックアップ、冗長化、暗号化など、お客様のデータの保護とセキュリティを確保するための様々な対策を講じています。パブリックインターネットを介したデータ転送には暗号化を適用しています。",
    uptimeContent4:
      "- 当社は、サービスを実行するために必要なハードウェア、ソフトウェア、ネットワーク、ストレージ、および関連テクノロジーを提供するために、サードパーティのベンダーおよびホスティング パートナーを利用します。",
    siteManagementContent:
      "当社は以下の権利を留保しますが、義務を負うものではありません。(1)本利用規約の違反についてサイトを監視すること。(2)当社の独自の裁量により、法律または本利用規約に違反していると判断した人物に対して、当該ユーザーを法執行機関に通報することを含め、適切な法的措置を講じること。(3)当社の独自の裁量により、かつ無制限に、ユーザーの投稿またはその一部の拒否、アクセス制限、利用制限、または無効化(技術的に可能な範囲で)を行うこと。(4)当社の独自の裁量により、かつ無制限に、通知または責任を負うことなく、サイズが大きすぎる、または当社のシステムに何らかの負担をかけるすべてのファイルおよびコンテンツをサイトから削除または無効化すること。(5)当社の権利と財産を保護し、サイトの適切な機能を促進するように設計された方法でサイトを管理すること。",
    copyrightContent1:
      "- サービスに投稿されるすべてのコンテンツは、米国著作権法に準拠する必要があります。",
    copyrightContent2:
      "- 当社は、お客様が本サービスに提供する素材について、知的財産権を主張しません。アップロードされた素材はすべてお客様の所有物となります。",
    copyrightContent3:
      "- 当社はコンテンツを事前に審査しませんが、当社の独自の裁量により、サービスを通じて利用可能なコンテンツを拒否または削除する権利（義務ではありません）を留保します。",
    copyrightContent4:
      "- サービスの名称、外観、雰囲気に関する著作権は当社に帰属します。無断複写・転載を禁じます。当社の書面による明示的な許可なく、HTML、CSS、JavaScript、またはビジュアルデザイン要素のいかなる部分も複製、複写、または再利用することはできません。当社のロゴまたはサービスのロゴをプロモーション目的で使用する場合は、必ず許可を得てください。",
    emailUs: "メールでお問い合わせ",
    copyrightContent5:
      "ロゴの使用許可を申請できます。本利用規約に違反した場合、当社はこの許可を取り消す権利を留保します。",
    copyrightContent6:
      "- お客様は、当社の明示的な書面による許可なく、本サービスの一部、本サービスの使用、または本サービスへのアクセスを複製、複写、コピー、販売、再販または利用しないことに同意するものとします。",
    copyrightContent7:
      "- 他のウェブサイトが本サービスまたは当社と関連していると誤解させるような改変を行ってはなりません。",
    copyrightContent8:
      "- 当社は他者の知的財産権を尊重します。本サイト上または本サイトを通じて入手可能な資料が、お客様が所有または管理する著作権を侵害していると思われる場合は、直ちにご連絡ください。",
    contactUs: "お問い合わせ",
    copyrightContent9:
      "通知のコピーは、通知対象の資料を投稿または保存した方に送付されます。通知において重大な虚偽の記載があった場合、適用法に基づき損害賠償責任を負う可能性があることにご注意ください。したがって、本サイトに掲載されている、または本サイトからリンクされている資料が著作権を侵害しているかどうか確信が持てない場合は、まず弁護士に相談することを検討してください。",
    prohibitedActivitiesIntro:
      "当社が本サイトを提供する目的以外で、本サイトにアクセスしたり、本サイトを利用したりすることはできません。また、当社が明示的に推奨または承認した場合を除き、本サイトを商業目的に利用することはできません。",
    prohibitedActivitiesUserAgreement:
      "本サイトのユーザーとして、お客様は以下の行為を行わないことに同意するものとします。",
    prohibitedActivity1:
      "- 当社の書面による許可なく、サイトからデータまたはその他のコンテンツを体系的に取得し、直接的または間接的にコレクション、コンパイル、データベース、またはディレクトリを作成またはコンパイルすること。",
    prohibitedActivity2:
      "- 特に、ユーザーのパスワードなどのアカウントの機密情報を入手しようとして、当社および他のユーザーを騙したり、詐欺行為を働いたり、誤解させたりすること。",
    prohibitedActivity3:
      "- コンテンツの使用またはコピーを防止または制限する機能、またはサイトおよび/またはそこに含まれるコンテンツの使用に制限を課す機能を含む、サイトのセキュリティ関連機能を回避、無効化、またはその他の方法で妨害すること。",
    prohibitedActivity4:
      "- 当社および/または本サイトを誹謗、中傷、またはその他の形で損害を与えると当社が判断するもの。",
    prohibitedActivity5:
      "- 本サイトから取得した情報を、他人に嫌がらせ、虐待、または危害を加える目的で使用すること。",
    prohibitedActivity6:
      "- 当社のサポート サービスを不適切に使用したり、不正使用や不正行為に関する虚偽の報告を提出したりすること。",
    prohibitedActivity7:
      "- 適用される法律または規制に反する方法で本サイトを使用する。",
    prohibitedActivity8:
      "- 当サイトを無許可でフレーミングしたりリンクしたりすること。",
    prohibitedActivity9:
      "- ウイルス、トロイの木馬、またはその他の素材（大文字の過度の使用やスパム（繰り返しテキストの継続的な投稿）を含む）をアップロードまたは送信する（またはアップロードまたは送信しようとする）こと。これにより、サイトの継続的な使用や享受が妨げられ、またはサイトの使用、特徴、機能、操作、保守が修正、損なわれ、中断、改変、または妨害される可能性があります。",
    prohibitedActivity10:
      "- スクリプトを使用してコメントやメッセージを送信したり、データマイニング、ロボット、または同様のデータ収集および抽出ツールを使用するなど、システムを自動的に使用すること。",
    prohibitedActivity11:
      "- コンテンツから著作権またはその他の所有権に関する通知を削除します。",
    prohibitedActivity12:
      "- 他のユーザーまたは人物になりすますこと、または他のユーザーのユーザー名を使用すること。",
    prohibitedActivity13:
      "- クリア グラフィック インターチェンジ フォーマット (「GIF」)、1×1 ピクセル、Web バグ、Cookie、その他の類似のデバイス (「スパイウェア」または「受動収集メカニズム」または「PCM」と呼ばれることもあります) など、受動的または能動的な情報収集または送信メカニズムとして機能する素材をアップロードまたは送信する (またはアップロードまたは送信しようとする)。",
    prohibitedActivity14:
      "- 本サイトまたは本サイトに接続されたネットワークもしくはサービスに干渉、混乱、または過度の負担をかけること。",
    prohibitedActivity15:
      "- 当サイトの一部をお客様に提供することに携わっている当社の従業員または代理人に対して、嫌がらせ、迷惑、威嚇、または脅迫を行うこと。",
    prohibitedActivity16:
      "- 本サイトまたは本サイトの一部へのアクセスを防止または制限するために設計されたサイトのあらゆる対策を回避しようとすること。",
    prohibitedActivity17:
      "- Flash、PHP、HTML、JavaScript、その他のコードを含むがこれらに限定されない、サイトのソフトウェアをコピーまたは改変すること。",
    prohibitedActivity18:
      "- 適用法によって許可されている場合を除き、本サイトを構成する、または何らかの形で本サイトの一部を構成するソフトウェアを解読、逆コンパイル、逆アセンブル、またはリバースエンジニアリングすること。",
    prohibitedActivity19:
      "- 標準的な検索エンジンまたはインターネット ブラウザの使用の結果である場合を除き、サイトにアクセスするスパイダー、ロボット、チート ユーティリティ、スクレーパー、オフライン リーダーなどを含むがこれらに限定されない自動化システムを使用、起動、開発、配布したり、許可されていないスクリプトやその他のソフトウェアを使用または起動したりしないでください。",
    prohibitedActivity20:
      "- サイト上で購入を行うために、購入代理店または購買代理店を利用する。",
    prohibitedActivity21:
      "- 迷惑メールを送信する目的で電子的手段またはその他の手段によりユーザーのユーザー名や電子メールアドレスを収集すること、または自動化された手段や虚偽の口実によりユーザーアカウントを作成することなど、サイトを不正に使用すること。",
    prohibitedActivity22:
      "- 当社と競合する取り組みの一環として本サイトを使用したり、収益を生み出す取り組みや営利事業のために本サイトおよび/またはコンテンツを使用したりしないでください。",
    prohibitedActivity23:
      "- 商品やサービスの宣伝や販売の申し出のために本サイトを使用する。",
    prohibitedActivity24: "- プロフィールを販売または譲渡する。",
    featuresContent1:
      "当社は、自らの経験と、貴重な時間とフィードバックを共有していただいたお客様の経験に基づき、サービスを慎重に設計しております。しかしながら、すべての人にご満足いただけるサービスは存在しません。また、当社のサービスがお客様の特定のご要望やご期待を満たすことを保証するものではありません。",
    featuresContent2:
      "すべての機能は出荷前にテストを実施しています。他のソフトウェアと同様に、当社のサービスにもバグは避けられません。報告されたバグは追跡し、特にセキュリティやプライバシーに関連するバグについては対応いたします。報告されたバグがすべて修正されるわけではなく、完全にエラーのないサービスを保証するものでもありません。",
    correctionsContent1:
      "当サイトには、説明、価格、在庫状況、その他様々な情報を含む、誤植、不正確な記述、または記載漏れを含む情報が含まれている場合があります。当社は、事前の通知なく、いつでも誤植、不正確な記述、または記載漏れを修正し、当サイトの情報を変更または更新する権利を留保します。",
    correctionsContent2:
      "当社は、本サイトが常時利用可能であることを保証するものではありません。ハードウェア、ソフトウェア、その他の問題が発生した場合、または本サイトに関連するメンテナンス作業が必要になった場合、中断、遅延、またはエラーが発生する可能性があります。当社は、お客様への通知なく、いつでも、いかなる理由においても、本サイトを変更、改訂、更新、一時停止、中止、またはその他の方法で修正する権利を留保します。お客様は、本サイトのダウンタイムまたは中止中にお客様が本サイトにアクセスまたは使用できないことに起因する損失、損害、または不都合について、当社は一切の責任を負わないことに同意するものとします。本利用規約のいかなる条項も、当社に本サイトの維持およびサポート、または本サイトに関連する修正、更新、リリースの提供を義務付けるものと解釈されるものではありません。",
    userDataContent:
      "当社は、本サイトのパフォーマンス管理を目的として、お客様が本サイトに送信する特定のデータ、およびお客様による本サイトのご利用に関連するデータを保管します。当社は定期的にデータのバックアップを実施していますが、お客様が送信するデータ、または本サイトを利用して行った活動に関連するすべてのデータについては、お客様が単独で責任を負うものとします。お客様は、当社がかかるデータの紛失または破損について一切の責任を負わないことに同意するとともに、かかるデータの紛失または破損に起因して当社に対して提起する一切の訴訟権を放棄するものとします。",
    privacyPolicyContent1:
      "当社はデータのプライバシーとセキュリティを重視しています。",
    privacyPolicy: "プライバシーポリシー",
    privacyPolicyContent2:
      "本サイトをご利用いただくことで、お客様は本利用規約に含まれる当社のプライバシーポリシーに同意するものとします。本サイトは米国でホストされています。個人データの収集、使用、開示に関する法律またはその他の要件が米国の適用法と異なる世界の他の地域から本サイトにアクセスする場合、お客様は本サイトの継続的な利用を通じて、お客様のデータを米国に転送し、米国への転送および処理に同意したことになります。",
    liabilityIntro:
      "当社は本規約全体を通じて責任について言及していますが、すべてを 1 つのセクションにまとめると次のようになります。",
    liabilityContent:
      "お客様は、当社が、法律上または衡平法上、お客様または第三者に対して、次のものから生じる直接的、間接的、付随的、逸失利益、特別、結果的、懲罰的または模範的な損害（逸失利益、のれん、使用、データまたはその他の無形損失の損害（当社が当該損害の可能性を知らされていた場合であっても）を含むがこれに限定されない）について責任を負わないことを明示的に理解し、同意するものとします。(1) サービスの使用または使用不能。(2) コンテンツおよび資料のエラー、間違い、または不正確さ。(3) お客様によるサイトへのアクセスおよび使用から生じる、いかなる性質の人身傷害または財産損害。(4) サービスを通じてまたはサービスから購入または取得した商品、データ、情報またはサービス、受信したメッセージ、または行った取引から生じる代替の商品およびサービスの調達費用。(5) 当社のセキュア サーバーおよび/またはそこに保存されているすべての個人情報および/または財務情報への不正アクセスや使用。 (6) サイトへの、またはサイトからの送信の中断または停止。(7) 第三者によってサイトに、またはサイトを通じて送信されるバグ、ウイルス、トロイの木馬など、および/または。(8) コンテンツおよび資料の誤りまたは脱落、またはサイトを通じて投稿、送信、またはその他の方法で利用可能になったコンテンツの使用の結果として発生した損失または損害。(9) サービスにおける第三者の声明または行為。(10) 契約違反、不法行為（積極的または消極的な過失を含む）、またはその他の責任理論に基づくかどうかにかかわらず、この利用規約またはサービスに関連するその他の事項。",
    miscellaneousContent:
      "本利用規約および当社が本サイト上または本サイトに関して掲載するポリシーまたは運用規則は、お客様と当社との間の完全な合意および理解を構成するものとします。当社が本利用規約の権利または条項を行使または執行しなかった場合でも、当該権利または条項を放棄したものとみなされることはありません。本利用規約は、法律で認められる最大限の範囲で適用されます。当社は、いつでも当社の権利および義務の一部または全部を他者に譲渡することができます。当社は、当社の合理的な支配を超える事由により生じた損失、損害、遅延、または不履行について、一切の責任を負いません。本利用規約のいずれかの条項または条項の一部が違法、無効、または執行不能であると判断された場合、当該条項または条項の一部は本利用規約から分離可能とみなされ、残りの条項の有効性および執行可能性に影響を与えません。本利用規約または本サイトの利用の結果として、お客様と当社との間に合弁事業、パートナーシップ、雇用または代理関係が成立することはありません。お客様は、本利用規約が当社によって作成されたことを理由として、当社に不利に解釈されないことに同意するものとします。お客様は、本利用規約が電子形式であること、および本利用規約の当事者による署名がないことを理由として有する一切の抗弁権を放棄するものとします。",
    contactUsContent1: "利用規約についてご質問がある場合は、",
    contactUsContent2: "。"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
