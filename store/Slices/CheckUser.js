import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUserInfo } = actions;
export default reducer;
