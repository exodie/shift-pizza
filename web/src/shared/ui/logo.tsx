import Link from 'next/link'

function TitleOfLogo({ stroke }: { stroke: string }) {
  return <span className="text-sm font-extrabold text-primary">{stroke}</span>
}

export function Logo() {
  return (
    <Link href="/" className="flex flex-row items-center space-x-1">
      <div className="flex flex-col items-start">
        <TitleOfLogo stroke="ШИФТ" />
        <TitleOfLogo stroke="PIZZA" />
      </div>

      <div className="w-8 h-8 rounded-full bg-primary" />
    </Link>
  )
}
