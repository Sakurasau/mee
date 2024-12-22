import { useConnectionStore } from '@mee/entities/connection'
import { MaterialSymbolsCloudOffOutlineRounded } from '@mee/shared/icons'
import { cn, isDev } from '@mee/shared/lib'
import { FC, useEffect } from 'react'

export const NoConnectionPanel: FC = () => {
  const { issues } = useConnectionStore()

  if (isDev()) console.log('🌐 = ❌', issues)

  useEffect(() => {
    if (!isDev()) return

    if (issues.length) {
      console.log('🌐 = ❌', issues)
    } else {
      console.log('🌐 = ✅')
    }
  }, [issues])

  if (!issues.length) return null

  return (
    <div
      className={cn(
        'flex h-8 w-full items-center justify-center gap-2 bg-gray-100 px-4 py-2 text-xs',
      )}
      data-no-connection>
      <MaterialSymbolsCloudOffOutlineRounded className="size-4" />
      <span>You`re offline</span>
    </div>
  )
}
