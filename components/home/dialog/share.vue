<template>
  <div class="customer-dialog overflow-hidden">
    <el-dialog
      v-model="visible"
      @closed="handleClosed"
      :title="t('FolderPage.dialog.share.title')"
    >
      <div class="mb-2.5">
        {{ t("FolderPage.dialog.share.label") }}
      </div>
      <div
        :title="copyText"
        class="h-[2.125rem] w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-boxBgColor px-4 leading-[2.125rem]"
      >
        {{ copyText }}
      </div>
      <template #footer>
        <div class="flex justify-center">
          <el-button @click="handleConfirm" type="primary">
            {{ t("FolderPage.dialog.share.confirm") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
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
const path = ref("");
watchEffect(() => {
  path.value = localePath(
    `/transcript/${props.row?.fileId}?shareId=${userInfo.value?.userInfoVO?.userid}&shareName=${encodeURI(userInfo.value?.userInfoVO?.email || "")}&taskId=${props.row?.taskId}`
  );
  copyText.value = baseUrl + path.value;
});

const handleClosed = () => {
  path.value = "";
};

const handleConfirm = async () => {
  const { copy } = useClipboard({
    source: copyText.value
  });
  await copy();
  ElMessage.success({
    message: t("FolderPage.dialog.share.success"),
    customClass: "!z-[9999]"
  });
  emit("confirm");
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
