<template>
  <!--5、 下载器特色 -->
  <section class="m-auto mb-[3.5rem] max-w-[75rem] px-4">
    <h2 class="mb-10 text-center text-[2.5rem] font-bold">
      Why Our Downloader Stands Out
    </h2>
    <div class="grid grid-cols-1 gap-[1.25rem] sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="card-warp flex flex-col items-start rounded-2xl bg-white p-[2.25rem] transition"
      >
        <div
          class="mb-[1.25rem] flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full"
          :style="{ backgroundColor: item.color }"
        >
          <el-image
            :src="`/assets/images/downloadMp4/advantage_${item.icon}.png`"
            class="h-[1.875rem] w-[1.875rem]"
          ></el-image>
        </div>
        <div class="mb-[0.875rem] text-[1.25rem] font-semibold">
          {{ item.title }}
        </div>
        <div class="text-lg">
          {{ item.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const list = ref([
  {
    icon: "1",
    color: "#EDEBFE",
    title: "One–click simplicity",
    content: "Effortless setup and intuitive operation."
  },
  {
    icon: "2",
    color: "#E7F9FD",
    title: "Blazing–fast, unlimited",
    content: "Convert and download at top speed — no caps, no limits."
  },
  {
    icon: "3",
    color: "#FFEFF4",
    title: "Convert on the fly",
    content: "Process your files instantly, no waiting required."
  },
  {
    icon: "4",
    color: "#FFF5E7",
    title: "Zero Ads, Zero Distractions",
    content:
      "Enjoy a clean interface with no pop-ups, banners, or interruptions – just seamless video conversion."
  },
  {
    icon: "5",
    color: "#DEE5FF",
    title: "Original Quality Guaranteed",
    content:
      "Your downloads retain the source video's full resolution for pixel-perfect playback every time."
  },
  {
    icon: "6",
    color: "#DEF6EE",
    title: "Works anywhere",
    content: "Fully compatible with any browser, on any device."
  }
]);
</script>

<style scoped lang="scss">
.card-warp:hover {
  box-shadow: 0px 2px 18px 0px rgba(0, 92, 255, 0.07);
}
</style>
