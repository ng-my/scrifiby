<!-- LanguageSwitcher.vue -->
<template>
  <div
    :class="[!showHomeIcon ? '!border-0' : '']"
    class="box-border flex h-11 w-full items-center justify-between border-b border-b-borderColor bg-white px-4 py-2.5 sm:h-[3.75rem] sm:px-5 sm:py-3"
  >
    <!-- 左侧图标按钮 -->
    <div
      v-if="showHomeIcon"
      @click="goToHome()"
      class="pointer flex items-center font-medium text-gray-900"
    >
      <el-image
        src="/assets/logo2.svg"
        class="me-2 h-6 w-auto sm:h-[1.875rem]"
        alt=""
      ></el-image>
    </div>

    <!-- 右侧区域 -->
    <client-only>
      <div class="flex items-center" v-if="isLogin">
        <!-- 语言切换 -->
        <language v-if="showI18n"></language>
        <!-- 当前登录用户 -->
        <loginUserInfo></loginUserInfo>
      </div>
      <notLogin v-if="!isLogin" :showI18n="showI18n"></notLogin>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import language from "./language.vue";
import loginUserInfo from "./userInfo.vue";
import notLogin from "./notLogin.vue";
import { useUserStore } from "~/stores/useUserStore";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const props = defineProps({
  showI18n: {
    type: Boolean,
    default: true
  },
  showHomeIcon: {
    type: Boolean,
    default: true
  }
});

const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();
const isLogin = computed(() => !!userInfo.value);

//登录
const login = () => {
  router.push({
    path: localePath("/user/login")
  });
};

const goToHome = () => {
  (useNuxtApp().$gtagEvent as Function)("click", "LOGO_Btn", "Back to Home");
  router.push({
    path: localePath("/home")
  });
};
</script>
<style scoped lang="scss">
.pointer {
  cursor: pointer;
}
</style>
