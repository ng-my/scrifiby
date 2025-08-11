<template>
  <client-only>
    <!--    这里单独拎出去放 components ，表示只在客户端使用，服务端不渲染 -->
    <transcript-detail
      v-if="transcriptInfo && !isDel"
      ref="tsDRef"
      :speakers="speakers"
      :fileBaseInfo="fileBaseInfo"
      :transcriptInfo="transcriptInfo"
      :isShare="isShare"
      :shareName="shareName"
      @translate="translate"
      @saveConfig="handleBeforeUnload"
      @updateSpeakers="updateSpeakers"
    ></transcript-detail>
    <div v-if="isDel" class="del-box flex h-screen w-full flex-col">
      <div class="share-login">
        <layout-upgrade v-if="!isShare && isFreeUser" ref="showSubRef" />
        <layout-header v-if="isShare" />
      </div>
      <div class="main flex flex-1 flex-col items-center justify-center">
        <div class="title text-[1.25rem] font-medium leading-7 text-black">
          {{ t("TranscriptionPage.notFund") }}
        </div>
        <div class="desc mt-[0.625rem] leading-5 text-black">
          {{ t("TranscriptionPage.notFundDesc") }}
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
defineOptions({
  name: "TranscriptIndex"
});
import { languageMap } from "~/components/langChoose/langFlag.js";
import { ElLoading } from "element-plus";
import { Msg } from "~/utils/tools";
import { onBeforeRouteLeave } from "vue-router";
import { useErrorReporting } from "~/utils/fsReport";
const { reportSystemError } = useErrorReporting();
const localePath = useLocalePath();
const defaultPath = localePath("/home");
const { t } = useI18n();
const route = useRoute();
const userStore = useUserStore();
const fileId = route.params.id;
const taskId = route.query.taskId;
const shareId = route.query.shareId || "";
const shareName = decodeURIComponent(route.query.shareName || "");
const isShare = !!shareId;
let loadingInstance = null;

const isDel = ref(false);
const speakers = ref([]);
const fileBaseInfo = ref({});
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const defaultTranscriptInfo = {
  fileMetaInfo: {
    fileType: "mp3"
  },
  diarizeEnabled: false,
  transcribeParagraphs: [],
  language: "",
  gmtCreateTime: "",
  duration: 0,
  isHalfHour: 1,
  hasError: false
};
// 获取转录内容
const getTranscriptInfo = async (fileId) => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    customClass: "cus-loading-lgCdiwM"
  });
  try {
    const { transcriptApi } = await import("~/api/transcript");
    if (isShare) {
      return await transcriptApi.getTranscriptInfoWithoutToken(
        fileId,
        taskId,
        decodeURIComponent(shareId)
      );
    }
    return await transcriptApi.getTranscriptInfo(fileId, taskId);
  } catch (error) {
    console.error("获取转录内容失败", error);
    //
    if (error.code === 610006) {
      loadingInstance.close();
      return navigateTo(defaultPath);
    } else if (error.code === 401) {
      return navigateTo(localePath("/user/login"));
    } else {
      defaultTranscriptInfo.hasError = true;
      loadingInstance.close();
      return defaultTranscriptInfo;
    }
  } finally {
    loadingInstance.close();
  }
};
// 获取其他语言翻译内容
const getOtherLangOfTranscript = async (
  fileId,
  taskId,
  targetLang,
  langName,
  originLang
) => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    customClass: "cus-loading-lgCdiwM"
  });
  try {
    const { transcriptApi } = await import("~/api/transcript");
    return await transcriptApi.getOtherLangOfTranscript({
      fileId,
      taskId,
      targetLang,
      langName,
      originLang
    });
  } catch (error) {
    Msg({
      message: error.message,
      type: "warning"
    });
    console.error("获取其他语言翻译内容失败:", error);
  } finally {
    loadingInstance.close();
  }
};
const settingDefault = {
  lastPlayTime: 0, // 上次播放停留的时间
  lastPlayRate: 1, // 上次播放的播放速度
  lastPlayVolume: 0.6, // 上次播放的音量
  isShowTimestamp: true, // 是否显示时间戳
  translateLang: "", // 翻译语言
  isShowVideo: true, // 是否显示视频
  isShowSpeaker: true
};
const originLang = ref("");
const paragraphIdMap = ref({});
const transcriptInfo = ref(null);
const tsDRef = ref(null);

