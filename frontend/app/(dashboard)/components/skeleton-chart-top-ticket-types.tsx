'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonChartTopTicketTypes() {
  return (
    <Card className="px-2">
      <CardContent className="flex flex-col items-center">
        {/* Título */}
        <Skeleton className="h-5 w-44 mb-4" />

        {/* Gráfico de barras vertical */}
        <Skeleton className="h-40 w-full rounded-md" />
      </CardContent>
    </Card>
  )
}
