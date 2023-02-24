import { createSlice } from "@reduxjs/toolkit";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";

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
