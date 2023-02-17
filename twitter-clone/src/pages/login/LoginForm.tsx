import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/components/TextInput/TextInput";
import Button from "../../common/components/Button/Button";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .max(256, "Must be less than 256 characters")
    .min(8, "Must be 8 or more characters")
    .required("Required"),
});

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: LoginFormValues) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
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
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <Button type="submit" disabled={isSubmitting}>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
