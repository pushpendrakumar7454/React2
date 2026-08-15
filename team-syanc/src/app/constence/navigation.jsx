import {
    LayoutDashboard,
    ListTodo,
    MessageSquare,
    CalendarCheck
} from "lucide-react";

export const employeeNavigation = [
    {
        path: "/home",
        title: "Dashboard",
        icon: <LayoutDashboard size={20} />
    },
    {
        path: "/home/myTask",
        title: "My Tasks",
        icon: <ListTodo size={20} />
    },
    {
        path: "/home/chat",
        title: "Chat",
        icon: <MessageSquare size={20} />
    },
    {
        path: "/home/attendence",
        title: "Attendance",
        icon: <CalendarCheck size={20} />
    }
];