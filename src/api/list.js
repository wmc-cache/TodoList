import axios from "./index";
export const getList = () => {
  return axios.request({
    url: "lists",
    method: "get"
  })
}

export const postList = (data) => {
  return axios.request({
    url: "lists",
    method: "post",
    data: { ...data }
  })
}

export const deleteList = (id) => {
  return axios.request({
    url: `lists/${id}`,
    method: "delete"
  })
}

export const patchList = (id, data) => {
  return axios.request({
    url: `lists/${id}`,
    method: "patch",
    data: { ...data }

  })

}