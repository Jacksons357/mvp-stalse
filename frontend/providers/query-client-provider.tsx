'use client'

import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import queryClient from '@/lib/query-client'

export function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  )
}
