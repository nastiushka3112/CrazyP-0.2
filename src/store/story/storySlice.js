import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: null,
  theme: false,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    addGenre(state, action) {
      state.genre = action.payload;
    },
    addThemeStory(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { addGenre, addThemeStory } = helpersSlice.actions;

export default helpersSlice.reducer;
