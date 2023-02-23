import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import baseUrl from "../../constants/url";

const initialState = {
  loading: false,
  phoneNumber: "",
  error: "",
  isSuccess: false,
  isError: false,
  fullName: "",
};

export const validatePhone = createAsyncThunk(
  "phone/validatePhone",
  async (phoneNo) => {
    const response = await axios.post(`${baseUrl}/checkphone/`, {
      phonenumber: phoneNo,
    });
    return response.data;
  }
);

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(validatePhone.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(validatePhone.fulfilled, (state, action) => {
      state.fullName = action.payload;
      state.loading = false;
      state.error = "";
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(validatePhone.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.fullName = "";
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default phoneSlice.reducer;
