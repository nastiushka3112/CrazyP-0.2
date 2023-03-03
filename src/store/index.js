import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import storySlice from "./story";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    story: storySlice,
  },
});
