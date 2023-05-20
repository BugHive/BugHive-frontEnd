import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
        <Outlet />
      </div>
    );
  }
  return <Navigate to={"/login"} />;
}
