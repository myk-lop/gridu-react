import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../common/interfaces";

const initialState: IUser = {
  id: "",
  name: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    defineUser(state, action) {
      console.log("defineUser CALLLLL!!!");

      state = action.payload;
      return state;
    },
    removeUser: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { defineUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
