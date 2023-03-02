import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import PageNotFound from "./pages/PageNotFound";
import { URLS } from "./common/constants";
import RequireAuth from "./common/components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route
        path={URLS.HOME}
        element={
          <RequireAuth requireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path={URLS.LOGIN}
        element={
          <RequireAuth>
            <LoginPage />
          </RequireAuth>
        }
      />
      <Route
        path={URLS.SIGN_UP}
        element={
          <RequireAuth>
            <SignUpPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
