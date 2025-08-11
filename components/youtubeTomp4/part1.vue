<template>
  <div class="me-auto ms-auto flex flex-col items-center px-4">
    <!--1、 标题和输入框 -->
    <h1 class="mb-[2.125rem] text-center text-[2.5rem] font-bold">
      Download YouTube Videos As MP4
    </h1>
    <div
      class="relative mb-[1.5rem] flex h-[2.75rem] w-full max-w-[43.25rem] justify-center ps-[0.5rem]"
    >
      <el-input
        v-model="link"
        class="!h-[2.75rem]"
        placeholder="Search or paste your Youtube link here"
      />
      <span
        @click="link = ''"
        v-if="link"
        class="iconfont icon-shanchu1 absolute right-[8.125rem] top-[0.625rem] cursor-pointer text-[#9E9E9E]"
      ></span>
      <el-button
        @click="handleDownload"
        :loading="loading"
        color="#3470FF"
        type="primary"
        class="relative left-[-0.125rem] !h-[2.75rem] !w-[8.125rem] cursor-pointer !bg-mainColor-900"
      >
        Download
      </el-button>
    </div>
    <div class="mb-[1.375rem] text-center text-sm text-[#9E9E9E]">
      <el-image
        @click="handleHowDownload"
        src="/assets/images/downloadMp4/play.png"
        class="me-[0.5rem] h-5 w-5 cursor-pointer align-middle"
      ></el-image>
      <el-link @click="handleHowDownload" type="primary">
        How to download?
      </el-link>
      Watch the tutorial
    </div>
    <div v-if="loading" class="mb-[1.375rem] text-[#9E9E9E]">
      Processing the link to download. Stay on the page.
    </div>
  </div>
</template>

<script setup lang="ts">
import { downloadVideo } from "./downloadVideo";
const emit = defineEmits([
  "download-click-pre",
  "download-click",
  "howDownload"
]);
const { link, loading, handleDownload } = downloadVideo(emit);

const handleHowDownload = () => {
  emit("howDownload");
};
</script>

<style scoped lang="scss">
:deep .el-button {
  border-radius: 0px 0.5rem 0.5rem 0px;
}

:deep .el-input {
  --el-input-border: #3470ff;
  --el-input-hover-border: #3470ff;
  --el-input-focus-border: #3470ff;
  --el-input-border-color: #3470ff;
  --el-input-hover-border-color: #3470ff;
  --el-input-clear-hover-color: #3470ff;
  --el-input-focus-border-color: #3470ff;
}

:deep .el-link.el-link--primary {
  --el-link-text-color: #3470ff;
  --el-link-hover-text-color: #3470ff;
  --el-link-disabled-text-color: #3470ff;
}
</style>
