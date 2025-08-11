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
    <div
      v-if="isDel"
      class="del-box flex h-screen w-full flex-col items-center justify-center"
    >
      <div class="title text-[1.25rem] font-medium leading-7 text-black">
        {{ t("TranscriptionPage.notFund") }}
      </div>
      <div class="desc leading-5 text-black">
        {{ t("TranscriptionPage.notFundDesc") }}
      </div>
    </div>
  </client-only>
</template>

<script setup>
defineOptions({
  name: "TranscriptIndex"
});
import { languageMap } from "~/components/langChoose/langFlag.js";
import { ElMessage, ElLoading } from "element-plus";
import { onBeforeRouteLeave } from "vue-router";
const localePath = useLocalePath();
const defaultPath = localePath("/user/login");
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
const fileBaseInfo = ref(null);
// 获取转录内容
const getTranscriptInfo = async (fileId) => {
  loadingInstance = ElLoading.service({ fullscreen: true });
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
      return navigateTo(defaultPath);
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
  loadingInstance = ElLoading.service({ fullscreen: true });
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
    ElMessage({
      message: error.message,
      type: "warning",
      plain: true
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
  console.log("🚀 ~ file: [id].vue method: translate line: 110 🚀", data);
  if (!data.langCode) return;
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
  if (!tsDRef.value || isShare) return;
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
onMounted(async () => {
  if (!fileId || !taskId) {
    return ElMessage({
      message: "fail",
      type: "warning",
      plain: true
    });
  }
  if (needLogin.value) {
    return navigateTo(defaultPath);
  }
  let {
    fileMetaInfo,
    transcribeParagraphs,
    speaker,
    options,
    language,
    gmtCreateTime,
    duration,
    isHalfHour // isHalfHour = 1  半小时 isHalfHour = 0  所有的
  } = await getTranscriptInfo(fileId);
  isDel.value = fileMetaInfo.deleted !== 0;
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
    isHalfHour
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
  if (options.translateLang) {
    const lang = languageMap[options.translateLang];
    if (lang) translate(lang, true);
  }
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
