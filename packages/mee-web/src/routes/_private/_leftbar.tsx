import { getChats, getRecommendationsChats } from '@mee/shared/api/chat'
import Avatar from '@mee/shared/ui/Avatar'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Divider, Splitter } from 'antd'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/_private/_leftbar')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const [chats, setChats] = useState([])
  const [recommends, setRecommends] = useState([])

  useEffect(() => {
    getChats().then((chats) => {
      if (chats.status === 200) setChats(chats.data)
      console.log('getChats', chats)
    })
    getRecommendationsChats().then((chats) => {
      if (chats.status === 200) setRecommends(chats.data)
      console.log('getRecommendationsChats', chats)
    })
  }, [])

  const Chat = ({ chat }: { chat: any }) => (
    <div className="my-1 flex items-center gap-2 rounded-xl bg-slate-100 p-1">
      <Avatar
        id={chat.id}
        title={chat.profile.display_name}
        className="flex-none"
      />
      <div>
        <p className="truncate">{chat.profile.display_name}</p>
        <p className="truncate text-sm">@{chat.profile.username}</p>
      </div>
    </div>
  )

  const ContentLeftBar = () => (
    <div>
      {chats.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
      <Divider orientation="left" plain>
        Recommends
      </Divider>
      {recommends.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </div>
  )

  return (
    <Splitter className="h-screen">
      <Splitter.Panel defaultSize="20%" min="20%" max="60%">
        <ContentLeftBar />
      </Splitter.Panel>
      <Splitter.Panel>
        <Outlet />
      </Splitter.Panel>
    </Splitter>
  )
}
