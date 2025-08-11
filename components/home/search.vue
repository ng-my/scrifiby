<template>
  <el-input
    class="input"
    v-model="debouncedValue"
    :placeholder="t('FolderPage.search.placeholder')"
  >
    <template #prefix>
      <span class="iconfont icon-chazhao text-fontColor"></span>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { debounce } from "lodash-es"; // Import debounce from lodash-es

const { t } = useI18n();
const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});
const emit = defineEmits(["update:modelValue"]);

// Create a local ref for immediate updates
const debouncedValue = ref(props.modelValue);

// Create a debounced function for emitting updates
const emitDebounced = debounce((value: string) => {
  emit("update:modelValue", value);
}, 300); // 300ms delay, adjust as needed

// Watch for changes to the local value and emit using the debounced function
watch(debouncedValue, (newVal) => {
  emitDebounced(newVal);
});
</script>

<style scoped>
.input {
  /* sm:w-60 sm: !rounded-lg */
  @apply h-[2.125rem] min-w-24 max-w-60 !rounded-[1.25rem] bg-boxBgColor text-fontColor transition-all ease-linear sm:!rounded-lg;
}

:deep(.el-input__wrapper) {
  /* sm: !rounded-lg */
  @apply !rounded-[1.25rem] bg-boxBgColor px-3 text-fontColor sm:!rounded-lg;
  box-shadow: none;
}

:deep(.el-input__prefix-inner > :last-child) {
  @apply me-3.5;
}
</style>
