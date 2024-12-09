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

import { CreateDirectMessageDto } from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Messages<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesControllerCreateMessageInDirect
   * @request POST:/messages
   */
  messagesControllerCreateMessageInDirect = (data: CreateDirectMessageDto, params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/messages`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Messages
   * @name MessagesControllerGetMessages
   * @request GET:/messages/{chatId}
   */
  messagesControllerGetMessages = (chatId: string, params: RequestParams = {}) =>
    this.request<object[], any>({
      path: `/messages/${chatId}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
