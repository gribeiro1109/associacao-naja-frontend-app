import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Associação</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/membros">Membros</Link>
          <Link href="/eventos">Eventos</Link>
          <Link href="/entrar" className="font-medium text-blue-600">Entrar</Link>
        </nav>
      </div>
    </header>
  )
}
