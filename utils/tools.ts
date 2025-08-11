declare global {
  interface Window {
    CryptoJS: any;
  }
}
const CryptoJS = (window as any)?.CryptoJS;
const JSEncrypt = (window as any)?.JSEncrypt;
const EncryptRSAPublicKey = [
  "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxf6qmWmIgdttnhWPUXTbqKKXeoIn",
  "B5otnjB7elwAESf4m7rKKlnUC4",
  "Gf+LU5mFJ8zDqN5PhcucKj9i3FIG3HBx6j6vt8gR+m2sIEkintIXOGJY7PpN8pDzpE4N44fqgxiTKKefH9D8uGDGAwf9maL2gYXKW5BMuShWYSItjh9gnhPRW+xhCuLm1ERzJJVnPR+WM4NHw56c2cnRCwv7zGkGCm",
  "8GC",
  "5GT00y1ZCZilV6WBY4Kw2",
  "TehMhK0LbtL9ESe83e7ZuZhEcs8uHhwip3FrhHf8jPkRrxj4C4",
  "CDy3641RTEaEsCJxBocDwm2QYkNq0Z7hbrTqFB7dVKtuGQIDAQAB"
].join("/");

const Utils = {
  EncryptRSA(str: string) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(EncryptRSAPublicKey);
    return encrypt.encrypt(str);
  },
  getAuthorization(username: string, password: string) {
    let str = `${username}:uKE8e1${password}`;
    return "rsa " + Utils.EncryptRSA(str);
  },
  timeUTCToLocal(utcTime: string, format: string = "YYYY-MM-DD HH:mm:ss") {
    if (!utcTime) {
      return utcTime;
    }
    const dayjs = useDayjs();
    // 假设后端返回的 UTC 时间字符串
    // const utcTime = '2024-06-21T08:00:00Z'
    // 输出 localDateTime为 2024-06-21 16:00:00 //（北京时间，东八区）

    // 1. 解析为 dayjs 对象（此时是 UTC 时间对象）
    const utcObj = dayjs.utc(utcTime);
    // 2. 转成本地时间对象
    const localObj = utcObj.local();
    // 3. 转成本地时间 // 2024-06-21 16:00:00
    const localDateTime = localObj.format(format);
    return localDateTime;
  },
  getUTCTime() {
    // 获取当前 UTC 时间
    const dayjs = useDayjs();
    const localObj = dayjs();
    const utcObj = localObj.utc();
    const utcTime = utcObj.format(); // 以 UTC 格式输出
    return utcTime;
  },
  Decrypt(content: string) {
    const config = {
      key: ["4", "%Y", "kW!", "@g5L", "Gcf", "9Ut"].join("")
    };
    try {
      return CryptoJS?.Decrypt(content, config);
    } catch (e) {
      return content;
    }
  },
  isMobile() {
    return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
};

export default Utils;
