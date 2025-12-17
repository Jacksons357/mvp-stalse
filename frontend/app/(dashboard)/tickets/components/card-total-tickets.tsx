import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CardTotalTickets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total de Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">8469</p>
      </CardContent>
    </Card>
  )
}
