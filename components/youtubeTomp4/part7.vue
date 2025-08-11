<template>
  <!--7、 FAQ -->
  <section class="px-4">
    <h2 class="mb-10 text-center text-[2.5rem] font-bold">
      Key Questions on Downloading YouTube Videos
    </h2>
    <div class="mx-auto max-w-[55rem]">
      <div v-for="(item, idx) in list" :key="item.id" class="mb-[1.25rem]">
        <div
          class="flex cursor-pointer items-center justify-between rounded-[1rem] bg-[#F7FAFF] px-[2rem] py-[1.25rem] transition"
          @click="toggle(idx)"
        >
          <span class="me-4 text-[1.25rem] font-semibold leading-[1.75rem]">
            {{ item.question }}
          </span>
          <span class="flex">
            <!-- 可用svg或图片 -->
            <el-image
              src="/assets/images/downloadMp4/down.png"
              class="h-[1.25rem] w-[1.25rem] object-contain transition-transform duration-300"
              fit="contain"
              :class="{ 'rotate-180': activeIdx === idx }"
            ></el-image>
          </span>
        </div>
        <transition name="faq-scale">
          <div
            v-show="activeIdx === idx"
            class="origin-top overflow-hidden bg-white pb-[1.375rem] pe-[2rem] ps-[2.125rem] pt-[0.875rem] text-[1rem] leading-[1.75rem] text-[#9E9E9E]"
          >
            {{ item.answer }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIdx = ref<number | null>(null);
const toggle = (idx: number) => {
  activeIdx.value = activeIdx.value === idx ? null : idx;
};
let list = ref([
  {
    id: 1,
    question: "Can I download a YouTube video if it's copyrighted?",
    answer:
      "Downloading copyrighted YouTube videos without the copyright owner's permission is illegal."
  },
  {
    id: 2,
    question: "Is this download tool safe?",
    answer:
      "Yes, it's safe and trustworthy. We do not require any personal information from users and take strong measures against viruses. We remind you to always exercise caution when downloading files from the internet: avoid clicking on suspicious links or downloading questionable files."
  },
  {
    id: 3,
    question: "What languages does YouTube to MP4 download support?",
    answer:
      "Our service supports downloading YouTube videos in all popular languages."
  },
  {
    id: 4,
    question:
      "What factors affect the time it takes to download a YouTube video?",
    answer:
      "While we ensure the fastest possible download experience, download time is also affected by factors like the video's length and your internet connection speed."
  },
  {
    id: 5,
    question:
      "When I download an MP4 video using my smartphone, where is it saved?",
    answer: [
      'After downloading an MP4 on your smartphone, you can typically find it in the "Downloads" folder within your ',
      "device's file manager app."
    ].join()
  },
  {
    id: 6,
    question:
      "Does downloading a YouTube video as an MP4 reduce video quality?",
    answer:
      "No. Downloading YouTube videos as MP4 using our tool retains the original video quality. The conversion process preserves the source quality, ensuring you get the same viewing experience as on YouTube."
  }
]);
</script>

<style scoped>
.faq-scale-enter-active {
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.faq-scale-enter-from {
  transform: scaleY(0.8);
  opacity: 0.3;
}

.faq-scale-enter-to {
  transform: scaleY(1);
  opacity: 1;
}
</style>
