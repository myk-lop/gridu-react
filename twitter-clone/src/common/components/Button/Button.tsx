import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
