<template>
  <top-left-layout>
    <div class="flex flex-1 flex-col bg-white p-4 lg:p-5">
      <home-transcribe-list
        :header-name="selectedFolder?.folderName"
        :search="searchQuery"
      >
        <template #header-right>
          <div
            class="mb-1 flex flex-shrink items-center justify-between sm:justify-end lg:mb-0"
          >
            <home-search v-model="searchQuery" />

            <div class="hidden sm:block">
              <div class="ms-2 flex">
                <el-button
                  class="customer-button !bg-boxBgColor !text-black"
                  :class="{
                    disable: recordStatus === 1
                  }"
                  @click="beforeClick(startRecord)"
                >
                  <span
                    class="iconfont icon-yuyin me-1.5 text-sm text-fontColor"
                  ></span>
                  {{
                    recordStatus === 1
                      ? t("FolderPage.buttons.recording")
                      : t("FolderPage.record")
                  }}
                </el-button>

                <el-button
                  class="customer-button"
                  @click="beforeClick(openFileAndLinkDialog)"
                >
                  <span class="me-1.5 text-sm">+</span>
                  {{ t("FolderPage.transcribe") }}
                </el-button>
              </div>
            </div>

            <div class="block sm:hidden">
              <span
                @click="beforeClick(startRecord)"
                :class="{
                  disable: recordStatus === 1
                }"
                class="iconfont icon-yuyin ms-4 text-[#999]"
              ></span>
              <span
                @click="beforeClick(openFileAndLinkDialog)"
                class="iconfont icon-yidongduantianjia ms-4 text-[#999]"
              ></span>
            </div>
          </div>
        </template>
      </home-transcribe-list>
    </div>
  </top-left-layout>
</template>

<script setup>
import { useFolderStore } from "~/stores/useFolderStore.js";
import TopLeftLayout from "~/layouts/topLeftLayout.vue";

definePageMeta({
  requireAuth: true
});
const { t } = useI18n();

// 搜索查询
const searchQuery = ref("");

const { selectedFolder } = storeToRefs(useFolderStore());
const { recordStatus } = storeToRefs(useRecordStore());
const { startRecord } = useRecordStore();
const { openFileAndLinkDialog } = useUploadStore();
const { isNoTimes, isFreeUser } = storeToRefs(useSubscriptionStore());
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const beforeClick = (fn) => {
  fn();
};
</script>

<style scoped>
/* 自定义表格样式 */
:deep(.el-table) .el-table__header th {
  background-color: #f9fafb;
  color: #374151;
  font-weight: 600;
}

:deep(.el-table) .el-table__cell {
  padding: 0.75rem 0;
  vertical-align: middle;
}

:deep(.el-table) .el-table__row:hover td {
  background-color: #f3f4f6 !important;
}

:deep(.customer-button) {
  @apply rounded-lg border-0 bg-mainColor-600 px-3 py-2.5 text-sm text-mainColor-900 hover:opacity-80;
}

.disable {
  @apply cursor-not-allowed bg-boxBgColor text-fontColor !opacity-60;
}
:deep(.el-button) {
  @apply !rounded-lg;
}
:deep(.el-button + .el-button) {
  @apply !ms-3;
}
</style>
