'use client'

const chartDataFictitious = {
  '2020': [
    { month: 1, count: 377 },
    { month: 2, count: 376 },
    { month: 3, count: 324 },
    { month: 4, count: 354 },
    { month: 5, count: 322 },
    { month: 6, count: 358 },
    { month: 7, count: 366 },
    { month: 8, count: 327 },
    { month: 9, count: 369 },
    { month: 10, count: 373 },
    { month: 11, count: 340 },
    { month: 12, count: 350 },
  ],
  '2021': [
    { month: 1, count: 359 },
    { month: 2, count: 339 },
    { month: 3, count: 348 },
    { month: 4, count: 364 },
    { month: 5, count: 379 },
    { month: 6, count: 320 },
    { month: 7, count: 361 },
    { month: 8, count: 364 },
    { month: 9, count: 327 },
    { month: 10, count: 362 },
    { month: 11, count: 364 },
    { month: 12, count: 346 },
  ],
}

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

export function ChartTicketsPerMonth() {
  const chartData = formatTicketsPerMonth(chartDataFictitious)

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
