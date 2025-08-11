<template>
  <!-- 主体内容 -->
  <div class="mb-10p flex flex-1 flex-col items-center justify-center">
    <!-- 顶部邮箱展示和标题 -->
    <div class="flex flex-col items-center justify-center pt-[3.5rem]">
      <h1 class="mb-[0.25rem] text-center text-[1.875rem] text-black">
        {{ pageType === "reset" ? $i("resetYourPassword") : $i("setPassword") }}
      </h1>
      <span class="mb-[1.5rem] text-[1rem]">{{ email }}</span>
    </div>
    <div class="flex w-full max-w-[20rem] flex-col items-center">
      <!-- 验证码输入框 -->
      <el-input
        v-model="code"
        :class="{ 'input-error': codeTip }"
        autocomplete="one-time-code"
        :prefix-icon="Message"
        class="inputEl-style mb-1 h-formEl !w-full rounded-btn"
        :placeholder="$i('code')"
      >
        <template #suffix>
          <el-button
            v-if="countdown === 0"
            @click="sendCode()"
            type="text"
            class="px-0 !text-mainColor-900"
          >
            {{ $i("resend") }}
          </el-button>
          <span v-else class="text-[0.95rem] text-gray-400">
            {{ $i("resend") }} {{ countdown }}s
          </span>
        </template>
      </el-input>
      <div
        v-if="codeTip"
        class="self-start text-start text-xs text-subColor-normal"
      >
        {{ codeTip }}
      </div>
      <span class="mb-3 mt-2 text-xs text-fontColor">
        {{ $i("codeToEmail") }}
      </span>
      <div v-if="!codeTip" class="h-4">
        <!-- 这里是为了占位 -->
      </div>
      <!-- 密码输入框 -->
      <el-input
        ref="passwordInput"
        v-model="password"
        @input="onPasswordInput"
        :class="{ 'input-error': passwordTip }"
        autocomplete="off"
        :prefix-icon="Lock"
        :type="showPwd ? 'text' : 'password'"
        maxlength="20"
        class="inputEl-style mb-1 h-formEl !w-full rounded-btn"
        :placeholder="$i('enterPassword')"
      >
        <template #suffix>
          <el-icon @click="togglePwd" class="cursor-pointer">
            <component :is="showPwd ? View : Hide" />
          </el-icon>
        </template>
      </el-input>
      <div
        v-if="passwordTip"
        class="self-start text-start text-xs text-subColor-normal"
      >
        {{ passwordTip }}
      </div>
      <div class="mb-6 flex h-[2rem] w-full items-center">
        <span class="me-4 text-xs"> {{ $i("passwordLeval") }}： </span>
        <div class="password-leve-wrap flex flex-1 items-center">
          <div class="password-leve-item">
            <div
              class="password-leve-line"
              :class="[passwordLevel >= 1 ? '!bg-subColor-normal' : '']"
            ></div>
            <div class="password-leve-msg">
              {{ $i("Weak") }}
            </div>
          </div>
          <div class="password-leve-item">
            <div
              class="password-leve-line"
              :class="[passwordLevel >= 2 ? 'medium-bg' : '']"
            ></div>
            <div class="password-leve-msg">
              {{ $i("Medium") }}
            </div>
          </div>
          <div class="password-leve-item">
            <div
              class="password-leve-line"
              :class="[passwordLevel >= 3 ? '!bg-thirdColor' : '']"
            ></div>
            <div class="password-leve-msg">
              {{ $i("Strong") }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="!passwordTip" class="h-4">
        <!-- 这里是为了占位 -->
      </div>
      <!-- 确认密码输入框 -->
      <el-input
        ref="confirmPwdInput"
        v-model="confirmPassword"
        @input="onConfirmPasswordInput"
        :class="{ 'input-error': confirmPasswordTip }"
        autocomplete="off"
        :prefix-icon="Lock"
        :type="showSecPwd ? 'text' : 'password'"
        maxlength="20"
        class="inputEl-style h-formEl !w-full rounded-btn"
        :placeholder="$i('confirmPassword')"
      >
        <template #suffix>
          <el-icon @click="toggleSecPwd" class="cursor-pointer">
            <component :is="showSecPwd ? View : Hide" />
          </el-icon>
        </template>
      </el-input>
      <span
        class="mb-[2rem] mt-1 h-[1rem] self-start text-start text-xs text-subColor-normal"
      >
        {{ confirmPasswordTip }}
      </span>
      <!-- 注册按钮 -->
      <el-button
        class="mb-[2.2rem] !h-formEl w-full !rounded-btn text-[1.1rem] font-bold"
        type="primary"
        color="#3470FF"
        @click="submit"
        :loading="submitLoading"
        :disabled="!canSubmit"
      >
        {{ pageType === "reset" ? $i("resetPassword") : $i("sign_up") }}
      </el-button>
      <!-- 协议 -->
      <user-agree-term v-if="agreeTerm"></user-agree-term>
    </div>
    <resetSuc v-model="showDialog" @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, defineEmits, nextTick } from "vue";
