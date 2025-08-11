<template>
  <div class="customer-dialog">
    <el-dialog
      :before-close="handleClose"
      @open="handleOpen"
      v-model="visible"
      :title="t('IdentityInfoManage.resetPassword')"
    >
      <div class="flex h-[7rem] w-full items-center justify-center">
        {{ t("IdentityInfoManage.passwordResetOk") }}
      </div>
      <template #footer>
        <div class="flex justify-center">
          <el-button @click="handleConfirm" type="primary">
            {{ t("HomePage.tour.finish") }}
          </el-button>
        </div>
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

function handleKeyPress(e: any) {
  if (e.key === "Enter") {
    handleConfirm()
  }
}

const handleConfirm = async () => {
  emit("confirm");
};

const handleOpen = async () => {
  window.addEventListener("keypress", handleKeyPress);
};
const handleClose = (done: () => void) => {
  done();
  window.removeEventListener("keypress", handleKeyPress);
  setTimeout(() => {
    handleConfirm();
  }, 300);
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

:deep(.el-dialog) {
  @apply w-[29rem] !rounded-lg p-5;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}

:deep(.el-button) {
  width: 60%;
}
</style>
