import { useQuery } from '@tanstack/react-query'
import { getMetrics } from '@/http/metrics'

export const useGetMetrics = () => {
  return useQuery({
    queryKey: ['metrics'],
    queryFn: () => getMetrics(),
    staleTime: 1000 * 60 * 5,
  })
}
