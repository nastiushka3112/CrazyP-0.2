import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyBook: {
    genre: [],
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
  toggle: 0,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    addGenre(state, action) {
      const data = [];
			data.push(action.payload)
			state.storyBook.genre = [...data]
		},
    addThemeStory(state, action) {
      state.storyBook.theme = action.payload.ThemeOfStory;
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
		toggle(state, action) {
      const selected = state.toggle;
      if (selected > 1) {
        state.toggle = 0;
      } else {
        state.toggle = selected + 1;
      }
    },
		clearToggle(state, action) {
			state.toggle = 2
		},
  },
});

export const { addGenre, addThemeStory, addStoryInfoStep2, addStoryInfoStep3, toggle, clearToggle } =
  helpersSlice.actions;

export default helpersSlice.reducer;
