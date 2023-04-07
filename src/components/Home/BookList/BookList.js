import { useEffect } from 'react';
import './BookList.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../../redux/books/booksSlice';
import Book from './Book';

function BookList() {
  const { books, error, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <ul className="book-list">
      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}
      {books && books.map((book) => (
        <Book book={book} key={book.item_id} />
      ))}
    </ul>
  );
}

export default BookList;
