<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('HomePage.export.dialog.title')"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="30%"
    >
      <div>{{ t("HomePage.export.dialog.content") }}</div>
      <template #footer>
        <el-button class="mb-2" @click="handleCancel">
          {{ t("HomePage.export.dialog.cancel") }}
        </el-button>
        <el-button class="mb-2" @click="visible = false" type="primary">
          {{ t("HomePage.export.dialog.continue") }}
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

const emit = defineEmits(["update:modelValue", "close"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const handleCancel = async () => {
  emit("close");
};
</script>

<style scoped>
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  @apply w-[26.625rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  padding-bottom: 0.75rem;
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
.input {
  @apply h-[2.125rem] w-[18.125rem] rounded-lg border-borderColor;
}
:deep(.el-input__wrapper) {
  @apply !rounded-lg;
}
:deep(.el-button) {
  @apply !rounded-lg border-borderColor text-sm hover:bg-mainColor-300;
}
:deep(.el-button--primary) {
  @apply !rounded-lg border-mainColor-900 bg-mainColor-900 text-sm hover:bg-mainColor-900 hover:bg-opacity-90;
}
:deep(.el-button--danger) {
  @apply hover:bg-subColor-normal hover:bg-opacity-90;
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
