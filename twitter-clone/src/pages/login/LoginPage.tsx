import React from "react";
import AuthWrapper from "../../common/components/AuthWrapper/AuthWrapper";
import { URLS } from "../../common/constants";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <AuthWrapper
        title="Log in"
        message="Don't have an account?"
        link={{ url: URLS.SIGN_UP, text: "Sign up" }}
      >
        <LoginForm></LoginForm>
      </AuthWrapper>
    </>
  );
};

export default LoginPage;
