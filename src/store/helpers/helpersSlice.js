import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  burger: false,
  mobile: true,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
    addMobile(state, action) {
      state.mobile = action.payload;
    },
    openBurger(state, action) {
      state.burger = action.payload;
    },
  },
});

export const { openModal, addMobile, openBurger } = helpersSlice.actions;

export default helpersSlice.reducer;
