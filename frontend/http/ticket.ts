import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import type { Ticket } from '@/types/ticket'

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
