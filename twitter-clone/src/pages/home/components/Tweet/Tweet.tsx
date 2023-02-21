import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./Tweet.module.scss";

const Tweet = ({ tweet }: any) => {
  const cleanHtml = DOMPurify.sanitize(tweet.text);

  return (
    <div className={styles.tweet}>
      <div className={styles.author}>{tweet.author_id}</div>
      <p
        className={styles.tweetText}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      ></p>
    </div>
  );
};

export default Tweet;
