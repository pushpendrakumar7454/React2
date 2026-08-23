import React, { useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";

import { useDispatch } from "react-redux";

import Navvar from "../shared/ui/components/Navvar";
import Home from "../shared/ui/pages/Home";

import ProtectedRouter from "./protected/ProtectedRouter";
import PublicProtected from "./public/PublicProtected";

import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";

import { addUser } from "../features/auth/state/authUser";
import PostForm from "../features/posts/ui/components/PostForm";
import StoryCreate from "../features/story/ui/components/StoryCreate";
import StoryViewer from "../features/story/ui/components/StoryViewer";
import Reels from "../features/reels/ui/pages/Reels";
import Reelss from "../features/reels/ui/pages/Reels";


const AuthHydrate = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("authenticatedUser");
    if (!user) return;

    try {
      const loggedUser = JSON.parse(user);
      dispatch(addUser(loggedUser));

    } catch (error) {
      console.log("Invalid user data:", error);
      localStorage.removeItem("authenticatedUser");

    }

  }, [dispatch]);


  return <Outlet />;

};


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
                },{
                  path:"post-form",
                  element:<PostForm/>
                },{
                  path:"reels",
                  element:<Reels/>
                }
              ],

            },

          ],
        },


        // ================= PUBLIC =================

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