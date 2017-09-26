import api from './api.js'
import axios from 'axios'
// axios.defaults.withCredentials = true
// 二手房列表详情
export const usedDetail = data => {
  return axios.get(api.usedDetail, {id: data})
}
// 二手房列表
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
// 新房列表
export const newlist = params => {
  return axios.get(api.NewList, {params: params})
}
// 搜索
export const villagefind = params => {
  return axios.get(api.VillageFind, {params: params})
}

