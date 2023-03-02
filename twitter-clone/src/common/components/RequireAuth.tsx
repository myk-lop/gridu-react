import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { URLS } from "../constants";
import { RootState } from "../../redux/configureStore";

type RequireAuthProps = {
  children: JSX.Element | JSX.Element[];
  requireAuth?: boolean;
};

const RequireAuth = ({ children, requireAuth = false }: RequireAuthProps) => {
  const user = useSelector((state: RootState) => state.user);
  const { pathname: currentPathname } = useLocation();
  const isLoggedIn = user && user.id;
  const redirectToLogin = requireAuth && !isLoggedIn;
  const redirectToHome = currentPathname !== URLS.HOME && isLoggedIn;

  if (redirectToLogin) {
    return <Navigate to={URLS.LOGIN} replace />;
  }
  if (redirectToHome) {
    return <Navigate to={URLS.HOME} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
