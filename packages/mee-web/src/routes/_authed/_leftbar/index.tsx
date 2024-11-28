import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { createFileRoute } from '@tanstack/react-router'
import { H4 } from '@mee/shared/ui/Typography'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/_authed/_leftbar/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-4 my-6 flex h-full flex-col items-center justify-center gap-2">
      <motion.div
        className="w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <DotLottieReact
          src="src/shared/lotties/Animation - 1732046792292.lottie"
          autoplay
          segment={[90, 260]}
          speed={0.7}
        />
      </motion.div>
      <H4 className="font-normal text-center">Select a chat to write a message</H4>
    </div>
  )
}
