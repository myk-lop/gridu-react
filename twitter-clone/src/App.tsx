import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import PageNotFound from "./pages/PageNotFound";
import { URLS } from "./common/constants";
import RequireAuth from "./common/utils/RequireAuth";

function App() {
  return (
    <Routes>
      <Route
        path={URLS.HOME}
        element={
          <RequireAuth requireAuth={true}>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path={URLS.LOGIN}
        element={
          <RequireAuth requireAuth={false}>
            <LoginPage />
          </RequireAuth>
        }
      />
      <Route
        path={URLS.SIGN_UP}
        element={
          <RequireAuth requireAuth={false}>
            <SignUpPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
