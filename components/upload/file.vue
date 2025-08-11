<template>
  <div class="flex w-full flex-col items-center">
    <el-upload
      drag
      action=""
      :multiple="!isFreeUser"
      :accept="accept"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="handleFileChange"
    >
      <div class="flex flex-col items-center text-center">
        <span
          class="iconfont icon-shangchuan mb-5 text-2xl text-mainColor-900"
        ></span>
        <p class="mb-1 text-sm text-black">
          {{ t("FileUploadAndRecording.upload.file.tip") }}
        </p>

        <div class="flex flex-wrap justify-center text-xs text-fontColor">
          <span v-for="(type, index) in fileTypes" :key="index">
            {{ type }}
            <span class="" v-show="index < fileTypes.length - 1">、</span>
          </span>
        </div>
      </div>
    </el-upload>

    <div v-if="showLink" class="mt-1 flex w-full flex-col items-center">
      <el-divider class="me-3">{{
        t("FileUploadAndRecording.upload.file.or")
      }}</el-divider>
      <div @click="handleShowLink" class="flex cursor-pointer items-center">
        <span
          class="iconfont icon-yulanlianjie me-2.5 text-xs text-fontColor"
        ></span>
        <span class="text-black">{{
          t("FileUploadAndRecording.upload.file.orTitle")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";

const { t } = useI18n();

defineProps({
  showLink: {
    type: Boolean,
    default: false
  }
});

const { isFreeUser } = storeToRefs(useSubscriptionStore());

const { fileTypes } = storeToRefs(useUploadStore());
const { updateSelectRawFiles } = useUploadStore();
const accept = computed(() =>
  fileTypes.value.map((type) => `.${type}`).join(",")
);

const handleFileChange = (uploadFile) => {
  updateSelectRawFiles(uploadFile.raw);
};

const emits = defineEmits(["showLink"]);
const handleShowLink = () => {
  emits("showLink");
};

// 上传前校验
const beforeUpload = (file) => {
  // 获取文件扩展名并转为大写
  const extension = file.name.split(".").pop().toUpperCase();

  // 类型校验
  if (!fileTypes.value.includes(extension)) {
    ElMessage.error(`不支持的文件类型: ${extension}`);
    return false;
  }

  return true;
};
</script>

<style scoped>
:deep(.el-upload-dragger) {
  @apply flex h-40 w-full flex-1 items-center justify-center rounded-lg border border-dashed border-mainColor-900 bg-mainColor-900 bg-opacity-5;
  transition: all 0.3s;
}

:deep(.el-divider) {
  @apply border-borderColor;
}
</style>
