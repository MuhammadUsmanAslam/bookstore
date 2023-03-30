import './NewBookForm.css';
import { useState } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

function NewBookForm(props) {
  const { books, setBooks } = props;

  const [newBook, setNewBook] = useState({ title: '', author: '', id: -1 });

  NewBookForm.propTypes = {
    books: PropTypes.arrayOf.isRequired,
    setBooks: PropTypes.func.isRequired,
  };

  return (
    <form className="new-book-form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Book Title"
        value={newBook.title}
        onChange={(e) => {
          setNewBook({ ...newBook, title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Book Author"
        value={newBook.author}
        onChange={(e) => {
          setNewBook({ ...newBook, author: e.target.value });
        }}
      />
      <button
        className="new-book-form--add-book-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (newBook.title && newBook.author) {
            setNewBook({ ...newBook, id: books.length });
            setBooks([...books, newBook]);
            setNewBook({ title: '', author: '', id: 0 });
          } else {
            alert('Please Add a book first');
          }
        }}
      >
        Add Book
      </button>
    </form>
  );
}

export default NewBookForm;
