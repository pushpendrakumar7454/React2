import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    if (user.role === "founder") {
      return <Navigate to="/" replace />;
    }

    if (user.role === "developer") {
      return <Navigate to="/developer" replace />;
    }
  }

  return <Outlet />;
};

export default PublicRoute;