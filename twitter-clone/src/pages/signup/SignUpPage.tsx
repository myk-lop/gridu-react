import React from "react";
import AuthWrapper from "../../common/components/AuthWrapper/AuthWrapper";
import { URLS } from "../../common/constants";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <AuthWrapper
        title="Sign up"
        message="Already have an account??"
        link={{ url: URLS.LOGIN, text: "Log in" }}
      >
        <SignUpForm />
      </AuthWrapper>
    </>
  );
};

export default SignUpPage;
