<template>
  <div
    class="animate-modal-appear flex flex-1 flex-col-reverse overflow-hidden sm:flex-row"
  >
    <div
      class="bg w-[100%] px-4 py-[1.25rem] text-white sm:w-[42%] sm:px-[1.875rem]"
    >
      <div class="mb-[1.25rem] font-medium">
        {{ t("HomePage.subscriptionModal.left.title") }}:
      </div>

      <div
        v-for="feature in features"
        :key="feature.title"
        class="mb-4 flex last:mb-0"
      >
        <div class="me-2.5 mt-0.5 flex-shrink-0 text-white">
          <el-icon><Select /></el-icon>
        </div>
        <div>
          <div class="text-sm font-medium">{{ feature.title }}</div>
          <div v-if="feature.description" class="mt-0.5 text-sm text-[#B2C8FD]">
            {{ feature.description }}
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧白色部分 -->
    <div class="relative flex-1 bg-white px-4 py-[1.25rem] sm:px-[1.875rem]">
      <div
        v-if="!isMobile"
        class="mb-[1.875rem] flex items-center justify-between text-black"
      >
        <div class="text-sm">
          {{ t("HomePage.subscriptionModal.right.title") }}
        </div>
        <div class="cursor-pointer text-sm" @click="close">
          <el-icon size="1rem" color="#000"><Close /></el-icon>
        </div>
      </div>

      <!-- 年度计划 -->
      <div
        class="relative mb-2.5 flex cursor-pointer items-center overflow-hidden rounded-lg border p-4 transition-all duration-200 sm:mb-4 sm:p-[1.25rem]"
        :class="{
          'border-mainColor-900': selectedPlan === 'yearly',
          'hover:border-mainColor-600': selectedPlan !== 'yearly'
        }"
        @click="selectPlan('yearly')"
      >
        <transition name="fade-scale">
          <div
            class="me-5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-borderColor sm:me-3.5"
            :class="{ select: selectedPlan === 'yearly' }"
          >
            <el-icon
              v-if="selectedPlan === 'yearly'"
              size="0.75rem"
              color="#fff"
              ><Select
            /></el-icon>
          </div>
        </transition>

        <div class="flex-1">
          <div class="mb-1 flex items-center justify-between">
            <div class="text-sm">
              <!-- {{ t("HomePage.subscriptionModal.right.yearly") }} -->
                {{ t("AccountSettingsPage.proAnnual") }}
            </div>
            <div class="relative inline-block">
              <!-- 倾斜的边框容器 -->
              <div
                class="absolute inset-0 -skew-x-12 rounded border border-thirdColor"
              ></div>

              <!-- 水平的内容 -->
              <div
                class="relative z-10 flex items-center justify-center px-2.5 py-1 sm:px-3"
              >
                <span class="text-xs text-thirdColor"
                  >{{ t("HomePage.subscriptionModal.right.save") }} $108</span
                >
              </div>
            </div>
          </div>

          <div class="mb-2.5 flex items-center text-black">
            <div class="text-xl font-bold sm:text-3xl">$8.99</div>
            <div class="ms-2.5 font-medium">
              <!-- {{ t("HomePage.subscriptionModal.right.preMonth") }} -->
                {{ t("AccountSettingsPage.perMonth") }}
            </div>
            <div class="ms-3 text-fontColor line-through">$17.99</div>
          </div>

          <div>
            <span>$107.88</span>
            <span class="ms-1.5">
              <!-- // t("HomePage.subscriptionModal.right.preYear") -->
              {{ t("AccountSettingsPage.perYear") }}
            </span>
          </div>
        </div>
      </div>

      <!-- 月度计划 -->
      <div
        class="relative mb-4 flex cursor-pointer items-center overflow-hidden rounded-lg border p-4 transition-all duration-200 sm:mb-10 sm:p-[1.25rem]"
        :class="{
          'border-mainColor-900': selectedPlan === 'month',
          'hover:border-mainColor-600': selectedPlan !== 'month'
        }"
        @click="selectPlan('month')"
      >
        <transition name="fade-scale">
          <div
            class="me-5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-borderColor sm:me-3.5"
            :class="{ select: selectedPlan === 'month' }"
          >
            <el-icon v-if="selectedPlan === 'month'" size="0.75rem" color="#fff"
              ><Select
            /></el-icon>
          </div>
        </transition>

        <div class="flex-1">
          <div class="mb-1 flex items-center justify-between">
            <div class="text-sm">
              <!-- {{ t("HomePage.subscriptionModal.right.monthly") }} -->
              {{ t("AccountSettingsPage.proMonthly") }}
            </div>
          </div>

          <div class="mb-2.5 flex items-center text-black">
            <div class="text-xl font-bold sm:text-3xl">
              {{ isFristSubscription ? "$9.99" : "$17.99" }}
            </div>
            <div v-if="isFristSubscription" class="ms-2.5 font-medium">
              <!-- {{ t("HomePage.subscriptionModal.right.firstMonth") }} -->
                {{  t("AccountSettingsPage.firstMonth") }}
            </div>
            <div v-if="isFristSubscription" class="ms-3 text-fontColor">
              $17.99
              {{ t("HomePage.subscriptionModal.right.afterwards") }}
            </div>
          </div>

          <div>
            <span>$215.88</span>
            <span class="ms-1.5">{{
              // t("HomePage.subscriptionModal.right.preYear")
               t("AccountSettingsPage.perYear") 
            }}</span>
          </div>
        </div>
      </div>

      <!-- 订阅按钮 -->
      <div
        class="cursor-pointer rounded-3xl bg-mainColor-900 py-3 text-center font-medium text-white transition-colors duration-150 hover:bg-blue-600 hover:shadow-md sm:rounded-lg sm:py-2"
        v-loading="loading"
        @click="subscribe"
      >
        {{ t("HomePage.subscriptionModal.subscribe") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close, Select } from "@element-plus/icons-vue";
import { useSubscribeVersion } from "~/components/subscriptionUpgrade/useSubscribeVersion";
const { t } = useI18n();

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["close"]);

