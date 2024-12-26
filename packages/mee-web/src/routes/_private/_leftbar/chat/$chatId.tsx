import { ChatHeader } from '@mee/features/chat-header'
import { queries } from '@mee/shared/queries'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/_leftbar/chat/$chatId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { chatId } = Route.useParams()
  const { data } = useQuery(queries.chats.detail(chatId))

  if (!(data)) return null

  return (
    <div className="size-full">
      <ChatHeader data={directUser} />
    </div>
  )
}
