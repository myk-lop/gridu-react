import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../redux/reducers/userSlice";

const buttonStyles = {
  backgroundColor: "#fff",
  color: "var(--main-color)",
  padding: "5px 10px",
  fontSize: "0.8rem",
};

const Header = ({ userName }: { userName: string }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.userName}>{userName}</div>
      <Button onClick={logOut} additionalStyles={buttonStyles}>
        Log out
      </Button>
    </header>
  );
};

export default Header;
