'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { TicketSelectCell } from './ticket-select-cell'
import type { Ticket } from './tickets'

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: 'created_at',
    header: 'Criado em',
  },
  {
    accessorKey: 'title',
    header: 'Título',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row, getValue }) => {
      const ticket = row.original

      return (
        <TicketSelectCell
          value={getValue<string>()}
          options={[
            { label: 'Aberto', value: 'open' },
            { label: 'Fechado', value: 'close' },
          ]}
          onChange={(newStatus) => {
            console.log('update status', ticket.id, newStatus)
            // TODO: implement patch request ticket
            // updateTicket(ticket.id, { status: newStatus })
          }}
        />
      )
    },
  },
  {
    accessorKey: 'priority',
    header: 'Prioridade',
    cell: ({ row, getValue }) => {
      const ticket = row.original

      return (
        <TicketSelectCell
          value={getValue<string>()}
          options={[
            { label: 'Baixa', value: 'low' },
            { label: 'Média', value: 'medium' },
            { label: 'Alta', value: 'high' },
          ]}
          onChange={(newPriority) => {
            console.log('update priority', ticket.id, newPriority)
            // TODO: implement patch request ticket
            // updateTicket(ticket.id, { priority: newPriority })
          }}
        />
      )
    },
  },
  {
    accessorKey: 'updated_at',
    header: 'Atualizado em',
  },
]
