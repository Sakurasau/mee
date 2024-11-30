import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Splitter } from 'antd'
import { getChats, getRecommendationsChats } from '@mee/shared/api/chat'

export const Route = createFileRoute('/_authed/_leftbar')({
  component: LayoutComponent,
})

function LayoutComponent() {

  console.log('LayoutComponent')
  getRecommendationsChats().then((chats) => { console.log('chats', chats) })

  return (
    <Splitter className="h-screen">
      <Splitter.Panel defaultSize="20%" min="20%" max="60%">
        <p>items</p>
      </Splitter.Panel>
      <Splitter.Panel>
        <Outlet />
      </Splitter.Panel>
    </Splitter>
  )
}
