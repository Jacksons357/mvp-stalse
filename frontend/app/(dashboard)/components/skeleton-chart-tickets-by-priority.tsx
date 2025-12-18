'use client'

import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonChartTicketsByPriority() {
  return (
    <div className="h-[260px] w-full flex justify-center items-center">
      <Skeleton className="h-40 w-40 rounded-full" />
    </div>
  )
}
