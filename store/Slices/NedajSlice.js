import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  res: {},
};

const nedajSlice = createSlice({
  name: "nedaj",
  initialState,
  reducers: {
    setNedajRes: (state, { payload }) => {
      state.res = payload;
    },
  },
});

const { reducer, actions } = nedajSlice;
export const { setNedajRes } = actions;
export default reducer;
