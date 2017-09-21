import api from './api.js'
import axios from 'axios'
// axios.defaults.withCredentials = true
export const usedDetail = data => {
  return axios.get(api.usedDetail, {id: data})
}
export const usedLists = params => {
  return axios.get(api.used_lists, {params: params})
}

