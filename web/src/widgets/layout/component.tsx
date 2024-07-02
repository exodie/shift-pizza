import { PropsWithChildren } from 'react'

import { HeaderWidget } from '../header'

export function LayoutWidget({ children }: PropsWithChildren) {
  return (
    <div>
      <HeaderWidget />

      <main className="py-12 w-full">{children}</main>
    </div>
  )
}
