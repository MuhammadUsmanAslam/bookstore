import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [{ title: 'Title 1', author: 'author 00100', id: 0 },
    { title: 'Title 00200', author: 'author 2', id: 1 },
    { title: 'Title 00300', author: 'author 3', id: 2 }],
};

const booksSlice = createSlice(
  {
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action) => {
        const newBook = action.payload;
        state.books.push(newBook);
      },
      removeBook: (state, action) => {
        const idToRemove = action.payload;
        let newArr = state.books.filter((book) => book.id !== idToRemove);
        newArr = newArr.map((newArrItem, index) => ({
          ...newArrItem,
          id: index,
        }));
        return {
          ...state,
          books: [...newArr],
        };
      },
    },
  },
);

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
