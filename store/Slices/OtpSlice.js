import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {},
};

const OtpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setCheckStatus: (state, { payload }) => {
      state.res = payload;
    },
  },
});

const { reducer, actions } = OtpSlice;
export const { setCheckStatus } = actions;
export default reducer;
