'use client'

import { useGetMetrics } from '@/lib/queries/metrics'
import CardTotalTickets from './components/card-total-tickets'
import { ChartTicketsByPriority } from './components/chart-tickets-by-priority'
import { ChartTicketsPerMonth } from './components/chart-tickets-per-month'
import { ChartTopTicketTypes } from './components/chart-top-ticket-types'
import { SkeletonCardTotalTickets } from './components/skeleton-card-total-tickets'
import { SkeletonChartTicketsByPriority } from './components/skeleton-chart-tickets-by-priority'
import { SkeletonChartTicketsPerMonth } from './components/skeleton-chart-tickets-per-month'
import { SkeletonChartTopTicketTypes } from './components/skeleton-chart-top-ticket-types'

export default function DashboardPage() {
  const { data: metrics, isLoading } = useGetMetrics()

  const totalTickets = metrics?.total_tickets ?? 0
  const ticketsByPriority = metrics?.tickets_by_priority ?? []
  const ticketsPerMonth = metrics?.tickets_per_month ?? {}
  const topTicketTypes = metrics?.top_ticket_types ?? []

  return (
    <section className="pt-5 px-5 space-y-5">
      <div className="border-b flex flex-col pb-3">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Métricas e dados dos Tickets</p>
      </div>

      <main className="flex flex-col space-y-5 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            <SkeletonCardTotalTickets />
          ) : (
            <CardTotalTickets totalTickets={totalTickets} />
          )}
          {isLoading ? (
            <SkeletonChartTicketsByPriority />
          ) : (
            <ChartTicketsByPriority ticketsByPriority={ticketsByPriority} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {isLoading ? (
            <SkeletonChartTicketsPerMonth />
          ) : (
            <ChartTicketsPerMonth ticketsPerMonth={ticketsPerMonth} />
          )}
          {isLoading ? (
            <SkeletonChartTopTicketTypes />
          ) : (
            <ChartTopTicketTypes topTicketTypes={topTicketTypes} />
          )}
        </div>
      </main>
    </section>
  )
}
