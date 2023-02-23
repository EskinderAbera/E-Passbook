import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
}

const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
    }
})

const { reducer, actions } = LoadingSlice;
export const { setLoading } = actions
export default reducer;