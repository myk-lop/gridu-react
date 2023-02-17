import React from "react";
import styles from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      className={styles.btn}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
