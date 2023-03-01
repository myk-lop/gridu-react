import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios, { AxiosResponse } from "axios";
import Header from "../../common/components/Header/Header";
import TweetForm from "./components/TweetForm/TweetForm";
import TweetsList from "./components/TweetsList/TweetsList";
import { API_URLS } from "../../common/constants";
import { setTweets } from "../../redux/reducers/tweetsSlice";
import styles from "./HomePage.module.scss";
import { ITweet } from "../../common/interfaces";
import { RootState } from "../../redux/configureStore";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchTweets = (): void => {
    axios
      .get(API_URLS.TWEETS)
      .then((response: AxiosResponse<ITweet[]>) => {
        dispatch(setTweets(response.data.reverse()));
      })
      .catch((error) => {
        console.error(`Error during fetching tweets: `, error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <>
      <Header userName={user.fullName} />
      <div className={styles.container}>
        <TweetForm userId={user.id} />
        {!loading && <TweetsList />}
      </div>
    </>
  );
};

export default HomePage;
