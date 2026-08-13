import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from '../app/layout/Layout'
import ProtectedRouter from './protected/ProtectedRouter'
import Navvar from '../shared/ui/components/Navvar'
import Home from '../shared/ui/pages/Home'
import PublicProtected from './public/PublicProtected'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'

const AppRoutes = () => {


    let router=createBrowserRouter([
        {
          path:"",
          element:<ProtectedRouter/>,
          children:[
            {
                path:"",
                element:<Navvar/>,
                children:[{
                    path:"",
                    element:<Home/>
                }]
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
            }]
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRoutes
