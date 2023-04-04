import './NewBookForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../../redux/books/booksSlice';

function NewBookForm() {
  const [newBook, setNewBook] = useState({ title: '', author: '', id: -1 });

  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

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
            dispatch(addBook({ title: newBook.title, author: newBook.author, id: books.length }));
            setNewBook({ title: '', author: '', id: -1 });
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
