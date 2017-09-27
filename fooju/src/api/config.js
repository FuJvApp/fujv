import api from './api.js'
import axios from 'axios'
// axios.defaults.withCredentials = true
<<<<<<< HEAD
// 二手方详情
=======
// 二手房列表详情
>>>>>>> df8871b78e038e2715d997bf89dd0d2cb2d2914f
export const usedDetail = data => {
  return axios.get(api.usedDetail, {id: data})
}
// 二手房列表
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
<<<<<<< HEAD
// 租房列表
export const retalLists = params => {
  return axios.get(api.RetalLists, {params: params})
}
// 租房轮播图
export const adLists = params => {
  return axios.get(api.adLists, {params: params})
}
=======
// 新房列表
export const newlist = params => {
  return axios.get(api.NewList, {params: params})
}
// 搜索
export const villagefind = params => {
  return axios.get(api.VillageFind, {params: params})
}

>>>>>>> df8871b78e038e2715d997bf89dd0d2cb2d2914f
