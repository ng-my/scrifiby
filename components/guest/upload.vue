<template>
  <div class="upload w-full text-white">
    <div class="title flex w-full justify-center">Transcribe</div>
    <div class="mb-4 flex w-full justify-between">
      <span class="text-lg">{{tableData.length ?  'File' : 'Audio / Video File'}}</span>
      <div class="flex" v-show="!tableData.length">
        <img
          @click="openRecord"
          class="mr-1.5 h-auto w-[3rem] cursor-pointer"
          src="/assets/images/index_black/record.svg"
          alt=""
        />
        <img
          @click="showLinkDialog = true"
          class="h-auto w-[3rem] cursor-pointer"
          src="/assets/images/index_black/url.svg"
          alt=""
        />
      </div>
    </div>
    <div
      class="flex min-h-16 w-full items-center justify-between rounded-lg border border-[#6A36A2] px-2 text-base sm:px-5"
      v-if="tableData.length > 0"
      v-for="(item, index) in tableData"
      :key="item.id"
    >
      <div class="flex flex-1 flex-wrap items-center justify-between">
        <div class="flex flex-1 items-center">
          <div
            data-no-detection="true"
            x-ms-format-detection="none"
            format-detection="telephone=no,date=no,address=no,email=no"
            class="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-96"
          >
            {{ item.name }}
          </div>
          <span class="mx-1">|</span>
          <span class="flex-shrink-0">{{ item.detailSize }}</span>
        </div>

        <div class="flex w-44 items-center justify-start md:justify-end">
          <div
            v-if="item.status === 'success'"
            class="me-4 flex h-4 items-center justify-center text-thirdColor"
          >
            <span class="iconfont icon-duihao text-xs text-thirdColor"></span>
          </div>
          <div v-else-if="item.status === 'error'">
            <span
              class="iconfont icon-shanchu me-3.5 text-xs text-subColor-normal"
            ></span>
            <span>{{ item.errorText }}</span>
          </div>
          <div class="w-full text-start" v-else-if="item.uploadText">
            <span>{{ item.uploadText }}</span>
          </div>
          <el-progress
            :stroke-width="8"
            class="flex-1"
            v-else
            striped
            striped-flow
            :percentage="item.progress || 0"
          />
        </div>
      </div>

      <img
        @click="handleRemove(item, index)"
        class="ms-1 cursor-pointer"
        src="/assets/images/index_black/del.svg"
        alt=""
      />
    </div>
    <div v-else>
      <upload-file local="en-US" useUploadValidate />
    </div>

    <div class="mt-5">
      <lang-choose-input
        :popperStyle="{
          borderColor: '#35205A',
          borderRadius: '0.5rem',
          backgroundColor: '#0e172b'
        }"
        customer-class="lang-choose-input-20250711-website"
        title="Media Language"
        v-model:lang="lang"
      />
    </div>

    <div class="mt-4 text-lg">
      <div class="mb-0.5">
        {{ t("FileUploadAndRecording.upload.speaker") }}
      </div>
      <client-only>
        <el-checkbox v-model="diarizeEnabled">
          <span class="max-w-full whitespace-normal break-words text-sm">{{
            t("FileUploadAndRecording.upload.speakerLabel")
          }}</span>
        </el-checkbox>
      </client-only>
    </div>

    <el-button
      class="button mt-[3.125rem] w-full"
      type="primary"
      @click="handleTranscribe"
      :disabled="disabled"
      :loading="transcribing"
    >
      <span class="iconfont icon-bianji me-2.5"></span>
      Transcribe
    </el-button>
  </div>
  <upload-dialog-link
    v-model="showLinkDialog"
    isGuest
    :linkLoading="linkLoading"
    @confirm="handleLinkConfirm"
    @open="handleOpenDialog"
    @close="handleCloseDialog"
  />
  <div class="customer-dialog">
    <el-dialog
      v-model="showRecordDialog"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      destroy-on-close
      :show-close="false"
      @open="handleOpenDialog"
      @close="handleCloseDialog"
    >
      <div class="flex w-full justify-center">
        <record justRecord @record="handleRecord" />
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { type UploadFile, useUpload } from "~/components/upload/useUpload";
import { useSubscript } from "~/components/layout/header/useSubscript";
import { useVisitor } from "~/hooks/useVisitor";
import { useLink } from "~/components/upload/dialog/useLink";
import { message } from "~/i18n/lang/en-US";
import { useGuestUserStore } from "~/stores/useUserStore";
import { Msg, isMobile } from "~/utils/tools";

