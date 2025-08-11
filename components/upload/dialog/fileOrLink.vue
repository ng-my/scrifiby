<template>
  <div class="customer-dialog">
    <el-dialog :close-on-click-modal="false" :close-on-press-escape="false" @closed="handleClose" v-model="visible">
      <template #header>
        <div class="flex cursor-pointer items-center" @click="showLink = false">
          <span v-if="showLink" class="me-2 flex cursor-pointer items-center">
            <el-icon>
              <ArrowLeft />
            </el-icon>
          </span>
          {{
            showLink
              ? t("FileUploadAndRecording.upload.return")
              : t("FileUploadAndRecording.upload.file.dialogTitle")
          }}
        </div>
      </template>
      <upload-file v-if="!showLink" show-link @showLink="handleShowLink" />

      <upload-link v-if="showLink" v-model:link="link">
        <div class="mb-3 text-sm font-normal text-black">
          {{ t("FileUploadAndRecording.upload.file.orTitle") }}
        </div>
      </upload-link>

      <template v-if="showLink" #footer>
        <el-button @click="visible = false">
          {{ t("FileUploadAndRecording.upload.link.cancel") }}
        </el-button>
        <el-button :loading="loading" @click="handleConfirm" type="primary">
          {{ t("FileUploadAndRecording.upload.link.confirm") }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";
import { useLink } from "./useLink";
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue", "confirm"]);

const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

const { link, loading, handleConfirm } = useLink(emit);

const showLink = ref(false);
const handleShowLink = () => {
  showLink.value = true;
};

const handleClose = () => {
  link.value = "";
  showLink.value = false;
};
</script>

<style scoped>
@import "./common.css";
</style>
