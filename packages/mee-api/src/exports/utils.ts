import { Chat } from '../gen/Chat'
import { RequestParams } from '../gen/http-client'
import { Messages } from '../gen/Messages'
import { getValue } from '../init'

export const httpConfig: RequestParams = {
  withCredentials: true,
}

export const chatObject = new Chat({ baseURL: getValue('server_url') })
export const messageObject = new Messages({ baseURL: getValue('server_url') })
