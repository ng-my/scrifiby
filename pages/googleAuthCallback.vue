<template>
  <div
    class="googleAuthCallback-page flex min-h-screen w-full items-center justify-center"
  >
    <i class="iconfont icon-loaderjiazai ng-quanqiu text-mainColor-900"></i>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/useUserStore";
const userStore = useUserStore();
const router = useRouter();
const localePath = useLocalePath();
// google登录
const handleGoogleCallback = async (idToken) => {
  try {
    const { userApi } = await import("~/api/user");
    const response = await userApi.loginGoogle({ idToken });
    userStore.setUserInfo(response);
    router.push({
      path: localePath("/home")
    });
  } catch (error) {
    ElMessage.error(error?.message || error?.code);
    setTimeout(() => {
      router.push({
        path: localePath("/home")
      });
    }, 1200);
  }
};

onMounted(() => {
  // 检查URL中是否包含access_token
  const hash = window.location.hash;
  if (hash) {
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    if (accessToken) {
      handleGoogleCallback(accessToken);
    }
  }
});
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
