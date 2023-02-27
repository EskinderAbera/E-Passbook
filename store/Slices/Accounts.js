import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Accounts: [],
};

const AccountSlice = createSlice({
  name: "equbReports",
  initialState,
  reducers: {
    setAccounts: (state, { payload }) => {
      state.Accounts = payload;
    },
  },
});

const { reducer, actions } = AccountSlice;
export const { setAccounts } = actions;
export default reducer;
