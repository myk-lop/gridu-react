import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./Tweet.module.scss";

type TweetProps = {
  text: string;
  authorId: string;
};

const Tweet = ({ text, authorId }: TweetProps) => {
  const cleanHtml = DOMPurify.sanitize(text);

  return (
    <li className={styles.tweet}>
      <div className={styles.author}>{authorId}</div>
      <p
        className={styles.tweetText}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </li>
  );
};

export default Tweet;
