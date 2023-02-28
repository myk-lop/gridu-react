import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../common/interfaces";

const initialState: IUser = {
  id: "",
  fullName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    defineUser(state, action) { // TODO: keep the code consistent, by either making both methods arrow functions or both methods regular functions
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
