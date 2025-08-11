<template>
  <!-- logo区域 -->
  <div
    class="flex cursor-pointer items-center justify-between px-[1.5rem] pt-[0.5rem]"
  >
    <div class="flex items-center">
      <el-image
        @click="goToHome()"
        src="/assets/logo2.svg"
        alt="Scribify Logo"
        class="h-6 w-auto sm:h-[1.875rem]"
        fit="contain"
      ></el-image>
    </div>
    <!--    官网需要 注释，后面放开-->
    <div class="flex">
      <layout-header-language></layout-header-language>
      <layout-header-userInfo
        v-if="noLogin === 'noLogin'"
      ></layout-header-userInfo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { noLogin } = defineProps({
  noLogin: {
    type: String,
    default: ""
  }
});

const localePath = useLocalePath();
const router = useRouter();
const goToHome = () => {
  router.push({
    path: localePath("/")
  });
};
</script>

<style scoped></style>
