import { useErrorReporting } from "~/utils/fsReport";
const { reportSystemError } = useErrorReporting();
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    window.addEventListener(
      "error",
      (event) => {
        // 这里可以上报错误或自定义处理
        let el = event?.srcElement;
        let obj = {
          资源加载失败: JSON.stringify(event),
          "event.srcElement.baseURI": JSON.stringify(el?.baseURI),
          "event.srcElement.tagName": JSON.stringify(el?.tagName),
          "event.srcElement.outerHTML": JSON.stringify(el?.outerHTML)
        };
        console.error("资源加载失败:", event, obj);
        if (el?.src === "https://accounts.google.com/gsi/client") {
          return; // google 登录脚本加载错误，不上报。开代理后解决
        }
        reportSystemError(obj);
      },
      true
    ); // 第三个参数 true 表示捕获阶段，可以捕获资源加载错误

    window.addEventListener("unhandledrejection", (event) => {
      // 处理未捕获的Promise错误
      let el = event?.srcElement;
      let obj = {
        未捕获的Promise错误: JSON.stringify(event),
        "event.srcElement.baseURI": JSON.stringify(el?.baseURI),
        "event.srcElement.tagName": JSON.stringify(el?.tagName),
        "event.srcElement.outerHTML": JSON.stringify(el?.outerHTML)
      };
      console.error("未捕获的Promise错误:", event, obj);
      reportSystemError(obj);
    });
  }
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    // 这里可以上报错误
    reportSystemError({
      Vue错误err: JSON.stringify(err),
      Vue错误info: JSON.stringify(info)
    });
    console.error("Vue错误:", err, info);
  };
});
