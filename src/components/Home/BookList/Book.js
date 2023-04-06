import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../../../redux/books/booksSlice';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;

  Book.propTypes = {
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  const dispatch = useDispatch();

  const removeBookFromList = (idOfBook) => {
    dispatch(deleteBook(idOfBook))
      .then(dispatch(removeBook(idOfBook)));
  };

  return (
    <li className="book-list-item">
      <p>
        Title:
        {book.title}
      </p>

      <p>
        Author:
        {book.author}
      </p>
      <button
        onClick={() => {
          const bookId = book.item_id;
          removeBookFromList(bookId);
        }}
        type="submit"
      >
        Remove
      </button>
    </li>
  );
}

export default Book;
