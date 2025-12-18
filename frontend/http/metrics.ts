import axios, { AxiosError } from 'axios'
import { toast } from 'sonner'
import type { Metrics, MetricsResponse } from '@/types/metrics'

export async function getMetrics(): Promise<Metrics | undefined> {
  try {
    const response = await axios.get<MetricsResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/metrics`,
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.message || 'Erro ao buscar metricas')
      throw new Error(error?.response?.data?.message)
    }
  }
}
