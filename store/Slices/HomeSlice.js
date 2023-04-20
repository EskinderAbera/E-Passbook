import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: null,
  isLoaded: true,
  checkStatus: 0,
  primaryAccount: false,
};

const AccountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, { payload }) => {
      state.accounts = payload;
    },
    setIsLoaded: (state, { payload }) => {
      state.isLoaded = payload;
    },
    setActiveStatus: (state, { payload }) => {
      state.checkStatus = payload;
    },
    setPrimaryAccount: (state) => {
      state.primaryAccount = true;
    },
    updateAccount: (state, action) => {
      state.accounts.accounts = state.accounts.accounts.map((acct) =>
        acct.accountNumber === action.payload.accountNo
          ? action.payload.account
          : acct
      );
    },
  },
});

const { reducer, actions } = AccountsSlice;
export const {
  setAccounts,
  setIsLoaded,
  setActiveStatus,
  setPrimaryAccount,
  updateAccount,
} = actions;
export default reducer;
