import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './Slices/Accounts';

const store = configureStore({
    reducer: {
        account: accountReducer
    },
});

export * from './Actions';
export * from './Slices';

export default store;