<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :title="t('FolderPage.dialog.export.title')"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      width="30%"
      @closed="handleClosed"
    >
      <div class="mb-5">
        <div class="mb-2.5 text-sm">
          {{ t("FolderPage.dialog.export.select") }}
        </div>
        <el-checkbox-group v-model="formats">
          <el-checkbox
            v-for="item in formatOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-checkbox-group>
      </div>
      <div>
        <div class="mb-2.5 text-sm">
          {{ t("FolderPage.dialog.export.settings") }}
        </div>
        <el-checkbox-group v-model="settings">
          <el-checkbox
            v-for="item in settingOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-checkbox-group>
      </div>
      <template #footer>
        <el-button @click="visible = false">
          {{ t("FolderPage.dialog.move.cancel") }}
        </el-button>
        <el-button :loading="loading" @click="handleConfirm" type="primary">
          {{ t("FolderPage.dialog.export.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { FileItem } from "~/api/type/folder";
import { useTool } from "~/components/export/useTool";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useUserStore } from "~/stores/useUserStore";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  selectIds?: string[];
  tableData?: FileItem[];
  taskId?: string;
  fileId?: string;
  translateLang?: string;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const formats = ref([]);
const formatOptions = ref([
  { value: "pdf", label: "PDF" },
  { value: "docx", label: "DOCX" },
  { value: "txt", label: "TXT" },
  { value: "vtt", label: "VTT" },
  { value: "csv", label: "CSV" },
  { value: "srt", label: "SRT" }
]);

const settingOptions = ref([
  { value: "speaker", label: t("FolderPage.dialog.export.speaker") },
  { value: "timecodes", label: t("FolderPage.dialog.export.timecodes") }
]);
const settings = ref<string[]>(["timecodes", "speaker"]);

let timer: any = null;
const handleClosed = () => {
  formats.value = [];
  settings.value = ["timecodes", "speaker"];
  clearTimeout(timer);
  loading.value = false;
};

const { userInfo } = storeToRefs(useUserStore());
const isLogin = computed(() => !!userInfo.value);

const loading = ref(false);
const route = useRoute();
const { addExportTask } = useExportStore();
const handleConfirm = async () => {
  try {
    if (!formats.value.length) {
      ElMessage.error({
        message: t("FolderPage.dialog.export.selectErr"),
        customClass: "!z-[9999]"
      });
      return;
    }

    loading.value = true;
    const taskIds: string[] = [];
    const fileIds: string[] = [];

    if (props.selectIds?.length) {
      for (const id of props.selectIds) {
        const item = props.tableData?.find((item) => item.id === id);
        if (item) {
          taskIds.push(item.taskId);
          fileIds.push(item.fileId);
        }
      }
    } else {
      taskIds.push(props.taskId!);
      fileIds.push(props.fileId!);
    }

    const params = {
      fileType: formats.value.join(","),
      taskIds: taskIds.join(","),
      fileIds: fileIds.join(","),
      haveSpeaker: +settings.value.includes("speaker"),
      haveTimestamp: +settings.value.includes("timecodes")
    } as any;

    if (route.query.shareId) {
      params.userId = route.query.shareId as string;
    }

    if (props.translateLang) {
      params.translateLang = props.translateLang;
      params.isTranslation = 1;
    }

    const { useFolderApi } = await import("~/api/folder");

    let exportId: string;
    if (!isLogin.value) {
      exportId = await useFolderApi.asyncExportWithoutToken(params);
    } else {
      exportId = await useFolderApi.asyncExport(params);
    }

    if (
      [1, 0].includes(props.selectIds?.length || 0) &&
      formats.value.length <= 1 &&
      !props.translateLang
    ) {
      await fetchExportStatus([exportId]);
    } else {
      addExportTask({
        [exportId as string]: {
          num:
            (props.selectIds?.length || 1) *
            (formats.value.length || 1) *
            (props.translateLang ? 2 : 1)
        }
      });
      visible.value = false;
    }
  } finally {
    loading.value = false;
  }
};

const { downloadFile } = useTool();
const fetchExportStatus = async (exportTaskIdList: any) => {
  loading.value = true;
  const { useFolderApi } = await import("~/api/folder");
  let res;
  if (!isLogin.value) {
    res = await useFolderApi.asyncExportStatusWithOutToken({
      exportTaskIdList,
      userId: String(route.query.shareId)
    });
  } else {
    res = await useFolderApi.asyncExportStatus({
      exportTaskIdList
    });
  }

  if (res.length) {
    for (const item of res) {
      if (item.status.toString() === "-1") {
        ElMessage.error({
          message: t("HomePage.export.error"),
          customClass: "!z-[9999]"
        });
        loading.value = false;
        return;
      }
      if (item.targetUrl) {
        downloadFile(item.targetUrl);
        loading.value = false;
        visible.value = false;
      }
    }
  }

  timer = setTimeout(() => {
    fetchExportStatus(exportTaskIdList);
  }, 3000);
};
</script>

<style scoped>
@import "./common.css";
:deep(.el-dialog) {
  width: calc(100% - 2rem);
  max-width: 27.5rem;
  @apply !rounded-lg p-5 sm:w-[27.5rem];
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.14);
}
:deep(.el-checkbox) {
  margin: unset;
  @apply me-[1.875rem];
}
:deep(.el-checkbox__label) {
  @apply ps-2 !text-black;
}
</style>
