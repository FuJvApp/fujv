import api from './api.js'
import axios from 'axios'
export const usedDetail = data => {
  return axios.get(api.usedDetail, {id: data})
}
// 二手房列表
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
// 租房列表
export const retalLists = params => {
  return axios.get(api.RetalLists, {params: params})
}
// 租房轮播图
export const adLists = params => {
  return axios.get(api.adLists, {params: params})
}
// 区域列表
export const RegionLists = () => {
  return axios.get(api.RegionLists)
}
// 租房房源信息
export const RtalDetail = params => {
  return axios.get(api.RtalDetail, {params: params})
}
// 更多房屋类型选项
export const BasicsDrop = params => {
  return axios.get(api.BasicsDrop, {params: params})
}
// 新房列表
export const newlist = params => {
  return axios.get(api.NewList, {params: params})
}
// 搜索
export const villagefind = params => {
  return axios.get(api.VillageFind, {params: params})
}
