import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../features/phoneVerification/phoneSlice";

const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export default store;
