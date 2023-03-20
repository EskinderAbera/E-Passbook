import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseAccount: null,
  expenseReceiverAccount: null,
  expenseCategory: null,
  expenseType: "INCOME",
  expenseAmount: null,
  records: null,
};

const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setAccount: (state, { payload }) => {
      state.expenseAccount = payload;
    },
    setReceiverAccount: (state, { payload }) => {
      state.expenseReceiverAccount = payload;
    },
    setCategory: (state, { payload }) => {
      state.expenseCategory = payload;
    },
    setType: (state, { payload }) => {
      state.expenseType = payload;
    },
    setAmount: (state, { payload }) => {
      state.expenseAmount = payload;
    },
    setRecords: (state, { payload }) => {
      state.records = payload;
    },
  },
});

const { reducer, actions } = ExpenseSlice;
export const {
  setAccount,
  setReceiverAccount,
  setCategory,
  setType,
  setAmount,
  setRecords,
} = actions;
export default reducer;
