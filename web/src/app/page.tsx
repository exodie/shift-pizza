import Image from 'next/image'

import { Button } from '~/shared/ui/button'

export default function Home() {
  return (
    // ToDo: Проблемы с респонсив версткой, пофиксить
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array(12)
        .fill('')
        .map((_, index) => (
          <div key={index} className="flex flex-col items-center max-w-fit">
            <Image
              src="https://shift-backend.onrender.com/static/images/pizza/1.jpeg"
              alt="pizza"
              width={220}
              height={220}
              className="mx-10"
            />

            <div className="mt-6">
              <div className="space-y-2">
                <h3 className="text-color-title font-semibold text-xl">Пепперони</h3>
                <p className="max-w-xs text-color-body font-normal text-base">
                  Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный
                  соус
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <span className="text-xl font-semibold">от 299 ₽</span>

                <Button className="w-full text-lg font-semibold" size="lg">
                  Выбрать
                </Button>
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}
