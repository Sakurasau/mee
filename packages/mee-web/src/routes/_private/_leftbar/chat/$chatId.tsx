import { createFileRoute, Link } from '@tanstack/react-router'
// import { useAuthStore } from '@mee/entities/auth'
// import { fullName } from '@mee/shared/lib/user'
// import Avatar from '@mee/shared/ui/Avatar'

export const Route = createFileRoute('/_private/_leftbar/chat/$chatId')({
  component: RouteComponent,
})

function RouteComponent() {
  // const { user } = useAuthStore()

  return (
    <></>
    // <div className="flex gap-2 p-2">
    //   <Link to="/" className="[&.active]:text-purple-500">
    //     Home
    //   </Link>
    //   <Link to="/auth" className="[&.active]:text-purple-500">
    //     Auth
    //   </Link>
    //   <Avatar
    //     className="ml-auto"
    //     shape="square"
    //     id={user?.id}
    //     title={fullName(user)}
    //     src={user?.avatar_url}
    //   />
    // </div>
  )
}
