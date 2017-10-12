import api from './api.js'
import axios from 'axios'

// axios.defaults.withCredentials = true
let qs = require('qs')
export const msg = data => {
  return axios.post(api.SendMsg, qs.stringify(data))
}
export const msgsend = data => {
  return axios.post(api.MsgVerify, qs.stringify(data))
}
export const register = data => {
  return axios.post(api.Register, qs.stringify(data))
}
export const login2 = data => {
  return axios.post(api.login, qs.stringify(data))
}
export const forget = data => {
  return axios.post(api.Forget, qs.stringify(data))
}
export const storedetail = data => {
  return axios.get(api.Userdetail, {params: data})
}
export const usedDetail = data => {
  return axios.get(api.usedDetail, {id: data})
}
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}
export const newlist = params => {
  return axios.get(api.NewList, {params: params})
}
export const twolist = params => {
  return axios.get(api.used_lists, {params: params})
}
export const villagefind = params => {
  return axios.get(api.VillageFind, {params: params})
}
export const regionlist = data => {
  return axios.get(api.RegionLists)
}
export const basicsdrop = data => {
  return axios.get(api.BasicsDrop, {params: data})
}
export const maphouse = data => {
  return axios.get(api.MapMapHouse, {params: data})
}
export const mapvillage = data => {
  return axios.get(api.mapHouseVillage, {params: data})
}

