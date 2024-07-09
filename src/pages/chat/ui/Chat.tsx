import { FC } from 'react'
import { ChangeEvent, useRef, useState } from 'react'
// import { invoke } from "@tauri-apps/api/core";
import { Button, Input } from 'antd'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { AnimatePresence, motion } from 'framer-motion'
import { MingcuteSendPlaneLine } from 'shared/icons/MingcuteSendPlaneLine'

interface IChat {}

export const Chat: FC<IChat> = ({}) => {
  const [message, setMessage] = useState('')
  const buttonSentRef = useRef(null)

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value)
  }

  const handleSent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    setMessage('')
  }

  return (
    <div className="flex size-full h-screen">
      <h1 className="m-auto">Welcome to Tauri!</h1>

      <form className="absolute bottom-0 flex w-full gap-4 p-4 *:min-h-10">
        <Input
          value={message}
          onChange={handleChangeInput}
          placeholder="Write a message..."
          className="w-full"
          onBlur={(e) => {
            if (e.relatedTarget === buttonSentRef.current) e.target.focus()
          }}
        />
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.5 }}
              transition={{ duration: 0.3 }}>
              <HappyProvider>
                <Button
                  ref={buttonSentRef}
                  type="primary"
                  onClick={handleSent}
                  className="min-h-10 min-w-10 rounded-full px-0">
                  <MingcuteSendPlaneLine className="size-6" />
                </Button>
              </HappyProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
