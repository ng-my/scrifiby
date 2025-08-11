import { ofetch } from 'ofetch'
import { useErrorReporting } from '~/utils/fsReport';
const { reportSystemError } = useErrorReporting();
const config = useRuntimeConfig();
const baseURL = config.public.baseUrl as string
function goToLogin() {
  if (process.client) {
    const userStore = useUserStore();
    const localePath = useLocalePath();
    userStore.setUserInfo("");
    setTimeout(() => {
      navigateTo(localePath("/user/login"))
    }, 50)
  }
}
// 创建请求实例
const request = ofetch.create({
  // 基础配置
  baseURL,
  // 请求拦截
  onRequest({ options }) {
    // 在这里可以添加token等认证信息
    let language = useNuxtApp().$i18n?.locale?.value || 'en-US'
    const offset = -new Date().getTimezoneOffset() / 60;
    const utcOffset = `UTC${offset >= 0 ? '+' : ''}${offset}:00`;
    const userStore = useUserStore();
    let token = '';
    if (userStore.userInfo && typeof userStore.userInfo === 'object' && 'token' in userStore.userInfo) {
      token = (userStore.userInfo as any).token;
    }
    const headers = new Headers(options.headers)
    const XLanguage = headers.get('X-Language'); // 接口已经传了【X-Language】
    if (!XLanguage) {
      headers.set('X-Language', `${language}`) // 当前系统语言
    }
    headers.set('X-Time-Zone', `${utcOffset}`) // UTC偏移量
    const Auth = headers.get('Authorization'); // 登录接口已经传了【Authorization】
    if (token && !Auth) {
      headers.set('Authorization', `Bearer ${token}`)
      options.headers = headers
    } else {
      options.headers = headers
    }

  },
  // 响应拦截
  onResponse({ response }) {
    let data = response._data || {}
    if (data?.code) {
      reportSystemError(response, false); // 报错上传
    }
    // 在这里处理响应数据
    return response._data
  },
  // 错误处理
  onResponseError({ response }) {
    let data = response._data || {}
    if ([401].includes(data?.code)) {
      goToLogin()
      return;
    }
    reportSystemError(response, false); // 报错上传
    ElMessage.error(data?.message || data?.code || `${data?.error}【${data?.status}】`)
    goToLogin()
    return Promise.reject(response._data)
  }
})

export default request 