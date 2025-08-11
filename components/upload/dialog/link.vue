<template>
  <div class="customer-dialog">
    <el-dialog
      v-model="visible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @closed="link = ''"
      :title="t('FileUploadAndRecording.upload.link.dialogTitle')"
    >
      <upload-link v-model:link="link" />
      <template #footer>
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
</script>

<style scoped>
@import "./common.css";
</style>
