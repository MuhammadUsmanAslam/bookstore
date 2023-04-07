import './NewBookForm.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addNewBook } from '../../../redux/books/booksSlice';

function NewBookForm() {
  const [newBook, setNewBook] = useState({
    title: '', author: '', item_id: -1, category: '',
  });

  const dispatch = useDispatch();

  return (
    <form className="new-book-form">
      <hr />
      <h2>Add New Book</h2>
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
      <input
        type="text"
        placeholder="Book Category"
        value={newBook.category}
        onChange={(e) => {
          setNewBook({ ...newBook, category: e.target.value });
        }}
      />
      <button
        className="btn new-book-form--add-book-btn"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const newBookToAdd = {
            ...newBook,
            item_id: uuidv4(),
          };
          if (newBook.title && newBook.author && newBook.category) {
            dispatch(addNewBook(newBookToAdd))
              .then(() => {
                dispatch(addBook(newBookToAdd));
                setNewBook({
                  title: '', author: '', item_id: -1, category: '',
                });
              });
          } else {
            alert('Please Add a book first');
          }
        }}
      >
        ADD BOOK
      </button>
    </form>
  );
}

export default NewBookForm;
