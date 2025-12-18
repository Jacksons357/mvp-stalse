import { useQuery } from '@tanstack/react-query'
import { getTickets } from '@/http/ticket'

export const useGetTickets = () => {
  return useQuery({
    queryKey: ['tickets'],
    queryFn: () => getTickets(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
