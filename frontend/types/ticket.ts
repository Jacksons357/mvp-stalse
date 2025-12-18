export interface Ticket {
  id: number
  title: string
  status: 'open' | 'closed'
  priority: 'low' | 'medium' | 'high'
  created_at: string
  updated_at: string
}

export interface TicketUpdate {
  status?: 'open' | 'closed'
  priority?: 'low' | 'medium' | 'high'
}
