<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      :title="t('FileUploadAndRecording.record.dialog.complete.title')"
    >
      <div>{{ t("FileUploadAndRecording.record.dialog.complete.label") }}</div>
      <template #footer>
        <el-button @click="handleConfirm" type="primary">
          {{ t("FileUploadAndRecording.record.dialog.complete.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const handleConfirm = () => {
  visible.value = false;
  emit("confirm");
};
</script>

<style scoped>
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  @apply w-[20.625rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}
:deep(.el-dialog__header) {
  @apply mb-5 p-0 text-base font-medium;
}
:deep(.el-dialog__headerbtn) {
  height: 4.125rem;
}
:deep(.el-dialog__headerbtn .el-dialog__close) {
  @apply text-black;
}
:deep(.el-dialog__footer) {
  @apply mt-11 pt-0;
}
:deep(.el-button) {
  @apply !rounded-lg;
}
:deep(.el-button + .el-button) {
  @apply !ms-3;
}
:deep(.el-dialog__headerbtn) {
  @apply rtl:left-0 rtl:right-auto;
}
</style>
