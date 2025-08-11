<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo></user-only-logo>
    <!-- 主体内容 -->
    <div class="mb-10p flex flex-1 flex-col items-center justify-center">
      <div class="flex w-full max-w-[35rem] flex-col items-center">
        <h1 class="mb-[3.125rem] text-[1.875rem] text-black">
          {{ $i("sign_up") }}
        </h1>
        <!-- Google登录 -->
        <el-button
          @click="handleNotOnline"
          class="flex !h-formEl w-[20rem] items-center justify-center !rounded-btn !bg-white"
          type="primary"
          plain
        >
          <el-image
            src="/assets/google.svg"
            alt="Google"
            class="me-[0.75rem] h-[1.25rem] w-[1.25rem]"
          ></el-image>
          <span class="text-black">
            {{ $i("loginByGoogle") }}
          </span>
        </el-button>
        <!-- 分割线 -->
        <div class="mb-[1.875rem] mt-[2.5rem] flex w-full items-center">
          <div class="flex-grow border-t border-borderColor"></div>
          <span class="mx-4 flex-shrink text-sm text-black">
            {{ $i("or") }}
          </span>
          <div class="flex-grow border-t border-borderColor"></div>
        </div>
        <!-- 邮箱 -->
        <el-input
          v-model="email"
          :class="{ 'input-error': emailTip }"
          class="h-formEl !w-[20rem] rounded-[2rem]"
          :placeholder="$i('emailAddress')"
          :prefix-icon="Message"
        />
        <span
          class="mt-[0.25rem] h-[1rem] w-[20rem] text-start text-[0.75rem] text-subColor-normal"
        >
          {{ emailTip }}
        </span>
        <!-- 登录按钮 -->
        <el-button
          @click="handleNotOnline"
          :loading="signupLoading"
          color="#3470FF"
          :disabled="!email"
          class="mb-[2.25rem] mt-[1.5rem] !h-formEl w-[20rem] !rounded-btn text-[1.1rem] font-bold"
          type="primary"
        >
          {{ $i("createAccount") }}
        </el-button>
        <!-- 忘记密码和注册，两行显示，且都带下划线 -->
        <div class="mb-[0.75rem] flex flex-col items-center text-black">
          <div>
            <span>{{ $i("accountExists") }} </span>
            <router-link
              :to="localePath('/user/login')"
              class="text-mainColor-900 underline"
            >
              {{ $i("log_In") }}
            </router-link>
          </div>
        </div>
        <!-- 协议 -->
        <user-agree-term></user-agree-term>
      </div>
    </div>
    <user-not-online-dialog v-model="notOnlineVisible"></user-not-online-dialog>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// 这里可以引入Element Plus的相关内容
import { Message, Lock } from "@element-plus/icons-vue";
import { injectGoogleScript, oauthSignUp } from "~/utils/googleOAuth";
import { useI18nModule } from "~/utils/i18n";
import { ref, watch } from "vue";
import { useEmailStore } from "~/stores/useUserStore";
import { useTouch } from "~/utils/useTouch.js";

injectGoogleScript(useHead);
// 导入 localePath 函数用于生成带语言前缀的路径
const localePath = useLocalePath();

const $i = useI18nModule("IdentityInfoManage");

const eamilStore = useEmailStore();
eamilStore.setEmail("");

let email = ref("");
// let emailIsOk = ref(true)
let emailTip = ref("");

// 邮箱格式校验正则
const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
watch(email, (val) => {
  if (emailTip.value) {
    emailTip.value = "";
  }
  // emailIsOk.value = !emailReg.test(val)
});

const router = useRouter();
const signupLoading = ref(false);
const signup = async () => {
  emailTip.value = "";
  if (!emailReg.test(email.value)) {
    emailTip.value = $i("invalidEmail");
    return;
  }
  if (signupLoading.value) {
    return;
  }
  try {
    signupLoading.value = true;
    const { userApi } = await import("~/api/user");
    const res = await userApi.userExist({ email: email.value });
    signupLoading.value = false;
    if (res.data) {
      // 用户已存在
      emailTip.value = $i("logInDirectly");
    } else {
      // 不存在
      eamilStore.setEmail(email.value);
      eamilStore.setSendCodeFlag(true);
      setTimeout(() => {
        router.push(localePath("/user/setPassword"));
      }, 300);
    }
  } catch (error) {
    signupLoading.value = false;
    // code 文档 https://tanmarket.feishu.cn/docx/T41hdkfbLo4C28xnBtLcRqO7nLc
    emailTip.value = error?.message;
  }
};
const notOnlineVisible = ref(false);
const handleNotOnline = () => {
  notOnlineVisible.value = true;
};
</script>

<style scoped lang="scss">
/* 可根据需要补充自定义样式 */
:deep .input-error.el-input {
  --el-input-border-color: var(--subColor-normal);
  --el-input-hover-border-color: var(--subColor-normal);
  --el-input-focus-border-color: var(--subColor-normal);
  --el-input-clear-hover-color: var(--subColor-normal);
}
</style>
