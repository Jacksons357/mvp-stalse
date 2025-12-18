'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { useUpdateTicket } from '@/lib/mutations/ticket'
import type { Ticket } from '@/types/ticket'
import { formatDateTime } from '@/utils/format-date-time'
import { TicketSelectCell } from './ticket-select-cell'

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: 'created_at',
    header: 'Criado em',
    cell: ({ getValue }) => {
      const value = getValue<string>()
      return value ? formatDateTime(value) : '-'
    },
  },
  {
    accessorKey: 'title',
    header: 'Título',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const ticket = row.original
      const { mutate: updateTicketMutation, isPending } = useUpdateTicket()

      return (
        <TicketSelectCell
          value={ticket.status}
          options={[
            { label: 'Aberto', value: 'open', color: 'bg-green-700' },
            { label: 'Fechado', value: 'closed', color: 'bg-red-700' },
          ]}
          loading={isPending}
          onChange={(newStatus) => {
            updateTicketMutation({
              ticketId: ticket.id,
              data: { status: newStatus },
            })
          }}
        />
      )
    },
  },
  {
    accessorKey: 'priority',
    header: 'Prioridade',
    cell: ({ row }) => {
      const ticket = row.original
      const { mutate: updateTicketMutation, isPending } = useUpdateTicket()

      return (
        <TicketSelectCell
          value={ticket.priority}
          options={[
            { label: 'Baixa', value: 'low', color: 'bg-green-700' },
            { label: 'Média', value: 'medium', color: 'bg-yellow-700' },
            { label: 'Alta', value: 'high', color: 'bg-red-700' },
          ]}
          loading={isPending}
          onChange={(newPriority) => {
            updateTicketMutation({
              ticketId: ticket.id,
              data: { priority: newPriority },
            })
          }}
        />
      )
    },
  },
  {
    accessorKey: 'updated_at',
    header: 'Atualizado em',
    cell: ({ getValue }) => {
      const value = getValue<string>()
      return value ? formatDateTime(value) : '-'
    },
  },
]
