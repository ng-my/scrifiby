<template>
  <!--4、 五大优势 -->
  <section class="mb-16 px-4">
    <!-- 标题 -->
    <h2 class="mb-8 text-center text-[2.5rem] font-bold leading-snug">
      Here are the 5 major benefits of downloading<br />
      YouTube videos as MP4 files
    </h2>
    <!-- 内容区 -->
    <div
      class="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16"
    >
      <!-- 左侧图片 -->
      <div
        class="flex flex-shrink-0 justify-center md:flex-[0_0_38%] md:basis-[38%]"
      >
        <el-image
          src="/assets/images/downloadMp4/major.png"
          class="h-60 w-60 object-contain md:h-80 md:w-80"
          fit="contain"
        ></el-image>
      </div>
      <!-- 右侧优势列表 -->
      <ol
        class="max-w-[38.75rem] text-start text-[1.375rem] leading-[1.875rem] md:flex-[0_0_62%] md:basis-[62%] md:text-lg"
      >
        <li v-for="item in list" :key="item.id">
          <span class="font-semibold">
            {{ item.title }}
          </span>
          {{ item.content }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = ref([
  {
    id: 1,
    title: "Save on Data Costs: ",
    content:
      "Normally, watching videos on YouTube consumes significant mobile data. By downloading for offline viewing, you can avoid these unnecessary costs."
  },
  {
    id: 2,
    title: "Watch Anywhere, Anytime: ",
    content:
      "Enjoy your videos seamlessly, even with spotty internet connections. No more buffering worries."
  },
  {
    id: 3,
    title: "Easy Archiving & Preservation: ",
    content:
      "Saving videos as MP4s makes it simple to build your personal collection, especially for content you find truly valuable or important."
  },
  {
    id: 4,
    title: "Simpler Sharing: ",
    content:
      "Sharing an MP4 file is much more convenient than sending a link. You can send the video file directly through apps like WhatsApp or Instagram, eliminating the extra step of opening YouTube."
  },
  {
    id: 5,
    title: "Instant Viewing, Shared Moments: ",
    content:
      "Excitedly show a favorite video to friends or family nearby? With the MP4 downloaded, you can all watch it smoothly together right away, without awkward pauses waiting for it to load."
  }
]);
</script>

<style scoped></style>
