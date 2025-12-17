import CardTotalTickets from './tickets/components/card-total-tickets'
import { ChartTicketsByPriority } from './tickets/components/chart-tickets-by-priority'
import { ChartTicketsPerMonth } from './tickets/components/chart-tickets-per-month'
import { ChartTopTicketTypes } from './tickets/components/chart-top-ticket-types'

export default function DashboardPage() {
  return (
    <section className="pt-5 space-y-5">
      <div className="border-b flex flex-col pb-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Métricas e dados dos Tickets</p>
      </div>

      <main className="flex flex-col space-y-5 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardTotalTickets />
          <ChartTicketsByPriority />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartTicketsPerMonth />
          <ChartTopTicketTypes />
        </div>
      </main>
    </section>
  )
}