const { t, locale, setLocaleMessage } = useI18n();
// todo 删除
setLocaleMessage(locale.value, message);

const { selectRawFiles } = storeToRefs(useUploadStore());
const { clearSelectRawFiles } = useUploadStore();

const showLinkDialog = ref(false);
const showRecordDialog = ref(false);
const tableData = ref<UploadFile[]>([]);
const { initUpload, removeFile, createFileObject } = useUpload();
const { setTmpUserInfo } = useGuestUserStore();
const { userInfo } = storeToRefs(useUserStore());
const { getVisitorId, visitorId } = useVisitor();
const handleRecord = (item: any) => {
  showRecordDialog.value = false;
  tableData.value = [
    createFileObject(
      new File([item.audioBlob!], item.recordTitle, {
        type: "audio/webm", // 根据实际格式调整（如 'audio/mp3'）
        lastModified: Date.now() // 可选：设置最后修改时间
      })
    )
  ];
};
watchEffect(async () => {
  if (!tableData.value.length) {
    tableData.value = selectRawFiles.value.map((file) =>
      createFileObject(reactive(file))
    );
  }
});

const guestLogin = async () => {
  const token = useCookie("token");
  if (!token.value) {
    if (!visitorId.value) await getVisitorId();
    const { userApi } = await import("~/api/user");
    const res = await userApi.guestLogin({
      visitorClientId: visitorId.value
    });
    setTmpUserInfo({
      token: res.token,
      userInfoVO: {
        ...res
      }
    });
    const userInfoCookie = useCookie("userInfo");
    userInfoCookie.value = JSON.stringify({
      token: res.token,
      userInfoVO: {
        ...res
      }
    });
    userInfo.value = { token: res.token };
    const token = useCookie("token");
    token.value = res.token;
  }
};

const { handleConfirm, link } = useLink();
const linkLoading = ref(false);
const handleLinkConfirm = async (linkData: string) => {
  try {
    linkLoading.value = true;
    await guestLogin();
    link.value = linkData;
    await handleConfirm();
    showLinkDialog.value = false;
  } finally {
    linkLoading.value = false;
  }
};

watch(
  () => tableData.value,
  async () => {
    if (tableData.value.length) {
      await guestLogin();
    }

    for (const file of tableData.value) {
      if (file.status !== "pending") break;
      initUpload(reactive(file));
    }
  }
);

const { fetchSubscript } = useSubscript();
const { isNoTimes } = storeToRefs(useSubscriptionStore());

const handleRemove = async (row: UploadFile, index: number) => {
  row.__isDelIng = true;
  selectRawFiles.value.splice(index, 1);
  await removeFile(row, tableData);
};

const transcribing = ref(false);
const lang = ref<any>({});

const router = useRouter();
const localePath = useLocalePath();

const diarizeEnabled = ref(true);
const getFileNameWithoutExt = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex === -1 ? fileName : fileName.substring(0, lastDotIndex);
};
const handleJumpHome = () => {
  if (isNoTimes.value) {
    localStorage.setItem("noTimes", "1");
  }
  router.push(localePath("/home"));
};
const handleTranscribe = async () => {
  if (disabled.value) return;
  if (transcribing.value) return;
  transcribing.value = true;
  await guestLogin();
  await fetchSubscript();
  if (isNoTimes.value) {
    handleJumpHome();
    return;
  }
  try {
    const { useFolderApi } = await import("~/api/folder");
    const { transcribeFile, saveFileInfo } = useFolderApi;
    const fileInfo = await saveFileInfo(
      JSON.stringify(
        tableData.value
          .filter((file) => !(file.file as any)?.localFileId)
          .map((file) => {
            const fileExtName = file.name.split(".").pop();
            return {
              bucketId: file.key,
              fileExtName: fileExtName,
              parentId: 0,
              fileName: getFileNameWithoutExt(file.name),
              fileSize: file.size
            };
          })
      )
    );

    const fileIds = fileInfo.map((file: any) => file.fileId);
    const localFileIds = tableData.value
      .filter((file) => (file.file as any)?.localFileId)
      .map((file) => (file.file as any)?.localFileId);
    fileIds.push(...localFileIds);

    await transcribeFile({
      language: lang.value.transCode,
      langName: lang.value.lang,
      fileIds,
      diarizeEnabled: diarizeEnabled.value
    });
    handleJumpHome();
  } catch (e: any) {
    if (e?.code === 15010) {
      handleJumpHome();
    }
  } finally {
    transcribing.value = false;
  }
};

