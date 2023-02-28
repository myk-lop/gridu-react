import styles from "./FormError.module.scss";

type Props = { // TODO: Rename typing to be more specific. For example, FormErrorProps
  message: string;
};

const FormError = ({ message }: Props) => {
  return <div className={styles.error}>{message}</div>;
};

export default FormError;
