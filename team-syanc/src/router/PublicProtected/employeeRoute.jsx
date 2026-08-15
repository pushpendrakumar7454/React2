import Attendence from "../../features/employee_module/Attendence/ui/pages/Attendence";
import MyTask from "../../features/employee_module/MyTask/ui/pages/MyTask";
import Profile from "../../features/employee_module/profile/ui/pages/Profile";

export const employeeRoute=[
    {
        path:"/home/my-Task",
        element:<MyTask/>
    },{
        path:"/home/attendence",
        element:<Attendence/>
    },{
        path:"/home/profile",
        element:<Profile/>
    }
]