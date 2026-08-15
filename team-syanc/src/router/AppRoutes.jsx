import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtectedRoute from './PublicProtected/PublicProtectedRoute'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import ProtectedRoute from './protected/ProtectedRoute'
import AuthLayout from '../app/layout/AuthLayout'
import Homee from '../shared/ui/pages/Homee'
import DashboardLayout from '../app/layout/DashboardLayout'
import Home from '../features/dashboard/ui/pages/Home'
import { useDispatch } from 'react-redux'

import { currentLoggedEmployee } from '../features/auth/state/auth/authAction'
import { commonRoutes } from './CommanRoutes'

const AppRoutes = () => {
const dispatch=useDispatch()

useEffect(() => {
    dispatch(currentLoggedEmployee());
}, [dispatch]);

    const router=createBrowserRouter([
        {
            path:"/",
            element:<PublicProtectedRoute/>,
            children:[
                {
                    path:"",
                    element:<AuthLayout/>,
                     children:[
                {
                    path:"",
                    element:<Login/>
                },{
                    path:"register",
                    element:<Register/>
                }
            ]
                }
            ]
           
        },{
            path:'/home',
            element:<ProtectedRoute/>,
            children:[
                {
                    path:"",
                    element:<DashboardLayout/>,
                    children:[...commonRoutes]
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
