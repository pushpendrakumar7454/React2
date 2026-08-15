import Department from "../../features/admin_module/department/ui/pages/Department";
import Document from "../../features/admin_module/document/ui/pages/Document";
import Employee from "../../features/admin_module/employee/ui/pages/Employee";
import Tasks from "../../features/admin_module/tasks/ui/pages/Tasks";

export const adminRoute = [
    {
        path: "/home/employee",
        element: <Employee/>,
    },
    {
        path:"/home/department",
        element:<Department/>

    },{
        path:"/home/tasks",
        element:<Tasks/>        
    },{
        path:"/home/document",
        element:<Document/>
    }
]