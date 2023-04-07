import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TA6UzqHdqwDA0zqZ9dLf/books';

// Fetch all Books
export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

// Add new Book
export const addNewBook = createAsyncThunk('book/addNewBook', async (newBookToBeAdded) => {
  try {
    const res = await axios.post(URL, newBookToBeAdded);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

// delete Book
export const deleteBook = createAsyncThunk('book/deleteBook', async (bookId) => {
  try {
    const res = await axios.delete(`${URL}/${bookId}`);
    return res.data;
  } catch (error) {
    return error.message;
  }
});

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
        let newArr = state.books.filter((book) => book.item_id !== idToRemove);
        newArr = newArr.map((newArrItem, index) => ({
          ...newArrItem,
          item_id: index,
        }));
        return {
          ...state,
          books: [...newArr],
        };
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }
      )).addCase(fetchBooks.fulfilled, (state, action) => {
        const loadedBooks = action.payload;
        const refactoredBooks = [];
        Object.keys(loadedBooks).forEach((book) => refactoredBooks.push({
          item_id: book,
          title: loadedBooks[book][0].title,
          author: loadedBooks[book][0].author,
          category: loadedBooks[book][0].category,
        }));
        return {
          ...state,
          isLoading: false,
          error: '',
          books: refactoredBooks,
        };
      }).addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        books: [],
        error: action.error.message,
      })).addCase(addNewBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
        .addCase(addNewBook.fulfilled, (state) => ({
          ...state,
          isBookAdded: true,
        }))
        .addCase(deleteBook.pending, (state) => ({
          ...state,
          idBookDeleted: false,
        }))
        .addCase(deleteBook.fulfilled, (state) => ({
          ...state,
          idBookDeleted: true,
        }));
    },

  },
);

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
