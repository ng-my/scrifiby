<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.delete.title')"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="30%"
    >
      <div>
        {{ t("FolderPage.dialog.delete.label") }}
      </div>
      <template #footer>
        <el-button @click="visible = false">
          {{ t("FolderPage.dialog.move.cancel") }}
        </el-button>
        <el-button :loading="loading" @click="handleConfirm" type="danger">
          {{ t("FolderPage.dialog.delete.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { FileItem } from "~/api/type/folder";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  selectIds: string[];
  tableData: FileItem[];
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const loading = ref(false);
const handleConfirm = async () => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    const { deleteFile } = useFolderApi;
    const taskIds = props.selectIds.map((id) => {
      const item = props.tableData.find((item) => item.id === id);
      return item!.taskId;
    });
    await deleteFile({
      taskIds
    });
    visible.value = false;
    emit("confirm");
  } catch (e) {
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@import "./common.css";
</style>
