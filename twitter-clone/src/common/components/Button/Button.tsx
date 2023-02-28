import React from "react";
import styles from "./Button.module.scss";

interface Props { // TODO: rename typing to be more specific
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  additionalStyles?: {}; // TODO: we can get rid of this property
}

const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  additionalStyles = {},
}) => {
  return (
    <button
      className={styles.btn}
      style={additionalStyles}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
