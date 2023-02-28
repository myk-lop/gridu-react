import React from "react";
import { useSelector } from "react-redux";
import Header from "../../common/components/Header/Header";
import TweetForm from "./components/TweetForm/TweetForm";
import TweetsList from "./components/TweetsList";
import { FetchTweets } from "../../common/utils/FetchTweets";

const containerStyles = { // TODO: move this to a separate SCSS file to keep code consistent
  padding: "70px 15px",
  maxWidth: "800px",
  width: "auto",
  margin: "0 auto",
};

const HomePage = () => {
  const user = useSelector((state: any) => state.user); // TODO: provide better typing
  FetchTweets(); // TODO: fetch should be called before rendering the component
    // TODO: fetch should be called only once, not on every render
    // TODO: functions names should start with lowercase letter

  return (
    <>
      <Header userName={user.fullName} />
      <div style={containerStyles}>
        <TweetForm userId={user.id} />
        <TweetsList />
      </div>
    </>
  );
};

export default HomePage;
