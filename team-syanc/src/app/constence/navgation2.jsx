import {
    LayoutDashboard,
    Building2,
    FileText,
    Users,
    ListTodo
} from "lucide-react";

export const adminNavigations = [
    {
        path: "/home",
        title: "Dashboard",
        icon: <LayoutDashboard size={20} />
    },
    {
        path: "/home/department",
        title: "Department",
        icon: <Building2 size={20} />
    },
    {
        path: "/home/document",
        title: "Document",
        icon: <FileText size={20} />
    },
    {
        path: "/home/employee",
        title: "Employee",
        icon: <Users size={20} />
    },
    {
        path: "/home/tasks",
        title: "Tasks",
        icon: <ListTodo size={20} />
    }
];