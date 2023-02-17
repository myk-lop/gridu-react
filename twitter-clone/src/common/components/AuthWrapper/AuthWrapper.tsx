import React from "react";
import { Link } from "react-router-dom";
import "./AuthWrapper.scss";

type Props = {
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
    <div className="auth-wrapper">
      <div className="auth-box">
        <h3>{title}</h3>
        {children}
      </div>
      <div className="auth-box-message">
        {message} <Link to={link.url}>{link.text}</Link>
      </div>
    </div>
  );
};

export default AuthWrapper;
