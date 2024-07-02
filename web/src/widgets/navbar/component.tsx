import { NavbarLists } from './ui/lists'
import { Logo } from '~/shared/ui/logo'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '~/shared/ui/sheet'

export function NavbarWidget() {
  return (
    <nav className="mx-6 my-6 lg:mx-60">
      <div className="hidden lg:flex flex-row items-center gap-x-8">
        <Logo />

        <NavbarLists />
      </div>

      <div className="lg:hidden flex flex-row items-center justify-between">
        <Logo />

        <Sheet>
          <SheetTrigger>Ещё</SheetTrigger>
          <SheetContent side="top">
            <SheetTitle>Зацепили тебя?</SheetTitle>

            <div className="flex flex-col items-start my-4 gap-y-4">
              <NavbarLists />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
