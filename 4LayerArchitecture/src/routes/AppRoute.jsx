import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from '../components/Navbar'
import MainLayout from '../app/layout/MainLayout'
import Login from '../featores/auth/ui/pages/Login'
import Register from '../featores/auth/ui/pages/Register'
import PublicProtectedRoute from './protected/PublicProtectedRoute'
import ProtectedRoute from './protected/ProtectedRoute'
import Home from '../shared/ui/pages/Home'
import { api } from '../config/axiosInstance'
import { hydreadUser } from '../featores/auth/api/authApi'

const AppRoute = () => {

    useEffect(()=>{
      (async()=>{
        try {
          let responce = await hydreadUser()
          console.log(responce);
          
          
        } catch (error) {
          console.log(error);
          
          
        }
       
      })()

    },[])


   const router = createBrowserRouter([
  {
    path:'/',
    element: <PublicProtectedRoute />,
    children: [
      {
        index:true,
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/main",
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

    return <RouterProvider router={router}/>
}

export default AppRoute
