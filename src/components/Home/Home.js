import { useState } from 'react';
import './Home.css';
import NewBookForm from './NewBookForm/NewBookForm';
import BookList from './BookList/BookList';

function Home() {
  const [books, setBooks] = useState([{ title: 'Title 1', author: 'author 1', id: 0 },
    { title: 'Title 2', author: 'author 2', id: 1 },
    { title: 'Title 3', author: 'author 3', id: 2 }]);

  return (
    <div className="home">
      <NewBookForm books={books} setBooks={setBooks} />
      <BookList books={books} />
    </div>
  );
}

export default Home;
