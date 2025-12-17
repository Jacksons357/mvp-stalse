'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const fakeTopTicketTypes = [
  { ticket_type: 'Refund request', count: 1752 },
  { ticket_type: 'Technical issue', count: 1747 },
  { ticket_type: 'Cancellation request', count: 1695 },
  { ticket_type: 'Product inquiry', count: 1641 },
  { ticket_type: 'Billing inquiry', count: 1634 },
]

export const topTicketTypesChartConfig = {
  count: {
    label: 'Tickets',
    color: '#2563eb',
  },
} satisfies ChartConfig

export function ChartTopTicketTypes() {
  return (
    <Card className="px-2">
      <h1 className="text-lg font-semibold text-muted-foreground text-center">
        Top Tipos de Ticket
      </h1>
      <ChartContainer config={topTicketTypesChartConfig} className="md:h-40">
        <BarChart data={fakeTopTicketTypes} layout="vertical">
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
