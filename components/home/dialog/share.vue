<template>
  <div class="customer-dialog overflow-hidden">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      @open="handleOpen"
      @closed="handleClosed"
      :title="t('FolderPage.dialog.share.title')"
    >
      <div class="mb-2.5">
        {{ t("TranscriptionPage.shareTips") }}
      </div>
      <div
        class="flex p-4 sm:p-0 items-center  h-auto flex-col sm:flex-row sm:flex-nowrap sm:h-[2.125rem] w-full overflow-hidden rounded-lg border border-borderColor bg-boxBgColor "
      >
        <div class="flex-1 sm:truncate sm:px-4 sm:h-[2.125rem] sm:leading-[2.125rem] break-all mb-3 sm:mb-0 " :title="copyText">
          {{ copyText }}
        </div>
        <div
          v-if="hasCopy"
          class="flex sm:h-[1.625rem] items-center rounded-xl sm:rounded-lg justify-center bg-mainColor-600 py-2 px-7 sm:px-3 sm:py-2.5 me-1 text-mainColor-900"
        >
          <span class="iconfont icon-duihao me-2 text-xs"></span>
          <span> {{ t("TranscriptionPage.copiedLink") }}</span>
        </div>
        <div
          v-else
          class="flex sm:h-[1.625rem] items-center rounded-xl sm:rounded-lg justify-center bg-subColor-light py-2 px-7 sm:px-3 sm:py-2.5 me-1 text-subColor-normal"
        >
          <span class="iconfont icon-shanchu me-2 text-xs"></span>
          <span> {{ t("TranscriptionPage.copyFail") }}</span>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-center">
          <el-button class="customer-button !h-[2.75rem] !w-[16.25rem] !rounded-3xl sm:!rounded-lg sm:!w-72 sm:!h-8 home-btn" @click="handleConfirm" type="primary">
            {{ t("TranscriptionPage.copyGotIt") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Msg } from "~/utils/tools";
import { useLocalePath, useUserStore } from "#imports";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  row: Record<any, any> | null;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const localePath = useLocalePath();

const { userInfo } = storeToRefs(useUserStore());
const requestURL = useRequestURL();
const copyText = ref("");
const baseUrl = `${requestURL.protocol}//${requestURL.host}`;
const hasCopy = ref(false);
const handleCopy = async () => {
  copyText.value =
    baseUrl +
    localePath(
      `/transcript/${props.row?.fileId}?shareId=${userInfo.value?.userInfoVO?.userid}&shareName=${encodeURI(userInfo.value?.userInfoVO?.email || "Scribify")}&taskId=${props.row?.taskId}`
    );

  const { copy } = useClipboard({
    source: copyText.value
  });
  await copy();
  hasCopy.value = true;
};

function handleKeyPress(e: any) {
  if (e.key === "Enter") {
    handleConfirm();
  }
}

const handleOpen = () => {
  window.addEventListener("keydown", handleKeyPress);
  handleCopy();
};

const handleClosed = () => {
  window.addEventListener("keydown", handleKeyPress);
};

const handleConfirm = async () => {
  visible.value = false;
};
</script>

<style scoped>
@import "./common.css";
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  max-width: 29rem;
  @apply !rounded-lg p-5 sm:w-[29rem];
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}
:deep(.el-button) {
  width: 60%;
}
</style>
