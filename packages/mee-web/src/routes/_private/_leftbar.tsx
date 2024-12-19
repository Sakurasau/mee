import ChatList from '@mee/widgets/chat-list/ChatList'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Splitter } from 'antd'

export const Route = createFileRoute('/_private/_leftbar')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const ContentLeftBar = () => <ChatList />

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
