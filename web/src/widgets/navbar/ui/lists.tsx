import { TextLinks, ListLinks } from './links'
import { navLinksConfig } from '~/shared/configs'
import { LinksWithTitle } from '~/shared/ui/links'
import { AuthDialog } from '~/widgets/auth'

const { leftPosition, rightPosition } = navLinksConfig

export function NavbarLists() {
  return (
    <>
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

      <ListLinks className="lg:ml-auto lg:mr-0">
        <LinksWithTitle href={rightPosition.href}>
          <div className="flex space-x-4">
            {rightPosition.icon}
            <TextLinks stroke={rightPosition.title} />
          </div>
        </LinksWithTitle>

        <AuthDialog />
      </ListLinks>
    </>
  )
}
