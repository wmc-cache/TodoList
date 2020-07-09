import axios from "axios"
import { baseURL } from "@/config"
class HttpRequest {
  constructor(baseUrl = baseURL) {
    console.log(baseURL)
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }

  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {

      }
      this.queue[url] = true
      return config
    }, error => { return Promise.reject(error) })

    instance.interceptors.response.use(res => {
      delete this.queue[url];
      const { data } = res

      return { data }
    }, error => { delete this.queue[url]; return Promise.reject(error) })

  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)

  }
}

export default HttpRequest