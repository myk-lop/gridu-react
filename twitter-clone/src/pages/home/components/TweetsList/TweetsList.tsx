import React from "react";
import { useSelector } from "react-redux";
import Tweet from "../Tweet/Tweet";
import { ITweet } from "../../../../common/interfaces";
import styles from "./TweetsList.module.scss";
import { RootState } from "../../../../redux/configureStore";

const TweetsList = () => {
  const tweets = useSelector((state: RootState) => state.tweets);

  return (
    <ul className={styles.list}>
      {tweets.map(({ id, text, author_id }: ITweet) => (
        <Tweet key={id} author_id={author_id} text={text} />
      ))}
    </ul>
  );
};

export default TweetsList;
