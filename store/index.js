import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Slices/Accounts";
import userReducer from "./Slices/CheckUser";

const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer,
  },
});

// export * from "./Actions";
// export * from "./Slices";

export default store;
