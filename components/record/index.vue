<template>
  <div v-if="isShow">
    <div
      ref="element"
      :style="style"
      class="fixed z-50 touch-none select-none rounded-[0.625rem] bg-black text-white"
    >
      <div v-if="!isStopped" class="px-5 py-5 sm:px-10 md:px-14">
        <div class="flex flex-col items-center">
          <div class="text-sm">{{ formattedTime }}</div>

          <div class="flex w-full items-center">
            <button
              @click.stop.prevent="toggleRecording"
              class="me-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-mainColor-900"
              :class="{ pulse: isRecording }"
              :title="
                isRecording
                  ? t('FileUploadAndRecording.record.pause')
                  : t('FileUploadAndRecording.record.resume')
              "
            >
              <span
                class="iconfont icon-bofang text-xs"
                v-if="!isRecording"
              ></span>
              <span class="iconfont icon-zanting text-xs" v-else></span>
            </button>

            <div
              class="relative me-2.5 h-2 w-44 rounded bg-white sm:w-72 md:w-[21.375rem]"
            >
              <div
                class="transition-width absolute left-0 top-0 h-2 w-0 rounded bg-mainColor-900"
                :style="{ width: progressPercentage + '%' }"
              >
                <div
                  class="absolute right-0 top-1/2 h-[1.125rem] w-[1.125rem] -translate-y-1/2 translate-x-2/3 rounded-full bg-mainColor-900"
                >
                  <div
                    class="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  ></div>
                </div>
              </div>
            </div>

            <div class="me-3.5 text-sm">10:00:00</div>

            <button
              @click.stop.prevent="stopRecording"
              class="h-[1.125rem] w-[1.125rem] rounded-[0.3125rem] bg-white"
              :title="t('FileUploadAndRecording.record.stop')"
            ></button>
          </div>
        </div>
      </div>
      <div v-if="isStopped" class="w-[22.25rem] px-2.5 py-5 sm:w-auto sm:px-8">
        <div
          class="flex flex-wrap items-center justify-between text-sm sm:flex-nowrap sm:justify-normal"
        >
          <span class="sm:me-10 sm:whitespace-nowrap">{{ recordTitle }}</span>
          <span class="sm:me-10 sm:whitespace-nowrap">{{ formattedTime }}</span>
          <div
            class="mt-2 flex w-full items-center justify-end sm:mt-0 sm:w-auto sm:flex-row sm:flex-nowrap sm:justify-normal"
          >
            <button
              class="customer-button del-button me-2 sm:whitespace-nowrap"
              @click.stop.prevent="delDialogVisible = true"
            >
              {{ t("FileUploadAndRecording.record.delete") }}
            </button>
            <button
              class="customer-button sm:whitespace-nowrap"
              @click.stop.prevent="transcribeRecord"
            >
              {{ t("FileUploadAndRecording.record.transcribe") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <record-dialog-delete
      v-model="delDialogVisible"
      @confirm="handleDelDialogConfirm"
    />
    <record-dialog-complete v-model="completeDialogVisible" />
    <record-dialog-result
      v-model="resultDialogVisible"
      :audioBlob="audioBlob"
      :recordTitle="recordTitle"
    />
    <subscription-modal v-if="isFreeUser" v-model="showSubModal" />
  </div>
</template>

<script setup lang="ts">
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useDraggable } from "@vueuse/core";
import Utils from "~/utils/tools";

const { t } = useI18n();
const dayjs = useDayjs();
const { isFreeUser, isNoTimes } = storeToRefs(useSubscriptionStore());
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.guess();
// 最大录音时间（10小时）
// todo 要改
const MAX_RECORDING_TIME = 1 * 60 * 60; // 10小时，单位秒 * 60 * 60
const elapsedTime = ref(0); // 已录制时间（秒）
const isRecording = ref(false);
const maxReached = ref(false);
const isStopped = ref(false); // 停止录制

// 添加流引用
const audioStream = ref<MediaStream | null>(null);
const mediaRecorder = ref<MediaRecorder | null>(null);
const audioChunks = ref<Blob[]>([]);

// 格式化时间为 HH_mm_ss
const formattedTime = computed(() => {
  const hours = Math.floor(elapsedTime.value / 3600);
  const minutes = Math.floor((elapsedTime.value % 3600) / 60);
  const seconds = elapsedTime.value % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});

// 计算进度百分比
const progressPercentage = computed(() => {
  return Math.min((elapsedTime.value / MAX_RECORDING_TIME) * 100, 97);
});

const timer = ref<any>(null);

// 开始录音
const audioBlob = ref<Blob | null>(null);
const recordTitle = ref(
  `${t("FileUploadAndRecording.record.record")} ${dayjs().format("YYYY-MM-DD HH_mm_ss")}.webm`
);
const { endRecord } = useRecordStore();
const isShow = ref(false);
const startRecording = async () => {
  try {
    // 仅在第一次或流被关闭时请求新流
    if (
      !audioStream.value ||
      audioStream.value
        .getTracks()
        .every((track) => track.readyState === "ended")
    ) {
      audioStream.value = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
    }

    isShow.value = true;

    // 创建媒体录制器
    mediaRecorder.value = new MediaRecorder(audioStream.value);

    mediaRecorder.value.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.value.push(event.data);
      }
    };

    mediaRecorder.value.onstop = () => {
      audioBlob.value = new Blob(audioChunks.value, { type: "audio/webm" });
      // 重置音频片段
      if (isStopped.value) {
        audioChunks.value = [];
        recordTitle.value = `${t("FileUploadAndRecording.record.record")}${dayjs().format("YYYY-MM-DD HH_mm_ss")}.webm`;
      }
      // url.value = URL.createObjectURL(audioBlob.value);
    };

    // 开始录制
    mediaRecorder.value.start();
    isRecording.value = true;
    startTimer();
  } catch (error) {
    ElMessage.error(t("FileUploadAndRecording.record.permissionDenied"));
    isRecording.value = false;
    endRecord();
  }
};

