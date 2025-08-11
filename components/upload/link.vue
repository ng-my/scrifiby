<template>
  <div class="flex flex-col justify-center">
    <slot></slot>
    <div class="mb-2.5 text-sm">
      {{ t("FileUploadAndRecording.upload.link.label") }}
    </div>
    <el-input
      v-model="value"
      type="textarea"
      :rows="4"
      placeholder="https://www.youtube.com/watch?v=..."
    ></el-input>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  link: string;
}>();
const emit = defineEmits(["update:link"]);

const value = computed({
  get() {
    return props.link;
  },
  set(val) {
    emit("update:link", val);
  }
});
</script>

<style scoped>
:deep(.el-textarea__inner) {
  @apply rounded-lg px-3.5 py-3;
  resize: none;
}
:deep(.el-textarea__inner::-webkit-scrollbar) {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>
