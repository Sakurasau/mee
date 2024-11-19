import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  const onGoogleLogin = () => {
    // window.location.href = process.env.VITE_URL_SERVER_AUTH_GOOGLE!
    window.location.href = `http://localhost:5000/auth/google/login`
  }

  return (
    <>
      Hello /auth/!
      <Button onClick={onGoogleLogin}>Google Login</Button>
    </>
  )
}
