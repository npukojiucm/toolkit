import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesList: {},
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favouritesList = {
        ...state.favouritesList,
        [action.payload["imdbID"]]: action.payload,
      };

      const storage = localStorage.getItem("favourite"),
        storageFavourites = JSON.parse(storage);

      localStorage.setItem(
        "favourite",
        JSON.stringify({
          ...storageFavourites,
          ...state.favouritesList,
        })
      );
    },
    
    delFavourite: (state, action) => {
      delete state.favouritesList[action.payload];
      state.favouritesList = {
        ...state.favouritesList,
      };

      const storage = localStorage.getItem("favourite"),
        storageFavourites = JSON.parse(storage);

      delete storageFavourites[action.payload];

      localStorage.setItem(
        "favourite",
        JSON.stringify({
          ...storageFavourites,
          ...state.favouritesList,
        })
      );
    },
  },
});

export const { addFavourite, delFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
