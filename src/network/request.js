import axios from 'axios'
// 封装axios
export function request(config) {
  const instance = axios.create({
      baseURL: '/api',
      timeout: 5000
  })
  //请求拦截器
  instance.interceptors.request.use(config => {
      //发送请求之前做点什么
      return config
  }, error => {
      console.log(error)
  })
//响应拦截器
  instance.interceptors.response.use(res => {
      //对响应结果做点什么
      return res.data
  }, error => {
      console.log(error)
  })
  return instance(config)
}
