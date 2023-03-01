import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./Tweet.module.scss";
import { ITweet } from "../../../../common/interfaces";

const Tweet = ({ text, author_id }: ITweet) => {
  const cleanHtml = DOMPurify.sanitize(text);

  return (
    <li className={styles.tweet}>
      <div className={styles.author}>{author_id}</div>
      <p
        className={styles.tweetText}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </li>
  );
};

export default Tweet;
