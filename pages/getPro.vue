<template>
  <div class="h-screen overflow-y-auto">
    <div class="sticky top-0 z-50">
      <layout-header />
      <div
        class="flex h-11 w-full items-center border-b border-borderColor bg-white px-4"
      >
        <el-icon @click="safeGoBack" size="1.25rem"><ArrowLeft /></el-icon>
        <div class="flex1 w-full text-center text-lg">
          {{ t("HomePage.subscriptionModal.right.title") }}
        </div>
      </div>
    </div>
    <div class="relative z-0">
      <subscription-content :isMobile="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";

const { t } = useI18n();
const router = useRouter();

const localePath = useLocalePath();
const safeGoBack = () => {
  const referrer = document.referrer;

  // 检查referrer是否为空或是否属于当前域名
  if (!referrer || !isSameDomain(referrer)) {
    router.push(localePath("/home"));
  } else {
    // 如果来自本站，正常返回上一页
    router.go(-1);
  }
};

function isSameDomain(url: any) {
  try {
    // 创建URL对象
    const urlObj = new URL(url);
    // 比较域名是否相同
    return urlObj.hostname === window.location.hostname;
  } catch (e) {
    console.error("Invalid URL:", e);
    return false;
  }
}
</script>

<style scoped></style>
