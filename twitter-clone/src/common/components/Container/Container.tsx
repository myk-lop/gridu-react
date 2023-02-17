import React from "react";
import "./Container.scss";

type size = "md" | "lg";

type Props = {
  size?: size;
  children?: JSX.Element | JSX.Element[];
};

const Container = ({ size = "md", children }: Props) => {
  return <div className={`container container-${size}`}>{children}</div>;
};

export default Container;
