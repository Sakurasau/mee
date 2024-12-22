import { chatObject, httpConfig } from './utils'

export interface PaginationQueryType {
  pageNumber?: number
  pageSize?: number
}

export const createDirectChat = async (userId: string) =>
  await chatObject.chatControllerCreateDirectChat({ userId }, httpConfig)

export const getChat = async (id: string) =>
  await chatObject.chatControllerGetChat(id, httpConfig)

export const getChats = async ({
  pageNumber = 1,
  pageSize = 20,
}: PaginationQueryType) =>
  await chatObject.chatControllerGetChats(
    { 'page-number': pageNumber, 'page-size': pageSize },
    httpConfig,
  )

export const getRecommendationsChats = async ({
  pageNumber = 1,
  pageSize = 20,
}: PaginationQueryType) =>
  await chatObject.chatControllerGetChatRecommendations(
    { 'page-number': pageNumber, 'page-size': pageSize },
    httpConfig,
  )
