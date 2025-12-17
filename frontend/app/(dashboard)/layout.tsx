import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="h-screen w-screen p-5">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
