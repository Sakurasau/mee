import { RecommendationChatItemType } from '@mee/api'
import { pathChat } from '@mee/shared/lib'
import { Avatar } from '@mee/shared/ui/avatar'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

interface RecommendUserItemProps {
  data: RecommendationChatItemType
}

export const RecommendUserItem: FC<RecommendUserItemProps> = ({ data }) => {
  return (
    <div
      id="card"
      className="relative flex items-center gap-2 p-2 hover:bg-gray-100">
      <Avatar
        id={data.id}
        title={data.profile?.display_name ?? ''}
        src={
          data.profile?.photos_urls.length
            ? data.profile?.photos_urls[0]
            : undefined
        }
      />
      <div id="content" className="grid grid-flow-col grid-rows-2 gap-0">
        <p className="truncate text-sm">{data.profile?.display_name}</p>
        <p className="truncate text-xs text-gray-600">
          {data.profile?.username}
        </p>
      </div>
      {/* <Link className="absolute inset-0" to={pathChat(data.id)} /> */}
    </div>
  )
}
