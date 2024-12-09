import { type ReactNode } from 'react'

import { cn } from '../lib/cn'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        'scroll-m-24 text-4xl font-bold tracking-tight lg:text-7xl',
        className,
      )}>
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 lg:text-3xl',
        className,
      )}>
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl',
        className,
      )}>
      {children}
    </h3>
  )
}

export const H4 = ({ children, className }: TypographyProps) => {
  return (
    <h4 className={cn('scroll-m-20 text-lg lg:text-xl', className)}>
      {children}
    </h4>
  )
}

export const P = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn('leading-6 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  )
}

export const Blockquote = ({ children, className }: TypographyProps) => {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>
      {children}
    </blockquote>
  )
}

export const List = ({ children, className }: TypographyProps) => {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children}
    </ul>
  )
}

export const InlineCode = ({ children, className }: TypographyProps) => {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}>
      {children}
    </code>
  )
}

export const Lead = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn('text-muted-foreground text-xl', className)}>{children}</p>
  )
}

export const Large = ({ children, className }: TypographyProps) => {
  return <div className={cn('text-lg', className)}>{children}</div>
}

export const Small = ({ children, className }: TypographyProps) => {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  )
}

export const Muted = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>
  )
}
