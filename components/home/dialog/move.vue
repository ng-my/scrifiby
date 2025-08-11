<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.move.title')"
      width="30%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @open="handleOpen"
      @closed="handleClosed"
    >
      <el-select-v2
        v-model="value"
        :options="options"
        :placeholder="t('FolderPage.dialog.move.placeholder')"
      />
      <template #footer>
        <el-button @click="visible = false">
          {{ t("FolderPage.dialog.move.cancel") }}
        </el-button>
        <el-button
          :loading="loading"
          :disabled="!value"
          type="primary"
          @click="handleConfirm"
        >
          {{ t("FolderPage.dialog.move.confirm") }}
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

const options = ref<any[]>([]);
const fetchOption = async () => {
  try {
    const { useFolderApi } = await import("~/api/folder");
    const data = await useFolderApi.getFolderList();
    options.value = data.map((item: any) => ({
      label: item.folderName,
      value: item.id
    }));
    if (props.selectIds.length === 1) {
      const item = props.tableData.find(
        (item: any) => item.id === props.selectIds[0]
      );
      options.value = options.value.filter(
        (e: any) => e.value !== item?.folderId
      );
    }
  } catch (e) {}
};
const handleOpen = () => {
  fetchOption();
};
const value = ref();

const loading = ref(false);
const handleConfirm = async () => {
  try {
    loading.value = true;
    const { useFolderApi } = await import("~/api/folder");
    const fileIds = props.selectIds.map((id) => {
      const item = props.tableData.find((item) => item.id === id);
      return item!.fileId;
    });
    await useFolderApi.moveFile({
      ids: fileIds,
      targetParentId: value.value
    });
    visible.value = false;
    emit("confirm", value.value);
  } catch (e) {
  } finally {
    loading.value = false;
  }
};

const handleClosed = () => {
  value.value = "";
  options.value = [];
};
</script>

<style scoped>
@import "./common.css";
</style>
