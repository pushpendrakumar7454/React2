import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router";
import { useDispatch } from "react-redux";

import Layout from "../app/layout/Layout";
import ProtectedRouter from "./protected/ProtectedRouter";
import Navvar from "../shared/ui/components/Navvar";
import Home from "../shared/ui/pages/Home";
import PublicProtected from "./public/PublicProtected";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";

import { addUser } from "../features/auth/state/authUser";



const AuthHydrate = () => {
  const dispatch = useDispatch();
  const hydredUser=()=>{
    const user = localStorage.getItem("authenticatedUser");
    if (!user) return;

    try {
      const loggedUser = JSON.parse(user);
      dispatch(addUser(loggedUser));
    } catch (error) {
      console.log("Invalid user data:", error);
      localStorage.removeItem("authenticatedUser");
    }
  }

  useEffect(() => {
    hydredUser()
  }, []);

  return <Outlet />;
};


// -------------------------
// App Routes
// -------------------------
const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      element: <AuthHydrate />,
      children: [
        {
          element: <ProtectedRouter />,
          children: [
            {
              element: <Navvar />,
              children: [
                {
                  path: "/",
                  element: <Home />,
                },
              ],
            },
          ],
        },

        {
          element: <PublicProtected />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;