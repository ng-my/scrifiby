<template>
  <div class="min-h-screen pt-[4.375rem]">
    <!-- 导航栏组件 -->
    <NavBar @scrollIntoView="scrollIntoView" />
    <main
      class="hero-wrap relative min-h-[21.375rem] w-full bg-[url('/assets/images/index/hero-bg.png')] bg-cover bg-center"
    >
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 顶部横幅组件 -->
        <Hero />
      </div>
    </main>
    <main class="bg-[#F7FAFF]">
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 无限制转录 -->
        <Unlimited id="ID_Product"></Unlimited>
        <!-- 无与伦比的准确性 -->
        <Accuracy></Accuracy>
        <!-- 轻松转录 -->
        <Effortless></Effortless>
        <!-- 最大的语言便利化 -->
        <Language></Language>
        <!-- 价格 -->
        <PricingSection id="ID_Pricing" />
        <!-- 用户评价组件 -->
        <ReviewSection />
      </div>
    </main>
    <main class="bg-[#FFFFFF]">
      <div class="mx-auto max-w-[88.75rem]">
        <!-- FAQ组件 -->
        <FAQSection id="ID_FAQ" />
      </div>
    </main>
    <main
      class="try-now-section relative min-h-[22.125rem] w-full bg-[url('/assets/images/index/tryNowBg.png')] bg-cover bg-center"
    >
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 立即开始 -->
        <TryNowBottom></TryNowBottom>
      </div>
    </main>
    <main class="bg-[#FFFFFF]">
      <div class="mx-auto max-w-[88.75rem]">
        <IndexContactUs></IndexContactUs>
      </div>
    </main>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/index/NavBar.vue";
import Hero from "~/components/index/Hero.vue";
import Unlimited from "~/components/index/Unlimited.vue";
import Accuracy from "~/components/index/Accuracy.vue";
import Effortless from "~/components/index/Effortless.vue";
import Language from "~/components/index/Language.vue";
import PricingSection from "~/components/index/PricingSection.vue";
import ReviewSection from "~/components/index/ReviewSection.vue";
import FAQSection from "~/components/index/FAQSection.vue";
import TryNowBottom from "~/components/index/TryNowBottom.vue";
const localePath = useLocalePath();
const router = useRouter();
const { $mitt } = useNuxtApp();

const scrollIntoView = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const signup = () => {
  router.push({
    path: localePath("/user/signup")
  });
};
onMounted(() => {
  $mitt.on("signup", signup);
});
onUnmounted(() => {
  // 在组件卸载时移除事件监听
  $mitt.off("signup", signup);
});
</script>

<style scoped lang="scss"></style>
