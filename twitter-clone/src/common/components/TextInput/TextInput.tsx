import React from "react";
import { useField } from "formik";
import styles from "./TextInput.module.scss";

const TextInput = ({ label, ...props }: any): JSX.Element => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div
      className={`${styles.formGroup} ${
        hasError ? styles.formGroupErrored : ""
      }`}
    >
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.textInput} {...field} {...props} />
      {hasError ? <div className={styles.error}>{meta.error}</div> : null}
    </div>
  );
};

export default TextInput;