const disabled = computed(() => {
  return (
    !tableData.value.length ||
    tableData.value.some((file) => file.status !== "success") ||
    !lang.value.lang
  );
});

const openRecord = async () => {
  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true
    });
    audioStream.getTracks().forEach((track) => track.stop());
    showRecordDialog.value = true;
  } catch (e) {
    Msg({
      message: t("FileUploadAndRecording.record.permissionDenied"),
      type: "error"
    });
  }
};

onUnmounted(() => {
  clearSelectRawFiles();
});

const handleOpenDialog = () => {
  if (isMobile()) {
    document.body.style.width = "auto";
  }
};
const handleCloseDialog = () => {
  if (isMobile()) {
    document.body.style.width = "";
  }
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur()
  }
};
</script>

<style lang="scss" scoped>
.upload {
  max-width: 48.75rem; // 780px ÷ 16
  max-height: 37.875rem; // 606px ÷ 16
  background: #1a0a2e;
  box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1); // 2px, 18px
  border-radius: 0.5rem; // 8px ÷ 16
  border: 0.0625rem solid #6a36a2; // 1px ÷ 16
  @apply p-4 sm:p-[2.1875rem] sm:pt-[1.875rem];

  .title {
    height: 1.875rem; // 30px ÷ 16
    font-size: 1.375rem; // 22px ÷ 16
    margin-bottom: 1.5rem; // 24px ÷ 16
  }

  :deep(.upload-file) {
    .icon-shangchuan {
      color: #e979fa;
      margin-bottom: 1.25rem; // 20px ÷ 16
      font-size: 1.375rem; // 22px ÷ 16
    }

    .tip {
      color: white;
      margin-bottom: 0.3125rem; // 5px ÷ 16
      font-size: 1.125rem; // 18px ÷ 16
    }

    .type {
      color: #aca6b3;
      font-weight: 400;
      height: 1.25rem; // 20px ÷ 16
      font-size: 0.875rem; // 14px ÷ 16
    }

    .el-upload-dragger {
      max-width: 44.375rem; // 710px ÷ 16
      height: 11rem; // 176px ÷ 16
      background: #1a0a2e;
      box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1); // 2px, 18px
      border-radius: 0.5rem; // 8px ÷ 16
      border: 0.0625rem dashed #6a36a2; // 1px ÷ 16
      @apply pb-2 pt-8 sm:pb-0 sm:pt-10;
    }
  }
}

:deep(.home-btn.el-button) {
  @apply h-[2.75rem] max-w-[11.75rem] md:!h-[2.75rem] md:!w-[11.75rem];
  border-radius: 0.625rem; // 10px ÷ 16
  border-color: #6a36a2 !important;
  background: #301453 !important;
  color: white !important;
  font-size: 1.125rem;

  &:hover {
    border-color: #6a36a2 !important;
    background: #301453 !important;
    color: white !important;
  }
}

