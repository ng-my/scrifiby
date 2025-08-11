import request from '~/utils/request'

// 用户相关接口
export const demoApi = {
  // 获取企业信息
  getCorpInfo(params: { corpid: string }) {
    return new Promise((resolve, reject) => {
      return request('/domainServer/domain_custom/get/by_corpid', {
        params
      }).then(res => {
        if (res.code === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取二维码信息
  qRCodeInfo(body: {}) {
    return new Promise((resolve, reject) => {
      return request('/domainServer/market-cloud/login/QRCodeInfo', {
        method: 'POST',
        body
      }).then(res => {
        if (res.code === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },

  // 获取用户信息
  getUserInfo() {
    return request('/user/info')
  },

  // 登录
  login(data: { username: string; password: string }) {
    return request('/user/login', {
      method: 'POST',
      body: data
    })
  },

  // 更新用户信息
  updateUserInfo(data: any) {
    return request('/user/update', {
      method: 'PUT',
      body: data
    })
  },



  // GET 请求示例
  getUserList(params: { page: number; size: number; keyword?: string }) {
    return request('/domainServer/user/list', {
      params
    })
  },

  // POST 请求示例
  createUser(data: { name: string; age: number; email: string }) {
    return request('/domainServer/user/create', {
      method: 'POST',
      body: data
    })
  },

  // 上传文件示例
  uploadFile(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return request('/domainServer/upload', {
      method: 'POST',
      body: formData
    })
  }
} 