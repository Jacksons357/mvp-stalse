import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import type { Ticket, TicketUpdate } from '@/types/ticket'

export async function getTickets(): Promise<Ticket[] | undefined> {
  try {
    const response = await axios.get<Ticket[]>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets`,
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || 'Erro ao buscar tickets')
      throw new Error(error?.response?.data?.message)
    }
  }
}

export async function updateTicket(
  ticketId: number,
  data: TicketUpdate,
): Promise<Ticket | undefined> {
  try {
    const response = await axios.patch<Ticket>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/${ticketId}`,
      data,
    )

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || 'Erro ao atualizar ticket')
      throw new Error(error?.response?.data?.message)
    }
  }
}
