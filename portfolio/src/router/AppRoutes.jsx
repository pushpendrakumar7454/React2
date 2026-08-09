import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../presentation/pages/Home";
import About from "../presentation/pages/About";
import Projects from "../presentation/pages/Projects";
import ProjectDetails from "../presentation/pages/ProjectDetails";
import Contact from "../presentation/pages/Contact";

const AppRoutes = () => {
  const router = createBrowserRouter([
  
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
