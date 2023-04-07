import './Book.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, deleteBook } from '../../../redux/books/booksSlice';
import progressBar from '../../../assets/progress-bar.png';

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
      <div className="book-list-item-left">
        <p className="book-list-item-category">
          {book.category ? book.category : 'No Category Added'}
        </p>
        <p className="book-list-item-title">
          {book.title}
        </p>
        <p className="book-list-item-author">
          {book.author}
        </p>
        <ul className="book-list-item-action-list">
          <li className="book-list-item-action-list-item"><button type="submit">Comments</button></li>
          <hr />
          <li className="book-list-item-action-list-item">
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
          <hr />
          <li className="book-list-item-action-list-item"><button type="submit">Edit</button></li>
        </ul>
      </div>

      <div className="book-list-item-right">
        <div className="book-list-item-right-left">
          <img src={progressBar} alt="progress bar" className="book-list-item-right-left-shape" />
          <div className="book-list-item-right-left-right">
            <p className="percentage">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr />
        <div className="book-list-item-right-right">
          <p className="chapter-heading">Current Chapter</p>
          <p className="chapter-current">Chapter 17</p>
          <button type="submit" className="btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
}

export default Book;
