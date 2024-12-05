import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { createFileRoute } from '@tanstack/react-router'
import { H4 } from '@mee/shared/ui/Typography'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_private/_leftbar/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center gap-2">
      <motion.div
        className="w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DotLottieReact
          src="https://lottie.host/dd40fb42-0efa-4d59-a160-7750e8c0a605/c6WJW95xtB.lottie"
          autoplay
          segment={[90, 260]}
          speed={0.7}
        />
      </motion.div>
      <H4 className="text-center font-normal">
        Select a chat to write a message
      </H4>
    </div>
  )
}