const selectedPlan = ref("yearly");
const features = reactive([
  {
    title: t("AccountSettingsPage.unlimitedTranscription"),
    description: t("AccountSettingsPage.unlimitedNumberOfTimes")
  },
  {
    title: t("AccountSettingsPage.uploadWithinHours"),
    description: t("AccountSettingsPage.filesUploadedAtOnce")
  },
  {
    title: t("AccountSettingsPage.highestPriority"),
    description: t("AccountSettingsPage.weWillGiveTheHighest")
  },
  { title: `99%${t("AccountSettingsPage.accuracy")}` },
  { title: `100+${t("AccountSettingsPage.supported")}` },
  { title: t("AccountSettingsPage.identification") },
  { title: t("AccountSettingsPage.transcriptSranslation") }
]);

// 方法
const selectPlan = (plan: string) => {
  selectedPlan.value = plan;
};

const { createSession, paymentGetUser } = useSubscribeVersion();
const loading = ref(false);
const subscribe = async () => {
  try {
    loading.value = true;
    const res = await createSession(selectedPlan.value);
    location.href = res;
  } finally {
    loading.value = false;
  }
};

const isFristSubscription = ref(false);

paymentGetUser().then((res) => {
  isFristSubscription.value = res;
});

const close = () => {
  emit("close");
};
</script>

<style scoped>
/* 淡入缩放动画 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* 模态框出现动画 */
@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-modal-appear {
  animation: modal-appear 0.1s ease forwards;
}

/* 为了确保 Tailwind 中没有的过渡效果 */
.transition-all {
  transition-property: all;
}

.select {
  @apply border-mainColor-900 bg-mainColor-900;
}
.select::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 0.625rem;
  top: 0;
  left: 0;
  @apply bg-mainColor-900 sm:w-[0.3125rem];
}

.disable {
  @apply cursor-not-allowed !opacity-60;
}
.bg {
  background: linear-gradient(179deg, #7ca0fa 0%, #3c73f0 100%);
  box-shadow: 0 0.125rem 1.25rem 0 rgba(52, 112, 255, 0.2);
}
</style>
