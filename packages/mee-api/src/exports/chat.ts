import { chatObject, httpConfig } from './utils'

export const getChat = async (id: string) =>
  await chatObject.chatControllerGetChat(id, httpConfig)

export const getChats = async () =>
  await chatObject.chatControllerGetChats(httpConfig)

export const getRecommendationsChats = async () =>
  await chatObject.chatControllerGetChatRecommendations(httpConfig)
