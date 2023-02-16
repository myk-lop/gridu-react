import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import PageNotFound from "./pages/PageNotFound";
import { URLS } from "./common/constants";

function App() {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<HomePage />} />
      <Route path={URLS.LOGIN} element={<LoginPage />} />
      <Route path={URLS.SIGN_UP} element={<SignUpPage />} />
      <Route element={PageNotFound} />
    </Routes>
  );
}

export default App;
