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

import { ChatResponse, CreateChatDto, UserResponse } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Chat<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Chat
   * @name ChatControllerCreateChat
   * @request POST:/chat
   */
  chatControllerCreateChat = (data: CreateChatDto, params: RequestParams = {}) =>
    this.request<ChatResponse, any>({
      path: `/chat`,
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
  chatControllerGetChats = (params: RequestParams = {}) =>
    this.request<ChatResponse[], any>({
      path: `/chat`,
      method: 'GET',
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
  chatControllerGetChatRecommendations = (params: RequestParams = {}) =>
    this.request<UserResponse[], any>({
      path: `/chat/recommendations`,
      method: 'GET',
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
