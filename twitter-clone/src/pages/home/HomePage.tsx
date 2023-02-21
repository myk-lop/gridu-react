import React from "react";
import { useSelector } from "react-redux";
import Header from "../../common/components/Header/Header";
import TweetForm from "./components/TweetForm/TweetForm";
import TweetsList from "./components/TweetsList";
import { FetchTweets } from "../../common/utils/FetchTweets";

const containerStyles = {
  padding: "70px 15px",
  maxWidth: "800px",
  width: "auto",
  margin: "0 auto",
};

const HomePage = () => {
  const user = useSelector((state: any) => state.user);
  FetchTweets();

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
