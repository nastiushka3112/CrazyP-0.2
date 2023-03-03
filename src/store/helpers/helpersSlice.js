import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  burger: false,
  mobile: true,
  page: null,
  step: 0,
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
    setPage(state, action) {
      state.page = action.payload;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
  },
});

export const { openModal, addMobile, openBurger, setPage, setStep } =
  helpersSlice.actions;

export default helpersSlice.reducer;
