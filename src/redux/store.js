import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/seacrhSlice";
import favouriteSlice from "./slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    favourite: favouriteSlice,
  },
});
