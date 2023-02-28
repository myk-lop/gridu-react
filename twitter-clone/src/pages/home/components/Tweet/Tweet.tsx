import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./Tweet.module.scss";

const Tweet = ({ tweet }: any) => { // TODO: provide better typing
  const cleanHtml = DOMPurify.sanitize(tweet.text);

  return (
    <li className={styles.tweet}>
      <div className={styles.author}>{tweet.author_id}</div>
      <p
        className={styles.tweetText}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      ></p> // TODO: can be a self-closing tag
    </li>
  );
};

export default Tweet;
