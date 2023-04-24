import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
};

const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

const { reducer, actions } = LoadingSlice;
export const { setLoading, setError } = actions;
export default reducer;
