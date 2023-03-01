import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    defineUser: (state, action: PayloadAction<IUser>) => {
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
