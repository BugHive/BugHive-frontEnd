import React, { Suspense, useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Spinner from '../../components/Spinner';
export default function ProtectedRoute() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      login();
    } else {
      logout();
    }
  }, [isLoggedIn, login, logout]);

  if (isLoggedIn) {
    return (
      <div>
      <Suspense fallback={<Spinner/>}>
          <Outlet />
      </Suspense>
      </div>
    );
  }
  return <Navigate to={"/login"} />;
}
