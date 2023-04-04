import './BookList.css';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { books } = useSelector((state) => state.books);

  return (
    <ul className="book-list">
      {
        books.map((book) => (
          <Book book={book} key={book.id} />
        ))
      }
    </ul>
  );
}

export default BookList;
