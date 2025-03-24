// ~~~~~~~~~~  Add new added books in local storage CODE Here ~~~~~~~~~
import { createSlice } from "@reduxjs/toolkit";

// Load books from localStorage or fallback to BooksData.js
const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

const initialState = {
  books: storedBooks.length > 0 ? storedBooks : [], // Load from localStorage
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.books)); // Save to localStorage
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem("books", JSON.stringify(state.books)); // Update localStorage
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

// ~~~~~~~~bookSLice simple code Here ~~~~~~~~~

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   books: [], // ✅ Ensure initial books state exists
// };

// const booksSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     addBook: (state, action) => {
//       state.books.push({ id: Date.now(), ...action.payload }); // ✅ Ensure book has a unique ID
//     },
//   },
// });

// export const { addBook } = booksSlice.actions;
// export default booksSlice.reducer;
