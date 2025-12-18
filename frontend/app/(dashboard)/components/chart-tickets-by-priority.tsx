'use client'

import { Cell, Pie, PieChart } from 'recharts'
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { TicketsByPriority } from '@/types/metrics'

// export const fakeTicketsByPriority = [
//   { priority: 'Medium', count: 2192 },
//   { priority: 'Critical', count: 2129 },
//   { priority: 'High', count: 2085 },
//   { priority: 'Low', count: 2063 },
// ]

export const ticketsByPriorityChartConfig = {
  Medium: {
    label: 'Medium',
    color: '#2563eb',
  },
  High: {
    label: 'High',
    color: '#f59e0b',
  },
  Critical: {
    label: 'Critical',
    color: '#dc2626',
  },
  Low: {
    label: 'Low',
    color: '#22c55e',
  },
} satisfies ChartConfig

interface ChartTicketsByPriorityProps {
  ticketsByPriority: TicketsByPriority[]
}

export function ChartTicketsByPriority({
  ticketsByPriority,
}: ChartTicketsByPriorityProps) {
  return (
    <ChartContainer
      config={ticketsByPriorityChartConfig}
      className="h-[260px] w-full"
    >
      <PieChart>
        <Pie
          data={ticketsByPriority}
          dataKey="count"
          nameKey="priority"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
        >
          {ticketsByPriority.map((entry) => (
            <Cell
              key={entry.priority}
              fill={`var(--color-${entry.priority})`}
            />
          ))}
        </Pie>

        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  )
}
