import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneNumber: null,
    password: null,
}

const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setPhoneNumber: (state, { payload }) => {
            state.phoneNumber = payload;
        },
    }
})

const { reducer, actions } = RegisterSlice;
export const { setPhoneNumber } = actions
export default reducer;