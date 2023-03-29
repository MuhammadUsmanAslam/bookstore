import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/">Bookstore</Link>
      <ul className="header__nav">
        <li><Link className="header__nav-link" to="/">Home</Link></li>
        <li><Link className="header__nav-link" to="/categories">Categories</Link></li>
      </ul>
    </div>
  );
}

export default Header;
