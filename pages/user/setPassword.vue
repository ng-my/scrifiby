<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo :noLogin="noLogin"></user-only-logo>
    <user-go-back :path="path">
      <span v-if="pageType === 'noLogin'"></span>
      <span v-else>
        {{ pageType === "reset" ? $i("log_in") : $i("sign_up") }}</span
      >
    </user-go-back>
    <user-set-password></user-set-password>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useI18nModule } from "~/utils/i18n";

const $i = useI18nModule("IdentityInfoManage");
const noLogin = ref("");
const route = useRoute();
const pageType = route.query.type || "set"; // 默认为设置密码【set】。reset表示重置密码
const path = computed(() => {
  if (pageType === "noLogin") {
    noLogin.value = pageType;
    return route.query.path;
  }
  return pageType === "reset" ? "/user/resetPassword" : "/user/signup";
});
</script>

<style scoped></style>
