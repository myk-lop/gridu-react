import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { URLS } from "../constants";

function RequireAuth({
  children,
  requireAuth = true,
}: {
  children: JSX.Element;
  requireAuth?: boolean;
}) {
  const user = useSelector((state: any) => state.user);
  const { pathname: currentPathname } = useLocation();
  const redirectToLogin = requireAuth && (!user || !user.id);
  const redirectToHome = currentPathname !== URLS.HOME && user && user.id;

  if (redirectToLogin) {
    return <Navigate to={URLS.LOGIN} replace />;
  }
  if (redirectToHome) {
    return <Navigate to={URLS.HOME} replace />;
  }

  return children;
}

export default RequireAuth;
