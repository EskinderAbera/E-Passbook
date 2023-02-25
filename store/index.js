import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/Accounts";
import RegisterReducer from "./Slices/RegisterSlice";
import LoadingReducer from "./Slices/loadingSlice";
import userReducer from "./Slices/CheckUser";
import OtpReducer from "./Slices/OtpSlice";
import SignupReducer from "./Slices/SignupSlice";
import onBoardingReducer from './Slices/OnBoardingSlice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    register: RegisterReducer,
    user: userReducer,
    loading: LoadingReducer,
    onBoard: onBoardingReducer,
    otp: OtpReducer,
    signup: SignupReducer,
  },
});

// export * from "./Actions";
export * from "./Slices";

export default store;
