<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.rename.title')"
      width="30%"
      :close-on-click-modal="false"
      @open="handleOpen"
      @closed="handleClosed"
    >
      <el-input v-model="value" @input="handleInput" />
      <template #footer>
        <el-button class="home-btn" @click="visible = false">
          {{ t("FolderPage.dialog.rename.cancel") }}
        </el-button>
        <el-button
          class="home-btn"
          :loading="loading"
          :disabled="!value.trim()"
          type="primary"
          @click="handleConfirm"
        >
          {{ t("FolderPage.dialog.rename.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { type FileItem } from "~/api/type/folder";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  row: FileItem | null;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const value = ref("");
const handleOpen = () => {
  value.value = props.row?.fileName || "";
  window.addEventListener("keydown", handleKeyPress);
};
const handleClosed = () => {
  value.value = "";
  window.removeEventListener("keydown", handleKeyPress);
};

const loading = ref(false);
const handleConfirm = async () => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    const { renameFile } = useFolderApi;
    await renameFile({
      id: props.row!.fileId,
      fileName: value.value,
      taskId: props.row!.taskId
    });
    visible.value = false;
    emit("confirm", value.value);
  } catch (e) {
  } finally {
    loading.value = false;
  }
};

const handleInput = (val: string) => {
  // 过滤掉所有的 / 字符
  value.value = val.replace(/\//g, "").trim();
};

// 处理 Enter 按键
function handleKeyPress(e: any) {
  if (e.key === "Enter" && !loading.value && value.value) {
    handleConfirm();
  }
}
</script>

<style scoped>
@import "./common.css";
</style>
