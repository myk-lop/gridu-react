import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextInput from "../../common/components/TextInput/TextInput";
import Button from "../../common/components/Button/Button";
import FormError from "../../common/components/FormError/FormError";
import { API_URLS, URLS } from "../../common/constants";
import { defineUser } from "../../redux/reducers/userSlice";
import { IUser } from "../../common/interfaces";

interface ISignUpFormValues {
  email: string;
  id: string;
  password: string;
  fullName: string;
}

const initialValues: ISignUpFormValues = {
  email: "",
  id: "",
  password: "",
  fullName: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Incorrect email format").required("Required"),
  id: Yup.string()
    .max(36, "Must be less than 36 characters")
    .min(2, "Must be 2 or more characters")
    .required("Required"),
  password: Yup.string()
    .max(256, "Must be less than 256 characters")
    .min(8, "Must be 8 or more characters")
    .required("Required"),
  fullName: Yup.string()
    .max(512, "Must be less than 512 characters")
    .min(1, "Must be 1 or more characters")
    .required("Required"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const handleSignUp = async (values: ISignUpFormValues) => {
    const { email, id, password, fullName } = values;

    await axios
      .post(`${API_URLS.USERS}`, {
        email,
        id,
        password,
        fullName,
      })
      .then((response: AxiosResponse<IUser>) => {
        const user = {
          id: response.data.id,
          fullName: response.data.fullName,
          email: response.data.email,
        };
        dispatch(defineUser(user));
        navigate(URLS.HOME, { replace: true });
      })
      .catch((error) => {
        setFormError(`Something went wrong. Error: ${error.message}`);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <TextInput
            label="Username"
            name="id"
            type="text"
            placeholder="Username"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextInput
            label="Full name"
            name="fullName"
            type="text"
            placeholder="Full name"
          />

          <Button type="submit" disabled={isSubmitting}>
            Sign up
          </Button>

          {formError && <FormError message={formError} />}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
