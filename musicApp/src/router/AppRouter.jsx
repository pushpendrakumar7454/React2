import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Listner from '../pages/Listner'
import Layout from '../layout/Layout';
import About from '../pages/About';
import  Login  from '../compononets/Login';
import Register from '../compononets/Register';
import Artist from '../pages/Artist';
import ProtectedRouter from './ProtectedRouter';
import PublicProtected from './PublicProtected';

const AppRouter = () => {

   const router=createBrowserRouter([{
    element:<ProtectedRouter/>,
    children:[{
        path:'/',
        element:<Layout/>,
        children:[{
            path:"",
            element:<Listner/>
        },{
            path:"artist",
            element:<Artist/>
        }
    ]
    }
]
   },{
    element:<PublicProtected/>,
    children:[{
        path:"/login",
        element:<Login/>
    },{
        path:"/register",
        element:<Register/>
    }
]
   }

   ])


  return <RouterProvider router={router}/>
}

export default AppRouter;