import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donations: [],
};

const DonationSlice = createSlice({
  name: "donations",
  initialState,
  reducers: {
    setDonations: (state, { payload }) => {
      state.donations = payload;
    },
  },
});

const { reducer, actions } = DonationSlice;
export const { setDonations } = actions;
export default reducer;
