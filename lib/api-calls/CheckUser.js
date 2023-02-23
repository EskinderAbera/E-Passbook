import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const CheckUserExistenceAPI = createAsyncThunk(
  "checkUser/checkUserExistenceAPI",
  async (phoneNumber) => {
    console.log(phoneNumber);
    const response = await axios.post(
      `http://localhost:9000/api/auth/checkUserExistence`,
      {
        phoneNumber: phoneNumber,
      }
    );
    return response.data;
  }
);
