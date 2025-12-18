'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { TopTicketTypes } from '@/types/metrics'

export const topTicketTypesChartConfig = {
  count: {
    label: 'Tickets',
    color: '#2563eb',
  },
} satisfies ChartConfig

interface ChartTopTicketTypesProps {
  topTicketTypes: TopTicketTypes[]
}

export function ChartTopTicketTypes({
  topTicketTypes,
}: ChartTopTicketTypesProps) {
  return (
    <Card className="px-2">
      <h1 className="text-lg font-semibold text-muted-foreground text-center">
        Top Tipos de Ticket
      </h1>
      <ChartContainer config={topTicketTypesChartConfig} className="md:h-40">
        <BarChart data={topTicketTypes} layout="vertical">
          <CartesianGrid horizontal={false} />

          <XAxis type="number" tickLine={true} axisLine={true} />

          <YAxis
            type="category"
            dataKey="ticket_type"
            tickLine={false}
            axisLine={false}
            width={120}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="count"
            fill="var(--color-count)"
            radius={4}
            maxBarSize={20}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
