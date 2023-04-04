import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/books/booksSlice';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;

  Book.propTypes = {
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  const dispatch = useDispatch();

  return (
    <li className="book-list-item" key={book.id}>
      <p>
        Title:
        {book.title}
        <br />
        Author:
        {book.author}
      </p>
      <button
        onClick={() => {
          dispatch(removeBook(book.id));
        }}
        type="submit"
      >
        Remove
      </button>
    </li>
  );
}

export default Book;
