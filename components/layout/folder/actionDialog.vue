<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="dialogTitle"
      :append-to-body="false"
      :close-on-click-modal="false"
      @closed="handleClosed"
      @open="handleOpen"
    >
      <template v-if="type === 'delete'">
        <p>{{ t("HomePage.deleteConfirm") }}</p>
      </template>
      <template v-else>
        <el-input
          v-model="inputValue"
          :placeholder="t('HomePage.dialogLabel')"
        />
      </template>

      <template #footer>
        <el-button class="home-btn" @click="visible = false">
          {{ t("HomePage.cancel") }}
        </el-button>
        <el-button
          class="home-btn"
          v-if="type === 'delete'"
          type="danger"
          :loading="loading"
          @click="handleConfirm"
        >
          {{ t("HomePage.delete") }}
        </el-button>
        <el-button
          class="home-btn"
          v-else-if="type === 'rename'"
          :loading="loading"
          :disabled="!inputValue"
          type="primary"
          @click="handleConfirm"
        >
          {{ t("HomePage.rename") }}
        </el-button>
        <el-button
          v-else
          class="home-btn"
          :loading="loading"
          :disabled="!inputValue"
          type="primary"
          @click="handleConfirm"
        >
          {{ t("HomePage.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Folder } from "~/api/type/folder";
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  type: "delete" | "rename" | "create";
  folder: Folder | null;
  loading: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const inputValue = ref<string>("");

const dialogTitle = computed(() => {
  const titles = {
    delete: t("HomePage.delete"),
    rename: t("HomePage.rename"),
    create: t("HomePage.createTitle")
  };
  return titles[props.type];
});

const handleClosed = () => {
  isOver.value = false;
  inputValue.value = "";
  window.removeEventListener("keydown", handleKeyPress);
};

const isOver = ref(false);
const handleConfirm = () => {
  if (isOver.value) {
    return;
  }
  emit("confirm", inputValue.value);
};

function handleKeyPress(e: any) {
  if (e.key === "Enter" && !props.loading && inputValue.value) {
    handleConfirm();
  }
}

const handleOpen = () => {
  inputValue.value = props.folder?.folderName || "";
  if (props.type !== "delete") {
    window.addEventListener("keydown", handleKeyPress);
  }
};

defineExpose({
  isOver
});
</script>

<style scoped>
@import "~/layouts/homeMixin.css";
:deep(.customer-dialog) {
}
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  max-width: 20.625rem;
  @apply !rounded-lg p-5 sm:w-[20.625rem];
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
  @apply h-[2.125rem] w-60 rounded-lg border-borderColor;
}
:deep(.el-input__wrapper) {
  @apply !rounded-lg;
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
