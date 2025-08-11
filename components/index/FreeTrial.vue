<template>
  <section
    class="free-trial-wrap relative flex w-full flex-col items-center justify-center pb-[4rem] pt-[5rem]"
  >
    <!-- 内容层 -->
    <div
      class="relative z-10 flex h-full w-full flex-col items-center justify-center px-[1.5rem]"
    >
      <h1 class="h-title mb-2.5 text-[2.5rem] font-bold leading-[3.5rem]">
        Free Trial
      </h1>
      <p
        class="mx-auto mb-[2.75rem] max-w-[40rem] text-[1.375rem] font-semibold leading-[1.875rem]"
      >
        Upload a file to transcribe now.
      </p>
      <guest-upload />
    </div>
  </section>
</template>

<script setup lang="ts">
// 顶部横幅组件
</script>

<style scoped>
.free-trial-wrap {
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: " ";
    width: 100%;
    height: 1px;
    background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 1),
      rgba(105, 32, 122, 1),
      rgba(0, 0, 0, 1)
    );
  }
}
</style>
