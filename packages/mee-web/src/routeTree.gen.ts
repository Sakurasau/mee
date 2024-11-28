/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthedImport } from './routes/_authed'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AuthSuccessImport } from './routes/auth/success'
import { Route as AuthedLeftbarImport } from './routes/_authed/_leftbar'
import { Route as AuthedLeftbarIndexImport } from './routes/_authed/_leftbar/index'
import { Route as AuthedLeftbarChatIdImport } from './routes/_authed/_leftbar/$chatId'

// Create/Update Routes

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSuccessRoute = AuthSuccessImport.update({
  id: '/auth/success',
  path: '/auth/success',
  getParentRoute: () => rootRoute,
} as any)

const AuthedLeftbarRoute = AuthedLeftbarImport.update({
  id: '/_leftbar',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedLeftbarIndexRoute = AuthedLeftbarIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthedLeftbarRoute,
} as any)

const AuthedLeftbarChatIdRoute = AuthedLeftbarChatIdImport.update({
  id: '/$chatId',
  path: '/$chatId',
  getParentRoute: () => AuthedLeftbarRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/_authed/_leftbar': {
      id: '/_authed/_leftbar'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedLeftbarImport
      parentRoute: typeof AuthedImport
    }
    '/auth/success': {
      id: '/auth/success'
      path: '/auth/success'
      fullPath: '/auth/success'
      preLoaderRoute: typeof AuthSuccessImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/_authed/_leftbar/$chatId': {
      id: '/_authed/_leftbar/$chatId'
      path: '/$chatId'
      fullPath: '/$chatId'
      preLoaderRoute: typeof AuthedLeftbarChatIdImport
      parentRoute: typeof AuthedLeftbarImport
    }
    '/_authed/_leftbar/': {
      id: '/_authed/_leftbar/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthedLeftbarIndexImport
      parentRoute: typeof AuthedLeftbarImport
    }
  }
}

// Create and export the route tree

interface AuthedLeftbarRouteChildren {
  AuthedLeftbarChatIdRoute: typeof AuthedLeftbarChatIdRoute
  AuthedLeftbarIndexRoute: typeof AuthedLeftbarIndexRoute
}

const AuthedLeftbarRouteChildren: AuthedLeftbarRouteChildren = {
  AuthedLeftbarChatIdRoute: AuthedLeftbarChatIdRoute,
  AuthedLeftbarIndexRoute: AuthedLeftbarIndexRoute,
}

const AuthedLeftbarRouteWithChildren = AuthedLeftbarRoute._addFileChildren(
  AuthedLeftbarRouteChildren,
)

interface AuthedRouteChildren {
  AuthedLeftbarRoute: typeof AuthedLeftbarRouteWithChildren
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedLeftbarRoute: AuthedLeftbarRouteWithChildren,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthedLeftbarRouteWithChildren
  '/auth/success': typeof AuthSuccessRoute
  '/auth': typeof AuthIndexRoute
  '/$chatId': typeof AuthedLeftbarChatIdRoute
  '/': typeof AuthedLeftbarIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthedRouteWithChildren
  '/auth/success': typeof AuthSuccessRoute
  '/auth': typeof AuthIndexRoute
  '/$chatId': typeof AuthedLeftbarChatIdRoute
  '/': typeof AuthedLeftbarIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/_authed/_leftbar': typeof AuthedLeftbarRouteWithChildren
  '/auth/success': typeof AuthSuccessRoute
  '/auth/': typeof AuthIndexRoute
  '/_authed/_leftbar/$chatId': typeof AuthedLeftbarChatIdRoute
  '/_authed/_leftbar/': typeof AuthedLeftbarIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/auth/success' | '/auth' | '/$chatId' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/auth/success' | '/auth' | '/$chatId' | '/'
  id:
    | '__root__'
    | '/_authed'
    | '/_authed/_leftbar'
    | '/auth/success'
    | '/auth/'
    | '/_authed/_leftbar/$chatId'
    | '/_authed/_leftbar/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthedRoute: typeof AuthedRouteWithChildren
  AuthSuccessRoute: typeof AuthSuccessRoute
  AuthIndexRoute: typeof AuthIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthedRoute: AuthedRouteWithChildren,
  AuthSuccessRoute: AuthSuccessRoute,
  AuthIndexRoute: AuthIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authed",
        "/auth/success",
        "/auth/"
      ]
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/_leftbar"
      ]
    },
    "/_authed/_leftbar": {
      "filePath": "_authed/_leftbar.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/_leftbar/$chatId",
        "/_authed/_leftbar/"
      ]
    },
    "/auth/success": {
      "filePath": "auth/success.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/_authed/_leftbar/$chatId": {
      "filePath": "_authed/_leftbar/$chatId.tsx",
      "parent": "/_authed/_leftbar"
    },
    "/_authed/_leftbar/": {
      "filePath": "_authed/_leftbar/index.tsx",
      "parent": "/_authed/_leftbar"
    }
  }
}
ROUTE_MANIFEST_END */
