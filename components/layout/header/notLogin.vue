<template>
  <div class="flex items-center">
    <language v-if="showI18n"></language>
    <div
      type="primary"
      @click="login"
      class="me-[0.5rem]  flex !h-[2.125rem] w-[5.375rem] cursor-pointer items-center justify-center !rounded-[0.5rem] !border-boxBgColor bg-boxBgColor !px-[1.375rem] !py-[0.5rem] !text-[0.875rem] text-black hover:bg-[#F1F2F5]"
    >
      <span class="truncate w-full text-center">{{ t("AccountSettingsPage.logIn") }}</span>
    </div>
    <div
      type="success"
      @click="signup"
      class="flex !h-[2.125rem] w-[6.875rem] cursor-pointer items-center justify-center !rounded-[0.5rem] !border-0 bg-mainColor-900 !px-[1rem] !py-[0.5rem] !text-[0.875rem] text-white hover:bg-[#719BFF]"
    >
    <span class="truncate w-full text-center">{{ t("AccountSettingsPage.tryForFree") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import language from "./language.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();
const props = defineProps({
  showI18n: {
    type: Boolean,
    default: true
  }
});
//登录
const login = () => {
  router.push({
    path: localePath("/user/login")
  });
};
const signup = () => {
  router.push({
    path: localePath("/user/signup")
  });
};
</script>
