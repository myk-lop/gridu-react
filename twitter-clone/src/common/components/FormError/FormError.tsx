import styles from "./FormError.module.scss";

type Props = {
  message: string;
};

const FormError = ({ message }: Props) => {
  return <div className={styles.error}>{message}</div>;
};

export default FormError;
