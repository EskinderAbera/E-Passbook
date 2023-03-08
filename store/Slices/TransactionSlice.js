import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statements: {},
  isLoaded: true,
};

const TransactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setStatements: (state, { payload }) => {
      state.statements = payload;
    },
    setIsLoaded: (state, { payload }) => {
      state.isLoaded = payload;
    },
  },
});

const { reducer, actions } = TransactionSlice;
export const { setStatements, setIsLoaded } = actions;
export default reducer;
