import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { URLS } from "../constants";

function RequireAuth({ // TODO: change this component from function type to const to keep code consistent.
    // TODO: move this component out of the utils folder, because it's not a utility function
  children,
  requireAuth = true, // TODO: it's better to expect that our application would have more routes that do not require authentication. So we can do vice versa, and explicitly wait for requireAuth = true, and set it to false by default.
}: {
  children: JSX.Element; // TODO: Can be JSX.Element[] as well
  requireAuth?: boolean;
}) {
  const user = useSelector((state: any) => state.user); // TODO: provide better typing
  const { pathname: currentPathname } = useLocation();
  const redirectToLogin = requireAuth && (!user || !user.id);
  const redirectToHome = currentPathname !== URLS.HOME && user && user.id; // TODO: we have some repetitive code here. So we can create a variable isLoggedIn and use it in both places

  if (redirectToLogin) {
    return <Navigate to={URLS.LOGIN} replace />;
  }
  if (redirectToHome) {
    return <Navigate to={URLS.HOME} replace />;
  }

  return children;
}

export default RequireAuth;
