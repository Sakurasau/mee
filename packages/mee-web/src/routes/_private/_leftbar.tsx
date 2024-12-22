import { NoConnectionPanel } from '@mee/shared/ui/no-connection-panel'
import { ChatList } from '@mee/widgets/chat-list'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Splitter } from 'antd'

import './layout.module.css'

export const Route = createFileRoute('/_private/_leftbar')({
  component: LayoutComponent,
})

function LayoutComponent() {
  const ContentLeftBar = () => <ChatList />

  return (
    <div className="h-screen">
      <NoConnectionPanel />
      <Splitter>
        <Splitter.Panel defaultSize="20%" min="20%" max="60%">
          <ContentLeftBar />
        </Splitter.Panel>
        <Splitter.Panel className="relative">
          <Outlet />
        </Splitter.Panel>
      </Splitter>
    </div>
  )
}
