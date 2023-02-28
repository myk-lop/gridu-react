import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthWrapper.module.scss";

type Props = { // TODO: Rename this type to something more descriptive
  title: string;
  link: {
    url: string;
    text: string;
  };
  message: string;
  children?: JSX.Element | JSX.Element[];
};

const AuthWrapper = ({ children, message, link, title }: Props) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authBox}>
        <h3>{title}</h3>
        {children}
      </div>
      <div className={styles.authWrapperMessage}>
        {message} <Link to={link.url}>{link.text}</Link>
      </div>
    </div>
  );
};

export default AuthWrapper;
