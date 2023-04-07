import './Home.css';
import BookList from './BookList/BookList';
import NewBookForm from './NewBookForm/NewBookForm';

function Home() {
  return (
    <div className="home">
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default Home;
