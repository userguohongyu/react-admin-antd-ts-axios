import axios from 'axios';




// 创建axios实例
const service = axios.create({
  // api 的 base_url
  baseURL: "http://60.205.211.125:8181",
  timeout: 50000 // 请求超时时间(因为需要调试后台,所以设置得比较大)
})

// request拦截器(请求前的处理)
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器(数据返回后的处理)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === "success") {
      return response.data
    } else if (res.code === 401) {
      // 跳转到登陆页面
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

const get = (url, data) => {
  return service.get(url, {
    params: data
  });
}

const post = (url, data) => {
  return service.get(url, data);
}



export default {
  get,
  post
}
