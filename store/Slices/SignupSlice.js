import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusCode: {},
};

const Signup = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignupStatus: (state, { payload }) => {
      state.statusCode = payload;
    },
  },
});

const { reducer, actions } = Signup;
export const { setSignupStatus } = actions;
export default reducer;
