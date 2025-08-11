<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :title="t('FileUploadAndRecording.upload.resultDialogTitle')"
    >
      <div class="w-full">
        <div class="mt-4">
          <lang-choose-input v-model:lang="lang" />
        </div>
      </div>

      <template #footer>
        <div class="flex w-full items-center">
          <el-button class="flex-1" @click="visible = false">{{
            t("FileUploadAndRecording.upload.cancel")
          }}</el-button>
          <el-button
            :loading="transcribing"
            class="flex-1"
            type="primary"
            @click="handleTranscribe"
            >{{ t("FileUploadAndRecording.upload.confirm") }}</el-button
          >
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { type UploadFile, useUpload } from "~/components/upload/useUpload";
import { useSubscript } from "~/components/layout/header/useSubscript";

const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  audioBlob: Blob | null;
  recordTitle: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { initUpload, createFileObject } = useUpload();
const file = reactive({
  file: null as any | null
});
watchEffect(async () => {
  if (visible.value && !file.file) {
    file.file = reactive(
      createFileObject(
        new File([props.audioBlob!], props.recordTitle, {
          type: "audio/webm", // 根据实际格式调整（如 'audio/mp3'）
          lastModified: Date.now() // 可选：设置最后修改时间
        })
      )
    );
  }
});

const { endRecord } = useRecordStore();
const transcribing = ref(false);
const lang = ref<any>({});
const { selectedFolder } = storeToRefs(useFolderStore());
const { updateNewFileList } = useUploadStore();

const { fetchSubscript } = useSubscript();
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const route = useRoute();
const handleTranscribe = async () => {
  transcribing.value = true;
  try {
    await initUpload(file.file);
    const { useFolderApi } = await import("~/api/folder");
    const { transcribeFile, saveFileInfo } = useFolderApi;
    const fileExtName = file.file.name.split(".").pop();
    const fileInfo = await saveFileInfo(
      JSON.stringify([
        {
          bucketId: file.file.key,
          fileExtName: fileExtName,
          parentId: route?.path?.includes("folder")
            ? selectedFolder.value?.id || 0
            : 0,
          fileName: file.file.name,
          fileSize: file.file.size
        }
      ])
    );

    const fileIds = fileInfo.map((file: any) => file.fileId);
    await transcribeFile({
      language: lang.value.transCode,
      langName: lang.value.lang,
      fileIds
    });
    if (isFreeUser.value) {
      await fetchSubscript();
    }
    visible.value = false;
    endRecord();
    updateNewFileList(fileIds);
  } finally {
    transcribing.value = false;
  }
};
</script>

<style scoped>
@import "../../upload/dialog/common.css";
</style>
