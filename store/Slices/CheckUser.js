import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CheckUserExistenceAPI } from "../../lib/api-calls/CheckUser";

const initialState = {
  userInfo: {},
};

// export const CheckUserExistenceAPI = createAsyncThunk(
//   "user/checkUserExistenceAPI",
//   async (phoneNumber) => {
//     const response = await axios.post(
//       "http://localhost:9000/api/auth/checkUserExistence",
//       { phoneNumber: phoneNumber }
//     );
//     return response.data;
//   }
// );

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
