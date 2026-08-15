import Chat from "../features/chat/ui/pages/Chat";
import Home from "../features/dashboard/ui/pages/Home";
import Settings from "../features/setting/ui/pages/Settings";

export let commonRoutes=[
    {
        path:"",
        element:<Home/>
    },
    {
        path:"chat",
        element:<Chat/>
    },
    {
        path:"setting",
        element:<Settings/>
    },{

    }
]