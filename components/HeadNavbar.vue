<template>
  <nav class="flex items-center justify-between">
    <span class="flex items-center"> 语言：<language></language> </span>
    <span>
      路由：
      <el-select
        @change="switchRoute"
        v-model="menu"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in menus"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </span>
  </nav>
</template>

<script lang="ts" setup>
import language from "@/components/layout/header/language.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n, useLocalePath, useSwitchLocalePath } from "#imports";
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

const activeMenuItem = ref("");

const pages = import.meta.glob("@/pages/**/*.vue");

let menu = ref(route.path);
watch(
  () => route,
  (val) => {
    menu.value = route.path;
  },
  { deep: true }
);
const menus = [{ value: localePath("/"), label: "主页" }];
for (let path in pages) {
  let nameArr = path.split("/");
  let pageIndex = nameArr.indexOf("pages");
  let len = nameArr.length;
  let newArr = nameArr.splice(pageIndex + 1, len + 1);

  let lastItem = newArr[newArr.length - 1];
  newArr[newArr.length - 1] = lastItem.split(".")[0];

  let value = newArr.join("/");
  let label = value;
  value = value.replace("/index", "").replace("index", "");

  label && menus.push({ value: localePath(`/${value}`), label });
}

const switchRoute = (meu: string) => {
  menu.value = meu;
  router.push({
    path: localePath(menu.value),
    hash: route.hash,
    query: route.query
  });
};

// 路由监听
watch(
  () => route.fullPath,
  async (newPath) => {
    // 更新活动菜单项
    if (route.hash) {
      activeMenuItem.value = route.hash;
    } else {
      activeMenuItem.value = route.path;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* 确保导航栏固定且始终可见 */
nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  /* background-color: aqua; */
}
</style>
