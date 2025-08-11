<template>
  <div class="w-full">
    <div
      v-if="props.row.transcriptionStatus === 0"
      class="max-w-40 text-fontColor"
    >
      <!--      {{ `${props.row.progress || 1}%` }}-->

      <el-progress
        :stroke-width="8"
        striped
        striped-flow
        :percentage="props.row.progress || 0"
      />
    </div>
    <span
      v-else-if="props.row.transcriptionStatus === 1"
      class="iconfont icon-duihao text-xs text-thirdColor"
    ></span>
    <div v-else>
      <span
        class="iconfont icon-shanchu me-1 text-xs text-subColor-normal sm:me-4"
      ></span>
      <span class="hidden text-fontColor sm:inline">{{
        t("FolderPage.table.failed")
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FileItem } from "~/api/type/folder";

const { t } = useI18n();
const props = defineProps<{
  row: FileItem;
}>();
</script>

<style scoped>
:deep(.el-progress-bar__outer) {
  @apply bg-boxBgColor;
}

:deep(.el-progress-bar__inner) {
  @apply bg-mainColor-900;
}

:deep(.el-progress__text) {
  @apply ms-3 !text-sm text-fontColor;
}
</style>
