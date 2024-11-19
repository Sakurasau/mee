import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { isDev } from '@mee/shared/lib/env'
import { useAuthState } from '@mee/entities/auth'
import Avatar from '@mee/shared/ui/Avatar'
import { fullName } from '@mee/shared/lib/user'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { user } = useAuthState()

  return (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:text-purple-500">
          Home
        </Link>
        <Link to="/auth" className="[&.active]:text-purple-500">
          Auth
        </Link>
        <Avatar
          className="ml-auto"
          shape="square"
          id={user?.id}
          title={fullName(user)}
          src={user?.avatar_url}
        />
      </div>
      <hr />
      <Outlet />
      {isDev() && <TanStackRouterDevtools />}
    </>
  )
}
