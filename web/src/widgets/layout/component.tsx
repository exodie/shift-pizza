import { PropsWithChildren } from 'react'

import { HeaderWidget } from '../header'

export function LayoutWidget({ children }: PropsWithChildren) {
  return (
    <div>
      <HeaderWidget />

      <main>{children}</main>
    </div>
  )
}
