import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'
import { H3 } from '@mee/shared/ui/Typography'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useEnvironmentStore } from '@mee/entities/environment'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  const isTauri = useEnvironmentStore((state) => state.isTauri)
  const startOAuthServer = useEnvironmentStore(
    (state) => state.oauth.startOAuthFlow,
  )

  const onGoogleLogin = async () => {
    isTauri && startOAuthServer
      ? await startOAuthServer(import.meta.env.VITE_URL_SERVER_AUTH_GOOGLE)
      : (window.location.href = `${import.meta.env.VITE_URL_SERVER_AUTH_GOOGLE}`)
  }

  return (
    <div className="mx-4 my-6 flex h-full flex-col items-center justify-center gap-4">
      <H3 className="font-normal">Start with something beautiful</H3>
      <div className="w-96">
        <DotLottieReact
          src="https://lottie.host/5a17188b-8a4d-46f8-a7e5-8698576daf36/d8AmQBv6ad.lottie"
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