import { Lock, Message, View, Hide } from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { useI18nModule } from "~/utils/i18n";
import { useEmailStore } from "~/stores/useUserStore";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/useUserStore";
import resetSuc from "@/components/user/resetSuc.vue";

const userStore = useUserStore();

const $i = useI18nModule("IdentityInfoManage");
const showPwd = ref(false);
const showSecPwd = ref(false);

const route = useRoute();
const props = defineProps({
  pageSource: {
    type: String,
    default: ""
  },
  agreeTerm: {
    type: Boolean,
    default: true
  }
});
// 从 prop 取值，默认为设置密码【set】。reset表示重置密码
const pageType = props.pageSource || route.query.type || "set";
const router = useRouter();

const codeTip = ref(""); // 验证提示
const passwordTip = ref(""); // 密码提示
const confirmPasswordTip = ref(""); // 密码提示

// 假设邮箱通过路由或store传递
const eamilStore = useEmailStore();
const {
  signupEmail: email,
  sendCodeFlag,
  stroeCountdown
} = storeToRefs(eamilStore);

const code = ref("");
const password = ref("");
const confirmPassword = ref("");
const countdown = ref(0);
let timer = null;

onMounted(() => {
  if (sendCodeFlag.value) {
    eamilStore.setSendCodeFlag(false);
    sendCode();
  } else {
    if (stroeCountdown.value) {
      sendCode(stroeCountdown.value, false);
    }
  }
});
// 发送验证码
const sendCode = async (num = 60, sendRes = true) => {
  if (!email.value) {
    return;
  }
  codeTip.value = "";
  if (countdown.value > 0) return;
  countdown.value = num;
  timer = setInterval(() => {
    countdown.value--;
    eamilStore.setCountdown(countdown.value);
    if (countdown.value <= 0) {
      clearInterval(timer);
      timer = null;
      codeTip.value = "";
    }
  }, 1000);
  if (!sendRes) {
    return;
  }
  try {
    let captchaType = 0; // 0注册验证码，1重置密码验证码
    if (pageType === "set") {
      captchaType = 0;
    } else if (pageType === "reset") {
      captchaType = 1;
    }
    const { userApi } = await import("~/api/user");
    let res;
    if (props.pageSource === "reset") {
      // 账号设置的 重置密码
      res = await userApi.sendCaptcha({ email: email.value, captchaType });
    } else {
      // 注册、忘记密码
      res = await userApi.sendCaptchaWithoutUser({
        email: email.value,
        captchaType
      });
    }
  } catch (error) {
    countdown.value = 10;
    codeTip.value = error?.message || error?.code;
  }
};

// 密码强度判断
const passwordLevel = computed(() => {
  const pwd = password.value || "";
  if (pwd.length < 6) return 0;

  // 仅包含大写、仅小写、仅数字、仅特殊字符，且长度6-7
  const onlyUpper = /^[A-Z]+$/.test(pwd);
  const onlyLower = /^[a-z]+$/.test(pwd);
  const onlyDigit = /^\d+$/.test(pwd);
  const onlySpecial =
    /^[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~·！￥……（）——【】｛｝；：‘’“”，。《》、？｜~·]+$/.test(
      pwd
    );
  if (
    onlyUpper ||
    onlyLower ||
    onlyDigit ||
    onlySpecial ||
    (pwd.length >= 6 && pwd.length < 8)
  )
    return 1;

  // 至少包含1大写、1小写、1数字、1特殊字符，且长度>=8
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const hasDigit = /\d/.test(pwd);
  const hasSpecial =
    /[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~·！￥……（）——【】｛｝；：‘’“”，。《》、？｜~·]/.test(
      pwd
    );
  if (pwd.length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial)
    return 3;

  // 其他情况为2
  return 2;
});

