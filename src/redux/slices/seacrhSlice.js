import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  listFilms: [],
  loading: false,
  error: false,
};

export const fetchFilms = createAsyncThunk(
  "films/fetchSearchList",
  async (searchString) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "s=" + searchString
      );
      const data = await response.json();

      const listById = data.Search.map(async (film) => {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "i=" + film.imdbID
        );
        const data = await response.json();
        return data;
      });

      return Promise.all(listById)
    } catch (e) {
      return e;
    }
  }
);

// const listById = data.Search.map(async film => {
//   return await fetch(import.meta.env.VITE_API_URL + "i=" + film.imdbID)
//   .then(response => response.json())
//   .then(data => data)
// })

// return await listById
// data.Search.forEach(async film => {
//   return await fetch(import.meta.env.VITE_API_URL + "i=" + film.imdbID)
//     .then(response => response.json())
//     .then(data => listFilms.push(...[data]))

// })

// if (data.totalResults % 10 > 0)
//   pages = (data.totalResults - (data.totalResults % 10)) / 10 + 1;
// else pages = data.totalResults % 10;

// counter = 2;
// while (counter <= pages) {
//   try {
//     const response = await fetch(import.meta.env.VITE_API_URL + "s=" + searchString + `&page=${counter}`);
//     data = await response.json()

//     listFilms.push(...data.Search);
//   } catch (e) {
//     return e;
//   }

//   counter++;
// }

// return await fetch(import.meta.env.VITE_API_URL + "s=" + searchString)
// .then((res) =>
//   res.json()
// );

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      // console.log(action.payload.Search);
      state.listFilms = action.payload;
    }),
});

export default searchSlice.reducer;
