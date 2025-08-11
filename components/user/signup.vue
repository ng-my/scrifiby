<template>
  <!-- 主体内容 -->
  <div
    class="mb-10p flex flex-1 flex-col items-center justify-center"
    v-loading="loadingFrist"
  >
    <div class="flex w-full flex-col items-center">
      <h1 class="mb-[0.25rem] px-[1rem] text-center text-[1.875rem] text-black">
        {{ $i(comTitle) }}
      </h1>
      <span
        class="mb-[2.875rem] px-[1rem] text-center text-[1rem]"
        v-if="isSignupDes"
      >
        {{ $i("SignupDes") }}
      </span>
      <!-- Google登录 -->
      <googleAuthBtn>
        {{ $i("SignupGoogle") }}
      </googleAuthBtn>
      <!-- 分割线 -->
      <div
        class="mb-[1.875rem] mt-[2.5rem] flex w-full items-center"
        :class="source === 'home' ? 'max-w-[26rem]' : 'max-w-[35rem]'"
      >
        <div class="flex-grow border-t border-borderColor"></div>
        <span class="mx-4 flex-shrink text-sm text-black">
          {{ $i("or") }}
        </span>
        <div class="flex-grow border-t border-borderColor"></div>
      </div>
      <!-- 邮箱 -->
      <!-- <el-input
        v-model="email"
        :class="{ 'input-error': emailTip }"
        class="sys-input h-formEl !w-[20rem]"
        :placeholder="$i('emailAddress')"
        :prefix-icon="Message"
        @keyup.enter="signup()"
      /> -->
      <el-input
        v-model="email"
        :class="{ 'input-error': emailTip }"
        class="sys-input h-formEl !w-[20rem]"
        :placeholder="$i('emailAddress')"
        @keyup.enter="signup()"
      >
        <template #prefix>
          <span class="iconfont icon-youjian text-[1.125rem] text-black"></span>
        </template>
      </el-input>

      <span
        class="mt-[0.25rem] h-[1rem] w-[20rem] text-start text-[0.75rem] text-subColor-normal"
      >
        {{ emailTip }}
      </span>
      <!-- 登录按钮 -->
      <el-button
        @click="signup()"
        :loading="signupLoading"
        :disabled="!email"
        class="sys-btn mb-[2.25rem] mt-[1.5rem] !h-formEl w-[20rem] !rounded-btn text-[1.1rem] font-bold"
        type="primary"
      >
        {{ $i(btnText) }}
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
    <user-not-online-dialog v-model="notOnlineVisible"></user-not-online-dialog>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
// 这里可以引入Element Plus的相关内容
import { Message } from "@element-plus/icons-vue";
import googleAuthBtn from "./googleAuthBtn.vue";
import { useI18nModule } from "~/utils/i18n";
import { ref, watch } from "vue";
import { useEmailStore } from "~/stores/useUserStore";
const { comTitle, btnText, isLogin } = defineProps({
  comTitle: {
    type: String,
    default: "SignupTitle"
  },
  btnText: {
    type: String,
    default: "SignupBtn"
  },
  source: {
    type: String,
    default: ""
  },
  isLogin: {
    type: Boolean,
    default: true
  },
  isSignupDes: {
    type: Boolean,
    default: true
  }
});

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
const route = useRoute();
const signupLoading = ref(false);
const loadingFrist = ref(true);
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

      if (isLogin) {
        setTimeout(() => {
          router.push(localePath("/user/setPassword"));
        }, 300);
      } else {
        setTimeout(() => {
          router.push({
            path: localePath("/user/setPassword"),
            query: { type: "noLogin", path: route.fullPath }
          });
        }, 300);
      }
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
onMounted(() => {
  loadingFrist.value = false;
});
</script>

<style scoped lang="scss"></style>
