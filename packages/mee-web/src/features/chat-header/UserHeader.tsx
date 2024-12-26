import { UserType } from '@mee/api'
import { ChatInfoResponse } from '@mee/api/src/gen/data-contracts'
import { Avatar } from '@mee/shared/ui/avatar'
import { FC } from 'react'

interface ChatHeaderProps {
  user: ChatInfoResponse
}

export const ChatHeader: FC<ChatHeaderProps> = ({ user }) => {
  return (
    <div className="flex w-full gap-2">
      <Avatar
        id={user.id}
        title={user.profile?.display_name ?? ''}
        src={
          user.profile?.photos_urls.length
            ? user.profile?.photos_urls[0]
            : undefined
        }
      />
      <p className="truncate text-sm">{user.profile?.display_name}</p>
    </div>
  )
}
