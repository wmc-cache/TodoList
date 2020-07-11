import axios from "./index";


export const postList = (data) => {
  return axios.request({
    url: "/users/login",
    method: "post",
    data: data
  })
}