import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center space-y-3">
      <h1 className="text-6xl">404</h1>
      <p className="text-2xl ">Página não encontrada</p>
      <Link
        href="/"
        className="text-blue-500 hover:underline transition-all duration-300"
      >
        Voltar para a página inicial
      </Link>
    </section>
  )
}
