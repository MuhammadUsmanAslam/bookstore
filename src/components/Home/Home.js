import './Home.css';
import NewBookForm from './NewBookForm/NewBookForm';
import BookList from './BookList/BookList';

function Home() {
  return (
    <div className="home">
      <NewBookForm />
      <BookList />
    </div>
  );
}

export default Home;
