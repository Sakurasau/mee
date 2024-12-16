/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateDirectChatDto {
  userId: string
}

export interface ChatResponse {
  id: string
  type: 'DIRECT' | 'GROUP' | 'CHANNEL'
  /** @format date-time */
  created_at: Date
  chat_name: string | null
}

export interface CreateChatDto {
  chatName?: string
  type: object
  participantIds: string[]
}

export interface MessageResponse {
  /** @format int64 */
  id: number
  chat_id: string
  sender_id: string | null
  content: string | null
  /** @format date-time */
  created_at: Date
  /** @format date-time */
  updated_at: Date
  message_type: 'TEXT'
  status: 'SENT' | 'READ' | 'RECEIVED'
  is_deleted: boolean
  /** @format int64 */
  reply_id: number | null
}

export interface UserProfileResponse {
  /** @format date-time */
  updated_at: Date
  user_id: string
  display_name: string | null
  username: string
  bio: string | null
  photos_urls: string[]
  /** @format date-time */
  date_of_birth: Date | null
}

export interface UserResponse {
  id: string
  first_name: string | null
  last_name: string | null
  profile: UserProfileResponse | null
}

export interface ChatParticipantsForIncludeResponse {
  user_id: string
  /** @format date-time */
  joined_at: Date
  user: UserResponse
}

export interface ChatItemResponse {
  id: string
  type: 'DIRECT' | 'GROUP' | 'CHANNEL'
  /** @format date-time */
  created_at: Date
  chat_name: string | null
  last_message: MessageResponse | null
  /** Participants without taking into account the current user */
  participants: ChatParticipantsForIncludeResponse[]
}

export interface CreateMessageDto {
  chatId: string
  content: string
  replyId?: number
}

export interface CreateDirectMessageDto {
  userId: string
  content: string
  replyId?: number
}
