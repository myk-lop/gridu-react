import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextInput from "../../common/components/TextInput/TextInput";
import Button from "../../common/components/Button/Button";
import { API_URLS, URLS } from "../../common/constants";
import { defineUser } from "../../redux/reducers/userSlice";
import FormError from "../../common/components/FormError/FormError";

interface ILoginFormValues {
  username: string;
  password: string;
}

const initialValues: ILoginFormValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .max(36, "Must be less than 36 characters")
    .min(2, "Must be 2 or more characters")
    .required("Required"),
  password: Yup.string()
    .max(256, "Must be less than 256 characters")
    .min(8, "Must be 8 or more characters")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const handleLogin = async ({ username, password }: ILoginFormValues) => {
    await axios
      .get(`${API_URLS.USERS}${username}`)
      .then((response) => {
        if (password !== response.data.password) {
          setFormError("Invalid password");
          return;
        }

        const user = {
          id: response.data.id,
          fullName: response.data.fullName,
          email: response.data.email,
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
      onSubmit={async ({ username, password }: ILoginFormValues) => {
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
