export type Ticket = {
  id: number
  title: string
  status: 'open' | 'close'
  priority: 'low' | 'medium' | 'high'
  created_at: string
  updated_at: string
}

export const tickets: Ticket[] = [
  {
    id: 1,
    title: 'Ticket 1',
    status: 'open',
    priority: 'medium',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 2,
    title: 'Ticket 2',
    status: 'close',
    priority: 'high',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 3,
    title: 'Ticket 3',
    status: 'open',
    priority: 'low',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 4,
    title: 'Ticket 4',
    status: 'open',
    priority: 'high',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 5,
    title: 'Ticket 5',
    status: 'close',
    priority: 'medium',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 6,
    title: 'Ticket 6',
    status: 'open',
    priority: 'low',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 7,
    title: 'Ticket 7',
    status: 'close',
    priority: 'high',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 8,
    title: 'Ticket 8',
    status: 'open',
    priority: 'medium',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 9,
    title: 'Ticket 9',
    status: 'close',
    priority: 'low',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 10,
    title: 'Ticket 10',
    status: 'open',
    priority: 'medium',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 11,
    title: 'Ticket 11',
    status: 'close',
    priority: 'low',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
  {
    id: 12,
    title: 'Ticket 12',
    status: 'open',
    priority: 'high',
    created_at: '2024-01-01',
    updated_at: '2024-01-01',
  },
]
