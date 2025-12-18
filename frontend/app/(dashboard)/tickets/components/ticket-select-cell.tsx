'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Option = {
  label: string
  value: string
}

type TicketSelectCellProps = {
  value: string
  options: Option[]
  onChange: (value: string) => void
}

export function TicketSelectCell({
  value,
  options,
  onChange,
}: TicketSelectCellProps) {
  const statusStyles = {
    open: 'bg-green-50 text-green-700',
    closed: 'bg-red-50 text-red-700',
  }

  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <SelectTrigger
        className={`h-8 w-[120px] ${statusStyles[value as keyof typeof statusStyles]}`}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
