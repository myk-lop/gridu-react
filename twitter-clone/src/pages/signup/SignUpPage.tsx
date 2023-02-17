import React from "react";
import AuthWrapper from "../../common/components/AuthWrapper/AuthWrapper";
import { URLS } from "../../common/constants";

const LoginPage = () => {
  return (
    <>
      <AuthWrapper
        title="Sign up"
        message="Already have an account??"
        link={{ url: URLS.LOGIN, text: "Log in" }}
      ></AuthWrapper>
    </>
  );
};

export default LoginPage;
