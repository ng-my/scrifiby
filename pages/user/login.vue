<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo></user-only-logo>
    <!-- 主体内容 -->
    <div class="mb-10p flex flex-1 flex-col items-center justify-center">
      <div class="flex w-full max-w-[35rem] flex-col items-center">
        <h1 class="mb-[3.125rem] text-[1.875rem] text-black">
          {{ $i("log_in") }}
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
          <span class="mx-4 flex-shrink text-black">
            {{ $i("or") }}
          </span>
          <div class="flex-grow border-t border-borderColor"></div>
        </div>
        <!-- 邮箱和密码 -->
        <el-input
          v-model="email"
          class="h-formEl !w-[20rem] rounded-[2rem]"
          :class="{ 'input-error': emailTip }"
          :placeholder="$i('emailAddress')"
          :prefix-icon="Message"
        />
        <span
          class="mt-1 h-[1rem] w-[20rem] text-start text-xs text-subColor-normal"
        >
          {{ emailTip }}
        </span>
        <el-input
          ref="passwordInput"
          v-model="password"
          @input="onPasswordInput"
          :class="{ 'input-error': passwordTip }"
          :prefix-icon="Lock"
          :type="showPwd ? 'text' : 'password'"
          maxlength="20"
          class="mt-[0.875rem] h-formEl !w-[20rem] rounded-[2rem]"
          :placeholder="$i('password')"
        >
          <template #suffix>
            <el-icon @click="togglePwd" class="cursor-pointer">
              <component :is="showPwd ? View : Hide" />
            </el-icon>
          </template>
        </el-input>
        <span
          class="mt-1 h-[1rem] w-[20rem] text-start text-xs text-subColor-normal"
        >
          {{ passwordTip }}
        </span>
        <!-- 登录按钮 -->
        <el-button
          @click="handleNotOnline"
          :loading="loginLoading"
          color="#3470FF"
          class="mb-[2.25rem] mt-[1.5rem] !h-formEl w-[20rem] !rounded-btn text-[1.1rem] font-bold"
          type="primary"
          :disabled="loginDisabled"
        >
          {{ $i("login") }}
        </el-button>
        <!-- 忘记密码和注册，两行显示，且都带下划线 -->
        <div
          class="mb-[0.75rem] flex w-[20rem] flex-col items-center text-black"
        >
          <!--          <router-link-->
          <!--            :to="localePath('/user/resetPassword')"-->
          <!--            class="mb-[0.5rem] underline hover:text-blue-500"-->
          <!--          >-->
          <!--            {{ $i("forgotPassword") }}-->
          <!--          </router-link>-->
          <span
            class="mb-[0.5rem] cursor-pointer underline hover:text-blue-500"
            @click="handleNotOnline"
          >
            {{ $i("forgotPassword") }}</span
          >

          <div>
            <span>{{ $i("noAccount") }}</span>
            <router-link
              :to="localePath('/user/signup')"
              class="text-mainColor-900 underline"
            >
              {{ $i("sign_up") }}
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
// 这里可以引入Element Plus的相关内容
import { Message, Lock, View, Hide } from "@element-plus/icons-vue";
import { injectGoogleScript, oauthSignUp } from "~/utils/googleOAuth";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useI18nModule } from "~/utils/i18n";
import { useUserStore } from "~/stores/useUserStore";
import { useTouch } from "~/utils/useTouch.js";
const userStore = useUserStore();

injectGoogleScript(useHead);
// 导入 localePath 函数用于生成带语言前缀的路径
const localePath = useLocalePath();

// 导入 i18n 函数
const { t: $t } = useI18n();
const $i = useI18nModule("IdentityInfoManage");

const showPwd = ref(false);
let email = ref("");
let password = ref("");

// 使用计算属性来响应语言变化
const emailTip = ref("");
const passwordTip = ref("");

// 邮箱格式校验正则
const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const loginDisabled = computed(() => {
  return !email.value || !password.value;
  // return !emailReg.test(email.value) || password.value.length < 6
});

const router = useRouter();
// 系统登录
const loginLoading = ref(false);
const login = async () => {
  emailTip.value = "";
  passwordTip.value = "";
  if (!emailReg.test(email.value)) {
    emailTip.value = $i("invalidEmail");
    return;
  }
  if (password.value.length < 6) {
    passwordTip.value = $i("atLeastSix");
    return;
  }
  if (loginLoading.value) {
    return;
  }
  try {
    loginLoading.value = true;
    const { userApi } = await import("~/api/user");
    const response = await userApi.sysLoginUser({
      email: email.value,
      password: password.value
    });
    userStore.setUserInfo(response);
    loginLoading.value = false;
    router.push({
      path: localePath("/home")
    });
  } catch (error) {
    loginLoading.value = false;
    // code 目录 https://tanmarket.feishu.cn/docx/T41hdkfbLo4C28xnBtLcRqO7nLc
    if ([14000, 14003, 140012].includes(error.code)) {
      emailTip.value = error.message; // $i('accountNotExists')
    }
    if ([14002].includes(error.code)) {
      passwordTip.value = error.message; // $i('passwordError')
    }
    if ([14004, 14005].includes(error.code)) {
      ElMessage.error(error.message);
    }
  }
};

const passwordInput = ref(null);
function togglePwd() {
  showPwd.value = !showPwd.value;
  nextTick(() => {
    // 让光标到最后
    const inputEl = passwordInput.value?.input;
    if (inputEl) {
      setTimeout(() => {
        const len = inputEl.value.length;
        inputEl.setSelectionRange(len, len);
        inputEl.focus();
      }, 0);
    }
  });
}

function onPasswordInput(val) {
  // 过滤掉所有中文字符
  password.value = val.replace(/[\u4e00-\u9fa5]/g, "");
  password.value = val.replace(" ", "");
}
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
