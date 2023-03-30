// eslint-disable-next-line
import PropTypes from 'prop-types';

function Book(props) {
  const { book } = props;

  Book.propTypes = {
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  return (
    <li className="book-list-item" key={book.id}>
      <p>
        Title:
        {book.title}
      </p>

      <p>
        Author:
        {book.author}
      </p>
    </li>
  );
}

export default Book;
