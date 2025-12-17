import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { tickets } from './components/tickets'

export default function TicketsPage() {
  return (
    <section className="p-5">
      <div className="border-b flex flex-col pb-3">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <p className="text-muted-foreground">
          Gerencie e acompanhe os tickets do sistema
        </p>
      </div>

      <main className="max-w-5xl mx-auto w-full">
        <DataTable columns={columns} data={tickets} />
      </main>
    </section>
  )
}
