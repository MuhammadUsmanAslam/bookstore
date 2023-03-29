import { useState } from 'react';
import './Home.css';

function Home() {
  const [books, setBooks] = useState([{ title: 'Title 1', author: 'author 1', id: 0 }, { title: 'Title 2', author: 'author 2', id: 1 }, { title: 'Title 3', author: 'author 3', id: 2 }]);

  const [newBook, setNewBook] = useState({ title: '', author: '', id: -1 });

  return (
    <div className="home">
      <form>
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
          className="home__add-book-btn"
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
      <ul>
        {
          books.map((book) => (
            <li className="home__book" key={book.id}>
              <p>
                Title:
                {book.title}
              </p>

              <p>
                Author:
                {book.author}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Home;
