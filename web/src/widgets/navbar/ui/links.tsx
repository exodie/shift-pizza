import { ReactNode } from 'react'

import { cn } from '~/lib/utils'

export function TextLinks({ stroke }: { stroke: string }) {
  return <li className="text-color-secondary font-medium text-base">{stroke}</li>
}

export function ListLinks({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <ul
      className={cn(
        'flex flex-col items-start gap-y-4 lg:flex-row lg:items-center lg:space-x-8',
        className
      )}
    >
      {children}
    </ul>
  )
}
