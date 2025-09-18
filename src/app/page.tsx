// pages/index.tsx
import Head from 'next/head'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Associação — Home</title>
        <meta name="description" content="Portal da Associação — cadastro, avisos e membros" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Bem-vindo à Associação</h1>
            <p className="text-gray-600 mb-6">
              Portal para gestão de membros, avisos e notificações. Comece criando sua conta ou confira os eventos.
            </p>
            <div className="flex gap-3">
              <a href="/cadastro" className="px-4 py-2 bg-blue-600 text-white rounded">Criar conta</a>
              <a href="/membros" className="px-4 py-2 border rounded">Ver membros</a>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 border rounded p-4">
              <h3 className="font-semibold mb-2">Próximos eventos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Assembleia Geral — 12/out/2025</li>
                <li>Palestra: História da Associação — 25/out/2025</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border rounded p-4">
              <h4 className="font-semibold">Cadastro de Membros</h4>
              <p className="text-sm text-gray-600">Formulário para novos ingressantes e edição de perfil.</p>
            </div>
            <div className="border rounded p-4">
              <h4 className="font-semibold">Notificações</h4>
              <p className="text-sm text-gray-600">Alerta de mensalidade e eventos importantes.</p>
            </div>
            <div className="border rounded p-4">
              <h4 className="font-semibold">Mural</h4>
              <p className="text-sm text-gray-600">Avisos públicos e comunicados da diretoria.</p>
            </div>
            <div className="border rounded p-4">
              <h4 className="font-semibold">Histórico</h4>
              <p className="text-sm text-gray-600">Registro de mérito/demérito dos membros.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