const translate = async (data, init = false) => {
  if (!data?.langCode) return;
  let res = await getOtherLangOfTranscript(
    fileId,
    taskId,
    data.langCode,
    data.langId || data.lang,
    originLang.value
  );
  res?.forEach((item) => {
    const target =
      transcriptInfo.value.paragraphs[paragraphIdMap.value[item.pid]];
    target.translateContent = item.translateContent;
  });
  if (!init) tsDRef?.value?.getRecentLang();
};
// 保存文件相关设置
const saveFileBaseInfo = async (config) => {
  try {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.saveFileConfig({
      fileId,
      taskId,
      options: JSON.stringify(config)
    });
  } catch (error) {
    console.error("fail:", error);
  }
};
const handleBeforeUnload = () => {
  if (!tsDRef.value || isShare || fileBaseInfo.hasError) return;
  const config = tsDRef.value.getFileConfig();
  saveFileBaseInfo(config);
};
const needLogin = computed(() => {
  return !isShare && !userStore.userInfo;
});
// 更新 speaker
const updateSpeakers = (data) => {
  speakers.value = data;
};
const timeReport = {};
onMounted(async () => {
  if (!fileId || !taskId) {
    return Msg({
      message: "fail",
      type: "warning"
    });
  }
  if (needLogin.value) {
    return navigateTo(defaultPath);
  }
  console.time("转录详情接口时长");
  timeReport["begin"] =
    window?.sessionStorage.getItem("GoToTranscript") / 1 || Date.now();
  window?.sessionStorage.removeItem("GoToTranscript");
  const dataInfo = await getTranscriptInfo(fileId);
  if (!dataInfo) return;
  let {
    fileMetaInfo,
    diarizeEnabled,
    transcribeParagraphs,
    speaker,
    options,
    language,
    gmtCreateTime,
    duration,
    hasError,
    isHalfHour // isHalfHour = 1  半小时 isHalfHour = 0  所有的
  } = dataInfo;
  transcribeParagraphs ??= [];
  duration = Math.ceil(duration);
  console.timeEnd("转录详情接口时长");
  console.time("转录详情数据处理");
  timeReport["getTranscriptInfoOver"] = Date.now();
  isDel.value = fileMetaInfo.deleted > 0;
  originLang.value = language;
  speaker ??= [];
  options ??= settingDefault;
  speakers.value = speaker
    .map(({ speaker_id, speaker, count }) => ({
      id: speaker_id,
      name: speaker,
      count
    }))
    .sort((a, b) => a.id - b.id);
  if (options && Object.keys(options).length > 0) {
    options = Object.assign({}, settingDefault, options);
  } else {
    options = settingDefault;
  }
  if (isShare) {
    const obj = {
      lastPlayTime: 0, // 上次播放停留的时间
      lastPlayRate: 1, // 上次播放的播放速度
      lastPlayVolume: 0.6, // 上次播放的音量
      translateLang: "" // 翻译语言
    };
    options = Object.assign(options, obj);
  }
  fileMetaInfo.gmtCreateTime = gmtCreateTime;
  fileBaseInfo.value = {
    ...options,
    ...fileMetaInfo,
    taskId,
    fileId,
    duration,
    isHalfHour,
    hasError,
    language,
    diarizeEnabled //是否标识说话人
  };
  paragraphIdMap.value = transcribeParagraphs.reduce(
    (acc, cur, currentIndex) => {
      acc[cur.pid] = currentIndex;
      if (currentIndex === transcribeParagraphs.length - 1) {
        cur.isLast = true;
      }
      return acc;
    },
    {}
  );
  transcriptInfo.value = {
    paragraphs: transcribeParagraphs
  };
  console.timeEnd("转录详情数据处理");
  console.time("转录详情数据渲染");
  timeReport["renderBegin"] = Date.now();
  if (options.translateLang) {
    const lang = languageMap[options.translateLang];
    if (lang) translate(lang, true);
  }
  const reportToFs = () => {
    timeReport["转录详情接口时长"] =
      timeReport["getTranscriptInfoOver"] - timeReport["begin"];
    timeReport["转录详情数据处理"] =
      timeReport["renderBegin"] - timeReport["getTranscriptInfoOver"];
    timeReport["转录详情数据渲染第一个"] =
      timeReport["renderFirstOver"] - timeReport["renderBegin"];
    timeReport["转录详情数据页面总耗时"] =
      timeReport["renderFirstOver"] - timeReport["begin"];
    timeReport["后端接口耗时占比"] =
      (
        (timeReport["转录详情接口时长"] /
          timeReport["转录详情数据页面总耗时"]) *
        100
      ).toFixed(2) + "%";
    console.log("🍎🍎 ~ [id].vue:309 ~ timeReport:", timeReport);
    try {
      reportSystemError(timeReport);
    } catch (error) {
      console.error("reportToFs reportSystemError:", error);
    }
  };
  const renderOver = () => {
    let doms = document.querySelectorAll(".whitespace-break-spaces");
    if (doms?.length > 1) {
      console.timeEnd("转录详情数据渲染");
      timeReport["renderFirstOver"] = Date.now();

      reportToFs();
    } else {
      setTimeout(() => {
        renderOver();
      }, 10);
    }
  };
  renderOver();
  window.addEventListener("beforeunload", handleBeforeUnload);
});

onUnmounted(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});
onBeforeRouteLeave((to, from, next) => {
  handleBeforeUnload();
  next();
});
</script>
<style lang="scss">
.cus-loading-lgCdiwM {
  --el-color-primary: theme("colors.mainColor.900");
}
</style>
