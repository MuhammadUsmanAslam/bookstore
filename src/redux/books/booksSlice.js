import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice(
  {
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        state.books.push(action.payload.newBook);
      },
      removeBook: (state, action) => {
        state.books.splice(action.payload.id, 1);
      },
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
