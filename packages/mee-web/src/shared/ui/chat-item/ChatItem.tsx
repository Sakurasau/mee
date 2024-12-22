import { ChatItemType } from '@mee/api'
import { pathChat } from '@mee/shared/lib'
import { Avatar } from '@mee/shared/ui/avatar'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

interface ChatItemProps {
  data: ChatItemType
}

export const ChatItem: FC<ChatItemProps> = ({ data }) => {
  const directUser = // implies the chat type Direct
    data.type === 'DIRECT' && data.participants.length
      ? data.participants[0].user
      : null

  return (
    <div
      id="card"
      className="relative flex items-center gap-2 p-2 hover:bg-gray-100">
      <Avatar
        id={data.id}
        title={data.chat_name ?? directUser?.profile?.display_name ?? ''}
        src={
          directUser?.profile?.photos_urls.length
            ? directUser.profile?.photos_urls[0]
            : undefined
        }
      />
      <div id="content" className="grid grid-flow-col grid-rows-2 gap-0">
        <p className="truncate text-sm">
          {data.chat_name ?? directUser?.profile?.display_name}
        </p>
        <p className="truncate text-xs text-gray-600">
          {data.last_message?.content}
        </p>
      </div>
      <Link className="absolute inset-0" to={pathChat(data.id)} />
    </div>
  )
}
