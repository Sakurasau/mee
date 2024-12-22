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

import { ChatItemResponse, ChatResponse, CreateChatDto, CreateDirectChatDto, UserResponse } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Chat<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerCreateDirectChat
   * @request POST:/chat/create/direct
   */
  chatControllerCreateDirectChat = (data: CreateDirectChatDto, params: RequestParams = {}) =>
    this.request<ChatResponse, any>({
      path: `/chat/create/direct`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerCreateChat
   * @request POST:/chat/create
   */
  chatControllerCreateChat = (data: CreateChatDto, params: RequestParams = {}) =>
    this.request<ChatResponse, any>({
      path: `/chat/create`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerGetChats
   * @request GET:/chat
   */
  chatControllerGetChats = (
    query?: {
      /** @default 10 */
      'page-size'?: number
      /** @default 1 */
      'page-number'?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<ChatItemResponse[], any>({
      path: `/chat`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerGetChatRecommendations
   * @request GET:/chat/recommendations
   */
  chatControllerGetChatRecommendations = (
    query?: {
      /** @default 10 */
      'page-size'?: number
      /** @default 1 */
      'page-number'?: number
    },
    params: RequestParams = {},
  ) =>
    this.request<UserResponse[], any>({
      path: `/chat/recommendations`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerGetChat
   * @request GET:/chat/{id}
   */
  chatControllerGetChat = (id: string, params: RequestParams = {}) =>
    this.request<ChatResponse, any>({
      path: `/chat/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
