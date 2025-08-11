<template>
  <div
    class="h-full flex-shrink-0 overflow-y-auto overflow-x-hidden border-r border-r-borderColor bg-mainColor-900 bg-opacity-[0.02] p-3 md:w-52 md:p-4 lg:w-60 lg:p-5"
  >
    <div
      class="mb-2.5 flex h-8 w-full cursor-pointer items-center rounded-lg px-3 py-2.5 font-normal transition-all duration-300 hover:bg-menuColor-light"
      :class="{ selected: route?.path?.includes('home') }"
      @click="handleJump"
    >
      <div class="me-2.5 flex h-5 w-3 cursor-pointer items-center">
        <span class="iconfont icon-home text-xs"></span>
      </div>

      <span class="text-sm">{{ t("HomePage.home") }}</span>
    </div>

    <!-- Folders 标签 -->
    <layout-folder @rowClick="emit('rowClick')" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const localePath = useLocalePath();
const handleJump = () => {
  router.push(localePath("/home"));
};

const emit = defineEmits(["rowClick"]);
</script>

<style scoped>
.selected {
  @apply bg-menuColor-normal;
}
.selected span {
  @apply font-medium;
}
</style>
