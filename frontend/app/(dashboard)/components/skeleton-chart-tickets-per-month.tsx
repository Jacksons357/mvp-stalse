'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonChartTicketsPerMonth() {
  return (
    <Card className="px-2">
      <CardContent className="flex flex-col items-center">
        {/* Título */}
        <Skeleton className="h-5 w-40 mb-4" />

        {/* Gráfico de barras */}
        <Skeleton className="h-[200px] w-full rounded-md" />
      </CardContent>
    </Card>
  )
}
