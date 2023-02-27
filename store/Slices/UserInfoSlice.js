import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

const { reducer, actions } = UserInfoSlice;
export const { setUserInfo } = actions;
export default reducer;
