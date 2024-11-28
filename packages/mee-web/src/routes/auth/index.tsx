import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'
import { H3 } from '@mee/shared/ui/Typography'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  const onGoogleLogin = () => {
    // window.location.href = process.env.VITE_URL_SERVER_AUTH_GOOGLE!
    window.location.href = `http://localhost:5000/auth/google/login`
  }

  return (
    <div className="mx-4 my-6 flex h-full flex-col items-center justify-center gap-4">
      <H3 className="font-normal">Start with something beautiful</H3>
      <div className="w-96">
        <DotLottieReact
          src="src/shared/lotties/Animation - 1732030421671.lottie"
          loop
          autoplay
        />
      </div>
      <Button className="block" onClick={onGoogleLogin}>
        Google Login
      </Button>
    </div>
  )
}
