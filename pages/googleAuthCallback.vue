<template>
  <div
    class="googleAuthCallback-page flex min-h-screen w-full items-center justify-center"
  >
    <i class="iconfont icon-loaderjiazai ng-quanqiu text-mainColor-900"></i>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/useUserStore";
import { useVisitor } from "~/hooks/useVisitor.js";
import { Msg } from "~/utils/tools";
const userStore = useUserStore();
const router = useRouter();
const localePath = useLocalePath();
// google登录
const { getVisitorId, visitorId } = useVisitor();
const handleGoogleCallback = async (idToken) => {
  try {
    const { userApi } = await import("~/api/user");
    if (!visitorId.value) await getVisitorId();
    const response = await userApi.loginGoogle({
      idToken,
      visitorClientId: visitorId.value
    });
    userStore.setUserInfo(response);
    router.push({
      path: localePath("/home")
    });
  } catch (error) {
    Msg({
      message: error?.message || error?.code,
      type: "error"
    });
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
