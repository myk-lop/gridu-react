import React from "react";

import Tweet from "./Tweet/Tweet";
import { useSelector } from "react-redux";

const TweetsList = () => {
  const tweets = useSelector((state: any) => state.tweets);

  return (
    <ul style={{ marginTop: "40px" }}>
      {tweets.map((tweet: any) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetsList;
