<template>
  <div>
    <div class="p-4 pb-0 md:hidden">
      <div @click="drawer = true" class="flex w-max max-w-full cursor-pointer items-center overflow-hidden">
        <img class="relative top-[-1px] z-[1] me-2 h-5 w-5" src="/assets/images/home/menu.svg" alt="" />
        <client-only>
          <span class="iconfont text-sm" :class="name.icon"></span>

          <span class="relative top-[1px] z-[1] ms-1 line-clamp-1 text-ellipsis text-sm">{{ name.name }}
          </span>
        </client-only>
      </div>
    </div>

    <client-only>
      <el-drawer v-model="drawer" :direction="direction" @opened="handleOpened" @closed="handleClosed"
        :show-close="false">
        <layout-menu-content />
      </el-drawer>
    </client-only>

    <layout-menu-content class="hidden md:block" />
  </div>
</template>

<script setup lang="ts">
import { useFolderStore } from "~/stores/useFolderStore";

const { t, locale } = useI18n();

const drawer = ref(false);

const { selectedFolder } = storeToRefs(useFolderStore());

const route = useRoute();
const name = computed(() => {
  if (route?.name?.includes("home")) {
    return {
      name: t("HomePage.home"),
      icon: "icon-home"
    };
  } else if (route.path.includes("/folder")) {
    return {
      name: selectedFolder.value.folderName || t("FolderPage.unclassified"),
      icon: "icon-yidongduanwenjianjia"
    };
  } else {
    return {
      name: "",
      icon: ""
    };
  }
});

const direction = ref("ltr");
watchEffect(() => {
  direction.value = ['he-IL', 'ar-SA'].includes(locale.value) ? "rtl" : "ltr";
});

const { step } = storeToRefs(useTourStore());
const { nextStepWithOperation } = useTourStore();
watchEffect(() => {
  if (step.value === 1.5) {
    drawer.value = true;
  } else if (step.value === 2.5) {
    drawer.value = false;
  }
});
const handleOpened = () => {
  nextStepWithOperation();
};
const handleClosed = () => {
  nextStepWithOperation();
};
</script>

<style scoped>
:deep(.el-drawer__header) {
  display: none;
}

:deep(.el-drawer__body) {
  padding: 0;
}

:deep(.el-drawer) {
  @apply min-w-64;
}
</style>
