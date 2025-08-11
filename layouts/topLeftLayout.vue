<template>
  <keep-alive>
    <div
      class="box-border flex h-screen w-full flex-col overflow-y-auto sm:overflow-y-hidden"
    >
      <div class="sticky top-0 z-10 flex flex-col-reverse sm:flex-col">
        <!-- Header -->
        <layout-upgrade v-if="isFreeUser" />

        <layout-header />
      </div>

      <div class="flex flex-1 flex-col overflow-y-hidden md:w-full md:flex-row">
        <!-- Left Sidebar -->
        <layout-menu />

        <!-- Right Main Content (Slot) -->
        <main class="media-heght flex flex-1 flex-col md:w-[0]">
          <slot></slot>
        </main>
      </div>
    </div>
  </keep-alive>
</template>

<script setup lang="ts">
const isMobile = ref(false);
const checkDeviceType = () => {
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
const checkWindowSize = () => {
  return window.innerWidth < 768;
};
const updateMobileStatus = () => {
  isMobile.value = checkDeviceType() && checkWindowSize();
};

const { isFreeUser } = storeToRefs(useSubscriptionStore());

onMounted(() => {
  updateMobileStatus();
  window.addEventListener("resize", updateMobileStatus);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileStatus);
});
provide("isMobile", isMobile);
</script>

<style scoped>
@media (max-width: 768px) {
  .media-heght {
    height: 100%;
  }
}
</style>
