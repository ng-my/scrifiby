<template>
  <!-- 协议 -->
  <div class="px-[1rem] text-center text-fontColor">
    <i18n-t keypath="IdentityInfoManage.agreeTerm.agree" tag="span">
      <template #proName> Scribify</template>
      <template #terms>
        <router-link
          :to="localePath('/user/terms')"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-mainColor-900"
        >
          {{ t("IdentityInfoManage.agreeTerm.terms") }}
        </router-link>
      </template>
      <template #policy>
        <router-link
          :to="localePath('/user/privacy')"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-mainColor-900"
        >
          {{ t("IdentityInfoManage.agreeTerm.policy") }}
        </router-link>
      </template>
    </i18n-t>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
// 导入 localePath 函数用于生成带语言前缀的路径
const localePath = useLocalePath();

const { t } = useI18n();
</script>

<style scoped></style>
