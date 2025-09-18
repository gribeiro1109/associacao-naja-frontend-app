export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Associação — Desenvolvido por Gabriel Ribeiro
      </div>
    </footer>
  )
}