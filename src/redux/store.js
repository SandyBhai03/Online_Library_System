import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Slices/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
