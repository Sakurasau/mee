import axios from 'axios'
import { getValue } from '../init'

export const getChats = async () => {
  return await axios.get(`${getValue('server_url')}/chat`, {
    withCredentials: true,
  })
}

export const getRecommendationsChats = async () => {
  return await axios.get(`${getValue('server_url')}/chat/recommendations`, {
    withCredentials: true,
  })
}