:deep(.home-btn.el-button--primary) {
  background: linear-gradient(142deg, #be26d4 0%, #9332ea 100%) !important;
  border-color: transparent !important;

  &:hover {
    background: linear-gradient(142deg, #be26d4 0%, #9332ea 100%) !important;
    border-color: transparent !important;
  }
}

:deep(.el-select__wrapper) {
  @apply w-72;
  color: white;
}

:deep(.el-input),
:deep(.el-textarea) {
  color: white;
  --el-input-text-color: #fff;
  --el-input-border: var(--el-border);
  --el-input-hover-border: #6a36a2;
  --el-input-focus-border: #6a36a2;
  --el-input-transparent-border: 0 0 0 0.0625rem transparent inset; // 1px ÷ 16
  --el-input-border-color: #6a36a2;
  --el-input-border-radius: var(--el-border-radius-base);
  --el-input-bg-color: #150924;
  --el-input-icon-color: var(--el-text-color-placeholder);
  --el-input-placeholder-color: #fff;
  --el-input-hover-border-color: #6a36a2;
  --el-input-clear-hover-color: #6a36a2;
  --el-input-focus-border-color: #6a36a2;

  ::placeholder {
    color: #969aa2;
  }
}

:deep(.el-textarea__inner) {
  height: 124px;
}

.button {
  background: linear-gradient(142deg, #be26d4 0%, #9332ea 100%) !important;
  height: 2.75rem !important; // 44px ÷ 16
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem; // 10px ÷ 16
  width: 100% !important;
  cursor: pointer;
  overflow: hidden;
  max-width: unset !important;
  border-color: transparent !important;
}

:deep(.lang-title) {
  @apply text-lg;
}

.button-disabled {
  @apply bg-opacity-80;
  cursor: not-allowed;
}

:deep(.el-progress-bar__outer) {
  @apply bg-boxBgColor;
}

:deep(.el-progress-bar__inner) {
  @apply bg-mainColor-900;
}

:deep(.el-progress__text) {
  @apply me-3 !text-sm text-white;
}

:deep(.el-checkbox__label) {
  color: #fff !important;
}

:deep(.record) {
  position: unset !important;
  top: unset !important;
  left: unset !important;
  margin-bottom: 1.25rem;

  .record-content {
    max-width: calc(100vw - 40px);
  }
}

:deep(.el-checkbox) {
  align-items: flex-start;
}

:deep(.el-checkbox__input) {
  margin-top: 0.1875rem; // 3px ÷ 16
}

:deep(.el-checkbox__inner) {
  background: #150924;
  border-color: #9334eb;
}

:deep(.is-checked .el-checkbox__inner) {
  background: #9334eb;
  border-color: #9334eb;
}

:deep(.customer-dialog) {
}

:deep(.el-dialog) {
  @apply p-5 sm:w-[34rem];
  border-radius: 0.5rem; // 8px ÷ 16
  background: #301453;
  color: white;
  border: 1px solid #6a36a2;
  width: calc(100% - 2rem);
  max-width: 46.25rem; // 740px ÷ 16
  box-shadow: 0 0.125rem 1.125rem 0 rgba(60, 115, 240, 0.1);

  .complete-content {
    color: white;
  }
}

:deep(.el-dialog__header) {
  @apply mb-5 p-0 text-base font-medium !text-white;

  .el-dialog__title {
    @apply text-[1.25rem] text-white sm:text-[1.375rem];
  }
}

:deep(.el-dialog__headerbtn) {
  height: 4.125rem; // 66px ÷ 16
  .el-icon {
    font-size: 1.5rem; // 24px ÷ 16
    color: white !important;
  }
}

:deep(.link-label) {
  font-size: 1.125rem; // 18px ÷ 16
  margin-bottom: 1.25rem; // 20px ÷ 16
  line-height: 1.5625rem; // 25px ÷ 16
  color: white !important;
}

:deep(.el-dialog__footer) {
  @apply mt-10 pt-0;
}
</style>
<style>
.lang-choose-input-20250711-website {
  background: #0e172b;
  color: #fff;
  border-color: #0e172b;
  border-radius: 0.5rem;

  .lang-item-wrap {
    div:hover {
      background: #1a2742;
    }
  }

  .el-input__wrapper {
    background: #1a2742;
    border-color: #6a36a2;
    color: white;
  }

  .el-input__inner {
    color: white;
  }

  .el-input__prefix-inner {
    .el-icon {
      color: white !important;
    }
  }

  .bg-boxBgColor {
    background: #1a2742;
  }
}
</style>
