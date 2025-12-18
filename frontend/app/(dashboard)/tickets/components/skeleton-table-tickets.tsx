'use client'

import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type SkeletonTableTicketsProps = {
  columns?: number
  rows?: number
}

export function SkeletonTableTickets({
  columns = 5,
  rows = 10,
}: SkeletonTableTicketsProps) {
  return (
    <div className="overflow-hidden rounded-md border mt-17">
      <Table>
        {/* HEADER */}
        <TableHeader>
          <TableRow className="py-5">
            {Array.from({ length: columns }).map((_, index) => (
              <TableHead key={index}>
                <Skeleton className="h-4 w-[80%]" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* BODY */}
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex} className="h-13">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton className="h-5 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
