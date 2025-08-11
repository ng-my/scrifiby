<template>
  <section class="px-4">
    <!-- 标题 -->
    <h1
      class="m-auto mb-[2.125rem] w-full max-w-[62rem] text-center text-[2.5rem] font-bold"
    >
      Here's how to turn a YouTube video into a downloadable MP4 file in 3 easy
      steps
    </h1>
    <!--2、 三步操作流程 -->
    <section
      class="m-auto grid max-w-[75rem] grid-cols-1 justify-center gap-6 px-4 md:grid-cols-3"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex flex-col items-center rounded-xl transition"
      >
        <el-image
          :src="`/assets/images/downloadMp4/step_${item.img}.png`"
          class="mb-[1.875rem] w-full rounded-[1rem]"
          style="aspect-ratio: 100/57.4"
          fit="cover"
        ></el-image>
        <div
          class="mb-[0.625rem] flex items-center self-start text-[1.375rem] font-semibold leading-[1.875rem]"
        >
          <el-image
            :src="`/assets/images/downloadMp4/index_${item.icon}.png`"
            class="me-3 h-[1.625rem] w-[1.625rem]"
            fit="cover"
          ></el-image>
          {{ item.title }}
        </div>
        <div class="text-start text-lg leading-[1.75rem]">
          {{ item.content }}
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
/* part1 组件 */
const list = [
  {
    img: "1",
    icon: "1",
    title: "Copy the URL",
    content:
      "Open your target YouTube video, then copy the link from your browser’s address bar."
  },
  {
    img: "2",
    icon: "2",
    title: "Paste the link",
    content:
      "Head to your video downloader tool and paste the URL into its input field."
  },
  {
    img: "3",
    icon: "3",
    title: "Download the MP4",
    content: "Once processed, hit the download button to save your MP4 file."
  }
];
</script>

<style scoped></style>
