import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteList: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteList = [...state.favouriteList, action.payload];
      localStorage.setItem("favourite", JSON.stringify(state.favouriteList))
    },
    delFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter((film) => film.imdbID !== action.payload);
    },
  },
});

export const { addFavourite, delFavourite } = favouriteSlice.actions
export default favouriteSlice.reducer;
