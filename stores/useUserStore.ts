import { defineStore } from "pinia";
import { ref } from "vue";
import { useSubscriptionStore } from "~/stores/useSubscriptionStore";

export const useEmailStore = defineStore(
  "email",
  () => {
    const signupEmail = ref("");
    const sendCodeFlag = ref(false);
    const stroeCountdown = ref(60);

    function setEmail(newEmail: string) {
      signupEmail.value = newEmail;
    }
    function setSendCodeFlag(flag: boolean) {
      sendCodeFlag.value = flag;
    }
    function setCountdown(num: number) {
      stroeCountdown.value = num;
    }

    return {
      signupEmail,
      setEmail,
      sendCodeFlag,
      setSendCodeFlag,
      stroeCountdown,
      setCountdown
    };
  },
  {
    persist: true
  }
);

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref("");
    // 获取 email store 的实例
    const emailStore = useEmailStore();

    async function setUserInfo(user: any) {
      userInfo.value = user;
      if (user?.token) {
        localStorage.setItem("token", user.token);
        const token = useCookie("token", {
          default: () => null,
          maxAge: 60 * 60 * 24 * 7, // 7天
          secure: process.env.NODE_ENV !== "development",
          domain: undefined, // 不设置domain，使用当前域名
          sameSite: "lax" // ❗ 关键：从 'strict' 改为 'lax'
        });
        token.value = user.token; // 设置值
        const subscriptionStore = useSubscriptionStore();
        subscriptionStore.getStatusUserId();
        // 这里调用 setEmail 方法
        emailStore.setEmail(user.userInfoVO?.email || "");
      } else {
        localStorage.removeItem("token");
        const token = useCookie("token");
        token.value = "";
        emailStore.setEmail("");
      }
    }

    return { userInfo, setUserInfo };
  },
  {
    persist: true
  }
);
