import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/Accounts";
import RegisterReducer from "./Slices/RegisterSlice";
import LoadingReducer from "./Slices/loadingSlice";
import userReducer from "./Slices/CheckUser";
import OtpReducer from "./Slices/OtpSlice";
import SignupReducer from "./Slices/SignupSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    register: RegisterReducer,
    user: userReducer,
    loading: LoadingReducer,
    otp: OtpReducer,
    signup: SignupReducer,
  },
});

// export * from "./Actions";
// export * from "./Slices";

export default store;
