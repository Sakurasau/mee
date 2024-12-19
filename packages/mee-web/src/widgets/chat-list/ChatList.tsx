import { ChatItemType } from '@mee/api'
import { queries } from '@mee/shared/queries'
import ChatItem from '@mee/shared/ui/chat-item/ChatItem'
import InfinityScroll from '@mee/shared/ui/infinity-scroll/InfinityScroll'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FC } from 'react'

interface ChatListProps {}

const ChatList: FC<ChatListProps> = ({}) => {
  const queryParams = queries.chats.infinite()
  const query = useInfiniteQuery({
    ...queryParams,
    queryFn: async (ctx) => await queryParams.queryFn(ctx),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
  })

  return (
    <InfinityScroll<ChatItemType>
      query={query}
      renderItem={(item) => <ChatItem key={item.id} data={item} />}
    />
  )
}

export default ChatList
