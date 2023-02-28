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
          <RequireAuth requireAuth={true}> // TODO: if you're passing a true value, you can do it like this: <RequireAuth requireAuth>, it will automatically evaluate to true
            <HomePage />
          </RequireAuth>
        }
      />
      <Route
        path={URLS.LOGIN}
        element={
          <RequireAuth requireAuth={false}> // TODO: we can have the situation, when we have 1000 routes, and we need to pass the same prop to all of them. It's not a good idea to do it manually. We can set the default value in the component, so whenever we're NOT passing this prop, it will be set to false by default. So, we can do it like this: <RequireAuth>
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
