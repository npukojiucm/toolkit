import { configureStore } from "@reduxjs/toolkit";
import searchByTitleSlice from "./slices/searchByTitleSlice";
import favouriteSlice from "./slices/favouriteSlice";
import searchString from "./slices/searchString";

export const store = configureStore({
  reducer: {
    searchByTitle: searchByTitleSlice,
    favourite: favouriteSlice,
    searchString,
  },
});
