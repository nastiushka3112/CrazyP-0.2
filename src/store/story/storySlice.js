import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyBook: {
    genre: null,
    theme: null,
    favoriteCharacter: null,
    timeOfSetting: null,
    placeOfSetting: null,
    amountCharacter: 0,
    pointOfView: null,
    conflict: null,
    plot: null,
    designPrompt: null,
  },
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    addGenre(state, action) {
      state.storyBook.genre = action.payload;
    },
    addThemeStory(state, action) {
      state.storyBook.theme = action.payload;
    },
    addStoryInfoStep2(state, action) {
      const data = action.payload;
      state.storyBook.favoriteCharacter = data.FavoriteCharter;
      state.storyBook.timeOfSetting = data.TimeOfSettings;
      state.storyBook.placeOfSetting = data.PlaceOfSettings;
      state.storyBook.amountCharacter = data.AmountCharacter;
      state.storyBook.pointOfView = data.PointOfView;
      state.storyBook.conflict = data.Conflict;
      state.storyBook.plot = data.AutoPlot;
    },
    addStoryInfoStep3(state, action) {
      const data = action.payload;
      state.storyBook.designPrompt = data.CoverDesign;
    },
  },
});

export const { addGenre, addThemeStory, addStoryInfoStep2, addStoryInfoStep3 } =
  helpersSlice.actions;

export default helpersSlice.reducer;
