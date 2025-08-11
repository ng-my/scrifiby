let message = {
  // 홈페이지
  HomePage: {
    home: "홈",
    version: "기본 버전(무료):",
    times:
      "하루에 {times}번 무료 트랜스크립션, {left}번의 트랜스크립션이 남았습니다.",
    tips: "무제한 전사를 위해 Pro로 업그레이드하세요.",
    update: "지금 업그레이드",
    folders: "폴더",
    rename: "이름 변경",
    delete: "삭제",
    createTitle: "폴더 생성",
    deleteConfirm: `폴더와 그 안의 모든 파일을 삭제하시겠습니까?`,
    cancel: "취소",
    confirm: "생성",
    dialogLabel: "폴더 이름",
    recently: "최근 파일",
    tour: {
      step0: {
        title: "{name}에 오신 것을 환영합니다",
        tip: "여기서 할 수 있는 일:",
        content: "일회성 대화, 회의, 강의 등을 트랜스크립션합니다",
        next: "시작하기"
      },
      step1: {
        title: "파일 트랜스크립션",
        content:
          "로컬 파일, 링크, 녹음 등 세 가지 트랜스크립션 방법을 지원합니다."
      },
      step2: {
        title: "폴더 만들기",
        content: '"+" 버튼을 클릭하여 폴더를 만들고 파일을 정리하세요.'
      },
      step3: {
        title: "트랜스크립션 세부 정보 보기 및 편집",
        content:
          "항목을 클릭하여 트랜스크립션 세부 정보를 보고 편집하며 번역할 수도 있습니다."
      },
      next: "다음",
      finish: "이해했습니다"
    },
    export: {
      export: "내보내기",
      title: "내보내기를 생성 중입니다",
      title2: "파일이 준비되었습니다",
      singleLoadingContent: "1개 파일을 압축 중입니다.",
      singleSuccessContent: "1개 파일이 압축되었습니다.",
      loadingContent: "{num}개 파일을 압축 중입니다.",
      successContent: "{num}개 파일이 압축되었습니다.",
      cancel: "내보내기 취소",
      error: "내보내기 오류",
      dialog: {
        title: "경고",
        content: "내보내기를 취소하시겠습니까?",
        cancel: "내보내기 취소",
        continue: "내보내기 계속"
      }
    },
    welcome: {
      title: "Scribify에 오신 것을 환영합니다!",
      description: "여기서 할 수 있는 일:",
      transcribe:
        "Scribify로 쉽게 음성을 텍스트로 변환—음성 대화를 명확하고 검색 가능하며 공유 가능한 텍스트로 순식간에 바꿔보세요.",
      precision:
        "화자 구분 및 타임스탬프가 포함된 정확한 문서를 즉시 받아보세요.",
      translate:
        "언어 장벽 허물기: 200개 이상의 언어로 문서를 쉽게 번역해 보세요.",
      edit: "필요에 맞게 문서를 편집, 개선 및 다양한 형식으로 내보내기가 가능합니다.",
      collaborate: "변환된 텍스트를 다른 사람들과 공유하며협업하세요.",
      button: "시작하기",
      tip: "오디오를 문서화된 텍스트로 변환할 준비가 되셨나요? 지금 바로 시작해 보세요!"
    },
    subscriptionModal: {
      left: {
        title: "프로 플랜으로 더 많은 기능 잠금 해제",
        c1: "무제한 문서화",
        c2: "10시간 업로드",
        c3: "최우선 처리",
        c4: "99% 문서화 정확도",
        c5: "100개 이상의 언어 지원",
        c6: "화자 식별",
        c7: "문서 번역",
        t1: "한 사람을 위한 무제한 문서화.",
        t2: "각 파일은 최대 10시간/5GB까지 가능. 한 번에 50개 파일 업로드.",
        t3: "항상 최우선 순위로 가능한 빨리 파일을 문서화해 드립니다."
      },
      right: {
        title: "프로 플랜 구매",
        yearly: "연간",
        monthly: "월간",
        save: "절약",
        preMonth: "월 당",
        preYear: "년 당",
        firstMonth: "첫 달",
        afterwards: "이후"
      },
      subscribe: "구독하기"
    }
  },
  // 폴더 페이지
  FolderPage: {
    table: {
      name: "이름",
      duration: "기간",
      status: "상태",
      date: "생성 날짜",
      activity: "활동",
      empty1: `비어 있습니다.`,
      empty2: `위 버튼을 클릭하여 파일을 트랜스크립션하세요.`,
      just: "방금",
      export: "내보내기",
      delete: "삭제",
      share: "공유",
      rename: "이름 변경",
      move: "이동",
      failed: "실패",
      selected: "선택됨",
      success: "성공"
    },
    dialog: {
      move: {
        title: "이동",
        label: "폴더 선택",
        placeholder: "폴더 선택",
        confirm: "이동",
        cancel: "취소"
      },
      rename: {
        title: "이름 변경",
        label: "파일 이름",
        confirm: "이름 변경",
        cancel: "취소"
      },
      delete: {
        title: "삭제",
        file: "파일",
        files: "파일",
        label: "삭제를 확인하시겠습니까? 이 작업은 실행 취소할 수 없습니다.",
        confirm: "삭제",
        cancel: "취소"
      },
      share: {
        title: "공유",
        label:
          "다음 보안 링크가 있는 모든 사람이 이 트랜스크립트와 관련 미디어 파일을 볼 수 있습니다.",
        confirm: "링크 복사",
        success: "복사 성공"
      },
      export: {
        title: "내보내기",
        select: "하나 이상의 형식 선택",
        settings: "설정",
        speaker: "화자 포함",
        timecodes: "타임코드 포함",
        confirm: "내보내기",
        cancel: "취소",
        selectErr: "하나 이상의 형식을 선택하세요"
      }
    },
    search: {
      placeholder: "검색"
    },
    recently: "최근",
    record: "녹음",
    transcribe: "트랜스크립션",
    unclassified: "미분류 폴더",
    buttons: {
      transcribe: "파일 트랜스크립션",
      url: "링크 트랜스크립션",
      record: "녹음 및 트랜스크립션",
      recording: "녹음 중..."
    },
    delSuccess: "성공적으로 삭제됨",
    create: "생성"
  },
  // 파일 업로드 및 녹음
  FileUploadAndRecording: {
    record: {
      record: "녹음",
      pause: "일시 중지",
      resume: "재개",
      stop: "중지",
      delete: "삭제",
      transcribe: "트랜스크립션",
      permissionDenied: "마이크 권한이 거부되었거나 장치가 존재하지 않습니다",
      dialog: {
        delete: {
          title: "경고",
          label: "이 녹음을 삭제하시겠습니까?",
          confirm: "삭제",
          cancel: "취소"
        },
        complete: {
          title: "녹음 완료",
          label:
            "녹음이 10시간에 도달하여 자동으로 중지되었습니다. 트랜스크립션하세요.",
          confirm: "확인"
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "온라인 미디어 트랜스크립션",
        title: "링크 붙여넣기",
        label:
          "다음 플랫폼의 미디어 링크를 붙여넣으세요(이에 국한되지 않음): YouTube, Facebook, X, Dropbox, Google Drive, Vimeo",
        confirm: "트랜스크립션",
        cancel: "취소",
        // 올바른 링크를 입력하세요
        errorTitle:
          "입력한 링크 주소가 올바르지 않습니다. 확인 후 다시 시도하세요.",
        linkName: "링크"
      },
      file: {
        orTitle: "온라인 미디어 트랜스크립션",
        dialogTitle: "파일 트랜스크립션",
        tip: "클릭하여 업로드하거나 드래그 앤 드롭",
        or: "또는"
      },
      del: {
        title: "경고",
        content:
          "모든 진행 상황이 손실됩니다. 트랜스크립션 취소를 확인하시겠습니까?",
        cancel: "취소 확인",
        confirm: "트랜스크립션 계속"
      },
      files: "파일",
      resultDialogTitle: "파일 트랜스크립션",
      cancel: "취소",
      confirm: "트랜스크립션",
      return: "돌아가기",
      addMore: "더 추가",
      language: "오디오 언어",
      failed: "실패",
      tooLarge: "파일이 너무 큽니다.",
      fileFormat: "파일 형식이 허용되지 않습니다",
      localFiles: "로컬 파일",
      pasteLink: "링크 붙여넣기",
      uploadErr: "업로드 오류",
      hashErr: "해시 오류",
      table: {
        status: "상태",
        file: "파일",
        size: "크기",
        noData: "데이터 없음"
      },
      maxFileNum: "파일 수는 {num}개를 초과할 수 없습니다.",
      speaker: "화자 식별",
      speakerLabel: "필사본의 각 섹션에 발화자 표시"
    }
  },
  // 트랜스크립션 상세 페이지
  TranscriptionPage: {
    edit: "편집",
    translate: "번역",
    showSpeaker: "화자 표시",
    showTimestamp: "타임스탬프 표시",
    share: "공유",
    shared: "공유됨",
    export: "내보내기",
    speaker: "화자_{ id }",
    unassignSpeaker: "화자 할당 취소",
    play: "재생",
    save: "저장",
    undo: "실행 취소",
    redo: "다시 실행",
    confirm: "확인",
    cancel: "취소",
    addNew: "새로 추가",
    createANewSpeaker: "새 화자 생성",
    speakerName: "화자 이름",
    addSpeaker: "화자 추가",
    applyToAllMatchingSpeakers: "모든 일치하는 화자에 적용",
    cancelTranslation: "번역 취소",
    showVideo: "비디오 표시",
    hideVideo: "비디오 숨기기",
    langChooseV1: {
      recently: "최근",
      popular: "자주 사용",
      other: "기타",
      searchLanguage: "언어 검색",
      noMatch: "일치하는 언어를 찾을 수 없습니다",
      English: "영어",
      "English(US)": "영어(미국)",
      "English(UK)": "영어(영국)",
      Spanish: "스페인어",
      Portuguese: "포르투갈어",
      French: "프랑스어",
      Italian: "이탈리아어",
      German: "독일어",
      Dutch: "네덜란드어",
      Polish: "폴란드어",
      Danish: "덴마크어",
      Japanese: "일본어",
      Korean: "한국어",
      Hungarian: "헝가리어",
      Czech: "체코어",
      Chinese: "중국어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Azerbaijani: "아제르바이잔어",
      Estonian: "에스토니아어",
      Belarusian: "벨라루스어",
      Bulgarian: "불가리아어",
      Icelandic: "아이슬란드어",
      Bosnian: "보스니아어",
      Persian: "페르시아어",
      Russian: "러시아어",
      "Chinese(Traditional)": "중국어(번체)",
      Finnish: "핀란드어",
      Kazakh: "카자흐어",
      Galician: "갈리시아어",
      Catalan: "카탈로니아어",
      "Chinese(Simplified)": "중국어(간체)",
      Kannada: "칸나다어",
      Croatian: "크로아티아어",
      Latvian: "라트비아어",
      Lithuanian: "리투아니아어",
      Romanian: "루마니아어",
      Marathi: "마라티어",
      Malay: "말레이어",
      Macedonian: "마케도니아어",
      Maori: "마오리어",
      Afrikaans: "아프리칸스어",
      Nepali: "네팔어",
      Norwegian: "노르웨이어",
      Swedish: "스웨덴어",
      Serbian: "세르비아어",
      Slovak: "슬로바키아어",
      Slovenian: "슬로베니아어",
      Swahili: "스와힐리어",
      Tagalog: "타갈로그어",
      Tamil: "타밀어",
      Thai: "태국어",
      Turkish: "터키어",
      Welsh: "웨일스어",
      Urdu: "우르두어",
      Ukrainian: "우크라이나어",
      Greek: "그리스어",
      Armenian: "아르메니아어",
      Hindi: "힌디어",
      Indonesian: "인도네시아어",
      Vietnamese: "베트남어",
      Albanian: "알바니아어",
      Amharic: "암하라어",
      Assamese: "아삼어",
      Occitan: "옥시탄어",
      Bashkir: "바시키르어",
      Basque: "바스크어",
      Breton: "브르통어",
      Tibetan: "티베트어",
      Faroese: "페로어",
      Sanskrit: "산스크리트어",
      Khmer: "크메르어",
      Georgian: "조지아어",
      Gujarati: "구자라트어",
      "Haitian Creole": "아이티 크리올어",
      Hausa: "하우사어",
      Latin: "라틴어",
      Lao: "라오어",
      Lingala: "링갈라어",
      Luxembourgish: "룩셈부르크어",
      Malagasy: "말라가시어",
      Maltese: "몰타어",
      Malayalam: "말라얄람어",
      Mongolian: "몽골어",
      Bengali: "벵골어",
      Burmese: "버마어",
      Punjabi: "펀자브어",
      Pashto: "파슈토어",
      Sinhala: "싱할라어",
      Shona: "쇼나어",
      Somali: "소말리어",
      Tajik: "타지크어",
      Tatar: "타타르어",
      Telugu: "텔루구어",
      Turkmen: "투르크멘어",
      Uzbek: "우즈베크어",
      Hawaiian: "하와이어",
      "Norwegian Nynorsk": "노르웨이 뉘노르스크어",
      Sindhi: "신디어",
      Sundanese: "순다어",
      Yiddish: "이디시어",
      Yoruba: "요루바어",
      Javanese: "자바어",
      Cantonese: "광둥어",
      Abkhaz: "압하즈어",
      Afar: "아파르어",
      alz: "알루르어",
      ach: "아촐리어",
      awa: "아와드어",
      Avaric: "아바르어",
      Ewe: "에웨어",
      Aymara: "아이마라어",
      Irish: "아일랜드어",
      Oriya: "오리야어",
      Oromo: "오로모어",
      Ossetian: "오세트어",
      tpi: "파푸아 피진어",
      bew: "베타위어",
      ban: "발리어",
      btx: "바타크 카로어",
      bbc: "바타크 토바어",
      bts: "바타크 시말룬군어",
      bci: "바울레어",
      Bambara: "밤바라어",
      pag: "판가시난어",
      pam: "팜팡가어",
      nso: "북부 소토어",
      bem: "벰바어",
      bik: "비콜어",
      bal: "발루치어",
      bho: "호즈푸리어",
      bua: "부랴트어",
      chm: "초원 마리어",
      Chamorro: "차모로어",
      Chechen: "체첸어",
      chk: "추크어",
      Chuvash: "추바시어",
      Tswana: "츠와나어",
      Tsonga: "총가어",
      "fa-AF": "다리어",
      shn: "샨어",
      tet: "테툼어",
      Divehi: "디베히어",
      dyu: "줄라어",
      tiv: "티브어",
      din: "딩카어",
      doi: "도그리어",
      "ndc-ZW": "은도어",
      "South Ndebele": "남부 은데벨레어",
      dov: "은둠바어",
      "bm-Nkoo": "은코 문자(서아프리카 문자)",
      "French(Canada)": "프랑스어(캐나다)",
      Fijian: "피지어",
      fon: "폰어",
      "Western Frisian": "서프리지아어",
      fur: "프리울리어",
      Fulah: "풀라어",
      Kongo: "콩고어",
      Kalaallisut: "그린란드어",
      gom: "콘칸어",
      Guarani: "과라니어",
      cnh: "하카 친어",
      hrx: "훈스뤼크어",
      Kyrgyz: "키르기스어",
      ktu: "키투바어",
      gaa: "가어",
      kac: "카친어",
      Kanuri: "카누리어",
      kha: "카시어",
      kek: "케크치어",
      Komi: "코미어",
      Xhosa: "코사어",
      Corsican: "코르시카어",
      "crh-Latn": "크림 타타르어(라틴 문자)",
      crh: "크림 타타르어(키릴 문자)",
      Quechua: "케추아어",
      Kurdish: "쿠르드어(쿠르만지어)",
      ckb: "쿠르드어(소라니어)",
      trp: "코크보로크어",
      ltg: "라트갈레어",
      lij: "리구리아어",
      Limburgish: "림뷔르흐어",
      Kirundi: "키룬디어",
      luo: "루오어",
      Luganda: "루간다어",
      Kinyarwanda: "르완다어",
      lmo: "롬바르드어",
      rom: "롬어",
      mad: "마두라어",
      Manx: "맨 섬어",
      mwr: "마르와리어",
      "ms-Arab": "말레이어(자위 문자)",
      Marshallese: "마셜어",
      mam: "맘어",
      mai: "마이틸리어",
      mfe: "모리셔스 크리올어",
      "mni-Mtei": "메이테이어(마니푸르어)",
      min: "미낭카바우어",
      lus: "미조어",
      hmn: "몽어",
      nhe: "나와틀어(동부 후아스테카)",
      "Southern Sotho": "남부 소토어",
      new: "네팔어(네와르어)",
      nus: "누에르어",
      pap: "파피아멘토어",
      "pa-Arab": "펀자브어(샤무키 문자)",
      "pt-PT": "포르투갈어(포르투갈)",
      Chichewa: "치체와어",
      cgg: "치가어",
      lua: "치루바어",
      Akan: "아칸어",
      zap: "사포테크어",
      "Northern Sami": "북부 사미어",
      Samoan: "사모아어",
      kri: "시에라리온 크리올어",
      crs: "세이셸 크리올어",
      Sango: "상고어",
      "sat-Latn": "산탈리어(라틴 문자)",
      sat: "산탈리어(올 치키 문자)",
      Esperanto: "에스페란토어",
      Swati: "스와티어",
      "Scottish Gaelic": "스코틀랜드 게일어",
      sus: "수수어",
      ceb: "세부아노어",
      ber: "타마지트어(티피나그 문자)",
      "ber-Latn": "타마지트어",
      Tahitian: "타히티어",
      Tonga: "통가어",
      Tigrinya: "티그리냐어",
      tcy: "툴루어",
      tum: "툼부카어",
      tyv: "투바어",
      war: "와라이어",
      mak: "마카사어",
      vec: "베네치아어",
      Uyghur: "위구르어",
      Venda: "벤다어",
      Wolof: "월로프어",
      udm: "우드무르트어",
      szl: "실레지아어",
      scn: "시칠리아어",
      hil: "힐리가이논어",
      jam: "자메이카 파투아어",
      sah: "야쿠트어",
      ace: "아체어",
      iba: "이반어",
      Igbo: "이그보어",
      ilo: "일로카노어",
      "iu-Latn": "이누이트어(라틴 문자)",
      Inuktitut: "이누이트어(음절)",
      yua: "유카테크 마야어",
      Dzongkha: "종카어",
      Zulu: "줄루어"
    },
    notFund: "찾을 수 없음",
    notFundDesc: "찾으시는 것을 찾을 수 없습니다.",
    shareTips:
      "다음 보안 링크가 있는 모든 사람이 이 트랜스크립트와 관련 미디어 파일을 볼 수 있습니다.",
    copyLink: "링크 복사",
    copySuccessful: "복사 성공",
    copyFail: "복사 실패",
    closeTrans: "번역 취소",
    upgradeBtn: "지금 업그레이드",
    upgradeTip30: "이 파일은 30분을 초과합니다.",
    upgradeTipMore:
      "최대 10시간 길이의 파일을 자동으로 필사하려면 Scribify Pro로 업그레이드하세요"
  },
  // 로그인, 회원가입, 비밀번호 변경
  IdentityInfoManage: {
    or: "또는", // 또는
    signup: "회원가입", // 회원가입
    sign_up: "회원가입", // 회원가입
    loginByGoogle: "Google로 계속하기", // Google로 로그인
    emailAddress: "이메일 주소를 입력하세요", // 이메일을 입력하세요
    createAccount: "새 계정 만들기", // 계정 만들기
    accountExists: "이미 계정이 있으신가요? ", // 이미 계정이 있습니까? 로그인
    agreeTerm: {
      // 서비스 약관 및 개인정보 보호정책에 동의합니다
      agree:
        "{proName}을(를) 사용함으로써 {terms} 및 {policy}에 동의하게 됩니다.",
      terms: "서비스 약관",
      policy: "개인정보 보호정책"
    },
    setPassword: "비밀번호 설정", // 비밀번호 설정
    code: "인증 코드", // 인증 코드
    resend: "재전송", // 재전송
    codeToEmail:
      "임시 가입 코드를 이메일로 보냈습니다. 받은 편지함을 확인하고 위에 가입 코드를 붙여넣으세요.", // 방금 이메일로 인증 코드를 보냈습니다. 받은 편지함을 확인하고 위에 인증 코드를 붙여넣으세요.
    enterPassword: "비밀번호를 입력하세요.", // 비밀번호를 입력하세요
    passwordLeval: "비밀번호 수준", // 비밀번호 강도
    Weak: "약함", // 약함
    Medium: "중간", // 중간
    Strong: "강함", // 강함
    confirmPassword: "비밀번호 확인", // 비밀번호 확인
    invalidEmail: "유효하지 않은 이메일 주소", // 유효하지 않은 이메일 주소
    logInDirectly: "이 계정은 이미 존재합니다. 직접 로그인하세요.", // 계정이 이미 존재합니다. 바로 로그인하세요.
    codeErrorTryAgain: "인증 코드 오류. 다시 시도하세요.", // 인증 코드 오류. 다시 시도하세요.
    atLeastSix: "비밀번호는 최소 6자 이상이어야 합니다.", // 비밀번호는 최소 6자리 이상이어야 합니다.
    passwordNotMatch: "비밀번호가 일치하지 않습니다. 다시 시도하세요.", // 비밀번호가 일치하지 않습니다. 다시 시도하세요.
    login: "로그인", // 로그인
    log_in: "로그인", // 로그인
    log_In: "로그인", // 로그인
    password: "비밀번호", // 비밀번호
    forgotPassword: "비밀번호를 잊으셨나요?", // 비밀번호를 잊으셨나요?
    noAccount: "계정이 없으신가요?", // 계정이 없으신가요? 회원가입
    accountNotExists: "이 계정은 존재하지 않습니다.", // 계정이 존재하지 않습니다.
    passwordError: "비밀번호 오류", // 비밀번호 오류
    sendCode: "인증 코드 보내기", // 인증 코드 보내기
    resetPassword: "비밀번호 재설정", // 비밀번호 재설정
    resetYourPassword: "비밀번호 재설정", // 비밀번호 재설정
    newOldCantSame: "새 비밀번호는 이전 비밀번호와 달라야 합니다.", // 새 비밀번호는 이전 비밀번호와 동일할 수 없습니다.
    passwordResetOk: "비밀번호가 성공적으로 재설정되었습니다!" // 비밀번호가 성공적으로 재설정되었습니다!
  },
  // 공유 세부 페이지
  Sharepage: {},
  // 초기화 페이지
  InitPage: {},
  // 계정 설정
  AccountSettingsPage: {
    subscription: "구독 플랜",
    freeversion: "무료",
    transcribeTimesDay: "일일 3회 변환",
    freeThreeTimesDay: "매일 3개의 파일을 무료로 변환하세요.",
    uploadMinutes: "30분 업로드",
    oneFileUploaded:
      "각 파일은 최대 30분 길이이며, 한 번에 하나의 파일만 업로드 가능",
    lowerPriority: "낮은 우선순위",
    needsToWaitLonger:
      "일일 3회 변환 파일 변환을 위해 더 오래 기다려야 합니다.",
    currentPlan: "현재 플랜",
    professionalEdition: "프로페셔널 버전",
    unlimitedTranscription: "무제한 변환",
    unlimitedNumberOfTimes: "1인당 무제한 변환 가능",
    uploadWithinHours: "10시간 이내 업로드",
    filesUploadedAtOnce:
      "각 파일 최대 10시간/5GB. 한 번에 50개 파일 업로드 가능",
    highestPriority: "최고 우선순위",
    weWillGiveTheHighest: "항상 최우선 순위로 파일을 빠르게 변환해 드립니다.",
    theFirstMonth: "첫 달",
    subscribeTo: "구독하기",
    basicVersionFree: "기본 버전(무료)",
    return: "돌아가기",
    annualize: "연간",
    monthly: "월간",
    everyYear: "매년",
    saved: "저장됨",
    byTheMonth: "월별",
    firstMonth: "첫 달",
    afterwardsEveryMonth: "이후 매월",
    manageSubscription: "구독 관리",
    professionalYearbook: "프로페셔널 연간",
    professionalMonthly: "프로페셔널 월간",
    subscriptionWillCancelledOn: "구독이 아래 날짜에 취소될 예정입니다",
    displayLanguage: "표시 언어",
    update: "지금 업그레이드",
    basicversion: "기본 버전(무료)",
    daily: "일일 변환 {start}/{end} 사용",
    upgradetoPro: "Pro로 업그레이드",
    accountSetting: "계정 설정",
    returnAccountSetting: "계정 설정으로 돌아가기",
    logOut: "로그아웃",
    account: "계정",
    email: "이메일",
    id: "ID",
    password: "비밀번호",
    resetPassword: "비밀번호 재설정",
    logIn: "로그인",
    tryForFree: "무료로 사용해보기",
    notFund: "찾을 수 없음",
    couldntFind: "찾으시는 내용을 찾을 수 없습니다.",
    proAnnual: "프로 연간",
    yourSubscription: "구독이 다음 날짜에 해지됩니다",
    proMonthly: "프로 월간",
    perMonth: "월",
    afterwards: "이후",
    accuracy: "변환 정확도",
    supported: "지원 언어",
    identification: "화자 식별",
    transcriptSranslation: "변환 번역",
    perYear: "연",
    getProPlan: "프로 플랜 구독",
    changeToAnnual: "연간으로 변경",
    automaticRenewalon: "자동 갱신일"
  },
  // 언어 맵핑 관계
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "중국어(간체)",
      "Chinese(Traditional)": "중국어(번체)",
      Japanese: "일본어",
      Danish: "덴마크어",
      German: "독일어",
      English: "영어",
      Spanish: "스페인어",
      French: "프랑스어",
      Italian: "이탈리아어",
      Hungarian: "헝가리어",
      Dutch: "네덜란드어",
      Norwegian: "노르웨이어",
      Polish: "폴란드어",
      Portuguese: "포르투갈어",
      Finnish: "핀란드어",
      Swedish: "스웨덴어",
      Turkish: "터키어",
      Greek: "그리스어",
      Russian: "러시아어",
      Ukrainian: "우크라이나어",
      Hebrew: "히브리어",
      Arabic: "아랍어",
      Korean: "한국어"
    }
  },
  demo: {
    title: "넉스트프로",
    description:
      "글로벌 결제 게이트웨이(스트라이프/크림), 구글 OAuth, i18n 라우팅 및 검색 엔진 최적화 도구가 사전 통합된 오픈 소스 넉스트3 서비스형 소프트웨어(SaaS) 템플릿입니다. 다국어 웹 앱을 출시하는 개발자를 위해 설계되었으며, 서버 사이드 렌더링/정적 사이트 생성 지원과 기본 제공되는 프로덕션급 보안을 제공합니다.",
    startLink: "무료 체험 시작~",
    thirdPartyLink: "깃허브 →",
    waitlist: {
      cardTitle:
        "대기자 명단에 가입하고 최신 넉스트프로 뉴스와 할인 혜택을 가장 먼저 받아보세요!",
      placeholder: "이메일 입력",
      button: "대기자 명단 가입",
      joinCountMessage:
        "🔥 초기 사용자 #{count}님이 방금 대기자 명단에 가입했습니다!"
    },
    seo: {
      title: "오픈소스 넉스트 서비스형 소프트웨어 보일러플레이트 | 넉스트프로",
      description:
        "고객에게 제품을 선보이는 데 필요한 모든 것이 포함된 넉스트JS 보일러플레이트입니다. 아이디어에서 프로덕션까지 5분 만에 가능합니다."
    },
    api: {
      title: "데모입니다",
      corpInfo: "회사 정보"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "비디오 다운로드 오류"
      },
      mse: {
        code: 2,
        msg: "스트림 추가 오류"
      },
      parse: {
        code: 3,
        msg: "구문 분석 오류"
      },
      format: {
        code: 4,
        msg: "잘못된 형식"
      },
      decoder: {
        code: 5,
        msg: "디코딩 오류"
      },
      runtime: {
        code: 6,
        msg: "문법 오류"
      },
      timeout: {
        code: 7,
        msg: "재생 시간 초과"
      },
      other: {
        code: 8,
        msg: "기타 오류"
      }
    },
    HAVE_NOTHING: "오디오/비디오 준비 여부에 대한 정보가 없습니다",
    HAVE_METADATA: "오디오/비디오 메타데이터가 준비되었습니다",
    HAVE_CURRENT_DATA:
      "현재 재생 위치에 대한 데이터는 사용 가능하지만, 다음 프레임/밀리초를 재생하기에 충분한 데이터가 없습니다",
    HAVE_FUTURE_DATA: "현재 및 최소 한 프레임의 데이터를 사용할 수 있습니다",
    HAVE_ENOUGH_DATA: "사용 가능한 데이터가 재생을 시작하기에 충분합니다",
    NETWORK_EMPTY: "오디오/비디오가 초기화되지 않았습니다",
    NETWORK_IDLE:
      "오디오/비디오가 활성화되어 리소스로 선택되었지만 네트워크가 사용되지 않습니다",
    NETWORK_LOADING: "브라우저가 데이터를 다운로드 중입니다",
    NETWORK_NO_SOURCE: "오디오/비디오 소스를 찾을 수 없습니다",
    MEDIA_ERR_ABORTED: "가져오기 프로세스가 사용자에 의해 중단되었습니다",
    MEDIA_ERR_NETWORK: "다운로드 중 오류가 발생했습니다",
    MEDIA_ERR_DECODE: "디코딩 중 오류가 발생했습니다",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "오디오/비디오가 지원되지 않습니다",
    REPLAY: "다시 재생",
    ERROR: "네트워크가 오프라인입니다",
    PLAY_TIPS: "재생",
    PAUSE_TIPS: "일시 중지",
    PLAYNEXT_TIPS: "다음 재생",
    DOWNLOAD_TIPS: "다운로드",
    ROTATE_TIPS: "회전",
    RELOAD_TIPS: "다시 로드",
    FULLSCREEN_TIPS: "전체 화면으로",
    EXITFULLSCREEN_TIPS: "전체 화면 종료",
    CSSFULLSCREEN_TIPS: "CSS 전체 화면",
    EXITCSSFULLSCREEN_TIPS: "CSS 전체 화면 종료",
    TEXTTRACK: "자막",
    PIP: "화면 속 화면",
    SCREENSHOT: "스크린샷",
    LIVE: "실시간",
    OFF: "끄기",
    OPEN: "열기",
    MINI_DRAG: "클릭하고 길게 눌러 드래그",
    MINISCREEN: "미니 화면",
    REFRESH_TIPS: "시도해 보세요",
    REFRESH: "새로고침",
    FORWARD: "앞으로",
    LIVE_TIP: "실시간",
    TM_SUBTITLE_SHOW_TIPS: "자막 켜기",
    TM_SUBTITLE_HIDE_TIPS: "자막 끄기",
    TM_MINIMIZE_TIPS: "비디오 숨기기"
  },
  privacyPolicy: {
    privacyPolicyTitle: "개인정보 보호정책",
    lastUpdated: "최종 업데이트: 2025년 8월 25일",
    policyDescription:
      "본 정책은 Scribify(이하 &quot;Scribify&quot;, &quot;당사&quot;, &quot;우리&quot;)가 귀하가 당사 서비스, 웹사이트를 사용할 때 귀하의 개인 정보를 수집, 사용 및 공개하는 방식을 설명합니다.",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "및 소프트웨어(총칭하여 &quot;서비스&quot;)입니다.",
    policyAgreement:
      "본 개인정보 보호정책을 주의 깊게 읽고 이해하시기 바랍니다. 당사 서비스를 이용함으로써 귀하는 본 개인정보 보호정책에 동의하는 것으로 간주됩니다. 본 정책에 따른 당사 개인정보 사용에 동의하지 않으시면 당사 서비스 이용을 즉시 중단하셔야 합니다.",
    policyOverview:
      "본 정책에는 당사가 수집하는 데이터와 수집 이유, 데이터 처리 방식, 그리고 데이터와 관련된 귀하의 권리에 대한 내용이 명시되어 있습니다. 당사는 귀하의 데이터를 판매하지 않습니다.",
    scopeTitle: "1. 본 개인정보 보호정책의 범위",
    whatWeCollectTitle: "2. 수집 내용 및 수집 이유",
    accessShareTitle: "3. 당사가 귀하의 정보에 접근하거나 공유하는 경우",
    secureDataTitle: "4. 귀하의 데이터를 보호하는 방법",
    deleteContentTitle: "5. 콘텐츠를 삭제하면 어떻게 되나요?",
    locationTitle: "6. 사이트 및 데이터의 위치",
    childrenPrivacyTitle: "7. 아동의 개인정보 보호",
    updatesTitle: "8. 본 개인정보 보호정책의 업데이트",
    contactUsTitle: "9. 문의하기",
    identityAccessTitle: "2.1 신원 및 접근",
    billingInfoTitle: "2.2 청구 정보",
    productInteractionsTitle: "2.3 제품 상호 작용",
    websiteInteractionsTitle: "2.4 웹사이트 상호작용",
    cookiesTitle: "2.5 쿠키",
    voluntaryCorrespondenceTitle: "2.6 자발적 서신",
    scopeContent:
      "본 개인정보 보호정책은 당사 서비스 사용자에 대한 정보 수집 및 처리에만 적용됩니다. 본 개인정보 보호정책은 당사에 링크된 제3자가 운영하는 서비스, 웹사이트 또는 소프트웨어(당사가 해당 링크를 제공하든 다른 사용자가 공유하든)에는 적용되지 않으며, 제3자의 콘텐츠, 데이터, 애플리케이션 또는 자료에도 적용되지 않습니다. 제3자 웹사이트 또는 소프트웨어에 정보를 제공하기 전에 해당 웹사이트 또는 소프트웨어의 개인정보 보호정책을 확인하시기 바랍니다.",
    collectPrinciple:
      "저희의 기본 원칙은 필요한 것만 수집하는 것입니다. 실제로 이 원칙이 의미하는 바는 다음과 같습니다.",
    identityAccessContent:
      "당사 제품에 가입하실 때 이름, 이메일 주소와 같은 개인 정보를 요청드립니다. 이는 필수적인 제품 기능을 제공하고 제품 업데이트 및 기타 필수 정보를 제공해 드리기 위한 것입니다.",
    billingInfoContent:
      "유료 상품에 가입하시면 결제 정보와 청구지 주소를 입력해 주셔야 합니다. 결제 정보는 저희 결제 처리 업체에 직접 전송되며 저희 서버에는 저장되지 않습니다.",
    productInteractionsContent:
      "귀하가 제품 계정에 업로드, 수신 또는 관리하는 콘텐츠는 당사 서버에 저장됩니다. 귀하가 해당 콘텐츠를 삭제하지 않는 한, 귀하의 계정이 활성 상태인 동안 해당 콘텐츠를 보관할 수 있습니다.",
    websiteInteractionsContent:
      "당사는 전환율 테스트 및 신제품 디자인 실험 등 분석 및 통계 목적으로 귀하의 브라우징 활동 정보를 수집합니다. 여기에는 브라우저 및 운영 체제 버전, IP 주소, 방문한 웹 페이지 및 로드 시간, 그리고 귀하를 당사로 연결한 웹사이트 등이 포함됩니다. 계정이 있고 로그인되어 있는 경우, 이러한 웹 분석 데이터는 계정이 더 이상 활성화되지 않을 때까지 귀하의 IP 주소 및 사용자 계정에 연결됩니다.",
    cookiesContent1:
      "또한 당사는 특정 기본 설정을 저장하고, 귀하가 당사 애플리케이션을 더 쉽게 사용할 수 있도록 하며, A/B 테스트를 수행하고 일부 분석을 지원하기 위해 지속적인 자사 쿠키와 일부 타사 쿠키를 사용합니다.",
    cookiesContent2:
      "쿠키는 브라우저에 저장되는 텍스트 파일입니다. 로그인 정보와 사이트 환경설정을 기억하는 데 도움이 될 수 있습니다. 또한 브라우저 유형, 운영 체제, 방문한 웹 페이지, 방문 시간, 열람한 콘텐츠, 기타 클릭 스트림 데이터 등의 정보를 수집할 수도 있습니다. 브라우저 설정에서 쿠키 보관 설정을 조정하고 개별 쿠키를 허용 또는 차단할 수 있습니다. 단, 쿠키를 비활성화하면 앱이 작동하지 않고 서비스의 다른 기능도 제대로 작동하지 않을 수 있습니다.",
    voluntaryCorrespondenceContent:
      "여러분이 질문이나 도움을 요청하기 위해 이메일을 보내면, 우리는 여러분의 이메일 주소를 포함한 해당 서신을 보관합니다. 그러면 미래에 여러분이 연락할 때 참고할 수 있도록 과거의 서신 내역을 보관할 수 있습니다.",
    accessShareContent1:
      "귀하가 요청하신 제품 또는 서비스를 제공하기 위해. 당사는 애플리케이션 실행 및 서비스 제공을 위해 일부 제3자 하위 처리업체를 이용하고 있습니다. 여기에는 클라우드 및 분석 서비스 제공업체가 포함됩니다.",
    accessShareContent2:
      "남용 사례를 조사, 예방 또는 관련 조치를 취하기 위함입니다. 잠재적 남용 사례를 조사할 때 고객 계정에 접근하는 것은 최후의 수단입니다. 당사는 고객과 문제를 신고하는 사람 모두의 개인정보와 안전을 보호하기 위해 최선을 다하며, 이러한 책임의 균형을 유지하기 위해 노력합니다. 귀하가 당사 제품을 제한된 목적으로 사용하고 있다는 사실이 발견될 경우, 당사는 필요한 조치를 취할 것이며, 필요한 경우 관련 당국에 신고할 것입니다.",
    accessShareContent3: "해당 법률에 따라 요구되는 경우.",
    userDataRequests:
      "- 사용자 데이터 요청. 당사는 법적 절차에 따른 강제성이 있거나 긴급 요청과 같은 제한적인 상황을 제외하고는 정부의 사용자 데이터 요청에 응답하지 않는 것을 정책으로 삼고 있습니다. 단, 미국 법 집행 기관이 데이터 공유를 요구하는 영장, 형사 소환장 또는 법원 명령을 소지한 경우, 당사는 이를 준수해야 합니다. 마찬가지로, 미국 외 국가 정부 기관의 요청에도 미국 정부가 상호 사법 공조 조약 또는 협정에 명시된 절차를 통해 강제하는 경우에만 응답합니다. 당사는 법적으로 금지된 경우와 일부 긴급 상황을 제외하고, 데이터를 공유하기 전에 관련 사용자에게 알리는 것을 정책으로 삼고 있습니다.",
    preservationRequests:
      "- 보존 요청. 마찬가지로, 당사의 정책은 미국 연방 저장 통신법(18 USC Section 2703(f)) 또는 민사 소송을 위한 미국 소환장이 적법하게 송달된 경우에만 데이터 보존 요청을 준수하는 것입니다. 당사는 법률에 의해 요구되거나 당사가 항소하지 않기로 결정한 법원 명령에 의해 강제되는 경우를 제외하고는 보존된 데이터를 공유하지 않습니다. 또한, 필요한 보존 기간이 만료되기 전에 적절한 영장, 법원 명령 또는 소환장을 받지 않는 한, 보존 기간 만료 시 고객 데이터의 모든 보존 사본을 파기합니다.",
    taxAudit:
      "- 세무 당국의 감사를 받는 경우, 청구 관련 정보를 공유해야 할 수 있습니다. 이 경우, 청구지 주소 및 면세 정보 등 필요한 최소한의 정보만 공유합니다.",
    secureDataContent1: "모든 데이터는 암호화됩니다.",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "당사 서버에서 귀하의 브라우저로 전송되는 경우.",
    deleteContentContent: "콘텐츠를 삭제하면 즉시 액세스할 수 없게 됩니다.",
    locationContent:
      "당사의 제품 및 기타 웹 자산은 미국에서 운영됩니다. 유럽 연합, 영국 또는 미국 외 지역에 거주하시는 경우, 귀하가 당사에 제공하는 모든 정보는 미국으로 전송되어 저장됩니다. 당사 웹사이트 또는 서비스를 이용하거나 당사에 개인 정보를 제공함으로써 귀하는 이러한 전송에 동의하는 것으로 간주됩니다.",
    childrenPrivacyContent:
      "본 서비스는 아동을 대상으로 하지 않으며, 13세 미만 아동의 개인 정보를 고의로 수집하지 않습니다. 13세 미만인 경우, 본 서비스를 통해 개인 정보를 제출하지 마십시오. 아동이 본 정책을 위반하여 당사에 개인 정보를 제공했다고 생각되시면 아래 안내에 따라 당사에 연락해 주십시오.",
    updatesContent:
      "관련 규정을 준수하고 새로운 관행을 반영하기 위해 필요에 따라 본 정책을 업데이트할 수 있습니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 새로 고칩니다.",
    contactUsContent1:
      "개인정보 보호정책에 대해 질문, 의견 또는 불만 사항이 있는 경우",
    contactUs: "문의하기",
    contactUsContent2:
      "귀하의 불만 사항은 최대한 빨리 처리되도록 노력하겠습니다."
  },
  termsOfService: {
    termsOfServiceTitle: "서비스 약관",
    lastUpdated: "최종 업데이트: 2022년 9월 21일",
    thankYouMessage: "저희 제품을 이용해 주셔서 감사합니다!",
    companyReference:
      "본 문서에서 &quot;회사&quot;, &quot;우리&quot;, &quot;저희&quot;라는 표현은 Scribify를 지칭합니다.",
    servicesDefinition:
      "&quot;서비스&quot;란 Scribify가 제작하고 유지 관리하는 모든 제품을 의미하며, 웹 브라우저, 데스크톱 애플리케이션, 모바일 애플리케이션 또는 다른 형식으로 제공됩니다.",
    termsUpdateNotice:
      "본 서비스 약관은 향후 업데이트될 수 있습니다. 일반적으로 이러한 변경은 확장된 관련 정책 링크를 통해 약관의 일부를 명확히 하기 위한 것입니다. 정책에 중대한 변경 사항이 있을 때마다 이 페이지 상단의 날짜를 갱신하고 계정 소유자에게 알리기 위한 기타 적절한 조치를 취할 것입니다.",
    acceptanceOfAgreementTitle: "1. 계약 수락",
    scribifyServicesTitle: "2. Scribify의 서비스",
    accountTermsTitle: "3. 계정 약관",
    paymentRefundsTitle: "4. 지불, 환불 및 계획 변경",
    cancellationTerminationTitle: "5. 취소 및 종료",
    submissionsTitle: "6. 제출물",
    uptimeSecurityTitle: "7. 가동 시간 및 보안",
    siteManagementTitle: "8. 사이트 관리",
    copyrightContentTitle: "9. 저작권 및 콘텐츠 소유권",
    prohibitedActivitiesTitle: "10. 금지된 활동",
    featuresBugsTitle: "11. 기능 및 버그",
    correctionsTitle: "12. 정정",
    userDataTitle: "13. 사용자 데이터",
    privacyPolicyTitle: "14. 개인정보 보호정책",
    liabilityTitle: "15. 책임",
    miscellaneousTitle: "16. 기타",
    contactUsTitle: "17. 문의하기",
    acceptanceContent1:
      "당사 서비스를 이용함으로써 귀하는 본 계약에 동의하는 것으로 간주되며, 본 계약은 귀하와 Scribify 간의 구속력 있는 계약이 됩니다. 귀하는 본 약관에 동의할 법적 능력이 있음을 진술하며, 구속력 있는 계약을 체결할 수 있는 법적 연령임을 확인합니다. Scribify의 동의는 귀하가 본 계약의 모든 조건에 동의하는 것을 명시적으로 조건으로 합니다.",
    acceptanceContent2:
      "본 서비스는 18세 미만의 사용자를 대상으로 하지 않으며, 18세 미만의 사용자는 본 서비스를 이용할 수 없습니다. 본 서비스를 이용함으로써 귀하는 앞서 언급한 자격 요건을 충족함을 진술하고 보증합니다.",
    acceptanceContent3:
      "&quot;귀하&quot;, &quot;귀하의&quot;, &quot;귀하 자신&quot;이라는 용어에는 귀하의 직원, 대리인, 사업 담당자 및 귀하의 계정을 통해 서비스에 대한 접근 권한을 제공하는 기타 모든 개인(아래 정의 참조)도 포함됩니다. 귀하는 귀하의 계정을 통해 서비스에 접근하는 모든 사람이 본 약관을 인지하고 준수하도록 할 책임이 있습니다.",
    acceptanceContent4:
      "Scribify는 단독 재량으로 본 약관을 수시로 개정하고 업데이트할 권리를 보유합니다. 모든 변경 사항은 게시되는 즉시 적용됩니다. 개정된 약관 게시 후에도 서비스를 계속 사용하는 것은 귀하가 변경 사항에 동의하고 수락하는 것으로 간주됩니다. 변경 사항은 귀하에게 구속력을 가지므로, 변경 사항을 파악하기 위해 이 페이지를 수시로 확인하시기 바랍니다.",
    servicesContent1:
      "당사 서비스를 이용하면 사용자는 음성 대화를 검색, 번역하고 다른 사람과 공유할 수 있는 텍스트로 변환할 수 있습니다.",
    servicesContent2:
      "귀하는 서비스의 무료 버전(이하 &quot;무료 서비스&quot;)을 이용할지, 또는 수수료를 지불해야 하는 구독 기반 유료 버전 서비스(이하 &quot;유료 서비스&quot;)를 이용할지 선택할 수 있습니다.",
    servicesContent3:
      "당사는 귀하에게 서비스를 제공합니다. 귀하는 서비스 이용에 필요한 모든 준비를 하실 책임이 있습니다.",
    accountTerms1:
      "- 귀하는 계정 보안 유지에 대한 책임이 있습니다. 회사는 귀하가 이 보안 의무를 준수하지 않아 발생하는 어떠한 손실이나 손해에 대해서도 책임을 지지 않습니다.",
    accountTerms2:
      "- 귀하는 불법적, 비윤리적 또는 부도덕한 목적으로 서비스를 이용할 수 없습니다.",
    accountTerms3:
      "- 귀하는 귀하의 계정에서 게시되는 모든 콘텐츠와 발생하는 모든 활동에 대해 책임을 집니다. 여기에는 (a) 귀하의 로그인 정보에 접근할 수 있는 사람, 또는 (b) 귀하의 계정에 자체 로그인 정보를 보유한 사람이 게시한 콘텐츠가 포함됩니다.",
    accountTerms4:
      "- 반드시 인간이어야 합니다. &quot;봇&quot;이나 기타 자동화된 방법으로 등록된 계정은 허용되지 않습니다.",
    paymentContent1:
      "- 무료 체험을 제공하는 유료 서비스의 경우, 가입 시 체험 기간을 안내해 드립니다. 체험 기간 이후에는 서비스를 계속 이용하려면 선불로 결제해야 합니다. 결제하지 않으면 서비스가 종료됩니다.",
    paymentContent2:
      "- 무료 플랜에서 유료 플랜으로 업그레이드하는 경우, 귀하의 카드에 즉시 요금이 청구되며, 청구 주기는 업그레이드 날짜부터 시작됩니다.",
    paymentContent3:
      "- 모든 수수료에는 세무 당국에서 부과하는 모든 세금, 부과금 또는 관세가 포함되어 있지 않습니다. 필요한 경우, 당사는 세무 당국을 대신하여 해당 세금을 징수하고 세무 당국에 납부합니다. 그렇지 않은 경우, 귀하는 모든 세금, 부과금 또는 관세를 납부할 책임이 있습니다.",
    paymentContent4:
      "- 모든 구매는 환불되지 않습니다. 유료 서비스는 계정에 로그인하여 언제든지 취소할 수 있습니다. 유료 구독의 경우, 별도로 명시되지 않는 한 현재 유료 기간이 종료되는 시점에 취소가 적용됩니다.",
    cancellationContent1:
      "- 결제된 기간 만료 전에 서비스를 취소하시면 즉시 취소가 적용되며 요금이 청구되지 않습니다. 마지막 청구 주기의 미사용 시간은 자동으로 일할 계산되지 않습니다.",
    cancellationContent2:
      "- 당사는 언제든지 어떤 이유로든 귀하의 계정을 정지 또는 해지하고 현재 또는 미래의 모든 서비스 이용을 거부할 권리가 있습니다. 정지는 귀하가 계정 또는 계정의 콘텐츠에 접근할 수 없음을 의미합니다. 해지 시 귀하의 계정 또는 계정 접근 권한이 삭제되고, 귀하의 계정에 있는 모든 콘텐츠가 몰수 및 양도됩니다. 당사는 또한 언제든지 어떤 이유로든 누구에게든 서비스 이용을 거부할 권리를 보유합니다. 이 조항을 마련한 이유는 통계적으로 볼 때, 당사 서비스의 수십만 개 계정 중 적어도 하나는 불법적인 행위를 하고 있기 때문입니다.",
    cancellationContent3:
      "- 회사 직원이나 임원에 대한 언어적, 신체적, 서면적 또는 기타 학대(학대나 보복 위협 포함)가 발생할 경우 계정이 즉시 종료될 수 있습니다.",
    submissionsContent:
      "귀하는 귀하가 당사에 제공한 본 사이트와 관련된 모든 질문, 의견, 제안, 아이디어, 피드백 또는 기타 정보(&quot;제출물&quot;)가 기밀이 아니며 당사의 단독 재산이 됨을 인정하고 동의합니다. 당사는 모든 지적 재산권을 포함한 독점적 권리를 소유하며, 귀하에 대한 인정이나 보상 없이 상업적 또는 기타 모든 합법적인 목적을 위해 이러한 제출물을 제한 없이 사용 및 배포할 권리가 있습니다. 귀하는 이로써 해당 제출물에 대한 모든 저작인격권을 포기하며, 해당 제출물이 귀하의 독창적인 제출물이거나 귀하가 해당 제출물을 제출할 권리가 있음을 보증합니다. 귀하는 귀하의 제출물에 대한 소유권 침해 또는 도용 혐의 또는 실제 침해에 대해 당사를 상대로 어떠한 구제 수단도 없다는 데 동의합니다.",
    uptimeContent1:
      "- 서비스 이용에 따른 모든 책임은 사용자에게 있습니다. 당사는 본 서비스를 &quot;있는 그대로&quot;, &quot;이용 가능한 그대로&quot; 제공합니다. 당사는 대부분의 서비스에 대해 서비스 수준 계약을 제공하지 않지만, 애플리케이션 가동 시간을 중요하게 생각합니다.",
    uptimeContent2:
      "- 귀하의 사용량이 다른 고객의 일반적인 사용량을 크게 초과하는 경우, 당사는 귀하의 계정을 일시적으로 비활성화할 권리가 있습니다. 물론, 다른 고객의 서비스 성능에 부정적인 영향을 미칠 수 있는 드문 경우를 제외하고는 어떠한 조치도 취하기 전에 귀하에게 연락을 드릴 것입니다.",
    uptimeContent3:
      "- 당사는 백업, 중복성 및 암호화를 통해 귀하의 데이터를 보호하고 보안을 유지하기 위해 다양한 조치를 취하고 있습니다. 공용 인터넷을 통한 데이터 전송에는 암호화를 적용합니다.",
    uptimeContent4:
      "- 당사는 서비스를 운영하는 데 필요한 하드웨어, 소프트웨어, 네트워킹, 스토리지 및 관련 기술을 제공하기 위해 제3자 공급업체 및 호스팅 파트너를 활용합니다.",
    siteManagementContent:
      "당사는 다음의 권리를 보유하지만 의무는 없습니다. (1) 본 서비스 약관 위반 여부를 확인하기 위해 사이트를 모니터링합니다. (2) 당사의 단독 재량에 따라 법률 또는 본 서비스 약관을 위반하는 사람에 대해 적절한 법적 조치를 취합니다. 여기에는 해당 사용자를 법 집행 기관에 신고하는 것이 포함되지만 이에 국한되지 않습니다. (3) 당사의 단독 재량에 따라 제한 없이 귀하의 기여물 또는 그 일부를 거부하거나, 접근을 제한하거나, 이용 가능성을 제한하거나, 비활성화합니다(기술적으로 가능한 범위 내에서). (4) 당사의 단독 재량에 따라 제한 없이 통지 또는 책임을 지고 크기가 너무 크거나 당사 시스템에 부담을 주는 모든 파일 및 콘텐츠를 사이트에서 제거하거나 비활성화합니다. (5) 당사의 권리와 재산을 보호하고 사이트의 적절한 기능을 촉진하도록 설계된 방식으로 사이트를 관리합니다.",
    copyrightContent1:
      "- 서비스에 게시된 모든 콘텐츠는 미국 저작권법을 준수해야 합니다.",
    copyrightContent2:
      "- 당사는 귀하가 서비스에 제공하는 자료에 대해 어떠한 지적 재산권도 주장하지 않습니다. 업로드된 모든 자료는 귀하의 소유입니다.",
    copyrightContent3:
      "- 당사는 콘텐츠를 사전 검열하지 않지만, 서비스를 통해 제공되는 모든 콘텐츠를 거부하거나 삭제할 단독 재량권(단, 의무는 아님)을 보유합니다.",
    copyrightContent4:
      "- 서비스의 이름, 디자인 및 분위기는 회사의 저작권입니다. 모든 권리는 회사에 있습니다. 회사의 명시적인 서면 허가 없이 HTML, CSS, JavaScript 또는 시각적 디자인 요소의 어떠한 부분도 복제, 복사 또는 재사용할 수 없습니다. 홍보 목적으로 회사 로고 또는 서비스 로고를 사용하려면 허가를 받아야 합니다.",
    emailUs: "이메일로 문의하세요",
    copyrightContent5:
      "로고 사용 요청. 귀하가 본 서비스 약관을 위반하는 경우, 당사는 해당 허가를 철회할 권리를 보유합니다.",
    copyrightContent6:
      "- 귀하는 회사의 명시적인 서면 허가 없이 서비스의 일부 또는 전부를 재생산, 복제, 복사, 판매, 재판매 또는 이용하거나, 서비스의 이용 또는 서비스에 대한 접근을 하지 않을 것에 동의합니다.",
    copyrightContent7:
      "- 다른 웹사이트를 수정하여 그것이 서비스나 회사와 연관되어 있다는 잘못된 인상을 주어서는 안 됩니다.",
    copyrightContent8:
      "- 당사는 타인의 지적 재산권을 존중합니다. 본 사이트에서 또는 본 사이트를 통해 제공되는 자료가 귀하가 소유하거나 관리하는 저작권을 침해한다고 생각되시면 즉시",
    contactUs: "문의하기",
    copyrightContent9:
      "귀하의 통지 사본은 통지에 명시된 자료를 게시하거나 저장한 사람에게 발송됩니다. 통지에 중대한 허위 진술을 할 경우, 관련 법률에 따라 손해 배상 책임을 질 수 있습니다. 따라서 본 사이트에 게시되었거나 본 사이트에서 링크된 자료가 귀하의 저작권을 침해하는지 확실하지 않은 경우, 먼저 변호사와 상담하는 것이 좋습니다.",
    prohibitedActivitiesIntro:
      "귀하는 당사가 사이트를 제공하는 목적 이외의 다른 목적으로 본 사이트에 접속하거나 사용할 수 없습니다. 본 사이트는 당사가 명시적으로 지지 또는 승인한 경우를 제외하고 어떠한 상업적 활동과도 연계하여 사용될 수 없습니다.",
    prohibitedActivitiesUserAgreement:
      "사이트 사용자로서 귀하는 다음 사항에 동의하지 않습니다.",
    prohibitedActivity1:
      "- 당사의 서면 허가 없이 사이트에서 데이터나 기타 콘텐츠를 체계적으로 검색하여 직접 또는 간접적으로 컬렉션, 편집물, 데이터베이스 또는 디렉토리를 생성하거나 편집합니다.",
    prohibitedActivity2:
      "- 사용자 비밀번호와 같은 민감한 계정 정보를 알아내려는 시도를 포함하여, 저희와 다른 사용자를 속이거나 사기를 치거나 오도하는 행위.",
    prohibitedActivity3:
      "- 사이트의 보안 관련 기능을 우회, 비활성화 또는 방해하는 행위(콘텐츠 사용 또는 복사를 방지 또는 제한하거나 사이트 및/또는 사이트에 포함된 콘텐츠의 사용에 대한 제한을 시행하는 기능 포함)",
    prohibitedActivity4:
      "- 당사의 판단에 따라 당사 및/또는 사이트를 비방, 훼손하거나 기타 방식으로 해를 끼칩니다.",
    prohibitedActivity5:
      "- 사이트에서 얻은 정보를 이용해 다른 사람을 괴롭히거나, 학대하거나, 해를 끼치는 행위.",
    prohibitedActivity6:
      "- 당사의 지원 서비스를 부적절하게 이용하거나, 학대 또는 부정 행위에 대한 허위 신고를 제출합니다.",
    prohibitedActivity7:
      "- 해당 법률이나 규정에 맞지 않게 사이트를 사용하는 경우",
    prohibitedActivity8: "- 사이트의 허가 없는 프레이밍이나 링크에 관여합니다.",
    prohibitedActivity9:
      "- 대문자를 과도하게 사용하거나 스팸(반복되는 텍스트를 계속 게시하는 것)을 포함하여 바이러스, 트로이 목마 또는 기타 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하여 당사자가 사이트를 지속적으로 사용하고 즐기는 것을 방해하거나 사이트의 사용, 기능, 기능, 운영 또는 유지 관리를 수정, 손상, 방해, 변경 또는 방해하는 행위를 하는 행위입니다.",
    prohibitedActivity10:
      "- 스크립트를 사용하여 댓글이나 메시지를 보내거나, 데이터 마이닝, 로봇 또는 이와 유사한 데이터 수집 및 추출 도구를 사용하는 등 시스템의 자동화된 사용에 참여합니다.",
    prohibitedActivity11:
      "- 모든 콘텐츠에서 저작권이나 기타 소유권 고지를 삭제합니다.",
    prohibitedActivity12:
      "- 다른 사용자나 사람을 사칭하거나 다른 사용자의 사용자 이름을 사용하려고 시도합니다.",
    prohibitedActivity13:
      "- GIF(Clear Graphics Interchange Format), 1×1 픽셀, 웹 버그, 쿠키 또는 이와 유사한 장치(때때로 &quot;스파이웨어&quot; 또는 &quot;수동 수집 메커니즘&quot; 또는 &quot;PCM&quot;이라고 함)를 포함하되 이에 국한되지 않는 수동적 또는 능동적 정보 수집 또는 전송 메커니즘 역할을 하는 자료를 업로드하거나 전송(또는 업로드 또는 전송을 시도)하는 행위.",
    prohibitedActivity14:
      "- 사이트 또는 사이트에 연결된 네트워크나 서비스를 방해하거나 교란하거나 부당한 부담을 주는 행위.",
    prohibitedActivity15:
      "- 사이트의 어떠한 부분이라도 귀하에게 제공하는 당사 직원이나 대리인을 괴롭히거나, 괴롭히거나, 위협하거나, 협박하는 행위.",
    prohibitedActivity16:
      "- 사이트 또는 사이트의 일부에 대한 접근을 방해하거나 제한하도록 설계된 사이트의 모든 조치를 우회하려는 시도.",
    prohibitedActivity17:
      "- Flash, PHP, HTML, JavaScript 또는 기타 코드를 포함하되 이에 국한되지 않는 사이트 소프트웨어를 복사하거나 수정합니다.",
    prohibitedActivity18:
      "- 해당 법률에서 허용하는 경우를 제외하고, 사이트를 구성하거나 어떤 식으로든 사이트의 일부를 구성하는 소프트웨어의 모든 내용을 해독, 디컴파일, 분해 또는 역엔지니어링합니다.",
    prohibitedActivity19:
      "- 표준 검색 엔진이나 인터넷 브라우저 사용으로 인해 발생할 수 있는 결과를 제외하고, 스파이더, 로봇, 치트 유틸리티, 스크래퍼 또는 오프라인 리더를 포함하되 이에 국한되지 않고 사이트에 접속하는 모든 자동화 시스템을 사용, 실행, 개발 또는 배포하거나 허가되지 않은 스크립트나 기타 소프트웨어를 사용하거나 실행합니다.",
    prohibitedActivity20:
      "- 사이트에서 구매를 하기 위해 구매 대행인이나 구매대행인을 이용하세요.",
    prohibitedActivity21:
      "- 전자적 또는 기타 수단을 통해 사용자의 사용자 이름 및/또는 이메일 주소를 수집하여 원치 않는 이메일을 발송하거나 자동화된 수단이나 허위 명목으로 사용자 계정을 생성하는 등 사이트의 무단 사용을 금지합니다.",
    prohibitedActivity22:
      "- 본 사이트를 당사와 경쟁하기 위한 노력의 일환으로 사용하거나 수익을 창출하는 사업이나 상업적 기업을 위해 본 사이트 및/또는 콘텐츠를 사용합니다.",
    prohibitedActivity23:
      "- 본 사이트를 이용하여 상품 및 서비스를 광고하거나 판매를 제안합니다.",
    prohibitedActivity24: "- 프로필을 판매하거나 다른 방식으로 양도합니다.",
    featuresContent1:
      "저희는 저희만의 경험과 시간과 피드백을 공유해 주시는 고객 여러분의 경험을 바탕으로 신중하게 서비스를 설계합니다. 하지만 모든 사람을 만족시키는 서비스란 없습니다. 저희는 저희 서비스가 고객님의 특정 요구 사항이나 기대를 충족할 것이라고 보장하지 않습니다.",
    featuresContent2:
      "모든 기능을 출시 전에 테스트합니다. 다른 소프트웨어와 마찬가지로 저희 서비스에도 버그가 있을 수 있습니다. 저희는 보고된 버그를 추적하고 해결하며, 특히 보안이나 개인정보 보호와 관련된 버그는 더욱 그렇습니다. 보고된 모든 버그가 수정되는 것은 아니며, 완벽한 오류 없는 서비스를 보장하지 않습니다.",
    correctionsContent1:
      "본 사이트에는 설명, 가격, 재고 현황 및 기타 다양한 정보를 포함하여 오타, 부정확한 정보 또는 누락된 정보가 있을 수 있습니다. 당사는 사전 고지 없이 언제든지 오류, 부정확한 정보 또는 누락된 정보를 수정하고 본 사이트의 정보를 변경 또는 업데이트할 권리를 보유합니다.",
    correctionsContent2:
      "당사는 사이트가 항상 이용 가능하다는 것을 보장할 수 없습니다. 하드웨어, 소프트웨어 또는 기타 문제가 발생하거나 사이트 관련 유지 관리가 필요할 수 있으며, 이로 인해 중단, 지연 또는 오류가 발생할 수 있습니다. 당사는 귀하에게 통지하지 않고 언제든지 어떤 이유로든 사이트를 변경, 수정, 업데이트, 일시 중단, 중단 또는 기타 방식으로 수정할 권리를 보유합니다. 귀하는 사이트 가동 중단 또는 중단으로 인해 사이트에 접속하거나 사용할 수 없음으로 인해 발생하는 모든 손실, 피해 또는 불편에 대해 당사가 어떠한 책임도 지지 않는다는 데 동의합니다. 본 서비스 약관의 어떠한 내용도 당사가 사이트를 유지 관리 및 지원하거나 이와 관련된 수정, 업데이트 또는 배포를 제공할 의무를 지는 것으로 해석되지 않습니다.",
    userDataContent:
      "당사는 사이트 성능 관리 목적으로 귀하가 사이트로 전송하는 특정 데이터와 귀하의 사이트 이용과 관련된 데이터를 보관합니다. 당사는 정기적인 데이터 백업을 수행하지만, 귀하가 전송하는 모든 데이터 또는 사이트를 이용하여 수행한 모든 활동과 관련된 모든 데이터에 대한 책임은 전적으로 귀하에게 있습니다. 귀하는 당사가 해당 데이터의 손실 또는 손상에 대해 귀하에게 어떠한 책임도 지지 않는다는 데 동의하며, 이로써 해당 데이터의 손실 또는 손상으로 인해 발생하는 당사에 대한 모든 소송 권리를 포기합니다.",
    privacyPolicyContent1:
      "저희는 데이터 개인정보 보호 및 보안을 중요하게 생각합니다.",
    privacyPolicy: "개인정보 보호정책",
    privacyPolicyContent2:
      "본 사이트를 이용함으로써 귀하는 본 서비스 약관에 포함된 당사의 개인정보 보호정책을 준수하는 데 동의합니다. 본 사이트는 미국에서 호스팅됩니다. 미국의 관련 법률과 다른 개인 정보 수집, 사용 또는 공개에 관한 법률 또는 기타 요건이 적용되는 다른 지역에서 본 사이트에 접속하는 경우, 본 사이트를 계속 이용함으로써 귀하의 데이터는 미국으로 전송되며, 귀하는 귀하의 데이터가 미국으로 전송되고 미국에서 처리되는 데 동의합니다.",
    liabilityIntro:
      "본 약관 전반에 걸쳐 책임에 대해 언급하고 있지만, 모든 내용을 한 섹션에 정리하면 다음과 같습니다.",
    liabilityContent:
      "귀하는 회사가 다음으로 인해 발생하는 직접적, 간접적, 우발적, 이익 손실, 특별, 결과적, 징벌적 또는 모범적 손해(이익 손실, 영업권 손실, 사용 손실, 데이터 손실 또는 기타 무형 손실에 대한 손해 포함하되 이에 국한되지 않음)에 대해 법률상 또는 형평성상 귀하 또는 제3자에게 책임을 지지 않는다는 사실을 명확히 이해하고 동의합니다. (1) 서비스의 사용 또는 사용 불능; (2) 콘텐츠 및 자료의 오류, 실수 또는 부정확성; (3) 사이트에 대한 귀하의 접속 및 사용으로 인해 발생하는 모든 성격의 신체 상해 또는 재산 피해; (4) 서비스를 통해 구매 또는 취득한 상품, 데이터, 정보 또는 서비스 또는 수신된 메시지 또는 체결된 거래로 인해 발생하는 대체 상품 및 서비스의 조달 비용; (5) 당사의 보안 서버에 대한 무단 접속 또는 사용 및/또는 해당 서버에 저장된 모든 개인 정보 및/또는 재무 정보; (6) 사이트로의 또는 사이트로부터의 전송의 중단 또는 중지; (7) 제3자가 사이트를 통해 또는 사이트로 전송할 수 있는 버그, 바이러스, 트로이 목마 또는 이와 유사한 것, 및/또는; (8) 콘텐츠 및 자료의 오류 또는 누락, 또는 사이트를 통해 게시, 전송 또는 기타 방식으로 제공된 콘텐츠의 사용으로 인해 발생한 모든 종류의 손실 또는 손상; (9) 서비스에서 제3자의 진술 또는 행위; (10) 계약 위반, 불법 행위(능동적이든 수동적이든 과실 포함) 또는 기타 책임 이론으로서 이 서비스 약관 또는 서비스와 관련된 기타 사항.",
    miscellaneousContent:
      "본 서비스 약관 및 사이트에 게시하거나 사이트와 관련하여 게시한 모든 정책 또는 운영 규칙은 귀하와 당사 간의 전체 계약 및 이해를 구성합니다. 당사가 본 서비스 약관의 권리 또는 조항을 행사하거나 집행하지 않더라도 해당 권리 또는 조항을 포기한 것으로 간주되지 않습니다. 본 서비스 약관은 법률에서 허용하는 최대 범위에서 적용됩니다. 당사는 언제든지 당사의 권리 및 의무의 일부 또는 전부를 타인에게 양도할 수 있습니다. 당사는 당사의 합리적인 통제 범위를 벗어난 원인으로 인해 발생한 손실, 손해, 지연 또는 불이행에 대해 책임을 지지 않습니다. 본 서비스 약관의 조항 또는 조항의 일부가 불법, 무효 또는 집행 불가능하다고 판단되는 경우, 해당 조항 또는 조항의 일부는 본 서비스 약관에서 분리 가능한 것으로 간주되며 나머지 조항의 유효성 및 집행 가능성에 영향을 미치지 않습니다. 본 서비스 약관 또는 사이트 사용의 결과로 귀하와 당사 간에 합작 투자, 파트너십, 고용 또는 대리 관계가 생성되지 않습니다. 귀하는 본 서비스 약관을 작성했다는 이유로 본 서비스 약관이 당사에 불리하게 해석되지 않는다는 데 동의합니다. 귀하는 본 서비스 약관의 전자적 형태와 본 서비스 약관을 체결하기 위한 당사자들의 서명 부족을 근거로 귀하가 가질 수 있는 모든 방어수단을 포기합니다.",
    contactUsContent1: "서비스 약관에 대해 궁금한 사항이 있으면",
    contactUsContent2: "."
  }
};

export default defineI18nLocale(async locale => {
  return message
})

export { message }
