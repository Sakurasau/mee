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

import { HttpClient, RequestParams } from './http-client'

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerGoogleAuth
   * @request GET:/auth/google/login
   */
  authControllerGoogleAuth = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/auth/google/login`,
      method: 'GET',
      ...params,
    })
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerGoogleAuthRedirect
   * @request GET:/auth/google/callback
   */
  authControllerGoogleAuthRedirect = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/auth/google/callback`,
      method: 'GET',
      ...params,
    })
}
