import { RecommendationChatItemType } from '@mee/api'
import { queries } from '@mee/shared/queries'
import { InfinityScroll } from '@mee/shared/ui/infinity-scroll/'
import { RecommendUserItem } from '@mee/shared/ui/recommend-user-item'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FC } from 'react'

interface RecommendedListProps {}

export const RecommendedList: FC<RecommendedListProps> = ({}) => {
  const queryParams = queries.chats.recommended()
  const query = useInfiniteQuery({
    ...queryParams,
    queryFn: async (ctx) => await queryParams.queryFn(ctx),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasMore ? allPages.length + 1 : undefined,
  })

  return (
    <InfinityScroll<RecommendationChatItemType>
      keys={queryParams.queryKey.map((key) => JSON.stringify(key))}
      query={query}
      renderItem={(item) => <RecommendUserItem key={item.id} data={item} />}
    />
  )
}
