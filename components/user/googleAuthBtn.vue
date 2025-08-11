<template>
  <!-- Google登录 -->
  <el-button
    @click="oauthSignUp"
    class="google-btn flex !h-formEl w-[20rem] items-center justify-center !rounded-btn"
    type="primary"
  >
    <el-image
      src="/assets/google.svg"
      alt="Google"
      class="me-[0.75rem] h-[1.25rem] w-[1.25rem]"
    ></el-image>
    <span class="text-black">
      <slot>
        {{ $t("IdentityInfoManage.loginByGoogle") }}
      </slot>
    </span>
  </el-button>
</template>

<script setup lang="ts">
/* googleAuthBen 组件 */
import { injectGoogleScript, oauthSignUp } from "~/utils/googleOAuth";
injectGoogleScript(useHead);
</script>

<style scoped>
.google-btn.el-button--primary {
  --el-button-outline-color: #e7e7e7;
  --el-button-bg-color: #ffffff;
  --el-button-border-color: #e7e7e7;
  --el-button-hover-bg-color: #ececec;
  --el-button-hover-border-color: #e7e7e7;
  --el-button-active-bg-color: #ececec;
  --el-button-active-border-color: #e7e7e7;
}
</style>
