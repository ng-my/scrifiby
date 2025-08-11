<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.move.title')"
      width="30%"
      :close-on-click-modal="false"
      @open="handleOpen"
      @closed="handleClosed"
    >
      <el-select-v2
        v-model="value"
        :options="options"
        ref="selectRef"
        :loading="selectLoading"
        :loading-text="t('HomePage.loading')"
        :placeholder="t('FolderPage.dialog.move.placeholder')"
        @change="selectChange"
      />
      <template #footer>
        <el-button class="home-btn" @click="visible = false">
          {{ t("FolderPage.dialog.move.cancel") }}
        </el-button>
        <el-button
          class="home-btn"
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
const selectLoading = ref(false);
const fetchOption = async () => {
  try {
    selectLoading.value = true;
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
  finally {
    selectLoading.value = false;
  }
};
const handleOpen = () => {
  fetchOption();
  window.addEventListener("keydown", handleKeyPress);
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
  window.removeEventListener("keydown", handleKeyPress);
  value.value = "";
  options.value = [];
};

// 处理 Enter 按键
const selectChange = () => {
  selectRef.value?.blur()
}
const selectRef = useTemplateRef('selectRef')
function handleKeyPress(e: any) {
  if (e.key === "Enter" && !loading.value && value.value) {
    handleConfirm();
  }
}
</script>

<style scoped>
@import "./common.css";
</style>
