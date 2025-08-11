<template>
  <top-left-layout>
    <div
      class="flex min-w-0 flex-1 flex-col overflow-y-auto bg-white p-4 sm:overflow-y-hidden sm:p-3 lg:p-5"
    >
      <div class="flex flex-col items-center sm:mb-3.5 sm:flex-row">
        <div
          class="index-upload button small-button"
          @click="beforeOpenFileDialog"
        >
          <div class="w-[1.875rem] text-end">
            <img
              class="h-auto w-[1.8125rem]"
              src="/assets/images/home/upload.svg"
            />
          </div>
          <div class="mt-2.5">{{ t("FolderPage.buttons.transcribe") }}</div>
        </div>
        <div
          id="link"
          class="button small-button"
          @click="beforeOpenLinkDialog"
        >
          <div class="w-[1.875rem] text-end">
            <img
              class="h-auto w-[1.5625rem]"
              src="/assets/images/home/link.svg"
            />
          </div>
          <div class="mt-2.5">{{ t("FolderPage.buttons.url") }}</div>
        </div>
        <div
          class="button small-button"
          :class="{ disable: recordStatus === 1 }"
          @click="beforeStartRecord"
        >
          <div class="w-[1.875rem] text-end">
            <img
              class="h-auto w-[1.6875rem]"
              src="/assets/images/home/record.svg"
            />
          </div>
          <div class="mt-2.5">
            {{
              recordStatus === 1
                ? t("FolderPage.buttons.recording")
                : t("FolderPage.buttons.record")
            }}
          </div>
        </div>
      </div>

      <!--      <div class="mb-1 flex items-center justify-between">-->
      <!--        <span class="text-sm font-medium text-gray-900">{{-->
      <!--          t("HomePage.recently")-->
      <!--        }}</span>-->
      <!--      </div>-->

      <home-transcribe-list
        :headerName="t('HomePage.recently')"
        :search="search"
      >
        <template #header-right>
          <div class="mb-0.5 flex justify-end lg:mb-0">
            <home-search v-model="search" />
          </div>
        </template>
      </home-transcribe-list>

      <client-only>
        <el-tour
          :gap="{ offset: 3, radius: 2 }"
          :close-on-press-escape="false"
          :target-area-clickable="false"
          v-model="show"
          :z-index="4001"
          :show-close="false"
          :mask="true"
          placement="bottom-start"
        >
          <el-tour-step v-if="step === 1" target="#link">
            <home-tour-setp />
          </el-tour-step>
          <el-tour-step v-if="step === 2" target="#step2"
            ><home-tour-setp
          /></el-tour-step>
          <el-tour-step
            :scroll-into-view-options="false"
            v-else-if="step === 3"
            :placement="isMobile ? 'top-start' : 'bottom'"
            target=".el-table-v2__row"
          >
            <home-tour-setp />
          </el-tour-step>
        </el-tour>
      </client-only>

      <!--  首次进入  -->
      <client-only>
        <home-welcome />
      </client-only>
    </div>
  </top-left-layout>
</template>

<script setup lang="ts">
import TopLeftLayout from "~/layouts/topLeftLayout.vue";
import { useUserStore } from "~/stores/useUserStore";
import Utils from "~/utils/tools";
import { useTouch } from "~/utils/useTouch";
const userStore = useUserStore();
definePageMeta({
  requireAuth: true
});
const { t } = useI18n();
const route = useRoute();
const { recordStatus } = storeToRefs(useRecordStore());
const { startRecord } = useRecordStore();
const { openFileDialog, openLinkDialog } = useUploadStore();
const { step } = storeToRefs(useTourStore());
step.value = null;

const beforeStartRecord = () => {
  startRecord();
};

const beforeOpenLinkDialog = () => {
  if (step.value === 1) return;
  openLinkDialog();
};

const beforeOpenFileDialog = () => {
  openFileDialog();
};

const search = ref("");

const show = ref(false);
watchEffect(() => {
  show.value = [1, 2, 3].includes(step.value!);
});
const userInfo: any = computed(() => {
  return typeof userStore.userInfo === "object" && userStore.userInfo !== null
    ? (userStore.userInfo as any).userInfoVO
    : {};
});
const isMounted = ref(false);
onMounted(async () => {
  isMounted.value = true;
  const type = route.query.type;
  if (typeof type === "string" && type && type === "success") {
    const subscriptionStore = useSubscriptionStore();
    subscriptionStore.getStatusUserId();
  }
});

const isMobile = ref(false);
onMounted(() => {
  isMobile.value = Utils.isMobile();
});

watchEffect(async () => {
  if (step.value === 3 && isMobile.value) {
    await nextTick();
    const element = document.querySelector(".el-tour__arrow") as any;
    if (element) {
      element.classList.add("custom-arrow-style");
    }
  }
});
</script>

<style scoped>
.small-button {
  @apply mb-2.5 flex h-16 w-full min-w-[21.5rem] cursor-pointer items-center justify-between rounded-[0.3125rem] border border-[#CCCCCC] pe-[1em] ps-[3.875rem] transition-all;
}

.button {
  @apply pb-0 sm:mb-0 sm:me-2 sm:h-[5.75rem] sm:w-[15.25rem] sm:min-w-0 sm:flex-col sm:items-start sm:justify-center sm:rounded-[0.625rem] sm:pe-1 sm:ps-6 sm:last:mb-0 sm:last:me-0 md:me-3 lg:ps-7;
}

.button:hover {
  box-shadow: 0 0.125rem 0.5625rem 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #dbe6ff;
}

.small-button div:last-child {
  @apply ms-[4.1875rem] mt-0 flex-1 sm:ms-0 sm:mt-2.5 sm:flex-none;
}

.disable {
  @apply cursor-not-allowed bg-boxBgColor text-fontColor;
}
</style>
<style>
.el-tour__footer {
  display: none;
}

.el-tour__header {
  display: none;
}

.el-tour {
  position: relative;
}

.el-tour .el-tour__content {
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 1.25rem;
  border-radius: 0.625rem;
  @apply max-w-[22.6875rem];
}

.el-tour__arrow {
  background: rgba(0, 0, 0, 0.85);
}

.el-tour__hollow {
  fill: transparent !important;
}

.el-tour__arrow {
  top: -0.5rem !important;
  background: transparent;
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  box-sizing: border-box;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  transform: rotate(0deg);
  border-bottom: 0.5rem solid rgba(0, 0, 0, 0.85) !important;
  /* Black with 0.85 opacity */
}
.custom-arrow-style {
  border-bottom: unset !important;
  border-top: 0.5rem solid rgba(0, 0, 0, 0.85) !important;
  bottom: -0.5rem !important;
  top: unset !important;
}
</style>
