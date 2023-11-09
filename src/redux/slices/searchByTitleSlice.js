import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchList: [],
  totalPages: null,
  loading: "",
};

export const fetchFilms = createAsyncThunk(
  "films/fetchSearchList",
  async ({page = 1, searchString}, { rejectWithValue }) => {
    try {
      let pages;

      const response = await fetch(
        import.meta.env.VITE_API_URL + "s=" + searchString + "&page=" + page
      );

      const data = await response.json();

      if (data.Response === "False") return rejectWithValue("error");

      if (+data.totalResults <= 10) pages = 1;
      else if (+data.totalResults % 10 === 0) pages = +data.totalResults / 10;
      else pages = (+data.totalResults - (+data.totalResults % 10)) / 10 + 1;

      console.log(pages);

      return {
        list: data.Search,
        pages,
      };
    } catch (e) {
      return "string";
    }
  }
);

const searchByTitleSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.searchList = action.payload.list
        state.loading = "succes"
        state.totalPages = action.payload.pages

      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.loading = action.payload;
      });
  },
});

export default searchByTitleSlice.reducer;
