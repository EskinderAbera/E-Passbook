import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {},
};

const ChangePasswordSlice = createSlice({
  name: "changepassword",
  initialState,
  reducers: {
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

const { reducer, actions } = ChangePasswordSlice;
export const { setInfo } = actions;
export default reducer;
