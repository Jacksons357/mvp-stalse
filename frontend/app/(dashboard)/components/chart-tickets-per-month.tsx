'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Card } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { TicketsPerMonth } from '@/types/metrics'
import { formatTicketsPerMonth } from '@/utils/format-tickets-per-month'

const chartConfig = {
  year2020: {
    label: 'Ano 2020',
    color: '#2563eb',
  },
  year2021: {
    label: 'Ano 2021',
    color: '#51b6a0ff',
  },
} satisfies ChartConfig

interface ChartTicketsPerMonthProps {
  ticketsPerMonth: TicketsPerMonth
}

export function ChartTicketsPerMonth({
  ticketsPerMonth,
}: ChartTicketsPerMonthProps) {
  const chartData = formatTicketsPerMonth(ticketsPerMonth)

  return (
    <Card className="px-2">
      <h1 className="text-lg font-semibold text-muted-foreground text-center">
        Tickets por mês
      </h1>
      <ChartContainer config={chartConfig} className="h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="year2020" fill="var(--color-year2020)" radius={4} />
          <Bar dataKey="year2021" fill="var(--color-year2021)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
