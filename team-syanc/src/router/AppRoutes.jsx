import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtectedRoute from './PublicProtected/PublicProtectedRoute'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import ProtectedRoute from './protected/ProtectedRoute'
import Layout from '../app/layout/Layout'
import Homee from '../shared/ui/pages/Homee'

const AppRoutes = () => {

    const router=createBrowserRouter([
        {
            path:"/",
            element:<PublicProtectedRoute/>,
            children:[
                {
                    path:"",
                    element:<Login/>
                },{
                    path:"register",
                    element:<Register/>
                }
            ]
        },{
            path:"/main",
            element:<ProtectedRoute/>,
            children:[
                {
                    path:"",
                    element:<Layout/>,
                    children:[{
                        path:"",
                        element:<Homee/>
                    }]
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
