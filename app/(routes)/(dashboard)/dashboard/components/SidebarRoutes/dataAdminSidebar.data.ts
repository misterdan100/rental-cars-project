import { Calendar, SquareGanttChart } from "lucide-react";

export const dataAdminSidebar = [
    {
        icon: SquareGanttChart,
        label: 'Manage your cars',
        href: '/dashboard/admin/cars-manager'
    },
    {
        icon: Calendar,
        label: 'All reserves',
        href: '/dashboard/admin/reserves-admin'
    }
]