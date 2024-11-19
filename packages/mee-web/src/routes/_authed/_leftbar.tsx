import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Splitter } from 'antd'

export const Route = createFileRoute('/_authed/_leftbar')({
  component: LayoutComponent,
})

function LayoutComponent() {
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
