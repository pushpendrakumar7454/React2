import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicProtected from "./public/PublicProtected";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import ProtectedRouter from "./protected/ProtectedRouter";
import Layout from "../app/layout/Layout";
import Home from "../shared/ui/pages/Home";
import About from "../shared/ui/pages/About";
import Product from "../shared/ui/pages/Product";
import { hydredUser } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/useAuth";
import { hydredUseraction } from "../features/auth/state/authAction";

const AppRoutes = () => {


const dispatch=useDispatch()

    useEffect(()=>{
     (()=>{
       dispatch(hydredUseraction())
     })()
    },[])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
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
      element: <ProtectedRouter />,
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
            {
              path: "product",
              element: <Product />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
