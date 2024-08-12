import { Link } from '@inertiajs/react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="flex justify-between items-center m-6">
      <div>
        <Link href="/">
          <Avatar>
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <nav className="flex gap-3">
        <Button variant="ghost">
          <Link href="#realisations">Réalisations</Link>
        </Button>
        <Button variant="ghost">
          <Link href="#contact">Contact</Link>
        </Button>
      </nav>
    </header>
  )
}
