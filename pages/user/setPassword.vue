<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo></user-only-logo>
    <user-go-back :path="path">
      {{ pageType === "reset" ? $i("log_in") : $i("sign_up") }}
    </user-go-back>
    <user-set-password></user-set-password>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useI18nModule } from "~/utils/i18n";

const $i = useI18nModule("IdentityInfoManage");

const route = useRoute();
const pageType = route.query.type || "set"; // 默认为设置密码【set】。reset表示重置密码
const path = computed(() => {
  return pageType === "reset" ? "/user/resetPassword" : "/user/signup";
});
</script>

<style scoped></style>
