<template>
  <div
    class="payment-failed-page flex min-h-screen w-full items-center justify-center"
  >
    <i class="iconfont icon-loaderjiazai ng-quanqiu text-mainColor-900"></i>
  </div>
</template>

<script setup>
const router = useRouter();
const localePath = useLocalePath();
definePageMeta({
  requireAuth: true
});
setTimeout(() => {
  router.push({
    path: localePath("/home")
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
