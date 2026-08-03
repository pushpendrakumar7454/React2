import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from '../components/Navbar'
import MainLayout from '../app/layout/MainLayout'
import Login from '../featores/auth/ui/pages/Login'
import Register from '../featores/auth/ui/pages/Register'
import PublicProtectedRoute from './protected/PublicProtectedRoute'
import ProtectedRoute from './protected/ProtectedRoute'
import Home from '../shared/ui/pages/Home'

const AppRoute = () => {
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
