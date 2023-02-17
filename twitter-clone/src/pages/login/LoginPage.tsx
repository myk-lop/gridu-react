import React from "react";
import AuthWrapper from "../../common/components/AuthWrapper/AuthWrapper";
import { URLS } from "../../common/constants";

const LoginPage = () => {
  return (
    <>
      <AuthWrapper
        title="Log in"
        message="Don't have an account?"
        link={{ url: URLS.SIGN_UP, text: "Sign up" }}
      ></AuthWrapper>
    </>
  );
};

export default LoginPage;
