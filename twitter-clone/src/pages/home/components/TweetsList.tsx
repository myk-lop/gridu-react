import React from "react";

import Tweet from "./Tweet/Tweet";
import { useSelector } from "react-redux"; // TODO: absolute imports should be on top of the file. Move this import to the top of the file.

const TweetsList = () => {
  const tweets = useSelector((state: any) => state.tweets); // TODO: provide better typing

  return (
    <ul style={{ marginTop: "40px" }}> {/* TODO: move styles to a separate SCSS file */}
      {tweets.map((tweet: any) => ( // TODO: provide better typing
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </ul>
  );
};

export default TweetsList;
