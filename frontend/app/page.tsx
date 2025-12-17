import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="bg-background text-primary">
      <h1>Hello world</h1>
      <Button>Teste</Button>
      <ModeToggle />
    </div>
  )
}
