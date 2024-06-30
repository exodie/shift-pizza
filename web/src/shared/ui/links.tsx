import { type ReactNode } from 'react'

import Link from 'next/link'

type Props = {
  href: string
  children: ReactNode
}

export function LinksWithTitle({ href, children }: Props) {
  return <Link href={href}>{children}</Link>
}
