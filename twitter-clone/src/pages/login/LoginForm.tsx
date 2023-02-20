import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/components/TextInput/TextInput";
import Button from "../../common/components/Button/Button";
import axios from "axios";
import { API_URLS, URLS } from "../../common/constants";
import { useDispatch } from "react-redux";
import { defineUser } from "../../redux/reducers/userSlice";
import FormError from "../../common/components/FormError/FormError";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .max(256, "Must be less than 256 characters")
    .min(8, "Must be 8 or more characters")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const handleLogin = async ({ username, password }: LoginFormValues) => {
    await axios
      .get(`${API_URLS.USERS}${username}`)
      .then((response) => {
        const user = {
          id: response.data.id,
          name: response.data.name,
          isAuthenticated: true,
        };
        dispatch(defineUser(user));
        navigate(URLS.HOME, { replace: true });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setFormError("Invalid email or password");
        } else {
          setFormError("Something went wrong");
        }
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ username, password }: LoginFormValues) => {
        await handleLogin({ username, password });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button type="submit" disabled={isSubmitting}>
            Log In
          </Button>

          {formError && <FormError message={formError} />}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
