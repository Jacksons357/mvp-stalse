import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardTotalTicketsProps {
  totalTickets: number
}

export default function CardTotalTickets({
  totalTickets,
}: CardTotalTicketsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total de Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{totalTickets}</p>
      </CardContent>
    </Card>
  )
}
