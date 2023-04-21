import { createSlice } from "@reduxjs/toolkit";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";

const initialState = {
  msg: null,
};

const ChangePasswordSlice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    setMessage: (state, { payload }) => {
      state.msg = payload;
    },
  },
});

const { reducer, actions } = ChangePasswordSlice;
export const { setMessage } = actions;
export default reducer;
