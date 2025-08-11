<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo></user-only-logo>
    <user-go-back path="/user/login">
      {{ $i("log_in") }}
    </user-go-back>
    <!-- 主体内容 -->
    <div class="mb-10p flex flex-1 flex-col items-center justify-center">
      <div class="flex w-full max-w-[35rem] flex-col items-center">
        <h1 class="mb-[3.125rem] text-center text-[1.875rem] text-black">
          {{ $i("resetYourPassword") }}
        </h1>
        <!-- 邮箱和密码 -->
        <el-input
          v-model="email"
          :class="{ 'input-error': emailTip }"
          class="sys-input h-formEl !w-[20rem]"
          :placeholder="$i('emailAddress')"
          :prefix-icon="Message"
        />
        <span
          class="mt-1 h-[1rem] w-[20rem] text-start text-xs text-subColor-normal"
        >
          {{ emailTip }}
        </span>
        <!-- 登录按钮 -->
        <el-button
          @click="submit()"
          :loading="submitLoading"
          class="sys-btn mb-[2.25rem] mt-[1.5rem] !h-formEl w-[20rem] !rounded-btn text-[1.1rem] font-bold"
          type="primary"
          :disabled="!email"
        >
          {{ $i("sendCode") }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// 这里可以引入Element Plus的相关内容
import { Message } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
import { useI18nModule } from "~/utils/i18n";
import { useEmailStore } from "~/stores/useUserStore";
const eamilStore = useEmailStore();
eamilStore.setEmail("");

const $i = useI18nModule("IdentityInfoManage");

let email = ref("");
const emailTip = ref("");

// 邮箱格式校验正则
const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const loginDisabled = computed(() => {
  return !emailReg.test(email.value);
});
const router = useRouter();
// 导入 localePath 函数用于生成带语言前缀的路径
const localePath = useLocalePath();
const submitLoading = ref(false);
const submit = async () => {
  emailTip.value = "";
  if (!emailReg.test(email.value)) {
    emailTip.value = $i("invalidEmail");
    return;
  }
  if (submitLoading.value) {
    return;
  }
  try {
    submitLoading.value = true;
    const { userApi } = await import("~/api/user");
    const res = await userApi.userExist({ email: email.value });
    submitLoading.value = false;
    if (res.data) {
      // 用户已存在
      eamilStore.setEmail(email.value);
      eamilStore.setSendCodeFlag(true);
      setTimeout(() => {
        router.push(localePath("/user/setPassword?type=reset"));
      }, 300);
    } else {
      // 不存在
      emailTip.value = $i("accountNotExists"); // 用户不存在
    }
  } catch (error) {
    submitLoading.value = false;
    // code 文档 https://tanmarket.feishu.cn/docx/T41hdkfbLo4C28xnBtLcRqO7nLc
    emailTip.value = error?.message;
  }
};
</script>

<style scoped lang="scss"></style>
