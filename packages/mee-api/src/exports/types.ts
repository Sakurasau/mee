import { AxiosError } from 'axios'

import {
  ChatItemResponse,
  UserResponse,
} from '../gen/data-contracts'

export type ChatItemType = ChatItemResponse
export type RecommendationChatItemType = UserResponse

// export type ChatType = ChatResponse
// export type ChatsType = ChatResponse[]
export type UserType = UserResponse
// export type UsersType = UserResponse[]

// Axios
export { AxiosError }
