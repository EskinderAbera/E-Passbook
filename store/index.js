import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './Slices/Accounts';
import RegisterReducer from './Slices/RegisterSlice';

const store = configureStore({
    reducer: {
        account: accountReducer,
        register: RegisterReducer,
        user: userReducer,
    },
});

// export * from "./Actions";
// export * from "./Slices";

export default store;
