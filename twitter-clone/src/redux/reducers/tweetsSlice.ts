import { createSlice } from "@reduxjs/toolkit";
import { ITweet } from "../../common/interfaces";

const initialState: ITweet[] = [];

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets(state, action) { // TODO: keep the code consistent, by either making both methods arrow functions or both methods regular functions
      state = action.payload;
      return state;
    },
  },
});

export const { setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
