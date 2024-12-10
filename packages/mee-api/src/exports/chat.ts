import { Chat } from '../gen/Chat'
import { RequestParams } from '../gen/http-client'
import { getValue } from '../init'

const chat = new Chat({ baseURL: getValue('server_url') })

const httpConfig: RequestParams = {
  withCredentials: true,
}

export const getChat = async (id: string) =>
  await chat.chatControllerGetChat(id, httpConfig)

export const getChats = async () =>
  await chat.chatControllerGetChats(httpConfig)

export const getRecommendationsChats = async () =>
  await chat.chatControllerGetChatRecommendations(httpConfig)