import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
  showMenu: false,
};

const searchStringSlice = createSlice({
  name: "searchString",
  initialState,
  reducers: {
    setString: (state, action) => {
      state.searchString = action.payload;
    },

    clearString: (state, action) => {
      state.searchString = action.payload;
    },

    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
  },
});

export const { setString, clearString, setShowMenu } = searchStringSlice.actions;

export default searchStringSlice.reducer;
