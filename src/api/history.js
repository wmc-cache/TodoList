import axios from "./index";
export const getHistory = () => {
  return axios.request({
    url: "histories",
    method: "get"
  })
}
export const postHistory = (data) => {
  return axios.request({
    url: "histories",
    method: "post",
    data: { ...data }
  })
}

export const deleteHistory = (id) => {
  return axios.request({
    url: `histories/${id}`,
    method: "delete"
  })
}