// 表单校验
const canSubmit = computed(() => {
  return code.value && password.value && confirmPassword.value;
  // return code.value && password.value && confirmPassword.value && password.value === confirmPassword.value && passwordLevel.value >= 1
});

// 导入 localePath 函数用于生成带语言前缀的路径
const showDialog = ref(false); // 控制弹窗显示
const localePath = useLocalePath();

const submitLoading = ref(false);
const submit = async () => {
  codeTip.value = "";
  passwordTip.value = "";
  confirmPasswordTip.value = "";
  if (password.value.length < 6) {
    passwordTip.value = $i("atLeastSix");
    return;
  }
  if (password.value !== confirmPassword.value) {
    confirmPasswordTip.value = $i("passwordNotMatch");
    return;
  }
  if (submitLoading.value) {
    return;
  }
  try {
    submitLoading.value = true;
    const { userApi } = await import("~/api/user");
    const params = {
      email: email.value,
      password: password.value,
      captcha: code.value
    };
    let response;
    if (pageType === "set") {
      // 注册-设置密码直接登录
      response = await userApi.sysSignupUser(params);
    } else if (pageType === "reset") {
      // 忘记密码-重置密码，确认后登录
      if (props.pageSource === "reset") {
        // 账号设置的 重置密码
        response = await userApi.resetPassword(params);
      } else {
        // 忘记密码
        response = await userApi.forgetPassword(params);
      }
    }
    submitLoading.value = false;

    userStore.setUserInfo(response);
    if (pageType === "set") {
      // 注册-设置密码直接登录
      router.push({
        path: localePath("/home")
      });
    } else if (pageType === "reset") {
      // 忘记密码-重置密码，确认后登录
      showDialog.value = true;
    }
  } catch (error) {
    submitLoading.value = false;
    // code 文档 https://tanmarket.feishu.cn/docx/T41hdkfbLo4C28xnBtLcRqO7nLc
    const code = error.code;
    if ([14006, 14007].includes(code)) {
      // 验证码过期，验证码错误
      codeTip.value = error?.message;
    }
    if ([14008].includes(code)) {
      // 密码相同
      passwordTip.value = error?.message;
    } else {
      // ElMessage.error(error?.message || code || 'sysSignupUser error')
    }
  }
};

const emit = defineEmits(["change"]);
const onConfirm = () => {
  showDialog.value = false;
  router.push({
    path: localePath("/home")
  });
  // if (props.pageSource === 'reset') { // 账号设置的 重置密码
  //   // emit('confirm')
  // } else { // 忘记密码
  //   router.push({
  //     path: localePath("/home")
  //   })
  // }
};

function onPasswordInput(val) {
  // 过滤掉所有中文字符
  password.value = val.replace(/[\u4e00-\u9fa5]/g, "");
  password.value = val.replace(" ", "");
}
function onConfirmPasswordInput(val) {
  // 过滤掉所有中文字符
  confirmPassword.value = val.replace(/[\u4e00-\u9fa5]/g, "");
}

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

const confirmPwdInput = ref(null);
function toggleSecPwd() {
  showSecPwd.value = !showSecPwd.value;
  nextTick(() => {
    // 让光标到最后
    const inputEl = confirmPwdInput.value?.input;
    if (inputEl) {
      setTimeout(() => {
        const len = inputEl.value.length;
        inputEl.setSelectionRange(len, len);
        inputEl.focus();
      }, 0);
    }
  });
}

onBeforeUnmount(() => {});
</script>

<style scoped lang="scss">
:deep .input-error.el-input {
  --el-input-border-color: var(--subColor-normal);
  --el-input-hover-border-color: var(--subColor-normal);
  --el-input-focus-border-color: var(--subColor-normal);
  --el-input-clear-hover-color: var(--subColor-normal);
}

.medium-bg {
  background-color: #eab86a !important;
}

.password-leve-wrap {
  margin-top: 2rem;

  .password-leve-item {
    @apply me-4;

    .password-leve-line {
      @apply mb-2 h-[0.125rem] w-[3rem] rounded-btn;
      background-color: #e1e1e1;
    }

    .password-leve-msg {
      @apply w-[3rem] text-center text-xs;
    }
  }
}

.terms-privacy-wrap {
  width: 80vw;
}

.inputEl-style {
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px var(--mainColor-900) inset !important;
  }
}
</style>