// 停止录音并释放资源
const stopRecording = () => {
  // 停止媒体录制器
  if (mediaRecorder.value && mediaRecorder.value.state !== "inactive") {
    mediaRecorder.value.stop();
  }

  // 释放麦克风资源
  if (audioStream.value) {
    audioStream.value.getTracks().forEach((track) => track.stop());
    audioStream.value = null;
  }

  // 重置状态
  isRecording.value = false;
  maxReached.value = false;
  clearInterval(timer.value);

  if (elapsedTime.value <= 0) {
    endRecord();
    isStopped.value = true;
    return;
  }
  isStopped.value = true;
};

// 暂停/继续录音
const toggleRecording = async () => {
  if (maxReached.value) return;

  if (!isRecording.value) {
    await startRecording();
  } else {
    // 暂停录制
    if (mediaRecorder.value && mediaRecorder.value.state === "recording") {
      mediaRecorder.value.stop();
    }
    isRecording.value = false;
    clearInterval(timer.value);
  }
};

const completeDialogVisible = ref(false);
// 开始计时器
const startTimer = () => {
  clearInterval(timer.value);
  timer.value = setInterval(() => {
    elapsedTime.value += 1;

    // 检查是否达到最大时间
    if (elapsedTime.value >= MAX_RECORDING_TIME) {
      maxReached.value = true;
      completeDialogVisible.value = true;
      stopRecording(); // 达到最大时间后自动停止
    }
  }, 1000);
};

// 组件卸载时清除所有资源
onUnmounted(() => {
  stopRecording();
  clearInterval(timer.value);
});

const delDialogVisible = ref(false);
function handleDelDialogConfirm() {
  delDialogVisible.value = false;
  endRecord();
}

startRecording();

// 转录录音
const resultDialogVisible = ref(false);
const showSubModal = ref(false);
const router = useRouter();
const localePath = useLocalePath();
const isMobile = Utils.isMobile();
const transcribeRecord = () => {
  if (isNoTimes.value) {
    if (isMobile) {
      endRecord();
      router.push(localePath("/getPro"));
      return;
    }
    showSubModal.value = true;
    return;
  }
  resultDialogVisible.value = true;
};

const el = useTemplateRef<HTMLElement>("element");
const elWidth = ref(0);
const elHeight = ref(0);
const pageWidth = ref(window.innerWidth);
const pageHeight = ref(window.innerHeight);

const initialPositionX = computed(() => {
  return pageWidth.value / 2 - elWidth.value / 2;
});
const initialPositionY = computed(() => {
  return pageHeight.value - elHeight.value - 20;
});

// Track the initial x position relative to page width (as a percentage)
const xPositionRatio = ref(0.5); // Default to center (50% of page width)

const calcRect = () => {
  if (el.value) {
    const rect = el.value.getBoundingClientRect();
    elWidth.value = rect.width;
    if (!elHeight.value) {
      elHeight.value = rect.height;
      y.value = initialPositionY.value;
    }

    // Update position with correct measurements
    x.value = initialPositionX.value;

    // Calculate the initial ratio
    xPositionRatio.value = (x.value + elWidth.value / 2) / pageWidth.value;
  }
};
watch(
  () => el.value,
  () => {
    calcRect();
  }
);

// Add page resize handler
const handleResize = () => {
  pageWidth.value = window.innerWidth;
  pageHeight.value = window.innerHeight;
  calcRect();
};

// Add window event listener for resize
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Update the useDraggable setup to track drag state
const { x, y, style } = useDraggable(el, {
  preventDefault: true,
  initialValue: {
    x: initialPositionX.value,
    y: initialPositionY.value
  },
  onMove: (position) => {
    const minX = 0;
    const minY = 0;

    // Maximum constraints (don't go beyond right or bottom edge)
    const maxX = pageWidth.value - elWidth.value;
    const maxY = pageHeight.value - elHeight.value;

    // Apply constraints to ensure element stays within viewport
    const constrainedX = Math.max(minX, Math.min(maxX, position.x));
    const constrainedY = Math.max(minY, Math.min(maxY, position.y));

    if (position.x > maxX) {
      x.value = maxX;
    }
    if (position.x < minX) {
      x.value = minX;
    }
    if (position.y > maxY) {
      y.value = maxY;
    }
    if (position.y < minY) {
      y.value = minY;
    }
  }
});
</script>

<style scoped>
.transition-width {
  transition: width 0.3s ease;
}

:deep(.customer-button) {
  @apply rounded-lg border border-mainColor-900 bg-mainColor-900 px-3 py-1.5 text-sm text-white hover:opacity-80;
}

:deep(.del-button) {
  @apply border border-subColor-normal !bg-subColor-normal !bg-opacity-15 !text-subColor-normal;
}
</style>
