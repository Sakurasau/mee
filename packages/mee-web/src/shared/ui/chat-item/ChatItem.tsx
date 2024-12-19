import { ChatItemType } from '@mee/api'
import { FC } from 'react'

import Avatar from '../Avatar'

interface ChatItemProps {
  data: ChatItemType
}

const ChatItem: FC<ChatItemProps> = ({ data }) => {
  const directUser = // implies the chat type Direct
    data.type === 'DIRECT' && data.participants.length
      ? data.participants[0].user
      : null

  return (
    <div id="card" className="flex items-center gap-2 p-2">
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
    </div>
  )
}

export default ChatItem
