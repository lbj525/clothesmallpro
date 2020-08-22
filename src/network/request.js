import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',
    timeout: 5000
  })
  //拦截器
  instance.interceptors.request.use(config => {

    return config
  }, error => {
    console.log('请求失败');
    console.log(err);
  })

  instance.interceptors.response.use(config => {

    return config.data;
  }, err => {
    console.log('响应失败');
    console.log(err);
  })

  return instance(config)
}