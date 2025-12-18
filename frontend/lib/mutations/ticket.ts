import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { updateTicket } from '@/http/ticket'
import type { TicketUpdate } from '@/types/ticket'
import queryClient from '../query-client'

interface UpdateTicketParams {
  ticketId: number
  data: TicketUpdate
}

export function useUpdateTicket() {
  return useMutation({
    mutationFn: async ({ ticketId, data }: UpdateTicketParams) => {
      return await updateTicket(ticketId, data)
    },
    onSuccess: () => {
      toast.success('Ticket atualizado com sucesso')
      queryClient.invalidateQueries({
        queryKey: ['tickets'],
      })
    },
    onError: () => {
      toast.error('Erro ao atualizar ticket')
    },
  })
}
