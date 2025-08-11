<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      title="Tip"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="30%"
    >
      <div class="text-black">
        The feature is under development. Stay tuned!
      </div>
      <template #footer>
        <el-button @click="visible = false" type="primary"> Got It </el-button>
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
:deep(.el-dialog) {
  --el-color-primary: #3470ff;
  width: 23rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
  @apply rounded-lg p-5;
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
  @apply mt-11 flex items-center justify-center pt-0;
}
:deep(.el-button) {
  --el-button-text-color: #fff;
  --el-button-bg-color: #3470ff;
  --el-button-border-color: #3470ff;
  --el-button-hover-bg-color: #3470ff;
  --el-button-hover-text-color: #fff;
  --el-button-hover-border-color: #3470ff;
  &:hover {
    opacity: 0.8;
  }
  @apply w-48 rounded-lg;
}
</style>
