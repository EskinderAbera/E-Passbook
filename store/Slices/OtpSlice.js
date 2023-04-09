import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {},
  status: "",
};

const OtpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setCheckStatus: (state, { payload }) => {
      state.res = payload;
    },
    setOtpStatus: (state, { payload }) => {
      state.res = {};
      state.status = payload;
    },
  },
});

const { reducer, actions } = OtpSlice;
export const { setCheckStatus, setOtpStatus } = actions;
export default reducer;
