import { cn } from '@mee/shared/lib/cn'
import { getGradientByName } from '@mee/shared/lib/colors'
import { initials } from '@mee/shared/lib/user'
import { AvatarProps as AvatarUIProps, Avatar as AvatarUI } from 'antd'
import { forwardRef, ReactNode, useEffect, useState } from 'react'

interface AvatarProps extends AvatarUIProps {
  id?: string
  title?: string
  src?: string | ReactNode
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ id, title, src, className, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedImgSrc, setLoadedImgSrc] = useState<string | undefined>(
      undefined,
    )
    const [primaryGradient, secondaryGradient] = getGradientByName(
      id ?? title ?? 'no',
    )

    useEffect(() => {
      if (typeof src === 'string') {
        const img = new Image()
        img.src = src
        img.onload = () => {
          setIsLoading(false)
          setLoadedImgSrc(src)
        }
      } else {
        setIsLoading(false)
      }
    }, [src])

    return (
      <AvatarUI
        ref={ref}
        src={
          typeof src === 'string' ? (
            !isLoading ? (
              <img src={loadedImgSrc} alt="avatar" />
            ) : undefined
          ) : (
            src
          )
        }
        style={{
          background: `linear-gradient(to top right, ${primaryGradient}, ${secondaryGradient})`,
        }}
        className={cn('border-0', className)}
        {...props}>
        {initials(title)}
      </AvatarUI>
    )
  },
)
Avatar.displayName = 'Avatar'

export default Avatar
