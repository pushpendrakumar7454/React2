import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;