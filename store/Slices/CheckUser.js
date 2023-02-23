import { createSlice } from "@reduxjs/toolkit";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";

const initialState = {
  loading: false,
  error: "",
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CheckUserExistenceAPI.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(CheckUserExistenceAPI.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.error = "";
    });
    builder.addCase(CheckUserExistenceAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.userInfo = {};
    });
  },
});

export default userSlice.reducer;
