<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.rename.title')"
      width="30%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @open="handleOpen"
      @closed="handleClosed"
    >
      <el-input v-model="value" />
      <template #footer>
        <el-button @click="visible = false">
          {{ t("FolderPage.dialog.rename.cancel") }}
        </el-button>
        <el-button
          :loading="loading"
          :disabled="!value"
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
};
const handleClosed = () => {
  value.value = "";
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
</script>

<style scoped>
@import "./common.css";
</style>
