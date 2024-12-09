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

export interface ChatResponseDto {
  id: string
  type: object
  /** @format date-time */
  created_at: string
  chat_name: string | null
}

export interface AddParticipantDto {
  chatId: string
  newUserId: string
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
