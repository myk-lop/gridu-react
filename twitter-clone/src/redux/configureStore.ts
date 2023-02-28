import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./reducers/tweetsSlice";
import userReducer from "./reducers/userSlice";
import { LOCAL_STORAGE_KEYS } from "../common/constants";
import { defineUser } from "./reducers/userSlice";
import { IUser } from "../common/interfaces";

const userMiddleware = (store: any) => (next: any) => (action: any) => { // TODO: provide better typing. Try to avoid using any even in case if it's not possible to provide better typing (there's also an `unknown` type)
  const result = next(action);

  if (action.type?.endsWith("User")) { // Question: Is it really necessary to catch actions by looking at the string part? Are you expecting a specific action here?
    const user = store.getState().user;
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));
    console.log("Set user", user); // TODO: remove console log
  }
  return result;
};

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userMiddleware),
});

const user: IUser = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEYS.USER) || "null"
);
store.dispatch(defineUser(user));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
