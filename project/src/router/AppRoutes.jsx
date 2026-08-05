import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { addUser } from "../features/auth/authSlice";
import PublicRoute from "./public/PublicRoute";
import ProtectedRouter from "./provider/ProtectedRouter";
import CreateStartup from "../pages/CreateStartup";
import StartupDetails from "../components/StartupDetails";
import MyStartups from "../components/MyStartups";
import Bookmarks from "../pages/Bookmarks";
import DevoloperHome from "../pages/DevoloperHome";
import DevoloperLayout from "../layout/DevoloperLayout";
import DeveloperExplore from "../components/DeveloperExplore";
import DeveloperBookmarks from "../components/DeveloperBookmarks";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser =
      JSON.parse(localStorage.getItem("loggedinUser")) || null;

    if (loggedInUser) {
      dispatch(addUser(loggedInUser));
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      element: <ProtectedRouter />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "create-startup",
              element: <CreateStartup />,
            },
            {
              path: "productdetail/:id",
              element: <StartupDetails />,
            },
            {
              path: "my-startups",
              element: <MyStartups />,
            },
            {
              path: "edit-startup/:id",
              element: <CreateStartup />,
            },
            {
              path: "bookmarks",
              element: <Bookmarks />,
            },
          ],
        },
        ,
        {
          path: "/developer",
          element: <DevoloperLayout />,
          children: [
            {
              index: true,
              element: <DevoloperHome />,
            },{
              path:"DeveloperExplore",
              element:<DeveloperExplore/>
            },{
              path:"developerbookmarks",
              element:<DeveloperBookmarks/>
            }
          ],
        },
      ],
    },
    {
      element: <PublicRoute />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
