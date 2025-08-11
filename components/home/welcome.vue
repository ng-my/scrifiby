<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="dialogVisible"
      :show-close="false"
      :close-on-click-modal="false"
      class="welcome-dialog"
      @close="handleClose"
    >
      <div
        class="h-[9.75rem] transition-all duration-300 ease-out sm:h-[13.625rem]"
        :class="{ 'h-auto': imgLoad, 'sm:h-auto': imgLoad }"
      >
        <img
          class="h-auto w-full"
          src="/assets/images/home/welcome.png"
          @load="imgLoad = true"
          alt=""
        />
      </div>

      <div class="px-7 pb-3 pt-5 sm:pb-5 sm:pt-9">
        <h2 class="flex w-full justify-center font-semibold">
          {{ t("HomePage.welcome.title") }}
        </h2>
        <!--        <p-->
        <!--          class="mt-0.5 flex items-center justify-center text-sm font-semibold"-->
        <!--        >-->
        <!--          {{ t("HomePage.welcome.description") }}-->
        <!--        </p>-->

        <!--        <div class="feature mt-5">-->
        <!--          <p>{{ t("HomePage.welcome.transcribe") }}</p>-->
        <!--          <p>{{ t("HomePage.welcome.precision") }}</p>-->
        <!--          <p>{{ t("HomePage.welcome.translate") }}</p>-->
        <!--          <p>{{ t("HomePage.welcome.edit") }}</p>-->
        <!--          <p>{{ t("HomePage.welcome.collaborate") }}</p>-->
        <!--        </div>-->

        <div
          class="mt-8 flex w-full flex-col items-center justify-center font-semibold"
        >
          <div>{{ t("HomePage.welcome.tip1") }}</div>
          <div>{{ t("HomePage.welcome.tip2") }}</div>
        </div>

        <!-- Get Started button -->
        <div class="flex w-full justify-center">
          <el-button
            class="home-btn mt-4 sm:mt-[1.6875rem]"
            @click="handleGetStarted"
            type="primary"
          >
            {{ t("HomePage.welcome.button") }}
          </el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTourStore } from "~/stores/useTourStore";

const dialogVisible = ref(false);

const { nextStep } = useTourStore();
const { startTouchListening, stopTouchListening } = useTouch();
const handleGetStarted = () => {
  dialogVisible.value = false;
};

const { t } = useI18n();

const { userInfo } = storeToRefs(useUserStore());
const beginnersTutorial = computed(() => {
  return (userInfo.value as any)?.userInfoVO?.beginnersTutorial;
});
const { detectAndReset } = useZoomReset();
startTouchListening();

const emit = defineEmits(["update:beginnersTutorial"]);

watch(
  () => beginnersTutorial.value,
  (value) => {
    let flag = false;
    if (value) {
      flag = detectAndReset(emit);
    } else if (value === false) {
      emit("update:beginnersTutorial", true);
    }
    setTimeout(() => {
      dialogVisible.value = flag && value;
    }, 100);
    if (!value) {
      stopTouchListening();
    }
  },
  {
    immediate: true
  }
);

const imgLoad = ref(false);

function handleKeyPress(e: any) {
  if (e.key === "Enter" && beginnersTutorial.value) {
    handleGetStarted();
  }
}
onMounted(() => {
  window.addEventListener("keyup", handleKeyPress);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyPress);
});

const handleClose = () => {
  stopTouchListening();
  nextStep();
  window.removeEventListener("keyup", handleKeyPress);
};
</script>

<style scoped>
@import "./dialog/common.css";
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  max-width: 30rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  padding: 0;
}

.feature p {
  @apply mb-4 text-sm last:mb-0;
}

:deep(.el-button) {
  height: 40px;
  width: 100%;
  max-width: 21.625rem;
}
/** primary按钮样式 */
:deep(.el-button--primary) {
  @apply !border-mainColor-900 !bg-mainColor-900 !text-white hover:!border-mainColor-990 hover:!bg-mainColor-990 hover:!text-white;
}
</style>
