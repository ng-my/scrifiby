import { useGuestUserStore } from "~/stores/useUserStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();

  if (process.client && from.name?.includes("index")) {
    // todo 官网没有多语言，但是要英语显示，2边页面切换会出问题，这里替换语言包
    const i18n = nuxtApp.$i18n;
    const { message } = await import(`~/i18n/lang/${i18n.locale.value}.ts`);
    let isListener = true;

    nuxtApp.hook("page:finish", () => {
      if (i18n && isListener) {
        isListener = false;
        i18n.setLocaleMessage(i18n.locale.value, message);
      }
    });
  }

  // 游客登录后设置登录信息，测试强烈要求和竞品一致，需要在跳转home页面才算游客登录成功
  if (
    process.client &&
    to.name?.includes("home") &&
    from.name?.includes("index")
  ) {
    const { setUserInfo } = useUserStore();
    const { tmpUserInfo } = storeToRefs(useGuestUserStore());
    const { setTmpUserInfo } = useGuestUserStore();
    let isListener = true;

    nuxtApp.hook("page:finish", () => {
      const userInfoCookie = useCookie("userInfo");
      if ((tmpUserInfo.value || userInfoCookie.value) && isListener) {
        isListener = false;
        if (tmpUserInfo.value || userInfoCookie.value) {
          setUserInfo(tmpUserInfo.value || userInfoCookie.value);
        }
        setTmpUserInfo("");
        userInfoCookie.value = "";
      }
    });
  }
});
