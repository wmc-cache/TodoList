import { postList } from "../api/login";
import { setToken } from '@/lib/util'

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      console.log(data)
      postList(data).then(res => {
        if (res) {
          console.log(res)
          setToken(res.data.token)
          resolve("ok")
        } else {
          reject(new Error("error"))
        }

      }).catch(err => { console.log(err) })


    })

  }
}

export default actions