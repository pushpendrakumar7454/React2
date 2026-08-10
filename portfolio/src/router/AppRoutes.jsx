import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  const router = createBrowserRouter([{
    path:"",
    element:<Layout/>,
    children:[
        {
            path:"",
            element:<Home/>
        },{
            path:"about",
            element:<About/>
        },{
          path:"skills",
          element:<Skills/>
        },{
          path:"project",
          element:<Projects/>
        },{
          path:"contact",
          element:<Contact/>
        }
    ]
  }
   
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
