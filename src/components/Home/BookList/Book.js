import './Book.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../../../redux/books/booksSlice';

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
