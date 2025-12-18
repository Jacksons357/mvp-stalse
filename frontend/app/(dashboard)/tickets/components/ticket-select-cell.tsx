'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'

type TicketSelectCellProps<T extends string> = {
  value: T
  options: { label: string; value: T; color?: string }[]
  onChange: (value: T) => void
  loading?: boolean
  disabled?: boolean
  className?: string
}

export function TicketSelectCell<T extends string>({
  value,
  options,
  onChange,
  loading = false,
  disabled = false,
  className,
}: TicketSelectCellProps<T>) {
  return (
    <div className={`relative ${className || ''}`}>
      {loading ? (
        <div className="flex justify-center items-center h-8">
          <Spinner className="h-4 w-4" />
        </div>
      ) : (
        <Select
          value={value}
          onValueChange={(val) => onChange(val as T)}
          disabled={disabled || loading}
        >
          <SelectTrigger className="h-8 w-[120px]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.color && (
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${opt.color}`}
                  />
                )}
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )
}
