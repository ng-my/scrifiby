<template>
  <el-config-provider
    :locale="localLang"
    :dir="isRtl ? 'rtl' : 'ltr'"
    :rtl="isRtl"
  >
    <HeadNavbar v-if="headerShow"></HeadNavbar>
    <NuxtPage />

    <client-only>
      <!--  录音  -->
      <record-wrap />
      <!--  文件上传  -->
      <upload />
      <!--  转录异步导出  -->
      <export />
    </client-only>
  </el-config-provider>
</template>

<script setup lang="ts">
import "core-js";
import { useI18n } from "#imports";
import { ElConfigProvider } from "element-plus";
import { ref, computed, watchEffect } from "vue";
import { useScrollTitle } from "./utils/useScrollTitle";
import { message as en_US } from "~/i18n/lang/en-US"; // 英语（美国）
import { runI18nCheck } from "~/i18n/check.js";
useScrollTitle();

const route = useRoute();
const { locale, locales, setLocaleMessage } = useI18n();
const activeLanguage = useState("locale", () => locale.value);

try {
  let localeLangs: any[] = [];
  await Promise.all(
    locales.value.map(async (item) => {
      try {
        const messages = await import(`~/i18n/lang/${item.code}.ts`);
        setLocaleMessage(item.code, messages.message);
        localeLangs.push({
          code: item.code,
          name: item.name,
          file: messages.message
        });
      } catch (error) {
        console.error(
          `Failed to load locale messages for ${item.code}:`,
          error
        );
      }
    })
  );
  runI18nCheck(en_US, localeLangs);
} catch (error) {
  console.error("Error loading locale messages:", error);
}

// 1. 动态import映射
const langImportMap: Record<string, () => Promise<any>> = {
  "en-US": () => import("element-plus/es/locale/lang/en"),
  "es-ES": () => import("element-plus/es/locale/lang/es"),
  "it-IT": () => import("element-plus/es/locale/lang/it"),
  "fr-FR": () => import("element-plus/es/locale/lang/fr"),
  "de-DE": () => import("element-plus/es/locale/lang/de"),
  "zh-CN": () => import("element-plus/es/locale/lang/zh-cn"),
  "zh-TW": () => import("element-plus/es/locale/lang/zh-tw"),
  "ja-JP": () => import("element-plus/es/locale/lang/ja"),
  "ko-KR": () => import("element-plus/es/locale/lang/ko"),
  "nl-NL": () => import("element-plus/es/locale/lang/nl"),
  "da-DK": () => import("element-plus/es/locale/lang/da"),
  "hu-HU": () => import("element-plus/es/locale/lang/hu"),
  "no-NO": () => import("element-plus/es/locale/lang/no"),
  "pt-PT": () => import("element-plus/es/locale/lang/pt"),
  "fi-FI": () => import("element-plus/es/locale/lang/fi"),
  "sv-SE": () => import("element-plus/es/locale/lang/sv"),
  "ru-RU": () => import("element-plus/es/locale/lang/ru"),
  "tr-TR": () => import("element-plus/es/locale/lang/tr"),
  "el-GR": () => import("element-plus/es/locale/lang/el"),
  "uk-UA": () => import("element-plus/es/locale/lang/uk"),
  "he-IL": () => import("element-plus/es/locale/lang/he"),
  "ar-SA": () => import("element-plus/es/locale/lang/ar")
};

// 2. 当前语言包
const localLang = ref();
const isRtl = computed(() => ["he-IL", "ar-SA"].includes(activeLanguage.value));

// 3. 监听语言变化，懒加载语言包
watchEffect(async () => {
  const langKey = activeLanguage.value;
  if (langImportMap[langKey]) {
    const mod = await langImportMap[langKey]();
    localLang.value = mod.default;
  } else {
    localLang.value = undefined;
  }
});

// 其它逻辑保持不变
const headerShow = ref(false);
if (process.client) {
  headerShow.value = !!(
    process.env.NODE_ENV === "development" ||
    window.localStorage.getItem("zzTest")
  );
  const config = useRuntimeConfig();
  console.log("config.public", config.public);
  console.log("process.env", process.env);
  if (window.localStorage.getItem("notShowHead")) {
    headerShow.value = false;
  }
}
onMounted(async () => {
  if (route.meta.requireAuth) {
    const subscriptionStore = useSubscriptionStore();
    await subscriptionStore.getStatusUserId();
  }
});
</script>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
