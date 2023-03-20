import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/Accounts";
import RegisterReducer from "./Slices/RegisterSlice";
import LoadingReducer from "./Slices/loadingSlice";
import userReducer from "./Slices/CheckUser";
import OtpReducer from "./Slices/OtpSlice";
import SignupReducer from "./Slices/SignupSlice";
import onBoardingReducer from "./Slices/OnBoardingSlice";
import AccountsReducer from "./Slices/HomeSlice";
import SetUserInfoReducer from "./Slices/UserInfoSlice";
import donationReducer from "./Slices/DonationSlice";
import TransactionReducer from "./Slices/TransactionSlice";
import ExpenseReducer from "./Slices/ExpenseSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    register: RegisterReducer,
    user: userReducer,
    loading: LoadingReducer,
    onBoard: onBoardingReducer,
    otp: OtpReducer,
    signup: SignupReducer,
    accounts: AccountsReducer,
    userInfo: SetUserInfoReducer,
    donation: donationReducer,
    transactions: TransactionReducer,
    expense: ExpenseReducer,
  },
});

export * from "./Slices";

export default store;
