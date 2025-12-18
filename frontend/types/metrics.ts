export interface TicketsPerMonth {
  [year: string]: TicketPerMonthItem[]
}

export interface TicketPerMonthItem {
  month: number
  count: number
}

export interface TopTicketTypes {
  ticket_type: string
  count: number
}

export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Critical'

export interface TicketsByPriority {
  priority: TicketPriority
  count: number
}

export interface Metrics {
  tickets_per_month: TicketsPerMonth
  top_ticket_types: TopTicketTypes[]
  tickets_by_priority: TicketsByPriority[]
  total_tickets: number
}

export type MetricsResponse = Metrics
