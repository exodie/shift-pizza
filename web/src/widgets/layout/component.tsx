import { PropsWithChildren } from 'react'

import { HeaderWidget } from '../header'

export function LayoutWidget({ children }: PropsWithChildren) {
  return (
    <div>
      <HeaderWidget />

      <main className="px-60 py-12 mx-auto min-h-screen">{children}</main>
    </div>
  )
}
