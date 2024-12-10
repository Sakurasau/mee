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

export interface CreateChatDto {
  chatName?: string
  type: object
  participantIds: string[]
}

export interface ChatResponse {
  id: string
  type: ChatResponseTypeEnum
  /** @format date-time */
  created_at: Date
  chat_name: string | null
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

export enum ChatResponseTypeEnum {
  DIRECT = 'DIRECT',
  GROUP = 'GROUP',
  CHANNEL = 'CHANNEL',
}
