import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtecteRoute from "./public/PublicProtecteRoute";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import ProtectedRoute from "./protected/ProtectedRoute";
import Layout from "../app/layout/Layout";
import Home from "../shared/Home";
import About from "../shared/About";
import { useDispatch } from "react-redux";
import { hydredUser } from "../features/auth/api/authApi";
import { addUser } from "../features/auth/state/authReducer";
import { hreadUserAction } from "../features/auth/state/authAction";

const AppRoutes = () => {

     const dispatch=useDispatch()

     useEffect(()=>{
        (()=>{
          dispatch(hreadUserAction())
        })()
     })

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtecteRoute />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
