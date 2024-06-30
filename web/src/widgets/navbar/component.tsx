import { type ReactNode } from 'react'

import { cn } from '~/lib/utils'
import { navLinksConfig } from '~/shared/configs'
import { LinksWithTitle } from '~/shared/ui/links'
import { Logo } from '~/shared/ui/logo'

const { leftPosition, rightPosition } = navLinksConfig

function TextLinks({ stroke }: { stroke: string }) {
  return <li className="text-color-secondary text-base">{stroke}</li>
}

function ListLinks({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <ul className={cn('flex flex-row items-center space-x-8', className)}>
      {children}
    </ul>
  )
}

export function NavbarWidget() {
  return (
    <nav className="flex flex-row items-center gap-x-8">
      <Logo />

      <ListLinks>
        {leftPosition.map((values, index) => (
          <LinksWithTitle href={values.href} key={index}>
            <div className="flex space-x-4">
              {values.icon}
              <TextLinks stroke={values.title} />
            </div>
          </LinksWithTitle>
        ))}
      </ListLinks>

      <ListLinks className="ml-auto mr-0">
        <LinksWithTitle href={rightPosition.href}>
          <div className="flex space-x-4">
            {rightPosition.icon}
            <TextLinks stroke={rightPosition.title} />
          </div>
        </LinksWithTitle>

        <div className="flex space-x-4">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4706 20.896C14.4706 20.5233 14.1684 20.221 13.7956 20.221H4.82353C4.54739 20.221 4.32353 19.9972 4.32353 19.721V5.42104C4.32353 5.1449 4.54739 4.92104 4.82353 4.92104H13.7956C14.1684 4.92104 14.4706 4.61884 14.4706 4.24604C14.4706 3.87325 14.1684 3.57104 13.7956 3.57104H5C3.89543 3.57104 3 4.46648 3 5.57104V19.571C3 20.6756 3.89543 21.571 5 21.571H13.7956C14.1684 21.571 14.4706 21.2688 14.4706 20.896ZM12.8947 12.211C12.5468 12.211 12.2647 12.4931 12.2647 12.841C12.2647 13.189 12.5468 13.471 12.8947 13.471H18.4412L16.2698 15.6858C16.0056 15.9554 16.0056 16.3867 16.2698 16.6562C16.5415 16.9334 16.9879 16.9334 17.2596 16.6562L20.3137 13.5411C20.6949 13.1523 20.6949 12.5298 20.3137 12.141L17.2596 9.02585C16.9879 8.74868 16.5415 8.74868 16.2698 9.02585C16.0056 9.29535 16.0056 9.72674 16.2698 9.99624L18.4412 12.211H12.8947Z"
              fill="#141C24"
            />
          </svg>
          <TextLinks stroke="Войти" />
        </div>
      </ListLinks>
    </nav>
  )
}
