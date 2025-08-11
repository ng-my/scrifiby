<template>
  <nav
    class="fixed left-0 top-0 z-[999] flex w-full justify-center bg-white px-[1rem]"
  >
    <div
      class="flex h-[4.375rem] w-full max-w-[75rem] items-center justify-between bg-white"
    >
      <!-- Logo -->
      <div
        @click="goToHome()"
        class="flex cursor-pointer items-center space-x-2"
      >
        <el-image
          src="/assets/logo2.svg"
          alt="Scribify Logo"
          class="h-6 w-auto sm:h-[1.875rem]"
          fit="cover"
        ></el-image>
      </div>
      <!-- Menu -->
      <ul
        v-if="props.showMenu"
        class="flex space-x-[4.25rem] text-[1rem] font-normal text-black"
      >
        <li
          @click="scrollIntoView(item.name)"
          v-for="item in menuList"
          :key="item.id"
          class="cursor-pointer transition hover:text-mainColor-900"
        >
          {{ item.name }}
        </li>
      </ul>
      <!-- Right Icon -->
      <div>
        <layout-header :show-home-icon="false" :show-i18n="false" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useIntervalFn } from "@vueuse/core";
const props = defineProps({
  showMenu: {
    type: Boolean,
    default: true
  }
});
const route = useRoute();
const router = useRouter();
const menuList = ref([
  { id: 1, name: "Product" },
  { id: 2, name: "Pricing" },
  { id: 3, name: "FAQ" }
]);
const emit = defineEmits(["scrollIntoView"]);
const scrollIntoView = (id: string) => {
  const path = route.path;
  if (path.includes("user/aboutUs")) {
    if (process.client) {
      window.sessionStorage.setItem("anchorId", `ID_${id}`);
    }
    return router.replace({
      path: localePath("/")
    });
  }
  emit("scrollIntoView", `ID_${id}`);
};

const localePath = useLocalePath();
const goToHome = () => {
  router.push({
    path: localePath("/")
  });
};
onMounted(() => {
  const anchorId = window.sessionStorage.getItem("anchorId");
  if (anchorId) {
    window.sessionStorage.removeItem("anchorId");
    const { pause } = useIntervalFn(() => {
      let isExistAnchorId = document.querySelector(`#${anchorId}`);
      if (isExistAnchorId) {
        emit("scrollIntoView", anchorId);
        // 清理定时器
        pause();
      }
    }, 50);
  }
});
</script>

<style scoped></style>
