<template>
  <div
    class="payment-success-page flex min-h-screen w-full items-center justify-center"
  >
    <i class="iconfont icon-loaderjiazai ng-quanqiu text-mainColor-900"></i>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const routeLocale =
  window?.localStorage?.getItem("i18n_localLanguage") || "en-US";
definePageMeta({
  requireAuth: true
});
setLocale(routeLocale);
setTimeout(() => {
  router.push({
    path: localePath("/home", routeLocale),
    query: { type: "success" }
  });
}, 300);
</script>

<style scoped>
.ng-quanqiu {
  font-size: 2rem;
  animation: spin 1.4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
