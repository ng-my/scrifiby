<template>
  <top-left-layout v-show="isShowPage">
    <div
      :class="isMounted && !isGuest ? 'sm:overflow-y-hidden' : ''"
      class="flex min-w-0 flex-1 flex-col overflow-y-auto bg-white p-4 sm:p-3 lg:p-5"
    >
      <client-only>
        <div class="flex flex-col items-center sm:mb-3.5 sm:flex-row">
          <div
            id="link"
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
          <div class="button small-button" @click="beforeOpenLinkDialog">
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
      </client-only>

      <!--      <div class="mb-1 flex items-center justify-between">-->
      <!--        <span class="text-sm font-medium text-gray-900">{{-->
      <!--          t("HomePage.recently")-->
      <!--        }}</span>-->
      <!--      </div>-->

      <client-only>
        <home-transcribe-list
          :headerName="isMobile && showSearch ? '' : t('HomePage.recently')"
          :search="search"
          :inline="isMobile"
        >
          <template #header-right="slotProps">
            <div class="flex flex-1 justify-end" v-if="!isMobile">
              <home-search v-model="search" />
            </div>
            <div
              v-else
              class="flex flex-1 justify-end"
              v-show="!slotProps.isSelect"
            >
              <span
                v-show="!showSearch"
                @click="showSearch = true"
                class="iconfont icon-chazhao mt-1 flex-shrink-0 text-fontColor"
              ></span>
              <div
                v-show="showSearch"
                class="sm:auto mb-0.5 flex w-full items-center justify-end lg:mb-0"
              >
                <home-search v-model="search" />
                <span
                  @click="searchCancel"
                  class="ms-2 flex-shrink-0 cursor-pointer text-sm font-medium"
                  >{{ t("FileUploadAndRecording.upload.link.cancel") }}</span
                >
              </div>
            </div>
          </template>
        </home-transcribe-list>
      </client-only>
      <client-only>
        <div v-if="isGuest" class="flex w-full justify-center pt-[2rem]">
          <div
            style="box-shadow: 0 0.125rem 1.25rem #3470ff33"
            class="user-signup min-h-[37rem] w-[38.375rem] rounded-[0.5rem] border px-4 pb-[0rem] pt-6 sm:px-[4rem] sm:pt-[4rem]"
          >
            <user-signup
              comTitle="signupToSaveProgress"
              :isLogin="false"
              :isSignupDes="false"
              source="home"
            />
          </div>
        </div>
      </client-only>

      <client-only>
        <el-tour
          v-if="userInfo?.beginnersTutorial"
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
            :placement="isMobile ? 'top' : 'bottom'"
            target=".el-table-v2__row .content-file-name"
          >
            <home-tour-setp />
          </el-tour-step>
        </el-tour>
      </client-only>

      <!--  首次进入  -->
      <client-only>
        <home-welcome @update:beginnersTutorial="handlePageShow" />
      </client-only>
    </div>
  </top-left-layout>

  <client-only>
    <!--  文件上传  -->
    <upload />
  </client-only>
</template>

<script setup lang="ts">
import TopLeftLayout from "~/layouts/topLeftLayout.vue";
import { useUserStore } from "~/stores/useUserStore";
import Utils, { Msg } from "~/utils/tools";
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

const beforeStartRecord = async () => {
  try {
    await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    startRecord();
  } catch (e) {
    Msg({
      message: t("FileUploadAndRecording.record.permissionDenied"),
      type: "error"
    });
  }
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
    subscriptionStore.getStatusUserIdFetch();
  }
});

const isMobile = useState("isMobile");

watchEffect(async () => {
  if (step.value === 3 && isMobile.value) {
    await nextTick();
    const element = document.querySelector(".el-tour__arrow") as any;
    if (element) {
      element.classList.add("custom-arrow-style");
    }
  }
});

const isGuest = computed(() => {
  return userInfo.value?.userid && !userInfo.value?.email;
});

const showSearch = ref(false);
const searchCancel = () => {
  showSearch.value = false;
  search.value = "";
};

const isShowPage = ref(false);
setTimeout(() => {
  isShowPage.value = true;
}, 10000)
const handlePageShow = (data: any) => {
  isShowPage.value = data;
};

onMounted(() => {
  if (Utils.isMobile()){
    document.body.style.width = "auto";
  }
})
onUnmounted(() => {
  isShowPage.value = false;

  if (Utils.isMobile()){
    document.body.style.width = "";
  }
});
</script>

<style scoped>
@import "~/layouts/homeMixin.css";

.small-button {
  @apply mb-2.5 flex h-16 w-full min-w-[21.5rem] cursor-pointer items-center justify-between rounded-[0.3125rem] border border-[#CCCCCC] pe-[1em] ps-[3.875rem] transition-all;
}

.button {
  @apply pb-0 sm:mb-0 sm:me-2 sm:h-[5.75rem] sm:w-[15.25rem] sm:min-w-0 sm:flex-col sm:items-start sm:justify-center sm:rounded-[0.625rem] sm:pe-1 sm:ps-6 sm:last:mb-0 sm:last:me-0 md:me-3 lg:ps-7;
}

.button:hover {
  border: 1px solid #ded5fd;
  box-shadow: 0 1px 0.125rem 0 rgba(0, 0, 0, 0.1);
}

.small-button div:last-child {
  @apply ms-[4.1875rem] mt-0 flex-1 sm:ms-0 sm:mt-2.5 sm:flex-none;
}

.disable {
  @apply cursor-not-allowed bg-boxBgColor text-fontColor;
}

:deep(.input) {
  @apply w-full max-w-full sm:max-w-60;
}

.user-signup {
  max-width: calc(100vw - 20px);
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
