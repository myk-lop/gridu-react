import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { removeUser } from "../../../redux/reducers/userSlice";

const Header = ({ userName }: { userName: string }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(removeUser());
  };

  return (
    <header className={styles.header}>
      <div className={styles.userName}>{userName}</div>
      <Button onClick={logOut} styleType="secondary">
        Log out
      </Button>
    </header>
  );
};

export default Header;
