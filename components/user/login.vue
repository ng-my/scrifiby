<template>
  <!-- 主体内容 -->
  <div
    class="mb-10p flex flex-1 flex-col items-center justify-center"
    v-loading="loadingFrist"
  >
    <div class="flex w-full flex-col items-center">
      <h1
        class="mb-[3.125rem] px-[1rem] text-center text-[1.875rem] text-black"
      >
        {{ $i("log_in") }}
      </h1>
      <!-- Google登录 -->
      <googleAuthBtn>
        {{ $i("LoginGoogle") }}
      </googleAuthBtn>
      <!-- 分割线 -->
      <div
        class="mb-[1.875rem] mt-[2.5rem] flex w-full max-w-[35rem] items-center"
      >
        <div class="flex-grow border-t border-borderColor"></div>
        <span class="mx-4 flex-shrink text-black">
          {{ $i("or") }}
        </span>
        <div class="flex-grow border-t border-borderColor"></div>
      </div>
      <!-- 邮箱和密码 -->
      <!-- <el-input
        
      /> -->
      <el-input
        v-model="email"
        class="sys-input h-formEl !w-[20rem]"
        :class="{ 'input-error': emailTip }"
        :placeholder="$t('AccountSettingsPage.email')"
        @keyup.enter="login()"
      >
        <template #prefix>
          <span class="iconfont icon-youjian text-[1.125rem] text-black"></span>
        </template>
      </el-input>
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
        :type="showPwd ? 'text' : 'password'"
        maxlength="20"
        class="sys-input mt-[0.875rem] h-formEl !w-[20rem]"
        :placeholder="$i('password')"
        @keyup.enter="login()"
      >
        <template #prefix>
          <span class="iconfont icon-lock text-[1.125rem] text-black"></span>
        </template>
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
        @click="login()"
        :loading="loginLoading"
        class="sys-btn mb-[2.25rem] mt-[1.5rem] !h-formEl w-[20rem] !rounded-btn text-[1.1rem] font-bold"
        type="primary"
        :disabled="loginDisabled"
      >
        {{ $i("LoginBtn") }}
      </el-button>
      <!-- 忘记密码和注册，两行显示，且都带下划线 -->
      <div class="mb-[0.75rem] flex w-[20rem] flex-col items-center text-black">
        <router-link
          :to="localePath('/user/resetPassword')"
          class="mb-[0.5rem] underline hover:text-mainColor-900"
        >
          {{ $i("forgotPassword") }}
        </router-link>
        <!--          <span-->
        <!--            class="mb-[0.5rem] cursor-pointer underline hover:text-mainColor-900"-->
        <!--            @click="handleNotOnline"-->
        <!--          >-->
        <!--            {{ $i("forgotPassword") }}</span-->
        <!--          >-->

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
    <user-not-online-dialog v-model="notOnlineVisible"></user-not-online-dialog>
    <user-visitor-dialog v-model="visitorVisble"></user-visitor-dialog>
  </div>
</template>

<script setup>
// 这里可以引入Element Plus的相关内容
import { Message, Lock, View, Hide } from "@element-plus/icons-vue";
import googleAuthBtn from "./googleAuthBtn.vue";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useI18nModule } from "~/utils/i18n";
import { Msg } from "~/utils/tools";
import { useUserStore } from "~/stores/useUserStore";
import { useSubscriptionStore } from "~/stores/useSubscriptionStore.js";
const userStore = useUserStore();

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
const route = useRoute();
// 系统登录
const loginLoading = ref(false);
const loadingFrist = ref(true);

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
  const subscriptionStore = useSubscriptionStore();
  subscriptionStore.clearSubscriptionDetail();

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
      Msg({
        message: "登录成功",
        type: "error"
      });
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
const visitorVisble = ref(false);
const handleNotOnline = () => {
  notOnlineVisible.value = true;
};
const userNameEmail = computed(() => {
  try {
    return userStore.userInfo &&
      typeof userStore.userInfo === "object" &&
      "userInfoVO" in userStore.userInfo
      ? userStore.userInfo.userInfoVO?.email || ""
      : "";
  } catch (e) {
    return "";
  }
});
onMounted(async () => {
  loadingFrist.value = false;
  const type = route.query.type;
  if (
    typeof type === "string" &&
    type &&
    type === "success" &&
    !userNameEmail.value
  ) {
    visitorVisble.value = true;
  }
});
</script>

<style scoped lang="scss"></style>
