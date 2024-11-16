import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  const onGoogleLogin = () => {
    window.location.href = `http://localhost:5000/auth/google/login`
  }

  return (
    <>
      Hello /auth/!
      <button onClick={onGoogleLogin}>Google Login</button>
    </>
  )
}
