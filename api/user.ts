import request from "~/utils/request";
import Utils from "~/utils/tools";

// 用户相关接口
export const userApi = {
  // google登录
  loginGoogle(body: { idToken: string }) {
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/login/google", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            res.data.userInfoVO.expirationTimeFormat = Utils.timeUTCToLocal(
              res.data.userInfoVO.expirationTime
            );
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 系统登录
  sysLoginUser(body: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      console.log(
        "sysLoginUser-Authorization",
        Utils.getAuthorization(body.email, body.password)
      );
      return request("/wapi/userServer/login/user", {
        method: "POST",
        headers: {
          Authorization: Utils.getAuthorization(body.email, body.password)
        }
      })
        .then((res) => {
          if (res.code === 0) {
            res.data.userInfoVO.expirationTimeFormat = Utils.timeUTCToLocal(
              res.data.userInfoVO.expirationTime
            );
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 系统注册
  sysSignupUser(body: { email: string; password: string; captcha: string }) {
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/enroll", {
        method: "POST",
        headers: {
          Authorization: Utils.getAuthorization(body.email, body.password)
        },
        body: { captcha: body.captcha }
      })
        .then((res) => {
          if (res.code === 0) {
            res.data.userInfoVO.expirationTimeFormat = Utils.timeUTCToLocal(
              res.data.userInfoVO.expirationTime
            );
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 重置密码
  resetPassword(body: { email: string; password: string; captcha: string }) {
    body.password = Utils.EncryptRSA(body.password) as string;
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/reset/password", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            res.data.userInfoVO.expirationTimeFormat = Utils.timeUTCToLocal(
              res.data.userInfoVO.expirationTime
            );
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 忘记密码
  forgetPassword(body: { email: string; password: string; captcha: string }) {
    body.password = Utils.EncryptRSA(body.password) as string;
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/forget/password", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            res.data.userInfoVO.expirationTimeFormat = Utils.timeUTCToLocal(
              res.data.userInfoVO.expirationTime
            );
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 检查用户是否存在
  userExist(body: { email: string }) {
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/user/exist", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 发送验证码邮件(不需要token) captchaType 0注册验证码，1忘记密码
  sendCaptchaWithoutUser(body: { email: string; captchaType: 0 }) {
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/send/captcha/withoutUser", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 发送验证码邮件(重置密码 需要token) captchaType 1重置密码验证码
  sendCaptcha(body: { email: string; captchaType: 1 }) {
    body.captchaType = 1;
    return new Promise((resolve, reject) => {
      return request("/wapi/userServer/send/captcha", {
        method: "POST",
        body
      })
        .then((res) => {
          if (res.code === 0) {
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // 首次进入
  async firstEnter() {
    try {
      const res = await request<any>("/wapi/userServer/first/login", {
        method: "GET"
      });
      if (res.code === 0) {
        return res.data;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  },

  // 完成引导
  async completeGuide() {
    try {
      const res = await request<any>("/wapi/userServer/user/tutorial", {
        method: "POST",
        body: {
          beginnersTutorial: false
        }
      });
      if (res.code === 0) {
        return true;
      }
      throw new Error(res as any);
    } catch (e) {
      throw new Error(e as any);
    }
  }
};
