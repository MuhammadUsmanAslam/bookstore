import './BookList.css';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  const { books } = props;

  BookList.propTypes = {
    books: PropTypes.arrayOf.isRequired,
  };

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
