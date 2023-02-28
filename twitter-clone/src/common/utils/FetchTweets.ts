import axios from "axios";
import { useDispatch } from "react-redux";
import { API_URLS } from "../constants";
import { setTweets } from "../../redux/reducers/tweetsSlice";

export const FetchTweets = () => { // TODO: rename this to camelCase
  // Question: do we need to return anything from this function?
  const dispatch = useDispatch();

  axios
    .get(API_URLS.TWEETS)
    .then((response) => {
      dispatch(setTweets(response.data.reverse()));
    })
    .catch((error) => {
      console.error(`Error during fetching tweets: `, error.message);
    });
};
