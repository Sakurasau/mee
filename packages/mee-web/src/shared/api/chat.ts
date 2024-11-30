import axios from 'axios'

export const getChats = async () => {
  return await axios.get(`${import.meta.env.VITE_URL_SERVER}/chat`, {
    withCredentials: true,
  })
}

export const getRecommendationsChats = async () => {
  return await axios.get(`${import.meta.env.VITE_URL_SERVER}/chat/recommendations`, {
    withCredentials: true,
  })
}
