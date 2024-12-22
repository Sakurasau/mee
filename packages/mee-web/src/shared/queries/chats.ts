import { createQueryKeys } from '@lukemorales/query-key-factory'
import { getChat, getChats, getRecommendationsChats } from '@mee/api'

export const chats = createQueryKeys('chats', {
  list: (pageSize = 20) => ({
    queryKey: [{ pageSize }],
    queryFn: async (ctx) => {
      const res = await getChats({
        pageNumber: Number(ctx.pageParam),
        pageSize: pageSize,
      })

      return {
        data: res.data,
        hasMore: res.data.length === pageSize,
      }
    },
  }),
  recommended: (pageSize = 20) => ({
    queryKey: [{ pageSize }],
    queryFn: async (ctx) => {
      const res = await getRecommendationsChats({
        pageNumber: Number(ctx.pageParam),
        pageSize: pageSize,
      })

      return {
        data: res.data,
        hasMore: res.data.length === pageSize,
      }
    },
  }),
  detail: (chatId: string) => ({
    queryKey: [chatId],
    queryFn: async () => (await getChat(chatId)).data,
  }),
})
