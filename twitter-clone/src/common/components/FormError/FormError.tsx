import styles from "./FormError.module.scss";

type FormErrorProps = {
  message: string;
};

const FormError = ({ message }: FormErrorProps) => {
  return <div className={styles.error}>{message}</div>;
};

export default FormError;
