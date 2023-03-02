import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITweet } from "../../common/interfaces";

const initialState: ITweet[] = [];

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    setTweets: (state: ITweet[], action: PayloadAction<ITweet[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
