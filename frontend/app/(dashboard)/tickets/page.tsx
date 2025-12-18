'use client'

import { useGetTickets } from '@/lib/queries/ticket'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { SkeletonTableTickets } from './components/skeleton-table-tickets'

export default function TicketsPage() {
  const { data: ticketsData, isLoading, isPending } = useGetTickets()

  return (
    <section className="p-5">
      <div className="border-b flex flex-col pb-3">
        <h1 className="text-2xl font-semibold">Tickets</h1>
        <p className="text-muted-foreground">
          Gerencie e acompanhe os tickets do sistema
        </p>
      </div>

      <main className="max-w-5xl mx-auto w-full">
        {isLoading || isPending ? (
          <SkeletonTableTickets />
        ) : (
          <DataTable columns={columns} data={ticketsData || []} />
        )}
      </main>
    </section>
  )
}
